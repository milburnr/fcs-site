#!/usr/bin/env node
/**
 * fix-cgc-prefix.js
 *
 * Fixes CGC prefix issues where FCS is incorrectly described as holding a CGC license.
 * FCS license is CBC1262722 (Certified Building Contractor), not CGC.
 *
 * Handles:
 * 1. CGC #1529395 -> CBC1262722 (wrong number with space+hash format)
 * 2. CGC#1522434 -> CBC1262722 (wrong number with hash format)
 * 3. CGC1262722 -> CBC1262722 (correct number, wrong prefix)
 * 4. "Licensed CGC" -> "Licensed CBC" in meta descriptions about FCS
 * 5. "CGC-licensed" -> "CBC-licensed" in meta descriptions about FCS
 * 6. "CGC contractor" -> "CBC contractor" in meta descriptions about FCS
 * 7. "CGC License" -> "CBC License" when referring to FCS
 * 8. "licensed CGC" -> "licensed CBC" (lowercase)
 * 9. "FL-licensed CGC" -> "FL-licensed CBC"
 * 10. "insured CGC" -> "insured CBC"
 * 11. "Certified General Contractor" -> "Certified Building Contractor" when about FCS license
 *
 * Does NOT change educational references about CGC as a license type in general.
 */

const fs = require('fs');
const path = require('path');

const APP_DIR = path.join(__dirname, '..', 'app');

// Direct replacements (safe to do globally)
const REPLACEMENTS = [
  // Wrong license numbers with various formats
  { from: /CGC\s*#\s*1529395/g, to: 'CBC1262722' },
  { from: /CGC#1522434/g, to: 'CBC1262722' },
  { from: /CGC#1262722/g, to: 'CBC1262722' },
  // Correct number with wrong prefix (no hash)
  { from: /CGC1262722/g, to: 'CBC1262722' },
  // CGC-licensed -> CBC-licensed (in descriptions about FCS)
  { from: /CGC-licensed/g, to: 'CBC-licensed' },
  // "Licensed CGC" patterns in meta descriptions (FCS self-reference)
  { from: /Licensed CGC(?=[\s,.]|$)/g, to: 'Licensed CBC' },
  { from: /licensed CGC(?=[\s,.]|$)/g, to: 'licensed CBC' },
  // "FL-licensed CGC" pattern
  { from: /FL-licensed CGC(?=[\s,.]|$)/g, to: 'FL-licensed CBC' },
  // "insured CGC" pattern
  { from: /insured CGC(?=[\s,.]|$)/g, to: 'insured CBC' },
  // "CGC contractor" -> "CBC contractor"
  { from: /CGC contractor/g, to: 'CBC contractor' },
  // "CGC License" standalone (not "CGC license" in educational)
  { from: /CGC License/g, to: 'CBC License' },
];

// File-specific fixes (for content that needs context-aware editing)
const FILE_SPECIFIC_FIXES = [
  // team-members: FCS credential
  {
    file: 'app/team-members/page.tsx',
    from: /Florida Certified General Contractor \(CGC\)/g,
    to: 'Florida Certified Building Contractor (CBC)',
  },
  // floridas-top-commercial-contractor: FCS credential listing
  {
    file: 'app/floridas-top-commercial-contractor-in-tampa/page.tsx',
    from: /Florida Certified General Contractor \(CGC\)/g,
    to: 'Florida Certified Building Contractor (CBC)',
  },
  // insurance/licensed-general-contractor: "Certified General Contractor license CGC" -> correct
  {
    file: 'app/insurance/licensed-general-contractor/page.tsx',
    from: /Certified General Contractor license CBC1262722/g,  // after global CGC->CBC fix
    to: 'Certified Building Contractor license CBC1262722',
  },
  // insurance/fire-restoration: same pattern
  {
    file: 'app/insurance/fire-restoration/page.tsx',
    from: /Certified General Contractor license CBC1262722/g,
    to: 'Certified Building Contractor license CBC1262722',
  },
  // insurance/hurricane-restoration: same pattern
  {
    file: 'app/insurance/hurricane-restoration/page.tsx',
    from: /Certified General Contractor license CBC1262722/g,
    to: 'Certified Building Contractor license CBC1262722',
  },
  // disaster-recovery: "Certified General Contractor license CGC#1522434"
  {
    file: 'app/disaster-recovery/page.tsx',
    from: /Certified General Contractor license CBC1262722/g,
    to: 'Certified Building Contractor license CBC1262722',
  },
  {
    file: 'app/disaster-recovery/page.tsx',
    from: /Certified General Contractor CBC1262722/g,
    to: 'Certified Building Contractor CBC1262722',
  },
  // insurance-restoration-brandon
  {
    file: 'app/insurance-restoration-brandon/page.tsx',
    from: /Certified General Contractor CBC1262722/g,
    to: 'Certified Building Contractor CBC1262722',
  },
  // insurance-restoration-lakeland
  {
    file: 'app/insurance-restoration-lakeland/page.tsx',
    from: /Certified General Contractor CBC1262722/g,
    to: 'Certified Building Contractor CBC1262722',
  },
  // insurance-restoration-ruskin
  {
    file: 'app/insurance-restoration-ruskin/page.tsx',
    from: /Certified General Contractor CBC1262722/g,
    to: 'Certified Building Contractor CBC1262722',
  },
  // insurance-restoration-tampa: "Licensed CGC#1522434" already handled by global
  // insurance-restoration-st-petersburg: "Licensed CGC#1522434" already handled
  // InsurancePageClient: "Licensed Florida General Contractor (CGC1262722)"
  {
    file: 'app/insurance/InsurancePageClient.tsx',
    from: /Licensed Florida General Contractor \(CBC1262722\)/g,  // after global fix
    to: 'Licensed Florida Certified Building Contractor (CBC1262722)',
  },
  // insurance/water-restoration
  {
    file: 'app/insurance/water-restoration/page.tsx',
    from: /Certified General Contractor license CBC1262722/g,
    to: 'Certified Building Contractor license CBC1262722',
  },
];

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
    } else if (entry.isFile() && (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts'))) {
      files.push(fullPath);
    }
  }
  return files;
}

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let fileChanges = 0;
  const fileReplacements = [];
  const relPath = path.relative(path.join(__dirname, '..'), filePath);

  // Apply global replacements
  for (const { from, to } of REPLACEMENTS) {
    const regex = new RegExp(from.source, from.flags);
    const matches = content.match(regex);
    if (matches) {
      const count = matches.length;
      content = content.replace(regex, to);
      fileChanges += count;
      fileReplacements.push(`  ${from.source} -> ${to} (${count}x)`);
    }
  }

  // Apply file-specific fixes
  for (const fix of FILE_SPECIFIC_FIXES) {
    if (relPath === fix.file) {
      const regex = new RegExp(fix.from.source, fix.from.flags);
      const matches = content.match(regex);
      if (matches) {
        const count = matches.length;
        content = content.replace(regex, fix.to);
        fileChanges += count;
        fileReplacements.push(`  [specific] ${fix.from.source} -> ${fix.to} (${count}x)`);
      }
    }
  }

  if (fileChanges > 0) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`FIXED: ${relPath} (${fileChanges} replacements)`);
    fileReplacements.forEach(r => console.log(r));
    changedFiles.push({ file: relPath, changes: fileChanges });
    totalChanges += fileChanges;
  }

  totalFiles++;
}

// Main
console.log('=== CGC Prefix Fix ===\n');

const files = walkDir(APP_DIR);
console.log(`Scanning ${files.length} .tsx/.ts files in app/\n`);

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
