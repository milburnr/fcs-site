/**
 * Process gallery photos for FCS site
 *
 * Reads 8 project folders from /Volumes/External-2TB/Projects/fcs-photos,
 * converts each photo to two WebP sizes (1600px full, 400px thumb),
 * and outputs to /Volumes/External-2TB/Projects/fcs-gallery-processed/{slug}/
 *
 * Usage: node scripts/process-gallery-photos.js
 */

const sharp = require('/Volumes/External-2TB/Projects/service-site-builder/tools/image-processing/node_modules/sharp');
const fs = require('fs');
const path = require('path');

const INPUT_DIR = '/Volumes/External-2TB/Projects/fcs-photos';
const OUTPUT_DIR = '/Volumes/External-2TB/Projects/fcs-gallery-processed';

const SIZES = {
  full: { width: 1600, suffix: 'full' },
  thumb: { width: 400, suffix: 'thumb' },
};

const QUALITY = 82;

// Folder name -> slug mapping
const PROJECTS = {
  '5th Ave home': '5th-ave-home',
  'Bayshore Drive': 'bayshore-drive',
  "Commodore's Cove": 'commodores-cove',
  'Horeseshoe Loop Rd': 'horseshoe-loop-rd',
  'Italian Club': 'italian-club',
  'MVP Orthodontics': 'mvp-orthodontics',
  'Race Track': 'race-track',
  'World Vision': 'world-vision',
};

async function processProject(folderName, slug) {
  const inputPath = path.join(INPUT_DIR, folderName);
  const outputPath = path.join(OUTPUT_DIR, slug);

  // Get image files (case-insensitive match for .jpg, .jpeg, .png)
  const files = fs.readdirSync(inputPath)
    .filter(f => /\.(jpe?g|png)$/i.test(f))
    .sort(); // DJI_ sorts before JGP_ -- drone overview shots first

  fs.mkdirSync(outputPath, { recursive: true });

  for (let i = 0; i < files.length; i++) {
    const num = String(i + 1).padStart(2, '0');
    const src = path.join(inputPath, files[i]);

    for (const [, { width, suffix }] of Object.entries(SIZES)) {
      const outFile = `fcs-${slug}-${num}-${suffix}.webp`;
      await sharp(src)
        .resize(width, null, { withoutEnlargement: true })
        .webp({ quality: QUALITY })
        .toFile(path.join(outputPath, outFile));
    }

    process.stdout.write(`  ${slug}: ${i + 1}/${files.length}\r`);
  }

  console.log(`  ${slug}: ${files.length} photos processed`);
  return { slug, name: folderName, photoCount: files.length };
}

async function main() {
  console.log('Processing gallery photos for FCS site');
  console.log(`Input:  ${INPUT_DIR}`);
  console.log(`Output: ${OUTPUT_DIR}`);
  console.log('---');

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const manifest = { projects: [] };
  let totalPhotos = 0;

  for (const [folderName, slug] of Object.entries(PROJECTS)) {
    const inputPath = path.join(INPUT_DIR, folderName);
    if (!fs.existsSync(inputPath)) {
      console.error(`WARNING: Folder not found: ${inputPath}`);
      continue;
    }

    const result = await processProject(folderName, slug);
    manifest.projects.push({
      slug: result.slug,
      name: result.name,
      photoCount: result.photoCount,
    });
    totalPhotos += result.photoCount;
  }

  console.log('---');
  console.log(`Total: ${totalPhotos} photos across ${manifest.projects.length} projects`);
  console.log(`Output: ${totalPhotos * 2} WebP files (full + thumb)`);

  // Write manifest
  const manifestPath = path.join(OUTPUT_DIR, 'manifest.json');
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  console.log(`Manifest: ${manifestPath}`);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
