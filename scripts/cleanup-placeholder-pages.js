#!/usr/bin/env node
/**
 * cleanup-placeholder-pages.js
 *
 * Cross-references placeholder pages from thin-content-report.json with
 * existing redirects in netlify.toml. Deletes placeholder page directories
 * that are redirect stubs ("Redirecting..." title, 34 words) and have
 * 301 redirects configured.
 *
 * Usage:
 *   node scripts/cleanup-placeholder-pages.js --dry-run   # Preview deletions
 *   node scripts/cleanup-placeholder-pages.js --execute    # Actually delete
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const REPORT_PATH = path.join(ROOT, 'thin-content-report.json');
const NETLIFY_PATH = path.join(ROOT, 'netlify.toml');
const APP_DIR = path.join(ROOT, 'app');

const mode = process.argv[2] || '--dry-run';
const isExecute = mode === '--execute';

console.log(`\n=== Placeholder Page Cleanup ===`);
console.log(`Mode: ${isExecute ? 'EXECUTE (will delete files)' : 'DRY RUN (preview only)'}\n`);

// 1. Load placeholder pages from thin-content-report.json
const report = JSON.parse(fs.readFileSync(REPORT_PATH, 'utf-8'));
const placeholders = report.byCategory.placeholder;

console.log(`Found ${placeholders.length} placeholder pages in thin-content-report.json`);

// 2. Parse redirects from netlify.toml
const netlifyContent = fs.readFileSync(NETLIFY_PATH, 'utf-8');
const redirectFromPaths = new Set();

const fromRegex = /from\s*=\s*"([^"]+)"/g;
let match;
while ((match = fromRegex.exec(netlifyContent)) !== null) {
  redirectFromPaths.add(match[1]);
}

console.log(`Found ${redirectFromPaths.size} redirect 'from' paths in netlify.toml\n`);

// 3. Cross-reference and categorize
const toDelete = [];       // Redirect stubs with existing redirects -- safe to delete
const flagged = [];        // Redirect stubs without redirects -- need manual decision
const alreadyGone = [];    // Directory no longer exists (previously deleted)
const skippedReal = [];    // Exists but is a real page, not a redirect stub

for (const page of placeholders) {
  const slug = page.slug;
  const dirName = slug.replace(/^\//, '').replace(/\/$/, '');
  const dirPath = path.join(APP_DIR, dirName);

  // Check if the directory actually exists
  if (!fs.existsSync(dirPath)) {
    alreadyGone.push({ slug, title: page.title });
    continue;
  }

  const pagePath = path.join(dirPath, 'page.tsx');
  if (!fs.existsSync(pagePath)) {
    alreadyGone.push({ slug, title: page.title });
    continue;
  }

  // Determine if this is truly a redirect stub vs a real page
  const content = fs.readFileSync(pagePath, 'utf-8');
  const isRedirectStub = page.isPlaceholder === true &&
    page.title?.includes('Redirecting') &&
    page.wordCount === 34;

  // For non-redirect stubs, check if it's minimal content that looks like a placeholder
  // but is actually a real service page (has schemas, breadcrumbs, real content)
  const hasRealContent = content.includes('Schema') ||
    content.includes('Breadcrumb') ||
    content.includes('FAQ') ||
    content.length > 2000;

  if (!isRedirectStub) {
    if (hasRealContent) {
      skippedReal.push({ slug, title: page.title, wordCount: page.wordCount });
      continue;
    }
    // Check for minimal content pages that might still be stubs
    if (page.wordCount > 34 || !page.title?.includes('Redirecting')) {
      skippedReal.push({ slug, title: page.title, wordCount: page.wordCount });
      continue;
    }
  }

  // It's a redirect stub -- check if redirect exists
  const hasRedirect = redirectFromPaths.has(slug) ||
    redirectFromPaths.has(slug.replace(/\/$/, ''));

  if (hasRedirect) {
    toDelete.push({ slug, dirPath, dirName });
  } else {
    flagged.push({ slug, dirPath, dirName, title: page.title });
  }
}

// 4. Report
console.log(`--- RESULTS ---\n`);
console.log(`Already deleted (directories gone):  ${alreadyGone.length}`);
console.log(`Skipped (real pages, not stubs):      ${skippedReal.length}`);
console.log(`To delete (redirect stubs w/ redirect): ${toDelete.length}`);
console.log(`Flagged (redirect stubs, no redirect):  ${flagged.length}`);
console.log(`Total accounted for: ${alreadyGone.length + skippedReal.length + toDelete.length + flagged.length} / ${placeholders.length}\n`);

if (skippedReal.length > 0) {
  console.log(`--- SKIPPED REAL PAGES ---\n`);
  for (const page of skippedReal) {
    console.log(`  REAL: ${page.slug} (${page.wordCount} words) -- "${page.title}"`);
  }
  console.log();
}

if (toDelete.length > 0) {
  console.log(`--- PAGES TO DELETE ---\n`);
  for (const page of toDelete) {
    console.log(`  DELETE: ${page.slug}`);
  }
  console.log();
}

if (flagged.length > 0) {
  console.log(`--- FLAGGED PAGES (no redirect) ---\n`);
  for (const page of flagged) {
    console.log(`  FLAG: ${page.slug} -- "${page.title}"`);
  }
  console.log();
}

// 5. Execute deletions if --execute
if (isExecute && toDelete.length > 0) {
  console.log(`--- EXECUTING DELETIONS ---\n`);
  let deleted = 0;
  for (const page of toDelete) {
    try {
      fs.rmSync(page.dirPath, { recursive: true, force: true });
      console.log(`  DELETED: ${page.dirName}/`);
      deleted++;
    } catch (err) {
      console.error(`  ERROR deleting ${page.dirName}/: ${err.message}`);
    }
  }
  console.log(`\nSuccessfully deleted ${deleted} directories.`);
} else if (!isExecute && toDelete.length > 0) {
  console.log(`Run with --execute to perform deletions.`);
} else if (toDelete.length === 0) {
  console.log(`No redirect stub directories remain to delete.`);
  console.log(`${alreadyGone.length} placeholder directories were already removed previously.`);
}

// 6. Write flagged pages to a file for Plan 03
const flaggedOutput = {
  generatedAt: new Date().toISOString(),
  description: 'Placeholder pages analysis -- most were already deleted, remaining are real pages',
  summary: {
    totalPlaceholders: placeholders.length,
    alreadyDeleted: alreadyGone.length,
    skippedRealPages: skippedReal.length,
    deletedThisRun: toDelete.length,
    needsRedirectDecision: flagged.length
  },
  skippedRealPages: skippedReal.map(p => ({
    slug: p.slug,
    title: p.title,
    wordCount: p.wordCount,
    note: 'Real service page -- not a redirect stub. May need content expansion.'
  })),
  flaggedNoRedirect: flagged.map(p => ({
    slug: p.slug,
    title: p.title,
    needsRedirectTo: 'TBD -- assign in Plan 03'
  }))
};

const outputPath = path.join(ROOT, 'flagged-placeholders.json');
fs.writeFileSync(outputPath, JSON.stringify(flaggedOutput, null, 2));
console.log(`\nResults written to: flagged-placeholders.json`);

console.log(`\n=== Done ===\n`);
