---
phase: 06-e-e-a-t-signals
plan: 07
subsystem: seo
tags: [e-e-a-t, experience, code-reference, location-pages, sb4-d]

requires:
  - phase: 06-01
    provides: "CodeReference and AuthorByline foundation components"
  - phase: 05
    provides: "Location pages with experience language and SB4-D content"
provides:
  - "32 location pages audited for experience language across Sarasota, Bradenton, Brandon, Ruskin"
  - "CodeReference callouts on 4 coastal SB4-D pages (Sarasota + Bradenton)"
  - "Since 1982 standardized across all target pages"
affects: [06-e-e-a-t-signals]

tech-stack:
  added: []
  patterns:
    - "CodeReference callouts placed contextually before relevant content paragraphs"
    - "Coastal vs inland discretion for SB4-D code references"

key-files:
  created: []
  modified:
    - "app/*-sarasota/page.tsx (8 pages)"
    - "app/*-bradenton/page.tsx (8 pages)"
    - "app/*-brandon/page.tsx (8 pages + multi-family-construction-brandon)"
    - "app/condo-remediation-sarasota/page.tsx (CodeReference added)"
    - "app/balcony-reconstruction-sarasota/page.tsx (CodeReference added)"
    - "app/condo-remediation-bradenton/page.tsx (CodeReference added)"
    - "app/balcony-reconstruction-bradenton/page.tsx (CodeReference added)"

key-decisions:
  - "Skipped CodeReference for Brandon pages (inland/suburban, SB4-D less relevant)"
  - "Skipped CodeReference for Ruskin pages (intentionally lighter pages, existing inline references adequate)"
  - "Fixed multi-family-construction-brandon despite not being in plan target list (caught by verification grep)"

patterns-established:
  - "Coastal cities get formal CodeReference callouts for SB4-D statutes"
  - "Inland/suburban cities rely on existing inline statute references"

duration: 25min
completed: 2026-02-16
---

# Phase 6 Plan 07: Location Page E-E-A-T Audit Summary

**Audited 32 location pages across 4 cities, added F.S. 553.899 and F.S. 718.112 CodeReference callouts on coastal SB4-D pages, standardized founding year to 1982**

## Performance

- **Duration:** ~25 min
- **Tasks:** 2/2
- **Files modified:** 29 (16 Sarasota/Bradenton + 9 Brandon + 4 CodeReference additions)

## Accomplishments
- Audited all 32 location pages for experience language -- Phase 5 had already added strong location-specific content
- Added formal CodeReference callouts (F.S. 553.899 + F.S. 718.112) on 4 coastal SB4-D pages (condo-remediation and balcony-reconstruction for Sarasota and Bradenton)
- Fixed "Since 1983" to "Since 1982" on 25 pages (16 Sarasota/Bradenton + 8 Brandon + 1 multi-family-construction-brandon)
- Ruskin pages correctly use "Ruskin Headquartered" badge instead of founding year -- no fix needed

## Task Commits

Each task was committed atomically:

1. **Task 1: Sarasota + Bradenton location pages** - `10558ae` (feat)
2. **Task 2: Brandon + Ruskin location pages** - `6442a30` (feat)

## Files Created/Modified

### Task 1 - Sarasota + Bradenton (16 pages)
- `app/*-sarasota/page.tsx` (8 pages) - Fixed "Since 1983" to "Since 1982"
- `app/*-bradenton/page.tsx` (8 pages) - Fixed "Since 1983" to "Since 1982"
- `app/condo-remediation-sarasota/page.tsx` - Added CodeReference import + F.S. 553.899 + F.S. 718.112
- `app/balcony-reconstruction-sarasota/page.tsx` - Added CodeReference import + F.S. 553.899
- `app/condo-remediation-bradenton/page.tsx` - Added CodeReference import + F.S. 553.899 + F.S. 718.112
- `app/balcony-reconstruction-bradenton/page.tsx` - Added CodeReference import + F.S. 553.899

### Task 2 - Brandon + Ruskin (16 pages)
- `app/*-brandon/page.tsx` (8 pages) - Fixed "Since 1983" to "Since 1982"
- `app/multi-family-construction-brandon/page.tsx` - Fixed "Since 1983" to "Since 1982" (bonus page caught by verification)
- `app/*-ruskin/page.tsx` (8 pages) - No changes needed (use "Ruskin Headquartered" badge)

## Decisions Made
- **No experience language additions needed:** Phase 5 already added comprehensive location-specific experience language to all 32 pages
- **CodeReference on coastal SB4-D pages only:** Sarasota and Bradenton are coastal cities where SB4-D milestone inspections (25-year rule) are most relevant. Added formal F.S. 553.899 callouts on condo-remediation and balcony-reconstruction pages for both cities
- **F.S. 718.112 on condo pages only:** Reserve funding requirements are specifically relevant to condo associations, so only added to condo-remediation pages (not balcony-reconstruction)
- **Skipped CodeReference for Brandon:** Inland/suburban location where SB4-D's 30-year rule applies but is less urgent. Plan explicitly said "skip if it feels forced"
- **Skipped CodeReference for Ruskin:** Pages are intentionally lighter (~800-1000 words per Phase 5 decision). Existing inline SB4-D references are adequate without formal callout boxes
- **Fixed multi-family-construction-brandon:** Not in the plan's 32 target pages but caught by the verification grep pattern. Applied Rule 1 (auto-fix bug) to ensure consistent founding year

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] Fixed "Since 1983" in multi-family-construction-brandon**
- **Found during:** Task 2 (Brandon audit)
- **Issue:** Page not in plan's 32 target files but caught by verification grep `app/*-brandon/page.tsx`
- **Fix:** Changed "Since 1983" to "Since 1982" for consistency
- **Files modified:** app/multi-family-construction-brandon/page.tsx
- **Committed in:** 6442a30

---

**Total deviations:** 1 auto-fixed (Rule 1 - factual consistency)
**Impact on plan:** Minimal. One additional page fixed to pass verification and maintain consistency.

## Issues Encountered
- Build failed once during Task 2 due to transient `.next` cache issue (ENOENT on pages-manifest.json). Resolved with `rm -rf .next && npm run build`
- Linter reverted Brandon file changes during failed build, requiring re-application of all 8 Brandon edits

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- All location pages across all 8 cities now have consistent E-E-A-T signals
- Coastal city SB4-D pages have formal CodeReference callouts
- Founding year standardized to 1982 across the site

---
*Phase: 06-e-e-a-t-signals*
*Completed: 2026-02-16*

## Self-Check: PASSED
- Commit 10558ae: FOUND
- Commit 6442a30: FOUND
- SUMMARY.md: FOUND
- "1983" in target pages: 0 (verified)
