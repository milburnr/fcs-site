---
phase: 02-silo-architecture-internal-linking
plan: 01
subsystem: seo
tags: [redirects, canonicals, hub-consolidation, netlify, internal-linking]

# Dependency graph
requires:
  - phase: 01-content-audit-cleanup
    provides: "Clean content inventory with redirect targets identified"
provides:
  - "Three authoritative silo root hubs at /commercial/, /residential/, /insurance/"
  - "301 redirects for 7 deleted duplicate hub pages"
  - "All internal links updated to use winner hub URLs"
  - "Zero redirect chains in netlify.toml"
affects: [02-02, 02-03, 02-04, 02-05, 02-06, sitemap]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "Hub consolidation: winner page keeps content, losers get 301 redirects"
    - "Redirect chain prevention: all transitive targets resolved to final destination"

key-files:
  created: []
  modified:
    - "netlify.toml"
    - "app/commercial/page.tsx"
    - "app/residential/page.tsx"
    - "app/insurance/page.tsx"
    - "292 page.tsx files with internal link updates"

key-decisions:
  - "All 3 winner hubs already had correct self-referencing canonicals (no changes needed)"
  - "No unique content in loser pages warranted merging into winners"
  - "38 existing Phase 1 redirects pointing to /commercial-construction/ updated to /commercial/"
  - "Child pages under /services/commercial/ and /services/residential/ preserved (only hub page.tsx deleted)"

patterns-established:
  - "Hub URL pattern: /{business-line}/ (commercial, residential, insurance)"
  - "Redirect consolidation: always update transitive targets when adding new redirects"

# Metrics
duration: 5min
completed: 2026-02-16
---

# Phase 2 Plan 1: Hub Consolidation Summary

**Consolidated 3 business-line hubs by deleting 7 duplicate pages, adding 301 redirects, and updating 292 internal links to eliminate keyword cannibalization**

## Performance

- **Duration:** 5 min
- **Started:** 2026-02-16T06:54:45Z
- **Completed:** 2026-02-16T06:59:42Z
- **Tasks:** 2
- **Files modified:** 300 (7 deleted, 293 modified)

## Accomplishments
- Eliminated hub-level keyword cannibalization across all 3 business lines (commercial, residential, insurance)
- Established clean silo roots at /commercial/, /residential/, /insurance/ with self-referencing canonicals
- Updated 38 existing Phase 1 redirects that would have created redirect chains
- Updated 292 page.tsx files with internal links pointing to winner hub URLs

## Task Commits

Each task was committed atomically:

1. **Task 1: Consolidate hub pages and fix canonicals** - `c811113` (feat)
2. **Task 2: Add redirects and fix redirect chains** - `5b48190` (feat)

## Files Created/Modified
- `netlify.toml` - Removed conflicting redirect, added 7 new 301s, updated 38 chain-causing targets
- `app/commercial/page.tsx` - Winner hub (canonical already correct)
- `app/residential/page.tsx` - Winner hub (canonical already correct)
- `app/insurance/page.tsx` - Winner hub (canonical already correct)
- 292 page.tsx files across app/ - Internal links updated from loser URLs to winner URLs

### Deleted Files
- `app/commercial-construction/page.tsx`
- `app/services/commercial/page.tsx`
- `app/custom-homes/page.tsx`
- `app/services/residential/page.tsx`
- `app/insurance-restoration/page.tsx`
- `app/disaster-recovery-insurance-restoration/page.tsx`
- `app/services/disaster-recovery/page.tsx`

## Decisions Made
- All 3 winner hubs already had correct self-referencing canonicals -- no modifications needed to winner pages
- No unique content in loser pages worth merging (all covered by winners)
- Child pages under /services/commercial/ (6 pages) and /services/residential/ (3 pages) preserved -- only the hub-level page.tsx files deleted
- 38 Phase 1 redirects that targeted /commercial-construction/ updated to /commercial/ to prevent chains

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] Restored accidentally deleted child pages under /services/commercial/ and /services/residential/**
- **Found during:** Task 1 (Hub page consolidation)
- **Issue:** `rm -rf app/services/commercial` deleted the entire directory including child service pages (design-build, multi-family, industrial-construction, etc.)
- **Fix:** Restored 9 child pages via `git checkout HEAD~1` and amended the commit
- **Files restored:** 6 pages under services/commercial/, 3 pages under services/residential/
- **Verification:** `ls app/services/commercial/` and `ls app/services/residential/` confirm all child pages intact
- **Committed in:** c811113 (amended Task 1 commit)

---

**Total deviations:** 1 auto-fixed (1 bug)
**Impact on plan:** Caught and fixed immediately. No child pages were lost.

## Issues Encountered
None beyond the deviation documented above.

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- Three clean silo roots established at /commercial/, /residential/, /insurance/
- Ready for Plan 02 (article nesting under silo hubs) and subsequent silo architecture work
- All internal links already point to winner URLs, so nested content will link correctly

## Self-Check: PASSED

- All 3 winner hub pages exist with correct canonicals
- Both commits verified in git log
- All 7 loser pages confirmed deleted
- 6 commercial child pages and 3 residential child pages preserved
- Build passes with zero errors

---
*Phase: 02-silo-architecture-internal-linking*
*Completed: 2026-02-16*
