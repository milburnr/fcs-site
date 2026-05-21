#!/usr/bin/env node
/**
 * Swap broken image URLs in source files for working alternates discovered on R2.
 * Map produced by manual probe in /tmp/img-probe.txt.
 */
import fs from 'node:fs';
import fsp from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

// Probed broken → working substitutes (R2-verified)
const SWAPS = {
  '/images/maya-patel/maya-patel-display.webp': '/images/maya-patel/maya-patel-large.webp',
  '/images/i9/i9-display.webp': '/images/i9/i9-large.webp',
  '/images/1111/1111-display.webp': '/images/1111/1111-large.webp',
  '/images/hurricane-ian/hurricane-ian-display.webp': '/images/hurricane-ian/hurricane-ian-large.webp',
  '/images/rebuild-superjumbo/rebuild-superjumbo-display.webp': '/images/rebuild-superjumbo/rebuild-superjumbo-large.webp',
  '/images/replacing-roof-decking-and-rafters/replacing-roof-decking-and-rafters-display.webp': '/images/replacing-roof-decking-and-rafters/replacing-roof-decking-and-rafters-large.webp',
  '/images/stages-of-construction-project-management/stages-of-construction-project-management-display.webp': '/images/stages-of-construction-project-management/stages-of-construction-project-management-large.webp',
  '/images/hurricane-restoration-construction/hurricane-restoration-construction-display.webp': '/images/hurricane-restoration-construction/hurricane-restoration-construction-large.webp',
  '/images/custom-home-construction-1/custom-home-construction-1-display.webp': '/images/custom-home-construction-1/custom-home-construction-1-large.webp',
  '/images/custom-home-construction-3/custom-home-construction-3-display.webp': '/images/custom-home-construction-3/custom-home-construction-3-large.webp',
  // NOTE: the bare-path entry ('/.../tampa-hurricane-damage-restoration/tampa-hurricane-damage-restoration'
  // → adds -display.webp) was removed 2026-05-21 — it substring-matched into longer
  // suffixed paths (-display.webp / -small.webp), creating recursive corruption like
  // -display.webp-display.webp-small.webp. Those 5 occurrences were patched directly.
  // Do NOT re-add SWAPS entries that are prefixes of other valid paths.
  // Case-mismatched directories — R2 is lowercase-only (added 2026-05-21)
  '/images/Ian-2/ian-2-display.webp': '/images/ian-2/ian-2-large.webp',
  '/images/Lions-World-Vision-Institute-Building-Exterior/lions-world-vision-institute-building-exterior-display.webp': '/images/lions-world-vision-institute-building-exterior/lions-world-vision-institute-building-exterior-large.webp',
  '/images/FCS-Exterior-Waterproofing/fcs-exterior-waterproofing-display.webp': '/images/fcs-exterior-waterproofing/fcs-exterior-waterproofing-display.webp',
};

const SRC_DIRS = ['app', 'components', 'lib', 'content'];
const EXTS = new Set(['.tsx', '.ts', '.mdx', '.md', '.jsx', '.js', '.json']);

async function walk(dir, acc = []) {
  const items = await fsp.readdir(dir, { withFileTypes: true });
  for (const it of items) {
    if (it.name === 'node_modules' || it.name.startsWith('.')) continue;
    const full = path.join(dir, it.name);
    if (it.isDirectory()) await walk(full, acc);
    else if (it.isFile() && EXTS.has(path.extname(it.name))) acc.push(full);
  }
  return acc;
}

let changes = 0, files = 0;
for (const dir of SRC_DIRS) {
  const dirPath = path.join(ROOT, dir);
  if (!fs.existsSync(dirPath)) continue;
  const fileList = await walk(dirPath);
  for (const f of fileList) {
    let txt = await fsp.readFile(f, 'utf-8');
    const before = txt;
    for (const [from, to] of Object.entries(SWAPS)) {
      // Replace with proper word boundary so we don't double-swap
      const re = new RegExp(from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
      txt = txt.replace(re, to);
    }
    if (txt !== before) {
      const cnt = (before.match(/[\s\S]/g) || []).length - (txt.match(/[\s\S]/g) || []).length;
      changes++;
      files++;
      await fsp.writeFile(f, txt);
    }
  }
}
console.log(`Swapped in ${files} files`);
