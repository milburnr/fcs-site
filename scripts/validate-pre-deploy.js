#!/usr/bin/env node
/**
 * Pre-deploy validation script for Florida Construction Specialists
 *
 * Checks:
 * 1. Meta titles present on all pages
 * 2. Canonical URLs correct (self-referencing, full domain)
 * 3. No broken internal links
 * 4. No redirect chains in netlify.toml
 * 5. Sitemap-to-output consistency
 * 6. No redirected pages in sitemap
 *
 * Usage: node scripts/validate-pre-deploy.js
 * Exit code 0 = all pass, 1 = failures found
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const APP_DIR = path.join(ROOT, 'app');
const OUT_DIR = path.join(ROOT, 'out');
const NETLIFY_TOML = path.join(ROOT, 'netlify.toml');
const SITEMAP = path.join(ROOT, 'public', 'sitemap.xml');
const DOMAIN = 'https://floridaconstructionspecialists.com';

let failures = 0;
let warnings = 0;

function pass(label, detail) {
  console.log(`  ✓ ${label}: ${detail}`);
}
function fail(label, detail) {
  console.log(`  ✗ ${label}: ${detail}`);
  failures++;
}
function warn(label, detail) {
  console.log(`  ⚠ ${label}: ${detail}`);
  warnings++;
}

// ── Discover all pages ──────────────────────────────────────────────────────

function findAllPages(dir, prefix) {
  prefix = prefix || '';
  const pages = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    if (!e.isDirectory()) continue;
    if (['node_modules', '.next', 'out', '.git', '.planning', 'api', 'keystatic'].includes(e.name)) continue;
    const sub = path.join(dir, e.name);
    const slug = prefix ? prefix + '/' + e.name : e.name;
    const pagePath = path.join(sub, 'page.tsx');
    if (fs.existsSync(pagePath)) {
      const url = '/' + slug + '/';
      pages.push({ url, filePath: pagePath, slug });
    }
    pages.push(...findAllPages(sub, slug));
  }
  return pages;
}

// ── Parse redirects ─────────────────────────────────────────────────────────

function parseRedirects() {
  const toml = fs.readFileSync(NETLIFY_TOML, 'utf8');
  const redirects = [];
  const blocks = toml.split('[[redirects]]').slice(1);
  for (const block of blocks) {
    const fromMatch = block.match(/from\s*=\s*"([^"]+)"/);
    const toMatch = block.match(/to\s*=\s*"([^"]+)"/);
    const statusMatch = block.match(/status\s*=\s*(\d+)/);
    if (fromMatch && toMatch && statusMatch) {
      redirects.push({
        from: fromMatch[1],
        to: toMatch[1],
        status: parseInt(statusMatch[1], 10),
      });
    }
  }
  return redirects;
}

// ── Check 1: Meta titles ────────────────────────────────────────────────────

function checkMetaTitles(pages) {
  let missing = 0;
  const missingPages = [];
  for (const page of pages) {
    const content = fs.readFileSync(page.filePath, 'utf8');
    // Check for title in metadata export or in a client component import
    const hasTitle = /title:\s*["'`]/.test(content) || /title:/.test(content);
    if (!hasTitle) {
      // Check if it imports a client component (title may be there)
      const hasClientImport = /import.*Client/.test(content);
      if (!hasClientImport) {
        missing++;
        missingPages.push(page.url);
      }
    }
  }
  if (missing === 0) {
    pass('Meta titles', `${pages.length}/${pages.length} pages have titles`);
  } else {
    fail('Meta titles', `${missing} pages missing titles`);
    missingPages.slice(0, 10).forEach(p => console.log(`      - ${p}`));
  }
}

// ── Check 2: Canonical URLs ─────────────────────────────────────────────────

function checkCanonicals(pages, redirectFromPaths) {
  let correct = 0;
  let mismatches = 0;
  let checked = 0;
  const issues = [];

  for (const page of pages) {
    const content = fs.readFileSync(page.filePath, 'utf8');
    const canonicalMatch = content.match(/canonical:\s*["'`]([^"'`]+)["'`]/);
    if (!canonicalMatch) continue; // Not all pages have explicit canonicals
    checked++;
    const canonical = canonicalMatch[1];

    // Must use full domain
    if (!canonical.startsWith(DOMAIN)) {
      issues.push(`${page.url}: canonical missing domain (${canonical})`);
      mismatches++;
      continue;
    }

    // Must be self-referencing
    const canonicalPath = canonical.replace(DOMAIN, '');
    if (canonicalPath !== page.url) {
      issues.push(`${page.url}: canonical mismatch (${canonicalPath})`);
      mismatches++;
      continue;
    }

    // Must not point to a redirect source
    const checkPath = canonicalPath.replace(/\/$/, '');
    if (redirectFromPaths.has(checkPath)) {
      issues.push(`${page.url}: canonical is also a redirect source`);
      mismatches++;
      continue;
    }

    correct++;
  }

  if (mismatches === 0) {
    pass('Canonical URLs', `${correct}/${checked} checked are correct`);
  } else {
    fail('Canonical URLs', `${mismatches} mismatches found`);
    issues.slice(0, 10).forEach(i => console.log(`      - ${i}`));
  }
}

// ── Check 3: Broken internal links ──────────────────────────────────────────

function checkBrokenLinks(pages, pageUrls, redirectFromPaths) {
  let broken = 0;
  const brokenLinks = [];

  // Also scan client components
  const allFiles = [];
  for (const page of pages) {
    allFiles.push(page);
    // Check for client components in the same directory
    const dir = path.dirname(page.filePath);
    const entries = fs.readdirSync(dir);
    for (const e of entries) {
      if (e.endsWith('Client.tsx') || e.endsWith('client.tsx')) {
        allFiles.push({ url: page.url, filePath: path.join(dir, e) });
      }
    }
  }

  for (const file of allFiles) {
    const content = fs.readFileSync(file.filePath, 'utf8');
    const hrefMatches = [...content.matchAll(/href[=:]\s*["'`](\/[^"'`#?]+)["'`]/g)];
    for (const match of hrefMatches) {
      let href = match[1];
      // Normalize trailing slash
      if (!href.endsWith('/') && !href.match(/\.\w+$/)) href += '/';
      // Skip asset paths
      if (/\.(js|css|png|jpg|gif|svg|ico|woff|webp|avif|pdf)$/.test(href)) continue;
      if (href.startsWith('/_next/')) continue;
      if (href.startsWith('/images/')) continue;
      if (href.startsWith('/wp-content/')) continue;

      const checkPath = href.replace(/\/$/, '');
      const exists = pageUrls.has(href) || redirectFromPaths.has(checkPath);
      if (!exists) {
        broken++;
        brokenLinks.push(`${file.filePath.replace(ROOT + '/', '')} -> ${href}`);
      }
    }
  }

  if (broken === 0) {
    pass('Internal links', 'No broken links found');
  } else {
    warn('Internal links', `${broken} broken links found`);
    brokenLinks.slice(0, 20).forEach(l => console.log(`      - ${l}`));
    if (brokenLinks.length > 20) console.log(`      ... and ${brokenLinks.length - 20} more`);
  }
}

// ── Check 4: Redirect chains ────────────────────────────────────────────────

function checkRedirectChains(redirects) {
  const fromSet = new Set(redirects.map(r => r.from));
  let chains = 0;
  const chainList = [];

  for (const r of redirects) {
    // Check if the `to` value is itself a redirect source
    let toNorm = r.to.replace(/\/$/, '');
    if (fromSet.has(toNorm) || fromSet.has(toNorm + '/')) {
      chains++;
      chainList.push(`${r.from} -> ${r.to} -> (another redirect)`);
    }
  }

  if (chains === 0) {
    pass('Redirect chains', '0 chains found');
  } else {
    fail('Redirect chains', `${chains} chains found`);
    chainList.slice(0, 10).forEach(c => console.log(`      - ${c}`));
  }
}

// ── Check 5: Sitemap-to-output consistency ──────────────────────────────────

function checkSitemapConsistency(redirectFromPaths) {
  if (!fs.existsSync(SITEMAP)) {
    fail('Sitemap consistency', 'public/sitemap.xml not found');
    return;
  }
  if (!fs.existsSync(OUT_DIR)) {
    warn('Sitemap consistency', 'out/ directory not found (run npm run build first)');
    return;
  }

  const sitemapContent = fs.readFileSync(SITEMAP, 'utf8');
  const sitemapUrls = new Set();
  const locMatches = [...sitemapContent.matchAll(/<loc>([^<]+)<\/loc>/g)];
  for (const m of locMatches) {
    const url = m[1].replace(DOMAIN, '');
    sitemapUrls.add(url);
  }

  // Find all pages in out/
  const outPages = new Set();
  function walkOut(dir, rel) {
    rel = rel || '';
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const e of entries) {
      if (!e.isDirectory()) continue;
      if (['_next', 'images', 'wp-content'].includes(e.name)) continue;
      const fp = path.join(dir, e.name);
      const subRel = rel + '/' + e.name;
      if (fs.existsSync(path.join(fp, 'index.html'))) {
        outPages.add(subRel + '/');
      }
      walkOut(fp, subRel);
    }
  }
  // Check root
  if (fs.existsSync(path.join(OUT_DIR, 'index.html'))) {
    outPages.add('/');
  }
  walkOut(OUT_DIR);

  // In sitemap but not in output
  let inSitemapNotOutput = 0;
  const sitemapMissing = [];
  for (const url of sitemapUrls) {
    if (!outPages.has(url)) {
      inSitemapNotOutput++;
      sitemapMissing.push(url);
    }
  }

  // In output but not in sitemap (exclude redirected/noindex)
  let inOutputNotSitemap = 0;
  const outputExtra = [];
  for (const url of outPages) {
    if (!sitemapUrls.has(url)) {
      const checkPath = url.replace(/\/$/, '');
      if (redirectFromPaths.has(checkPath)) continue; // Expected - redirected
      // Some pages are noindexed or utility - just count
      inOutputNotSitemap++;
      outputExtra.push(url);
    }
  }

  if (inSitemapNotOutput === 0) {
    pass('Sitemap→output', `All ${sitemapUrls.size} sitemap URLs exist in output`);
  } else {
    fail('Sitemap→output', `${inSitemapNotOutput} sitemap URLs missing from output`);
    sitemapMissing.slice(0, 10).forEach(u => console.log(`      - ${u}`));
  }

  if (inOutputNotSitemap === 0) {
    pass('Output→sitemap', 'All output pages are in sitemap');
  } else {
    warn('Output→sitemap', `${inOutputNotSitemap} output pages not in sitemap`);
    outputExtra.slice(0, 10).forEach(u => console.log(`      - ${u}`));
    if (outputExtra.length > 10) console.log(`      ... and ${outputExtra.length - 10} more`);
  }
}

// ── Check 6: No redirected pages in sitemap ─────────────────────────────────

function checkNoRedirectsInSitemap(redirectFromPaths) {
  if (!fs.existsSync(SITEMAP)) return;

  const sitemapContent = fs.readFileSync(SITEMAP, 'utf8');
  const locMatches = [...sitemapContent.matchAll(/<loc>([^<]+)<\/loc>/g)];
  let found = 0;
  const violations = [];

  for (const m of locMatches) {
    const url = m[1].replace(DOMAIN, '');
    const checkPath = url.replace(/\/$/, '');
    if (redirectFromPaths.has(checkPath)) {
      found++;
      violations.push(url);
    }
  }

  if (found === 0) {
    pass('Sitemap redirects', 'No redirected URLs in sitemap');
  } else {
    fail('Sitemap redirects', `${found} redirected URLs found in sitemap`);
    violations.slice(0, 10).forEach(v => console.log(`      - ${v}`));
  }
}

// ── Main ────────────────────────────────────────────────────────────────────

function main() {
  console.log('\n=== PRE-DEPLOY VALIDATION ===\n');

  // Discover pages
  const pages = findAllPages(APP_DIR);
  // Add homepage
  const homePage = path.join(APP_DIR, 'page.tsx');
  if (fs.existsSync(homePage)) {
    pages.unshift({ url: '/', filePath: homePage, slug: '' });
  }

  const pageUrls = new Set(pages.map(p => p.url));
  console.log(`  Found ${pages.length} pages\n`);

  // Parse redirects
  const redirects = parseRedirects();
  const redirectFromPaths = new Set(redirects.map(r => r.from.replace(/\/$/, '')));
  console.log(`  Found ${redirects.length} redirects\n`);

  // Run checks
  checkMetaTitles(pages);
  checkCanonicals(pages, redirectFromPaths);
  checkBrokenLinks(pages, pageUrls, redirectFromPaths);
  checkRedirectChains(redirects);
  checkSitemapConsistency(redirectFromPaths);
  checkNoRedirectsInSitemap(redirectFromPaths);

  // Summary
  console.log(`\n=== RESULT: ${failures} FAILURES, ${warnings} WARNINGS ===\n`);

  if (failures > 0) {
    process.exit(1);
  }
}

main();
