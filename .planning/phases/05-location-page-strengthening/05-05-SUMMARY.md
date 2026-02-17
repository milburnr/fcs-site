---
phase: 05-location-page-strengthening
plan: 05
subsystem: content
tags: [seo, location-pages, sarasota, faq-schema, content-parallax, internal-linking, barrier-islands]

# Dependency graph
requires:
  - phase: 05-01
    provides: "Tampa flagship pages establishing structural pattern and quality bar"
  - phase: 03-trust-infrastructure
    provides: "LocalBusinessSchema, ServiceSchema, BreadcrumbSchema components"
provides:
  - "9 Sarasota service+location pages with 1,500+ words unique city-specific content"
  - "54 unique FAQs specific to Sarasota barrier island market"
  - "Sarasota-specific content: barrier islands, Hurricane Ian, SB4-D, luxury/upscale market"
affects: [other city rewrites follow same pattern]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "Sarasota page structure follows Tampa pattern: Hero > Market Intro > ContentParallax > Capabilities > Local Expertise > Process > FAQ > Links > CTA"
    - "Barrier island focus: Siesta Key, Lido Key, Longboat Key, Bird Key woven into every page"
    - "Hurricane Ian (2022) referenced across disaster recovery, insurance, condo remediation, balcony, waterproofing pages"
    - "Building dept: City of Sarasota Building Department with sarasotafl.gov link"

key-files:
  modified:
    - app/commercial-construction-sarasota/page.tsx
    - app/multi-family-construction-sarasota/page.tsx
    - app/condo-remediation-sarasota/page.tsx
    - app/insurance-restoration-sarasota/page.tsx
    - app/disaster-recovery-sarasota/page.tsx
    - app/historic-restoration-sarasota/page.tsx
    - app/luxury-custom-homes-sarasota/page.tsx
    - app/balcony-reconstruction-sarasota/page.tsx
    - app/exterior-waterproofing-sarasota/page.tsx

key-decisions:
  - "Dropped ArticleSchema, cost tables, stats sections from old format — follows Tampa pattern"
  - "Each page gets unique ContentParallax image (no duplicates with Tampa assignments)"
  - "SB4-D compliance woven into condo-remediation, balcony-reconstruction, and insurance pages"
  - "Sarasota School of Architecture (Paul Rudolph, Twitchell, Lundy) featured in historic-restoration page"

# Metrics
duration: 30min
completed: 2026-02-16
---

# Phase 5 Plan 05: Sarasota Location Pages Summary

**9 Sarasota service+location pages rewritten with 1,500+ unique words each, 54 unique FAQs, ContentParallax breaks, and Sarasota's barrier island luxury market identity throughout**

## Performance

- **Duration:** ~30 min (across two context sessions)
- **Tasks:** 2/2
- **Files modified:** 9

## Accomplishments

- All 9 Sarasota pages rewritten from templated/overlapping content to genuinely unique city-specific content
- 54 unique FAQs created (6 per page, no shared questions or answers across pages)
- Each page has a distinct market introduction angle reflecting Sarasota's upscale barrier island character
- Sarasota neighborhoods, barrier islands, building department, Hurricane Ian, and SB4-D compliance woven naturally throughout
- ContentParallax visual break on every page with unique images (no duplicates with Tampa)

## Task Commits

Each task was committed atomically:

1. **Task 1: Rewrite first 5 Sarasota pages** - `ae7da7a` (feat)
   - commercial-construction-sarasota, multi-family-construction-sarasota, condo-remediation-sarasota, insurance-restoration-sarasota, disaster-recovery-sarasota
2. **Task 2: Rewrite remaining 4 Sarasota pages** - `c6ebe89` (feat)
   - historic-restoration-sarasota, luxury-custom-homes-sarasota, balcony-reconstruction-sarasota, exterior-waterproofing-sarasota

## Files Modified

- `app/commercial-construction-sarasota/page.tsx` - University Parkway growth corridor, bayfront mixed-use, Cultural Coast identity
- `app/multi-family-construction-sarasota/page.tsx` - Luxury condo market, seasonal/retirement housing, Palmer Ranch/Lakewood Ranch
- `app/condo-remediation-sarasota/page.tsx` - SB4-D compliance urgency, 1970s-80s barrier island condo aging, salt corrosion
- `app/insurance-restoration-sarasota/page.tsx` - Hurricane Ian large-loss claims, barrier island storm surge, damage separation
- `app/disaster-recovery-sarasota/page.tsx` - Gulf Coast hurricane vulnerability, storm surge on keys, FEMA coordination
- `app/historic-restoration-sarasota/page.tsx` - Mediterranean Revival, Sarasota School of Architecture, Paul Rudolph
- `app/luxury-custom-homes-sarasota/page.tsx` - Bird Key estates, Siesta Key Gulf-front, Harbor Acres, premium finishes
- `app/balcony-reconstruction-sarasota/page.tsx` - Barrier island condo balconies, SB4-D milestone inspections, marine-grade railings
- `app/exterior-waterproofing-sarasota/page.tsx` - Building envelope systems, foundation waterproofing, sandy soil challenges

## Parallax Images Assigned

1. commercial-construction-sarasota: commercial-construction-design
2. multi-family-construction-sarasota: tampa-condo-building-construction
3. condo-remediation-sarasota: southwinds-condo-rear
4. insurance-restoration-sarasota: hurricane-restoration
5. disaster-recovery-sarasota: oahu-wind-storm-damage-repair-services-1024x683-1
6. historic-restoration-sarasota: historic-preservation
7. luxury-custom-homes-sarasota: tampa-luxury-home-builder
8. balcony-reconstruction-sarasota: southwinds-condo-front
9. exterior-waterproofing-sarasota: fcs-commercial-exterior-waterproofing

## Decisions Made

- **Followed Tampa pattern exactly:** Hero > Market Intro > Parallax > Capabilities (6 cards) > Local Expertise > Process (5 steps) > FAQ > Links > CTA
- **Dropped legacy components:** Removed ArticleSchema, cost tables, stats sections, GoogleMap, sidebar layouts from old format
- **Barrier island focus:** Every page references Siesta Key, Lido Key, Longboat Key, Bird Key where relevant
- **Hurricane Ian integration:** Referenced in 5 of 9 pages where storm damage directly relates to the service

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

- **Build verification:** `npx next build` compiles successfully ("Compiled successfully in 44s") but fails at "Collecting page data" step with pre-existing pages-manifest.json error caused by @next/swc version mismatch (15.5.7 vs 15.5.11). This is an infrastructure issue unrelated to page content. Compilation success confirms all pages are syntactically valid with correct imports and types.
- **Context window exhausted:** First context session completed Task 1 and 3 of 4 Task 2 pages. Continuation agent completed exterior-waterproofing-sarasota and all remaining steps.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- Sarasota pages complete with barrier island luxury market identity
- Same structural pattern as Tampa for consistency across all cities
- All 9 ContentParallax images assigned; other cities will use different images

## Self-Check: PASSED

All 9 page files verified present. Both task commits (ae7da7a, c6ebe89) verified in git log.

---
*Phase: 05-location-page-strengthening*
*Completed: 2026-02-16*
