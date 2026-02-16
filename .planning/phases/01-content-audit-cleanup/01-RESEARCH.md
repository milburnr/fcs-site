# Phase 1: Content Audit & Cleanup - Research

**Researched:** 2026-02-15
**Domain:** SEO content auditing, keyword mapping, meta tag cleanup for Next.js 15 static export site
**Confidence:** HIGH (all findings based on direct codebase inspection)

## Summary

The FCS site has 496 page.tsx files across ~454 app/ directories, with a current sitemap listing 517 URLs. Extensive prior audit work has been done -- four audit JSON files exist (`audit-meta.json`, `audit-content.json`, `audit-schema.json`, `audit-technical.json`), a `thin-content-report.json`, and a partial `seo/keyword-map.json`. A previous SEO audit session (documented in `SEO-AUDIT-REPORT.md`) already fixed 75 files including duplicate descriptions, missing FAQ schema, and use-client metadata issues. However, significant Phase 1 work remains: 174 pages still have the `keywords` meta tag, 314 pages have descriptions over 160 characters, the sitemap includes placeholder/redirect pages, and the keyword map only covers ~71 service+location pages (not the ~350+ article pages).

The site is a Next.js 15 static export deployed to Netlify. Metadata lives in TypeScript `export const metadata: Metadata = {}` objects in each page.tsx file. Redirects are configured in `netlify.toml` (147 redirect blocks already). There is no generate-sitemap script in the repo -- the sitemap.xml in `/public/` appears to be static. The `thin-content-report.json` identifies 128 placeholder pages (34 words each, just redirect stubs) and 437 "truncated" pages that need attention.

**Primary recommendation:** Execute Phase 1 as a systematic codebase transformation -- scripted where possible (keywords removal, description trimming, sitemap regeneration) and manual for content decisions (expand vs redirect vs noindex). The existing audit data provides an excellent foundation; the planner should build on it rather than re-auditing.

## Standard Stack

### Core (Already in Project)
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| Next.js | 15 | App Router, static export, `Metadata` type | Already installed, all pages use it |
| TypeScript | (project ver) | Type-safe metadata objects | Already in use for all page.tsx files |
| Node.js | 20 | Scripts for bulk operations | Set in netlify.toml build env |

### Supporting (Already Available)
| Tool | Purpose | When to Use |
|------|---------|-------------|
| `scripts/audit-word-count.js` | Word count by page type with thresholds | Re-run for current baseline |
| `seo-audit.js` | Full SEO audit (HTML output analysis) | Reference for methodology |
| `audit-metadata.py` | Python metadata extractor | Reference (Node.js preferred) |
| `scripts/triage-thin-content.js` | Categorize thin pages | Review and potentially extend |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Custom Node scripts | Screaming Frog / Sitebulb | External tools can't read TSX source files directly; scripts work on source |
| Manual keyword mapping | Ahrefs/SEMrush export | Good for validation but the map needs to live in the codebase as JSON |
| Manual description editing | AST-based transformer | AST is overkill for string replacements in metadata objects |

## Architecture Patterns

### Existing Page Structure
```
app/
├── page.tsx                           # Homepage (496 total page.tsx files)
├── commercial-construction-tampa/     # Service+location page (56 of these)
│   └── page.tsx                       # Metadata exported, ~1000+ words
├── boost-sales-with-effective-.../    # Article page (~350 of these)
│   └── page.tsx                       # Metadata exported, variable word count
├── services/                          # Hub pages
│   └── page.tsx                       # 94 words (critically thin)
├── locations/
│   ├── page.tsx                       # 113 words (critically thin)
│   └── tampa-fl/page.tsx             # Location hub
└── poseidon-fishing-charters-.../    # OFF-TOPIC page
    └── page.tsx
```

### Metadata Pattern (How Every Page Works)
```typescript
// Source: direct codebase inspection of app/commercial-construction-tampa/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: 'https://floridaconstructionspecialists.com/commercial-construction-tampa/' },
  title: "Commercial Construction in Tampa",
  description: "Commercial construction Tampa: $500K-$25M+ office, medical, industrial, multi-family. Design-build contractor, 40+ years Hillsborough County. Request project bid.",
  keywords: [                    // <-- THIS NEEDS TO BE REMOVED (AUDIT-06)
    "commercial construction tampa",
    "commercial contractor tampa",
    // ...
  ],
};
```

### Redirect Pattern (netlify.toml)
```toml
# Source: direct inspection of netlify.toml
[[redirects]]
  from = "/old-page-url/"
  to = "/target-page/"
  status = 301
```
There are currently 147 redirect blocks in netlify.toml. New redirects for removed/consolidated pages go here.

### Pattern: Page Removal Process
For pages being removed (off-topic, placeholders, consolidations):
1. Add 301 redirect in `netlify.toml` (from old URL to appropriate target)
2. Delete the `app/{slug}/page.tsx` file and its directory
3. Remove from sitemap.xml
4. Update any internal links pointing to the old URL

### Pattern: noindex for Thin Pages (If Keeping Temporarily)
```typescript
// Add to metadata object to prevent indexing
export const metadata: Metadata = {
  robots: { index: false, follow: true },
  // ... rest of metadata
};
```

### Anti-Patterns to Avoid
- **Editing built HTML in out/**: Changes must go in source page.tsx files; `out/` is regenerated on every build
- **Using meta robots tag in HTML**: Next.js Metadata API handles this -- use `robots` property in metadata object
- **Modifying sitemap.xml without a generation script**: Manual edits will be overwritten; need a script that generates from the page list minus exclusions
- **Bulk find-and-replace on metadata**: TypeScript metadata objects have varying formats; regex replacements risk breaking syntax

## Existing Audit Data Inventory

### HIGH confidence (verified by direct inspection)

| File | What It Contains | How Current | Use For |
|------|-----------------|-------------|---------|
| `audit-meta.json` | 496 pages: titles, descriptions, canonicals, duplicates | Current (2026-02-15) | AUDIT-06, AUDIT-07 baseline |
| `audit-content.json` | 496 pages: word counts, H1/H2, FAQ presence, internal links | Current | AUDIT-01, AUDIT-02 baseline |
| `audit-technical.json` | Technical SEO metrics | Current | AUDIT-09 reference |
| `thin-content-report.json` | 577 URLs categorized: 128 placeholder, 437 truncated, 11 thin, 1 adequate | Slightly stale (pre-fix) | AUDIT-02, AUDIT-03 triage |
| `seo/keyword-map.json` | 71 service+location keywords + 7 service hubs + 8 location hubs + 4 cannibalization rules | Current | AUDIT-04, AUDIT-05 starting point |
| `seo/content-audit-report.json` | 523 pages with issue categories | Slightly stale | Cross-reference |
| `redirects.json` | 80 redirect mappings (from->to) | Pre-netlify.toml consolidation | Historical reference |
| `SEO-AUDIT-REPORT.md` | Comprehensive audit results, fixes applied | 2026-02-15 | AUDIT-01 through AUDIT-09 context |
| `THIN-CONTENT-AUDIT.md` | 111 thin blog/article pages identified by name | 2026-01-27 | AUDIT-02 page list |
| `CONTENT-AUDIT-ACTION-PLAN.md` | Prioritized fix plan with word counts | 2026-02-15 | Action planning reference |

### Key Numbers from Audit Data

| Metric | Count | Source |
|--------|-------|--------|
| Total page.tsx files | 496 | audit-meta.json |
| App directories | ~454 | `ls app/ \| wc -l` |
| Sitemap URLs | 517 | `grep -c '<url>' sitemap.xml` |
| Pages with `keywords` meta tag | 174 files (180 occurrences) | grep across app/ |
| Descriptions over 160 chars | 314 | audit-meta.json |
| Descriptions under 120 chars | 83 | audit-meta.json |
| Thin pages (<300 words) | 28 | CONTENT-AUDIT-ACTION-PLAN.md |
| Moderate pages (300-500 words) | 80 | CONTENT-AUDIT-ACTION-PLAN.md |
| Placeholder pages (34 words) | 128 | thin-content-report.json |
| Existing redirects in netlify.toml | 147 | grep count |
| Keyword map entries | 71 (service+location only) | seo/keyword-map.json |
| Off-topic pages identified | 1 confirmed (fishing charters) | grep + manual review |

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Word count extraction from TSX | Custom parser | Existing `scripts/audit-word-count.js` | Already handles TSX stripping, tested |
| Sitemap generation | Manual XML editing | Write a `generate-sitemap.js` script | Must be repeatable; 500+ URLs is error-prone manually |
| Bulk metadata field removal | Line-by-line sed | Node.js script reading/writing page.tsx files | TypeScript syntax requires awareness of object structure |
| Description length checking | Manual review | Script that reads metadata export and measures | 496 pages is too many for manual |
| Keyword cannibalization detection | Manual spreadsheet | Script that extracts all titles/H1s and finds overlaps | Pattern matching across 496 pages |

**Key insight:** With 496 pages, everything that can be scripted MUST be scripted. Manual review is reserved for content quality decisions only.

## Common Pitfalls

### Pitfall 1: Sitemap-Page Mismatch
**What goes wrong:** Sitemap lists 517 URLs but only 496 page.tsx files exist. Some URLs in sitemap may be for pages that have been redirected or removed.
**Why it happens:** Sitemap was generated once and never regenerated after page removals/redirects.
**How to avoid:** Build a sitemap generator that reads from the `app/` directory structure, excluding pages marked noindex and pages with redirects.
**Warning signs:** Google Search Console showing "Submitted and indexed" for pages that 404 or redirect.

### Pitfall 2: Netlify Redirect Order Matters
**What goes wrong:** Netlify processes redirects top-to-bottom, first match wins. A broad wildcard redirect earlier can swallow specific ones later.
**Why it happens:** The catch-all 404 redirect `from = "/*"` exists at line ~652 but redirect ordering can affect asset paths.
**How to avoid:** Keep specific redirects above wildcards. The current netlify.toml already does this correctly -- maintain this pattern.
**Warning signs:** Pages 404ing that should redirect; redirect loops.

### Pitfall 3: Keywords Meta Tag in Layout vs Pages
**What goes wrong:** The root `app/layout.tsx` (line 35-42) also has a `keywords` array in its metadata. Child pages that don't override it inherit the layout keywords.
**Why it happens:** Next.js Metadata API merges layout + page metadata. Keywords in layout propagate site-wide.
**How to avoid:** Remove keywords from BOTH layout.tsx AND all individual page.tsx files.
**Warning signs:** After removing keywords from pages, they still appear in HTML output because layout.tsx wasn't updated.

### Pitfall 4: Description Trimming Breaking CTAs
**What goes wrong:** Mechanically truncating descriptions to 160 chars can cut off the CTA that should be at the end.
**Why it happens:** Descriptions were written for content first, CTA appended, making them too long.
**How to avoid:** Rewrite descriptions to be 150-160 chars WITH CTA included, not just truncate. This requires human judgment per page.
**Warning signs:** Descriptions ending mid-sentence or with no call to action.

### Pitfall 5: Removing Pages Without Redirect Coverage
**What goes wrong:** Deleting off-topic or placeholder page files without adding redirects loses any backlink equity and causes 404s.
**Why it happens:** Focus on removing the page, forgetting about external links pointing to it.
**How to avoid:** Always check for backlinks (or assume they exist) and add 301 redirects BEFORE deleting the page.tsx file.
**Warning signs:** Google Search Console 404 errors after deploy.

### Pitfall 6: Keyword Map Only Covers Service+Location Pages
**What goes wrong:** The existing `seo/keyword-map.json` has entries for only ~71 pages (service+location). The ~350 article pages have no keyword assignments.
**Why it happens:** Initial keyword mapping focused on money pages, not content pages.
**How to avoid:** The keyword map needs to be extended to ALL indexed pages. Article pages need primary keywords derived from their title/H1/URL, with de-duplication.
**Warning signs:** Multiple article pages competing for the same keyword without awareness.

## Code Examples

### Reading Metadata from page.tsx (Pattern for Audit Script)
```typescript
// Pattern used by existing audit scripts
const fs = require('fs');
const content = fs.readFileSync('app/some-page/page.tsx', 'utf-8');

// Extract metadata object - look for export const metadata pattern
const metaMatch = content.match(/export\s+const\s+metadata\s*:\s*Metadata\s*=\s*(\{[\s\S]*?\n\});/);
// Note: This regex is fragile. For production, use a more robust approach.
```

### Removing Keywords from Metadata Object
```typescript
// Before:
export const metadata: Metadata = {
  title: "Some Title",
  description: "Some description",
  keywords: ["keyword1", "keyword2"],
};

// After:
export const metadata: Metadata = {
  title: "Some Title",
  description: "Some description",
};

// Script approach: Read file, find keywords line(s), remove them
// Must handle: single-line arrays, multi-line arrays, trailing commas
```

### Adding noindex to a Page
```typescript
// Source: Next.js Metadata API
export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "Page Title",
  description: "Description",
};
```

### Adding Redirect to netlify.toml
```toml
# Append to netlify.toml BEFORE the catch-all 404 redirect
[[redirects]]
  from = "/poseidon-fishing-charters-premier-angling-adventures-in-ruskin-fl/"
  to = "/locations/ruskin-fl/"
  status = 301
```

### Sitemap Generation Script Pattern
```javascript
// Read all page.tsx paths from app/ directory
// Exclude: pages with robots.noindex, pages in redirect list, known off-topic
// Generate XML with proper lastmod, priority, changefreq
// Write to public/sitemap.xml
```

## Specific Findings Per Requirement

### AUDIT-01: Word Count Assessment
**Status:** PARTIALLY DONE. `audit-content.json` has word counts for all 496 pages. `scripts/audit-word-count.js` exists and can be re-run.
**Gap:** Need to re-run the audit to get current word counts (some pages were expanded in the content fix session). Results should be categorized into thin/moderate/solid/strong.
**Effort:** LOW -- re-run existing script, format output.

### AUDIT-02: Thin Pages (<300 words)
**Status:** IDENTIFIED but NOT FIXED. 28 pages under 300 words identified, including critical hub pages (services: 94 words, locations: 113 words, contact: 115 words).
**Gap:** Each thin page needs a decision: expand (to 800+), redirect (301 to relevant hub), or noindex. The `thin-content-report.json` identified 128 placeholder pages that should be deleted with redirects.
**Effort:** HIGH -- this is the bulk of Phase 1 work. ~28 pages need expansion, ~128 placeholder pages need redirect+delete.

### AUDIT-03: Off-Topic Pages
**Status:** 1 clearly off-topic page found: `poseidon-fishing-charters-premier-angling-adventures-in-ruskin-fl/page.tsx` (fishing charter guide, not construction). The `successful-restaurant-design-with-florida-construction-specialists` page was flagged but is arguably on-topic (commercial construction for restaurants).
**Gap:** Need to confirm the full list. The Cockroach Bay and E.G. Simmons Park pages mentioned in audit data appear to have already been removed/redirected (no matching app/ directories found).
**Effort:** LOW -- likely just 1-2 pages to redirect/remove.

### AUDIT-04: Keyword-to-URL Map
**Status:** PARTIAL. `seo/keyword-map.json` covers 71 service+location pages with primary/secondary/long-tail keywords, plus 7 service hubs and 8 location hubs. Also includes 4 cannibalization rules.
**Gap:** ~350 article/blog pages have no keyword assignments. The map needs to cover ALL indexed pages.
**Effort:** MEDIUM-HIGH -- need to derive keywords from page titles/URLs for article pages, then check for duplicates.

### AUDIT-05: Keyword Cannibalization
**Status:** 4 cannibalization rules defined in keyword-map.json. Many more likely exist among the ~350 unmapped article pages.
**Gap:** Full cannibalization analysis requires the complete keyword map (AUDIT-04 must be done first).
**Effort:** MEDIUM -- once keyword map is complete, overlap detection is scriptable.

### AUDIT-06: Remove `keywords` Meta Tag
**Status:** NOT DONE. 174 page.tsx files still have `keywords` in their metadata object. Additionally, `app/layout.tsx` line 35-42 has a site-wide keywords array.
**Gap:** Need to remove `keywords` property from all 174 files plus layout.tsx. This is a bulk scripted operation.
**Effort:** LOW -- fully scriptable. Must handle single-line and multi-line array formats.

### AUDIT-07: Meta Descriptions Over 160 Chars
**Status:** PARTIALLY DONE. 36 critical pages were fixed in the previous audit session. 314 pages total were flagged as over 160 chars.
**Gap:** ~278 remaining pages need descriptions trimmed to 150-160 chars WITH CTAs. Cannot be purely automated -- each description needs to be meaningfully rewritten.
**Effort:** VERY HIGH -- 278 descriptions need human-quality rewrites. This is the largest single effort in Phase 1. Consider batching by page type (service-location, article, hub).

### AUDIT-08: Sitemap Cleanup
**Status:** NOT DONE. Sitemap has 517 URLs but should only include indexable pages. Placeholder/redirect pages and off-topic pages need removal.
**Gap:** No sitemap generation script exists. Need to create one that reads app/ directories and excludes noindexed/redirected/off-topic pages.
**Effort:** MEDIUM -- create script, define exclusion list, regenerate.

### AUDIT-09: robots.txt Verification
**Status:** MOSTLY DONE. Current robots.txt allows all crawlers, points to sitemap URL, has no blocking rules except Crawl-delay: 1.
**Gap:** The `Crawl-delay` directive is not supported by Googlebot (only by some other crawlers). Not harmful but unnecessary. robots.txt looks correct for Phase 1 purposes.
**Effort:** MINIMAL -- verify and optionally remove Crawl-delay line.

## Effort Estimation

| Requirement | Scriptable? | Pages Affected | Estimated Effort |
|-------------|-------------|----------------|-----------------|
| AUDIT-01 | YES (re-run existing) | 496 | 15 min |
| AUDIT-02 | PARTIAL (expand = manual) | ~156 (28 thin + 128 placeholder) | 4-8 hours |
| AUDIT-03 | YES (remove/redirect) | 1-2 | 15 min |
| AUDIT-04 | PARTIAL (derive + manual review) | ~350 articles | 2-3 hours |
| AUDIT-05 | YES (after AUDIT-04) | TBD | 1-2 hours |
| AUDIT-06 | YES (script) | 174 + layout.tsx | 30 min |
| AUDIT-07 | NO (human rewrites) | ~278 | 6-10 hours |
| AUDIT-08 | YES (create script) | 517 -> ~350 | 1 hour |
| AUDIT-09 | YES (verify) | 1 file | 5 min |

**Total estimate:** 15-25 hours of implementation work.

## Dependency Order

```
AUDIT-09 (robots.txt verify) ─── no dependencies, do first
AUDIT-06 (remove keywords) ──── no dependencies, fully scriptable
AUDIT-01 (word count audit) ─── no dependencies, re-run script
     │
     ├── AUDIT-02 (thin content) ── depends on AUDIT-01 for current data
     │       │
     │       └── AUDIT-08 (sitemap) ── depends on knowing which pages stay/go
     │
     ├── AUDIT-03 (off-topic) ───── depends on AUDIT-01 for identification
     │       │
     │       └── AUDIT-08 (sitemap)
     │
     └── AUDIT-04 (keyword map) ── depends on knowing final page list
             │
             └── AUDIT-05 (cannibalization) ── depends on AUDIT-04
                     │
                     └── AUDIT-07 (descriptions) ── benefits from keyword map for CTAs
                             │
                             └── AUDIT-08 (sitemap) ── final step, after all changes
```

**Recommended execution order:**
1. AUDIT-09 (robots.txt) + AUDIT-06 (keywords removal) + AUDIT-01 (word count) -- parallel, all independent
2. AUDIT-03 (off-topic removal) -- quick win
3. AUDIT-02 (thin content decisions) -- biggest effort
4. AUDIT-04 (keyword map) -- after page list is finalized
5. AUDIT-05 (cannibalization resolution) -- after keyword map
6. AUDIT-07 (description rewrites) -- informed by keyword map
7. AUDIT-08 (sitemap regeneration) -- final step after all changes

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| `<meta name="keywords">` | Not used; Google ignores since 2009 | 2009 | Remove all keywords meta tags |
| Descriptions: any length | 150-160 chars with CTA | Ongoing best practice | SERP truncation at ~160 chars |
| One keyword per page | One PRIMARY keyword + semantic cluster | ~2020 | Keyword map should include secondaries |
| Sitemap includes everything | Only indexable pages in sitemap | Ongoing | Remove noindexed, redirected, thin pages |

**Deprecated/outdated:**
- `keywords` meta tag: Completely ignored by Google since 2009. Having it signals outdated SEO practices.
- `Crawl-delay` in robots.txt: Not supported by Googlebot. Only honored by Bing, Yandex.

## Open Questions

1. **Placeholder pages (128) -- are they already redirected?**
   - What we know: `thin-content-report.json` lists 128 "placeholder" pages with 34 words and "Redirecting..." titles. netlify.toml has 147 redirect blocks, many targeting these URLs.
   - What's unclear: Whether ALL 128 placeholders already have redirects in netlify.toml, or if some are missing.
   - Recommendation: Cross-reference the placeholder list against netlify.toml redirects to find any gaps. Then delete the page.tsx files for all placeholders that have redirects.

2. **Article pages keyword assignment -- manual or automated?**
   - What we know: ~350 article pages need primary keywords. Their URLs and titles provide strong keyword signals.
   - What's unclear: Whether automated keyword derivation from URL/title is sufficient or if manual SEO research is needed.
   - Recommendation: Start with automated derivation (URL slug -> keyword phrase), then manually review for cannibalization. Full keyword research is a Phase 2+ concern.

3. **Description rewrites -- 278 pages is a massive effort**
   - What we know: 278 pages need descriptions rewritten to 150-160 chars with CTAs.
   - What's unclear: Whether ALL 278 need rewrites, or if some are close enough (161-165 chars) to just trim.
   - Recommendation: Tier the effort: (1) fix hub/service/location pages first (highest impact), (2) trim 161-170 char descriptions mechanically, (3) rewrite 170+ char descriptions. Some article pages that will later be redirected or noindexed don't need description fixes.

4. **Deleted placeholder pages -- can the source files be removed?**
   - What we know: 128 placeholder pages exist as page.tsx files that just show "Redirecting..." text. They have redirects in netlify.toml.
   - What's unclear: Whether Netlify handles the redirect BEFORE trying to serve the page (it should, since redirects are processed first).
   - Recommendation: Since Netlify redirects fire before the page is served, the source files CAN be deleted. However, keeping them doesn't hurt SEO (users never see them). Low priority to delete, but removing reduces build time.

## Sources

### Primary (HIGH confidence)
- Direct codebase inspection of all files referenced (page.tsx files, audit JSON, netlify.toml, robots.txt, sitemap.xml, scripts/)
- `audit-meta.json` -- generated 2026-02-15, 496 pages audited
- `audit-content.json` -- generated 2026-02-15, word counts and content analysis
- `thin-content-report.json` -- page categorization with action recommendations
- `seo/keyword-map.json` -- existing keyword assignments for 71+ pages
- `SEO-AUDIT-REPORT.md` -- comprehensive audit documentation
- `CONTENT-AUDIT-ACTION-PLAN.md` -- prioritized fix plan
- `THIN-CONTENT-AUDIT.md` -- thin page identification
- `.planning/REQUIREMENTS.md` -- formal requirement definitions

### Secondary (MEDIUM confidence)
- Google's documentation on meta keywords being ignored since 2009
- Standard SEO best practice for description length (150-160 chars)
- Netlify redirect processing order (first match wins, before static file serving)

## Metadata

**Confidence breakdown:**
- Audit data accuracy: HIGH -- directly read from project files, verified against codebase
- Page counts and categorization: HIGH -- multiple sources cross-referenced
- Effort estimates: MEDIUM -- based on page counts and task complexity, but actual time depends on content quality decisions
- Dependency ordering: HIGH -- logical dependencies verified against requirement definitions

**Research date:** 2026-02-15
**Valid until:** 2026-03-15 (stable -- no external API dependencies, all findings are about this specific codebase)
