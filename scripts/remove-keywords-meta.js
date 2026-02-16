#!/usr/bin/env node
/**
 * remove-keywords-meta.js
 *
 * Removes the obsolete `keywords` property from Next.js metadata exports
 * in all page.tsx and layout.tsx files under app/.
 *
 * Handles three formats:
 * 1. Array: keywords: ["a", "b"],
 * 2. String inline: keywords: "a, b, c",
 * 3. String multi-line: keywords:\n    "a, b, c",
 */

const fs = require('fs');
const path = require('path');

const APP_DIR = path.join(__dirname, '..', 'app');

function findTsxFiles(dir) {
  const results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findTsxFiles(fullPath));
    } else if (entry.name === 'page.tsx' || entry.name === 'layout.tsx') {
      results.push(fullPath);
    }
  }
  return results;
}

function removeKeywords(content) {
  // Strategy: Find the metadata export block first, then remove keywords only within it.
  // This avoids accidentally matching `keywords` properties in data objects.

  // Find the metadata export: "export const metadata: Metadata = { ... };"
  const metadataMatch = content.match(
    /export const metadata:\s*Metadata\s*=\s*\{/
  );
  if (!metadataMatch) return content;

  const metaStart = metadataMatch.index;

  // Find the closing of the metadata object (first `};` after the opening)
  let braceDepth = 0;
  let metaEnd = -1;
  for (let i = metaStart + metadataMatch[0].length - 1; i < content.length; i++) {
    if (content[i] === '{') braceDepth++;
    else if (content[i] === '}') {
      braceDepth--;
      if (braceDepth === 0) {
        metaEnd = i + 1;
        break;
      }
    }
  }
  if (metaEnd === -1) return content;

  // Extract the metadata block
  let metaBlock = content.substring(metaStart, metaEnd);

  // Remove keywords from this block only
  // Multi-line array: keywords: [\n  ...\n  ],
  metaBlock = metaBlock.replace(
    /^[ \t]*keywords:\s*\[[\s\S]*?\],?\s*\n/m,
    ''
  );
  // Single-line array: keywords: ["a", "b"],
  metaBlock = metaBlock.replace(
    /^[ \t]*keywords:\s*\[.*?\],?\s*\n/m,
    ''
  );
  // Multi-line string: keywords:\n    "string",
  metaBlock = metaBlock.replace(
    /^[ \t]*keywords:\s*\n\s*"[^"]*",?\s*\n/m,
    ''
  );
  // Inline string: keywords: "string",
  metaBlock = metaBlock.replace(
    /^[ \t]*keywords:\s*"[^"]*",?\s*\n/m,
    ''
  );

  return content.substring(0, metaStart) + metaBlock + content.substring(metaEnd);
}

// Main
const files = findTsxFiles(APP_DIR);
let scanned = 0;
let modifiedCount = 0;
let skipped = 0;

for (const file of files) {
  scanned++;
  const content = fs.readFileSync(file, 'utf8');

  // Only process files that have keywords in a metadata context
  if (!content.includes('keywords:')) {
    skipped++;
    continue;
  }

  const result = removeKeywords(content);
  if (result !== content) {
    fs.writeFileSync(file, result, 'utf8');
    modifiedCount++;
    const rel = path.relative(path.join(__dirname, '..'), file);
    console.log(`  Modified: ${rel}`);
  } else {
    // Has "keywords:" text but not in a removable pattern (might be in string content)
    skipped++;
  }
}

console.log(`\nDone.`);
console.log(`  Scanned: ${scanned} files`);
console.log(`  Modified: ${modifiedCount} files`);
console.log(`  Skipped: ${skipped} files (no keywords metadata found)`);
