---
phase: 01-content-audit-cleanup
plan: 04
subsystem: seo
tags: [keyword-map, cannibalization, seo-audit, content-strategy]

requires:
  - phase: 01-03
    provides: "Thin content decisions (redirect/noindex exclusions define indexable page set)"
provides:
  - "Complete keyword-to-URL map for all 428 indexable pages (seo/keyword-map.json)"
  - "Cannibalization report with 3 conflicts resolved (seo/cannibalization-report.json)"
  - "Reusable keyword derivation script (scripts/generate-keyword-map.js)"
  - "Reusable cannibalization detection script (scripts/detect-cannibalization.js)"
affects: [01-05, 01-06, 01-07, phase-02, phase-03]

tech-stack:
  added: []
  patterns: [keyword-derivation-from-title-and-url, page-type-priority-resolution]

key-files:
  created:
    - scripts/generate-keyword-map.js
    - scripts/detect-cannibalization.js
    - seo/cannibalization-report.json
  modified:
    - seo/keyword-map.json

key-decisions:
  - "Keyword derivation priority: title extraction first, URL slug fallback"
  - "Page type priority for cannibalization: service-location > hub > location > article"
  - "Losers get reassigned long-tail variants rather than being left without keywords"

patterns-established:
  - "Keyword map pages array: flat array with url, primary_keyword, source, page_type fields"
  - "Cannibalization resolution: winner keeps keyword, loser gets topic-qualified variant"

duration: 3min
completed: 2026-02-16
---

# Phase 1 Plan 4: Keyword Mapping & Cannibalization Summary

**Complete keyword-to-URL map covering 428 indexable pages with 3 cannibalization conflicts detected and resolved via page-type priority**

## Performance

- **Duration:** 3 min
- **Started:** 2026-02-16T03:49:29Z
- **Completed:** 2026-02-16T03:52:37Z
- **Tasks:** 2
- **Files modified:** 4

## Accomplishments
- Extended keyword map from 73 curated entries to 428 (100% of indexable pages)
- Derived 344 keywords from page titles, 11 from URL slugs
- Detected 3 keyword cannibalization conflicts across 6 pages
- All conflicts resolved with zero duplicate primary keywords remaining

## Task Commits

Each task was committed atomically:

1. **Task 1: Extend keyword map to all indexable pages** - `0f76744` (feat)
2. **Task 2: Detect and resolve keyword cannibalization** - `6b11cd4` (feat)

## Files Created/Modified
- `scripts/generate-keyword-map.js` - Derives primary keywords for all indexable pages from titles/URLs
- `scripts/detect-cannibalization.js` - Detects duplicate keywords and resolves via priority system
- `seo/keyword-map.json` - Complete keyword map with 428 entries (was 73)
- `seo/cannibalization-report.json` - 3 conflicts documented with resolutions

## Decisions Made
- **Title-first derivation:** Titles provide better keyword phrases than URL slugs (344 vs 11 derived from each)
- **Page type priority:** service-location > hub > location > article ensures money pages keep their keywords
- **Reassignment over removal:** Losers get long-tail variants (e.g., "disaster recovery contractor florida services") rather than being left keyword-less
- **Existing entries preserved:** All 73 manually curated entries kept as-is; script never overwrites them

## Cannibalization Conflicts Found

| Keyword | Winner | Loser | Resolution |
|---------|--------|-------|------------|
| leading commercial contractors | /leading-commercial-contractors-in-tampa/ (service-location) | /leading-commercial-contractors-in-tampas/ (article) | Reassigned to "leading commercial contractors tampas" |
| disaster recovery contractor florida | /disaster-recovery/ (hub, 7657w) | /services/disaster-recovery/ (hub, 654w) | Reassigned to "disaster recovery contractor florida services" |
| historic restoration florida | /services/historic-restoration/ (hub, 660w) | /historic-restoration/ (hub, 178w) | Reassigned to "historic restoration florida services" |

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

None.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness
- Keyword map ready for meta title/description optimization (Plan 05)
- Cannibalization report available for content differentiation decisions
- Both scripts are reusable and can be re-run after future content changes

---
*Phase: 01-content-audit-cleanup*
*Completed: 2026-02-16*
