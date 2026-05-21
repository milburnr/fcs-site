#!/usr/bin/env node
/**
 * Undo a bad swap done by scripts/swap-broken-images.mjs that produced paths
 * like `tampa-hurricane-damage-restoration-display.webp-small.webp`.
 * Fix back to clean variants like `tampa-hurricane-damage-restoration-small.webp`.
 */
import fsp from 'node:fs/promises';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC_DIRS = ['app', 'components', 'lib', 'content'];
const EXTS = new Set(['.tsx', '.ts', '.mdx', '.md', '.jsx', '.js', '.json']);

async function walk(dir, acc = []) {
  for (const it of await fsp.readdir(dir, { withFileTypes: true })) {
    if (it.name === 'node_modules' || it.name.startsWith('.')) continue;
    const full = path.join(dir, it.name);
    if (it.isDirectory()) await walk(full, acc);
    else if (it.isFile() && EXTS.has(path.extname(it.name))) acc.push(full);
  }
  return acc;
}

let total = 0, files = 0;
for (const dir of SRC_DIRS) {
  const dp = path.join(ROOT, dir);
  if (!fs.existsSync(dp)) continue;
  for (const f of await walk(dp)) {
    let txt = await fsp.readFile(f, 'utf-8');
    const before = txt;
    // Fix `<stem>-display.webp-(small|medium|large|display|thumbnail).webp` → `<stem>-$1.webp`
    txt = txt.replace(/-display\.webp-(small|medium|large|display|thumbnail)\.webp/g, '-$1.webp');
    if (txt !== before) {
      await fsp.writeFile(f, txt);
      files++;
      total++;
    }
  }
}
console.log(`Fixed ${files} files`);
