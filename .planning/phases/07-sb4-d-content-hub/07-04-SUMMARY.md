---
phase: 07-sb4-d-content-hub
plan: 04
subsystem: content
tags: [sb4d, condo, milestone-inspection, tampa, st-petersburg, location-pages]

requires:
  - phase: 06-eeat-signals
    provides: AuthorByline, CodeReference, experience language patterns
provides:
  - Tampa SB4-D compliance page at /sb4d-compliance/tampa/
  - St. Petersburg SB4-D compliance page at /sb4d-compliance/st-petersburg/
affects: [07-sb4-d-content-hub, sitemap, internal-linking]

tech-stack:
  added: []
  patterns: [SB4-D location page pattern with compliance timeline, building dept contacts, jurisdiction-specific content]

key-files:
  created:
    - app/sb4d-compliance/tampa/page.tsx
    - app/sb4d-compliance/st-petersburg/page.tsx
  modified: []

key-decisions:
  - "Tampa page references City Code 5-110.9, Accela RCT record type, and CSDLSP contact email -- local codification of state SB 4-D"
  - "St. Pete page uses peninsula geography as unifying theme -- bidirectional salt exposure, citywide 25-year coastal trigger"
  - "Dual building department contact cards on St. Pete page (city vs Pinellas County) to address jurisdictional confusion"
  - "Compliance timeline section with past-due/current/rolling deadlines (Tampa page only -- St. Pete doesn't need it since all buildings are on same 25-year clock)"

patterns-established:
  - "SB4-D location page structure: Hero > BackToHub > Market Opening with CodeReference > Parallax > Location-Specific Challenge > Structural Issues > FCS Section with Building Dept Contact > FAQ > InternalLinks > CTA"
  - "Phone-first CTA: phone call button is primary (btn-cta), contact form link is secondary"

duration: 6min
completed: 2026-02-18
---

# Phase 7 Plan 4: Tampa & St. Petersburg SB4-D Location Pages Summary

**Two genuinely city-specific SB4-D compliance pages targeting Tampa (City Code 5-110.9, Bayshore/Harbour Island) and St. Petersburg (peninsula bidirectional salt exposure, Pinellas County dual jurisdiction)**

## Performance

- **Duration:** 6 min
- **Started:** 2026-02-18T17:26:16Z
- **Completed:** 2026-02-18T17:32:30Z
- **Tasks:** 2
- **Files created:** 2

## Accomplishments
- Tampa SB4-D page with genuinely local content: City Code 5-110.9, Accela RCT filing, CSDLSP contact, compliance timeline by CO date, Bayshore/Harbour Island/Davis Islands/Channelside neighborhood specifics
- St. Petersburg SB4-D page with distinct peninsula theme: bidirectional salt exposure, citywide 25-year coastal trigger, dual jurisdiction (City of St. Pete vs Pinellas County Building Services), barrier island communities (Treasure Island, St. Pete Beach, Madeira Beach)
- Both pages follow established city page patterns with unique content -- not template copies with city names swapped

## Task Commits

Each task was committed atomically:

1. **Task 1: Create Tampa SB4-D Compliance Page** - `4149aac` (feat)
2. **Task 2: Create St. Petersburg SB4-D Compliance Page** - `3beba7e` (feat)

## Files Created/Modified
- `app/sb4d-compliance/tampa/page.tsx` - Tampa-specific SB4-D compliance page (~345 lines, ~2,000 words)
- `app/sb4d-compliance/st-petersburg/page.tsx` - St. Petersburg-specific SB4-D compliance page (~334 lines, ~2,000 words)

## Decisions Made
- Tampa page includes a compliance timeline section (past-due 2024, current 2025, rolling 2026) because Tampa has buildings across all three deadline windows. St. Pete page omits this section because all buildings are on the same 25-year clock due to peninsula geography.
- St. Pete page uses dual building department contact cards (City of St. Petersburg Development Services + Pinellas County Building Services) because jurisdictional confusion is a real issue for associations near municipal boundaries.
- Both pages use phone-first CTA pattern (phone button as btn-cta primary, contact form as secondary) per plan specification.
- Used "In-House Engineering" and "in-house engineering coordination capability" (correct E-E-A-T language), not "in-house engineer" (incorrect).

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered
None

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- Both location pages link to hub at /sb4d-compliance/ (to be created in another plan)
- Both pages cross-link to existing condo-remediation city pages and cluster pages
- Pattern established for additional SB4-D location pages if needed

---
*Phase: 07-sb4-d-content-hub*
*Completed: 2026-02-18*
