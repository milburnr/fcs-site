---
phase: 06-e-e-a-t-signals
plan: 08
subsystem: seo
tags: [e-e-a-t, experience-language, founding-date, trust-signals]

# Dependency graph
requires:
  - phase: 06-01
    provides: AuthorByline and ProjectGallery foundation components
provides:
  - "Since 1982" experience language on all location hub pages
  - Experience language on gallery, our-process, resources pages
  - Zero "1983" references site-wide (founding date consistency)
affects: [phase-07-sb4d, phase-08-insurance]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "Since 1982" in hero subtitle for location hubs
    - Trust badge standardized to "Since 1982" instead of "20+ Years Experience"

key-files:
  created: []
  modified:
    - app/locations/tampa-fl/page.tsx
    - app/locations/st-petersburg-fl/page.tsx
    - app/locations/clearwater-fl/page.tsx
    - app/locations/lakeland-fl/page.tsx
    - app/locations/sarasota-fl/page.tsx
    - app/locations/bradenton-fl/page.tsx
    - app/locations/brandon-fl/page.tsx
    - app/locations/ruskin-fl/page.tsx
    - app/locations/plant-city-fl/page.tsx
    - app/gallery/page.tsx
    - app/our-process/page.tsx
    - app/resources/page.tsx
    - 40 service-location and guide pages (1983->1982 fix)

key-decisions:
  - "Trust badges changed from '20+ Years Experience' to 'Since 1982' for stronger E-E-A-T signal"
  - "Awkward '20+ years experience and 40+ years experience' phrasing replaced with clean 'four decades since 1982'"
  - "Homepage already had 'Four decades of expertise' -- left as-is (sufficient experience language)"
  - "About, Contact, Other Services, Team, Team Members already had adequate experience language -- no changes needed"

patterns-established:
  - "Location hub hero subtitle pattern: 'Serving {City} since 1982, we bring four decades of...'"
  - "All founding date references use 1982 (never 1983)"

# Metrics
duration: 11min
completed: 2026-02-17
---

# Phase 6 Plan 08: Experience Language & Founding Date Audit Summary

**"Since 1982" experience language added to 9 location hubs + 3 standalone pages, 40 remaining "1983" references corrected site-wide**

## Performance

- **Duration:** 11 min
- **Started:** 2026-02-17T05:22:14Z
- **Completed:** 2026-02-17T05:33:14Z
- **Tasks:** 2
- **Files modified:** 52

## Accomplishments
- All 9 city location hub pages now have "since 1982" in hero subtitle and "Since 1982" trust badge
- Gallery, Our Process, and Resources pages enhanced with experience language
- Zero "Since 1983" references remain across the entire site (40 files corrected)
- Founding date consistency verified: constants.ts foundingDate = "1982"

## Task Commits

Each task was committed atomically:

1. **Task 1: Add experience language to location hubs and standalone pages** - `14ab7a7` (feat)
2. **Task 2: Final site-wide "1983" audit and founding date consistency check** - `9a957ea` (fix)

## Files Created/Modified
- `app/locations/*/page.tsx` (9 files) - Added "since 1982" to hero subtitles, changed trust badges
- `app/gallery/page.tsx` - Added experience intro with founding date
- `app/our-process/page.tsx` - Added "Refined over four decades since 1982"
- `app/resources/page.tsx` - Added "four decades of Tampa Bay construction experience since 1982"
- 40 service-location and guide pages - Corrected "1983" to "1982" in trust badges and metadata descriptions

## Decisions Made
- Trust badges changed from "20+ Years Experience" to "Since 1982" -- more specific E-E-A-T signal
- Cleaned up redundant "20+ years experience and 40+ years experience" phrasing across multiple hubs
- Skipped editing pages that already had adequate experience language (About, Contact, Homepage, Other Services, Team, Team Members)
- All 1983 references in the codebase were FCS founding date references (no unrelated historical content) -- safe to batch replace

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] Pre-existing build failure (pages-manifest.json)**
- **Found during:** Task 1 verification
- **Issue:** `npm run build` fails during "Collecting page data" with ENOENT for pages-manifest.json -- pre-existing monorepo/workspace issue not caused by any plan changes
- **Fix:** Confirmed same failure on pristine code. Compilation succeeds (validates TypeScript correctness). Build failure is infrastructure, not content.
- **Files modified:** None
- **Verification:** `git stash` + clean build showed identical failure
- **Impact:** No impact on content correctness. Build compilation step validates all JSX/TSX syntax.

---

**Total deviations:** 1 documented (pre-existing infrastructure issue)
**Impact on plan:** No scope creep. Build compilation validates all changes.

## Issues Encountered
- Pre-existing `pages-manifest.json` ENOENT error during Next.js build's "Collecting page data" phase. Not caused by plan changes. Compilation phase succeeds, confirming all TypeScript/JSX is valid.

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- Phase 6 (E-E-A-T Signals) is now complete with all 8 plans executed
- Every page category audited for experience language
- Founding date consistency achieved site-wide
- Ready for Phase 7 (SB4-D) or Phase 8 (Insurance)

---
*Phase: 06-e-e-a-t-signals*
*Completed: 2026-02-17*
