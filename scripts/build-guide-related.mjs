#!/usr/bin/env node
/**
 * Builds lib/guide-related.json: for every guide under app/{commercial,residential,insurance}/guides/,
 * a short list of related guides for the <MoreGuides> block.
 *
 * Relatedness = shared title/slug words (and, at lower weight, description words) weighted by rarity (rare words like "breakaway" count more than
 * "commercial"). Two slots go to the most related guides; the last slot goes to the related guide
 * with the fewest links so far, so guides that nothing links to still get picked up.
 * Guides already linked from a page's own code are skipped.
 *
 * Run: node scripts/build-guide-related.mjs   (also runs automatically before `npm run build`)
 */
import fs from "fs";
import path from "path";

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const HUBS = ["commercial", "residential", "insurance"];
const PER_PAGE = 3;
const STOP = new Set(
  ("a an and the of for in on to with your you our is are how what why when vs s t0 2 fl florida tampa tampas bay " +
    "guide service tip top best expert contractor requirement friendly secret key question from " +
    "leading premier choose choosing ultimate essential importance role way need").split(" ")
);

function clean(text) {
  return text
    .replace(/<[^>]+>/g, " ")
    .replace(/\{[^}]*\}/g, " ")
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, " ")
    .trim();
}

function shorten(text, max = 150) {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  return cut.slice(0, cut.lastIndexOf(" ")).replace(/[,.;:\-–—]+$/, "") + "…";
}

// Lowercase words, crude plural stemming, minus stopwords.
function tokenize(text) {
  return new Set(
    text
      .toLowerCase()
      .split(/[^a-z0-9]+/)
      .map((t) => (t.length > 4 && t.endsWith("s") && !t.endsWith("ss") ? t.slice(0, -1) : t))
      .filter((t) => t.length > 1 && !STOP.has(t))
  );
}

const guides = [];
for (const hub of HUBS) {
  const dir = path.join(ROOT, "app", hub, "guides");
  if (!fs.existsSync(dir)) continue;
  for (const slug of fs.readdirSync(dir).sort()) {
    const file = path.join(dir, slug, "page.tsx");
    if (!fs.existsSync(file)) continue;
    const src = fs.readFileSync(file, "utf8");
    const h1 = src.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
    const metaTitle = src.match(/^\s{2}title:\s*"([^"]+)"/m);
    const metaDesc = src.match(/^\s{2}description:\s*\n?\s*"([^"]+)"/m);
    const title = clean(h1 ? h1[1] : "") || (metaTitle ? metaTitle[1].split(" | ")[0] : slug);
    const linked = new Set([...src.matchAll(/["'](\/[a-z0-9\-/]+\/)["']/g)].map((m) => m[1]));
    guides.push({
      href: `/${hub}/guides/${slug}/`,
      hub,
      title,
      description: metaDesc ? shorten(metaDesc[1]) : "",
      tokens: tokenize(`${slug} ${title}`),
      words: tokenize(`${slug} ${title} ${metaDesc ? metaDesc[1] : ""}`),
      linked,
    });
  }
}

const df = new Map();
for (const g of guides) for (const t of g.words) df.set(t, (df.get(t) || 0) + 1);
const idf = (t) => Math.log(guides.length / (df.get(t) || 1));

function score(a, b) {
  let s = 0;
  for (const t of a.words) {
    if (!b.words.has(t)) continue;
    // Title/slug words on both sides count fully; a match that relies on a description counts less.
    s += a.tokens.has(t) && b.tokens.has(t) ? idf(t) : 0.4 * idf(t);
  }
  if (s > 0 && a.hub === b.hub) s += 0.5;
  return s;
}

const inbound = new Map(guides.map((g) => [g.href, 0]));
const out = {};
for (const g of guides) {
  const candidates = guides
    .filter((c) => c.href !== g.href && !g.linked.has(c.href))
    .map((c) => ({ c, s: score(g, c) }))
    .filter((x) => x.s > 0)
    .sort((a, b) => b.s - a.s || a.c.href.localeCompare(b.c.href));

  const picked = candidates.slice(0, PER_PAGE - 1);
  const floor = candidates.length ? candidates[0].s * 0.4 : 0;
  const rest = candidates.slice(PER_PAGE - 1).filter((x) => x.s >= floor);
  if (rest.length) {
    const least = rest.reduce((best, x) =>
      inbound.get(x.c.href) < inbound.get(best.c.href) ? x : best
    );
    picked.push(least);
  }
  for (const { c } of picked) inbound.set(c.href, inbound.get(c.href) + 1);
  out[g.href] = picked.map(({ c }) => ({ title: c.title, href: c.href, description: c.description }));
}

fs.writeFileSync(path.join(ROOT, "lib", "guide-related.json"), JSON.stringify(out, null, 1) + "\n");
const none = guides.filter((g) => inbound.get(g.href) === 0).length;
console.log(`guide-related: ${guides.length} guides, ${none} with no related-block inbound link`);
