#!/usr/bin/env node

/**
 * Schema Audit Script
 * Analyzes all page.tsx files to identify schema coverage and gaps
 *
 * Usage: node scripts/audit-schemas.js
 */

const fs = require('fs');
const path = require('path');

const APP_DIR = path.join(__dirname, '..', 'app');

// Schema patterns to look for
const SCHEMA_PATTERNS = {
  LocalBusinessSchema: /LocalBusinessSchema/,
  ServiceSchema: /ServiceSchema/,
  BreadcrumbSchema: /BreadcrumbSchema/,
  OrganizationSchema: /OrganizationSchema/,
  ArticleSchema: /ArticleSchema/,
  FAQSchema: /FAQSchema|FAQWithSchema/,
};

// Content patterns that indicate schema need
const CONTENT_PATTERNS = {
  hasAccordion: /<Accordion|AccordionItem/,
  hasFAQContent: /FAQ|frequently asked|questions/i,
  isArticlePage: /resources|guide|explained|requirements|standards/i,
  hasServiceContent: /ServiceSchema|service/i,
};

function getAllPages(dir, pages = []) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      getAllPages(filePath, pages);
    } else if (file === 'page.tsx') {
      pages.push(filePath);
    }
  }

  return pages;
}

function analyzePageFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const relativePath = path.relative(APP_DIR, path.dirname(filePath));
  const slug = '/' + (relativePath || '') + '/';

  const analysis = {
    path: slug,
    file: filePath,
    schemas: {},
    contentPatterns: {},
    recommendations: [],
  };

  // Check for schema usage
  for (const [name, pattern] of Object.entries(SCHEMA_PATTERNS)) {
    analysis.schemas[name] = pattern.test(content);
  }

  // Check for content patterns
  for (const [name, pattern] of Object.entries(CONTENT_PATTERNS)) {
    analysis.contentPatterns[name] = pattern.test(content);
  }

  // Generate recommendations
  if (analysis.contentPatterns.hasAccordion && !analysis.schemas.FAQSchema) {
    analysis.recommendations.push('ADD_FAQ_SCHEMA');
  }

  if (analysis.contentPatterns.isArticlePage && !analysis.schemas.ArticleSchema) {
    analysis.recommendations.push('ADD_ARTICLE_SCHEMA');
  }

  // LocalBusinessSchema is now in layout.tsx, so skip this check
  // if (!analysis.schemas.LocalBusinessSchema) {
  //   analysis.recommendations.push('ADD_LOCAL_BUSINESS_SCHEMA');
  // }

  return analysis;
}

function generateReport(analyses) {
  const report = {
    summary: {
      totalPages: analyses.length,
      withLocalBusiness: analyses.filter(a => a.schemas.LocalBusinessSchema).length,
      withService: analyses.filter(a => a.schemas.ServiceSchema).length,
      withBreadcrumb: analyses.filter(a => a.schemas.BreadcrumbSchema).length,
      withFAQ: analyses.filter(a => a.schemas.FAQSchema).length,
      withArticle: analyses.filter(a => a.schemas.ArticleSchema).length,
    },
    recommendations: {
      needsFAQSchema: [],
      needsArticleSchema: [],
    },
    details: analyses,
  };

  for (const analysis of analyses) {
    if (analysis.recommendations.includes('ADD_FAQ_SCHEMA')) {
      report.recommendations.needsFAQSchema.push(analysis.path);
    }
    if (analysis.recommendations.includes('ADD_ARTICLE_SCHEMA')) {
      report.recommendations.needsArticleSchema.push(analysis.path);
    }
  }

  return report;
}

function main() {
  console.log('🔍 Schema Audit for FCS Website\n');
  console.log('='.repeat(50));

  const pages = getAllPages(APP_DIR);
  console.log(`\nAnalyzing ${pages.length} pages...\n`);

  const analyses = pages.map(analyzePageFile);
  const report = generateReport(analyses);

  // Print summary
  console.log('📊 SCHEMA COVERAGE SUMMARY');
  console.log('-'.repeat(40));
  console.log(`Total Pages: ${report.summary.totalPages}`);
  console.log(`With LocalBusinessSchema: ${report.summary.withLocalBusiness} (now in layout: 100%)`);
  console.log(`With ServiceSchema: ${report.summary.withService}`);
  console.log(`With BreadcrumbSchema: ${report.summary.withBreadcrumb}`);
  console.log(`With FAQSchema: ${report.summary.withFAQ}`);
  console.log(`With ArticleSchema: ${report.summary.withArticle}`);

  console.log('\n📝 RECOMMENDATIONS');
  console.log('-'.repeat(40));

  if (report.recommendations.needsFAQSchema.length > 0) {
    console.log(`\n⚠️  Pages needing FAQSchema (${report.recommendations.needsFAQSchema.length}):`);
    report.recommendations.needsFAQSchema.slice(0, 20).forEach(p => console.log(`   ${p}`));
    if (report.recommendations.needsFAQSchema.length > 20) {
      console.log(`   ... and ${report.recommendations.needsFAQSchema.length - 20} more`);
    }
  }

  if (report.recommendations.needsArticleSchema.length > 0) {
    console.log(`\n⚠️  Pages needing ArticleSchema (${report.recommendations.needsArticleSchema.length}):`);
    report.recommendations.needsArticleSchema.slice(0, 20).forEach(p => console.log(`   ${p}`));
    if (report.recommendations.needsArticleSchema.length > 20) {
      console.log(`   ... and ${report.recommendations.needsArticleSchema.length - 20} more`);
    }
  }

  // Save detailed report
  const reportPath = path.join(__dirname, '..', 'schema-audit-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  console.log(`\n✅ Detailed report saved to: schema-audit-report.json`);

  // Return report for programmatic use
  return report;
}

main();
