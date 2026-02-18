---
phase: 08-insurance-restoration-content
plan: 01
subsystem: content
tags: [seo, content-consistency, insurance, engineering-language]

# Dependency graph
requires:
  - phase: 07-sb4d-content-hub
    provides: "Engineer language decision (dedicated engineering partner, not in-house)"
provides:
  - "Insurance silo pages free of prohibited in-house/staff engineer language"
  - "Consistent engineering partner language across all insurance content"
affects: [08-insurance-restoration-content]

# Tech tracking
tech-stack:
  added: []
  patterns: []

key-files:
  created: []
  modified:
    - app/insurance/InsurancePageClient.tsx
    - app/insurance/building-consultant/page.tsx
    - app/insurance/licensed-general-contractor/page.tsx
    - app/insurance-restoration-tampa/page.tsx

key-decisions:
  - "Differentiator card renamed from 'In-House Engineering' to 'Direct Engineering Access'"
  - "Qualifications card renamed from 'In-House Team' to 'Integrated Team'"
  - "FAQ question reframed from 'Do you have an in-house engineer?' to 'Do you have direct access to structural engineers?'"

patterns-established:
  - "Zero-tolerance in-house language policy now enforced across insurance silo (app/insurance/ + app/insurance-restoration-tampa/)"

# Metrics
duration: 2min
completed: 2026-02-18
---

# Phase 08 Plan 01: Engineer Language Cleanup Summary

**Eliminated all "in-house engineer" / "staff engineer" language from 4 insurance silo pages, replacing with Phase 7 approved "dedicated engineering partner" and "direct access" language**

## Performance

- **Duration:** 2 min
- **Started:** 2026-02-18T22:13:58Z
- **Completed:** 2026-02-18T22:16:13Z
- **Tasks:** 2
- **Files modified:** 4

## Accomplishments
- Zero instances of "in-house", "in house", or "staff engineer" remain in any insurance silo page
- All replacements use Phase 7 approved language: "dedicated engineering partner", "direct access to licensed structural engineers", "engineering team", "integrated team"
- Build passes with no TypeScript errors

## Task Commits

Each task was committed atomically:

1. **Task 1: Fix InsurancePageClient.tsx and building-consultant/page.tsx** - `a353087` (fix)
2. **Task 2: Fix licensed-general-contractor and insurance-restoration-tampa pages** - `c526a0e` (fix)

## Files Created/Modified
- `app/insurance/InsurancePageClient.tsx` - 4 instances fixed (differentiator title/desc, process step, intro prose, FAQ)
- `app/insurance/building-consultant/page.tsx` - 3 instances fixed (FAQ, body prose, bullet)
- `app/insurance/licensed-general-contractor/page.tsx` - 3 instances fixed (FAQ question/answer, card title/desc)
- `app/insurance-restoration-tampa/page.tsx` - 1 instance fixed ("in-house team" to "integrated team")

## Decisions Made
- Differentiator card title "In-House Engineering" became "Direct Engineering Access" (matches Phase 7 pattern)
- Qualifications card "In-House Team" became "Integrated Team" (general team reference, not engineer-specific)
- FAQ reframed from "Do you have an in-house engineer?" to "Do you have direct access to structural engineers?" (keeps the same informational intent)

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered
None

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- Insurance silo language is now consistent with SB4-D content hub pages
- Ready for remaining Phase 08 plans (new insurance restoration content)

---
*Phase: 08-insurance-restoration-content*
*Completed: 2026-02-18*
