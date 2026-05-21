import fs from "node:fs";
import path from "node:path";
import type { MetadataRoute } from "next";
import { getAllArticles } from "@/lib/articles";

export const dynamic = "force-static";

const BASE_URL = "https://floridaconstructionspecialists.com";
const APP_DIR = path.join(process.cwd(), "app");
const NETLIFY_TOML = path.join(process.cwd(), "netlify.toml");
const REDIRECTS_FILE = path.join(process.cwd(), "public", "_redirects");

// Sources of truth for "should this URL be in the sitemap?"
//  - skip noindex pages (Article + LocalBusiness require fresh sitemap entries)
//  - skip pages whose `from` is a 301 source (page is unreachable, redirects away)
//  - skip pages whose declared canonical points elsewhere

function readIfExists(p: string): string {
  return fs.existsSync(p) ? fs.readFileSync(p, "utf-8") : "";
}

const REDIRECT_SOURCES: Set<string> = (() => {
  const set = new Set<string>();
  // netlify.toml [[redirects]] blocks
  const toml = readIfExists(NETLIFY_TOML);
  for (const block of toml.split("[[redirects]]").slice(1)) {
    const from = block.match(/from\s*=\s*"([^"]+)"/)?.[1];
    const status = parseInt(block.match(/status\s*=\s*(\d+)/)?.[1] || "301", 10);
    if (!from || status < 300 || status >= 400) continue;
    if (from.includes("*") || from.includes(":")) continue;
    set.add(normalizePath(from));
  }
  // _redirects entries
  const redirects = readIfExists(REDIRECTS_FILE);
  for (const line of redirects.split("\n")) {
    const t = line.trim();
    if (!t || t.startsWith("#")) continue;
    const m = t.match(/^(\S+)\s+(\S+)(?:\s+(\d+))?/);
    if (!m) continue;
    const status = parseInt(m[3] || "301", 10);
    if (status < 300 || status >= 400) continue;
    if (m[1].includes("*") || m[1].includes(":")) continue;
    set.add(normalizePath(m[1]));
  }
  return set;
})();

function normalizePath(p: string): string {
  let q = p;
  if (q.startsWith("http")) {
    try { q = new URL(q).pathname; } catch { /* ignore */ }
  }
  if (!q.startsWith("/")) q = "/" + q;
  if (q.length > 1 && q.endsWith("/")) q = q.slice(0, -1);
  return q;
}

function isPageNoindex(pageDir: string): boolean {
  const candidates = ["page.tsx", "page.jsx", "page.ts", "page.js", "layout.tsx", "layout.jsx", "layout.ts", "layout.js"];
  for (const f of candidates) {
    const fp = path.join(pageDir, f);
    if (!fs.existsSync(fp)) continue;
    const txt = fs.readFileSync(fp, "utf-8");
    if (/robots:\s*\{[\s\S]*?index:\s*false/.test(txt)) return true;
    if (/robots:\s*['"`][^'"`]*noindex/i.test(txt)) return true;
  }
  return false;
}

function pageCanonical(pageDir: string): string | null {
  const candidates = ["page.tsx", "page.jsx", "page.ts", "page.js"];
  for (const f of candidates) {
    const fp = path.join(pageDir, f);
    if (!fs.existsSync(fp)) continue;
    const txt = fs.readFileSync(fp, "utf-8");
    const m = txt.match(/canonical:\s*["'`]([^"'`]+)["'`]/);
    if (m) return m[1];
  }
  return null;
}

// Directories under app/ to skip entirely (Next.js internals or routes whose
// children are enumerated through other means).
const SKIP_DIR_NAMES = new Set([
  "api",
]);

interface DiscoveredRoute {
  /** URL path segments after stripping route groups, e.g. ["services", "commercial"] */
  segments: string[];
  /** Filesystem depth from APP_DIR, used for priority heuristics. Route groups don't count. */
  urlDepth: number;
  /** Absolute filesystem dir of the page (used for noindex/canonical checks). */
  absDir: string;
}

/**
 * Recursively walk the app/ directory to find every folder containing a page.tsx/jsx.
 *
 * Skips:
 *  - directories starting with `_` (private folders) or `.`
 *  - directories starting with `[` (dynamic segments — not statically enumerable)
 *  - directories named in SKIP_DIR_NAMES (e.g. `api`)
 *
 * Route groups `(name)` are traversed but stripped from the emitted URL path,
 * matching Next.js routing behavior.
 */
function discoverRoutes(): DiscoveredRoute[] {
  const out: DiscoveredRoute[] = [];
  if (!fs.existsSync(APP_DIR)) return out;

  function walk(absDir: string, urlSegments: string[]) {
    const entries = fs.readdirSync(absDir, { withFileTypes: true });

    for (const entry of entries) {
      if (!entry.isDirectory()) continue;
      const name = entry.name;
      if (name.startsWith("_") || name.startsWith(".")) continue;
      if (name.startsWith("[")) continue;
      if (SKIP_DIR_NAMES.has(name)) continue;

      const childAbs = path.join(absDir, name);
      // Route groups: `(marketing)` traversed but not added to URL path.
      const isRouteGroup = name.startsWith("(") && name.endsWith(")");
      const childSegments = isRouteGroup ? urlSegments : [...urlSegments, name];

      // Emit a route for this directory if it has a page file (and it isn't the
      // app root, which is handled separately as the homepage).
      if (!isRouteGroup) {
        const hasPage =
          fs.existsSync(path.join(childAbs, "page.tsx")) ||
          fs.existsSync(path.join(childAbs, "page.jsx")) ||
          fs.existsSync(path.join(childAbs, "page.ts")) ||
          fs.existsSync(path.join(childAbs, "page.js"));

        if (hasPage && childSegments.length > 0) {
          out.push({
            segments: childSegments,
            urlDepth: childSegments.length,
            absDir: childAbs,
          });
        }
      }

      // Recurse into the directory.
      walk(childAbs, childSegments);
    }
  }

  walk(APP_DIR, []);
  return out;
}

function priorityFor(urlDepth: number): number {
  if (urlDepth <= 1) return 0.8;
  if (urlDepth === 2) return 0.7;
  return 0.6;
}

function changeFreqFor(
  urlDepth: number,
): MetadataRoute.Sitemap[number]["changeFrequency"] {
  if (urlDepth <= 1) return "weekly";
  return "monthly";
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const seen = new Set<string>();
  const entries: MetadataRoute.Sitemap = [];

  function push(entry: MetadataRoute.Sitemap[number]) {
    if (seen.has(entry.url)) return;
    seen.add(entry.url);
    entries.push(entry);
  }

  // Homepage
  push({
    url: `${BASE_URL}/`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 1.0,
  });

  // Discovered app routes (recursive)
  for (const route of discoverRoutes()) {
    const urlPath = route.segments.join("/");
    const fullPath = `/${urlPath}`;
    // Skip pages that redirect (unreachable, would be a non-canonical entry)
    if (REDIRECT_SOURCES.has(normalizePath(fullPath))) continue;
    // Skip noindex pages
    if (isPageNoindex(route.absDir)) continue;
    // Skip pages whose declared canonical points elsewhere
    const canonical = pageCanonical(route.absDir);
    if (canonical && canonical.startsWith("http") && !canonical.includes("${")) {
      const expected = `${BASE_URL}${fullPath}/`;
      if (canonical.replace(/\/$/, "") !== expected.replace(/\/$/, "")) continue;
    }
    push({
      url: `${BASE_URL}${fullPath}/`,
      lastModified: now,
      changeFrequency: changeFreqFor(route.urlDepth),
      priority: priorityFor(route.urlDepth),
    });
  }

  // MDX articles — rendered by app/resources/[slug]/page.tsx (dynamic segment
  // skipped above, so we enumerate them here).
  for (const article of getAllArticles()) {
    const last =
      article.frontmatter.lastmod ||
      article.frontmatter.date ||
      now.toISOString();
    push({
      url: `${BASE_URL}/resources/${article.frontmatter.slug}/`,
      lastModified: new Date(last),
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  return entries;
}
