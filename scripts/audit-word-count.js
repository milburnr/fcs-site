#!/usr/bin/env node
/**
 * Word Count Audit Script
 * Quick audit of page word counts with pass/fail thresholds
 *
 * Usage:
 *   node scripts/audit-word-count.js           # Audit all pages
 *   node scripts/audit-word-count.js --failing # Only show failing pages
 *   node scripts/audit-word-count.js --json    # Output JSON format
 */

const fs = require('fs');
const path = require('path');

const APP_DIR = path.join(__dirname, '../app');

// Minimum word counts by page type
const THRESHOLDS = {
  'service-location': 800,
  'hub': 600,
  'article': 500,
  'location': 500,
  'faq': 400,
  'default': 500,
};

// Service-location page pattern
const SERVICE_LOCATION_PATTERN = /^\/(commercial-construction|multi-family-construction|disaster-recovery|historic-restoration|luxury-custom-homes|balcony-reconstruction|exterior-waterproofing)-(tampa|st-petersburg|clearwater|lakeland|sarasota|bradenton|brandon|ruskin)\/?$/;

function extractTextFromTsx(content) {
  // Remove imports, types, metadata
  content = content.replace(/^import\s+.*?;?\s*$/gm, '');
  content = content.replace(/interface\s+\w+\s*{[^}]*}/gs, '');
  content = content.replace(/type\s+\w+\s*=\s*[^;]+;/g, '');
  content = content.replace(/export const metadata[^}]+\};/gs, '');

  // Extract text from JSX
  content = content.replace(/<[^>]+>/g, ' ');
  content = content.replace(/\{[^}]*\}/g, ' ');
  content = content.replace(/const\s+\w+\s*=/g, '');
  content = content.replace(/function\s+\w+/g, '');
  content = content.replace(/className="[^"]*"/g, '');
  content = content.replace(/\s+/g, ' ').trim();

  return content;
}

function countWords(text) {
  return text.split(/\s+/).filter(word => word.length > 2).length;
}

function getPageType(slug) {
  if (SERVICE_LOCATION_PATTERN.test(slug)) return 'service-location';
  if (/^\/commercial\/?$|^\/residential\/?$|^\/services\/?$|^\/about\/?$/.test(slug)) return 'hub';
  if (/^\/locations?\//i.test(slug)) return 'location';
  if (/faq|question/i.test(slug)) return 'faq';
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
        results.push(...scanDirectory(fullPath, basePath ? `${basePath}/${item}` : item));
      } else if (item === 'page.tsx') {
        const slug = basePath ? `/${basePath}/` : '/';
        const content = fs.readFileSync(fullPath, 'utf-8');
        const textContent = extractTextFromTsx(content);
        const wordCount = countWords(textContent);
        const pageType = getPageType(slug);
        const threshold = THRESHOLDS[pageType] || THRESHOLDS.default;
        const passing = wordCount >= threshold;

        results.push({
          slug,
          wordCount,
          pageType,
          threshold,
          passing,
          deficit: passing ? 0 : threshold - wordCount,
        });
      }
    }
  } catch (error) {
    console.error(`Error scanning ${dir}:`, error.message);
  }

  return results;
}

// Parse arguments
const args = process.argv.slice(2);
const showOnlyFailing = args.includes('--failing');
const outputJson = args.includes('--json');

// Scan pages
const pages = scanDirectory(APP_DIR);

// Filter if needed
const pagesToShow = showOnlyFailing ? pages.filter(p => !p.passing) : pages;

// Sort by word count (lowest first)
pagesToShow.sort((a, b) => a.wordCount - b.wordCount);

if (outputJson) {
  console.log(JSON.stringify({
    totalPages: pages.length,
    passingPages: pages.filter(p => p.passing).length,
    failingPages: pages.filter(p => !p.passing).length,
    passRate: Math.round((pages.filter(p => p.passing).length / pages.length) * 100) + '%',
    pages: pagesToShow,
  }, null, 2));
} else {
  console.log('\n========================================');
  console.log('WORD COUNT AUDIT');
  console.log('========================================\n');

  const passing = pages.filter(p => p.passing).length;
  const failing = pages.length - passing;
  const passRate = Math.round((passing / pages.length) * 100);

  console.log(`Total: ${pages.length} pages`);
  console.log(`Passing: ${passing} (${passRate}%)`);
  console.log(`Failing: ${failing} (${100 - passRate}%)`);
  console.log();

  // Show by page type
  console.log('BY PAGE TYPE:');
  const byType = {};
  pages.forEach(p => {
    if (!byType[p.pageType]) {
      byType[p.pageType] = { total: 0, passing: 0, threshold: p.threshold };
    }
    byType[p.pageType].total++;
    if (p.passing) byType[p.pageType].passing++;
  });

  Object.entries(byType).forEach(([type, data]) => {
    const rate = Math.round((data.passing / data.total) * 100);
    console.log(`  ${type.padEnd(16)}: ${data.passing}/${data.total} passing (${rate}%) - threshold: ${data.threshold} words`);
  });
  console.log();

  if (pagesToShow.length > 0 && showOnlyFailing) {
    console.log('FAILING PAGES (sorted by word count):');
    pagesToShow.forEach(page => {
      const status = page.passing ? '✓' : '✗';
      console.log(`  ${status} ${page.slug.padEnd(50)} ${page.wordCount.toString().padStart(4)} words (need +${page.deficit})`);
    });
  } else if (!showOnlyFailing) {
    // Show worst 30
    console.log('LOWEST WORD COUNTS (bottom 30):');
    pagesToShow.slice(0, 30).forEach(page => {
      const status = page.passing ? '✓' : '✗';
      const deficit = page.passing ? '' : ` (need +${page.deficit})`;
      console.log(`  ${status} ${page.slug.padEnd(50)} ${page.wordCount.toString().padStart(4)} words${deficit}`);
    });
  }

  console.log('\nUse --failing to see only failing pages');
  console.log('Use --json for machine-readable output');
}
