#!/usr/bin/env node
/**
 * BFS crawl depth analysis on build output HTML.
 * More accurate than source-code analysis because it includes
 * dynamic component output (RelatedServices, NearbyLocations, etc.)
 */
const fs = require('fs');
const path = require('path');
const OUT = path.join(__dirname, '..', 'out');

function getLinks(htmlFile) {
  if (!fs.existsSync(htmlFile)) return [];
  const content = fs.readFileSync(htmlFile, 'utf8');
  const matches = [...content.matchAll(/href="(\/[^"#?]+)"/g)];
  return [...new Set(matches.map(m => {
    let h = m[1];
    if (!h.endsWith('/') && !h.match(/\.\w+$/)) h += '/';
    return h;
  }).filter(h => {
    return !h.match(/\.(js|css|png|jpg|svg|ico|woff|webp|avif|gif)$/)
      && !h.startsWith('/_next/')
      && !h.startsWith('/images/')
      && !h.startsWith('/wp-content/')
      && !h.startsWith('/favicon');
  }))];
}

// Get all pages
const allPages = new Set();
function walk(dir, rel) {
  rel = rel || '';
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const fp = path.join(dir, e.name);
    if (e.isDirectory() && !['_next', 'images', 'wp-content'].includes(e.name)) {
      walk(fp, rel + '/' + e.name);
    } else if (e.name === 'index.html') {
      allPages.add(rel === '' ? '/' : rel + '/');
    }
  }
}
walk(OUT);

// BFS from homepage
const depth = new Map();
depth.set('/', 0);
const queue = ['/'];
while (queue.length > 0) {
  const current = queue.shift();
  const d = depth.get(current);
  const htmlPath = current === '/'
    ? path.join(OUT, 'index.html')
    : path.join(OUT, current.slice(1), 'index.html');
  const links = getLinks(htmlPath);
  for (const link of links) {
    if (allPages.has(link) && !depth.has(link)) {
      depth.set(link, d + 1);
      queue.push(link);
    }
  }
}

// Count inbound links
const inbound = new Map();
for (const url of allPages) inbound.set(url, 0);
for (const url of allPages) {
  const htmlPath = url === '/'
    ? path.join(OUT, 'index.html')
    : path.join(OUT, url.slice(1), 'index.html');
  const links = getLinks(htmlPath);
  for (const link of links) {
    if (inbound.has(link)) {
      inbound.set(link, inbound.get(link) + 1);
    }
  }
}

const unreachable = [...allPages].filter(u => !depth.has(u)).sort();
const depthCounts = {};
for (const [, d] of depth) {
  depthCounts[d] = (depthCounts[d] || 0) + 1;
}

// Orphans (< 3 inbound)
const orphans = [...inbound.entries()]
  .filter(([url, count]) => count < 3 && url !== '/')
  .sort((a, b) => a[1] - b[1]);

console.log('Total pages:', allPages.size);
console.log('Reachable:', depth.size);
console.log('Unreachable:', unreachable.length);
console.log('Depth distribution:', JSON.stringify(depthCounts));
console.log('Orphans (<3 inbound):', orphans.length);
if (orphans.length > 0) {
  console.log('  Sample orphans:');
  orphans.slice(0, 10).forEach(([url, count]) => console.log('   ', url, '(' + count + ' inbound)'));
}

if (unreachable.length > 0) {
  console.log('\nUnreachable pages:');
  unreachable.forEach(u => console.log(' ', u));
}

// Check key pages
console.log('\nKey pages depth:');
const keyPages = [
  '/commercial/', '/residential/', '/insurance/',
  '/commercial/guides/', '/residential/guides/', '/insurance/guides/',
  '/commercial-construction-tampa/', '/insurance-restoration-tampa/',
  '/disaster-recovery-tampa/', '/luxury-custom-homes-tampa/',
  '/locations/',
];
for (const p of keyPages) {
  if (!allPages.has(p)) { console.log(' ', p, '-> NOT IN BUILD'); continue; }
  const d = depth.has(p) ? depth.get(p) : 'UNREACHABLE';
  const ib = inbound.get(p) || 0;
  console.log(' ', p, '-> depth', d, ', inbound:', ib);
}
