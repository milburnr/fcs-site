#!/usr/bin/env node
/**
 * Link Graph Audit Script
 * Builds a complete internal link graph, identifies orphan pages,
 * and calculates crawl depth via BFS from homepage.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const REPORT_PATH = path.join(ROOT, 'seo/link-graph-report.json');

// Pages to exclude from orphan checks
const EXCLUDED_PAGES = new Set([
  '/',  // homepage - root of the graph
]);

// Noindexed or redirected pages to exclude
const NOINDEX_PAGES = new Set([
  '/premium-homepage/',
  '/privacy/',
  '/terms/',
]);

// Top 30 most important pages that should be within 2 clicks
const TOP_PAGES = [
  '/', '/commercial/', '/residential/', '/insurance/',
  '/services/', '/locations/', '/contact/', '/about/',
  '/commercial-construction-tampa/', '/insurance-restoration-tampa/',
  '/disaster-recovery-tampa/', '/luxury-custom-homes-tampa/',
  '/balcony-reconstruction-tampa/', '/exterior-waterproofing-tampa/',
  '/historic-restoration/', '/multi-family-construction/',
  '/commercial/guides/', '/residential/guides/', '/insurance/guides/',
  '/insurance-restoration-clearwater/', '/insurance-restoration-st-petersburg/',
  '/commercial-construction-clearwater/', '/commercial-construction-st-petersburg/',
  '/luxury-custom-homes/', '/disaster-recovery/',
  '/balcony-reconstruction/', '/exterior-waterproofing/',
  '/commercial/condo-remediation/', '/gallery/', '/portfolio/',
];

function findAllPages(dir, basePath = '') {
  const results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (['node_modules', '.next', 'out', '.git', '.planning'].includes(entry.name)) continue;
      results.push(...findAllPages(fullPath, basePath + '/' + entry.name));
    } else if (entry.name === 'page.tsx') {
      // Convert file path to URL
      const url = basePath === '' ? '/' : basePath + '/';
      results.push({ url, filePath: fullPath });
    }
  }
  return results;
}

function extractHrefs(content) {
  const hrefs = new Set();
  // Match href="..." and href='...' and href: "..." and href: '...'
  const patterns = [
    /href=["'](\/[^"'#?]+)["']/g,
    /href:\s*["'](\/[^"'#?]+)["']/g,
  ];
  for (const pattern of patterns) {
    let match;
    while ((match = pattern.exec(content)) !== null) {
      let href = match[1];
      // Normalize: ensure trailing slash
      if (!href.endsWith('/') && !href.match(/\.\w+$/)) {
        href += '/';
      }
      // Skip asset paths
      if (href.match(/\.(js|css|png|jpg|gif|svg|ico|woff|webp|avif)$/)) continue;
      if (href.startsWith('/_next/')) continue;
      if (href.startsWith('/images/')) continue;
      if (href.startsWith('/wp-content/')) continue;
      hrefs.add(href);
    }
  }
  return [...hrefs];
}

function getSharedNavLinks() {
  // Extract links from shared components that appear on every page
  const sharedFiles = [
    path.join(ROOT, 'components/Header.tsx'),
    path.join(ROOT, 'components/Footer.tsx'),
    path.join(ROOT, 'components/MobileMenu.tsx'),
    path.join(ROOT, 'lib/constants.ts'),
  ];
  const allLinks = new Set();
  for (const file of sharedFiles) {
    if (!fs.existsSync(file)) continue;
    const content = fs.readFileSync(file, 'utf8');
    const hrefs = extractHrefs(content);
    hrefs.forEach(h => allLinks.add(h));
  }
  return [...allLinks];
}

function main() {
  const appDir = path.join(ROOT, 'app');
  const pages = findAllPages(appDir);
  const pageUrls = new Set(pages.map(p => p.url));

  console.log(`Found ${pages.length} pages`);

  // Get shared navigation links (appear on every page via layout)
  const sharedNavLinks = getSharedNavLinks().filter(h => pageUrls.has(h));
  console.log(`Shared nav links: ${sharedNavLinks.length} (from Header, Footer, constants)`);

  // Build link graph
  const outboundLinks = new Map(); // url -> [linked urls]
  const inboundLinks = new Map();  // url -> [source urls]

  // Initialize inbound map
  for (const url of pageUrls) {
    inboundLinks.set(url, []);
  }

  for (const page of pages) {
    const content = fs.readFileSync(page.filePath, 'utf8');
    const hrefs = extractHrefs(content);
    // Combine page-specific links with shared nav links
    const combined = [...new Set([...hrefs, ...sharedNavLinks])];
    const internalHrefs = combined.filter(h => pageUrls.has(h));
    outboundLinks.set(page.url, internalHrefs);

    for (const href of internalHrefs) {
      if (inboundLinks.has(href)) {
        inboundLinks.get(href).push(page.url);
      }
    }
  }

  // Also count links from client components
  const clientFiles = [];
  function findClientFiles(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        if (['node_modules', '.next', 'out', '.git'].includes(entry.name)) continue;
        findClientFiles(fullPath);
      } else if (entry.name.endsWith('Client.tsx') || entry.name.endsWith('client.tsx')) {
        clientFiles.push(fullPath);
      }
    }
  }
  findClientFiles(appDir);

  // Find which page each client component belongs to
  for (const clientFile of clientFiles) {
    const dir = path.dirname(clientFile);
    const pageFile = path.join(dir, 'page.tsx');
    if (!fs.existsSync(pageFile)) continue;

    // Determine URL from page file location
    const relDir = path.relative(appDir, dir);
    const url = relDir === '' ? '/' : '/' + relDir + '/';
    if (!pageUrls.has(url)) continue;

    const content = fs.readFileSync(clientFile, 'utf8');
    const hrefs = extractHrefs(content);
    const internalHrefs = hrefs.filter(h => pageUrls.has(h));

    // Add to existing outbound links
    const existing = outboundLinks.get(url) || [];
    const combined = [...new Set([...existing, ...internalHrefs])];
    outboundLinks.set(url, combined);

    for (const href of internalHrefs) {
      if (inboundLinks.has(href) && !inboundLinks.get(href).includes(url)) {
        inboundLinks.get(href).push(url);
      }
    }
  }

  // Identify orphans (< 3 inbound links)
  const orphans = [];
  for (const [url, sources] of inboundLinks) {
    if (EXCLUDED_PAGES.has(url)) continue;
    if (NOINDEX_PAGES.has(url)) continue;
    if (sources.length < 3) {
      orphans.push({
        url,
        inboundLinks: sources.length,
        linkedFrom: sources,
      });
    }
  }
  orphans.sort((a, b) => a.inboundLinks - b.inboundLinks);

  // BFS crawl depth from homepage
  const depth = new Map();
  const queue = ['/'];
  depth.set('/', 0);

  while (queue.length > 0) {
    const current = queue.shift();
    const currentDepth = depth.get(current);
    const links = outboundLinks.get(current) || [];

    for (const link of links) {
      if (!depth.has(link)) {
        depth.set(link, currentDepth + 1);
        queue.push(link);
      }
    }
  }

  // Organize by depth
  const crawlDepth = { depth0: [], depth1: [], depth2: [], depth3plus: [] };
  for (const [url, d] of depth) {
    if (d === 0) crawlDepth.depth0.push(url);
    else if (d === 1) crawlDepth.depth1.push(url);
    else if (d === 2) crawlDepth.depth2.push(url);
    else crawlDepth.depth3plus.push(url);
  }

  // Unreachable pages (not found by BFS)
  const unreachable = [...pageUrls].filter(url => !depth.has(url));

  // Top pages depth check
  const topPagesDepth = TOP_PAGES
    .filter(url => pageUrls.has(url))
    .map(url => ({
      url,
      depth: depth.has(url) ? depth.get(url) : -1,
      inboundLinks: (inboundLinks.get(url) || []).length,
    }));

  // Stats
  const allInboundCounts = [...inboundLinks.values()].map(v => v.length);
  allInboundCounts.sort((a, b) => a - b);
  const avgInbound = allInboundCounts.reduce((s, v) => s + v, 0) / allInboundCounts.length;
  const medianInbound = allInboundCounts[Math.floor(allInboundCounts.length / 2)];
  const totalLinks = [...outboundLinks.values()].reduce((s, v) => s + v.length, 0);

  const report = {
    generated: new Date().toISOString(),
    totalPages: pages.length,
    totalInternalLinks: totalLinks,
    orphanCount: orphans.length,
    orphans: orphans.slice(0, 100), // Cap at 100 for readability
    unreachableCount: unreachable.length,
    unreachable: unreachable.slice(0, 50),
    crawlDepth: {
      depth0: crawlDepth.depth0,
      depth1: crawlDepth.depth1.sort(),
      depth2Count: crawlDepth.depth2.length,
      depth3plusCount: crawlDepth.depth3plus.length,
      depth3plus: crawlDepth.depth3plus.sort(),
    },
    topPagesDepth,
    stats: {
      avgInboundLinks: Math.round(avgInbound * 10) / 10,
      medianInboundLinks: medianInbound,
      maxDepth: Math.max(...[...depth.values()], 0),
      pagesAtDepth3Plus: crawlDepth.depth3plus.length,
    },
  };

  fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, 2), 'utf8');

  // Console summary
  console.log(`\n=== Link Graph Summary ===`);
  console.log(`Total pages: ${pages.length}`);
  console.log(`Total internal links: ${totalLinks}`);
  console.log(`Avg inbound links: ${report.stats.avgInboundLinks}`);
  console.log(`Median inbound links: ${report.stats.medianInboundLinks}`);
  console.log(`\nOrphan pages (<3 inbound): ${orphans.length}`);
  if (orphans.length > 0) {
    console.log('  Worst orphans:');
    orphans.slice(0, 10).forEach(o => console.log(`    ${o.url} (${o.inboundLinks} inbound)`));
  }
  console.log(`\nUnreachable from homepage: ${unreachable.length}`);
  if (unreachable.length > 0) {
    unreachable.slice(0, 10).forEach(u => console.log(`    ${u}`));
  }
  console.log(`\nCrawl depth: 0=${crawlDepth.depth0.length}, 1=${crawlDepth.depth1.length}, 2=${crawlDepth.depth2.length}, 3+=${crawlDepth.depth3plus.length}`);
  console.log(`Max depth: ${report.stats.maxDepth}`);

  const deepTopPages = topPagesDepth.filter(p => p.depth > 2 || p.depth === -1);
  if (deepTopPages.length > 0) {
    console.log(`\n⚠️  Top pages at depth 3+ or unreachable:`);
    deepTopPages.forEach(p => console.log(`    ${p.url} (depth: ${p.depth === -1 ? 'UNREACHABLE' : p.depth})`));
  } else {
    console.log(`\n✅ All top pages within 2 clicks of homepage`);
  }

  console.log(`\nReport written to: seo/link-graph-report.json`);
}

main();
