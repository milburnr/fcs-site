#!/usr/bin/env node

/**
 * Image Audit Script
 * Finds images in the codebase and checks for alt text compliance
 *
 * Usage: node scripts/audit-images.js
 */

const fs = require('fs');
const path = require('path');

const APP_DIR = path.join(__dirname, '..', 'app');
const COMPONENTS_DIR = path.join(__dirname, '..', 'components');
const PUBLIC_DIR = path.join(__dirname, '..', 'public');

function getAllFiles(dir, extensions = ['.tsx', '.jsx'], files = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      getAllFiles(fullPath, extensions, files);
    } else if (extensions.some(ext => entry.name.endsWith(ext))) {
      files.push(fullPath);
    }
  }

  return files;
}

function analyzeFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const relativePath = path.relative(path.join(__dirname, '..'), filePath);

  const analysis = {
    file: relativePath,
    images: [],
    backgroundImages: [],
    issues: [],
  };

  // Find Next.js Image components
  const imageRegex = /<Image[^>]+>/g;
  const imageMatches = content.match(imageRegex) || [];

  for (const match of imageMatches) {
    const altMatch = match.match(/alt=["']([^"']*)["']/);
    const srcMatch = match.match(/src=["']?([^"'\s>]+)["']?/);

    const hasAlt = altMatch !== null;
    const altText = altMatch ? altMatch[1] : '';
    const src = srcMatch ? srcMatch[1] : 'unknown';

    analysis.images.push({
      src,
      hasAlt,
      altText,
      isEmpty: hasAlt && altText.trim() === '',
    });

    if (!hasAlt) {
      analysis.issues.push(`Missing alt attribute on Image: ${src}`);
    } else if (altText.trim() === '') {
      analysis.issues.push(`Empty alt text on Image: ${src}`);
    }
  }

  // Find img tags (non-Next.js)
  const imgRegex = /<img[^>]+>/g;
  const imgMatches = content.match(imgRegex) || [];

  for (const match of imgMatches) {
    const altMatch = match.match(/alt=["']([^"']*)["']/);
    const srcMatch = match.match(/src=["']?([^"'\s>]+)["']?/);

    const hasAlt = altMatch !== null;
    const altText = altMatch ? altMatch[1] : '';
    const src = srcMatch ? srcMatch[1] : 'unknown';

    analysis.images.push({
      type: 'img',
      src,
      hasAlt,
      altText,
      isEmpty: hasAlt && altText.trim() === '',
    });

    if (!hasAlt) {
      analysis.issues.push(`Missing alt attribute on img: ${src}`);
    } else if (altText.trim() === '') {
      analysis.issues.push(`Empty alt text on img: ${src}`);
    }
  }

  // Find CSS background images
  const bgRegex = /backgroundImage:\s*["'`]url\(([^)]+)\)["'`]/g;
  let bgMatch;
  while ((bgMatch = bgRegex.exec(content)) !== null) {
    analysis.backgroundImages.push({
      url: bgMatch[1].replace(/["']/g, ''),
    });
    analysis.issues.push(`CSS background image (no alt possible): ${bgMatch[1]}`);
  }

  // Find style background images
  const styleBgRegex = /style=\{\{[^}]*backgroundImage[^}]*\}\}/g;
  const styleBgMatches = content.match(styleBgRegex) || [];
  for (const match of styleBgMatches) {
    const urlMatch = match.match(/url\(([^)]+)\)/);
    if (urlMatch) {
      analysis.backgroundImages.push({
        url: urlMatch[1].replace(/["']/g, ''),
      });
    }
  }

  return analysis;
}

function getPublicImages() {
  const images = [];
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.avif', '.svg'];

  function scan(dir) {
    if (!fs.existsSync(dir)) return;

    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        scan(fullPath);
      } else if (imageExtensions.some(ext => entry.name.toLowerCase().endsWith(ext))) {
        images.push(path.relative(PUBLIC_DIR, fullPath));
      }
    }
  }

  scan(PUBLIC_DIR);
  return images;
}

function main() {
  console.log('🖼️  Image Audit for FCS Website\n');
  console.log('='.repeat(50));

  // Analyze all TSX files
  const appFiles = getAllFiles(APP_DIR);
  const componentFiles = getAllFiles(COMPONENTS_DIR);
  const allFiles = [...appFiles, ...componentFiles];

  console.log(`\nAnalyzing ${allFiles.length} files...\n`);

  const results = {
    totalImages: 0,
    withAlt: 0,
    withoutAlt: 0,
    emptyAlt: 0,
    backgroundImages: 0,
    fileIssues: [],
  };

  for (const file of allFiles) {
    const analysis = analyzeFile(file);

    for (const img of analysis.images) {
      results.totalImages++;
      if (!img.hasAlt) {
        results.withoutAlt++;
      } else if (img.isEmpty) {
        results.emptyAlt++;
      } else {
        results.withAlt++;
      }
    }

    results.backgroundImages += analysis.backgroundImages.length;

    if (analysis.issues.length > 0) {
      results.fileIssues.push({
        file: analysis.file,
        issues: analysis.issues,
      });
    }
  }

  // Get public images
  const publicImages = getPublicImages();

  // Print summary
  console.log('📊 IMAGE AUDIT SUMMARY');
  console.log('-'.repeat(40));
  console.log(`Total Image components: ${results.totalImages}`);
  console.log(`  ✅ With proper alt text: ${results.withAlt}`);
  console.log(`  ⚠️  With empty alt text: ${results.emptyAlt}`);
  console.log(`  ❌ Missing alt attribute: ${results.withoutAlt}`);
  console.log(`\nCSS Background Images: ${results.backgroundImages}`);
  console.log(`Public folder images: ${publicImages.length}`);

  // Print issues
  if (results.fileIssues.length > 0) {
    console.log('\n📝 FILES WITH ISSUES');
    console.log('-'.repeat(40));

    const displayLimit = 20;
    const filesToShow = results.fileIssues.slice(0, displayLimit);

    for (const item of filesToShow) {
      console.log(`\n${item.file}:`);
      item.issues.slice(0, 3).forEach(issue => console.log(`   - ${issue}`));
      if (item.issues.length > 3) {
        console.log(`   ... and ${item.issues.length - 3} more issues`);
      }
    }

    if (results.fileIssues.length > displayLimit) {
      console.log(`\n... and ${results.fileIssues.length - displayLimit} more files with issues`);
    }
  }

  // Print public images
  console.log('\n📁 PUBLIC IMAGES');
  console.log('-'.repeat(40));
  if (publicImages.length > 0) {
    publicImages.slice(0, 10).forEach(img => console.log(`   ${img}`));
    if (publicImages.length > 10) {
      console.log(`   ... and ${publicImages.length - 10} more`);
    }
  } else {
    console.log('   No images found in public folder');
  }

  // Save report
  const reportPath = path.join(__dirname, '..', 'image-audit-report.json');
  fs.writeFileSync(reportPath, JSON.stringify({
    summary: results,
    publicImages,
    fileIssues: results.fileIssues,
  }, null, 2));
  console.log(`\n✅ Report saved to: image-audit-report.json`);

  // Recommendations
  console.log('\n💡 RECOMMENDATIONS');
  console.log('-'.repeat(40));
  if (results.backgroundImages > 0) {
    console.log('• Convert CSS background images to Next.js Image components for SEO');
  }
  if (results.withoutAlt > 0 || results.emptyAlt > 0) {
    console.log('• Add descriptive alt text to all images');
  }
  if (publicImages.length < 10) {
    console.log('• Add more images to public folder for visual content');
  }
  console.log('• Ensure all hero images have descriptive, keyword-rich alt text');

  return results;
}

main();
