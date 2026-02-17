---
phase: 06-e-e-a-t-signals
plan: 06
subsystem: seo
tags: [e-e-a-t, code-reference, sb4-d, location-pages, experience-language]

# Dependency graph
requires:
  - phase: 06-01
    provides: CodeReference component for formal statute callouts
  - phase: 05
    provides: Phase 5 rewritten location pages with experience language
  - phase: 06-08
    provides: Site-wide "Since 1983" to "Since 1982" fix already applied
provides:
  - 9 SB4-D location pages with formal F.S. 553.899 CodeReference callouts
  - 32 location pages audited and verified for E-E-A-T experience signals
affects: [06-e-e-a-t-signals, 07-sb4d]

# Tech tracking
tech-stack:
  added: []
  patterns: [CodeReference placement after market intro section before parallax break]

key-files:
  modified:
    - app/condo-remediation-tampa/page.tsx
    - app/balcony-reconstruction-tampa/page.tsx
    - app/exterior-waterproofing-tampa/page.tsx
    - app/condo-remediation-st-petersburg/page.tsx
    - app/balcony-reconstruction-st-petersburg/page.tsx
    - app/exterior-waterproofing-st-petersburg/page.tsx
    - app/condo-remediation-clearwater/page.tsx
    - app/balcony-reconstruction-clearwater/page.tsx
    - app/exterior-waterproofing-clearwater/page.tsx

key-decisions:
  - "Lakeland SB4-D pages skipped for CodeReference -- inland city, statute less relevant per plan guidance"
  - "CodeReference placed after market intro prose, before parallax break -- consistent insertion point across all pages"
  - "Exterior waterproofing pages included for CodeReference -- waterproofing membrane integrity is a milestone inspection element"

patterns-established:
  - "CodeReference insertion point: after market intro section closing div, before parallax ContentParallax"
  - "City-specific CodeReference descriptions: each callout references the city's unique coastal/geographic context"

# Metrics
duration: 15min
completed: 2026-02-17
---

# Phase 6 Plan 06: Location Page E-E-A-T Audit Summary

**F.S. 553.899 CodeReference callouts added to 9 SB4-D location pages across Tampa, St. Pete, and Clearwater; 32 pages verified for experience language**

## Performance

- **Duration:** 15 min
- **Started:** 2026-02-17T05:22:10Z
- **Completed:** 2026-02-17T05:37:52Z
- **Tasks:** 2
- **Files modified:** 9

## Accomplishments
- Added formal CodeReference (F.S. 553.899) callouts to 9 SB4-D-related pages: condo-remediation, balcony-reconstruction, and exterior-waterproofing for Tampa, St. Petersburg, and Clearwater
- Audited all 32 location pages across 4 cities for experience language presence -- all had 3+ experience references from Phase 5 rewrites
- Verified zero "Since 1983" references remain (already fixed by plan 06-08 site-wide)
- Lakeland correctly excluded from CodeReference additions per inland status

## Task Commits

Each task was committed atomically:

1. **Task 1: Audit and enhance Tampa + St. Pete location pages** - `c975921` (feat)
2. **Task 2: Audit and enhance Clearwater + Lakeland location pages** - `df41396` (feat)

## Files Created/Modified
- `app/condo-remediation-tampa/page.tsx` - Added CodeReference import and F.S. 553.899 milestone inspection callout
- `app/balcony-reconstruction-tampa/page.tsx` - Added CodeReference import and F.S. 553.899 balcony inspection callout
- `app/exterior-waterproofing-tampa/page.tsx` - Added CodeReference import and F.S. 553.899 waterproofing inspection callout
- `app/condo-remediation-st-petersburg/page.tsx` - Added CodeReference with peninsula coastal zone context
- `app/balcony-reconstruction-st-petersburg/page.tsx` - Added CodeReference with bidirectional salt exposure context
- `app/exterior-waterproofing-st-petersburg/page.tsx` - Added CodeReference with peninsula waterproofing context
- `app/condo-remediation-clearwater/page.tsx` - Added CodeReference with barrier island context (Sand Key, Island Estates)
- `app/balcony-reconstruction-clearwater/page.tsx` - Added CodeReference with Gulf salt spray context
- `app/exterior-waterproofing-clearwater/page.tsx` - Added CodeReference with barrier island waterproofing context

## Decisions Made
- Lakeland pages excluded from CodeReference: SB4-D applies statewide but is less operationally relevant for inland Polk County condos with the 30-year (not 25-year) timeline and no salt exposure
- Exterior waterproofing pages included for CodeReference because waterproofing membrane integrity is explicitly evaluated during milestone inspections
- Each CodeReference callout includes city-specific geographic context rather than generic statute language

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] Prior plans already fixed "Since 1983" site-wide**
- **Found during:** Task 1 (audit phase)
- **Issue:** Plan 06-08 (commit 9a957ea) had already executed a site-wide "Since 1983" to "Since 1982" replacement before this plan ran
- **Fix:** No fix needed -- verified the correction was already in place across all 32 target pages
- **Impact:** Reduced plan scope to CodeReference additions only

---

**Total deviations:** 1 noted (no action required, prior plan covered it)
**Impact on plan:** Plan 06-08 executing before 06-06 meant the "Since 1983" fix was already done. No scope creep -- CodeReference additions were the remaining substantive work.

## Issues Encountered
- Build initially failed with stale `.next` cache error (ENOENT pages-manifest.json). Cleared `.next` directory and rebuilt successfully.

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- All 32 location pages now have verified experience language and formal CodeReference callouts where appropriate
- SB4-D pages across 3 coastal cities have consistent F.S. 553.899 statute references
- Ready for remaining Phase 6 plans

---
*Phase: 06-e-e-a-t-signals*
*Completed: 2026-02-17*
