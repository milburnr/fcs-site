#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const APP_DIR = path.join(ROOT, 'app');
const NETLIFY_TOML = path.join(ROOT, 'netlify.toml');

// Discover all pages
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
      pages.push({ url: '/' + slug + '/', filePath: pagePath, slug });
    }
    pages.push(...findAllPages(sub, slug));
  }
  return pages;
}

const pages = findAllPages(APP_DIR);
const homePage = path.join(APP_DIR, 'page.tsx');
if (fs.existsSync(homePage)) pages.unshift({ url: '/', filePath: homePage, slug: '' });
const pageUrls = new Set(pages.map(p => p.url));

// Parse redirects
const toml = fs.readFileSync(NETLIFY_TOML, 'utf8');
const redirectFromPaths = new Set();
const blocks = toml.split('[[redirects]]').slice(1);
for (const block of blocks) {
  const fromMatch = block.match(/from\s*=\s*"([^"]+)"/);
  const statusMatch = block.match(/status\s*=\s*(\d+)/);
  if (fromMatch && statusMatch && parseInt(statusMatch[1]) === 301) {
    let fp = fromMatch[1].replace(/\/$/, '');
    if (!fp.includes('*') && fp) redirectFromPaths.add(fp);
  }
}

// Find all broken links
const allFiles = [];
for (const page of pages) {
  allFiles.push(page);
  const dir = path.dirname(page.filePath);
  const entries = fs.readdirSync(dir);
  for (const e of entries) {
    if (e.endsWith('Client.tsx') || e.endsWith('client.tsx')) {
      allFiles.push({ url: page.url, filePath: path.join(dir, e) });
    }
  }
}

const broken = {};
for (const file of allFiles) {
  const content = fs.readFileSync(file.filePath, 'utf8');
  const hrefMatches = [...content.matchAll(/href[=:]\s*["'`](\/[^"'`#?]+)["'`]/g)];
  for (const match of hrefMatches) {
    let href = match[1];
    if (!href.endsWith('/') && !href.match(/\.\w+$/)) href += '/';
    if (/\.(js|css|png|jpg|gif|svg|ico|woff|webp|avif|pdf)$/.test(href)) continue;
    if (href.startsWith('/_next/') || href.startsWith('/images/') || href.startsWith('/wp-content/')) continue;

    const checkPath = href.replace(/\/$/, '');
    const exists = pageUrls.has(href) || redirectFromPaths.has(checkPath);
    if (!exists) {
      const relFile = file.filePath.replace(ROOT + '/', '');
      if (!broken[href]) broken[href] = [];
      broken[href].push(relFile);
    }
  }
}

console.log(`\nBroken links: ${Object.keys(broken).length} unique targets\n`);
for (const [target, sources] of Object.entries(broken).sort()) {
  console.log(`  ${target}`);
  sources.forEach(s => console.log(`    <- ${s}`));
}
