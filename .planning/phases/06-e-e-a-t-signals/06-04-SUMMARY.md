---
phase: 06-e-e-a-t-signals
plan: 04
subsystem: content
tags: [e-e-a-t, code-references, experience-language, florida-building-code, authority-signals]

requires:
  - phase: 06-01
    provides: "CodeReference component for building code callouts"
provides:
  - "15 sub-service and standalone pages enhanced with experience language"
  - "6 pages with CodeReference callouts (hurricane, multi-family, industrial, commercial-additions, engineering, building-consultants)"
affects: [06-05, 06-06, 06-07]

tech-stack:
  added: []
  patterns: ["CodeReference callout placement after compliance paragraphs", "Experience sentences with verifiable CBC credentials"]

key-files:
  created: []
  modified:
    - app/services/commercial/commercial-additions/page.tsx
    - app/services/commercial/design-build/page.tsx
    - app/services/commercial/industrial-construction/page.tsx
    - app/services/commercial/multi-family/page.tsx
    - app/services/commercial/retail-construction/page.tsx
    - app/services/commercial/tenant-improvements/page.tsx
    - app/services/residential/home-additions/page.tsx
    - app/services/residential/hurricane-resistant-construction/page.tsx
    - app/services/residential/kitchen-remodeling/page.tsx
    - app/building-consultants/page.tsx
    - app/certified-estimates/page.tsx
    - app/engineering/page.tsx
    - app/expert-witness/page.tsx
    - app/vip-public-adjuster/page.tsx

key-decisions:
  - "multi-family-construction standalone page skipped for experience language (already has 13+ experience references)"
  - "CodeReference callouts placed after paragraphs discussing code compliance, permits, or structural requirements"
  - "Each page gets unique experience sentences -- no identical copy across pages"

patterns-established:
  - "Experience sentence pattern: verifiable claims (CBC1262722, since 1982, 300+ projects, in-house engineering)"
  - "CodeReference placement: after content paragraphs discussing compliance, not in hero or intro"

duration: 12min
completed: 2026-02-17
---

# Phase 06 Plan 04: Sub-Service and Standalone Page E-E-A-T Enhancement Summary

**CodeReference callouts for 6 code-heavy pages (FBC wind loads, F.S. 553.899, F.S. 489.113, fire safety, additions chapter) plus experience language across 14 service pages with verifiable CBC credentials**

## Performance

- **Duration:** 12 min
- **Started:** 2026-02-17T05:22:06Z
- **Completed:** 2026-02-17T05:34:00Z
- **Tasks:** 2
- **Files modified:** 14

## Accomplishments
- 9 sub-service pages enhanced with unique first-person experience sentences referencing verifiable FCS credentials
- 4 sub-service pages received CodeReference callouts (hurricane-resistant-construction, multi-family, industrial-construction, commercial-additions)
- 5 standalone service pages enhanced with experience language (building-consultants, certified-estimates, engineering, expert-witness, vip-public-adjuster)
- 2 standalone pages received CodeReference callouts (engineering: F.S. 553.899, building-consultants: F.S. 489.113)
- multi-family-construction page skipped (already had 13+ experience references from Phase 4 rewrite)

## Task Commits

Each task was committed atomically:

1. **Task 1: Sub-service pages experience + code references** - `d986842` (feat)
2. **Task 2: Standalone service pages experience + code references** - `7ad6233` (feat)

## Files Created/Modified
- `app/services/residential/hurricane-resistant-construction/page.tsx` - FBC 8th Edition Section 1609 wind loads CodeReference + experience sentence
- `app/services/commercial/multi-family/page.tsx` - F.S. 553.899 milestone inspections CodeReference + experience sentence
- `app/services/commercial/industrial-construction/page.tsx` - FBC fire safety/occupancy CodeReference + experience sentence
- `app/services/commercial/commercial-additions/page.tsx` - FBC Chapter 34 additions/alterations CodeReference + experience sentence
- `app/services/commercial/design-build/page.tsx` - Experience sentence (design-build + in-house engineering)
- `app/services/commercial/retail-construction/page.tsx` - Experience sentence (since 1982 + CBC license)
- `app/services/commercial/tenant-improvements/page.tsx` - Experience sentence (40+ years TI experience)
- `app/services/residential/home-additions/page.tsx` - Experience sentence (in-house engineering + since 1982)
- `app/services/residential/kitchen-remodeling/page.tsx` - Experience sentence (Davis Islands, Old Northeast)
- `app/building-consultants/page.tsx` - F.S. 489.113 CodeReference + CBC credential sentence
- `app/certified-estimates/page.tsx` - CBC1262722 + four decades experience sentence
- `app/engineering/page.tsx` - F.S. 553.899 CodeReference + in-house engineering since 1982
- `app/expert-witness/page.tsx` - CBC + 300 projects credential sentence
- `app/vip-public-adjuster/page.tsx` - 40+ year PA partnership + Xactimate expertise

## Decisions Made
- multi-family-construction standalone page already had 13+ verifiable experience references from Phase 4 rewrite -- skipped per plan instruction to "audit first, skip if already strong"
- CodeReference callouts placed after the paragraph discussing compliance/permits/code requirements on each page, not in hero sections
- Each page received unique experience sentences tailored to its service topic -- zero duplicate sentences across pages

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered
- Linter reverted changes to 3 standalone pages (certified-estimates, expert-witness, vip-public-adjuster) after first build. Re-applied all edits successfully. Build cache (.next) also required clean rebuild.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness
- All sub-service and standalone service pages now have experience language and code references
- Ready for remaining E-E-A-T signal plans (06-05 through 06-08)

## Self-Check: PASSED

All 14 modified files verified on disk. Both task commits (d986842, 7ad6233) confirmed in git history.

---
*Phase: 06-e-e-a-t-signals*
*Completed: 2026-02-17*
