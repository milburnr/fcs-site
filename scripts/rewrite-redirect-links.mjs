#!/usr/bin/env node
/**
 * rewrite-redirect-links.mjs
 *
 * For each (oldHref → finalHref) mapping derived from audit-findings.json,
 * rewrite occurrences inside .tsx/.ts/.mdx/.md files under app/, components/,
 * lib/, content/. Only replaces inside quoted strings and markdown link targets.
 *
 * Idempotent.
 */
import fs from 'node:fs';
import fsp from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const findings = JSON.parse(fs.readFileSync(path.join(ROOT, 'audit-findings.json'), 'utf-8'));

// Build mapping: href → finalUrl (most-common winner)
const mapping = new Map();
for (const links of Object.values(findings.L2_pagesWithRedirectLinks)) {
  for (const { href, finalUrl } of links) mapping.set(href, finalUrl);
}
for (const links of Object.values(findings.L3_noindexPagesWithRedirectLinks || {})) {
  for (const { href, finalUrl } of links) mapping.set(href, finalUrl);
}

// Sort by length desc — longer first to avoid partial overlaps
const entries = [...mapping.entries()].sort((a, b) => b[0].length - a[0].length);
console.log(`${entries.length} unique mappings`);

// Walk source dirs
const SRC_DIRS = ['app', 'components', 'lib', 'content'];
const EXTS = new Set(['.tsx', '.ts', '.mdx', '.md', '.jsx', '.js']);

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

const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

let totalReplacements = 0;
let filesChanged = 0;

for (const dir of SRC_DIRS) {
  const dirPath = path.join(ROOT, dir);
  if (!fs.existsSync(dirPath)) continue;
  const files = await walk(dirPath);
  for (const file of files) {
    let txt = await fsp.readFile(file, 'utf-8');
    const before = txt;
    let fileReplacements = 0;
    for (const [oldHref, newHref] of entries) {
      if (oldHref === newHref) continue;

      // Build patterns. We want quoted exact matches and markdown link targets.
      const patterns = [
        new RegExp(`(["'\`])${escapeRe(oldHref)}\\1`, 'g'),
        // Markdown link: ](url) where url is exact
        new RegExp(`\\]\\(${escapeRe(oldHref)}\\)`, 'g'),
        // href= without quotes (rare in JSX, but covers raw HTML if any)
        new RegExp(`href=${escapeRe(oldHref)}(?=[\\s>])`, 'g'),
      ];
      for (const re of patterns) {
        txt = txt.replace(re, (m) => {
          fileReplacements++;
          return m.replace(oldHref, newHref);
        });
      }
    }
    if (txt !== before) {
      await fsp.writeFile(file, txt);
      filesChanged++;
      totalReplacements += fileReplacements;
    }
  }
}

console.log(`Modified ${filesChanged} files, ${totalReplacements} replacements.`);
