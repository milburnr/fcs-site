#!/usr/bin/env node
/**
 * Word Count Audit Script
 * Scans all page.tsx files, counts visible text words, categorizes pages.
 *
 * Usage:
 *   node scripts/audit-word-count.js           # Audit all pages, write JSON
 *   node scripts/audit-word-count.js --failing  # Only show failing pages (console)
 *   node scripts/audit-word-count.js --json     # Output JSON to stdout
 *   node scripts/audit-word-count.js --no-write # Don't write seo/word-count-audit.json
 *
 * Output: seo/word-count-audit.json
 *
 * Categories:
 *   thin:     < 300 words
 *   moderate: 300-499 words
 *   solid:    500-999 words
 *   strong:   1000+ words
 */

const fs = require('fs');
const path = require('path');

const APP_DIR = path.join(__dirname, '../app');
const OUTPUT_DIR = path.join(__dirname, '../seo');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'word-count-audit.json');

// Minimum word counts by page type (for pass/fail threshold)
const THRESHOLDS = {
  'service-location': 800,
  'hub': 600,
  'article': 500,
  'location': 500,
  'faq': 400,
  'default': 500,
};

// Service-location page pattern
const SERVICE_LOCATION_PATTERN = /^\/(commercial-construction|multi-family-construction|disaster-recovery|historic-restoration|luxury-custom-homes|balcony-reconstruction|exterior-waterproofing|insurance-restoration|condo-remediation)-(tampa|st-petersburg|clearwater|lakeland|sarasota|bradenton|brandon|ruskin)\/?$/;

function categorize(wordCount) {
  if (wordCount < 300) return 'thin';
  if (wordCount < 500) return 'moderate';
  if (wordCount < 1000) return 'solid';
  return 'strong';
}

function extractTextFromTsx(content) {
  // Remove imports
  content = content.replace(/^import\s+.*?;?\s*$/gm, '');

  // Remove TypeScript interfaces and types
  content = content.replace(/interface\s+\w+\s*{[^}]*}/gs, '');
  content = content.replace(/type\s+\w+\s*=\s*[^;]+;/g, '');

  // Remove metadata export
  content = content.replace(/export const metadata[^}]+\};/gs, '');

  // Remove const declarations with arrays/objects (data structures, not content)
  content = content.replace(/const\s+\w+\s*(?::\s*\w+(?:<[^>]*>)?\s*)?=\s*\[[\s\S]*?\];/g, '');

  // Extract text from JSX - strip tags
  content = content.replace(/<[^>]+>/g, ' ');

  // Remove JS expressions in braces (but keep literal text)
  content = content.replace(/\{\/\*[\s\S]*?\*\/\}/g, ' '); // JSX comments
  content = content.replace(/\{`([^`]*)`\}/g, '$1'); // Template literals
  content = content.replace(/\{"([^"]*)"\}/g, '$1'); // String expressions
  content = content.replace(/\{[^}]*\}/g, ' '); // Other expressions

  // Remove remaining code-like patterns
  content = content.replace(/const\s+\w+\s*=/g, '');
  content = content.replace(/function\s+\w+/g, '');
  content = content.replace(/export\s+(default\s+)?function/g, '');
  content = content.replace(/className="[^"]*"/g, '');
  content = content.replace(/return\s*\(/g, '');

  // Clean up
  content = content.replace(/[{}();=]/g, ' ');
  content = content.replace(/\s+/g, ' ').trim();

  return content;
}

function countWords(text) {
  if (!text) return 0;
  return text.split(/\s+/).filter(word => word.length > 2).length;
}

function extractTitle(content, slug) {
  // Try to extract title from metadata
  const titleMatch = content.match(/title:\s*["']([^"']+)["']/);
  if (titleMatch) return titleMatch[1];

  // Try template literal
  const templateMatch = content.match(/title:\s*`([^`]+)`/);
  if (templateMatch) return templateMatch[1];

  // Fallback: derive from slug
  return slug
    .replace(/^\/|\/$/g, '')
    .replace(/-/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase()) || 'Home';
}

function getPageType(slug) {
  if (SERVICE_LOCATION_PATTERN.test(slug)) return 'service-location';
  if (/^\/commercial\/?$|^\/residential\/?$|^\/services\/?$|^\/about\/?$|^\/insurance\/?$/.test(slug)) return 'hub';
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
        const category = categorize(wordCount);
        const title = extractTitle(content, slug);

        results.push({
          path: basePath ? `app/${basePath}/page.tsx` : 'app/page.tsx',
          url: slug,
          wordCount,
          category,
          title,
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
const outputJsonStdout = args.includes('--json');
const noWrite = args.includes('--no-write');

// Scan pages
const pages = scanDirectory(APP_DIR);

// Sort by word count ascending (thin pages first)
pages.sort((a, b) => a.wordCount - b.wordCount);

// Build category summary
const summary = {
  total: pages.length,
  thin: pages.filter(p => p.category === 'thin').length,
  moderate: pages.filter(p => p.category === 'moderate').length,
  solid: pages.filter(p => p.category === 'solid').length,
  strong: pages.filter(p => p.category === 'strong').length,
};

// Write JSON output file
if (!noWrite) {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const auditData = {
    generated: new Date().toISOString().split('T')[0],
    summary,
    pages: pages.map(p => ({
      path: p.path,
      url: p.url,
      wordCount: p.wordCount,
      category: p.category,
      title: p.title,
    })),
  };

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(auditData, null, 2));
  console.log(`\nWrote audit to: ${path.relative(path.join(__dirname, '..'), OUTPUT_FILE)}`);
}

// Console output
if (outputJsonStdout) {
  console.log(JSON.stringify({
    totalPages: pages.length,
    passingPages: pages.filter(p => p.passing).length,
    failingPages: pages.filter(p => !p.passing).length,
    passRate: Math.round((pages.filter(p => p.passing).length / pages.length) * 100) + '%',
    summary,
    pages: showOnlyFailing ? pages.filter(p => !p.passing) : pages,
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

  console.log('BY CATEGORY:');
  console.log(`  thin (< 300):     ${summary.thin} pages`);
  console.log(`  moderate (300-499): ${summary.moderate} pages`);
  console.log(`  solid (500-999):  ${summary.solid} pages`);
  console.log(`  strong (1000+):   ${summary.strong} pages`);
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

  const pagesToShow = showOnlyFailing ? pages.filter(p => !p.passing) : pages;

  if (pagesToShow.length > 0 && showOnlyFailing) {
    console.log('FAILING PAGES (sorted by word count):');
    pagesToShow.forEach(page => {
      console.log(`  x ${page.url.padEnd(55)} ${page.wordCount.toString().padStart(4)} words [${page.category}] (need +${page.deficit})`);
    });
  } else if (!showOnlyFailing) {
    // Show worst 30
    console.log('LOWEST WORD COUNTS (bottom 30):');
    pagesToShow.slice(0, 30).forEach(page => {
      const deficit = page.passing ? '' : ` (need +${page.deficit})`;
      console.log(`  ${page.url.padEnd(55)} ${page.wordCount.toString().padStart(4)} words [${page.category}]${deficit}`);
    });
  }

  console.log('\nUse --failing to see only failing pages');
  console.log('Use --json for machine-readable output');
}
