#!/usr/bin/env node
/**
 * Bulk-update all internal link references to new silo URLs.
 * Reads seo/article-classification.json to build old→new URL mapping,
 * scans all page.tsx files, and replaces old URLs with new ones.
 * Generates seo/link-update-report.json with change tracking.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const CLASSIFICATION_PATH = path.join(ROOT, 'seo/article-classification.json');
const REPORT_PATH = path.join(ROOT, 'seo/link-update-report.json');

function buildUrlMap() {
  const classification = JSON.parse(fs.readFileSync(CLASSIFICATION_PATH, 'utf8'));
  const map = new Map();

  // Article moves: /{slug}/ → /{silo}/guides/{slug}/
  for (const article of classification.articles) {
    map.set(`/${article.slug}/`, article.targetPath);
  }

  return map;
}

function findAllPageFiles(dir) {
  const results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      // Skip node_modules, .next, out
      if (['node_modules', '.next', 'out', '.git'].includes(entry.name)) continue;
      results.push(...findAllPageFiles(fullPath));
    } else if (entry.name === 'page.tsx') {
      results.push(fullPath);
    }
  }
  return results;
}

function main() {
  const urlMap = buildUrlMap();
  console.log(`Built URL map with ${urlMap.size} entries`);

  // Build regex that matches any old URL
  // Sort by length descending to match longest first (avoid partial matches)
  const oldUrls = [...urlMap.keys()].sort((a, b) => b.length - a.length);

  // Build a single regex with all old URLs escaped
  const escapedUrls = oldUrls.map(u => u.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  // Match old URLs in href attributes, string literals, etc.
  // We match the URL when surrounded by quotes or template literal backticks
  const urlPattern = new RegExp(
    '(?<=["\'/`])(' + escapedUrls.join('|') + ')(?=["\'/`])',
    'g'
  );

  // Also match full domain form
  const DOMAIN = 'https://floridaconstructionspecialists.com';
  const fullDomainUrls = oldUrls.map(u => DOMAIN + u);
  const escapedDomainUrls = fullDomainUrls.map(u => u.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const domainPattern = new RegExp(
    '(' + escapedDomainUrls.join('|') + ')',
    'g'
  );

  const pageFiles = findAllPageFiles(path.join(ROOT, 'app'));
  console.log(`Found ${pageFiles.length} page.tsx files to scan`);

  const updates = [];
  let totalReplacements = 0;
  let totalFilesUpdated = 0;

  for (const filePath of pageFiles) {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    const replacedUrls = new Set();

    // Replace path-only URLs
    content = content.replace(urlPattern, (match) => {
      replacedUrls.add(match);
      return urlMap.get(match);
    });

    // Replace full domain URLs
    content = content.replace(domainPattern, (match) => {
      const pathPart = match.replace(DOMAIN, '');
      replacedUrls.add(pathPart);
      return DOMAIN + urlMap.get(pathPart);
    });

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      const replacements = replacedUrls.size;
      const relPath = path.relative(ROOT, filePath);
      updates.push({
        file: relPath,
        replacements,
        oldUrls: [...replacedUrls],
      });
      totalReplacements += replacements;
      totalFilesUpdated++;
    }
  }

  // Write report
  const report = {
    generated: new Date().toISOString(),
    totalFilesScanned: pageFiles.length,
    totalFilesUpdated,
    totalReplacementsCount: totalReplacements,
    updates,
  };
  fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, 2), 'utf8');

  // Summary
  console.log(`\n=== Summary ===`);
  console.log(`Files scanned: ${pageFiles.length}`);
  console.log(`Files updated: ${totalFilesUpdated}`);
  console.log(`Total URL replacements: ${totalReplacements}`);
  console.log(`Report written to: seo/link-update-report.json`);
}

main();
