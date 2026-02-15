#!/usr/bin/env node

/**
 * Add canonical URLs to all pages missing them
 * For FCS (Next.js site)
 */

const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://floridaconstructionspecialists.com';
const APP_DIR = path.join(__dirname, 'app');

let added = 0;
let skipped = 0;
let errors = [];

function processPage(pagePath) {
  const content = fs.readFileSync(pagePath, 'utf-8');
  
  // Already has canonical?
  if (content.includes('alternates:') && content.includes('canonical:')) {
    skipped++;
    return;
  }
  
  // Get the URL path from file location
  const relativePath = path.relative(APP_DIR, path.dirname(pagePath));
  const urlPath = relativePath === '' ? '/' : `/${relativePath}/`;
  const canonicalUrl = `${SITE_URL}${urlPath}`;
  
  let newContent = content;
  
  // Check if has metadata export
  if (content.includes('export const metadata')) {
    // Add alternates after opening brace of metadata object
    const metadataMatch = content.match(/export const metadata[^=]*=\s*\{/);
    if (metadataMatch) {
      const insertPos = metadataMatch.index + metadataMatch[0].length;
      const canonicalLine = `\n  alternates: { canonical: '${canonicalUrl}' },`;
      newContent = content.slice(0, insertPos) + canonicalLine + content.slice(insertPos);
    }
  } else {
    // No metadata export - need to add one
    const lines = content.split('\n');
    let insertIndex = 0;
    
    // Find last import line
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].startsWith('import ')) {
        insertIndex = i + 1;
      }
    }
    
    // Check if Metadata is already imported
    if (!content.includes("import type { Metadata }") && !content.includes("import { Metadata }")) {
      const metadataBlock = `
import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: '${canonicalUrl}' },
};
`;
      lines.splice(insertIndex, 0, metadataBlock);
      newContent = lines.join('\n');
    } else {
      const exportBlock = `
export const metadata: Metadata = {
  alternates: { canonical: '${canonicalUrl}' },
};
`;
      lines.splice(insertIndex, 0, exportBlock);
      newContent = lines.join('\n');
    }
  }
  
  if (newContent !== content) {
    fs.writeFileSync(pagePath, newContent);
    added++;
    console.log(`✓ Added canonical to ${urlPath}`);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      walkDir(filePath);
    } else if (file === 'page.tsx') {
      try {
        processPage(filePath);
      } catch (e) {
        errors.push({ path: filePath, error: e.message });
      }
    }
  }
}

console.log('Adding canonical URLs to FCS pages...\n');
walkDir(APP_DIR);

console.log(`\n=== Summary ===`);
console.log(`Added: ${added}`);
console.log(`Skipped (already had): ${skipped}`);
console.log(`Errors: ${errors.length}`);

if (errors.length > 0) {
  console.log('\nErrors:');
  errors.forEach(e => console.log(`  ${e.path}: ${e.error}`));
}
