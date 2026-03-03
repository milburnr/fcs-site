#!/usr/bin/env node
/**
 * Comprehensive SEO Metadata Fix Script
 * Fixes: titles too long, descriptions too long, missing OG tags, redirect links
 *
 * Usage:
 *   node scripts/fix-seo-metadata.mjs --dry-run    # Preview changes
 *   node scripts/fix-seo-metadata.mjs               # Apply changes
 */

import fs from 'fs';
import path from 'path';

const DRY_RUN = process.argv.includes('--dry-run');
const VERBOSE = process.argv.includes('--verbose');
const SITE_URL = 'https://floridaconstructionspecialists.com';
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;
const MAX_TITLE_LEN = 54; // + " | FCS" (6 chars) = 60 total
const MAX_DESC_LEN = 155;

// ============================================
// Redirect link fixes (old URL -> new URL)
// ============================================
const REDIRECT_LINK_FIXES = {
  '/portfolio/': '/gallery/',
  '/insurance-arbitration-appraisal/': '/insurance/guides/insurance-arbitration-appraisal/',
};

// ============================================
// Title shortening rules
// Priorities: keep service name + city, keep transactional keywords,
// maintain uniqueness, preserve intent signals
// ============================================

function shortenTitle(title, relPath) {
  let t = title;

  // 1. Remove existing brand suffixes (template will add " | FCS")
  t = t.replace(/\s*\|\s*FCS\s*$/i, '');
  t = t.replace(/\s*\|\s*Florida Construction Specialists\s*$/i, '');
  t = t.trim();

  // Already short enough?
  if (t.length <= MAX_TITLE_LEN) return t;

  // 2. Shorten "St. Petersburg" to "St. Pete"
  t = t.replace(/St\.\s*Petersburg/g, 'St. Pete');
  if (t.length <= MAX_TITLE_LEN) return t;

  // 3. Remove " FL" after city names (still identifiable without state)
  t = t.replace(/\b(Tampa|Clearwater|Lakeland|Sarasota|Bradenton|Brandon|Ruskin|St\.\s*Pete)\s+FL\b/g, '$1');
  if (t.length <= MAX_TITLE_LEN) return t;

  // 4. For pipe-separated titles, progressively remove trailing segments
  const parts = t.split(/\s*\|\s*/);
  if (parts.length >= 3) {
    // Try keeping first two segments
    const twoSegs = parts.slice(0, 2).join(' | ');
    if (twoSegs.length <= MAX_TITLE_LEN) return twoSegs;

    // If second segment has commas, keep just first item
    if (parts[1] && parts[1].includes(',')) {
      const firstItem = parts[1].split(/,\s*/)[0];
      const trimmed = parts[0] + ' | ' + firstItem;
      if (trimmed.length <= MAX_TITLE_LEN) return trimmed;
    }

    // Just first segment
    if (parts[0].length <= MAX_TITLE_LEN) return parts[0];
  }

  if (parts.length === 2) {
    // If second segment has commas, keep first item
    if (parts[1] && parts[1].includes(',')) {
      const firstItem = parts[1].split(/,\s*/)[0];
      const trimmed = parts[0] + ' | ' + firstItem;
      if (trimmed.length <= MAX_TITLE_LEN) return trimmed;
    }

    // Just first segment
    if (parts[0].length <= MAX_TITLE_LEN) return parts[0];
  }

  // 5. Handle long single-segment titles - word-boundary truncation
  // Common patterns: "Some Very Long Article Title About Something in Tampa"
  // Try to keep meaningful keywords
  let candidate = t;

  // Remove common filler phrases
  candidate = candidate.replace(/\bfor Commercial Projects?\b/gi, '');
  candidate = candidate.replace(/\bfor Construction Projects?\b/gi, '');
  candidate = candidate.replace(/\bin Florida\b/gi, '');
  candidate = candidate.replace(/\bin Tampa Bay\b/gi, '');
  candidate = candidate.replace(/\bby Florida Construction Specialists\b/gi, '');
  candidate = candidate.replace(/\s{2,}/g, ' ').trim();
  if (candidate.length <= MAX_TITLE_LEN) return candidate;

  // Smart truncate at word boundary, preferring to break at prepositions
  if (candidate.length > MAX_TITLE_LEN) {
    const truncated = candidate.substring(0, MAX_TITLE_LEN);
    // Try to break at a preposition or conjunction
    const breakPoints = [' in ', ' for ', ' and ', ' with ', ' of ', ' to ', ' by ', ' | ', ' - '];
    let bestBreak = -1;
    for (const bp of breakPoints) {
      const idx = truncated.lastIndexOf(bp);
      if (idx > MAX_TITLE_LEN * 0.5) {
        bestBreak = Math.max(bestBreak, idx);
      }
    }

    if (bestBreak > 0) {
      candidate = truncated.substring(0, bestBreak);
    } else {
      // Fall back to last word boundary
      const lastSpace = truncated.lastIndexOf(' ');
      candidate = lastSpace > MAX_TITLE_LEN * 0.6 ? truncated.substring(0, lastSpace) : truncated;
    }
  }

  // Clean up trailing pipes, commas, dashes
  candidate = candidate.replace(/[\s|,\-:]+$/, '').trim();

  return candidate;
}

// ============================================
// Description shortening - keep 120-155 chars, cut at sentence boundaries
// ============================================

function shortenDescription(desc) {
  if (desc.length <= MAX_DESC_LEN) return desc;

  // Split on ". " (sentence boundaries) - keep the period with each sentence
  const parts = desc.split(/(?<=\.)\s+/);
  let result = '';

  for (const part of parts) {
    const next = result ? result + ' ' + part : part;
    if (next.length > MAX_DESC_LEN) {
      // If we have nothing yet or result is too short, try comma-splitting this part
      if (!result || result.length < 100) {
        // Try adding partial sentence up to a comma
        const commaParts = part.split(/,\s*/);
        for (const cp of commaParts) {
          const nextComma = result ? result + ' ' + cp : cp;
          if (nextComma.length > MAX_DESC_LEN) break;
          result = nextComma;
        }
      }
      break;
    }
    result = next;
  }

  // If result is still empty or very short, do word-boundary truncation
  if (!result || result.length < 80) {
    const truncated = desc.substring(0, MAX_DESC_LEN);
    const lastPeriod = truncated.lastIndexOf('.');
    if (lastPeriod > 100) {
      result = truncated.substring(0, lastPeriod + 1);
    } else {
      const lastSpace = truncated.lastIndexOf(' ');
      result = truncated.substring(0, lastSpace > 100 ? lastSpace : MAX_DESC_LEN - 1) + '.';
    }
  }

  // Ensure it ends with proper punctuation
  if (result && !result.endsWith('.') && !result.endsWith('!') && !result.endsWith('?')) {
    result += '.';
  }

  // Final length check
  if (result.length > MAX_DESC_LEN) {
    const truncated = result.substring(0, MAX_DESC_LEN);
    const lastPeriod = truncated.lastIndexOf('.');
    if (lastPeriod > 100) {
      result = truncated.substring(0, lastPeriod + 1);
    } else {
      const lastSpace = truncated.lastIndexOf(' ');
      result = truncated.substring(0, lastSpace > 100 ? lastSpace : MAX_DESC_LEN - 1) + '.';
    }
  }

  return result;
}

// ============================================
// Process a single page.tsx file
// ============================================

function processPage(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const relPath = filePath.replace(/.*\/app\//, '').replace('/page.tsx', '');

  // Build canonical URL from path
  const slug = relPath === 'page.tsx' ? '/' : `/${relPath}/`;
  const canonicalUrl = `${SITE_URL}${slug}`;

  let modified = content;
  const changes = [];

  // --- Extract current metadata ---
  // Use separate patterns for double and single quotes to handle apostrophes
  const titleMatch = content.match(/title:\s*"([^"]+)"/) || content.match(/title:\s*'([^']+)'/);
  const descMatch = content.match(/description:\s*\n?\s*"([^"]+)"/) || content.match(/description:\s*\n?\s*'([^']+)'/);
  const canonicalMatch = content.match(/canonical:\s*"([^"]+)"/) || content.match(/canonical:\s*'([^']+)'/);
  const hasOpenGraph = content.includes('openGraph:');

  const currentTitle = titleMatch ? titleMatch[1] : null;
  const currentDesc = descMatch ? descMatch[1] : null;
  const currentCanonical = canonicalMatch ? canonicalMatch[1] : canonicalUrl;

  // --- Fix title ---
  if (currentTitle) {
    const newTitle = shortenTitle(currentTitle, relPath);
    if (newTitle !== currentTitle) {
      // Replace the exact title string, matching the quote type used
      const titleStr = `"${currentTitle}"`;
      const titleStrSingle = `'${currentTitle}'`;
      if (modified.includes(titleStr)) {
        modified = modified.replace(titleStr, `"${newTitle}"`);
      } else if (modified.includes(titleStrSingle)) {
        modified = modified.replace(titleStrSingle, `"${newTitle}"`);
      }
      changes.push(`Title: "${currentTitle}" [${currentTitle.length + 6}] → "${newTitle}" [${newTitle.length + 6}]`);
    }
  }

  // --- Fix description ---
  if (currentDesc && currentDesc.length > MAX_DESC_LEN) {
    const newDesc = shortenDescription(currentDesc);
    if (newDesc !== currentDesc && newDesc.length <= MAX_DESC_LEN) {
      // Use exact string replacement - try both quote types
      const oldDescDouble = `"${currentDesc}"`;
      const oldDescSingle = `'${currentDesc}'`;
      // For descriptions with apostrophes, they're likely in double quotes
      if (modified.includes(oldDescDouble)) {
        modified = modified.replace(oldDescDouble, `"${newDesc}"`);
        changes.push(`Desc: [${currentDesc.length}] → [${newDesc.length}]`);
      } else if (modified.includes(oldDescSingle)) {
        modified = modified.replace(oldDescSingle, `"${newDesc}"`);
        changes.push(`Desc: [${currentDesc.length}] → [${newDesc.length}]`);
      }
    }
  }

  // --- Add OpenGraph tags ---
  if (!hasOpenGraph && (currentTitle || currentDesc)) {
    // Use the potentially-shortened title/desc for OG
    const finalTitleMatch = modified.match(/title:\s*"([^"]+)"/) || modified.match(/title:\s*'([^']+)'/);
    const finalDescMatch = modified.match(/description:\s*\n?\s*"([^"]+)"/) || modified.match(/description:\s*\n?\s*'([^']+)'/);
    const ogTitle = finalTitleMatch ? finalTitleMatch[1] : null;
    const ogDesc = finalDescMatch ? finalDescMatch[1] : null;

    // Build OG block
    const ogLines = [];
    ogLines.push('  openGraph: {');
    if (ogTitle) ogLines.push(`    title: "${ogTitle.replace(/"/g, '\\"')}",`);
    if (ogDesc) ogLines.push(`    description: "${ogDesc.replace(/"/g, '\\"')}",`);
    ogLines.push(`    url: "${currentCanonical}",`);
    ogLines.push('    type: "website",');
    ogLines.push('    siteName: "Florida Construction Specialists",');
    ogLines.push(`    images: [{ url: "${OG_IMAGE}", width: 1200, height: 630, alt: "Florida Construction Specialists - Tampa Bay Commercial Construction" }],`);
    ogLines.push('  },');

    const ogBlock = ogLines.join('\n');

    // Insert OG block before the closing }; of metadata
    const metadataEnd = modified.match(/export const metadata:\s*Metadata\s*=\s*\{[\s\S]*?\n\};/);
    if (metadataEnd) {
      const metaBlock = metadataEnd[0];
      const insertPoint = metaBlock.lastIndexOf('};');
      const newMetaBlock = metaBlock.substring(0, insertPoint) + ogBlock + '\n};';
      modified = modified.replace(metaBlock, newMetaBlock);
      changes.push('Added openGraph tags');
    }
  }

  // --- Fix redirect links ---
  for (const [oldUrl, newUrl] of Object.entries(REDIRECT_LINK_FIXES)) {
    if (modified.includes(`"${oldUrl}"`) || modified.includes(`'${oldUrl}'`)) {
      modified = modified.replace(new RegExp(`["']${escapeRegex(oldUrl)}["']`, 'g'), `"${newUrl}"`);
      changes.push(`Redirect link: ${oldUrl} → ${newUrl}`);
    }
  }

  return { modified, changes, relPath };
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// ============================================
// Main
// ============================================

function findPages(dir) {
  const results = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) results.push(...findPages(fullPath));
    else if (item.name === 'page.tsx') results.push(fullPath);
  }
  return results;
}

const appDir = path.resolve('app');
const pages = findPages(appDir);

let totalTitleChanges = 0;
let totalDescChanges = 0;
let totalOGAdded = 0;
let totalRedirectFixes = 0;
let filesModified = 0;

// Track titles for uniqueness
const titleMap = new Map();

console.log(`\n${DRY_RUN ? '🔍 DRY RUN' : '✏️  APPLYING'} - Processing ${pages.length} pages...\n`);

for (const page of pages) {
  const { modified, changes, relPath } = processPage(page);

  if (changes.length > 0) {
    filesModified++;

    if (!DRY_RUN) {
      fs.writeFileSync(page, modified);
    }

    // Count changes
    for (const c of changes) {
      if (c.startsWith('Title:')) totalTitleChanges++;
      if (c.startsWith('Desc:')) totalDescChanges++;
      if (c.startsWith('Added openGraph')) totalOGAdded++;
      if (c.startsWith('Redirect link:')) totalRedirectFixes++;
    }

    if (VERBOSE || DRY_RUN) {
      console.log(`📄 ${relPath}`);
      changes.forEach(c => console.log(`   ${c}`));
    }
  }

  // Track final titles for duplicate detection
  const titleMatch = modified.match(/title:\s*"([^"]+)"/) || modified.match(/title:\s*'([^']+)'/);
  if (titleMatch) {
    const title = titleMatch[1];
    if (titleMap.has(title)) {
      titleMap.get(title).push(relPath);
    } else {
      titleMap.set(title, [relPath]);
    }
  }
}

// Report duplicates
const duplicates = [...titleMap.entries()].filter(([, pages]) => pages.length > 1);

console.log(`\n${'='.repeat(50)}`);
console.log(`Summary:`);
console.log(`  Pages processed: ${pages.length}`);
console.log(`  Files modified: ${filesModified}`);
console.log(`  Titles shortened: ${totalTitleChanges}`);
console.log(`  Descriptions shortened: ${totalDescChanges}`);
console.log(`  OG tags added: ${totalOGAdded}`);
console.log(`  Redirect links fixed: ${totalRedirectFixes}`);

if (duplicates.length > 0) {
  console.log(`\n⚠️  Duplicate titles found (${duplicates.length}):`);
  for (const [title, dpages] of duplicates) {
    console.log(`  "${title}" [${dpages.length}x]:`);
    dpages.forEach(p => console.log(`    - ${p}`));
  }
}

// Verify title lengths
let stillTooLong = 0;
const longTitles = [];
for (const [title, tpages] of titleMap) {
  const fullLen = title.length + 6; // + " | FCS"
  if (fullLen > 60) {
    stillTooLong++;
    longTitles.push({ title, fullLen, page: tpages[0] });
  }
}
if (stillTooLong > 0) {
  console.log(`\n⚠️  ${stillTooLong} titles still over 60 chars (with " | FCS" template):`);
  longTitles.slice(0, 20).forEach(t => console.log(`  [${t.fullLen}] ${t.page}: "${t.title}"`));
  if (longTitles.length > 20) console.log(`  ... and ${longTitles.length - 20} more`);
}

// Description length check
let descStillLong = 0;
for (const page of pages) {
  const content = fs.readFileSync(page, 'utf8');
  const descMatch = content.match(/description:\s*\n?\s*"([^"]+)"/) || content.match(/description:\s*\n?\s*'([^']+)'/);
  if (descMatch && descMatch[1].length > MAX_DESC_LEN) descStillLong++;
}
if (descStillLong > 0) {
  console.log(`\n⚠️  ${descStillLong} descriptions still over ${MAX_DESC_LEN} chars`);
}
