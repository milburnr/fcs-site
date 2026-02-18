---
phase: 08-insurance-restoration-content
plan: 05
subsystem: content
tags: [seo, insurance, dollar-ranges, project-scope, cross-links, content-expansion]

# Dependency graph
requires:
  - phase: 08-insurance-restoration-content
    plan: 01
    provides: "Engineer language cleanup across insurance silo pages"
provides:
  - "Insurance hub with project scope type examples and guide article cross-links"
  - "Expanded licensed-general-contractor page (1,833 words) with bonding, scope, and subcontractor content"
  - "Dollar ranges and scope details on all four differentiator child pages"
affects: [08-insurance-restoration-content]

# Tech tracking
tech-stack:
  added: []
  patterns: []

key-files:
  created: []
  modified:
    - app/insurance/InsurancePageClient.tsx
    - app/insurance/licensed-general-contractor/page.tsx
    - app/insurance/certified-estimating/page.tsx
    - app/insurance/appraisal-arbitration/page.tsx
    - app/insurance/building-consultant/page.tsx

key-decisions:
  - "Added guideLink property to processSteps data with separate Link rendering rather than embedding JSX in description strings"
  - "Fixed $225K floor to $500K on building-consultant and certified-estimating pages per project minimum threshold"
  - "Used $500K as minimum project value across all new dollar range content per FCS large-loss positioning"

patterns-established:
  - "Guide cross-links rendered as styled Link elements below process step descriptions with arrow indicator"

# Metrics
duration: 4min
completed: 2026-02-18
---

# Phase 08 Plan 05: Dollar Ranges, Scope Details & Guide Cross-Links Summary

**Added project scope type examples and 3 guide cross-links to insurance hub; expanded licensed-GC page from 1,194 to 1,833 words with bonding capacity, structural scope, and subcontractor management content; added dollar ranges to all four differentiator pages**

## Performance

- **Duration:** 4 min
- **Started:** 2026-02-18T22:45:51Z
- **Completed:** 2026-02-18T22:50:38Z
- **Tasks:** 2
- **Files modified:** 5

## Accomplishments
- Insurance hub now includes specific project type examples (100-unit condo re-roofing, 20-story facade replacement, 200+ unit fire restoration, 50K+ sqft commercial roof, hospitality interior reconstruction)
- Three guide article cross-links added to claims process steps 1, 3, and 4 with styled Link rendering
- Licensed-general-contractor page expanded from ~1,194 to 1,833 words with bonding capacity ($10M+), structural scope requirements, subcontractor management example ($3M 150-unit condo), and carrier documentation sections
- All four differentiator pages now have specific dollar ranges and project scope details
- Zero prohibited language (in-house/staff engineer) across all modified files

## Task Commits

Each task was committed atomically:

1. **Task 1: Add project scope examples and guide cross-links to insurance hub** - `6af839d` (feat)
2. **Task 2: Expand differentiator child pages with dollar ranges and scope details** - `f6f6af4` (feat)

## Files Created/Modified
- `app/insurance/InsurancePageClient.tsx` - Added project scope type paragraph and 3 guide cross-links to process steps
- `app/insurance/licensed-general-contractor/page.tsx` - Expanded with bonding capacity, structural scope, subcontractor management, and carrier documentation sections
- `app/insurance/certified-estimating/page.tsx` - Added $500K-$15M+ range and 30-40% estimate advantage detail
- `app/insurance/appraisal-arbitration/page.tsx` - Added $500K-$8M claim range and $500K+ threshold guidance
- `app/insurance/building-consultant/page.tsx` - Added 300+ unit condo and $5M-$50M+ property assessment scope; fixed $225K floor to $500K

## Decisions Made
- Used a `guideLink` data property on process steps with separate Link rendering rather than embedding JSX in description strings -- keeps the data layer clean while supporting rich rendering
- Fixed $225K minimum to $500K on building-consultant and certified-estimating pages to match FCS's large-loss contractor positioning
- Dollar ranges use $500K as the floor throughout new content per important context override

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] Fixed $225,000 floor on building-consultant and certified-estimating pages**
- **Found during:** Task 2
- **Issue:** Both pages referenced "$225,000" as the lower bound of FCS project scope, which is below the $500,000 minimum for FCS large-loss work
- **Fix:** Updated building-consultant from "$225,000 to $45 million" to "$500,000 and above, with experience on projects exceeding $25 million"; updated certified-estimating from "$225,000 to $45 million" to "$500,000 residential claims to $15 million+ commercial losses"
- **Files modified:** app/insurance/building-consultant/page.tsx, app/insurance/certified-estimating/page.tsx
- **Verification:** grep confirms no remaining $225K references
- **Committed in:** f6f6af4 (Task 2 commit)

---

**Total deviations:** 1 auto-fixed (1 bug - incorrect dollar floor)
**Impact on plan:** Essential correctness fix to match FCS's market positioning. No scope creep.

## Issues Encountered
None

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- Phase 08 (Insurance Restoration Content) is now fully complete with all 5 plans executed
- All insurance silo pages have consistent engineering language, dollar ranges, project scope details, and guide cross-links
- Ready for Phase 09 or deployment

---
*Phase: 08-insurance-restoration-content*
*Completed: 2026-02-18*
