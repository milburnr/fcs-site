#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

function findPages(dir) {
  const results = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) results.push(...findPages(fullPath));
    else if (item.name === 'page.tsx') results.push(fullPath);
  }
  return results;
}

const pages = findPages('./app');
let over60 = 0;
let over155 = 0;
let missingOG = 0;
const badTitles = [];
const awkward = [];
const titleMap = new Map();

for (const page of pages) {
  const content = fs.readFileSync(page, 'utf8');
  const titleMatch = content.match(/title:\s*"([^"]+)"/) || content.match(/title:\s*'([^']+)'/);
  const descMatch = content.match(/description:\s*\n?\s*"([^"]+)"/) || content.match(/description:\s*\n?\s*'([^']+)'/);
  const hasOG = content.includes('openGraph:');

  const relPath = page.replace('./app/', '').replace('/page.tsx', '');

  if (titleMatch) {
    const title = titleMatch[1];
    const fullLen = title.length + 6; // + " | FCS"
    if (fullLen > 60) {
      over60++;
      badTitles.push({ relPath, title, fullLen });
    }
    if (title.match(/[|,]\s*$/)) awkward.push(`[TRAIL] ${relPath}: "${title}"`);
    if (title.match(/\b(in|for|of|and|the|with|to|by)\s*$/i)) awkward.push(`[PREP] ${relPath}: "${title}"`);

    if (titleMap.has(title)) titleMap.get(title).push(relPath);
    else titleMap.set(title, [relPath]);
  }

  if (descMatch && descMatch[1].length > 155) over155++;
  if (hasOG === false) missingOG++;
}

console.log('Titles over 60 chars (with " | FCS"):', over60);
console.log('Descriptions over 155 chars:', over155);
console.log('Missing OG tags:', missingOG);

if (awkward.length > 0) {
  console.log('\nAwkward title endings:');
  awkward.forEach(a => console.log('  ' + a));
}

if (over60 > 0) {
  console.log(`\nStill too long (${over60}):`);
  badTitles.forEach(t => console.log(`  [${t.fullLen}] ${t.relPath}: "${t.title}"`));
}

const dupes = [...titleMap.entries()].filter(([, p]) => p.length > 1);
if (dupes.length > 0) {
  console.log(`\nDuplicates (${dupes.length}):`);
  dupes.forEach(([t, p]) => console.log(`  "${t}" x${p.length}: ${p.join(', ')}`));
}
