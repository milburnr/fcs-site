---
phase: 05-location-page-strengthening
plan: "07"
subsystem: ui
tags: [nextjs, seo, location-pages, brandon, unincorporated-cdp, hillsborough-county]

# Dependency graph
requires:
  - phase: 05-01
    provides: Tampa page pattern (prose-heavy format with ContentParallax, RelatedServices, NearbyLocations)
provides:
  - 9 rewritten Brandon service+location pages with unique city-specific content
  - Brandon-specific local expertise (unincorporated CDP, Hillsborough County permitting)
affects: [05-08, 05-09]

# Tech tracking
tech-stack:
  added: []
  patterns: [unincorporated-cdp-permitting-pattern, suburban-community-content-differentiation]

key-files:
  modified:
    - app/commercial-construction-brandon/page.tsx
    - app/multi-family-construction-brandon/page.tsx
    - app/condo-remediation-brandon/page.tsx
    - app/insurance-restoration-brandon/page.tsx
    - app/disaster-recovery-brandon/page.tsx
    - app/historic-restoration-brandon/page.tsx
    - app/luxury-custom-homes-brandon/page.tsx
    - app/balcony-reconstruction-brandon/page.tsx
    - app/exterior-waterproofing-brandon/page.tsx

key-decisions:
  - "Brandon is unincorporated CDP - all pages reference Hillsborough County Building Services for permitting, never 'City of Brandon'"
  - "Dropped ArticleSchema (not appropriate for service+location pages per 05-01 decision)"
  - "Each page gets unique hero and parallax images distinct from Tampa pages"

patterns-established:
  - "Unincorporated CDP pattern: reference county government for permits, avoid 'city' language"
  - "Suburban community differentiation: FishHawk Ranch, Valrico, Lithia for hyper-local relevance"

# Metrics
duration: 29min
completed: 2026-02-17
---

# Phase 5 Plan 7: Brandon Location Pages Summary

**Rewrote all 9 Brandon service+location pages with unique city-specific content emphasizing unincorporated CDP status, Hillsborough County permitting, SR 60 corridor, and suburban communities like FishHawk Ranch**

## Performance

- **Duration:** 29 min
- **Started:** 2026-02-17T01:26:59Z
- **Completed:** 2026-02-17T01:55:31Z
- **Tasks:** 2
- **Files modified:** 9

## Accomplishments
- Rewrote 9 Brandon pages from generic templates to 1,500+ word prose-heavy pages with unique local content
- Every page correctly references Hillsborough County (not "City of Brandon") for permitting since Brandon is unincorporated
- 54 unique FAQs across all 9 pages covering Brandon-specific topics (SR 60 corridor, FishHawk Ranch, SB 4-D for suburban condos, flat terrain drainage, lightning capital risk)
- Each page uses unique hero and parallax images distinct from other cities

## Task Commits

Each task was committed atomically:

1. **Task 1: Research Brandon + rewrite first 5 pages** - `bd87f6e` (feat)
   - commercial-construction-brandon, multi-family-construction-brandon, condo-remediation-brandon, insurance-restoration-brandon, disaster-recovery-brandon
2. **Task 2: Rewrite remaining 4 pages** - `343f834` (feat)
   - historic-restoration-brandon, luxury-custom-homes-brandon, balcony-reconstruction-brandon, exterior-waterproofing-brandon

## Files Modified
- `app/commercial-construction-brandon/page.tsx` - SR 60 corridor, I-75 logistics, Westfield Brandon retail focus
- `app/multi-family-construction-brandon/page.tsx` - Suburban housing boom, FishHawk Ranch, renter demand from Tampa commuters
- `app/condo-remediation-brandon/page.tsx` - SB 4-D for suburban low-rise condos, garden-style buildings, HOA management
- `app/insurance-restoration-brandon/page.tsx` - Inland storm damage patterns, lightning/wind claims, Xactimate documentation
- `app/disaster-recovery-brandon/page.tsx` - Lightning capital risk, flat terrain flooding, emergency response, FEMA coordination
- `app/historic-restoration-brandon/page.tsx` - Pre-1980s commercial restoration, Valrico historic homes, adaptive reuse
- `app/luxury-custom-homes-brandon/page.tsx` - FishHawk Ranch estates, Lithia acreage, Valrico, ARC process
- `app/balcony-reconstruction-brandon/page.tsx` - SB 4-D balcony compliance, suburban condo balconies, wood-frame vs concrete
- `app/exterior-waterproofing-brandon/page.tsx` - Heavy rainfall, flat terrain drainage, vapor drive, building envelope systems

## Decisions Made
- Brandon is unincorporated CDP - all pages reference Hillsborough County Building Services, never "City of Brandon"
- Dropped ArticleSchema (not appropriate for service+location pages per 05-01 decision)
- Each page assigned unique hero and parallax images not used by Tampa or other city pages
- Historic restoration page acknowledges Brandon lacks formal historic districts, focuses on pre-1980s commercial and residential

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered
- Build failed initially with `pages-manifest.json` not found (pre-existing external disk filesystem issue). Resolved by clearing `.next` directory and rebuilding. All 430 pages generated successfully on retry.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness
- Brandon pages complete, ready for plans 05-08 (Clearwater) and 05-09 (Ruskin)
- Unincorporated CDP pattern established and documented for potential reuse

---
*Phase: 05-location-page-strengthening*
*Completed: 2026-02-17*
