---
phase: 03-schema-trust-signals
plan: 02
subsystem: schema
tags: [schema.org, structured-data, local-business, service-schema]

requires:
  - phase: 03-01
    provides: "Phase 3 research context and schema audit findings"
provides:
  - "Clean Schema.tsx with no pricing, hasOfferCatalog support, consistent areaServed"
  - "Layout.tsx with LocalBusinessSchema removed from global head"
affects: [03-03, 03-04]

tech-stack:
  added: []
  patterns: ["containedInPlace on all areaServed cities", "hasOfferCatalog for service categorization", "deprecated prop pattern for backward compatibility"]

key-files:
  created: []
  modified:
    - components/Schema.tsx
    - app/layout.tsx

key-decisions:
  - "Kept minPrice as deprecated no-op prop in ServiceSchema interface (145 pages pass it)"
  - "License credential renamed from General Contractor to Certified Building Contractor (CBC)"

patterns-established:
  - "All areaServed city entries include containedInPlace State for geographic disambiguation"
  - "No pricing in any schema component per business decision"

duration: 3min
completed: 2026-02-16
---

# Phase 3 Plan 02: Schema Data Quality Summary

**Removed pricing from LocalBusiness/Service schemas, added hasOfferCatalog, fixed areaServed containedInPlace consistency, removed global LocalBusinessSchema from layout.tsx**

## Performance

- **Duration:** 3 min
- **Started:** 2026-02-16T22:01:57Z
- **Completed:** 2026-02-16T22:05:16Z
- **Tasks:** 2
- **Files modified:** 2

## Accomplishments
- Removed all pricing references (priceRange, offers, minPrice output) from schema components
- Added hasOfferCatalog with serviceCategories prop to ServiceSchema for proper service categorization
- Fixed areaServed: all 8 cities now include containedInPlace State in both LocalBusinessSchema and ServiceSchema
- Removed LocalBusinessSchema from layout.tsx head (was firing on all 427 pages)
- Renamed license credential to correct "Certified Building Contractor" designation
- Removed redundant openingHours string (openingHoursSpecification is the structured version)

## Task Commits

Each task was committed atomically:

1. **Task 1: Update Schema.tsx components to fix data quality issues** - `10c3302` (feat)
2. **Task 2: Remove LocalBusinessSchema from layout.tsx** - `7ed66e9` (feat)

## Files Created/Modified
- `components/Schema.tsx` - Removed pricing, added hasOfferCatalog, fixed areaServed, renamed credential
- `app/layout.tsx` - Removed LocalBusinessSchema import and JSX from global head

## Decisions Made
- **Kept minPrice as deprecated prop:** 145 pages pass minPrice to ServiceSchema. Removing the prop from the interface would break the build. Kept it as a deprecated no-op (accepted in interface, not rendered in output). This satisfies both "no pricing in schema" and "build passes."
- **License credential name:** Changed from "Florida General Contractor License" to "Florida Certified Building Contractor License" per CBC designation accuracy.

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 3 - Blocking] Kept minPrice prop as deprecated no-op instead of removing**
- **Found during:** Task 1 (Schema.tsx update)
- **Issue:** Plan specified removing minPrice from interface, but 145 page files pass minPrice prop. Removing it would cause TypeScript errors across all 145 files and break the build.
- **Fix:** Kept minPrice in ServiceSchemaProps interface with @deprecated JSDoc annotation, but do not use it in schema output. Prop is accepted but ignored.
- **Files modified:** components/Schema.tsx
- **Verification:** `npx tsc --noEmit` passes clean, no pricing appears in schema output
- **Committed in:** 10c3302 (Task 1 commit)

---

**Total deviations:** 1 auto-fixed (1 blocking)
**Impact on plan:** Necessary to prevent build breakage across 145 files. No pricing appears in schema output, satisfying the business decision.

## Issues Encountered
None beyond the deviation noted above.

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- Schema components are clean and ready for per-page placement (Plan 03)
- LocalBusinessSchema needs to be added to homepage, location pages, and service-location pages individually
- ServiceSchema serviceCategories prop is ready for use but no pages pass it yet

---
*Phase: 03-schema-trust-signals*
*Completed: 2026-02-16*
