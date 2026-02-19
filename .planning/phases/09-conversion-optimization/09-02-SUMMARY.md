---
phase: 09-conversion-optimization
plan: 02
subsystem: ui
tags: [cta, conversion, batch-script, guide-pages]

requires:
  - "09-01: GuideCTA component with SILO_CTA_DEFAULTS"
provides:
  - "189 commercial guide pages using GuideCTA component"
  - "Reusable batch CTA replacement script for other silos"
affects: [09-03]

tech-stack:
  added: []
  patterns:
    - "Batch AST-free JSX replacement via regex with nested section tracking"

key-files:
  created:
    - "scripts/replace-guide-ctas.js"
  modified:
    - "app/commercial/guides/*/page.tsx (189 files)"

key-decisions:
  - "hyde-park-renovation-guide left unchanged -- uses gold-themed CTA by design, not green"
  - "Script handles bg-brand-green, bg-brand-green-dark, and py-16 bg-brand-green variants"
  - "Only replaces the LAST green section per file to preserve mid-content callouts"

patterns-established:
  - "replace-guide-ctas.js: reusable for residential, insurance, sb4d silos via --silo flag"

duration: 7min
completed: 2026-02-19
---

# Phase 9 Plan 02: Batch CTA Replacement Across Commercial Guides Summary

**Replaced inline green CTA banners with GuideCTA component across 189 commercial guide pages, preserving 141 topic-specific headings as prop overrides**

## Performance

- **Duration:** 7 min
- **Started:** 2026-02-19T00:20:28Z
- **Completed:** 2026-02-19T00:27:29Z
- **Tasks:** 1
- **Files modified:** 190

## Accomplishments
- Created batch replacement script supporting all 4 content silos with --dry-run mode
- Replaced bottom CTA sections in 189 of 190 commercial guide pages with GuideCTA
- Preserved 141 topic-specific headings via heading prop overrides; 48 generic headings use silo defaults
- Removed ~3,600 lines of duplicated inline CTA markup across the silo

## Task Commits

Each task was committed atomically:

1. **Task 1: Create batch CTA replacement script and run on commercial guides** - `9d903fe` (feat)

## Files Created/Modified
- `scripts/replace-guide-ctas.js` - Batch CTA replacement script with --silo and --dry-run flags
- `app/commercial/guides/*/page.tsx` (189 files) - Inline green CTA replaced with GuideCTA component

## Decisions Made
- hyde-park-renovation-guide intentionally skipped (uses bg-brand-gold CTA, not green)
- Script matches `bg-brand-green`, `bg-brand-green-dark`, and `py-16 bg-brand-green` class variants
- Only the LAST green section per file is replaced to preserve mid-content callouts (20 files had multiple green sections)

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] Fixed broken multi-line imports from script edge case**
- **Found during:** Task 1 (build verification)
- **Issue:** Script's "last import line" detection matched the opening `import {` of multi-line Accordion imports, inserting GuideCTA import mid-block and causing syntax errors
- **Fix:** Post-processing script detected and relocated GuideCTA imports after the multi-line block closing `} from` line
- **Files modified:** 19 files with multi-line Accordion imports
- **Verification:** Build passes with no syntax errors
- **Committed in:** 9d903fe (part of task commit)

---

**Total deviations:** 1 auto-fixed (1 bug)
**Impact on plan:** Edge case in import insertion logic. Fixed inline. No scope creep.

## Issues Encountered
None beyond the import edge case documented above.

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- Script ready for Plan 03 to run on residential, insurance, and sb4d silos
- All 189 commercial guides now use centralized GuideCTA component

---
*Phase: 09-conversion-optimization*
*Completed: 2026-02-19*
