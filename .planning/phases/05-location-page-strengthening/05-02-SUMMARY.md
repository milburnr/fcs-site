---
phase: 05-location-page-strengthening
plan: 02
subsystem: content
tags: [seo, location-pages, st-petersburg, service-pages, faq-schema]

# Dependency graph
requires:
  - phase: 05-01
    provides: Tampa page pattern (Hero > Market Intro > Parallax > Capabilities > Local Expertise > Process > FAQ > Links > CTA)
provides:
  - 9 rewritten St. Petersburg service+location pages with 1,500+ unique words each
  - St. Petersburg building dept link pattern (City of St. Petersburg Development Services Department)
  - Peninsula-specific content angles (bidirectional salt exposure, SB 4-D citywide applicability, Pinellas County density)
affects: [05-03 through 05-09 city pages, phase-07 SB4-D content]

# Tech tracking
tech-stack:
  added: []
  patterns: [prose-heavy page format with ContentParallax, FAQWithSchema inline data, RelatedServices/NearbyLocations components]

key-files:
  created: []
  modified:
    - app/commercial-construction-st-petersburg/page.tsx
    - app/multi-family-construction-st-petersburg/page.tsx
    - app/condo-remediation-st-petersburg/page.tsx
    - app/insurance-restoration-st-petersburg/page.tsx
    - app/disaster-recovery-st-petersburg/page.tsx
    - app/historic-restoration-st-petersburg/page.tsx
    - app/luxury-custom-homes-st-petersburg/page.tsx
    - app/balcony-reconstruction-st-petersburg/page.tsx
    - app/exterior-waterproofing-st-petersburg/page.tsx

key-decisions:
  - "Peninsula geography as unifying theme: bidirectional salt exposure, no protected building orientation, citywide SB 4-D applicability"
  - "Each page gets unique market intro angle tied to specific St. Pete characteristics (e.g., densest county for multi-family, five historic districts for restoration)"
  - "Dropped ArticleSchema, cost tables, stats sections from old format per Tampa pattern established in 05-01"
  - "Unique parallax images assigned per page, no overlap with Tampa image assignments"

patterns-established:
  - "St. Petersburg content pattern: peninsula geography > bidirectional exposure > neighborhood-specific detail > building dept link"
  - "SB 4-D citywide applicability referenced across condo-remediation, balcony-reconstruction, and exterior-waterproofing pages"

# Metrics
duration: 35min
completed: 2026-02-16
---

# Phase 5 Plan 02: St. Petersburg Location Pages Summary

**9 St. Petersburg service+location pages rewritten with peninsula-specific content: bidirectional salt exposure, SB 4-D citywide applicability, neighborhood-by-neighborhood building analysis across Old Northeast, Historic Kenwood, Snell Isle, Isla del Sol, Shore Acres, Gateway corridor, and downtown high-rises**

## Performance

- **Duration:** ~35 min
- **Started:** 2026-02-17T01:20:00Z
- **Completed:** 2026-02-17T01:55:23Z
- **Tasks:** 2
- **Files modified:** 9

## Accomplishments
- Rewrote all 9 St. Petersburg pages from template-style content to prose-heavy, city-specific pages following Tampa pattern
- Each page has unique market introduction angle: commercial (Gateway corridor + EDGE District adaptive reuse), multi-family (densest county in FL), condo-remediation (dual saltwater exposure + SB 4-D), insurance-restoration (multi-directional storm exposure), disaster-recovery (bidirectional storm surge), historic-restoration (5 designated districts + Craftsman/Mediterranean styles), luxury-custom-homes (Snell Isle/Tierra Verde waterfront), balcony-reconstruction (peninsula-wide 25-year deadline), exterior-waterproofing (three bodies of water)
- 54 unique FAQs written across 9 pages (6 per page), no shared content between pages or with Tampa
- Building dept link (City of St. Petersburg Development Services Department) included in every page's local expertise section

## Task Commits

Each task was committed atomically:

1. **Task 1: Research St. Petersburg and rewrite first 5 pages** - `04882f7` (feat)
2. **Task 2: Rewrite remaining 4 St. Petersburg pages** - `9386dc9` (feat)

## Files Created/Modified
- `app/commercial-construction-st-petersburg/page.tsx` - Gateway corridor, EDGE District adaptive reuse, One St. Petersburg, Sundial
- `app/multi-family-construction-st-petersburg/page.tsx` - Densest county in FL, downtown condo boom, infill townhomes, Crescent Heights
- `app/condo-remediation-st-petersburg/page.tsx` - Dual saltwater exposure, SB 4-D citywide, Isla del Sol/Shore Acres/Coquina Key aging towers
- `app/insurance-restoration-st-petersburg/page.tsx` - Multi-directional storm exposure, Executive General Adjuster background, carrier documentation
- `app/disaster-recovery-st-petersburg/page.tsx` - Bidirectional storm surge (bay + Gulf), flood zones, limited evacuation routes
- `app/historic-restoration-st-petersburg/page.tsx` - Old Northeast Mediterranean Revival, Historic Kenwood Craftsman, Snell Isle estates, Certificate of Appropriateness
- `app/luxury-custom-homes-st-petersburg/page.tsx` - Snell Isle waterfront, Shore Acres, Isla del Sol, Tierra Verde, flood zone custom design
- `app/balcony-reconstruction-st-petersburg/page.tsx` - SB 4-D peninsula-wide 25-year deadline, downtown high-rise logistics, Isla del Sol salt exposure
- `app/exterior-waterproofing-st-petersburg/page.tsx` - Three bodies of water, high water table, marine-grade systems, building zone analysis

## Decisions Made
- Peninsula geography used as unifying theme across all 9 pages, with each page exploring a different consequence of that geography for its specific service
- Dropped ArticleSchema, cost data tables, and stats grid sections from old page format, following the cleaner Tampa pattern from 05-01
- Each page assigned a unique ContentParallax image that does not overlap with Tampa page images
- SB 4-D citywide applicability (entire city within 3-mile coastal zone) referenced in condo-remediation, balcony-reconstruction, and exterior-waterproofing pages with unique angles for each

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered
- Build process completes page compilation (430/430 pages) but fails at post-generation manifest step with ENOENT error for 500.html. This is the known monorepo webpack issue documented in CLAUDE.md. All pages compile without TypeScript errors.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness
- St. Petersburg pages complete, ready for remaining 7 cities in Plans 03-09
- Tampa (05-01) and St. Petersburg (05-02) patterns established as reference for subsequent city pages
- Peninsula-specific content angles (bidirectional exposure, SB 4-D citywide) are unique to St. Pete and should not be reused in other city pages

## Self-Check: PASSED

- All 9 page files exist on disk
- Commit 04882f7 found (Task 1: first 5 pages)
- Commit 9386dc9 found (Task 2: remaining 4 pages)

---
*Phase: 05-location-page-strengthening*
*Completed: 2026-02-16*
