---
phase: 04-hub-page-expansion
plan: 03
subsystem: content
tags: [insurance, faq-schema, parallax, authority-page, xactimate, large-loss]

requires:
  - phase: 03-schema-trust
    provides: ServiceSchema and BreadcrumbSchema components, FAQWithSchema component
provides:
  - Expanded insurance hub page (3,000+ words) with claims process walkthrough
  - FAQ section with structured data targeting insurance restoration queries
  - Insurance-specific CTA vocabulary (Request a Claims Consultation / Discuss Your Loss)
affects: [05-location-pages, 06-insurance-depth]

tech-stack:
  added: []
  patterns: [parallax-section-with-cta, process-step-layout-with-icons, differentiator-card-grid]

key-files:
  created: []
  modified:
    - app/insurance/InsurancePageClient.tsx
    - app/insurance/page.tsx

key-decisions:
  - "Used PARALLAX_IMAGES.hurricane for visual break (most contextually relevant)"
  - "Replaced basic Why FCS bullet list with expanded 5-card differentiator grid plus license card"
  - "8 FAQs written targeting insurance restoration contractor queries"
  - "CTA vocabulary: Request a Claims Consultation (primary), Discuss Your Loss (secondary)"

patterns-established:
  - "Process walkthrough: numbered steps with icons and 80-100 word descriptions"
  - "Differentiator grid: icon + title + paragraph cards in 3-column layout"

duration: 5min
completed: 2026-02-16
---

# Phase 04 Plan 03: Insurance Hub Expansion Summary

**3,000+ word insurance authority pillar page with claims process walkthrough, Xactimate/carrier negotiation differentiators, 8-item FAQ with schema, and ParallaxSection visual break**

## Performance

- **Duration:** 5 min
- **Started:** 2026-02-16T23:59:16Z
- **Completed:** 2026-02-17T00:04:00Z
- **Tasks:** 1
- **Files modified:** 2

## Accomplishments

- Expanded insurance hub from ~800 words to 3,000+ words with 4 new major sections
- Added 6-step claims process walkthrough (emergency response through certificate of completion)
- Replaced basic "Why FCS" bullet list with 5 expanded differentiator cards + license credential card
- Added 8-item FAQ section with FAQWithSchema for structured data
- Added ParallaxSection visual break with hurricane background and insurance-specific CTAs
- Updated all CTAs to insurance vocabulary -- zero instances of "Free Estimate"
- Updated page metadata targeting "insurance restoration contractor Tampa"

## Task Commits

Each task was committed atomically:

1. **Task 1: Expand insurance hub to 3,000+ word authority page** - `2bc0639` (feat)

## Files Created/Modified

- `app/insurance/InsurancePageClient.tsx` - Expanded from 362 to 562 lines with extended intro, process walkthrough, differentiator grid, ParallaxSection, and FAQ
- `app/insurance/page.tsx` - Updated metadata title and description for insurance restoration contractor targeting

## Decisions Made

- Used PARALLAX_IMAGES.hurricane for the visual break section -- contextually relevant to insurance/disaster restoration
- Replaced the "Why Property Owners Choose FCS" section entirely with a more detailed differentiator card grid rather than expanding inline -- better scannability and visual impact
- Added a 6th license credential card in brand-green-dark to reinforce CBC certification within the differentiator grid
- Wrote 8 new FAQ items targeting real insurance restoration queries rather than pulling from FAQ_DATABASE (more specific to large loss context)
- CTA vocabulary standardized: "Request a Claims Consultation" (primary), "Discuss Your Loss" (secondary), phone number always visible

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 3 - Blocking] Stale .next cache caused build failure**
- **Found during:** Task 1 verification (build step)
- **Issue:** Pre-existing stale `.next/server/pages-manifest.json` caused ENOENT build error
- **Fix:** Deleted `.next` directory and rebuilt
- **Files modified:** None (cache cleanup only)
- **Verification:** Clean build succeeded
- **Committed in:** Not committed (cache file, gitignored)

---

**Total deviations:** 1 auto-fixed (1 blocking)
**Impact on plan:** Cache cleanup only, no scope change.

## Issues Encountered

None beyond the stale cache issue documented above.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- Insurance hub is now a comprehensive authority page ready to serve as the pillar for the insurance silo
- All 9 child service pages and 8 location pages are properly linked from the hub
- FAQ schema markup will improve SERP appearance for insurance restoration queries

## Self-Check: PASSED

- FOUND: app/insurance/InsurancePageClient.tsx
- FOUND: app/insurance/page.tsx
- FOUND: .planning/phases/04-hub-page-expansion/04-03-SUMMARY.md
- FOUND: 2bc0639 (task 1 commit)

---
*Phase: 04-hub-page-expansion*
*Completed: 2026-02-16*
