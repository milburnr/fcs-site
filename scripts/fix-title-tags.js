const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const appDir = path.join(__dirname, '..', 'app');

// Find all page.tsx files
function findPageFiles(dir, files = []) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      findPageFiles(fullPath, files);
    } else if (item === 'page.tsx') {
      files.push(fullPath);
    }
  }
  return files;
}

// Extract title from file
function extractTitle(content) {
  const match = content.match(/title:\s*["']([^"']+)["']/);
  return match ? match[1] : null;
}

// Find all files with titles over 60 chars
const pageFiles = findPageFiles(appDir);
const longTitles = [];

for (const file of pageFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const title = extractTitle(content);
  if (title && title.length > 60) {
    const relativePath = path.relative(path.join(__dirname, '..'), file);
    longTitles.push({
      file: relativePath,
      title,
      length: title.length
    });
  }
}

// Sort by length descending
longTitles.sort((a, b) => b.length - a.length);

console.log(`Found ${longTitles.length} titles over 60 characters:\n`);

for (const item of longTitles) {
  console.log(`${item.length} chars: ${item.file}`);
  console.log(`  Current: ${item.title}`);
  console.log('');
}

// Export for processing
fs.writeFileSync(
  path.join(__dirname, '..', 'long-titles.json'),
  JSON.stringify(longTitles, null, 2)
);
console.log(`\nExported to long-titles.json`);
