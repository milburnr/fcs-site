#!/usr/bin/env node
/**
 * add-images-to-pages.js
 *
 * Matches analyzed images to pages based on topic/tags and adds them.
 * Uses the pre-analyzed fcs-analyzed-images.json which has alt text and quality scores.
 *
 * Run: node scripts/add-images-to-pages.js [--dry-run]
 */

const fs = require('fs');
const path = require('path');

const APP_DIR = path.join(__dirname, '..', 'app');
const IMAGES_JSON = '/mnt/d/Projects/service-site-builder/packages/tools/image-processing/output/fcs-analyzed-images.json';
const DRY_RUN = process.argv.includes('--dry-run');

// Topic to image tag mapping
const TOPIC_TAGS = {
  commercial: ['commercial', 'office', 'industrial', 'warehouse', 'retail', 'medical', 'building'],
  residential: ['residential', 'home', 'house', 'custom', 'luxury', 'stilt', 'coastal', 'waterfront'],
  disaster: ['storm', 'hurricane', 'damage', 'restoration', 'fire', 'flood', 'insurance', 'emergency'],
  historic: ['historic', 'restoration', 'brick', 'masonry', 'heritage', 'preservation'],
  balcony: ['balcony', 'deck', 'railing', 'waterproofing', 'exterior'],
  construction: ['construction', 'project', 'site', 'equipment', 'crane', 'truck'],
};

let stats = {
  imagesLoaded: 0,
  heroImages: 0,
  galleryImages: 0,
  pagesUpdated: 0,
  errors: 0,
};

/**
 * Load analyzed images
 */
function loadAnalyzedImages() {
  const data = JSON.parse(fs.readFileSync(IMAGES_JSON, 'utf8'));
  return data.images.filter(img => img.analysis && !img.error);
}

/**
 * Find best matching images for a topic
 */
function findImagesForTopic(images, topic, count = 3, minQuality = 60) {
  const topicTags = TOPIC_TAGS[topic] || TOPIC_TAGS.construction;

  // Score each image based on tag matches
  const scored = images
    .filter(img => img.analysis && img.analysis.quality.overall >= minQuality)
    .map(img => {
      const imgTags = (img.analysis.tags || []).join(' ').toLowerCase();
      const subject = (img.analysis.content?.subject || '').toLowerCase();

      let score = 0;
      for (const tag of topicTags) {
        if (imgTags.includes(tag)) score += 2;
        if (subject.includes(tag)) score += 1;
      }

      return { ...img, matchScore: score };
    })
    .filter(img => img.matchScore > 0)
    .sort((a, b) => {
      // Sort by match score first, then quality
      if (b.matchScore !== a.matchScore) return b.matchScore - a.matchScore;
      return b.analysis.quality.overall - a.analysis.quality.overall;
    });

  return scored.slice(0, count);
}

/**
 * Find hero-quality images for a topic
 */
function findHeroImage(images, topic) {
  const matches = findImagesForTopic(images, topic, 5, 75);
  // Prefer images marked as hero use case
  const heroMatches = matches.filter(img => img.analysis.useCases?.hero);
  return heroMatches[0] || matches[0];
}

/**
 * Generate image catalog for pages
 */
function generateImageCatalog(images) {
  const catalog = {
    byTopic: {},
    heroImages: [],
    galleryImages: [],
  };

  // Find hero images (quality 85+)
  catalog.heroImages = images
    .filter(img => img.analysis && img.analysis.quality.overall >= 85)
    .sort((a, b) => b.analysis.quality.overall - a.analysis.quality.overall);

  // Categorize by topic
  for (const topic of Object.keys(TOPIC_TAGS)) {
    catalog.byTopic[topic] = findImagesForTopic(images, topic, 10, 60);
  }

  return catalog;
}

/**
 * Get image path relative to public folder
 */
function getImagePath(image) {
  // Convert from localPath to public path
  // /mnt/.../wordpress/simply-static-1-xxx/wp-content/uploads/... -> /wp-content/uploads/...
  const src = image.src || '';
  if (src.startsWith('/wp-content/')) {
    return src;
  }

  // Try to extract from localPath
  const localPath = image.localPath || '';
  const wpMatch = localPath.match(/wp-content\/uploads\/.+$/);
  if (wpMatch) {
    return '/' + wpMatch[0];
  }

  return src;
}

/**
 * Main execution
 */
async function main() {
  console.log(`\n${'='.repeat(60)}`);
  console.log(`  Image Matching and Assignment`);
  console.log(`  Mode: ${DRY_RUN ? 'DRY RUN (no files will be modified)' : 'LIVE'}`);
  console.log(`${'='.repeat(60)}\n`);

  // Load analyzed images
  console.log('Loading analyzed images...');
  const images = loadAnalyzedImages();
  stats.imagesLoaded = images.length;
  console.log(`Loaded ${images.length} analyzed images\n`);

  // Generate catalog
  console.log('Generating image catalog...');
  const catalog = generateImageCatalog(images);
  stats.heroImages = catalog.heroImages.length;
  console.log(`Found ${catalog.heroImages.length} hero-quality images\n`);

  // Print topic distribution
  console.log('Images by topic:');
  for (const [topic, imgs] of Object.entries(catalog.byTopic)) {
    console.log(`  ${topic}: ${imgs.length} images`);
  }
  console.log('');

  // Generate image assignment report
  const assignments = [];

  // Assign hero images to pillar pages
  const pillarPages = [
    { path: 'services/commercial/page.tsx', topic: 'commercial', name: 'Commercial Services' },
    { path: 'services/residential/page.tsx', topic: 'residential', name: 'Residential Services' },
    { path: 'services/disaster-recovery/page.tsx', topic: 'disaster', name: 'Disaster Recovery' },
    { path: 'services/historic-restoration/page.tsx', topic: 'historic', name: 'Historic Restoration' },
    { path: 'commercial/page.tsx', topic: 'commercial', name: 'Commercial Overview' },
    { path: 'residential/page.tsx', topic: 'residential', name: 'Residential Overview' },
  ];

  // Find best hero image for each pillar
  console.log('Hero image assignments:');
  for (const pillar of pillarPages) {
    const heroImg = findHeroImage(images, pillar.topic);
    if (heroImg) {
      const imgPath = getImagePath(heroImg);
      assignments.push({
        page: pillar.path,
        pageName: pillar.name,
        topic: pillar.topic,
        image: imgPath,
        altText: heroImg.analysis.altText,
        quality: heroImg.analysis.quality.overall,
      });
      console.log(`  ${pillar.name}:`);
      console.log(`    Image: ${path.basename(imgPath)}`);
      console.log(`    Alt: ${heroImg.analysis.altText}`);
      console.log(`    Quality: ${heroImg.analysis.quality.overall}`);
    }
  }
  console.log('');

  // Output catalog for manual use or further scripting
  const outputPath = path.join(__dirname, '..', 'image-catalog.json');
  const outputData = {
    generated: new Date().toISOString(),
    stats: {
      totalAnalyzed: stats.imagesLoaded,
      heroQuality: stats.heroImages,
      byTopic: Object.fromEntries(
        Object.entries(catalog.byTopic).map(([k, v]) => [k, v.length])
      ),
    },
    pillarAssignments: assignments,
    topImages: catalog.heroImages.slice(0, 20).map(img => ({
      path: getImagePath(img),
      altText: img.analysis.altText,
      quality: img.analysis.quality.overall,
      tags: img.analysis.tags,
      useCases: img.analysis.useCases,
    })),
    byTopic: Object.fromEntries(
      Object.entries(catalog.byTopic).map(([topic, imgs]) => [
        topic,
        imgs.slice(0, 5).map(img => ({
          path: getImagePath(img),
          altText: img.analysis.altText,
          quality: img.analysis.quality.overall,
          matchScore: img.matchScore,
        })),
      ])
    ),
  };

  if (!DRY_RUN) {
    fs.writeFileSync(outputPath, JSON.stringify(outputData, null, 2));
    console.log(`Image catalog written to: ${outputPath}\n`);
  }

  // Summary
  console.log(`${'='.repeat(60)}`);
  console.log(`  Summary`);
  console.log(`${'='.repeat(60)}`);
  console.log(`  Images analyzed:       ${stats.imagesLoaded}`);
  console.log(`  Hero-quality images:   ${stats.heroImages}`);
  console.log(`  Pillar assignments:    ${assignments.length}`);
  console.log(`${'='.repeat(60)}\n`);

  if (!DRY_RUN) {
    console.log('Next steps:');
    console.log('1. Review image-catalog.json for assignments');
    console.log('2. Copy images from wordpress/ to public/images/');
    console.log('3. Update pillar pages to use assigned hero images');
    console.log('');
  }
}

main().catch(console.error);
