---
phase: 09-conversion-optimization
plan: 01
subsystem: ui
tags: [cta, conversion, react-component, internal-linking]

requires: []
provides:
  - "GuideCTA component with SILO_CTA_DEFAULTS for 4 content silos"
  - "Service-specific CTA labels on all 6 commercial service pages"
affects: [09-02, 09-03]

tech-stack:
  added: []
  patterns:
    - "Silo-aware CTA defaults exported as const for script consumption"

key-files:
  created:
    - "components/GuideCTA.tsx"
  modified:
    - "app/services/commercial/retail-construction/page.tsx"
    - "app/services/commercial/tenant-improvements/page.tsx"
    - "app/services/commercial/design-build/page.tsx"
    - "app/services/commercial/commercial-additions/page.tsx"
    - "app/services/commercial/industrial-construction/page.tsx"
    - "app/services/commercial/multi-family/page.tsx"

key-decisions:
  - "GuideCTA omits Phone icon import since existing CTA banners in commercial pages use plain text phone links"
  - "Omitted PhoneClickTracker from GuideCTA since PhoneTrackingProvider in layout.tsx auto-tracks all tel: links"

patterns-established:
  - "SILO_CTA_DEFAULTS: exported const object keyed by silo name for script-driven CTA deployment"

duration: 2min
completed: 2026-02-19
---

# Phase 9 Plan 01: GuideCTA Component & Commercial CTA Labels Summary

**Reusable GuideCTA component with 4 silo defaults and service-specific CTA labels replacing generic "Contact Us" on 6 commercial pages**

## Performance

- **Duration:** 2 min
- **Started:** 2026-02-19T00:16:01Z
- **Completed:** 2026-02-19T00:18:03Z
- **Tasks:** 2
- **Files modified:** 7

## Accomplishments
- Created GuideCTA component matching existing green CTA banner markup with 4 silo-specific default configs
- Replaced all 6 "Contact Us" labels in commercial service pages with service-specific text (e.g., "Discuss Your Retail Project")
- Exported SILO_CTA_DEFAULTS for script consumption by Plans 02 and 03

## Task Commits

Each task was committed atomically:

1. **Task 1: Create GuideCTA component with silo-specific defaults** - `1f2ae1d` (feat)
2. **Task 2: Replace generic Contact Us labels on 6 commercial service pages** - `f920fe1` (feat)

## Files Created/Modified
- `components/GuideCTA.tsx` - Silo-aware CTA banner component with SILO_CTA_DEFAULTS export
- `app/services/commercial/retail-construction/page.tsx` - "Discuss Your Retail Project"
- `app/services/commercial/tenant-improvements/page.tsx` - "Plan Your Tenant Improvement"
- `app/services/commercial/design-build/page.tsx` - "Start Your Design-Build Project"
- `app/services/commercial/commercial-additions/page.tsx` - "Plan Your Commercial Addition"
- `app/services/commercial/industrial-construction/page.tsx` - "Discuss Your Industrial Project"
- `app/services/commercial/multi-family/page.tsx` - "Plan Your Multi-Family Project"

## Decisions Made
- GuideCTA omits Phone icon import -- existing CTA banners in commercial pages use plain text phone links, kept consistent
- Omitted PhoneClickTracker from GuideCTA since PhoneTrackingProvider in layout.tsx auto-tracks all tel: links globally

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered
None

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- GuideCTA component ready for Plans 02 and 03 to deploy across all 262 guide pages
- SILO_CTA_DEFAULTS exported for automated script-based deployment

---
*Phase: 09-conversion-optimization*
*Completed: 2026-02-19*
