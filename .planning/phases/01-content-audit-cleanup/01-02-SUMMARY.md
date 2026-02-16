---
phase: 01-content-audit-cleanup
plan: 02
subsystem: content
tags: [seo, redirects, netlify, placeholder-cleanup]

requires: []
provides:
  - "Off-topic fishing charters page removed with 301 redirect"
  - "Placeholder page audit confirming 122 already deleted, 6 are real pages"
  - "cleanup-placeholder-pages.js script for future use"
  - "flagged-placeholders.json documenting remaining thin pages for Plan 03"
affects: [01-03, content-audit-cleanup]

tech-stack:
  added: []
  patterns:
    - "Cross-reference thin-content-report.json with netlify.toml for redirect validation"

key-files:
  created:
    - scripts/cleanup-placeholder-pages.js
    - flagged-placeholders.json
  modified:
    - netlify.toml

key-decisions:
  - "122 of 128 placeholder directories were already deleted prior to this plan -- no re-deletion needed"
  - "6 pages classified as 'placeholder' are actually real service pages (building-consultants, certified-estimates, engineering, expert-witness, insurance-arbitration-appraisal, services) -- skipped deletion"
  - "Fishing charters page redirected to /locations/ruskin-fl/ to preserve backlink equity"

patterns-established:
  - "Placeholder identification: true redirect stubs have isPlaceholder=true, title='Redirecting...', wordCount=34"

duration: 4min
completed: 2026-02-15
---

# Phase 1 Plan 2: Remove Off-Topic and Placeholder Pages Summary

**Removed off-topic fishing charters page with 301 redirect; confirmed 122 placeholder redirect stubs already deleted, 6 remaining are real service pages**

## Performance

- **Duration:** 4 min
- **Started:** 2026-02-16T02:56:26Z
- **Completed:** 2026-02-16T03:00:45Z
- **Tasks:** 2
- **Files modified:** 3

## Accomplishments
- Deleted the off-topic Poseidon Fishing Charters page and added 301 redirect to /locations/ruskin-fl/
- Created cleanup-placeholder-pages.js that cross-references thin-content-report.json with netlify.toml
- Confirmed 122 of 128 placeholder directories were already removed in a prior cleanup
- Identified 6 "placeholder"-classified pages that are actually real service pages (not redirect stubs)
- Page count reduced from 496 to 495 (1 fishing page deleted; 122 placeholders were already gone)

## Task Commits

Each task was committed atomically:

1. **Task 1: Remove off-topic fishing charters page (AUDIT-03)** - `c1b1c85` (fix)
2. **Task 2: Delete placeholder page files that have existing redirects (AUDIT-02 partial)** - `a5cd775` (feat)

## Files Created/Modified
- `netlify.toml` - Added 301 redirect for fishing charters page to /locations/ruskin-fl/
- `scripts/cleanup-placeholder-pages.js` - Script to cross-reference placeholders with redirects
- `flagged-placeholders.json` - Audit results documenting 6 real pages and 0 unflagged stubs

## Decisions Made
- **122 placeholders already gone:** The thin-content-report.json listed 128 placeholder pages, but 122 directories were already deleted in a prior cleanup. No re-deletion needed.
- **6 "placeholders" are real pages:** building-consultants, certified-estimates, engineering, expert-witness, insurance-arbitration-appraisal, and services are real service pages with schemas, breadcrumbs, and FAQ components. Their low word counts (34-48) triggered the placeholder classification but they are legitimate pages needing content expansion, not deletion.
- **Redirect target choice:** Fishing charters page redirected to /locations/ruskin-fl/ since the page was about Ruskin FL, preserving geographic relevance and backlink equity.

## Deviations from Plan

None -- plan executed exactly as written. The plan anticipated ~120-128 deletions but acknowledged uncertainty. The actual finding (122 already deleted) is within the expected range, just handled by a prior process.

## Issues Encountered
- The thin-content-report.json's "placeholder" category included 6 real service pages alongside true redirect stubs. The script correctly distinguished between them by checking isPlaceholder flag, title content, and file content (schemas, breadcrumbs).

## Key Data for Plan 03

**Final page count: 495** (down from 496 after fishing page removal; 122 placeholders were already gone)

**Remaining thin pages that are NOT redirect stubs (need content expansion, not deletion):**
| Slug | Title | Words |
|------|-------|-------|
| /building-consultants/ | Building Consultants | 36 |
| /certified-estimates/ | Certified Estimates | 36 |
| /engineering/ | Engineering | 34 |
| /expert-witness/ | Expert Witness | 36 |
| /insurance-arbitration-appraisal/ | Insurance Arbitration/Appraisal | 36 |
| /services/ | Tampa Construction Services | 48 |

**Zero placeholder redirect stubs remain.** All "Redirecting..." pages are deleted.

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- AUDIT-03 (off-topic content) is fully resolved
- AUDIT-02 (placeholder pages) is resolved -- all redirect stubs gone, remaining pages need content work
- Plan 03 can proceed with keyword mapping and redirect decisions for any remaining thin content
- The flagged-placeholders.json file is ready for Plan 03 consumption

## Self-Check: PASSED

All files exist, all commits verified, page count confirmed at 495, zero redirect stubs remain.

---
*Phase: 01-content-audit-cleanup*
*Completed: 2026-02-15*
