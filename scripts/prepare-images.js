#!/usr/bin/env node

/**
 * Prepare FCS WordPress images for processing
 * Creates a scraped-images.json file from the WordPress static export
 */

const fs = require('fs');
const path = require('path');

const WORDPRESS_DIR = path.join(__dirname, '../wordpress/simply-static-1-1768596916/wp-content/uploads');
const OUTPUT_FILE = path.join(__dirname, '../output/scraped-images.json');

// Image extensions to include
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];

// WordPress size patterns to skip (we want originals only)
const SKIP_PATTERNS = [
  /-\d+x\d+\./,           // WordPress thumbnails like -150x150, -300x200
  /-scaled\./,             // Scaled versions
  /cropped-.*-\d+x\d+/,   // Cropped thumbnails
];

function shouldIncludeFile(filename) {
  const ext = path.extname(filename).toLowerCase();
  if (!IMAGE_EXTENSIONS.includes(ext)) return false;

  // Skip WordPress-generated sizes
  for (const pattern of SKIP_PATTERNS) {
    if (pattern.test(filename)) return false;
  }

  return true;
}

function scanDirectory(dir, basePath = '') {
  const images = [];

  if (!fs.existsSync(dir)) {
    console.log(`Directory not found: ${dir}`);
    return images;
  }

  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const relativePath = path.join(basePath, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      images.push(...scanDirectory(fullPath, relativePath));
    } else if (shouldIncludeFile(item)) {
      images.push({
        src: `/wp-content/uploads/${relativePath.replace(/\\/g, '/')}`,
        localPath: fullPath,
        filename: item,
        alt: generateAltFromFilename(item),
        context: guessContext(item, relativePath),
        size: stat.size,
      });
    }
  }

  return images;
}

function generateAltFromFilename(filename) {
  // Remove extension and convert to readable text
  return filename
    .replace(/\.[^.]+$/, '')
    .replace(/[-_]/g, ' ')
    .replace(/\d+$/, '')
    .trim();
}

function guessContext(filename, relativePath) {
  const lower = filename.toLowerCase();

  if (lower.includes('hero') || lower.includes('banner') || lower.includes('header')) {
    return 'hero';
  }
  if (lower.includes('logo') || lower.includes('icon')) {
    return 'logo';
  }
  if (lower.includes('gallery') || relativePath.includes('gallery')) {
    return 'gallery';
  }
  if (lower.includes('team') || lower.includes('staff')) {
    return 'team';
  }

  return 'content';
}

function main() {
  console.log('Scanning WordPress uploads directory...');
  console.log(`Source: ${WORDPRESS_DIR}`);

  const images = scanDirectory(WORDPRESS_DIR);

  // Create output directory
  const outputDir = path.dirname(OUTPUT_FILE);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Build output structure
  const output = {
    source: 'wordpress-static-export',
    site: 'Florida Construction Specialists',
    scannedAt: new Date().toISOString(),
    stats: {
      totalImages: images.length,
      byContext: {},
      totalSize: 0,
    },
    images: images,
  };

  // Calculate stats
  for (const img of images) {
    output.stats.totalSize += img.size;
    output.stats.byContext[img.context] = (output.stats.byContext[img.context] || 0) + 1;
  }

  output.stats.totalSizeMB = (output.stats.totalSize / (1024 * 1024)).toFixed(2);

  // Write output
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(output, null, 2));

  console.log(`\nFound ${images.length} original images`);
  console.log(`Total size: ${output.stats.totalSizeMB} MB`);
  console.log(`\nBy context:`);
  for (const [context, count] of Object.entries(output.stats.byContext)) {
    console.log(`  ${context}: ${count}`);
  }
  console.log(`\nOutput written to: ${OUTPUT_FILE}`);
}

main();
