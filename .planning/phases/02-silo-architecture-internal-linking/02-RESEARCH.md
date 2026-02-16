# Phase 2: Silo Architecture & Internal Linking - Research

**Researched:** 2026-02-15
**Domain:** Content silo reorganization, Next.js App Router page moves, internal linking, crawl depth optimization
**Confidence:** HIGH (all findings based on direct codebase inspection)

## Summary

The FCS site currently has ~277 blog/article pages at the root level of `app/` (e.g., `/eco-friendly-commercial-construction-in-tampa/`) that need reorganizing into three content silos: `/commercial/guides/`, `/residential/guides/`, and `/insurance/guides/`. The keyword map identifies 204 of these as "article" type pages. The site also has significant hub page duplication -- commercial has 3 competing URLs (`/commercial/`, `/commercial-construction/`, `/services/commercial/`), residential has 4 (`/residential/`, `/custom-homes/`, `/luxury-custom-homes/`, `/services/residential/`), and insurance has 5 (`/insurance/`, `/insurance-restoration/`, `/disaster-recovery/`, `/disaster-recovery-insurance-restoration/`, `/services/disaster-recovery/`). These must be consolidated to single authoritative URLs per business line.

The existing InternalLinks component and related linking components (RelatedServices, NearbyLocations, RelatedArticles, ServiceAreaLinks, HubRelatedArticles) are already used on 388+ of 431 pages. Only 10 pages lack any linking component. The "67 pages missing InternalLinks" number from requirements was a pre-Phase-1 count; the actual gap is much smaller. The `verify-silos.js` script already exists and checks for cross-silo link bleed, but needs updating for the new silo paths.

Moving ~277 pages to new silo paths is the largest structural change this project has seen. Each move requires: creating the new `app/[silo]/guides/[slug]/page.tsx` path, updating the canonical URL, updating breadcrumbs, updating the internal links array, adding a 301 redirect from old URL to new URL in `netlify.toml`, and updating all internal links pointing to the old URL across the entire site.

**Primary recommendation:** Execute this phase in careful stages: (1) classify all articles into silos, (2) resolve hub duplication first, (3) move articles in batches by silo, (4) update all internal links, (5) audit orphans and crawl depth, (6) build the validation script. Use scripts for all bulk operations. Manual content editing is only needed for the internal links arrays within individual pages.

## Standard Stack

### Core (Already in Project)
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| Next.js | 15 | App Router, static export, page routing | Already installed, defines file-based routing |
| TypeScript | (project ver) | Type-safe metadata and components | All pages use it |
| Node.js | 20 | Automation scripts | Set in netlify.toml |

### Supporting (Already Available)
| Tool | Purpose | When to Use |
|------|---------|-------------|
| `scripts/verify-silos.js` | Check cross-silo link bleed | After moves, before deploy |
| `scripts/add-internal-links.js` | Add InternalLinks to pages | For pages missing links |
| `scripts/generate-sitemap.js` | Regenerate sitemap after moves | After all URL changes |
| `components/InternalLinks.tsx` | 6 link component variants | Already on most pages |
| `components/Breadcrumb.tsx` | Breadcrumb nav + schema | Needs update for silo paths |
| `components/HubRelatedArticles.tsx` | Hub-to-article links | Used on commercial hub |
| `seo/keyword-map.json` | 428 page keyword assignments | Source for silo classification |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| File moves in `app/` | Next.js rewrites in next.config.ts | Rewrites don't work with static export (`output: "export"`) |
| Netlify redirects (301) | Next.js middleware redirects | Middleware doesn't work with static export |
| Moving page files | Symbolic links | Symlinks don't work with Next.js file-based routing |

## Architecture Patterns

### Current Site Structure
```
app/
├── page.tsx                              # Homepage
├── commercial/                           # Hub page (canonical → /commercial-construction/)
│   ├── page.tsx                          # 30KB, comprehensive hub
│   ├── condo-remediation/page.tsx        # Sub-service
│   ├── historic-restoration/page.tsx     # Sub-service
│   └── industrial-construction/page.tsx  # Sub-service
├── commercial-construction/page.tsx      # DUPLICATE hub (canonical → /services/commercial/)
├── services/commercial/page.tsx          # DUPLICATE hub (own canonical)
├── residential/page.tsx                  # Hub page
├── custom-homes/page.tsx                # DUPLICATE (canonical → /custom-homes/)
├── luxury-custom-homes/page.tsx         # Service page
├── services/residential/page.tsx         # DUPLICATE hub
├── insurance/page.tsx                    # Hub page
│   ├── appraisal-arbitration/page.tsx
│   ├── building-consultant/page.tsx
│   └── ... (8 sub-services)
├── insurance-restoration/page.tsx        # DUPLICATE
├── disaster-recovery/page.tsx            # DUPLICATE
├── disaster-recovery-insurance-restoration/page.tsx # DUPLICATE
├── services/disaster-recovery/page.tsx   # DUPLICATE
├── eco-friendly-commercial-construction-in-tampa/  # Article (at root)
│   └── page.tsx
├── ... (~276 more article pages at root)
├── commercial-construction-tampa/page.tsx  # Service+location page
├── ... (~63 more service+location pages)
└── locations/
    ├── page.tsx
    └── [city-slug]/page.tsx
```

### Target Silo Structure
```
app/
├── page.tsx                              # Homepage
├── commercial/                           # AUTHORITATIVE commercial hub
│   ├── page.tsx                          # Single hub page
│   ├── guides/                           # Commercial articles silo
│   │   ├── eco-friendly-commercial-construction-in-tampa/page.tsx
│   │   ├── tampa-commercial-construction-costs/page.tsx
│   │   └── ... (~150+ articles)
│   ├── condo-remediation/page.tsx
│   ├── historic-restoration/page.tsx
│   └── industrial-construction/page.tsx
├── residential/                          # AUTHORITATIVE residential hub
│   ├── page.tsx                          # Single hub page
│   ├── guides/                           # Residential articles silo
│   │   ├── waterfront-custom-homes-in-tampa/page.tsx
│   │   ├── energy-efficient-custom-homes-in-tampa/page.tsx
│   │   └── ... (~30+ articles)
│   └── ... (sub-services if any)
├── insurance/                            # AUTHORITATIVE insurance hub
│   ├── page.tsx                          # Single hub page
│   ├── guides/                           # Insurance articles silo
│   │   ├── maximize-insurance-payouts-for-restoration-in-tampa/page.tsx
│   │   ├── understanding-tampa-insurance-restoration-claims/page.tsx
│   │   └── ... (~50+ articles)
│   ├── appraisal-arbitration/page.tsx
│   ├── building-consultant/page.tsx
│   └── ... (sub-services)
├── commercial-construction-tampa/page.tsx  # Service+location (stays)
├── locations/                              # Location pages (stays)
└── [structural pages stay at root]
```

### Pattern 1: Moving a Page to a Silo Path (Next.js App Router)
**What:** In Next.js App Router with static export, URLs are determined by file paths. Moving `/app/some-article/page.tsx` to `/app/commercial/guides/some-article/page.tsx` changes the URL from `/some-article/` to `/commercial/guides/some-article/`.
**When to use:** For every article being moved into a silo.
**Steps per page:**
```
1. Create directory: app/commercial/guides/some-article/
2. Move page.tsx to new directory
3. Update metadata.alternates.canonical to new URL
4. Update breadcrumbItems to reflect silo hierarchy
5. Update internalLinks array to link within-silo
6. Add redirect in netlify.toml: /some-article/ → /commercial/guides/some-article/ 301
7. Find all pages linking to /some-article/ and update their links
```

### Pattern 2: Hub Page Consolidation
**What:** Multiple URLs serving the same business line are consolidated to one authoritative URL. Losers get 301 redirects.
**Example for commercial:**
```
WINNER: /commercial/ (30KB comprehensive hub, already in nav)
REDIRECT: /commercial-construction/ → /commercial/ (301)
REDIRECT: /services/commercial/ → /commercial/ (301)
```
**Steps:**
```
1. Identify the best page (most content, most links, in nav)
2. Merge any unique content from losers into winner
3. Add 301 redirects for loser URLs
4. Delete loser page.tsx files
5. Update all internal links pointing to losers
6. Update canonical URL on winner (self-referencing)
```

### Pattern 3: Breadcrumb Update for Silo Pages
**What:** Articles in silos get 3-level breadcrumbs reflecting the silo hierarchy.
**Before:**
```typescript
const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Eco-Friendly Commercial Construction", href: "/eco-friendly-commercial-construction-in-tampa/" },
];
```
**After:**
```typescript
const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Commercial", href: "/commercial/" },
  { name: "Guides", href: "/commercial/guides/" },
  { name: "Eco-Friendly Commercial Construction", href: "/commercial/guides/eco-friendly-commercial-construction-in-tampa/" },
];
```

### Pattern 4: Silo-Disciplined Internal Links
**What:** Articles link primarily within their silo -- to parent hub, sibling articles, and service/money pages in the same business line. Cross-silo links go through hub pages only.
**Before:**
```typescript
const internalLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/services/commercial/design-build/", label: "Design-Build Construction" },
  { href: "/trends-and-future-of-commercial-construction-in-tampa/", label: "Construction Trends" },
  { href: "/choosing-materials-for-commercial-construction-in-tampa/", label: "Material Selection" },
  { href: "/contact/", label: "Schedule a Consultation" },
];
```
**After (within commercial silo):**
```typescript
const internalLinks = [
  { href: "/commercial/", label: "Commercial Construction Services" },
  { href: "/commercial-construction-tampa/", label: "Commercial Construction Tampa" },
  { href: "/commercial/guides/trends-and-future-of-commercial-construction-in-tampa/", label: "Construction Trends" },
  { href: "/commercial/guides/choosing-materials-for-commercial-construction-in-tampa/", label: "Material Selection" },
  { href: "/contact/", label: "Schedule a Consultation" },
];
```

### Anti-Patterns to Avoid
- **Moving service+location pages into silos:** Only ARTICLE pages move. Service pages like `/commercial-construction-tampa/` stay at root.
- **Breaking existing 301 chains:** Some articles already have redirects pointing TO them from Phase 1. Moving them creates a redirect chain (old → old-article → silo-article). These chains must be updated to point directly to the new silo URL.
- **Moving pages without updating ALL internal references:** A moved page that's still linked to at 50+ places via the old URL creates 50+ soft 404s (which Netlify handles via redirect, but Google sees the chains and it wastes crawl budget).
- **Creating guides/ index pages without content:** The `/commercial/guides/` URL will exist as a directory. Either create a meaningful index page or redirect to the hub.
- **Cross-silo linking in article body content:** The InternalLinks component handles silo discipline, but in-body `<Link>` elements in article content may also cross silos and need review.

## Existing State Inventory

### Hub Page Duplication (TECH-03)

**Commercial** -- 3 competing pages:
| URL | Canonical Points To | Title | Content Size |
|-----|---------------------|-------|-------------|
| `/commercial/` | `/commercial-construction/` | "Commercial Construction Tampa \| $500K-$25M+ \| FCS" | 30KB (comprehensive) |
| `/commercial-construction/` | `/services/commercial/` | "Large-Scale Commercial Construction \| $500K - $25M+ Projects" | Large (service page) |
| `/services/commercial/` | self | "Commercial Construction in Tampa Bay" | Small |

**Recommendation:** `/commercial/` is the winner (in NAV_ITEMS, most comprehensive). Both others redirect to it. The `/commercial/` page has a self-referencing canonical issue (points to `/commercial-construction/` instead of itself) that must be fixed.

**Residential** -- 4 competing pages:
| URL | Canonical Points To | Title |
|-----|---------------------|-------|
| `/residential/` | self | "Lifetime Custom Homes Tampa \| Luxury Home Builder \| FCS" |
| `/custom-homes/` | self | "Custom Home Builder Tampa Bay \| Waterfront \| FCS" |
| `/luxury-custom-homes/` | self | "Luxury Custom Home Builders Tampa \| Waterfront" |
| `/services/residential/` | self | "Luxury Custom Home Construction in Tampa Bay" |

**Recommendation:** `/residential/` is the winner (in NAV_ITEMS, has breadcrumbs, is the silo root). `/custom-homes/` and `/services/residential/` redirect to it. `/luxury-custom-homes/` stays as a distinct service page (it's a service+location page, not a hub duplicate).

**Insurance/Disaster** -- 5 competing pages:
| URL | Canonical Points To | Title |
|-----|---------------------|-------|
| `/insurance/` | self | "Insurance Restoration Services Tampa \| FCS" |
| `/insurance-restoration/` | self | "Insurance Restoration Tampa \| Large Loss Claims" |
| `/disaster-recovery/` | self | "Storm & Disaster Recovery Tampa \| 43 Years \| FCS" |
| `/disaster-recovery-insurance-restoration/` | self | "Disaster Recovery & Insurance Restoration Tampa" |
| `/services/disaster-recovery/` | self | "Disaster Recovery & Insurance Restoration in Tampa Bay" |

**Recommendation:** `/insurance/` is the winner (in NAV_ITEMS, has sub-services organized under it). `/disaster-recovery/` stays as a distinct service page (different topic: disaster recovery vs insurance process). `/insurance-restoration/`, `/disaster-recovery-insurance-restoration/`, and `/services/disaster-recovery/` redirect to `/insurance/`. Note: the `SERVICES` constant has `disaster-recovery` as silo `"commercial"` -- this may need revisiting since insurance is a separate nav item.

### Article Classification

The keyword map has 204 "article" type pages but no silo assignments. Classification will need to be derived from article URLs, titles, and content topic. Based on URL pattern analysis:

| Silo | Estimated Count | Pattern Examples |
|------|----------------|-----------------|
| Commercial | ~130-150 | `*commercial*`, `*contractor*`, `*construction*`, `*building*`, `*office*`, `*retail*`, `*industrial*`, `*project-management*`, `*value-engineering*`, `*leed*`, `*sustainable*` |
| Residential | ~30-40 | `*custom-home*`, `*home-design*`, `*kitchen*`, `*bathroom*`, `*waterfront*`, `*luxury*`, `*family-home*`, `*pet-friendly*`, `*energy-efficient*` |
| Insurance | ~40-60 | `*insurance*`, `*disaster*`, `*hurricane*`, `*storm*`, `*flood*`, `*fire-damage*`, `*water-damage*`, `*mold*`, `*claims*`, `*restoration*` |

Some articles are ambiguous (e.g., `balcony-*` articles could be commercial or residential; `historic-restoration-*` could be commercial or residential). The `SERVICES` constant assigns silos to each service which can guide classification.

### Internal Links Component Usage

| Component | Pages Using It |
|-----------|---------------|
| `InternalLinks` (generic) | ~380 pages |
| `RelatedServices` | Service+location pages |
| `NearbyLocations` | Service+location pages |
| `ServiceAreaLinks` | Service hub pages |
| `HubRelatedArticles` | Hub pages |
| Missing any component | 10 pages |

The 10 pages missing linking components: `custom-homes`, `insurance-restoration-lakeland`, `insurance-restoration-ruskin`, `insurance` (hub), `premium-homepage`, `privacy`, `residential` (hub), `team-members`, `terms`, and homepage.

### Redirect Infrastructure

The `netlify.toml` currently has ~170+ redirect blocks. The Phase 2 article moves will add ~277 more redirects (one per moved article). Netlify processes redirects in order, first match wins. The catch-all 404 redirect (`from = "/*"`) is at the bottom and must stay there.

There is already a redirect from `/commercial/` to `/commercial-construction/` (line 644) that conflicts with the recommendation to make `/commercial/` the winner. This redirect must be REMOVED (not just added to -- it actively redirects the desired winner away).

### Existing Generate-Sitemap Script

`scripts/generate-sitemap.js` already exists and:
- Reads app/ directory structure
- Excludes pages with noindex metadata
- Excludes pages with redirects in netlify.toml
- Generates public/sitemap.xml

This script will need to be re-run after all moves are complete. No modifications needed to the script itself -- it discovers pages from the filesystem automatically.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Article silo classification | Manual spreadsheet | Script reading URL patterns + keyword map | 277 articles, too many for manual |
| Finding all internal links to moved pages | Manual grep per page | Script that scans all page.tsx files for href patterns | Must find every reference to every moved URL |
| Redirect generation | Manual netlify.toml editing | Script that generates redirect blocks from moves list | 277 redirects, error-prone manually |
| Breadcrumb updates | Manual per-page edits | Script that reads page path and generates breadcrumb array | 277+ pages need consistent breadcrumbs |
| Orphan page detection | Manual link counting | Script that builds a link graph from all pages | 431 pages, need counts for every one |
| Crawl depth calculation | Manual clicking | Script that traces link paths from homepage | BFS/DFS from homepage through all internal links |
| Pre-deploy validation | Manual checking | New script combining multiple checks | TECH-10 requirement, must be repeatable |

**Key insight:** With 277 page moves, each requiring 5-7 individual changes, this is ~1500+ individual edits. Everything that can be scripted MUST be scripted. The planner should decompose this into: (1) classification script, (2) move execution script, (3) link update script, (4) validation script.

## Common Pitfalls

### Pitfall 1: Static Export Prevents Programmatic Redirects
**What goes wrong:** Attempting to use Next.js `redirects` in `next.config.ts` or middleware for 301 redirects.
**Why it happens:** The site uses `output: "export"` which generates static HTML only. No server-side features work.
**How to avoid:** ALL redirects must go in `netlify.toml`. This is the only redirect mechanism available.
**Warning signs:** Redirects working in dev but not in production.

### Pitfall 2: Redirect Chain From Phase 1 → Phase 2
**What goes wrong:** Phase 1 created redirects like `/some-thin-article/ → /commercial-construction/`. If `/commercial-construction/` now redirects to `/commercial/`, there's a chain: `/some-thin-article/ → /commercial-construction/ → /commercial/`.
**Why it happens:** Phase 2 hub consolidation changes the targets of Phase 1 redirects.
**How to avoid:** After hub consolidation, scan all existing redirects in netlify.toml and update any that point to a now-redirected URL. Make all chains point directly to the final destination.
**Warning signs:** 302/301 chains visible in browser network tab or Screaming Frog.

### Pitfall 3: Netlify Redirect Ordering With Wildcard
**What goes wrong:** The `/commercial/` redirect (line 644: `from = "/commercial/" to = "/commercial-construction/"`) fires BEFORE the page is served, so even if `/commercial/page.tsx` exists, visitors get redirected.
**Why it happens:** Netlify redirects fire before static file serving by default (unless `status = 200` is used as a rewrite).
**How to avoid:** REMOVE the existing `/commercial/ → /commercial-construction/` redirect when making `/commercial/` the authoritative hub. Similarly remove any conflicting redirects.
**Warning signs:** Hub pages returning 301 instead of 200.

### Pitfall 4: Internal Links Pointing to Old URLs After Move
**What goes wrong:** An article at `/eco-friendly-commercial-construction-in-tampa/` is moved to `/commercial/guides/eco-friendly-commercial-construction-in-tampa/`, but 15 other pages still link to the old URL. Netlify handles the redirect, but Google sees redirect chains, wastes crawl budget, and may not pass full link equity.
**Why it happens:** Focus on moving pages without updating referencing pages.
**How to avoid:** For every moved page, grep the entire codebase for the old URL and update all references. Build a script that does this as part of the move process.
**Warning signs:** `verify-silos.js` detecting links to non-existent pages.

### Pitfall 5: Guides Index Page Creates Thin Content
**What goes wrong:** `/commercial/guides/` exists as a URL (because the directory exists in Next.js App Router) but has no page.tsx, resulting in a 404.
**Why it happens:** Next.js creates routes from directories only if they contain page.tsx. But users/crawlers may navigate to `/commercial/guides/`.
**How to avoid:** Either (a) create a `/commercial/guides/page.tsx` that lists all articles in that silo (preferred -- good for SEO), or (b) add a redirect from `/commercial/guides/` to `/commercial/` in netlify.toml.
**Warning signs:** 404 errors for `/commercial/guides/`, `/residential/guides/`, `/insurance/guides/`.

### Pitfall 6: Canonical URL Mismatches After Move
**What goes wrong:** A page is moved to a new URL but the canonical still points to the old URL (or to a different duplicate).
**Why it happens:** The canonical is hardcoded in the metadata object and must be manually updated.
**How to avoid:** The move script must update `alternates.canonical` to the new URL for every moved page. The validation script must check that every page's canonical matches its actual URL.
**Warning signs:** Google Search Console showing canonical different from submitted URL.

### Pitfall 7: Existing Cross-Canonical References
**What goes wrong:** Currently, hub pages point their canonicals to OTHER pages (e.g., `/commercial/` has canonical pointing to `/commercial-construction/`). This means Google thinks `/commercial-construction/` is authoritative, not `/commercial/`.
**Why it happens:** Historical SEO decisions before silo strategy was defined.
**How to avoid:** Every page must have a self-referencing canonical after Phase 2. No page should canonical to a different URL (except redirected pages, which shouldn't exist as pages anymore).
**Warning signs:** Google indexing the wrong URL for a hub page.

## Code Examples

### Moving a Page File (Script Pattern)
```javascript
const fs = require('fs');
const path = require('path');

function movePage(oldSlug, silo) {
  const oldDir = path.join('app', oldSlug);
  const newDir = path.join('app', silo, 'guides', oldSlug);

  // Create destination directory
  fs.mkdirSync(newDir, { recursive: true });

  // Read the page content
  const oldPath = path.join(oldDir, 'page.tsx');
  let content = fs.readFileSync(oldPath, 'utf-8');

  // Update canonical URL
  const oldUrl = `https://floridaconstructionspecialists.com/${oldSlug}/`;
  const newUrl = `https://floridaconstructionspecialists.com/${silo}/guides/${oldSlug}/`;
  content = content.replace(oldUrl, newUrl);

  // Write to new location
  fs.writeFileSync(path.join(newDir, 'page.tsx'), content);

  // Remove old directory
  fs.rmSync(oldDir, { recursive: true });

  return { from: `/${oldSlug}/`, to: `/${silo}/guides/${oldSlug}/` };
}
```

### Generating Redirect Block
```javascript
function generateRedirectBlock(from, to) {
  return `\n[[redirects]]\n  from = "${from}"\n  to = "${to}"\n  status = 301\n`;
}
```

### Updating Internal Link References Across Codebase
```javascript
function updateReferences(oldPath, newPath) {
  const appDir = path.join(__dirname, '..', 'app');
  const files = getAllPageFiles(appDir); // recursive file finder

  let updated = 0;
  for (const file of files) {
    let content = fs.readFileSync(file, 'utf-8');
    if (content.includes(oldPath)) {
      content = content.replaceAll(oldPath, newPath);
      fs.writeFileSync(file, content);
      updated++;
    }
  }
  return updated;
}
```

### Building Link Graph for Orphan Detection
```javascript
function buildLinkGraph(appDir) {
  const graph = {}; // url -> Set of urls linking TO it
  const files = getAllPageFiles(appDir);

  for (const file of files) {
    const content = fs.readFileSync(file, 'utf-8');
    const pageUrl = filePathToUrl(file);

    // Extract all href values
    const hrefPattern = /href=["'](\/[^"']+)["']/g;
    let match;
    while ((match = hrefPattern.exec(content)) !== null) {
      const targetUrl = match[1];
      if (!graph[targetUrl]) graph[targetUrl] = new Set();
      graph[targetUrl].add(pageUrl);
    }
  }

  return graph; // For each URL, how many pages link to it
}
```

### Pre-Deploy Validation Script (TECH-10)
```javascript
// Checks to implement:
// 1. Every page.tsx has a title in metadata
// 2. Every page.tsx has a canonical URL matching its file path
// 3. No internal links point to URLs that don't exist as pages or redirects
// 4. Sitemap URLs match actual pages in out/ directory
// 5. No redirect chains (A → B → C should be A → C)
// 6. Every page has 3+ internal links pointing to it (orphan check)
```

## Specific Findings Per Requirement

### TECH-01: Article Silo Reorganization
**Current state:** 277 article pages at root level. 204 classified as "article" in keyword map. No silo assignments exist.
**Gap:** Need classification script, move execution, and breadcrumb updates for all articles.
**Complexity:** HIGH -- this is the largest single operation.
**Dependencies:** Must resolve hub duplication (TECH-03) first, so articles move to the correct authoritative hub paths.

### TECH-02: 301 Redirects for Moved Articles
**Current state:** 170+ redirects already in netlify.toml. Need ~277 more.
**Gap:** Generate redirect blocks for all moved articles. Also update any Phase 1 redirects that point to URLs that are themselves being redirected.
**Complexity:** MEDIUM -- fully scriptable.

### TECH-03: Duplicate Hub Resolution
**Current state:** Commercial has 3 competing URLs, residential has 4, insurance has 5. Canonical URLs are inconsistent (some point to other duplicates instead of self).
**Gap:** Select winners, merge content if needed, add redirects, delete losers, fix canonicals.
**Complexity:** MEDIUM -- requires content decisions but limited number of pages.
**Critical finding:** The existing redirect `/commercial/ → /commercial-construction/` (netlify.toml line 644) must be REMOVED, not just overridden. It actively redirects the intended winner.

### TECH-04: Breadcrumb Updates
**Current state:** Article breadcrumbs are flat: `Home > Article Title`. Service+location pages have proper 2-level breadcrumbs.
**Gap:** All moved articles need 4-level breadcrumbs: `Home > [Silo] > Guides > Article Title`.
**Complexity:** MEDIUM -- scriptable pattern, ~277 updates.

### TECH-05: Silo Linking Discipline
**Current state:** `RelatedServices` component already filters by silo (line 21 of InternalLinks.tsx: `filter((s) => !currentSilo || s.silo === currentSilo)`). The generic `InternalLinks` component uses hardcoded link arrays per page that may violate silo discipline.
**Gap:** After moves, need to audit and update hardcoded link arrays in each article to follow silo discipline. The `verify-silos.js` script can detect violations.
**Complexity:** HIGH -- 277+ pages need link array updates.

### TECH-06: Blog Posts Link to 2+ Service/Money Pages
**Current state:** Most articles already have `internalLinks` arrays with service page references. Some link to now-redirected URLs (e.g., `/services/commercial/` which will redirect).
**Gap:** After moves, verify every article links to at least 2 money pages (service pages, not other articles). Update any broken service page links.
**Complexity:** MEDIUM -- scriptable verification, manual fixes for gaps.

### TECH-07: Pages Missing InternalLinks Component
**Current state:** Only 10 pages lack any linking component (not 67 as originally estimated). These include: homepage, insurance hub, residential hub, privacy, terms, team-members, custom-homes, premium-homepage, and 2 insurance-restoration location pages.
**Gap:** Add appropriate linking components to these 10 pages. For privacy/terms, simple footer-style links suffice. For hubs and the homepage, comprehensive linking is needed.
**Complexity:** LOW -- only 10 pages, mostly adding component imports and link arrays.

### TECH-08: No Orphan Pages
**Current state:** Unknown -- requires building a link graph.
**Gap:** Need a script that counts inbound internal links per page and identifies any with <3 links.
**Complexity:** MEDIUM -- script development + fixing orphans.

### TECH-09: Top Pages Within 2 Clicks
**Current state:** Homepage links to `/commercial/` and `/residential/` (1 click). These hubs link to service pages and articles. The hub pages likely make most important pages 2 clicks away.
**Gap:** Need to verify the crawl depth of the top 20-30 pages. The homepage, hub pages, and service+location pages should all be within 2 clicks.
**Complexity:** LOW-MEDIUM -- scriptable crawl depth analysis.

### TECH-10: Pre-Deploy Validation Script
**Current state:** `verify-silos.js` exists for cross-silo link checking. `generate-sitemap.js` handles sitemap generation. No unified validation script.
**Gap:** Need a new comprehensive validation script that checks: meta titles present, canonical URLs correct, no broken internal links, sitemap-to-output consistency.
**Complexity:** MEDIUM -- compose from existing patterns.

## Dependency Order

```
TECH-03 (hub consolidation) ─── FIRST, everything depends on knowing authoritative hub URLs
     │
     ├── TECH-01 (article silo classification + moves) ── depends on hub URLs
     │       │
     │       ├── TECH-02 (301 redirects) ── generated as part of moves
     │       │
     │       ├── TECH-04 (breadcrumbs) ── update during moves
     │       │
     │       └── TECH-05 (silo link discipline) ── update during moves
     │
     ├── TECH-06 (money page links) ── after moves settle
     │
     ├── TECH-07 (missing InternalLinks) ── after moves settle
     │
     ├── TECH-08 (orphan detection) ── after all links updated
     │       │
     │       └── TECH-09 (crawl depth) ── parallel with orphan detection
     │
     └── TECH-10 (validation script) ── last, validates everything
```

**Recommended plan execution order:**
1. **Plan 02-01:** Hub page consolidation (TECH-03) -- resolve all duplicate hubs, fix canonicals, add redirects
2. **Plan 02-02:** Article classification and silo mapping -- classify all articles into silos, generate move plan
3. **Plan 02-03:** Execute article moves in batches (TECH-01, TECH-02, TECH-04) -- move files, update canonicals, breadcrumbs, add redirects
4. **Plan 02-04:** Internal link updates (TECH-05, TECH-06, TECH-07) -- update all references, fix silo discipline, add missing components
5. **Plan 02-05:** Orphan and crawl depth audit (TECH-08, TECH-09) -- build link graph, fix orphans, verify crawl depth
6. **Plan 02-06:** Validation script and sitemap (TECH-10) -- build pre-deploy script, regenerate sitemap, final verification

## Effort Estimation

| Requirement | Scriptable? | Pages Affected | Estimated Effort |
|-------------|-------------|----------------|-----------------|
| TECH-01 | MOSTLY (classify script + move script) | ~277 articles | 3-4 hours |
| TECH-02 | YES (generated during moves) | ~277 redirects | Included in TECH-01 |
| TECH-03 | PARTIAL (decisions manual, execution scripted) | ~12 hub pages | 1-2 hours |
| TECH-04 | YES (breadcrumb pattern is predictable) | ~277 articles | Included in TECH-01 |
| TECH-05 | PARTIAL (verify scripted, fix manual) | ~277 articles | 2-3 hours |
| TECH-06 | PARTIAL (verify scripted, fix manual) | ~277 articles | 1-2 hours |
| TECH-07 | YES (add component + links) | 10 pages | 30 min |
| TECH-08 | YES (link graph script) | All 431 pages | 1-2 hours |
| TECH-09 | YES (crawl depth script) | Top 30 pages | 1 hour |
| TECH-10 | YES (new script) | Validation only | 1-2 hours |

**Total estimate:** 12-18 hours of implementation work.

## Critical Data Points

### Conflicting Redirect That Must Be Removed
```toml
# Line 644 of netlify.toml -- THIS MUST BE REMOVED
[[redirects]]
  from = "/commercial/"
  to = "/commercial-construction/"
  status = 301
```
This redirect actively sends visitors away from the intended authoritative commercial hub URL.

### NAV_ITEMS Already Use Correct Hub URLs
```typescript
// From lib/constants.ts
{ label: "Commercial", href: "/commercial/" },
{ label: "Residential", href: "/residential/" },
{ label: "Insurance", href: "/insurance/" },
```
The navigation already points to the recommended winners. Only the redirect and canonical mismatches need fixing.

### SERVICES Silo Assignments
```typescript
// From lib/constants.ts - already has silo assignments
"Commercial Construction"  → silo: "commercial"
"Multi-Family Construction" → silo: "commercial"
"Disaster Recovery"        → silo: "commercial"  // Note: may need insurance silo
"Historic Restoration"     → silo: "commercial"
"Lifetime Custom Homes"    → silo: "residential"
"Balcony Reconstruction"   → silo: "commercial"
"Exterior Waterproofing"   → silo: "commercial"
```

### Guides Index Pages
Three index pages will need to be created (or redirected):
- `/commercial/guides/` -- list of all commercial articles
- `/residential/guides/` -- list of all residential articles
- `/insurance/guides/` -- list of all insurance articles

These serve as secondary navigation and prevent 404s at the directory level.

## Open Questions

1. **Should disaster recovery articles go in the commercial silo or the insurance silo?**
   - What we know: `SERVICES` has disaster-recovery with `silo: "commercial"`. But the insurance nav includes related services, and the insurance hub is distinct from commercial.
   - What's unclear: Whether "disaster recovery" content is closer to "commercial construction" or "insurance restoration" in user intent.
   - Recommendation: Articles about the insurance CLAIMS process go in `/insurance/guides/`. Articles about actual CONSTRUCTION recovery work go in `/commercial/guides/`. Classify by primary topic, not by service association.

2. **Should the guides/ index pages be article listing pages or redirects?**
   - What we know: Creating listing pages is better for SEO (more content, internal links). But they require ongoing maintenance as articles are added/removed.
   - What's unclear: Whether the effort of maintaining listing pages is worth it.
   - Recommendation: Create simple listing pages that dynamically pull from the filesystem. A script can generate the content.

3. **How to handle articles that are ambiguous between silos?**
   - What we know: Some articles like "balcony restoration" could be commercial or residential. Some "historic restoration" articles could be either.
   - What's unclear: Whether misclassification matters significantly for SEO.
   - Recommendation: Follow the `SERVICES` silo assignments in `lib/constants.ts` as the primary guide. Balcony = commercial (per constants), historic = commercial (per constants). When truly ambiguous, classify based on the article's target audience (property managers = commercial, homeowners = residential).

4. **Should the existing `insurance-restoration-*` location pages be moved under `/insurance/`?**
   - What we know: There are 8 `insurance-restoration-[city]` pages at the root level. The insurance hub is at `/insurance/`.
   - What's unclear: Whether these are "articles" or "service+location pages." They look like service+location pages and should stay at root.
   - Recommendation: Keep these at root level. They are service pages, not articles. Only move blog/article content into silos.

## Sources

### Primary (HIGH confidence)
- Direct codebase inspection of all files referenced
- `lib/constants.ts` -- SERVICES with silo assignments, NAV_ITEMS with hub URLs
- `components/InternalLinks.tsx` -- 6 component variants, silo filtering logic
- `components/Breadcrumb.tsx` -- current breadcrumb pattern with schema
- `components/HubRelatedArticles.tsx` -- hub-to-article linking pattern
- `netlify.toml` -- all 170+ redirects inspected, conflicting redirect identified
- `seo/keyword-map.json` -- 428 pages, 204 articles, page type classifications
- `scripts/verify-silos.js` -- existing silo verification (cross-silo link detection)
- `scripts/add-internal-links.js` -- existing internal link addition script
- `scripts/generate-sitemap.js` -- existing sitemap generator
- `next.config.ts` -- static export confirmed (`output: "export"`)
- `.planning/phases/01-content-audit-cleanup/01-VERIFICATION.md` -- Phase 1 results

### Secondary (MEDIUM confidence)
- SEO silo architecture best practices (standard industry knowledge)
- Netlify redirect processing order (first match wins, before static serving)
- Google's handling of 301 redirect chains vs direct redirects

## Metadata

**Confidence breakdown:**
- Hub duplication analysis: HIGH -- directly inspected all hub pages, canonicals, and titles
- Article count and classification: HIGH -- verified against filesystem and keyword map
- Internal linking component usage: HIGH -- grep confirmed across all 431 pages
- Redirect infrastructure: HIGH -- full netlify.toml inspection
- Silo move mechanics: HIGH -- Next.js App Router file-based routing is deterministic
- Effort estimates: MEDIUM -- based on page counts and script complexity, actual time depends on edge cases

**Research date:** 2026-02-15
**Valid until:** 2026-03-15 (stable -- all findings about this specific codebase)
