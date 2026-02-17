---
phase: 04-hub-page-expansion
plan: 01
subsystem: ui
tags: [nextjs, seo, pillar-page, faq-schema, service-schema, parallax, contact-form]

requires:
  - phase: 03-schema-trust-signals
    provides: Schema components (BreadcrumbSchema, ServiceSchema), trust line patterns, NAP data
provides:
  - Services hub pillar page with 2000+ words, FAQ schema, links to all 11 child service pages
  - Contact page with trust content, two-column form layout, service area coverage
affects: [05-location-pages, 06-content-depth, 07-sb4d]

tech-stack:
  added: []
  patterns:
    - "Pillar page architecture: hero > trust strip > prose intro > service card grids by silo > parallax form > FAQ > CTA > internal links"
    - "Two-column contact layout: trust content (lg:col-span-3) + sticky form (lg:col-span-2)"

key-files:
  modified:
    - app/services/page.tsx
    - app/contact/page.tsx

key-decisions:
  - "Services page uses 5-column grid (lg:grid-cols-5) for contact two-column layout to achieve 60/40 split"
  - "Insurance service cards use text-only layout (no images) to differentiate from image-heavy commercial cards"
  - "Contact page location shows city + state only (SAB decision from Phase 03-04)"
  - "City badges on contact page link to /locations/{slug}/ pages rather than plain spans"

patterns-established:
  - "Hub pillar page template: intro prose (~500 words) + service card grids with AI images + parallax form + FAQ with schema"
  - "Contact page trust-alongside-form layout for conversion pages"

duration: 7min
completed: 2026-02-16
---

# Phase 4 Plan 1: Hub Page Expansion Summary

**Services hub rewritten from 94 to 2000+ words as comprehensive pillar page with three silo sections, FAQ schema, and parallax form; contact page expanded from 115 to ~600 words with two-column trust-plus-form layout**

## Performance

- **Duration:** 7 min
- **Started:** 2026-02-16T23:59:16Z
- **Completed:** 2026-02-17T00:06:04Z
- **Tasks:** 2
- **Files modified:** 2

## Accomplishments
- Services hub is now a comprehensive pillar page with introduction prose, commercial/residential/insurance service card grids, parallax form section, 7-item FAQ with schema, trust indicators, and links to all 11 child service pages
- Contact page expanded with two-column layout (trust content alongside form), "What to Expect" process section, contact details grid, service area coverage with linked city badges
- Zero instances of banned CTA language ("Free Estimate", "Free Quote", "No Job Too Small") on either page
- Both pages include BreadcrumbSchema; services page adds ServiceSchema with 11 service categories

## Task Commits

Each task was committed atomically:

1. **Task 1: Rewrite services hub page to 2,000+ word pillar page** - `4771ec1` (feat)
2. **Task 2: Expand contact page to content-rich landing page** - `0cb0b4a` (feat)

## Files Created/Modified
- `app/services/page.tsx` - Comprehensive services pillar page with hero, trust strip, intro prose, 3 service silo sections with image cards, parallax form, FAQ, CTA, internal links
- `app/contact/page.tsx` - Content-rich contact landing page with two-column layout, trust content, "What to Expect" section, service area coverage with linked city badges

## Decisions Made
- Used 5-column grid (3+2) for contact page to achieve proper 60/40 trust-content-to-form ratio
- Insurance service cards rendered without images (text-only cards) to visually differentiate from image-heavy commercial cards and keep the section cleaner
- Contact page city badges are links to location pages (not plain spans) for better internal linking
- Services page FAQ targets broad "construction services Tampa" queries rather than service-specific queries (those belong on individual service pages)

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered
- Next.js build showed `_ssgManifest.js` ENOENT error on first attempt (known transient @next/swc version mismatch issue). Resolved by cleaning .next directory and rebuilding. Not related to code changes.

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- Services hub now links to all child service pages across three silos, providing strong internal link architecture
- Contact page trust content supports conversion optimization
- Ready for Plan 02 (commercial hub expansion) and Plan 03 (insurance hub expansion)

## Self-Check: PASSED

All files exist, all commits verified.

---
*Phase: 04-hub-page-expansion*
*Completed: 2026-02-16*
