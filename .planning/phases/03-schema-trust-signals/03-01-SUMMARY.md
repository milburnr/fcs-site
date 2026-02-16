---
phase: 03-schema-trust-signals
plan: 01
subsystem: content
tags: [nap-consistency, phone-number, license-number, trust-signals, seo]

# Dependency graph
requires: []
provides:
  - "NAP consistency across all 431 pages -- zero wrong phone or license numbers"
  - "scripts/fix-nap-consistency.js automated phone/license replacement tool"
  - "scripts/fix-cgc-prefix.js automated CGC->CBC prefix correction tool"
affects: [03-schema-trust-signals, seo, trust-signals]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "NAP consistency enforcement via automated scripts before manual edits"
    - "License prefix CBC (Certified Building Contractor) used everywhere FCS is referenced"

key-files:
  created:
    - scripts/fix-nap-consistency.js
    - scripts/fix-cgc-prefix.js
  modified:
    - "42 app/**/*.tsx files (phone number fixes)"
    - "238 app/**/*.tsx files (CGC prefix corrections)"

key-decisions:
  - "FCS holds CBC (Certified Building Contractor) license, not CGC -- all FCS self-references corrected to CBC"
  - "26 educational CGC references preserved in advisory content about Florida licensing types"
  - "CGC #1529395 and CGC#1522434 were additional wrong license number formats missed by simple string matching"

patterns-established:
  - "Canonical NAP values: phone (813) 420-7561, license CBC1262722, from lib/constants.ts"
  - "Educational CGC references in contractor-advice articles are legitimate and should not be changed"

# Metrics
duration: 5min
completed: 2026-02-16
---

# Phase 03 Plan 01: NAP Consistency Summary

**Replaced 302 wrong phone numbers, license numbers, and CGC prefix references across 280 pages to establish NAP consistency site-wide**

## Performance

- **Duration:** 5 min
- **Started:** 2026-02-16T22:01:54Z
- **Completed:** 2026-02-16T22:06:57Z
- **Tasks:** 2
- **Files modified:** 280

## Accomplishments
- Replaced 40 instances of wrong phone number (813) 906-1302 with correct (813) 420-7561
- Replaced 2 wrong license numbers (CGC1522434, CGC1532648) with correct CBC1262722
- Corrected 260 CGC prefix references to CBC across 238 pages (meta descriptions, badges, FAQ answers, body text)
- Fixed 6 additional wrong license number format variations (CGC #1529395, CGC#1522434) missed by simple string matching
- Corrected "Certified General Contractor" to "Certified Building Contractor" in all FCS credential references
- Verified build passes with zero TypeScript errors

## Task Commits

Each task was committed atomically:

1. **Task 1: Fix all wrong phone numbers and license numbers** - `19410b7` (fix)
2. **Task 2: Audit and fix remaining CGC prefix issues** - `95a577e` (fix)

## Files Created/Modified
- `scripts/fix-nap-consistency.js` - Automated phone/license replacement script
- `scripts/fix-cgc-prefix.js` - Automated CGC->CBC prefix correction script
- `app/**/*.tsx` (280 files) - Phone, license, and prefix corrections

## Decisions Made
- FCS license CBC1262722 means "Certified Building Contractor" -- every self-reference using "CGC" (Certified General Contractor) was incorrect and needed correction
- 26 remaining CGC references in educational content about Florida licensing types are legitimate and preserved
- Three insurance restoration pages had "CGC" displayed as a large badge icon -- corrected to "CBC"
- hire-licensed-contractors page had placeholder "CGC#XXXXXX" -- replaced with actual CBC1262722

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 2 - Missing Critical] CGC prefix corrections far beyond plan scope**
- **Found during:** Task 2
- **Issue:** Plan estimated 6+ wrong license numbers. Actual scope: 260 CGC prefix issues across 238 pages including meta descriptions, FAQ answers, badge displays, and credential references
- **Fix:** Created comprehensive fix-cgc-prefix.js script handling 10+ replacement patterns with file-specific fixes for contextual corrections
- **Files modified:** 238 app/**/*.tsx files
- **Verification:** Only 26 legitimate educational CGC references remain
- **Committed in:** 95a577e (Task 2 commit)

---

**Total deviations:** 1 auto-fixed (1 missing critical -- license prefix accuracy is a legal/trust requirement)
**Impact on plan:** Essential for correctness. FCS holds CBC license, not CGC. Displaying wrong license type is a potential legal liability.

## Issues Encountered
- Pre-existing unstaged changes in components/Schema.tsx were present in working directory but NOT included in any commits (separate concern for future plans)

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- NAP consistency established -- ready for schema markup implementation (Plan 02)
- All pages now display correct phone (813) 420-7561 and license CBC1262722
- Header, Footer, StickyMobileCTA already use BUSINESS_INFO constants (confirmed)

---
*Phase: 03-schema-trust-signals*
*Completed: 2026-02-16*
