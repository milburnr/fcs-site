#!/usr/bin/env node

/**
 * rewrite-descriptions.js
 *
 * Reads seo/description-rewrites.json and applies new meta descriptions
 * to all corresponding page.tsx files.
 *
 * Usage:
 *   node scripts/rewrite-descriptions.js --dry-run   # Preview changes
 *   node scripts/rewrite-descriptions.js              # Apply changes
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const REWRITES_PATH = path.join(ROOT, 'seo', 'description-rewrites.json');
const DRY_RUN = process.argv.includes('--dry-run');

function main() {
  console.log(`Mode: ${DRY_RUN ? 'DRY RUN (no files will be modified)' : 'LIVE (files will be modified)'}\n`);

  // Read rewrites data
  const data = JSON.parse(fs.readFileSync(REWRITES_PATH, 'utf8'));
  const rewrites = data.rewrites;

  console.log(`Total rewrites to apply: ${rewrites.length}\n`);

  let updated = 0;
  let skipped = 0;
  let notFound = 0;
  let alreadyCorrect = 0;
  let errors = 0;
  const errorDetails = [];
  const skipDetails = [];

  for (const entry of rewrites) {
    const filePath = path.join(ROOT, entry.path);

    // Check file exists
    if (!fs.existsSync(filePath)) {
      notFound++;
      skipDetails.push(`NOT FOUND: ${entry.path}`);
      continue;
    }

    let content = fs.readFileSync(filePath, 'utf8');

    // Escape special regex characters in the old description
    const oldDesc = entry.old_description;
    const newDesc = entry.new_description;

    // Check if new description is already in the file
    if (content.includes(newDesc)) {
      alreadyCorrect++;
      continue;
    }

    // Check if old description is in the file (guard against stale data)
    if (!content.includes(oldDesc)) {
      skipped++;
      skipDetails.push(`OLD DESC NOT FOUND: ${entry.path} (may have been already modified)`);
      continue;
    }

    // Replace the old description with the new one
    // Handle both patterns:
    // Pattern 1: description: "old text",
    // Pattern 2: description:\n    "old text",
    const newContent = content.replace(oldDesc, newDesc);

    if (newContent === content) {
      errors++;
      errorDetails.push(`REPLACE FAILED: ${entry.path}`);
      continue;
    }

    if (!DRY_RUN) {
      fs.writeFileSync(filePath, newContent, 'utf8');
    }

    updated++;
    if (DRY_RUN && updated <= 5) {
      console.log(`  WOULD UPDATE: ${entry.path}`);
      console.log(`    OLD (${oldDesc.length}): ${oldDesc.substring(0, 80)}...`);
      console.log(`    NEW (${newDesc.length}): ${newDesc.substring(0, 80)}...`);
      console.log();
    }
  }

  // Summary
  console.log('=== SUMMARY ===');
  console.log(`Updated:          ${updated}`);
  console.log(`Already correct:  ${alreadyCorrect}`);
  console.log(`Skipped (mismatch): ${skipped}`);
  console.log(`Not found:        ${notFound}`);
  console.log(`Errors:           ${errors}`);
  console.log(`Total processed:  ${rewrites.length}`);

  if (skipDetails.length > 0) {
    console.log('\n--- Skipped Details ---');
    skipDetails.forEach(d => console.log(`  ${d}`));
  }

  if (errorDetails.length > 0) {
    console.log('\n--- Error Details ---');
    errorDetails.forEach(d => console.log(`  ${d}`));
  }

  if (DRY_RUN) {
    console.log('\n[DRY RUN] No files were modified. Run without --dry-run to apply changes.');
  } else {
    console.log(`\nDone. ${updated} files updated.`);
  }

  // Exit with error code if there were errors
  if (errors > 0) {
    process.exit(1);
  }
}

main();
