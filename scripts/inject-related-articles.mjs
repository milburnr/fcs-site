#!/usr/bin/env node
/**
 * Injects <RelatedArticles pageSlug="..." /> into service / service-city pages.
 *
 * Idempotent: skips files that already import RelatedArticles.
 * Excludes: dynamic routes ([...]), api routes, app/page.tsx, about/contact/
 *           resources/privacy/terms/gallery/team/etc., route groups (/_*, /(...)/).
 *
 * Usage:
 *   node scripts/inject-related-articles.mjs            # dry run on all
 *   node scripts/inject-related-articles.mjs --write    # actually write
 *   node scripts/inject-related-articles.mjs --write --only=app/balcony-reconstruction-tampa/page.tsx
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");
const APP_DIR = path.join(ROOT, "app");

const args = process.argv.slice(2);
const WRITE = args.includes("--write");
const ONLY = (args.find((a) => a.startsWith("--only=")) || "").replace("--only=", "");

const IMPORT_LINE = `import RelatedArticles from "@/components/RelatedArticles";`;
const IMPORT_REGEX = /from\s+["']@\/components\/RelatedArticles["']/;

// Top-level dirs to exclude entirely (relative to app/)
const EXCLUDE_TOP_LEVEL = new Set([
  "about",
  "contact",
  "resources",
  "privacy",
  "privacy-policy",
  "terms",
  "terms-and-conditions",
  "gallery",
  "team",
  "team-members",
  "locations",
  "our-process",
  "premium-homepage",
]);

// Excluded subtrees (anywhere under these dirs is skipped except their own page.tsx? per spec, exclude entirely)
const EXCLUDE_SUBTREES = [
  "resources",
  "gallery",
  "commercial/guides",
  "residential/guides",
  "insurance/guides",
];

function walk(dir, out = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      // skip route groups and private dirs
      if (e.name.startsWith("(") || e.name.startsWith("_") || e.name === "api") continue;
      walk(full, out);
    } else if (e.isFile() && e.name === "page.tsx") {
      out.push(full);
    }
  }
  return out;
}

function isDynamicRoute(rel) {
  return rel.includes("[");
}

function isExcluded(rel) {
  // rel is like "balcony-reconstruction-tampa/page.tsx" or "services/page.tsx" or "commercial/guides/foo/page.tsx"
  if (rel === "page.tsx") return { excluded: true, reason: "homepage (app/page.tsx)" };

  const parts = rel.split(path.sep);
  const top = parts[0];

  if (EXCLUDE_TOP_LEVEL.has(top)) {
    return { excluded: true, reason: `excluded top-level: ${top}` };
  }
  for (const sub of EXCLUDE_SUBTREES) {
    if (rel.startsWith(sub + path.sep) || rel === sub + path.sep + "page.tsx") {
      return { excluded: true, reason: `excluded subtree: ${sub}` };
    }
  }
  if (isDynamicRoute(rel)) {
    return { excluded: true, reason: "dynamic route" };
  }
  return { excluded: false };
}

function pageSlugFromRel(rel) {
  // rel: "balcony-reconstruction-tampa/page.tsx" -> "balcony-reconstruction-tampa"
  // rel: "services/historic-restoration/page.tsx" -> "historic-restoration"
  // rel: "sb4d-compliance/tampa/page.tsx" -> "sb4d-compliance-tampa" (use path joined with -)
  const parts = rel.split(path.sep);
  parts.pop(); // drop "page.tsx"
  if (parts.length === 0) return "home";
  if (parts.length === 1) return parts[0];
  // For nested pages: if the leaf is a generic city/short token, join with parent
  // for better topical signal (e.g. sb4d-compliance/tampa -> sb4d-compliance-tampa).
  // Otherwise the leaf alone is descriptive enough (e.g. services/commercial -> commercial).
  const leaf = parts[parts.length - 1];
  const parent = parts[parts.length - 2];
  const GENERIC_LEAVES = new Set([
    "tampa", "sarasota", "clearwater", "bradenton", "brandon",
    "lakeland", "ruskin", "st-petersburg", "plant-city",
  ]);
  if (GENERIC_LEAVES.has(leaf)) return `${parent}-${leaf}`;
  return leaf;
}

function injectImport(source) {
  if (IMPORT_REGEX.test(source)) return { source, changed: false };
  // Insert after the last existing import line.
  const importMatches = [...source.matchAll(/^import\s.+;$/gm)];
  if (importMatches.length === 0) {
    return { source: IMPORT_LINE + "\n" + source, changed: true };
  }
  const last = importMatches[importMatches.length - 1];
  const insertAt = last.index + last[0].length;
  const next = source.slice(0, insertAt) + "\n" + IMPORT_LINE + source.slice(insertAt);
  return { source: next, changed: true };
}

/**
 * Find insertion index inside the JSX returned by the default export.
 * Strategy:
 *   1. Locate the default export's `return (` block.
 *   2. Find the closing tag of the outermost wrapper:
 *      - prefer `</>` (fragment)
 *      - else last `</main>`
 *      - else last `</div>` before `);`
 *   3. Return the position right before that closing tag.
 */
function findInsertPoint(source) {
  // Locate the closing tag of the outermost JSX wrapper, then back up to its line start
  // so we can inject above it preserving indentation.
  const tryClosers = [
    { tag: "</>", kind: "fragment" },
    { tag: "</main>", kind: "main" },
  ];
  let target = null;
  for (const c of tryClosers) {
    const idx = source.lastIndexOf(c.tag);
    if (idx !== -1) {
      target = { idx, kind: c.kind };
      break;
    }
  }
  if (!target) {
    // Fallback: last </div> before the final );
    const closeReturn = source.lastIndexOf(");");
    if (closeReturn !== -1) {
      const before = source.slice(0, closeReturn);
      const divIdx = before.lastIndexOf("</div>");
      if (divIdx !== -1) {
        target = { idx: divIdx, kind: "div-fallback" };
      }
    }
  }
  if (!target) return null;

  // Walk back from target.idx to start of that line
  let lineStart = target.idx;
  while (lineStart > 0 && source[lineStart - 1] !== "\n") lineStart--;
  const indent = source.slice(lineStart, target.idx); // whitespace-only prefix of the closing tag's line
  return { lineStart, indent, kind: target.kind };
}

function buildSnippet(slug, indent) {
  return `${indent}<RelatedArticles pageSlug="${slug}" />\n`;
}

function processFile(absPath) {
  const rel = path.relative(APP_DIR, absPath);
  const ex = isExcluded(rel);
  if (ex.excluded) {
    return { rel, status: "skipped", reason: ex.reason };
  }
  const orig = fs.readFileSync(absPath, "utf8");
  if (IMPORT_REGEX.test(orig)) {
    return { rel, status: "skipped", reason: "already has RelatedArticles import" };
  }
  const insert = findInsertPoint(orig);
  if (!insert) {
    return { rel, status: "skipped", reason: "no insertion point found" };
  }

  const slug = pageSlugFromRel(rel);
  const snippet = buildSnippet(slug, insert.indent);

  let next = orig.slice(0, insert.lineStart) + snippet + orig.slice(insert.lineStart);
  const imp = injectImport(next);
  next = imp.source;

  if (WRITE) {
    fs.writeFileSync(absPath, next, "utf8");
  }
  return { rel, status: "modified", slug, insertKind: insert.kind };
}

function main() {
  if (!fs.existsSync(APP_DIR)) {
    console.error(`app/ dir not found at ${APP_DIR}`);
    process.exit(1);
  }
  let files = walk(APP_DIR);
  if (ONLY) {
    const onlyAbs = path.resolve(ROOT, ONLY);
    files = files.filter((f) => f === onlyAbs);
    if (files.length === 0) {
      console.error(`--only file not found in walk: ${ONLY}`);
      process.exit(1);
    }
  }

  const modified = [];
  const skipped = [];
  for (const f of files) {
    const r = processFile(f);
    if (r.status === "modified") modified.push(r);
    else skipped.push(r);
  }

  console.log(`\n=== INCLUDED (modified${WRITE ? "" : " — DRY RUN"}) ===`);
  for (const m of modified) {
    console.log(`  ${m.rel}  →  pageSlug="${m.slug}"  [${m.insertKind}]`);
  }
  console.log(`\n=== SKIPPED ===`);
  // Group by reason
  const byReason = {};
  for (const s of skipped) {
    (byReason[s.reason] ||= []).push(s.rel);
  }
  for (const [reason, list] of Object.entries(byReason)) {
    console.log(`\n  [${reason}]  ${list.length} file(s):`);
    for (const f of list) console.log(`    - ${f}`);
  }

  console.log(`\n=== SUMMARY ===`);
  console.log(`  Modified: ${modified.length}`);
  console.log(`  Skipped:  ${skipped.length}`);
  console.log(`  Mode:     ${WRITE ? "WRITE" : "DRY RUN (use --write to apply)"}`);
}

main();
