---
phase: 06-e-e-a-t-signals
plan: 01
subsystem: ui
tags: [react, typescript, tailwind, e-e-a-t, components]

requires:
  - phase: 03-schema-nap
    provides: BUSINESS_INFO constants with CBC license, founding date, company name
  - phase: 01-technical-seo
    provides: OptimizedImage component for image optimization pipeline

provides:
  - AuthorByline component for company attribution on article pages
  - CodeReference component for building code callout boxes with external links
  - ProjectGallery component for responsive photo gallery sections

affects: [06-02, 06-03, 06-04, 06-05, 06-06, 06-07, 06-08]

tech-stack:
  added: []
  patterns:
    - "AuthorByline: light/dark variant prop for hero vs body contexts"
    - "CodeReference: border-l-4 callout pattern matching existing site convention"
    - "ProjectGallery: OptimizedImage-backed grid with hover caption overlay"

key-files:
  created:
    - components/AuthorByline.tsx
    - components/CodeReference.tsx
    - components/ProjectGallery.tsx
  modified: []

key-decisions:
  - "AuthorByline supports light/dark variant for use in both hero sections (white text) and body sections (gray text)"
  - "ProjectGallery does not pass size prop to OptimizedImage since that prop does not exist on the component; uses default responsive sizing instead"
  - "GalleryPhoto type exported from ProjectGallery for reuse by consuming pages"

patterns-established:
  - "AuthorByline: import from @/components/AuthorByline, place below h1 in article hero"
  - "CodeReference: use for any specific statute/section citation; keep general code mentions inline in prose"
  - "ProjectGallery: wrap in section with bg-gray-50, pass photos array with src/caption objects"

duration: 2min
completed: 2026-02-17
---

# Phase 6 Plan 01: Foundation Components Summary

**Three reusable E-E-A-T components: AuthorByline (company attribution with date display), CodeReference (building code callout with external links), ProjectGallery (responsive photo grid with hover captions)**

## Performance

- **Duration:** 2 min
- **Started:** 2026-02-17T05:17:56Z
- **Completed:** 2026-02-17T05:19:42Z
- **Tasks:** 1
- **Files modified:** 3

## Accomplishments
- AuthorByline component with BUSINESS_INFO.name import, light/dark variants, optional publish/modified dates
- CodeReference component with border-l-4 blue callout styling, external link support with noopener noreferrer
- ProjectGallery component with OptimizedImage integration, responsive grid columns (2/3/4), hover caption overlay

## Task Commits

Each task was committed atomically:

1. **Task 1: Create AuthorByline, CodeReference, and ProjectGallery components** - `8153b51` (feat)

## Files Created/Modified
- `components/AuthorByline.tsx` - Company byline with optional dates and light/dark variants
- `components/CodeReference.tsx` - Building code callout box with external link support
- `components/ProjectGallery.tsx` - Responsive photo gallery using OptimizedImage with hover captions

## Decisions Made
- AuthorByline supports `variant` prop ("light" | "dark") so it works in both dark-background hero sections and light-background body content -- research doc suggested this, plan confirmed it
- ProjectGallery does not pass `size="medium"` to OptimizedImage because that prop does not exist on the actual component -- the research doc example was aspirational, the real component uses responsive srcset automatically
- Exported GalleryPhoto type from ProjectGallery so consuming pages can type their photo arrays

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] Removed non-existent size prop from OptimizedImage usage**
- **Found during:** Task 1 (ProjectGallery creation)
- **Issue:** Plan specified `size="medium"` on OptimizedImage, but the component does not accept a size prop
- **Fix:** Omitted the size prop; OptimizedImage handles responsive sizing via its internal srcset/sizes logic
- **Files modified:** components/ProjectGallery.tsx
- **Verification:** Build succeeds with no TypeScript errors
- **Committed in:** 8153b51

---

**Total deviations:** 1 auto-fixed (1 bug)
**Impact on plan:** Trivial correction -- OptimizedImage already handles sizing correctly without the prop.

## Issues Encountered
None

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- All three foundation components ready for consumption by plans 02-08
- AuthorByline ready for ~295 article pages
- CodeReference ready for ~30-50 technical pages
- ProjectGallery ready for ~20-30 service/location pages

---
*Phase: 06-e-e-a-t-signals*
*Completed: 2026-02-17*

## Self-Check: PASSED

All 3 created files verified on disk. Commit 8153b51 verified in git log.
