#!/usr/bin/env node
/**
 * fix-nap-consistency.js
 *
 * Fixes NAP (Name, Address, Phone) consistency across all pages.
 * - Replaces wrong phone number (813) 906-1302 -> (813) 420-7561 in all formats
 * - Replaces wrong license numbers CGC1529395, CGC1522434, CGC1532648 -> CBC1262722
 *
 * Run: node scripts/fix-nap-consistency.js
 */

const fs = require('fs');
const path = require('path');

const APP_DIR = path.join(__dirname, '..', 'app');

// Phone number replacements (all formats of the wrong number)
const PHONE_REPLACEMENTS = [
  { from: '(813) 906-1302', to: '(813) 420-7561' },
  { from: '813-906-1302', to: '813-420-7561' },
  { from: '813.906.1302', to: '813.420.7561' },
  { from: '8139061302', to: '8134207561' },
  { from: '+1-813-906-1302', to: '+1-813-420-7561' },
];

// License number replacements
const LICENSE_REPLACEMENTS = [
  { from: 'CGC1529395', to: 'CBC1262722' },
  { from: 'CGC1522434', to: 'CBC1262722' },
  { from: 'CGC1532648', to: 'CBC1262722' },
];

const ALL_REPLACEMENTS = [...PHONE_REPLACEMENTS, ...LICENSE_REPLACEMENTS];

let totalFiles = 0;
let totalChanges = 0;
const changedFiles = [];

function walkDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walkDir(fullPath));
    } else if (entry.isFile() && entry.name.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  return files;
}

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let fileChanges = 0;
  const fileReplacements = [];

  for (const { from, to } of ALL_REPLACEMENTS) {
    const regex = new RegExp(from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    const matches = content.match(regex);
    if (matches) {
      const count = matches.length;
      content = content.replace(regex, to);
      fileChanges += count;
      fileReplacements.push(`  ${from} -> ${to} (${count}x)`);
    }
  }

  if (fileChanges > 0) {
    fs.writeFileSync(filePath, content, 'utf-8');
    const rel = path.relative(path.join(__dirname, '..'), filePath);
    console.log(`FIXED: ${rel} (${fileChanges} replacements)`);
    fileReplacements.forEach(r => console.log(r));
    changedFiles.push({ file: rel, changes: fileChanges });
    totalChanges += fileChanges;
  }

  totalFiles++;
}

// Main
console.log('=== NAP Consistency Fix ===\n');

const files = walkDir(APP_DIR);
console.log(`Scanning ${files.length} .tsx files in app/\n`);

for (const file of files) {
  fixFile(file);
}

console.log(`\n=== Summary ===`);
console.log(`Files scanned: ${totalFiles}`);
console.log(`Files modified: ${changedFiles.length}`);
console.log(`Total replacements: ${totalChanges}`);

if (changedFiles.length > 0) {
  console.log(`\nModified files:`);
  changedFiles.forEach(({ file, changes }) => {
    console.log(`  ${file} (${changes} changes)`);
  });
}

console.log('\nDone.');
