---
phase: 07-sb4-d-content-hub
plan: 02
subsystem: content
tags: [sb4d, compliance, deadlines, costs, condo-remediation, faq-schema, next-js]

# Dependency graph
requires:
  - phase: 06-eeat-signals
    provides: AuthorByline, CodeReference, BackToHub components
provides:
  - SB4-D deadline calendar page at /sb4d-compliance/deadlines/
  - SB4-D cost guidance page at /sb4d-compliance/costs/
  - Deadline status table with past-due framing for Feb 2026
  - Realistic cost ranges with 10-20% contingency recommendations
affects: [07-sb4-d-content-hub remaining plans, sitemap, internal-linking]

# Tech tracking
tech-stack:
  added: []
  patterns: [deadline-status-table-with-badges, cost-category-cards-with-drivers]

key-files:
  created:
    - app/sb4d-compliance/deadlines/page.tsx
    - app/sb4d-compliance/costs/page.tsx
  modified: []

key-decisions:
  - "Deadline page uses responsive table (desktop) + card stack (mobile) for status display"
  - "Cost page uses vertical card layout with driver lists rather than a simple table"
  - "Both pages use ServiceSchema (not LocalBusinessSchema) since they are topic pages, not location pages"
  - "Contingency caveat placed in opening callout, per-FAQ answer, and standalone reminder box"

patterns-established:
  - "StatusBadge component for PAST DUE / IN EFFECT / APPROACHING / ONGOING indicators"
  - "Cost category cards with icon, range badge, description, and driver list"

# Metrics
duration: 8min
completed: 2026-02-18
---

# Phase 7 Plan 02: SB4-D Deadlines & Cost Guidance Summary

**SB4-D deadline calendar with past-due status table and cost guidance with realistic $10K-$150K+ per-unit ranges, contingency caveats, and HB 913 funding provisions**

## Performance

- **Duration:** 8 min
- **Started:** 2026-02-18T17:25:55Z
- **Completed:** 2026-02-18T17:34:00Z
- **Tasks:** 2
- **Files modified:** 2

## Accomplishments
- Deadline calendar page with 7-row status table covering all SB4-D milestones, color-coded past-due/in-effect/approaching/ongoing badges
- HB 913 changes section covering baseline funding, $25K threshold, 2-year pause, conflict disclosures, DBPR reporting
- Cost guidance page with 5 detailed cost category cards (assessments, balcony, concrete, envelope, parking) including range badges and cost drivers
- "Why Costs Vary" and "Funding Remediation" sections with realistic, non-optimistic framing
- Both pages: phone-first CTAs, "dedicated engineering partner" language, zero forbidden terms

## Task Commits

Each task was committed atomically:

1. **Task 1: Create SB4-D Deadline Calendar Page** - `d394a35` (feat)
2. **Task 2: Create SB4-D Cost Guidance Page** - `157863e` (feat)

## Files Created/Modified
- `app/sb4d-compliance/deadlines/page.tsx` - Deadline calendar with status table, HB 913 changes, consequences, 6 FAQs
- `app/sb4d-compliance/costs/page.tsx` - Cost guidance with 5 cost categories, funding options, FCS approach, 6 FAQs

## Decisions Made
- Used ServiceSchema rather than LocalBusinessSchema since these are topic/informational pages, not location-specific service pages
- Deadline table uses responsive design: full HTML table on desktop, stacked cards on mobile
- Cost ranges presented as styled cards with driver lists rather than a simple table, for better readability and SEO
- Contingency recommendation (10-20%) appears in 3 prominent locations on cost page: opening caveat, standalone red callout, and FAQ answers
- Both pages link to hub and other cluster pages via manual internal link grid rather than RelatedServices/NearbyLocations (which are city-service oriented)

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered
None.

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- Both cluster pages are live and linking to hub, checklist, and other cluster pages
- Existing SB4-D pages (tampa, st-petersburg) still have "in-house" language that needs updating in a later plan
- Remaining Phase 7 plans can proceed: inspection-process page, location pages, existing page updates

## Self-Check: PASSED

- FOUND: app/sb4d-compliance/deadlines/page.tsx
- FOUND: app/sb4d-compliance/costs/page.tsx
- FOUND: d394a35 (Task 1 commit)
- FOUND: 157863e (Task 2 commit)

---
*Phase: 07-sb4-d-content-hub*
*Completed: 2026-02-18*
