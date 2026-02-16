---
phase: 02-silo-architecture-internal-linking
plan: 02
subsystem: seo
tags: [classification, silo-architecture, article-organization, content-taxonomy]

# Dependency graph
requires:
  - phase: 01-content-audit-cleanup
    provides: "Keyword map with page types and 428 pages inventoried"
  - phase: 02-01
    provides: "Three authoritative silo root hubs at /commercial/, /residential/, /insurance/"
provides:
  - "Machine-readable article-to-silo classification for 190 articles"
  - "Reusable classification script at scripts/classify-articles.js"
  - "seo/article-classification.json with slug, currentPath, targetSilo, targetPath for each article"
affects: [02-03, 02-04, 02-05, 02-06, redirects, sitemap]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "3-tier classification priority: service-silo > keyword-pattern > audience-fallback"
    - "Articles nest under /{silo}/guides/{slug}/ path structure"
    - "Structural, service-root, and service+location pages excluded from article classification"

key-files:
  created:
    - "scripts/classify-articles.js"
    - "seo/article-classification.json"
  modified: []

key-decisions:
  - "190 articles classified (not 277 as estimated; 14 structural/service pages excluded from 204 keyword-map articles)"
  - "Articles target /commercial/guides/, /residential/guides/, /insurance/guides/ path structure"
  - "Zero default-fallback classifications -- every article matched a pattern"
  - "commercial-residential-construction-in-florida classified as residential (matches residential keyword pattern)"
  - "Historic restoration articles (tampas-historic-*) classified as commercial via keyword-pattern after adding historic/preservation patterns"

patterns-established:
  - "Silo classification hierarchy: service slug match > keyword pattern > audience fallback > default"
  - "Article target path: /{silo}/guides/{slug}/"

# Metrics
duration: 3min
completed: 2026-02-16
---

# Phase 2 Plan 2: Article Classification Summary

**Classified 190 root-level articles into 3 silos (144 commercial, 15 residential, 31 insurance) using 3-tier keyword-based classification with zero unresolved fallbacks**

## Performance

- **Duration:** 3 min
- **Started:** 2026-02-16T07:01:53Z
- **Completed:** 2026-02-16T07:05:06Z
- **Tasks:** 1
- **Files created:** 2

## Accomplishments
- Built reusable classification script with 3-tier priority chain (service-silo, keyword-pattern, audience-fallback)
- Classified all 190 articles with zero default-fallback cases
- Correctly excluded 14 structural/service pages that keyword-map had labeled as articles
- Produced machine-readable JSON output ready for Plan 03 batch-move scripts

## Task Commits

Each task was committed atomically:

1. **Task 1: Build article classification script** - `1b81784` (feat)

## Files Created/Modified
- `scripts/classify-articles.js` - Reusable classification script with SERVICE_SILOS, keyword patterns, and audience fallback
- `seo/article-classification.json` - 190 articles with slug, currentPath, targetSilo, targetPath, classifiedBy, matchedPattern

## Decisions Made
- 190 articles total (not ~277 estimated in plan; service+location pages and structural pages correctly excluded)
- Articles will nest under `/{silo}/guides/{slug}/` path structure
- Insurance patterns checked before residential before commercial to avoid commercial patterns swallowing insurance/residential articles
- Historic restoration articles classified as commercial (per SERVICES constant silo assignment)
- Fallback-to-commercial strategy for truly unclassifiable articles (none needed)

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] Filtered structural pages from keyword-map article list**
- **Found during:** Task 1 (initial script run)
- **Issue:** Keyword-map classified pages like `engineering`, `our-process`, `privacy`, `terms`, `team-members` as page_type "article" but they are structural pages that should not be moved
- **Fix:** Applied EXCLUDED_SLUGS and SERVICE_ROOT_SLUGS filter to keyword-map articles, not just disk-discovered pages
- **Files modified:** scripts/classify-articles.js
- **Verification:** Re-ran script; 0 structural pages in output
- **Committed in:** 1b81784

**2. [Rule 1 - Bug] Added historic/preservation keyword patterns for Tampa historic articles**
- **Found during:** Task 1 (initial script run showed 25 default-fallback articles)
- **Issue:** Articles like `tampas-historic-districts-restoration-rules` did not contain `historic-restoration` as contiguous string so missed service-silo match
- **Fix:** Added 20+ historic/preservation/restoration keyword patterns to COMMERCIAL_PATTERNS
- **Files modified:** scripts/classify-articles.js
- **Verification:** Default fallbacks reduced from 25 to 0
- **Committed in:** 1b81784

---

**Total deviations:** 2 auto-fixed (2 bugs)
**Impact on plan:** Both fixes necessary for accurate classification. No scope creep.

## Issues Encountered
None beyond the deviations documented above.

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- `seo/article-classification.json` ready for Plan 03 batch-move scripts
- All 190 articles have definitive silo assignments
- Target paths follow `/{silo}/guides/{slug}/` convention for clean URL hierarchy
- Classification script rerunnable if articles need reclassification

---
*Phase: 02-silo-architecture-internal-linking*
*Completed: 2026-02-16*
