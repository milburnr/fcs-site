#!/usr/bin/env node
/**
 * Triage Thin Content Script
 * Analyzes all pages and categorizes them by content quality
 *
 * Categories:
 * - placeholder: "Redirecting..." pages (< 50 words)
 * - truncated: Content appears cut off (100-300 words, ends abruptly)
 * - thin: Has topic focus but lacks depth (300-500 words)
 * - adequate: Basic content (500-700 words)
 * - good: Well-developed (700-1000 words)
 * - excellent: Comprehensive (1000+ words)
 *
 * Usage: node scripts/triage-thin-content.js
 */

const fs = require('fs');
const path = require('path');

const APP_DIR = path.join(__dirname, '../app');
const OUTPUT_FILE = path.join(__dirname, '../thin-content-report.json');

// Patterns that indicate placeholder content
const PLACEHOLDER_PATTERNS = [
  /Redirecting\.\.\./i,
  /Loading\.\.\./i,
  /Coming soon/i,
  /Under construction/i,
  /Page not found/i,
];

// Patterns that indicate truncated content
const TRUNCATION_PATTERNS = [
  /\.\.\."?\s*$/,  // Ends with ellipsis
  /\w{3,}\s*$/,    // Ends mid-word (no punctuation)
];

// Hub pages that should be comprehensive
const HUB_PAGE_PATTERNS = [
  /^\/commercial\/?$/,
  /^\/residential\/?$/,
  /^\/services\/?$/,
  /^\/about\/?$/,
  /^\/contact\/?$/,
];

// Service-location page patterns
const SERVICE_LOCATION_PATTERN = /^\/(commercial-construction|multi-family-construction|disaster-recovery|historic-restoration|luxury-custom-homes|balcony-reconstruction|exterior-waterproofing)-(tampa|st-petersburg|clearwater|lakeland|sarasota|bradenton|brandon|ruskin)\/?$/;

function extractTextFromTsx(content) {
  // Remove import statements
  content = content.replace(/^import\s+.*?;?\s*$/gm, '');

  // Remove TypeScript types and interfaces
  content = content.replace(/interface\s+\w+\s*{[^}]*}/gs, '');
  content = content.replace(/type\s+\w+\s*=\s*[^;]+;/g, '');

  // Remove export const metadata
  content = content.replace(/export const metadata[^}]+\};/gs, '');

  // Extract text content from JSX
  // Remove JSX tags but keep text content
  content = content.replace(/<[^>]+>/g, ' ');

  // Remove JavaScript/TypeScript code blocks
  content = content.replace(/\{[^}]*\}/g, ' ');

  // Remove remaining code patterns
  content = content.replace(/const\s+\w+\s*=/g, '');
  content = content.replace(/function\s+\w+/g, '');
  content = content.replace(/className="[^"]*"/g, '');
  content = content.replace(/href="[^"]*"/g, '');

  // Clean up whitespace
  content = content.replace(/\s+/g, ' ').trim();

  return content;
}

function countWords(text) {
  return text.split(/\s+/).filter(word => word.length > 2).length;
}

function detectPlaceholder(content) {
  for (const pattern of PLACEHOLDER_PATTERNS) {
    if (pattern.test(content)) {
      return true;
    }
  }
  return false;
}

function detectTruncation(content) {
  const textContent = extractTextFromTsx(content);
  for (const pattern of TRUNCATION_PATTERNS) {
    if (pattern.test(textContent)) {
      return true;
    }
  }
  return false;
}

function extractMetadata(content) {
  const titleMatch = content.match(/title:\s*["']([^"']+)["']/);
  const descriptionMatch = content.match(/description:\s*["']([^"']+)["']/);

  return {
    title: titleMatch ? titleMatch[1] : null,
    description: descriptionMatch ? descriptionMatch[1] : null,
  };
}

function categorizeContent(wordCount, isPlaceholder, isTruncated) {
  if (isPlaceholder || wordCount < 50) {
    return 'placeholder';
  }
  if (isTruncated || (wordCount < 300 && wordCount > 50)) {
    return 'truncated';
  }
  if (wordCount < 500) {
    return 'thin';
  }
  if (wordCount < 700) {
    return 'adequate';
  }
  if (wordCount < 1000) {
    return 'good';
  }
  return 'excellent';
}

function getPageType(slug) {
  if (SERVICE_LOCATION_PATTERN.test(slug)) {
    return 'service-location';
  }
  if (HUB_PAGE_PATTERNS.some(p => p.test(slug))) {
    return 'hub';
  }
  if (slug.includes('faq') || slug.includes('question')) {
    return 'faq';
  }
  if (slug.match(/^\/locations?\//)) {
    return 'location';
  }
  return 'article';
}

function scanDirectory(dir, basePath = '') {
  const results = [];

  try {
    const items = fs.readdirSync(dir);

    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        // Recurse into subdirectory
        const subPath = basePath ? `${basePath}/${item}` : item;
        results.push(...scanDirectory(fullPath, subPath));
      } else if (item === 'page.tsx') {
        // Found a page file
        const slug = basePath ? `/${basePath}/` : '/';
        const content = fs.readFileSync(fullPath, 'utf-8');
        const textContent = extractTextFromTsx(content);
        const wordCount = countWords(textContent);
        const isPlaceholder = detectPlaceholder(content);
        const isTruncated = detectTruncation(content);
        const metadata = extractMetadata(content);
        const category = categorizeContent(wordCount, isPlaceholder, isTruncated);
        const pageType = getPageType(slug);

        results.push({
          slug,
          path: fullPath.replace(APP_DIR, ''),
          wordCount,
          category,
          pageType,
          isPlaceholder,
          isTruncated,
          hasTitle: !!metadata.title,
          hasDescription: !!metadata.description,
          title: metadata.title,
          recommendedAction: getRecommendedAction(category, pageType),
        });
      }
    }
  } catch (error) {
    console.error(`Error scanning ${dir}:`, error.message);
  }

  return results;
}

function getRecommendedAction(category, pageType) {
  if (category === 'placeholder') {
    return 'DELETE - Create 301 redirect to relevant hub page';
  }
  if (category === 'truncated') {
    if (pageType === 'article') {
      return 'CONSOLIDATE - Merge with similar topics or REWRITE completely';
    }
    return 'REWRITE - Complete the truncated content';
  }
  if (category === 'thin') {
    if (pageType === 'service-location') {
      return 'ENHANCE - Add hyper-local content, tables, FAQs to reach 800-1200 words';
    }
    return 'EXPAND - Add depth, examples, tables, and FAQs to reach 800+ words';
  }
  if (category === 'adequate') {
    if (pageType === 'service-location') {
      return 'ENHANCE - Add local facts and comparison tables';
    }
    return 'OPTIONAL - Consider adding tables, FAQs, or examples';
  }
  return 'MAINTAIN - Content is good quality';
}

function generateReport(pages) {
  const categoryCounts = {};
  const pageTypeCounts = {};
  const actionCounts = {};

  pages.forEach(page => {
    categoryCounts[page.category] = (categoryCounts[page.category] || 0) + 1;
    pageTypeCounts[page.pageType] = (pageTypeCounts[page.pageType] || 0) + 1;

    const action = page.recommendedAction.split(' - ')[0];
    actionCounts[action] = (actionCounts[action] || 0) + 1;
  });

  return {
    summary: {
      totalPages: pages.length,
      categoryCounts,
      pageTypeCounts,
      actionCounts,
      averageWordCount: Math.round(pages.reduce((sum, p) => sum + p.wordCount, 0) / pages.length),
    },
    byCategory: {
      placeholder: pages.filter(p => p.category === 'placeholder'),
      truncated: pages.filter(p => p.category === 'truncated'),
      thin: pages.filter(p => p.category === 'thin'),
      adequate: pages.filter(p => p.category === 'adequate'),
      good: pages.filter(p => p.category === 'good'),
      excellent: pages.filter(p => p.category === 'excellent'),
    },
    serviceLocationPages: pages.filter(p => p.pageType === 'service-location')
      .sort((a, b) => a.wordCount - b.wordCount),
    hubPages: pages.filter(p => p.pageType === 'hub'),
    allPages: pages.sort((a, b) => a.wordCount - b.wordCount),
  };
}

function printSummary(report) {
  console.log('\n========================================');
  console.log('THIN CONTENT TRIAGE REPORT');
  console.log('========================================\n');

  console.log('SUMMARY:');
  console.log(`  Total Pages: ${report.summary.totalPages}`);
  console.log(`  Average Word Count: ${report.summary.averageWordCount}`);
  console.log();

  console.log('BY CATEGORY:');
  Object.entries(report.summary.categoryCounts).forEach(([cat, count]) => {
    const percentage = Math.round((count / report.summary.totalPages) * 100);
    console.log(`  ${cat.padEnd(12)}: ${count} (${percentage}%)`);
  });
  console.log();

  console.log('BY PAGE TYPE:');
  Object.entries(report.summary.pageTypeCounts).forEach(([type, count]) => {
    console.log(`  ${type.padEnd(16)}: ${count}`);
  });
  console.log();

  console.log('RECOMMENDED ACTIONS:');
  Object.entries(report.summary.actionCounts).forEach(([action, count]) => {
    console.log(`  ${action.padEnd(12)}: ${count} pages`);
  });
  console.log();

  // Show service-location pages needing attention
  const serviceLocationNeedsWork = report.serviceLocationPages.filter(
    p => ['thin', 'truncated', 'placeholder'].includes(p.category)
  );

  if (serviceLocationNeedsWork.length > 0) {
    console.log('SERVICE-LOCATION PAGES NEEDING WORK:');
    serviceLocationNeedsWork.slice(0, 20).forEach(page => {
      console.log(`  ${page.slug} (${page.wordCount} words) - ${page.category}`);
    });
    if (serviceLocationNeedsWork.length > 20) {
      console.log(`  ... and ${serviceLocationNeedsWork.length - 20} more`);
    }
    console.log();
  }

  // Show placeholder pages for deletion
  if (report.byCategory.placeholder.length > 0) {
    console.log('PLACEHOLDER PAGES TO DELETE:');
    report.byCategory.placeholder.slice(0, 20).forEach(page => {
      console.log(`  ${page.slug} - "${page.title || 'No title'}"`);
    });
    if (report.byCategory.placeholder.length > 20) {
      console.log(`  ... and ${report.byCategory.placeholder.length - 20} more`);
    }
    console.log();
  }

  console.log(`Full report saved to: ${OUTPUT_FILE}`);
}

// Main execution
console.log('Scanning pages in', APP_DIR);
const pages = scanDirectory(APP_DIR);
const report = generateReport(pages);

// Save full report
fs.writeFileSync(OUTPUT_FILE, JSON.stringify(report, null, 2));

// Print summary
printSummary(report);
