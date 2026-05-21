#!/usr/bin/env node
/**
 * collapse-redirect-chains.mjs
 *
 * Reads netlify.toml + public/_redirects, builds a redirect graph,
 * and rewrites every multi-hop chain so each redirect points DIRECTLY
 * at its final destination. No new redirects added; none deleted.
 *
 * Idempotent. Run again and it's a no-op.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const TOML = path.join(ROOT, 'netlify.toml');
const REDIRECTS = path.join(ROOT, 'public', '_redirects');

const SITE = 'https://floridaconstructionspecialists.com';

function normalize(p) {
  if (!p) return p;
  if (p.startsWith('http')) {
    try {
      const u = new URL(p);
      if (u.host === new URL(SITE).host) {
        let q = u.pathname;
        if (q.length > 1 && q.endsWith('/')) q = q.slice(0, -1);
        return q;
      }
      return p;
    } catch { return p; }
  }
  let q = p;
  if (!q.startsWith('/')) q = '/' + q;
  if (q.length > 1 && q.endsWith('/')) q = q.slice(0, -1);
  return q;
}

// ── netlify.toml ──
const tomlText = fs.readFileSync(TOML, 'utf-8');
// Build flat redirect map (only static, non-wildcard, 3xx)
const map = new Map();
const tomlBlocks = tomlText.split('[[redirects]]');
for (let i = 1; i < tomlBlocks.length; i++) {
  const b = tomlBlocks[i];
  const from = b.match(/from\s*=\s*"([^"]+)"/)?.[1];
  const to = b.match(/to\s*=\s*"([^"]+)"/)?.[1];
  const status = parseInt(b.match(/status\s*=\s*(\d+)/)?.[1] || '301', 10);
  if (from && to && status >= 300 && status < 400 && !from.includes('*') && !from.includes(':')) {
    map.set(normalize(from), to);
  }
}

// _redirects
const redirText = fs.readFileSync(REDIRECTS, 'utf-8');
for (const line of redirText.split('\n')) {
  const t = line.trim();
  if (!t || t.startsWith('#')) continue;
  const m = t.match(/^(\S+)\s+(\S+)(?:\s+(\d+))?/);
  if (!m) continue;
  const [, from, to, statusStr] = m;
  const status = parseInt(statusStr || '301', 10);
  if (status < 300 || status >= 400) continue;
  if (from.includes('*') || from.includes(':')) continue;
  if (!map.has(normalize(from))) map.set(normalize(from), to);
}

// Walk to final
function final(start, max = 20) {
  const seen = new Set([start]);
  let cur = start;
  for (let i = 0; i < max; i++) {
    const norm = normalize(cur);
    const next = map.get(norm);
    if (!next || next === cur) break;
    if (seen.has(next)) break; // cycle guard
    seen.add(next);
    cur = next;
  }
  return cur;
}

// Compute new map: every key → ultimate destination
const collapsed = new Map();
let changed = 0;
for (const [from, to] of map) {
  const ultimate = final(from);
  if (ultimate !== to) {
    changed++;
  }
  collapsed.set(from, ultimate);
}

console.log(`Found ${map.size} static redirects, ${changed} need collapsing`);

// Rewrite netlify.toml in-place: only `to = "..."` lines inside [[redirects]] blocks
// where the corresponding `from` exists in collapsed and value differs.
function rewriteToml(text) {
  const parts = text.split('[[redirects]]');
  for (let i = 1; i < parts.length; i++) {
    const block = parts[i];
    const fromMatch = block.match(/from\s*=\s*"([^"]+)"/);
    if (!fromMatch) continue;
    const from = fromMatch[1];
    if (from.includes('*') || from.includes(':')) continue;
    const norm = normalize(from);
    const newTo = collapsed.get(norm);
    if (!newTo) continue;
    const toMatch = block.match(/(to\s*=\s*")([^"]+)(")/);
    if (!toMatch) continue;
    if (toMatch[2] === newTo) continue;
    parts[i] = block.replace(toMatch[0], `${toMatch[1]}${newTo}${toMatch[3]}`);
  }
  return parts.join('[[redirects]]');
}

const newToml = rewriteToml(tomlText);
if (newToml !== tomlText) {
  fs.writeFileSync(TOML, newToml);
  console.log('✓ rewrote netlify.toml');
} else {
  console.log('no netlify.toml changes');
}

// Rewrite _redirects (line by line)
const newLines = redirText.split('\n').map((line) => {
  const t = line.trim();
  if (!t || t.startsWith('#')) return line;
  const m = line.match(/^(\s*)(\S+)(\s+)(\S+)(\s+\d+)?(.*)$/);
  if (!m) return line;
  const [, indent, from, sep, to, statusPart, rest] = m;
  if (from.includes('*') || from.includes(':')) return line;
  const norm = normalize(from);
  const newTo = collapsed.get(norm);
  if (!newTo || newTo === to) return line;
  return `${indent}${from}${sep}${newTo}${statusPart || ''}${rest || ''}`;
});
const newRedirects = newLines.join('\n');
if (newRedirects !== redirText) {
  fs.writeFileSync(REDIRECTS, newRedirects);
  console.log('✓ rewrote public/_redirects');
} else {
  console.log('no _redirects changes');
}

console.log('Done.');
