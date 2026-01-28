#!/usr/bin/env node
/**
 * add-hero-images.js
 *
 * Adds hero background images to pillar pages using the image catalog.
 *
 * Run: node scripts/add-hero-images.js [--dry-run]
 */

const fs = require('fs');
const path = require('path');

const APP_DIR = path.join(__dirname, '..', 'app');
const CATALOG_PATH = path.join(__dirname, '..', 'image-catalog.json');
const DRY_RUN = process.argv.includes('--dry-run');

// Load the catalog
const catalog = JSON.parse(fs.readFileSync(CATALOG_PATH, 'utf8'));

let stats = {
  updated: 0,
  skipped: 0,
  errors: 0,
};

/**
 * Add hero image to a pillar page
 */
function addHeroImage(pagePath, imageData) {
  const fullPath = path.join(APP_DIR, pagePath);

  if (!fs.existsSync(fullPath)) {
    console.log(`  Skipped: ${pagePath} (file not found)`);
    stats.skipped++;
    return;
  }

  let content = fs.readFileSync(fullPath, 'utf8');

  // Check if already has a hero image
  if (content.includes('heroImage') || content.includes('backgroundImage:') && content.includes('url(')) {
    console.log(`  Skipped: ${pagePath} (already has hero image)`);
    stats.skipped++;
    return;
  }

  // Find the hero section pattern
  // Look for: <section className="relative py-20 md:py-28 bg-gradient-to-br from-brand-green-dark
  const heroSectionRegex = /(<section\s+className="relative\s+py-\d+\s+md:py-\d+\s+)(bg-gradient-to-br\s+from-brand-green-dark[^"]*)(overflow-hidden">)/;

  if (!heroSectionRegex.test(content)) {
    // Try alternative pattern
    const altHeroRegex = /(<section\s+className="relative\s+py-\d+[^"]*)(bg-gradient-to-br[^"]*from-brand-green[^"]*)/;
    if (!altHeroRegex.test(content)) {
      console.log(`  Skipped: ${pagePath} (hero section pattern not found)`);
      stats.skipped++;
      return;
    }
  }

  // Add Image import if not present
  if (!content.includes('import Image from "next/image"')) {
    content = content.replace(
      /import Link from "next\/link";/,
      'import Link from "next/link";\nimport Image from "next/image";'
    );
  }

  // Replace the hero section to add background image
  // New pattern: Add image as absolute positioned background with overlay
  const newHeroSection = `<section className="relative py-20 md:py-28 overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="${imageData.image}"
            alt="${imageData.altText}"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>`;

  // Replace the old hero section opening
  content = content.replace(
    /<section\s+className="relative\s+py-20\s+md:py-28\s+bg-gradient-to-br\s+from-brand-green-dark[^"]*overflow-hidden">/,
    newHeroSection
  );

  // Remove the old background pattern div if present (it's now redundant)
  content = content.replace(
    /\s*{\/\* Background Pattern \*\/}\s*<div className="absolute inset-0 opacity-10">\s*<div className="absolute inset-0"[^/]*\/>\s*<\/div>/,
    ''
  );

  if (!DRY_RUN) {
    fs.writeFileSync(fullPath, content, 'utf8');
  }

  console.log(`  Updated: ${pagePath}`);
  console.log(`    Image: ${imageData.image}`);
  console.log(`    Alt: ${imageData.altText}`);
  stats.updated++;
}

// Main execution
console.log(`\n${'='.repeat(60)}`);
console.log(`  Adding Hero Images to Pillar Pages`);
console.log(`  Mode: ${DRY_RUN ? 'DRY RUN' : 'LIVE'}`);
console.log(`${'='.repeat(60)}\n`);

console.log('Processing pillar assignments:\n');

for (const assignment of catalog.pillarAssignments) {
  addHeroImage(assignment.page, assignment);
}

console.log(`\n${'='.repeat(60)}`);
console.log(`  Summary`);
console.log(`${'='.repeat(60)}`);
console.log(`  Updated: ${stats.updated}`);
console.log(`  Skipped: ${stats.skipped}`);
console.log(`  Errors:  ${stats.errors}`);
console.log(`${'='.repeat(60)}\n`);

if (DRY_RUN && stats.updated > 0) {
  console.log(`Run without --dry-run to apply changes.\n`);
}
