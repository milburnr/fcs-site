---
phase: 06-e-e-a-t-signals
plan: 05
subsystem: content
tags: [experience-language, e-e-a-t, guide-articles, batch-script]

requires:
  - phase: 06-01
    provides: Foundation E-E-A-T components (AuthorByline, ProjectGallery)
provides:
  - 259 guide articles with verifiable experience language
  - Reusable experience language audit/insertion script
affects: [06-06, 06-07, 06-08]

tech-stack:
  added: []
  patterns: [silo-specific experience template rotation, paragraph-append insertion]

key-files:
  created:
    - scripts/add-experience-language.js
  modified:
    - app/commercial/guides/*/page.tsx (190 articles)
    - app/insurance/guides/*/page.tsx (45 articles)
    - app/residential/guides/*/page.tsx (24 articles)

key-decisions:
  - "Script appends experience sentence to first content paragraph (after hero), not inline replacement"
  - "Template rotation prevents consecutive duplicate experience sentences within each silo"
  - "23 'since 1983' references corrected to 'since 1982' across guide articles"

patterns-established:
  - "Experience language insertion: append to first <p> after second <section>"
  - "Silo-specific template pools: 3 templates per silo, rotated on insertion"

duration: 5min
completed: 2026-02-17
---

# Phase 6 Plan 5: Guide Article Experience Language Summary

**Batch insertion of silo-specific experience sentences into 259 guide articles using script-assisted audit and append approach**

## Performance

- **Duration:** 5 min
- **Started:** 2026-02-17T05:22:07Z
- **Completed:** 2026-02-17T05:27:30Z
- **Tasks:** 1
- **Files modified:** 261 (259 guide articles + 1 script + 1 bylines script)

## Accomplishments

- 259 guide articles audited for experience language; 122 received new sentences, 137 already had adequate coverage
- 100% coverage: every guide article now contains verifiable FCS credentials (since 1982, CBC license, in-house engineering, 300+ projects, etc.)
- 23 "since 1983" references standardized to "since 1982" across all guide articles
- Reusable audit script for future articles

## Task Commits

Each task was committed atomically:

1. **Task 1: Create and run experience language insertion script for guide articles** - `670f999` (feat)
2. **Fix: Tighten audit pattern to catch 2 missed articles** - `3ed2169` (fix)

## Files Created/Modified

- `scripts/add-experience-language.js` - Scans guide articles, audits for experience language, inserts silo-specific templates, fixes year variants
- `app/commercial/guides/*/page.tsx` - 190 commercial guide articles (93 newly added, 97 already had)
- `app/insurance/guides/*/page.tsx` - 45 insurance guide articles (19 newly added, 26 already had)
- `app/residential/guides/*/page.tsx` - 24 residential guide articles (10 newly added, 14 already had)

## Decisions Made

- Script appends experience sentence to the end of the first content paragraph (after the hero section), preserving existing content
- Three templates per silo rotate to avoid consecutive repetition
- "since 1983" corrected to "since 1982" per BUSINESS_INFO.foundingDate standardization
- No articles were skipped -- all 259 had suitable paragraph targets

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] False positive in "40 years" experience pattern**
- **Found during:** Task 1 (self-check verification)
- **Issue:** Pattern `/40 years/i` matched building lifespan references ("30-40 years") in 2 articles, causing them to be falsely classified as already having experience language
- **Fix:** Tightened pattern to `/(?<!\d[-–])\b40 years of/i` to require word boundary and "of" suffix; re-ran script to add experience sentences to the 2 missed articles
- **Files modified:** scripts/add-experience-language.js, 2 guide articles
- **Committed in:** `3ed2169`

---

**Total deviations:** 1 auto-fixed (Rule 1 - bug)
**Impact on plan:** Minor pattern fix ensured 100% coverage. No scope creep.

## Issues Encountered

- Initial build failed due to stale `.next` cache (pages-manifest.json missing) -- resolved by clearing `.next` and rebuilding

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- All 259 guide articles now have experience language, completing the largest batch in the E-E-A-T signals phase
- Ready for remaining plans (06-06 through 06-08)

## Self-Check: PASSED

- FOUND: scripts/add-experience-language.js
- FOUND: .planning/phases/06-e-e-a-t-signals/06-05-SUMMARY.md
- FOUND: commit 670f999
- FOUND: commit 3ed2169
- Coverage: 259/259 guide articles have experience language (100%)
- Remaining "since 1983": 0

---
*Phase: 06-e-e-a-t-signals*
*Completed: 2026-02-17*
