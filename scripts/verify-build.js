#!/usr/bin/env node
/**
 * Build Verification Script
 * =========================
 * Verifies the build output for common issues.
 *
 * Usage: node scripts/verify-build.js
 */

const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(__dirname, '..', 'out');

// Test results
const results = {
  passed: [],
  failed: [],
};

function pass(test) {
  results.passed.push(test);
  console.log(`✅ ${test}`);
}

function fail(test, reason) {
  results.failed.push({ test, reason });
  console.log(`❌ ${test}: ${reason}`);
}

/**
 * Check if build output exists
 */
function checkBuildExists() {
  if (fs.existsSync(OUT_DIR)) {
    pass('Build output directory exists');
    return true;
  } else {
    fail('Build output directory exists', 'out/ directory not found. Run npm run build first.');
    return false;
  }
}

/**
 * Count HTML pages
 */
function countPages() {
  let count = 0;

  function walk(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath);
      } else if (entry.name === 'index.html') {
        count++;
      }
    }
  }

  walk(OUT_DIR);
  return count;
}

/**
 * Check for required pages
 */
function checkRequiredPages() {
  const requiredPages = [
    'index.html',
    'commercial/index.html',
    'residential/index.html',
    'contact/index.html',
    'about/index.html',
    'locations/index.html',
  ];

  for (const page of requiredPages) {
    const pagePath = path.join(OUT_DIR, page);
    if (fs.existsSync(pagePath)) {
      pass(`Required page exists: ${page}`);
    } else {
      fail(`Required page exists: ${page}`, 'Page not found');
    }
  }
}

/**
 * Check for schema.org markup
 */
function checkSchemaMarkup() {
  const pagesToCheck = [
    'index.html',
    'commercial/index.html',
    'residential/index.html',
  ];

  for (const page of pagesToCheck) {
    const pagePath = path.join(OUT_DIR, page);
    if (!fs.existsSync(pagePath)) continue;

    const content = fs.readFileSync(pagePath, 'utf-8');

    // Check for JSON-LD script
    if (content.includes('application/ld+json')) {
      pass(`Schema markup present: ${page}`);
    } else {
      fail(`Schema markup present: ${page}`, 'No JSON-LD script found');
    }
  }
}

/**
 * Check for breadcrumb navigation
 */
function checkBreadcrumbs() {
  const pagesToCheck = [
    'commercial/index.html',
    'residential/index.html',
  ];

  for (const page of pagesToCheck) {
    const pagePath = path.join(OUT_DIR, page);
    if (!fs.existsSync(pagePath)) continue;

    const content = fs.readFileSync(pagePath, 'utf-8');

    if (content.includes('aria-label="Breadcrumb"') || content.includes('BreadcrumbList')) {
      pass(`Breadcrumb navigation: ${page}`);
    } else {
      fail(`Breadcrumb navigation: ${page}`, 'No breadcrumb found');
    }
  }
}

/**
 * Check for H1 tags
 */
function checkH1Tags() {
  const pagesToCheck = [
    'index.html',
    'commercial/index.html',
    'residential/index.html',
    'contact/index.html',
  ];

  for (const page of pagesToCheck) {
    const pagePath = path.join(OUT_DIR, page);
    if (!fs.existsSync(pagePath)) continue;

    const content = fs.readFileSync(pagePath, 'utf-8');
    const h1Matches = content.match(/<h1[^>]*>/gi) || [];

    if (h1Matches.length === 1) {
      pass(`Single H1 tag: ${page}`);
    } else if (h1Matches.length === 0) {
      fail(`Single H1 tag: ${page}`, 'No H1 tag found');
    } else {
      fail(`Single H1 tag: ${page}`, `Multiple H1 tags found (${h1Matches.length})`);
    }
  }
}

/**
 * Check sitemap exists
 */
function checkSitemap() {
  const sitemapPath = path.join(OUT_DIR, 'sitemap.xml');
  if (fs.existsSync(sitemapPath)) {
    pass('Sitemap exists');
  } else {
    fail('Sitemap exists', 'sitemap.xml not found in out/');
  }
}

/**
 * Check robots.txt exists
 */
function checkRobotsTxt() {
  const robotsPath = path.join(OUT_DIR, 'robots.txt');
  if (fs.existsSync(robotsPath)) {
    pass('robots.txt exists');
  } else {
    fail('robots.txt exists', 'robots.txt not found in out/');
  }
}

/**
 * Main execution
 */
function main() {
  console.log('🔍 Verifying Build Output...\n');

  if (!checkBuildExists()) {
    console.log('\n⚠️  Build verification aborted - no build output found.');
    process.exit(1);
  }

  const pageCount = countPages();
  console.log(`📄 Total pages: ${pageCount}\n`);

  console.log('--- Required Pages ---');
  checkRequiredPages();

  console.log('\n--- Schema Markup ---');
  checkSchemaMarkup();

  console.log('\n--- Breadcrumbs ---');
  checkBreadcrumbs();

  console.log('\n--- H1 Tags ---');
  checkH1Tags();

  console.log('\n--- Assets ---');
  checkSitemap();
  checkRobotsTxt();

  // Summary
  console.log('\n========================================');
  console.log(`✅ Passed: ${results.passed.length}`);
  console.log(`❌ Failed: ${results.failed.length}`);
  console.log('========================================\n');

  if (results.failed.length > 0) {
    console.log('Failed tests:');
    for (const { test, reason } of results.failed) {
      console.log(`  - ${test}: ${reason}`);
    }
    process.exit(1);
  } else {
    console.log('All build verification tests passed!');
    process.exit(0);
  }
}

main();
