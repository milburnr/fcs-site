#!/usr/bin/env node
/**
 * generate-keyword-map.js
 *
 * Extends the keyword map to cover ALL indexable pages on the site.
 * - Preserves existing manually curated entries (56 service+location pages, hubs, rules)
 * - Reads word-count-audit.json for the full page list
 * - Reads thin-content-decisions.json to exclude redirected/noindexed pages
 * - Derives primary keywords for pages that lack entries
 *
 * Output: seo/keyword-map.json with new "pages" array covering all indexable pages
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const KEYWORD_MAP_PATH = path.join(ROOT, 'seo/keyword-map.json');
const WORD_COUNT_PATH = path.join(ROOT, 'seo/word-count-audit.json');
const THIN_DECISIONS_PATH = path.join(ROOT, 'seo/thin-content-decisions.json');

// Load data
const keywordMap = JSON.parse(fs.readFileSync(KEYWORD_MAP_PATH, 'utf8'));
const wordCountAudit = JSON.parse(fs.readFileSync(WORD_COUNT_PATH, 'utf8'));
const thinDecisions = JSON.parse(fs.readFileSync(THIN_DECISIONS_PATH, 'utf8'));

// Build excluded URL set (redirected + noindexed pages)
const excludedUrls = new Set();
for (const d of thinDecisions.decisions) {
  if (d.decision === 'redirect' || d.decision === 'noindex') {
    excludedUrls.add(d.url);
  }
}

// Build existing keyword map lookup: slug -> entry
const existingByUrl = new Map();
for (const [slug, entry] of Object.entries(keywordMap.primary_keywords || {})) {
  const url = `/${slug}/`;
  existingByUrl.set(url, {
    url,
    primary_keyword: entry.primary,
    source: 'existing',
    page_type: 'service-location',
    search_intent: entry.search_intent || 'transactional',
    page_priority: entry.page_priority || 3
  });
}

// Add service hubs
for (const [slug, entry] of Object.entries(keywordMap.service_hubs || {})) {
  // Map hub slugs to possible URLs
  const possibleUrls = [
    `/${slug}/`,
    `/services/${slug}/`
  ];
  for (const url of possibleUrls) {
    if (!existingByUrl.has(url)) {
      existingByUrl.set(url, {
        url,
        primary_keyword: entry.primary,
        source: 'existing',
        page_type: 'hub',
        search_intent: 'informational',
        page_priority: 1
      });
    }
  }
}

// Add location hubs
for (const [slug, entry] of Object.entries(keywordMap.location_hubs || {})) {
  const url = `/locations/${slug}-fl/`;
  if (!existingByUrl.has(url)) {
    existingByUrl.set(url, {
      url,
      primary_keyword: entry.primary,
      source: 'existing',
      page_type: 'location',
      search_intent: 'transactional',
      page_priority: 2
    });
  }
}

// Known cities for pattern matching
const CITIES = ['tampa', 'st-petersburg', 'clearwater', 'lakeland', 'sarasota', 'bradenton', 'brandon', 'ruskin'];
const CITY_VARIANTS = {
  'st-petersburg': ['st-petersburg', 'st-pete'],
  'tampa': ['tampa'],
  'clearwater': ['clearwater'],
  'lakeland': ['lakeland'],
  'sarasota': ['sarasota'],
  'bradenton': ['bradenton'],
  'brandon': ['brandon'],
  'ruskin': ['ruskin']
};

// Brand name patterns to strip from titles
const BRAND_STRIPS = [
  /\s*\|\s*FCS\s*$/i,
  /\s*\|\s*FCS Tampa\s*$/i,
  /\s*\|\s*Florida Construction Specialists\s*$/i,
  /\s*-\s*FCS\s*$/i,
  /\s*-\s*Florida Construction Specialists\s*$/i,
  /Florida Construction Specialists\s*/i,
  /\bFCS\b/gi,
];

// Location qualifiers to strip
const LOCATION_STRIPS = [
  /\s+in\s+tampa(\s+bay)?(\s+fl(orida)?)?/gi,
  /\s+in\s+(st\.?\s*petersburg|clearwater|lakeland|sarasota|bradenton|brandon|ruskin)(\s+fl(orida)?)?/gi,
  /\s+tampa(\s+bay)?(\s+fl(orida)?)?$/gi,
  /\s+(st\.?\s*petersburg|clearwater|lakeland|sarasota|bradenton|brandon|ruskin)(\s+fl(orida)?)?$/gi,
  /tampa\s+bay\s+area\s*/gi,
];

// Action/filler words to strip from beginning
const PREFIX_STRIPS = [
  /^(expert\s+)?guide\s+to\s+/i,
  /^a\s+guide\s+to\s+/i,
  /^the\s+ultimate\s+guide\s+to\s+/i,
  /^understanding\s+/i,
  /^navigating\s+/i,
  /^how\s+to\s+/i,
  /^top\s+\d*\s*/i,
  /^best\s+/i,
  /^why\s+you\s+need\s+/i,
  /^why\s+choose\s+/i,
  /^boost\s+\w+\s+with\s+/i,
  /^the\s+importance\s+of\s+/i,
  /^the\s+benefits\s+of\s+/i,
  /^the\s+role\s+of\s+/i,
];

/**
 * Classify page type based on URL
 */
function classifyPageType(url) {
  const slug = url.replace(/^\/|\/$/g, '');

  // Hub pages
  const hubUrls = ['', 'services', 'locations', 'insurance', 'contact', 'team', 'gallery', 'resources', 'about', 'portfolio', 'sb4-d'];
  if (hubUrls.includes(slug)) return 'hub';

  // Location pages
  if (url.startsWith('/locations/')) return 'location';

  // Service sub-pages under /services/
  if (url.startsWith('/services/')) return 'hub';

  // Insurance sub-pages
  if (url.startsWith('/insurance/')) return 'hub';

  // Residential sub-pages
  if (url.startsWith('/residential/')) return 'hub';

  // Commercial sub-pages
  if (url.startsWith('/commercial/')) return 'hub';

  // Check if it's a service-location page (matches known patterns)
  for (const city of CITIES) {
    if (slug.endsWith(`-${city}`)) return 'service-location';
  }
  // Also check for st-pete variant
  if (slug.endsWith('-st-pete')) return 'service-location';

  // Everything else is an article
  return 'article';
}

/**
 * Derive keyword from page title
 */
function deriveFromTitle(title) {
  if (!title) return null;

  let kw = title;

  // Strip brand names
  for (const pattern of BRAND_STRIPS) {
    kw = kw.replace(pattern, '');
  }

  // Strip location qualifiers
  for (const pattern of LOCATION_STRIPS) {
    kw = kw.replace(pattern, '');
  }

  // Strip prefix action words
  for (const pattern of PREFIX_STRIPS) {
    kw = kw.replace(pattern, '');
  }

  // Clean up
  kw = kw.replace(/\s*\|\s*/g, ' ').replace(/\s+/g, ' ').trim();

  // Lowercase
  kw = kw.toLowerCase();

  // Remove trailing punctuation
  kw = kw.replace(/[.!?,;:]+$/, '').trim();

  // If too short or empty, return null
  if (kw.length < 3) return null;

  return kw;
}

/**
 * Derive keyword from URL slug
 */
function deriveFromSlug(url) {
  let slug = url.replace(/^\/|\/$/g, '');

  // Handle multi-segment paths
  if (slug.includes('/')) {
    // Take the last meaningful segment(s)
    const parts = slug.split('/');
    // For /services/commercial/retail-construction/ -> retail construction
    // For /locations/tampa-fl/ -> tampa construction contractor
    // For /insurance/expert-witness/ -> expert witness
    if (parts[0] === 'locations') {
      const city = parts[parts.length - 1].replace(/-fl$/, '');
      return `construction contractor ${city.replace(/-/g, ' ')}`;
    }
    slug = parts[parts.length - 1];
  }

  // Convert hyphens to spaces
  let kw = slug.replace(/-/g, ' ');

  // Remove common filler words from article slugs
  kw = kw.replace(/\b(in|for|and|the|a|an|of|to|with|your|our|how|why|what)\b/g, ' ');
  kw = kw.replace(/\s+/g, ' ').trim();

  return kw.toLowerCase();
}

/**
 * Derive keyword for a page using priority rules
 */
function deriveKeyword(page) {
  const pageType = classifyPageType(page.url);

  // Try title first
  const titleKw = deriveFromTitle(page.title);
  if (titleKw && titleKw.length >= 3 && titleKw.split(' ').length >= 2) {
    return { keyword: titleKw, source: 'derived-title' };
  }

  // Fall back to URL slug
  const slugKw = deriveFromSlug(page.url);
  if (slugKw && slugKw.length >= 3) {
    return { keyword: slugKw, source: 'derived-url' };
  }

  // Last resort: use the full slug
  const rawSlug = page.url.replace(/^\/|\/$/g, '').replace(/-/g, ' ');
  return { keyword: rawSlug || 'homepage', source: 'derived-url' };
}

// Process all indexable pages
const allPages = [];
const stats = { existing: 0, derived_title: 0, derived_url: 0 };

for (const page of wordCountAudit.pages) {
  // Skip excluded pages
  if (excludedUrls.has(page.url)) continue;

  // Check if already in existing map
  if (existingByUrl.has(page.url)) {
    const existing = existingByUrl.get(page.url);
    existing.wordCount = page.wordCount;
    existing.title = page.title;
    allPages.push(existing);
    stats.existing++;
    continue;
  }

  // Derive keyword
  const pageType = classifyPageType(page.url);
  const { keyword, source } = deriveKeyword(page);

  allPages.push({
    url: page.url,
    primary_keyword: keyword,
    source,
    page_type: pageType,
    wordCount: page.wordCount,
    title: page.title
  });

  stats[source.replace('-', '_')]++;
}

// Sort pages: service-location first, then hub, location, article
const typeOrder = { 'service-location': 0, 'hub': 1, 'location': 2, 'article': 3 };
allPages.sort((a, b) => {
  const typeA = typeOrder[a.page_type] ?? 99;
  const typeB = typeOrder[b.page_type] ?? 99;
  if (typeA !== typeB) return typeA - typeB;
  return a.url.localeCompare(b.url);
});

// Add pages array to keyword map (preserving existing structure)
keywordMap.pages = allPages;
keywordMap.metadata.total_pages = allPages.length;
keywordMap.metadata.keyword_coverage = '100%';
keywordMap.metadata.last_updated = new Date().toISOString().split('T')[0];

// Write back
fs.writeFileSync(KEYWORD_MAP_PATH, JSON.stringify(keywordMap, null, 2) + '\n');

// Report
console.log('=== Keyword Map Generation Complete ===');
console.log(`Total indexable pages: ${allPages.length}`);
console.log(`  Existing entries preserved: ${stats.existing}`);
console.log(`  Derived from title: ${stats.derived_title}`);
console.log(`  Derived from URL: ${stats.derived_url}`);
console.log(`\nPage type breakdown:`);
const typeCounts = {};
for (const p of allPages) {
  typeCounts[p.page_type] = (typeCounts[p.page_type] || 0) + 1;
}
for (const [type, count] of Object.entries(typeCounts).sort((a, b) => b[1] - a[1])) {
  console.log(`  ${type}: ${count}`);
}

// Sanity checks
const emptyKeywords = allPages.filter(p => !p.primary_keyword || p.primary_keyword.trim() === '');
if (emptyKeywords.length > 0) {
  console.log(`\nWARNING: ${emptyKeywords.length} pages have empty keywords:`);
  for (const p of emptyKeywords) {
    console.log(`  ${p.url}`);
  }
}

console.log('\nKeyword map written to seo/keyword-map.json');
