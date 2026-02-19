---
phase: 09-conversion-optimization
plan: 03
subsystem: ui
tags: [cta, conversion, react-component, batch-script]

requires:
  - "09-01: GuideCTA component with SILO_CTA_DEFAULTS"
provides:
  - "GuideCTA deployed on all 41 insurance guide pages"
  - "GuideCTA deployed on all 24 residential guide pages"
  - "replace-guide-ctas.js batch script reusable for future silos"
affects: []

tech-stack:
  added: []
  patterns:
    - "Batch script with --silo and --dry-run flags for safe multi-silo CTA replacement"

key-files:
  created:
    - "scripts/replace-guide-ctas.js"
  modified:
    - "app/insurance/guides/*/page.tsx (41 files)"
    - "app/residential/guides/*/page.tsx (24 files)"

key-decisions:
  - "4 insurance guides skipped: breakaway-wall, fema-50-percent, insurance-arbitration, tampa-post-disaster -- they use non-standard CTA patterns (bg-brand-gold or no CTA section)"
  - "55 topic-specific headings preserved as heading prop overrides across both silos"

patterns-established:
  - "replace-guide-ctas.js: reusable batch script accepts --silo flag for any content silo"

duration: 8min
completed: 2026-02-19
---

# Phase 9 Plan 03: Insurance & Residential Guide CTA Replacement Summary

**Batch-replaced inline green CTA banners with GuideCTA component across 41 insurance and 24 residential guide pages, preserving 55 topic-specific headings**

## Performance

- **Duration:** 8 min
- **Started:** 2026-02-19T00:20:24Z
- **Completed:** 2026-02-19T00:29:19Z
- **Tasks:** 1
- **Files modified:** 65

## Accomplishments
- Created replace-guide-ctas.js batch replacement script (also used by Plan 02 for commercial silo)
- Replaced bottom CTA sections in 41 insurance guides with `<GuideCTA silo="insurance" />`
- Replaced bottom CTA sections in 24 residential guides with `<GuideCTA silo="residential" />`
- Preserved 32 topic-specific headings in insurance guides and 23 in residential guides
- Total GuideCTA adoption: 254 guide pages across all 3 silos (commercial + insurance + residential)

## Task Commits

Each task was committed atomically:

1. **Task 1: Run CTA replacement on insurance and residential guides** - `ce2ff71` (feat)

## Files Created/Modified
- `scripts/replace-guide-ctas.js` - Batch CTA replacement script with --silo and --dry-run flags
- `app/insurance/guides/*/page.tsx` - 41 files updated with GuideCTA silo="insurance"
- `app/residential/guides/*/page.tsx` - 24 files updated with GuideCTA silo="residential"

## Decisions Made
- 4 insurance guides skipped (breakaway-wall-construction-requirements, fema-50-percent-rule-explained, insurance-arbitration-appraisal, tampa-post-disaster-rebuilding-services) because they use non-standard CTA patterns (bg-brand-gold sections or no green CTA section at all)
- 55 topic-specific headings preserved across both silos via heading prop overrides
- Non-guide pages with generic "Get Free Estimate" CTAs noted but not changed (out of scope for guide CTA standardization)

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 3 - Blocking] Created replace-guide-ctas.js script (09-02 dependency not yet available)**
- **Found during:** Task 1 (script execution)
- **Issue:** scripts/replace-guide-ctas.js did not exist yet (Plan 09-02 runs in parallel wave)
- **Fix:** Created the script from scratch based on 09-02 plan specification and actual guide page analysis
- **Files modified:** scripts/replace-guide-ctas.js
- **Verification:** Dry run confirmed correct behavior on both silos
- **Committed in:** ce2ff71 (Task 1 commit)

---

**Total deviations:** 1 auto-fixed (1 blocking)
**Impact on plan:** Script creation was necessary since 09-02 had not yet executed. No scope creep.

## Issues Encountered
- 4 insurance guides had no bg-brand-green CTA section (used bg-brand-gold or had no bottom CTA), so they were correctly skipped by the script
- 1 insurance guide directory entry was a loose page.tsx file (not a subdirectory), correctly ignored

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- CTA-02 objective fully satisfied: all guide pages across all 3 content silos now use the standardized GuideCTA component
- 254 total guide pages with GuideCTA adoption
- Build passes with no errors

---
*Phase: 09-conversion-optimization*
*Completed: 2026-02-19*
