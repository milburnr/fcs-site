#!/usr/bin/env node
/**
 * Sitemap Generator for Florida Construction Specialists
 *
 * Scans app/ for page.tsx files, excludes noindexed and redirected pages,
 * and generates public/sitemap.xml with proper priorities.
 *
 * Usage: node scripts/generate-sitemap.js
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const BASE_URL = 'https://floridaconstructionspecialists.com';
const APP_DIR = path.resolve(__dirname, '..', 'app');
const NETLIFY_TOML = path.resolve(__dirname, '..', 'netlify.toml');
const OUTPUT = path.resolve(__dirname, '..', 'public', 'sitemap.xml');
const TODAY = new Date().toISOString().split('T')[0];

// ── 0. Git lastmod lookup ──────────────────────────────────────────────────

function getGitLastmod(filePath) {
  try {
    const result = execSync(`git log -1 --format=%aI -- "${filePath}"`, {
      encoding: 'utf-8',
      stdio: ['pipe', 'pipe', 'pipe'],
    }).trim();
    if (result) {
      return result.split('T')[0]; // ISO date only
    }
  } catch {
    // git not available or file not in repo
  }
  return TODAY;
}

// ── 1. Discover all page.tsx files ──────────────────────────────────────────

function discoverPages(dir, prefix = '') {
  const pages = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;

    // Skip non-page directories
    if (entry.name === 'api' || entry.name === 'keystatic') continue;

    const subdir = path.join(dir, entry.name);
    const slug = prefix ? `${prefix}/${entry.name}` : entry.name;

    // Check for page.tsx in this directory
    const pagePath = path.join(subdir, 'page.tsx');
    if (fs.existsSync(pagePath)) {
      pages.push({ slug, filePath: pagePath });
    }

    // Recurse into subdirectories
    pages.push(...discoverPages(subdir, slug));
  }

  return pages;
}

// Also check for root page.tsx (homepage)
function discoverAllPages() {
  const pages = [];
  const rootPage = path.join(APP_DIR, 'page.tsx');
  if (fs.existsSync(rootPage)) {
    pages.push({ slug: '', filePath: rootPage });
  }
  pages.push(...discoverPages(APP_DIR));
  return pages;
}

// ── 2. Parse noindexed pages ────────────────────────────────────────────────

function isNoindexed(filePath) {
  const check = (content) => {
    // Object form: robots: { index: false, ... }
    if (/robots:\s*\{[^}]*index:\s*false/s.test(content)) return true;
    // String form: robots: "noindex, ..." or 'noindex' anywhere in robots literal
    if (/robots:\s*['"`][^'"`]*noindex/i.test(content)) return true;
    return false;
  };

  const content = fs.readFileSync(filePath, 'utf-8');
  if (check(content)) return true;

  // Also check layout.tsx in the same directory (e.g. premium-homepage)
  const dir = path.dirname(filePath);
  const layoutPath = path.join(dir, 'layout.tsx');
  if (fs.existsSync(layoutPath)) {
    const layoutContent = fs.readFileSync(layoutPath, 'utf-8');
    if (check(layoutContent)) return true;
  }

  return false;
}

// Returns the canonical URL declared in the page (or null). Catches:
//   alternates: { canonical: "https://..." }
//   alternates: { canonical: `${SITE_URL}/foo/` }
function getDeclaredCanonical(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const m = content.match(/canonical:\s*["'`]([^"'`]+)["'`]/);
  return m ? m[1] : null;
}

// ── 3. Parse redirected URLs from netlify.toml ──────────────────────────────

function parseRedirects() {
  const toml = fs.readFileSync(NETLIFY_TOML, 'utf-8');
  const redirectFromPaths = new Set();

  // Match [[redirects]] blocks with from = "..." and status = 301
  const redirectBlocks = toml.split('[[redirects]]').slice(1);

  for (const block of redirectBlocks) {
    const fromMatch = block.match(/from\s*=\s*"([^"]+)"/);
    const statusMatch = block.match(/status\s*=\s*(\d+)/);

    if (fromMatch && statusMatch) {
      const status = parseInt(statusMatch[1], 10);
      if (status === 301) {
        let fromPath = fromMatch[1];
        // Skip wildcard redirects (like /* or /medical-*)
        if (fromPath.includes('*')) continue;
        // Normalize: strip trailing slash for comparison
        fromPath = fromPath.replace(/\/$/, '');
        if (fromPath) {
          redirectFromPaths.add(fromPath);
        }
      }
    }
  }

  return redirectFromPaths;
}

// ── 4. Determine priority ───────────────────────────────────────────────────

function getPriority(slug) {
  // Homepage
  if (slug === '') return '1.0';

  // Hub pages
  const hubSlugs = [
    'services', 'locations', 'insurance-restoration',
    'insurance', 'commercial', 'residential',
    'commercial-construction', 'disaster-recovery',
    'balcony-reconstruction', 'exterior-waterproofing',
    'historic-restoration', 'luxury-custom-homes',
    'multi-family-construction', 'custom-homes',
    'engineering', 'sb4d-compliance'
  ];
  if (hubSlugs.includes(slug)) return '0.9';

  // Service hub sub-pages (services/commercial, services/residential, etc.)
  if (slug.startsWith('services/')) return '0.9';

  // Location hub pages
  if (slug.startsWith('locations/')) return '0.7';

  // Insurance sub-pages
  if (slug.startsWith('insurance/')) return '0.8';

  // Service-location pages (e.g. commercial-construction-tampa)
  const locationSuffixes = [
    '-tampa', '-st-petersburg', '-clearwater', '-bradenton',
    '-brandon', '-lakeland', '-sarasota', '-ruskin'
  ];
  for (const suffix of locationSuffixes) {
    if (slug.endsWith(suffix)) return '0.8';
  }

  // Utility pages
  const utilitySlugs = [
    'contact', 'about', 'privacy-policy', 'privacy',
    'terms-and-conditions', 'terms', 'team', 'team-members',
    'our-process', 'gallery', 'resources', 'vip-public-adjuster',
    'certified-estimates', 'building-consultants', 'expert-witness'
  ];
  if (utilitySlugs.includes(slug)) return '0.5';

  // Everything else (articles, blog-style pages)
  return '0.6';
}

// ── 5. Generate XML ─────────────────────────────────────────────────────────

function generateSitemapXml(urls) {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  for (const url of urls) {
    xml += '  <url>\n';
    xml += `    <loc>${url.loc}</loc>\n`;
    xml += `    <lastmod>${url.lastmod}</lastmod>\n`;
    xml += `    <changefreq>${url.changefreq}</changefreq>\n`;
    xml += `    <priority>${url.priority}</priority>\n`;
    xml += '  </url>\n';
  }

  xml += '</urlset>\n';
  return xml;
}

// ── Main ────────────────────────────────────────────────────────────────────

function main() {
  console.log('Sitemap Generator for Florida Construction Specialists');
  console.log('======================================================\n');

  // Discover pages
  const allPages = discoverAllPages();
  console.log(`Found ${allPages.length} page.tsx files in app/\n`);

  // Parse redirects
  const redirectPaths = parseRedirects();
  console.log(`Found ${redirectPaths.size} non-wildcard 301 redirect 'from' paths in netlify.toml\n`);

  // Filter pages
  const included = [];
  const excluded = { noindex: [], redirect: [], layout: [] };

  for (const page of allPages) {
    const urlPath = page.slug === '' ? '/' : `/${page.slug}/`;
    const checkPath = page.slug === '' ? '' : `/${page.slug}`;

    // Check redirect
    if (redirectPaths.has(checkPath)) {
      excluded.redirect.push(urlPath);
      continue;
    }

    // Check noindex
    if (isNoindexed(page.filePath)) {
      excluded.noindex.push(urlPath);
      continue;
    }

    // Check that the page's declared canonical matches the URL we'd emit.
    // If a page has a canonical pointing elsewhere, skip it — listing both
    // would be a "non-canonical in sitemap" finding.
    const declaredCanonical = getDeclaredCanonical(page.filePath);
    if (declaredCanonical) {
      const expected = `${BASE_URL}${urlPath}`;
      // Permit the declared canonical to use either trailing-slash form,
      // and ignore template literal expressions (they may be dynamic).
      const norm = declaredCanonical.replace(/\/$/, '');
      const expectedNorm = expected.replace(/\/$/, '');
      const isDynamic = /\$\{|\\$/.test(declaredCanonical) || declaredCanonical.includes('${');
      if (!isDynamic && declaredCanonical.startsWith('http') && norm !== expectedNorm) {
        excluded.nonCanonical = excluded.nonCanonical || [];
        excluded.nonCanonical.push({ urlPath, canonical: declaredCanonical });
        continue;
      }
    }

    const priority = getPriority(page.slug);
    const changefreq = priority === '1.0' ? 'weekly' :
                       priority === '0.9' ? 'weekly' :
                       'monthly';

    included.push({
      loc: `${BASE_URL}${urlPath}`,
      lastmod: getGitLastmod(page.filePath),
      changefreq,
      priority,
      slug: page.slug
    });
  }

  // Sort: homepage first, then alphabetically
  included.sort((a, b) => {
    if (a.slug === '') return -1;
    if (b.slug === '') return 1;
    return a.slug.localeCompare(b.slug);
  });

  // Generate XML
  const xml = generateSitemapXml(included);
  fs.writeFileSync(OUTPUT, xml, 'utf-8');

  // Summary
  console.log('--- INCLUDED ---');
  console.log(`Total URLs in sitemap: ${included.length}\n`);

  const byPriority = {};
  for (const url of included) {
    byPriority[url.priority] = (byPriority[url.priority] || 0) + 1;
  }
  console.log('By priority:');
  for (const [p, count] of Object.entries(byPriority).sort((a, b) => parseFloat(b[0]) - parseFloat(a[0]))) {
    console.log(`  ${p}: ${count} URLs`);
  }

  console.log('\n--- EXCLUDED ---');
  console.log(`Noindexed: ${excluded.noindex.length}`);
  for (const p of excluded.noindex) console.log(`  - ${p}`);

  if (excluded.nonCanonical && excluded.nonCanonical.length) {
    console.log(`Non-canonical: ${excluded.nonCanonical.length}`);
    for (const x of excluded.nonCanonical) console.log(`  - ${x.urlPath}  →  canonical=${x.canonical}`);
  }
  console.log(`Redirected: ${excluded.redirect.length}`);
  for (const p of excluded.redirect.slice(0, 10)) console.log(`  - ${p}`);
  if (excluded.redirect.length > 10) {
    console.log(`  ... and ${excluded.redirect.length - 10} more`);
  }

  console.log(`\nTotal: ${allPages.length} discovered, ${included.length} included, ${excluded.noindex.length + excluded.redirect.length} excluded`);
  console.log(`\nSitemap written to: ${OUTPUT}`);
}

main();
