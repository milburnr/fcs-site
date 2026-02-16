---
phase: 02-silo-architecture-internal-linking
plan: 03
subsystem: silo-structure
tags: [article-moves, redirects, guides-pages, silo-architecture, breadcrumbs]

# Dependency graph
requires:
  - phase: 02-02
    provides: "Machine-readable article-to-silo classification (190 articles)"
provides:
  - "All 190 articles living under silo guides directories"
  - "301 redirects for all moved articles in netlify.toml"
  - "3 guides index pages at /commercial/guides/, /residential/guides/, /insurance/guides/"
  - "Reusable move script at scripts/move-articles-to-silos.js"
affects: [02-04, 02-05, 02-06, sitemap, internal-links]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "Articles under /{silo}/guides/{slug}/ path structure"
    - "4-level breadcrumbs: Home > Silo > Guides > Title"
    - "Guides index pages import classification JSON for static listing"

key-files:
  created:
    - "scripts/move-articles-to-silos.js"
    - "app/commercial/guides/page.tsx (index)"
    - "app/residential/guides/page.tsx (index)"
    - "app/insurance/guides/page.tsx (index)"
  modified:
    - "netlify.toml (190 redirect entries: 34 updated, 156 new)"
    - "190 article page.tsx files (canonical + breadcrumbs)"

key-decisions:
  - "34 articles that had Phase 1 redirects got their redirect targets updated from hub pages to new silo paths"
  - "156 articles without prior redirects got new redirect entries"
  - "Guides index pages use static JSON import (not dynamic scan) for Next.js static export compatibility"
  - "slugToTitle utility converts URL slugs to display titles on guides index pages"

patterns-established:
  - "Silo guides path: /commercial/guides/, /residential/guides/, /insurance/guides/"
  - "Article breadcrumb pattern: Home > {Silo} > Guides > {Title}"
  - "Guides index pages use classification JSON for article listings"

# Metrics
duration: 8min
completed: 2026-02-16
---

# Phase 2 Plan 3: Article Moves and Guides Pages Summary

**Moved 190 articles from root paths into 3 silo guides directories with updated canonicals, 4-level breadcrumbs, 190 redirect entries, and 3 guides index pages**

## Performance

- **Duration:** 8 min
- **Started:** 2026-02-16
- **Completed:** 2026-02-16
- **Tasks:** 2
- **Files modified:** 194 (190 moved articles + 1 netlify.toml + 3 guides pages)

## Accomplishments
- Built move script that reads article-classification.json and batch-processes all 190 articles
- Moved 144 articles to /commercial/guides/, 15 to /residential/guides/, 31 to /insurance/guides/
- Updated canonical URLs and breadcrumbs in every moved page
- Added/updated 190 redirect entries in netlify.toml (34 existing Phase 1 redirects updated, 156 new)
- Created 3 guides index pages with article listings imported from classification JSON
- Zero old article directories remain at root
- Full site build passes (429 pages)

## Task Commits

Each task was committed atomically:

1. **Task 1: Build and run article move script** - `3fc0c5a` (feat)
2. **Task 2: Create guides index pages** - `f58d741` (feat)

## Files Created/Modified
- `scripts/move-articles-to-silos.js` - Batch move script
- `app/commercial/guides/page.tsx` - Commercial guides index (144 articles)
- `app/residential/guides/page.tsx` - Residential guides index (15 articles)
- `app/insurance/guides/page.tsx` - Insurance guides index (31 articles)
- `netlify.toml` - 190 redirect entries (34 updated, 156 new)
- 190 article page.tsx files - canonical URLs and breadcrumbs updated

## Decisions Made
- 34 Phase 1 redirects (thin pages → hub) updated to redirect to new silo paths instead
- Guides index pages use static JSON import from article-classification.json (compatible with Next.js static export)
- Color theming per silo: blue (commercial), green (residential), amber (insurance)

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] Phase 1 redirect overlap handling**
- **Found during:** Pre-script analysis
- **Issue:** 34 of 190 classified articles already had Phase 1 redirects pointing to hub pages
- **Fix:** Script detects existing redirects and updates their `to` value to the new silo path instead of adding duplicate entries
- **Files modified:** scripts/move-articles-to-silos.js, netlify.toml
- **Verification:** No duplicate redirect `from` entries; all 34 updated correctly
- **Committed in:** 3fc0c5a

---

**Total deviations:** 1 auto-fixed (1 bug)
**Impact on plan:** Necessary to prevent duplicate redirects. No scope creep.

## Issues Encountered
None beyond the deviation documented above.

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- All articles now at silo paths, ready for Plan 04 internal link updates
- Guides index pages provide additional internal linking anchor points
- Old root article URLs are all redirected
- Classification JSON at seo/article-classification.json still valid (targetPath values match actual locations)

---
*Phase: 02-silo-architecture-internal-linking*
*Completed: 2026-02-16*
