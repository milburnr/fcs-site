#!/usr/bin/env node
/**
 * optimize-article-hero-images.mjs
 *
 * Re-encodes oversized PNG article heroes in public/images/articles/ to WebP.
 * Then updates MDX heroImage frontmatter and any code references from
 * .png → .webp.
 */
import fs from 'node:fs';
import fsp from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const ARTICLE_IMG_DIR = path.join(ROOT, 'public', 'images', 'articles');

const files = fs.readdirSync(ARTICLE_IMG_DIR).filter(f => f.toLowerCase().endsWith('.png'));
console.log(`Re-encoding ${files.length} PNGs → WebP`);

const renames = {};
for (const file of files) {
  const src = path.join(ARTICLE_IMG_DIR, file);
  const stem = file.slice(0, -4);
  const dst = path.join(ARTICLE_IMG_DIR, stem + '.webp');
  if (fs.existsSync(dst)) {
    console.log(`  skip (exists): ${stem}.webp`);
  } else {
    await sharp(src)
      .resize({ width: 1280, withoutEnlargement: true })
      .webp({ quality: 82, effort: 5 })
      .toFile(dst);
    const before = fs.statSync(src).size;
    const after = fs.statSync(dst).size;
    console.log(`  ${file}: ${(before/1024).toFixed(0)}KB → ${(after/1024).toFixed(0)}KB`);
  }
  renames[`/images/articles/${file}`] = `/images/articles/${stem}.webp`;
}

// Update MDX/code refs from .png → .webp for these specific files
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

let updated = 0;
for (const dir of SRC_DIRS) {
  const dirPath = path.join(ROOT, dir);
  if (!fs.existsSync(dirPath)) continue;
  const list = await walk(dirPath);
  for (const f of list) {
    let txt = await fsp.readFile(f, 'utf-8');
    const before = txt;
    for (const [from, to] of Object.entries(renames)) {
      txt = txt.replaceAll(from, to);
    }
    if (txt !== before) {
      await fsp.writeFile(f, txt);
      updated++;
    }
  }
}
console.log(`Updated ${updated} files`);

// Also write a note about uploading the new webp files to R2
console.log('\n⚠️  ACTION NEEDED: upload public/images/articles/*.webp to R2 bucket fcs-gallery/images/articles/');
console.log('  wrangler r2 object put fcs-gallery/images/articles/<name>.webp --file=public/images/articles/<name>.webp --remote');
