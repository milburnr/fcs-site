#!/usr/bin/env node
/**
 * audit-discover.mjs
 *
 * Static crawl of out/ HTML to produce audit-findings.json keyed by issue
 * codes from AUDIT-TODO-2026-04-30.md. No browser required.
 *
 * Usage:
 *   node scripts/audit-discover.mjs            # use cached image HEAD results
 *   node scripts/audit-discover.mjs --recheck  # re-HEAD every unique image URL
 */
import fs from 'node:fs';
import fsp from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as cheerio from 'cheerio';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const OUT_DIR = path.join(ROOT, 'out');
const PUBLIC_DIR = path.join(ROOT, 'public');
const SITE_BASE = 'https://floridaconstructionspecialists.com';
const R2_BASE = 'https://pub-293ff74728cf48d6827f2ddadc36947a.r2.dev';
const FINDINGS_PATH = path.join(ROOT, 'audit-findings.json');
const IMG_CACHE_PATH = path.join(ROOT, '.audit-img-cache.json');

const RECHECK = process.argv.includes('--recheck');
const TITLE_LIMIT = 60;
const META_DESC_MIN = 70;
const META_DESC_MAX = 160;
const IMG_SIZE_THRESHOLD = 100 * 1024; // 100 KB

// ────────────────────────────────────────────────────────────
// 1. Walk out/ for HTML files
// ────────────────────────────────────────────────────────────
async function walkHtml(dir, acc = []) {
  const entries = await fsp.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    if (e.name === '_next' || e.name === 'node_modules') continue;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) await walkHtml(full, acc);
    else if (e.isFile() && e.name.endsWith('.html')) acc.push(full);
  }
  return acc;
}

function htmlPathToUrlPath(htmlPath) {
  const rel = path.relative(OUT_DIR, htmlPath).replace(/\\/g, '/');
  if (rel === 'index.html') return '/';
  if (rel === '404.html') return '/404';
  if (rel.endsWith('/index.html')) return '/' + rel.slice(0, -'/index.html'.length) + '/';
  if (rel.endsWith('.html')) return '/' + rel.slice(0, -'.html'.length) + '/';
  return '/' + rel;
}

// ────────────────────────────────────────────────────────────
// 2. Parse netlify.toml + _redirects
// ────────────────────────────────────────────────────────────
function parseNetlifyToml() {
  const txt = fs.readFileSync(path.join(ROOT, 'netlify.toml'), 'utf-8');
  const blocks = txt.split('[[redirects]]').slice(1);
  const redirects = [];
  for (const b of blocks) {
    const from = b.match(/from\s*=\s*"([^"]+)"/)?.[1];
    const to = b.match(/to\s*=\s*"([^"]+)"/)?.[1];
    const status = parseInt(b.match(/status\s*=\s*(\d+)/)?.[1] || '301', 10);
    if (from && to) redirects.push({ from, to, status });
  }
  return redirects;
}

function parseRedirectsFile() {
  const txt = fs.readFileSync(path.join(PUBLIC_DIR, '_redirects'), 'utf-8');
  const out = [];
  for (const line of txt.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const m = trimmed.match(/^(\S+)\s+(\S+)(?:\s+(\d+))?/);
    if (!m) continue;
    out.push({ from: m[1], to: m[2], status: parseInt(m[3] || '301', 10) });
  }
  return out;
}

function buildRedirectMap(redirects) {
  // Map from path → final destination, only static (no wildcards)
  const map = new Map();
  for (const r of redirects) {
    if (r.from.includes('*') || r.from.includes(':')) continue;
    if (r.status >= 300 && r.status < 400) map.set(normalizePath(r.from), r.to);
  }
  return map;
}

function normalizePath(p) {
  if (!p) return p;
  if (p.startsWith('http')) return p;
  let q = p;
  if (!q.startsWith('/')) q = '/' + q;
  // collapse trailing slash variants except root
  if (q.length > 1 && q.endsWith('/')) q = q.slice(0, -1);
  return q;
}

function followRedirects(start, map, maxHops = 10) {
  const chain = [start];
  let cur = start;
  for (let i = 0; i < maxHops; i++) {
    const next = map.get(normalizePath(cur));
    if (!next || next === cur) break;
    chain.push(next);
    cur = next;
  }
  return chain;
}

// ────────────────────────────────────────────────────────────
// 3. Image existence: R2 HEAD check (cached)
// ────────────────────────────────────────────────────────────
async function loadImgCache() {
  try { return JSON.parse(await fsp.readFile(IMG_CACHE_PATH, 'utf-8')); }
  catch { return {}; }
}

async function saveImgCache(cache) {
  await fsp.writeFile(IMG_CACHE_PATH, JSON.stringify(cache, null, 2));
}

function resolveImgUrl(src) {
  if (!src) return null;
  // strip query
  src = src.split('?')[0].split('#')[0];
  if (src.startsWith('data:')) return null;
  if (src.startsWith('//')) src = 'https:' + src;
  if (src.startsWith('http')) {
    // Only check our own domains
    if (src.includes('floridaconstructionspecialists.com')) {
      const u = new URL(src);
      return { kind: 'site', path: u.pathname };
    }
    if (src.includes('pub-293ff74728cf48d6827f2ddadc36947a.r2.dev')) {
      const u = new URL(src);
      return { kind: 'r2', path: u.pathname };
    }
    return null; // external — don't bother
  }
  // relative
  return { kind: 'site', path: src.startsWith('/') ? src : '/' + src };
}

function siteToCheckUrl(p) {
  // Apply proxy: /images/* and /wp-content/uploads/* go to R2
  if (p.startsWith('/images/')) return `${R2_BASE}${p}`;
  if (p.startsWith('/wp-content/uploads/')) return `${R2_BASE}${p}`;
  // local file in public/
  return null;
}

function localFileForSite(p) {
  // Check if a local file exists in public/ as a fallback
  return path.join(PUBLIC_DIR, p.replace(/^\//, ''));
}

async function headCheck(url, timeoutMs = 8000) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const r = await fetch(url, { method: 'HEAD', signal: ctrl.signal });
    return { ok: r.ok, status: r.status, contentLength: parseInt(r.headers.get('content-length') || '0', 10) || 0, contentType: r.headers.get('content-type') || '' };
  } catch (e) {
    return { ok: false, status: 0, error: String(e.message || e) };
  } finally {
    clearTimeout(t);
  }
}

async function verifyImage(resolved, cache) {
  const key = `${resolved.kind}:${resolved.path}`;
  if (!RECHECK && cache[key]) return cache[key];

  let result;
  if (resolved.kind === 'r2') {
    result = await headCheck(`${R2_BASE}${resolved.path}`);
  } else if (resolved.kind === 'site') {
    // Netlify proxies /images/* and /wp-content/uploads/* to R2 with a NON-FORCE
    // rewrite, which means a static file in the build output takes precedence.
    // So check out/ and public/ first; only proxy to R2 if the local file is
    // missing. Reflects production behavior.
    const candidates = [
      path.join(ROOT, 'out', resolved.path.replace(/^\//, '')),
      path.join(PUBLIC_DIR, resolved.path.replace(/^\//, '')),
    ];
    for (const c of candidates) {
      try {
        const stat = await fsp.stat(c);
        result = { ok: true, status: 200, contentLength: stat.size, contentType: '', source: 'local' };
        break;
      } catch { /* try next */ }
    }
    if (!result) {
      const checkUrl = siteToCheckUrl(resolved.path);
      result = checkUrl ? await headCheck(checkUrl) : { ok: false, status: 404, error: 'local-not-found' };
    }
  } else {
    result = { ok: false, status: 0, error: 'unknown-kind' };
  }
  cache[key] = result;
  return result;
}

// ────────────────────────────────────────────────────────────
// 4. Sitemap parse
// ────────────────────────────────────────────────────────────
async function parseSitemap() {
  const sitemapPaths = [path.join(OUT_DIR, 'sitemap.xml'), path.join(PUBLIC_DIR, 'sitemap.xml')];
  for (const p of sitemapPaths) {
    if (fs.existsSync(p)) {
      const xml = await fsp.readFile(p, 'utf-8');
      const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
      return { path: p, locs };
    }
  }
  return { path: null, locs: [] };
}

// ────────────────────────────────────────────────────────────
// 5. Page parse
// ────────────────────────────────────────────────────────────
function parsePage(htmlPath) {
  const html = fs.readFileSync(htmlPath, 'utf-8');
  const $ = cheerio.load(html);

  const url = htmlPathToUrlPath(htmlPath);
  const title = $('head > title').text().trim();
  const metaDescription = $('meta[name="description"]').attr('content') || '';
  const robots = $('meta[name="robots"]').attr('content') || '';
  const canonical = $('link[rel="canonical"]').attr('href') || '';

  const noindex = /noindex/i.test(robots);
  const nofollow = /nofollow/i.test(robots);

  const imgs = [];
  $('img').each((_, el) => {
    const $el = $(el);
    const src = $el.attr('src');
    const alt = $el.attr('alt');
    const srcset = $el.attr('srcset');
    if (src) imgs.push({ src, alt, srcset, hasAltAttr: alt !== undefined });
  });
  $('source').each((_, el) => {
    const $el = $(el);
    const srcset = $el.attr('srcset');
    if (srcset) imgs.push({ src: null, srcset });
  });

  const links = [];
  $('a[href]').each((_, el) => {
    const href = $(el).attr('href');
    if (!href) return;
    if (href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('#')) return;
    if (href.startsWith('javascript:')) return;
    links.push(href);
  });

  // JSON-LD
  const jsonld = [];
  $('script[type="application/ld+json"]').each((_, el) => {
    const txt = $(el).html() || '';
    try {
      const parsed = JSON.parse(txt);
      jsonld.push(parsed);
    } catch {
      jsonld.push({ __invalid__: true, raw: txt.slice(0, 200) });
    }
  });

  return { url, htmlPath, title, metaDescription, robots, canonical, noindex, nofollow, imgs, links, jsonld };
}

// ────────────────────────────────────────────────────────────
// 6. Schema validation (Google rich-result minimal checks)
// ────────────────────────────────────────────────────────────
function validateSchema(node, path = '$') {
  const errors = [];
  if (!node || typeof node !== 'object') return errors;
  if (node.__invalid__) {
    errors.push({ path, error: 'invalid-json' });
    return errors;
  }
  const t = Array.isArray(node['@type']) ? node['@type'][0] : node['@type'];
  if (!t) return errors;

  // Article-family: requires headline, image, datePublished, author with name, publisher with name+logo
  if (/^(Article|NewsArticle|BlogPosting)$/i.test(t)) {
    if (!node.headline) errors.push({ path, type: t, error: 'missing-headline' });
    if (!node.image) errors.push({ path, type: t, error: 'missing-image' });
    if (!node.datePublished) errors.push({ path, type: t, error: 'missing-datePublished' });
    if (!node.author || (typeof node.author === 'object' && !node.author.name)) errors.push({ path, type: t, error: 'missing-author-name' });
    if (!node.publisher || (typeof node.publisher === 'object' && (!node.publisher.name || !node.publisher.logo))) errors.push({ path, type: t, error: 'missing-publisher' });
  }
  if (/^Product$/i.test(t)) {
    if (!node.name) errors.push({ path, type: t, error: 'missing-name' });
    if (!node.image) errors.push({ path, type: t, error: 'missing-image' });
  }
  if (/^FAQPage$/i.test(t)) {
    const me = node.mainEntity;
    if (!me || (Array.isArray(me) && me.length === 0)) errors.push({ path, type: t, error: 'empty-mainEntity' });
  }
  if (/^BreadcrumbList$/i.test(t)) {
    const items = node.itemListElement;
    if (!items || (Array.isArray(items) && items.length === 0)) errors.push({ path, type: t, error: 'empty-itemListElement' });
  }
  if (/^(LocalBusiness|GeneralContractor|HomeAndConstructionBusiness)$/i.test(t)) {
    if (!node.name) errors.push({ path, type: t, error: 'missing-name' });
    if (!node.address) errors.push({ path, type: t, error: 'missing-address' });
    if (!node.telephone) errors.push({ path, type: t, error: 'missing-telephone' });
  }

  // Recurse mainEntity / @graph
  if (Array.isArray(node['@graph'])) {
    node['@graph'].forEach((g, i) => errors.push(...validateSchema(g, `${path}.@graph[${i}]`)));
  }
  return errors;
}

// ────────────────────────────────────────────────────────────
// 7. Main
// ────────────────────────────────────────────────────────────
async function main() {
  console.log('🔍 Discovery starting…');

  const htmlFiles = await walkHtml(OUT_DIR);
  console.log(`  ${htmlFiles.length} HTML files in out/`);

  const tomlRedirects = parseNetlifyToml();
  const fileRedirects = parseRedirectsFile();
  const allRedirects = [...tomlRedirects, ...fileRedirects];
  console.log(`  ${tomlRedirects.length} netlify.toml redirects, ${fileRedirects.length} _redirects entries`);

  const redirectMap = buildRedirectMap(allRedirects);
  console.log(`  ${redirectMap.size} static redirect entries`);

  const sitemap = await parseSitemap();
  console.log(`  sitemap: ${sitemap.locs.length} <loc> entries (${sitemap.path})`);

  // Parse all pages
  console.log('  parsing pages…');
  const pages = htmlFiles.map(parsePage);
  const pageByUrl = new Map();
  for (const p of pages) pageByUrl.set(normalizePath(p.url), p);

  // ── Build set of valid built page URLs ──
  const builtPaths = new Set();
  for (const p of pages) {
    builtPaths.add(normalizePath(p.url));
  }

  // ── Image verification ──
  console.log('  verifying images…');
  const imgCache = await loadImgCache();
  const uniqImgUrls = new Map(); // key → resolved
  for (const p of pages) {
    for (const img of p.imgs) {
      const candidates = [];
      if (img.src) candidates.push(img.src);
      if (img.srcset) {
        // parse srcset
        for (const part of img.srcset.split(',')) {
          const url = part.trim().split(/\s+/)[0];
          if (url) candidates.push(url);
        }
      }
      for (const c of candidates) {
        const r = resolveImgUrl(c);
        if (!r) continue;
        const key = `${r.kind}:${r.path}`;
        if (!uniqImgUrls.has(key)) uniqImgUrls.set(key, r);
      }
    }
  }
  console.log(`  ${uniqImgUrls.size} unique image URLs`);

  let checked = 0;
  const imgResults = new Map();
  const concurrency = 16;
  const entries = [...uniqImgUrls.entries()];
  let idx = 0;
  async function worker() {
    while (true) {
      const i = idx++;
      if (i >= entries.length) return;
      const [k, r] = entries[i];
      const res = await verifyImage(r, imgCache);
      imgResults.set(k, res);
      checked++;
      if (checked % 50 === 0) process.stdout.write(`    ${checked}/${entries.length}\r`);
    }
  }
  await Promise.all(Array.from({ length: concurrency }, worker));
  await saveImgCache(imgCache);
  console.log(`    ${checked}/${entries.length} done`);

  // ── A1/A2: Broken images ──
  const A1_pagesWithBrokenImg = new Map(); // url → list of broken srcs
  const A2_brokenImageUrls = new Set();
  const A3_oversizedImages = new Map(); // url → bytes
  for (const p of pages) {
    for (const img of p.imgs) {
      if (!img.src) continue;
      const r = resolveImgUrl(img.src);
      if (!r) continue;
      const key = `${r.kind}:${r.path}`;
      const res = imgResults.get(key);
      if (!res) continue;
      if (!res.ok) {
        if (!A1_pagesWithBrokenImg.has(p.url)) A1_pagesWithBrokenImg.set(p.url, []);
        A1_pagesWithBrokenImg.get(p.url).push({ src: img.src, status: res.status, error: res.error });
        A2_brokenImageUrls.add(img.src);
      } else if (res.contentLength > IMG_SIZE_THRESHOLD) {
        A3_oversizedImages.set(img.src, res.contentLength);
      }
    }
  }

  // ── M1: Missing alt text ──
  const M1_missingAlt = []; // {page, src}
  for (const p of pages) {
    for (const img of p.imgs) {
      if (img.src && !img.hasAltAttr) {
        M1_missingAlt.push({ page: p.url, src: img.src });
      }
    }
  }

  // ── B1/B2/B4/B5: Internal links to broken pages ──
  const B1_pagesNotFound = new Set();
  const B4_pagesWithBrokenLinks = new Map(); // page → [hrefs]
  const B5_noindexPagesWithBrokenLinks = new Map();
  for (const p of pages) {
    for (const href of p.links) {
      if (!href.startsWith('/') && !href.startsWith(SITE_BASE)) continue; // external
      let target = href.startsWith('http') ? new URL(href).pathname + (href.includes('?') ? '?' + href.split('?')[1].split('#')[0] : '') : href;
      target = target.split('?')[0].split('#')[0];
      const norm = normalizePath(target);

      // Check redirects first (link to a redirect, not a 404)
      const chain = followRedirects(norm, redirectMap);
      const final = chain[chain.length - 1];
      if (final.startsWith('http')) continue; // redirected to external
      const finalNorm = normalizePath(final);

      // Image proxy paths and asset paths shouldn't be checked as pages
      if (finalNorm.startsWith('/images/') || finalNorm.startsWith('/wp-content') || finalNorm.startsWith('/_next/') || finalNorm.endsWith('.xml') || finalNorm.endsWith('.txt') || finalNorm.endsWith('.jpg') || finalNorm.endsWith('.png') || finalNorm.endsWith('.webp') || finalNorm.endsWith('.svg') || finalNorm.endsWith('.ico')) continue;

      const inBuild = builtPaths.has(finalNorm) || builtPaths.has(finalNorm + '/') || builtPaths.has(normalizePath(finalNorm + '/'));
      if (!inBuild) {
        B1_pagesNotFound.add(finalNorm);
        const bucket = p.noindex ? B5_noindexPagesWithBrokenLinks : B4_pagesWithBrokenLinks;
        if (!bucket.has(p.url)) bucket.set(p.url, new Set());
        bucket.get(p.url).add(href);
      }
    }
  }

  // ── C1: non-canonical pages in sitemap (sitemap loc differs from page canonical) ──
  // ── C3: noindex pages in sitemap ──
  const C1_nonCanonicalInSitemap = [];
  const C3_noindexInSitemap = [];
  for (const loc of sitemap.locs) {
    const u = new URL(loc);
    const norm = normalizePath(u.pathname);
    const page = pageByUrl.get(norm) || pageByUrl.get(norm + '/') || pageByUrl.get(normalizePath(norm + '/'));
    if (!page) continue;
    if (page.canonical) {
      const can = normalizePath(new URL(page.canonical, SITE_BASE).pathname);
      if (can !== norm) {
        C1_nonCanonicalInSitemap.push({ loc, canonical: page.canonical });
      }
    }
    if (page.noindex) {
      C3_noindexInSitemap.push(loc);
    }
  }

  // ── D1/D2: orphan pages (built but not linked from any indexable page) ──
  const linkedTargets = new Set();
  for (const p of pages) {
    if (p.noindex) continue; // links from noindex pages don't count for indexability
    for (const href of p.links) {
      if (!href.startsWith('/') && !href.startsWith(SITE_BASE)) continue;
      let target = href.startsWith('http') ? new URL(href).pathname : href;
      target = target.split('?')[0].split('#')[0];
      const chain = followRedirects(normalizePath(target), redirectMap);
      const final = chain[chain.length - 1];
      if (!final.startsWith('http')) linkedTargets.add(normalizePath(final));
    }
  }
  const D1_orphans = [];
  const D2_orphansNoindex = [];
  for (const p of pages) {
    if (p.url === '/' || p.url === '/404' || p.url === '/404/') continue;
    const norm = normalizePath(p.url);
    if (!linkedTargets.has(norm)) {
      if (p.noindex) D2_orphansNoindex.push(p.url);
      else D1_orphans.push(p.url);
    }
  }

  // ── L1: title too long ──
  const L1_longTitles = [];
  for (const p of pages) {
    if (p.title && p.title.length > TITLE_LIMIT) {
      L1_longTitles.push({ url: p.url, title: p.title, length: p.title.length });
    }
  }

  // ── M2 / L11 / L12: meta descriptions ──
  const M2_shortDesc = [];
  const L11_longDesc = [];
  const L12_shortDescNoindex = [];
  for (const p of pages) {
    const len = p.metaDescription.length;
    if (len === 0) continue;
    if (len < META_DESC_MIN) {
      (p.noindex ? L12_shortDescNoindex : M2_shortDesc).push({ url: p.url, length: len, description: p.metaDescription });
    } else if (len > META_DESC_MAX) {
      L11_longDesc.push({ url: p.url, length: len, description: p.metaDescription });
    }
  }

  // ── L2/L3: pages with links to redirected URL ──
  const L2_pagesWithRedirectLinks = new Map();
  const L3_noindexPagesWithRedirectLinks = new Map();
  for (const p of pages) {
    for (const href of p.links) {
      if (!href.startsWith('/') && !href.startsWith(SITE_BASE)) continue;
      let target = href.startsWith('http') ? new URL(href).pathname : href;
      target = target.split('?')[0].split('#')[0];
      const norm = normalizePath(target);
      if (redirectMap.has(norm)) {
        const final = redirectMap.get(norm);
        const bucket = p.noindex ? L3_noindexPagesWithRedirectLinks : L2_pagesWithRedirectLinks;
        if (!bucket.has(p.url)) bucket.set(p.url, []);
        bucket.get(p.url).push({ href, finalUrl: final });
      }
    }
  }

  // ── L8: redirect chains ──
  const L8_chains = [];
  for (const [from] of redirectMap) {
    const chain = followRedirects(from, redirectMap);
    if (chain.length > 2) L8_chains.push(chain);
  }

  // ── L9/L10: noindex inventory ──
  const L9_noindex = pages.filter(p => p.noindex).map(p => p.url);
  const L10_noindexFollow = pages.filter(p => p.noindex && !p.nofollow).map(p => p.url);

  // ── L14: Schema validation ──
  const L14_schemaErrors = [];
  for (const p of pages) {
    const errs = [];
    for (let i = 0; i < p.jsonld.length; i++) {
      errs.push(...validateSchema(p.jsonld[i], `script[${i}]`));
    }
    if (errs.length > 0) L14_schemaErrors.push({ url: p.url, errors: errs });
  }

  // ── B3: timed-out pages — proxy by HTML byte size > threshold (heuristic only) ──
  const B3_largePages = [];
  for (const p of pages) {
    const size = fs.statSync(p.htmlPath).size;
    if (size > 500 * 1024) B3_largePages.push({ url: p.url, htmlBytes: size });
  }

  // ── L4/L5: pages with only one dofollow incoming internal link ──
  const incoming = new Map(); // norm path → count
  for (const p of pages) {
    if (p.noindex || p.nofollow) continue;
    for (const href of p.links) {
      if (!href.startsWith('/') && !href.startsWith(SITE_BASE)) continue;
      let target = href.startsWith('http') ? new URL(href).pathname : href;
      target = target.split('?')[0].split('#')[0];
      const final = followRedirects(normalizePath(target), redirectMap).pop();
      if (!final.startsWith('http')) {
        const k = normalizePath(final);
        incoming.set(k, (incoming.get(k) || 0) + 1);
      }
    }
  }
  const L4_oneIncoming = [];
  const L5_oneIncomingNoindex = [];
  for (const p of pages) {
    if (p.url === '/' || p.url === '/404' || p.url === '/404/') continue;
    const c = incoming.get(normalizePath(p.url)) || 0;
    if (c === 1) (p.noindex ? L5_oneIncomingNoindex : L4_oneIncoming).push(p.url);
  }

  // ── Output ──
  const findings = {
    generatedAt: new Date().toISOString(),
    counts: {
      pages: pages.length,
      uniqueImages: uniqImgUrls.size,
      sitemapEntries: sitemap.locs.length,
      redirects: allRedirects.length,
    },
    A1_pagesWithBrokenImg: Object.fromEntries(A1_pagesWithBrokenImg),
    A2_brokenImageUrls: [...A2_brokenImageUrls],
    A3_oversizedImages: Object.fromEntries(A3_oversizedImages),
    B1_pagesNotFound: [...B1_pagesNotFound],
    B4_pagesWithBrokenLinks: Object.fromEntries(
      [...B4_pagesWithBrokenLinks].map(([k, v]) => [k, [...v]])
    ),
    B5_noindexPagesWithBrokenLinks: Object.fromEntries(
      [...B5_noindexPagesWithBrokenLinks].map(([k, v]) => [k, [...v]])
    ),
    B3_largePages,
    C1_nonCanonicalInSitemap,
    C3_noindexInSitemap,
    D1_orphans,
    D2_orphansNoindex,
    L1_longTitles,
    L2_pagesWithRedirectLinks: Object.fromEntries(L2_pagesWithRedirectLinks),
    L3_noindexPagesWithRedirectLinks: Object.fromEntries(L3_noindexPagesWithRedirectLinks),
    L4_oneIncoming,
    L5_oneIncomingNoindex,
    L8_chains,
    L9_noindex,
    L10_noindexFollow,
    L11_longDesc,
    L12_shortDescNoindex,
    L14_schemaErrors,
    M1_missingAlt,
    M2_shortDesc,
  };

  await fsp.writeFile(FINDINGS_PATH, JSON.stringify(findings, null, 2));

  console.log('\n📊 Summary:');
  console.log(`  A1 pages with broken images: ${Object.keys(findings.A1_pagesWithBrokenImg).length}`);
  console.log(`  A2 broken image URLs:        ${findings.A2_brokenImageUrls.length}`);
  console.log(`  A3 oversized images:         ${Object.keys(findings.A3_oversizedImages).length}`);
  console.log(`  B1 broken page URLs:         ${findings.B1_pagesNotFound.length}`);
  console.log(`  B3 large HTML pages:         ${findings.B3_largePages.length}`);
  console.log(`  B4 indexable→broken pages:   ${Object.keys(findings.B4_pagesWithBrokenLinks).length}`);
  console.log(`  B5 noindex→broken pages:     ${Object.keys(findings.B5_noindexPagesWithBrokenLinks).length}`);
  console.log(`  C1 non-canonical in sitemap: ${findings.C1_nonCanonicalInSitemap.length}`);
  console.log(`  C3 noindex in sitemap:       ${findings.C3_noindexInSitemap.length}`);
  console.log(`  D1 orphans (indexable):      ${findings.D1_orphans.length}`);
  console.log(`  D2 orphans (noindex):        ${findings.D2_orphansNoindex.length}`);
  console.log(`  L1 titles >${TITLE_LIMIT} chars:        ${findings.L1_longTitles.length}`);
  console.log(`  L2 pages w/ redirect links:  ${Object.keys(findings.L2_pagesWithRedirectLinks).length}`);
  console.log(`  L3 noindex w/ redirect links:${Object.keys(findings.L3_noindexPagesWithRedirectLinks).length}`);
  console.log(`  L4 one-incoming-link:        ${findings.L4_oneIncoming.length}`);
  console.log(`  L8 redirect chains:          ${findings.L8_chains.length}`);
  console.log(`  L9 noindex pages:            ${findings.L9_noindex.length}`);
  console.log(`  L11 meta desc >${META_DESC_MAX}:        ${findings.L11_longDesc.length}`);
  console.log(`  L14 schema errors:           ${findings.L14_schemaErrors.length}`);
  console.log(`  M1 missing alt text:         ${findings.M1_missingAlt.length}`);
  console.log(`  M2 short meta desc:          ${findings.M2_shortDesc.length}`);
  console.log(`\n✓ wrote ${FINDINGS_PATH}`);
}

main().catch(e => { console.error(e); process.exit(1); });
