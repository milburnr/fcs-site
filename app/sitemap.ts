import fs from "node:fs";
import path from "node:path";
import type { MetadataRoute } from "next";
import { getAllArticles } from "@/lib/articles";

export const dynamic = "force-static";

const BASE_URL = "https://floridaconstructionspecialists.com";
const APP_DIR = path.join(process.cwd(), "app");

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
    push({
      url: `${BASE_URL}/${urlPath}/`,
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
