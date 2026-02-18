---
phase: 07-sb4-d-content-hub
plan: 06
subsystem: content
tags: [sb4d, compliance, navigation, sitemap, internal-linking, content-fixes]

requires:
  - phase: 07-01
    provides: SB4-D hub pillar page and checklist cluster page
  - phase: 07-02
    provides: Deadlines and cost guidance cluster pages
  - phase: 07-03
    provides: Inspection process cluster page
  - phase: 07-04
    provides: Tampa and St. Petersburg location pages
  - phase: 07-05
    provides: Clearwater and Sarasota location pages

provides:
  - Hub-and-spoke architecture fully wired (existing pages link to new hub)
  - "In-house engineer" language eliminated site-wide
  - Past-due deadline framing on all SB4-D pages
  - Navigation includes SB4-D Compliance under Commercial
  - Sitemap updated with all 9 new SB4-D pages (433 total URLs)

affects: [deploy, future-content-updates]

tech-stack:
  added: []
  patterns:
    - Blue callout box pattern for cross-linking to hub pages
    - Hub CTA section with 3-button layout (primary + 2 outline)

key-files:
  created: []
  modified:
    - lib/constants.ts
    - scripts/generate-sitemap.js
    - public/sitemap.xml
    - app/commercial/condo-remediation/page.tsx
    - app/condo-remediation-tampa/page.tsx (and 7 other city pages)
    - app/insurance/guides/florida-sb4d-compliance-guide/page.tsx
    - app/insurance/guides/sb-4-d-compliance-tampa-bay-condos/page.tsx

key-decisions:
  - "Cities without dedicated SB4-D location pages (Bradenton, Brandon, Lakeland, Ruskin) link to main /sb4d-compliance/ hub"
  - "6 additional non-SB4-D insurance guides fixed for 'in-house' language consistency (Rule 2)"
  - "Dec 2025 and Jan 2026 deadlines updated to past-due since current date is Feb 2026"

patterns-established:
  - "Blue callout box for hub cross-links: py-4 bg-blue-50 with AlertTriangle icon and underlined link"

duration: 9min
completed: 2026-02-18
---

# Phase 7 Plan 6: Existing Page Updates & Hub Integration Summary

**Eliminated "in-house engineer" language across 20 pages, updated deadline framing to past-due, wired 8 city + 2 guide pages back to SB4-D hub, added navigation link, regenerated sitemap with 433 URLs**

## Performance

- **Duration:** 9 min
- **Started:** 2026-02-18T17:40:48Z
- **Completed:** 2026-02-18T17:50:02Z
- **Tasks:** 2
- **Files modified:** 24

## Accomplishments

- Zero "in-house engineer" instances remain on any SB4-D or insurance guide page (20 files cleaned)
- All past deadlines (Dec 2024, Dec 2025, Jan 2026) use past-due framing; Dec 2026 left as approaching
- Hub-and-spoke architecture complete: 8 condo-remediation city pages + 2 insurance guides link to SB4-D hub
- Commercial/condo-remediation page has prominent 3-button hub callout section
- Navigation updated with SB4-D Compliance link under Commercial submenu
- Sitemap regenerated: 433 URLs including all 9 new SB4-D pages

## Task Commits

1. **Task 1: Fix in-house engineer language and deadline framing** - `67744ce` (fix)
2. **Task 2: Add hub links, update navigation, regenerate sitemap** - `d8b9cc5` (feat)

## Files Created/Modified

- `lib/constants.ts` - Added SB4-D Compliance to COMMERCIAL_SERVICES nav array
- `scripts/generate-sitemap.js` - Added sb4d-compliance to hub priority list
- `public/sitemap.xml` - Regenerated with 433 URLs (9 new SB4-D pages)
- `app/commercial/condo-remediation/page.tsx` - Hub callout section, deadline fixes, alert banner update
- `app/condo-remediation-tampa/page.tsx` - In-house fixes, hub callout, link to /sb4d-compliance/tampa/
- `app/condo-remediation-st-petersburg/page.tsx` - In-house fixes, hub callout, link to /sb4d-compliance/st-petersburg/
- `app/condo-remediation-clearwater/page.tsx` - In-house fixes, hub callout, link to /sb4d-compliance/clearwater/
- `app/condo-remediation-sarasota/page.tsx` - In-house fixes, hub callout, link to /sb4d-compliance/sarasota/
- `app/condo-remediation-bradenton/page.tsx` - In-house fixes, hub callout, link to /sb4d-compliance/
- `app/condo-remediation-brandon/page.tsx` - In-house fixes, deadline fix, hub callout
- `app/condo-remediation-lakeland/page.tsx` - In-house fixes, hub callout
- `app/condo-remediation-ruskin/page.tsx` - Deadline fix, hub callout
- `app/insurance/guides/florida-sb4d-compliance-guide/page.tsx` - In-house fix, deadline status, hub link
- `app/insurance/guides/sb-4-d-compliance-tampa-bay-condos/page.tsx` - In-house fix, 3 deadline statuses, hub link
- `app/insurance/guides/condo-milestone-inspection-remediation/page.tsx` - 2 in-house fixes
- `app/insurance/guides/milestone-inspection-requirements/page.tsx` - In-house fix, deadline language
- `app/insurance/guides/sirs-structural-integrity-reserve-studies/page.tsx` - Deadline language fix
- `app/insurance/guides/tampa-insurance-restoration-for-hurricane-damage/page.tsx` - In-house fix
- `app/insurance/guides/water-damage-mitigation-in-tampa/page.tsx` - In-house fix
- `app/insurance/guides/tampa-disaster-damage-assessment-services/page.tsx` - In-house fix
- `app/insurance/guides/breakaway-wall-construction-requirements/page.tsx` - In-house fix
- `app/insurance/guides/impact-of-climate-change-on-tampa-insurance-restoration/page.tsx` - In-house fix
- `app/insurance/guides/tampas-insurance-restoration-reporting-and-documentation/page.tsx` - In-house fix

## Decisions Made

- Cities without dedicated SB4-D location pages (Bradenton, Brandon, Lakeland, Ruskin) link to main /sb4d-compliance/ hub rather than omitting links
- 6 additional non-SB4-D insurance guides fixed for "in-house" language consistency (Rule 2 auto-fix) -- no pages on the site should claim in-house engineering
- December 2025 and January 2026 deadlines updated to past-due framing since current date is February 2026
- Used blue callout box (bg-blue-50) for hub cross-links to differentiate from amber/red alert patterns already on pages

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 2 - Content Accuracy] Fixed "in-house" language on 6 additional insurance guide pages**
- **Found during:** Task 1 (in-house language grep)
- **Issue:** 6 non-SB4-D insurance guides also contained "in-house engineering" language not listed in plan
- **Fix:** Applied same "dedicated engineering partners" replacement to all 6 pages
- **Files modified:** tampa-insurance-restoration-for-hurricane-damage, water-damage-mitigation-in-tampa, tampa-disaster-damage-assessment-services, breakaway-wall-construction-requirements, impact-of-climate-change, tampas-insurance-restoration-reporting-and-documentation
- **Verification:** grep -rli "in-house" returns zero results across entire app/insurance/guides/
- **Committed in:** 67744ce (Task 1 commit)

**2. [Rule 1 - Bug] Fixed alert banner deadline language on commercial/condo-remediation**
- **Found during:** Task 2 (hub integration)
- **Issue:** Alert banner still said "must complete by December 31, 2024" as if future
- **Fix:** Changed to "The December 31, 2024 coastal deadline has passed"
- **Files modified:** app/commercial/condo-remediation/page.tsx
- **Committed in:** d8b9cc5 (Task 2 commit)

---

**Total deviations:** 2 auto-fixed (1 content accuracy, 1 bug)
**Impact on plan:** Both fixes improve content accuracy. No scope creep.

## Issues Encountered

None

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- Phase 7 (SB4-D Content Hub) is complete: all 6 plans executed
- 9 new hub pages created (plans 01-05), existing pages updated (plan 06)
- Hub-and-spoke architecture fully wired with bidirectional linking
- Ready for deployment via `netlify deploy --prod --dir=out --no-build`
- Next phase: Phase 8 or 9 per roadmap

---
*Phase: 07-sb4-d-content-hub*
*Completed: 2026-02-18*
