---
phase: 05-location-page-strengthening
plan: 06
subsystem: content
tags: [bradenton, location-pages, seo, faq-schema, manatee-county, anna-maria-island, lakewood-ranch]

# Dependency graph
requires:
  - phase: 05-01
    provides: Tampa page structure template (Hero > Market Intro > Parallax > Capabilities > Local Expertise > Process > FAQ > Links > CTA)
provides:
  - 9 rewritten Bradenton service+location pages with unique city-specific content
  - Bradenton identity distinct from neighboring Sarasota
affects: [05-location-page-strengthening, phase-07-sb4d]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - Three exposure zones framework (Gulf-front, river corridor, inland) for Bradenton content differentiation
    - Multi-jurisdiction permitting callouts (City of Bradenton + Manatee County + Anna Maria Island municipalities)

key-files:
  modified:
    - app/commercial-construction-bradenton/page.tsx
    - app/multi-family-construction-bradenton/page.tsx
    - app/condo-remediation-bradenton/page.tsx
    - app/insurance-restoration-bradenton/page.tsx
    - app/disaster-recovery-bradenton/page.tsx
    - app/historic-restoration-bradenton/page.tsx
    - app/luxury-custom-homes-bradenton/page.tsx
    - app/balcony-reconstruction-bradenton/page.tsx
    - app/exterior-waterproofing-bradenton/page.tsx

key-decisions:
  - "Bradenton identity built around three-zone geography: Anna Maria Island Gulf exposure, Manatee River corridor, inland Lakewood Ranch"
  - "Dual building department links on every page: City of Bradenton Building Division + Manatee County Building and Development Services"
  - "Anna Maria Island's three municipalities (Anna Maria, Holmes Beach, Bradenton Beach) referenced individually where relevant"
  - "Dropped ArticleSchema, cost tables, stats sections from old format per Tampa pattern established in 05-01"
  - "Unique parallax images per page: quality-inn, converting-retail, southwinds-condo, hurricane-insurance, disasters-sandy, historic-preservation, custom-home-3, tiles-on-balcony, waterproofing"

patterns-established:
  - "Bradenton differentiation framework: Anna Maria Island (barrier island, Gulf-front, tourism, strict building codes) vs Lakewood Ranch (master-planned, ARB approvals, suburban growth) vs Downtown/Riverwalk (revitalization, historic, riverfront)"
  - "Cortez fishing village (National Register, working waterfront) used in historic-restoration and exterior-waterproofing for unique local flavor"

# Metrics
duration: 28min
completed: 2026-02-17
---

# Phase 5 Plan 6: Bradenton Location Pages Summary

**9 Bradenton service+location pages rewritten with unique three-zone content framework (Anna Maria Island Gulf-front, Manatee River corridor, inland Lakewood Ranch) and 54 unique FAQs**

## Performance

- **Duration:** 28 min
- **Started:** 2026-02-17T01:26:55Z
- **Completed:** 2026-02-17T01:55:36Z
- **Tasks:** 2
- **Files modified:** 9

## Accomplishments
- All 9 Bradenton pages rewritten with 1,500+ unique words each, following Tampa structure template
- Each page has 6 unique FAQs specific to the service+city combination (54 total)
- Bradenton identity clearly distinct from neighboring Sarasota -- Anna Maria Island, Lakewood Ranch, Village of the Arts, Cortez fishing village, Manatee River
- Dual building department links (City of Bradenton + Manatee County) on every page
- 9 unique parallax images assigned, all verified to exist

## Task Commits

Each task was committed atomically:

1. **Task 1: Research Bradenton and rewrite first 5 pages** - `3d8338c` (feat)
2. **Task 2: Rewrite remaining 4 Bradenton pages** - `0d91a3b` (feat)

## Files Modified
- `app/commercial-construction-bradenton/page.tsx` - Lakewood Ranch growth, downtown revitalization, dual-jurisdiction permitting
- `app/multi-family-construction-bradenton/page.tsx` - Lakewood Ranch housing boom, LECOM medical school, workforce housing
- `app/condo-remediation-bradenton/page.tsx` - Three exposure zones, SB 4-D milestone inspections, Anna Maria Island municipalities
- `app/insurance-restoration-bradenton/page.tsx` - Triple threat claims, carrier negotiation, NFIP vs private flood
- `app/disaster-recovery-bradenton/page.tsx` - Gulf/river/inland exposure, storm surge modeling, Manatee River watershed
- `app/historic-restoration-bradenton/page.tsx` - Village of the Arts (1920s-1940s), Cortez fishing village (National Register), Secretary of Interior's Standards
- `app/luxury-custom-homes-bradenton/page.tsx` - Lakewood Ranch estates (Country Club East, Lake Club, Founders Club), Anna Maria Island custom builds
- `app/balcony-reconstruction-bradenton/page.tsx` - Three exposure zones for balcony deterioration, SB 4-D jurisdiction complexity, island logistics
- `app/exterior-waterproofing-bradenton/page.tsx` - Tri-directional moisture exposure, tidal groundwater dynamics, marine-grade systems

## Decisions Made
- Bradenton's three-zone geography (Gulf-front, river corridor, inland) used as structural framework for differentiation across all 9 pages
- Dual building department links on every page since properties may fall under either City of Bradenton or Manatee County jurisdiction
- Anna Maria Island treated as distinct sub-market with its own building codes, height restrictions, and access constraints
- Cortez fishing village (National Register of Historic Places) featured prominently in historic-restoration and waterproofing pages
- Lakewood Ranch ARB approval processes highlighted in commercial, multi-family, and luxury-custom-homes pages

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered
- Build initially failed with pages-manifest.json ENOENT error after clearing .next cache, resolved by running build again (transient Next.js cache issue)

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness
- Bradenton pages complete, ready for remaining location cities in Phase 5
- Bradenton content provides strong Manatee County counterpart to Sarasota (Sarasota County) and Tampa (Hillsborough County)

## Self-Check: PASSED

All 9 Bradenton page files verified present. Both task commits (3d8338c, 0d91a3b) verified in git history.

---
*Phase: 05-location-page-strengthening*
*Completed: 2026-02-17*
