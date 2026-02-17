---
phase: 04-hub-page-expansion
plan: 02
subsystem: ui
tags: [nextjs, seo, internal-linking, locations, service-area]

# Dependency graph
requires:
  - phase: 01-foundation
    provides: "LOCATIONS data in constants.ts, service-location page structure"
  - phase: 03-schema-trust
    provides: "BreadcrumbSchema, ServiceSchema, FAQWithSchema components"
provides:
  - "Locations hub page with 81+ organized links to city hubs and service-location pages"
  - "City-by-city directory structure with contextual prose per city"
  - "Counties overview section covering 5 Tampa Bay counties"
affects: [05-location-pages, seo, internal-linking]

# Tech tracking
tech-stack:
  added: []
  patterns: ["City-by-city directory with compact service link grids", "Dynamic link generation via CITY_DATA map"]

key-files:
  created: []
  modified: ["app/locations/page.tsx"]

key-decisions:
  - "Plant City gets hub-only link (no service-location pages exist in app/ directory)"
  - "72 service-location links generated dynamically via CITY_DATA + SERVICE_LOCATION_PAGES arrays"
  - "City order: Tampa first (largest market), then by regional significance"
  - "Counties section uses 5-column grid with city sub-labels"

patterns-established:
  - "City directory pattern: dark header bar with city name + population + hub link, body with context prose + service link grid"
  - "Service link grid: 3-column compact link badges with ArrowRight icon"

# Metrics
duration: 6min
completed: 2026-02-16
---

# Phase 4 Plan 2: Locations Hub Rewrite Summary

**2,000+ word service area directory organized by 9 cities with 81+ internal links to city hubs and service-location pages**

## Performance

- **Duration:** 6 min
- **Started:** 2026-02-16T23:59:24Z
- **Completed:** 2026-02-17T00:05:00Z
- **Tasks:** 1
- **Files modified:** 1

## Accomplishments
- Rewrote 113-word thin page into 2,000+ word comprehensive service area directory
- Organized 81+ links into navigable city-by-city structure (9 cities, 72 service-location links)
- Fixed "Sevice" meta description typo, replaced with proper 160-char description
- Replaced all "Get Free Estimate" CTAs with "Discuss Your Project" / "Schedule a Consultation"
- Added 6 local-intent FAQs with FAQWithSchema targeting service area queries
- Added BreadcrumbSchema + ServiceSchema with all 9 service categories
- Added counties overview section covering Hillsborough, Pinellas, Polk, Manatee, Sarasota
- Added parallax visual break with HighLevelForm (commercial variant)

## Task Commits

Each task was committed atomically:

1. **Task 1: Rewrite locations hub page to 2,000+ word service area directory** - `e842474` (feat)

**Plan metadata:** pending

## Files Created/Modified
- `app/locations/page.tsx` - Complete rewrite from 113-word thin page to 2,000+ word service area directory with 9 city sections, 72 service-location links, 9 city hub links, FAQ section, counties overview

## Decisions Made
- Plant City included as hub-only link (no service-location pages exist in the codebase) -- verified by checking app/ directory
- CITY_DATA defined inline rather than importing from constants (allows custom context prose per city that doesn't belong in shared constants)
- Used compact link badge/pill style for service links within each city (not full image cards -- too much visual weight for 72+ items)
- City order follows plan specification: Tampa > St. Petersburg > Clearwater > Lakeland > Sarasota > Bradenton > Brandon > Ruskin > Plant City

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 3 - Blocking] Cleaned stale .next cache to fix build**
- **Found during:** Task 1 (build verification)
- **Issue:** Build failed with ENOENT for pages-manifest.json (stale .next cache from prior build)
- **Fix:** Deleted .next directory and rebuilt
- **Files modified:** None (build artifact)
- **Verification:** Build succeeded after cache clear
- **Committed in:** N/A (not a source change)

**2. [Rule 1 - Bug] Removed unused imports**
- **Found during:** Task 1 (post-write cleanup)
- **Issue:** Building2, Shield from lucide-react and LOCATIONS from constants were imported but unused
- **Fix:** Removed unused imports
- **Files modified:** app/locations/page.tsx
- **Verification:** Build succeeds without warnings
- **Committed in:** e842474 (part of task commit)

---

**Total deviations:** 2 auto-fixed (1 blocking, 1 bug)
**Impact on plan:** Minor cleanup issues. No scope creep.

## Issues Encountered
None beyond the stale cache issue documented above.

## User Setup Required
None - no external service configuration required.

## Verification Results
- Zero instances of "Free Estimate", "Free Quote", "No Job Too Small"
- 157 href attributes in built HTML output
- 72 service-location page links confirmed in built output
- All 9 city hub pages linked (tampa-fl, st-petersburg-fl, clearwater-fl, lakeland-fl, sarasota-fl, bradenton-fl, brandon-fl, ruskin-fl, plant-city-fl)
- Zero instances of "Sevice" typo
- FAQWithSchema component present with 6 FAQs
- BreadcrumbSchema and ServiceSchema present
- `npm run build` succeeds

## Next Phase Readiness
- Locations hub is complete and ready for Phase 5 (Location Pages) which will expand individual city hub pages
- All 72 service-location links resolve to existing pages
- Plant City hub page exists but may need expansion in Phase 5

---
*Phase: 04-hub-page-expansion*
*Completed: 2026-02-16*
