#!/usr/bin/env node
/**
 * FCS Content Audit Script
 *
 * Analyzes all pages in the FCS site and generates a comprehensive SEO/content audit report.
 *
 * Usage:
 *   node scripts/audit-content.js
 *
 * Output:
 *   - seo/content-audit-report.json (detailed report)
 *   - Console summary of findings
 */

const fs = require('fs');
const path = require('path');

const APP_DIR = path.join(__dirname, '..', 'app');
const OUTPUT_DIR = path.join(__dirname, '..', 'seo');

// Services and locations from constants
const SERVICES = [
  'commercial-construction',
  'multi-family-construction',
  'disaster-recovery',
  'historic-restoration',
  'luxury-custom-homes',
  'balcony-reconstruction',
  'exterior-waterproofing'
];

const LOCATIONS = [
  'tampa',
  'st-petersburg',
  'clearwater',
  'lakeland',
  'sarasota',
  'bradenton',
  'brandon',
  'ruskin'
];

// Audit results storage
const auditResults = {
  summary: {
    totalPages: 0,
    serviceLocationPages: 0,
    locationHubPages: 0,
    serviceHubPages: 0,
    articlePages: 0,
    otherPages: 0,
    pagesWithIssues: 0,
    avgWordCount: 0,
    avgFaqCount: 0,
    duplicateContentRisk: 0
  },
  issues: {
    thinContent: [],
    duplicateContent: [],
    missingSchema: [],
    missingBreadcrumb: [],
    missingFaq: [],
    truncatedContent: [],
    lowInternalLinks: []
  },
  pagesByCategory: {
    serviceLocation: [],
    locationHub: [],
    serviceHub: [],
    article: [],
    other: []
  },
  allPages: []
};

/**
 * Analyze a single page file
 */
function analyzePage(pagePath, relativePath) {
  const content = fs.readFileSync(pagePath, 'utf-8');
  const slug = relativePath.replace(/\/page\.tsx$/, '').replace(/^\//, '');

  const analysis = {
    slug: slug || 'home',
    path: relativePath,
    wordCount: 0,
    hasLocalBusinessSchema: false,
    hasServiceSchema: false,
    hasFAQSchema: false,
    hasBreadcrumb: false,
    faqCount: 0,
    internalLinkCount: 0,
    category: 'other',
    issues: [],
    contentScore: 0
  };

  // Determine category
  if (SERVICES.some(s => slug.startsWith(s + '-') && LOCATIONS.some(l => slug.endsWith('-' + l)))) {
    analysis.category = 'serviceLocation';
  } else if (slug.startsWith('locations/') && slug !== 'locations') {
    analysis.category = 'locationHub';
  } else if (SERVICES.includes(slug) || slug.endsWith('-preservation') || slug.endsWith('-homes')) {
    analysis.category = 'serviceHub';
  } else if (slug.length > 30 || slug.includes('-in-') || slug.includes('-for-')) {
    analysis.category = 'article';
  }

  // Count words (rough estimate from JSX content)
  const textContent = content
    .replace(/<[^>]*>/g, ' ')
    .replace(/\{[^}]*\}/g, ' ')
    .replace(/import[^;]+;/g, '')
    .replace(/export[^{]+{/g, '')
    .replace(/const\s+\w+\s*=/g, '')
    .replace(/['"]\s*['"]/g, ' ')
    .replace(/\s+/g, ' ');
  analysis.wordCount = textContent.split(/\s+/).filter(w => w.length > 2).length;

  // Check for schema components
  analysis.hasLocalBusinessSchema = content.includes('LocalBusinessSchema');
  analysis.hasServiceSchema = content.includes('ServiceSchema');
  analysis.hasFAQSchema = content.includes('FAQSchema') || content.includes('FAQWithSchema');
  analysis.hasBreadcrumb = content.includes('Breadcrumb');

  // Count FAQs
  const faqMatches = content.match(/question:\s*["'`]/g);
  analysis.faqCount = faqMatches ? faqMatches.length : 0;

  // Count internal links (rough estimate)
  const linkMatches = content.match(/href=["']\/[^"']+["']/g);
  analysis.internalLinkCount = linkMatches ? linkMatches.length : 0;

  // Check for truncated content indicators
  const hasTruncation = content.includes('...') &&
    (content.includes('Redirecting') ||
     content.match(/\.\.\.\s*["'`]/) ||
     analysis.wordCount < 200);

  // Identify issues
  if (analysis.wordCount < 500 && analysis.category !== 'other') {
    analysis.issues.push('thin_content');
  }

  if (!analysis.hasLocalBusinessSchema) {
    analysis.issues.push('missing_local_business_schema');
  }

  if (!analysis.hasBreadcrumb && analysis.category !== 'other') {
    analysis.issues.push('missing_breadcrumb');
  }

  if (analysis.faqCount === 0 && ['serviceLocation', 'locationHub', 'serviceHub'].includes(analysis.category)) {
    analysis.issues.push('missing_faq');
  }

  if (analysis.internalLinkCount < 5 && analysis.category !== 'other') {
    analysis.issues.push('low_internal_links');
  }

  if (hasTruncation) {
    analysis.issues.push('truncated_content');
  }

  // Calculate content score (1-5)
  let score = 3;
  if (analysis.wordCount >= 1500) score += 1;
  else if (analysis.wordCount < 500) score -= 1;

  if (analysis.hasLocalBusinessSchema && analysis.hasServiceSchema) score += 0.5;
  if (analysis.hasFAQSchema && analysis.faqCount >= 5) score += 0.5;
  if (analysis.hasBreadcrumb) score += 0.5;
  if (analysis.internalLinkCount >= 10) score += 0.5;
  if (analysis.issues.length > 2) score -= 1;

  analysis.contentScore = Math.max(1, Math.min(5, Math.round(score)));

  return analysis;
}

/**
 * Check for duplicate content between service-location pages
 */
function checkDuplicateContent(pages) {
  const serviceLocationPages = pages.filter(p => p.category === 'serviceLocation');
  const duplicateGroups = {};

  // Group by service
  SERVICES.forEach(service => {
    const servicePages = serviceLocationPages.filter(p => p.slug.startsWith(service));
    if (servicePages.length > 1) {
      // Compare word counts - if all very similar, likely duplicate
      const wordCounts = servicePages.map(p => p.wordCount);
      const avgCount = wordCounts.reduce((a, b) => a + b, 0) / wordCounts.length;
      const variance = wordCounts.reduce((acc, val) => acc + Math.pow(val - avgCount, 2), 0) / wordCounts.length;

      // Low variance = likely templated/duplicate content
      if (variance < 1000) {
        duplicateGroups[service] = {
          pages: servicePages.map(p => p.slug),
          avgWordCount: Math.round(avgCount),
          variance: Math.round(variance),
          riskLevel: variance < 100 ? 'high' : variance < 500 ? 'medium' : 'low'
        };
      }
    }
  });

  return duplicateGroups;
}

/**
 * Main audit function
 */
async function runAudit() {
  console.log('Starting FCS Content Audit...\n');

  // Find all page.tsx files
  const pageFiles = [];

  function findPages(dir, basePath = '') {
    const items = fs.readdirSync(dir);
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const relativePath = path.join(basePath, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        // Skip special Next.js directories
        if (!item.startsWith('_') && !item.startsWith('.') && item !== 'api') {
          findPages(fullPath, relativePath);
        }
      } else if (item === 'page.tsx') {
        pageFiles.push({
          fullPath,
          relativePath: basePath
        });
      }
    }
  }

  findPages(APP_DIR);
  console.log(`Found ${pageFiles.length} pages to analyze\n`);

  // Analyze each page
  let totalWordCount = 0;
  let totalFaqCount = 0;

  for (const { fullPath, relativePath } of pageFiles) {
    const analysis = analyzePage(fullPath, '/' + relativePath);
    auditResults.allPages.push(analysis);

    // Categorize
    auditResults.pagesByCategory[analysis.category].push(analysis);

    // Track issues
    for (const issue of analysis.issues) {
      const issueKey = issue.replace(/_/g, '');
      if (issue === 'thin_content') auditResults.issues.thinContent.push(analysis.slug);
      if (issue === 'missing_local_business_schema') auditResults.issues.missingSchema.push(analysis.slug);
      if (issue === 'missing_breadcrumb') auditResults.issues.missingBreadcrumb.push(analysis.slug);
      if (issue === 'missing_faq') auditResults.issues.missingFaq.push(analysis.slug);
      if (issue === 'truncated_content') auditResults.issues.truncatedContent.push(analysis.slug);
      if (issue === 'low_internal_links') auditResults.issues.lowInternalLinks.push(analysis.slug);
    }

    totalWordCount += analysis.wordCount;
    totalFaqCount += analysis.faqCount;

    if (analysis.issues.length > 0) {
      auditResults.summary.pagesWithIssues++;
    }
  }

  // Check for duplicate content
  const duplicateGroups = checkDuplicateContent(auditResults.allPages);
  auditResults.issues.duplicateContent = duplicateGroups;
  auditResults.summary.duplicateContentRisk = Object.keys(duplicateGroups).length;

  // Calculate summary stats
  auditResults.summary.totalPages = pageFiles.length;
  auditResults.summary.serviceLocationPages = auditResults.pagesByCategory.serviceLocation.length;
  auditResults.summary.locationHubPages = auditResults.pagesByCategory.locationHub.length;
  auditResults.summary.serviceHubPages = auditResults.pagesByCategory.serviceHub.length;
  auditResults.summary.articlePages = auditResults.pagesByCategory.article.length;
  auditResults.summary.otherPages = auditResults.pagesByCategory.other.length;
  auditResults.summary.avgWordCount = Math.round(totalWordCount / pageFiles.length);
  auditResults.summary.avgFaqCount = Math.round(totalFaqCount / pageFiles.length * 10) / 10;

  // Print summary
  console.log('=== AUDIT SUMMARY ===\n');
  console.log(`Total Pages: ${auditResults.summary.totalPages}`);
  console.log(`  - Service-Location Pages: ${auditResults.summary.serviceLocationPages}`);
  console.log(`  - Location Hub Pages: ${auditResults.summary.locationHubPages}`);
  console.log(`  - Service Hub Pages: ${auditResults.summary.serviceHubPages}`);
  console.log(`  - Article Pages: ${auditResults.summary.articlePages}`);
  console.log(`  - Other Pages: ${auditResults.summary.otherPages}`);
  console.log(`\nContent Metrics:`);
  console.log(`  - Average Word Count: ${auditResults.summary.avgWordCount}`);
  console.log(`  - Average FAQ Count: ${auditResults.summary.avgFaqCount}`);
  console.log(`  - Pages with Issues: ${auditResults.summary.pagesWithIssues}`);

  console.log('\n=== ISSUES FOUND ===\n');
  console.log(`Thin Content (<500 words): ${auditResults.issues.thinContent.length} pages`);
  console.log(`Missing LocalBusinessSchema: ${auditResults.issues.missingSchema.length} pages`);
  console.log(`Missing Breadcrumb: ${auditResults.issues.missingBreadcrumb.length} pages`);
  console.log(`Missing FAQ: ${auditResults.issues.missingFaq.length} pages`);
  console.log(`Truncated Content: ${auditResults.issues.truncatedContent.length} pages`);
  console.log(`Low Internal Links (<5): ${auditResults.issues.lowInternalLinks.length} pages`);

  console.log('\n=== DUPLICATE CONTENT RISK ===\n');
  for (const [service, data] of Object.entries(duplicateGroups)) {
    console.log(`${service}: ${data.riskLevel.toUpperCase()} risk`);
    console.log(`  - ${data.pages.length} pages with avg ${data.avgWordCount} words`);
    console.log(`  - Variance: ${data.variance} (low = likely duplicate)`);
  }

  // Save detailed report
  const outputPath = path.join(OUTPUT_DIR, 'content-audit-report.json');
  fs.writeFileSync(outputPath, JSON.stringify(auditResults, null, 2));
  console.log(`\nDetailed report saved to: ${outputPath}`);

  // Generate action items
  console.log('\n=== RECOMMENDED ACTIONS ===\n');
  console.log('1. CRITICAL: Rewrite all 56 service-location pages with unique content');
  console.log('   - Current pages are 98%+ duplicate (only city name differs)');
  console.log('   - Target: 1,500+ words with local-specific content');
  console.log('');
  console.log('2. HIGH: Enhance location hub pages (8 pages)');
  console.log('   - Add local climate, building code, and market content');
  console.log('   - Target: 1,200+ words');
  console.log('');
  console.log('3. HIGH: Fix thin content articles');
  console.log(`   - ${auditResults.issues.thinContent.length} pages need expansion to 1,500+ words`);
  console.log('');
  console.log('4. MEDIUM: Add FAQSchema to pages missing it');
  console.log(`   - ${auditResults.issues.missingFaq.length} service pages need unique FAQs`);
  console.log('');
  console.log('5. MEDIUM: Improve internal linking');
  console.log(`   - ${auditResults.issues.lowInternalLinks.length} pages have fewer than 5 internal links`);
  console.log('   - Target: 10-15 internal links per page');

  return auditResults;
}

// Run the audit
runAudit().catch(console.error);
