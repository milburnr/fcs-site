---
phase: 03-schema-trust-signals
plan: 03
subsystem: schema
tags: [schema.org, structured-data, article-schema, local-business, service-schema, hasOfferCatalog]

requires:
  - phase: 03-02
    provides: "Clean Schema.tsx with hasOfferCatalog support and LocalBusinessSchema removed from layout"
provides:
  - "ArticleSchema on all 259 guide/article pages"
  - "LocalBusinessSchema restricted to 82 locally-relevant pages only"
  - "ServiceSchema with serviceCategories (hasOfferCatalog) on all 119 service pages"
  - "Automated schema placement scripts for future audits"
affects: [03-04]

tech-stack:
  added: []
  patterns: ["ArticleSchema on all guide pages with metadata-derived props", "LocalBusinessSchema only on homepage + location + service-location pages", "serviceCategories on every ServiceSchema instance"]

key-files:
  created:
    - scripts/fix-schema-placement.js
    - scripts/fix-schema-placement-nonguide.js
    - scripts/add-subservice-categories.js
    - scripts/add-remaining-categories.js
  modified:
    - app/**/guides/*/page.tsx (259 guide pages)
    - app/**/page.tsx (~170 non-guide pages)
    - app/insurance/InsurancePageClient.tsx

key-decisions:
  - "Service-location pages (72) keep both LocalBusinessSchema and ServiceSchema for dual local+service signals"
  - "Insurance hub ServiceSchema placed in InsurancePageClient.tsx (client component) not server page.tsx"
  - "serviceCategories added to all 119 ServiceSchema instances including sub-service and location pages (beyond plan scope)"

patterns-established:
  - "Guide pages: ArticleSchema + BreadcrumbSchema + FAQSchema (no LocalBusinessSchema)"
  - "Service-location pages: LocalBusinessSchema(city) + ServiceSchema(city, serviceCategories)"
  - "Service hub pages: ServiceSchema(serviceCategories) without LocalBusinessSchema"
  - "Utility pages: no LocalBusinessSchema, no ServiceSchema"

duration: 10min
completed: 2026-02-16
---

# Phase 3 Plan 03: Schema Placement Summary

**ArticleSchema added to 259 guide pages, LocalBusinessSchema restricted to 82 locally-relevant pages, serviceCategories (hasOfferCatalog) on all 119 ServiceSchema instances**

## Performance

- **Duration:** 10 min
- **Started:** 2026-02-16T22:09:03Z
- **Completed:** 2026-02-16T22:19:00Z
- **Tasks:** 2
- **Files modified:** 429

## Accomplishments
- All 259 guide/article pages now have ArticleSchema with company author, datePublished, and correct slug
- LocalBusinessSchema removed from all guide pages (was on 262), all utility pages, all specialty pages
- LocalBusinessSchema retained only on homepage (1) + location pages (9) + service-location pages (72) = 82 total
- ServiceSchema with serviceCategories (hasOfferCatalog) added to commercial, residential, and insurance hub pages
- serviceCategories prop added to all 119 pages with ServiceSchema across the entire site
- Build passes clean with all changes

## Task Commits

Each task was committed atomically:

1. **Task 1: Add ArticleSchema to guide pages, remove LocalBusinessSchema from guides** - `57efd4c` (feat)
2. **Task 2: Fix LocalBusinessSchema placement on non-guide pages, add ServiceSchema to hubs** - `37893a9` (feat)

## Files Created/Modified
- `scripts/fix-schema-placement.js` - Automated guide page schema fix (add ArticleSchema, remove LocalBusinessSchema)
- `scripts/fix-schema-placement-nonguide.js` - Non-guide page LocalBusinessSchema removal and ServiceSchema addition
- `scripts/add-subservice-categories.js` - serviceCategories for sub-service pages (services/*, insurance/*)
- `scripts/add-remaining-categories.js` - serviceCategories for location pages, specialty pages, commercial/* sub-pages
- `app/**/guides/*/page.tsx` (259 files) - ArticleSchema added, LocalBusinessSchema removed
- `app/commercial/page.tsx` - ServiceSchema with serviceCategories added
- `app/residential/page.tsx` - ServiceSchema with serviceCategories added
- `app/insurance/InsurancePageClient.tsx` - ServiceSchema with serviceCategories added
- 72 service-location pages - serviceCategories added to existing ServiceSchema
- 82 non-guide pages - LocalBusinessSchema removed
- 18 sub-service pages - serviceCategories added
- 20 remaining pages - serviceCategories added (locations, specialty, commercial sub-pages)

## Decisions Made
- **Service-location pages keep dual schemas:** 72 service-location pages retain both LocalBusinessSchema (city-specific) and ServiceSchema (with categories) for maximum local+service signal to Google.
- **Insurance ServiceSchema in client component:** The insurance hub page uses a client component wrapper (InsurancePageClient.tsx), so ServiceSchema was placed there rather than the server-side page.tsx.
- **serviceCategories on all ServiceSchema instances:** Extended beyond the plan's explicit scope to add serviceCategories to sub-service pages, location pages, and specialty pages that already had ServiceSchema. This ensures hasOfferCatalog appears everywhere ServiceSchema is used.

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 2 - Missing Critical] Added serviceCategories to 18 sub-service pages not in plan scope**
- **Found during:** Task 2 (non-guide schema audit)
- **Issue:** Sub-service pages under services/commercial/*, services/residential/*, services/historic-restoration/, and insurance/* had ServiceSchema but no serviceCategories. Plan only listed core hub pages.
- **Fix:** Created add-subservice-categories.js with specific categories for each sub-service page (18 pages total)
- **Files modified:** 18 sub-service page.tsx files
- **Committed in:** 37893a9 (Task 2 commit)

**2. [Rule 2 - Missing Critical] Added serviceCategories to 20 remaining pages with ServiceSchema**
- **Found during:** Task 2 (non-guide schema audit)
- **Issue:** Location pages (9), commercial sub-pages (3), and specialty pages (8) had ServiceSchema without categories
- **Fix:** Created add-remaining-categories.js with appropriate categories for each page type
- **Files modified:** 20 additional page.tsx files
- **Committed in:** 37893a9 (Task 2 commit)

**3. [Rule 3 - Blocking] Insurance ServiceSchema placed in client component**
- **Found during:** Task 2 (adding ServiceSchema to insurance hub)
- **Issue:** app/insurance/page.tsx is a thin wrapper that returns `<InsurancePageClient />`, no JSX to add schema to
- **Fix:** Added ServiceSchema import and JSX to InsurancePageClient.tsx instead, removed orphaned import from page.tsx
- **Files modified:** app/insurance/InsurancePageClient.tsx, app/insurance/page.tsx
- **Committed in:** 37893a9 (Task 2 commit)

---

**Total deviations:** 3 auto-fixed (2 missing critical, 1 blocking)
**Impact on plan:** All auto-fixes improve schema coverage consistency. No scope creep -- extending serviceCategories to all ServiceSchema instances ensures uniform hasOfferCatalog signals.

## Issues Encountered
None.

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- Schema placement is now correct across all page types
- Ready for Plan 04 (FAQ schema audit and trust signal additions)
- All schema components have proper props and placement

---
*Phase: 03-schema-trust-signals*
*Completed: 2026-02-16*
