---
phase: 01-content-audit-cleanup
plan: 01
subsystem: seo
tags: [robots.txt, meta-tags, word-count, audit, content-quality]

requires: []
provides:
  - "Clean robots.txt with correct sitemap reference"
  - "Zero keywords meta tags across all 175 page/layout files"
  - "Word count audit JSON with 495 pages categorized (thin/moderate/solid/strong)"
  - "Reusable scripts: remove-keywords-meta.js, audit-word-count.js"
affects: [01-02, 01-03, 01-04, 01-05, 01-06, 01-07]

tech-stack:
  added: []
  patterns:
    - "SEO audit scripts output to seo/ directory as JSON"
    - "Metadata cleanup scripts in scripts/ directory"

key-files:
  created:
    - scripts/remove-keywords-meta.js
    - seo/word-count-audit.json
  modified:
    - public/robots.txt
    - scripts/audit-word-count.js
    - app/layout.tsx
    - "174 app/*/page.tsx files"

key-decisions:
  - "Removed Crawl-delay directive (not supported by Googlebot, unnecessary for static site)"
  - "Keywords removal targets only metadata exports, preserves keywords in data objects"
  - "Word count categories: thin (<300), moderate (300-499), solid (500-999), strong (1000+)"

patterns-established:
  - "SEO audit data stored as JSON in seo/ directory for downstream plan consumption"

duration: 5min
completed: 2026-02-16
---

# Phase 1 Plan 1: Baseline Metadata & Word Count Audit Summary

**Clean robots.txt, remove obsolete keywords meta from 175 files, and produce word count audit categorizing 495 pages as thin/moderate/solid/strong**

## Performance

- **Duration:** 5 min
- **Started:** 2026-02-16T02:56:24Z
- **Completed:** 2026-02-16T03:01:22Z
- **Tasks:** 3
- **Files modified:** 178

## Accomplishments
- robots.txt cleaned: removed Crawl-delay, kept minimal allow-all + sitemap config
- Removed keywords meta tag from all 175 files (174 page.tsx + layout.tsx) across 3 format variants
- Word count audit generated: 495 pages categorized -- 97 thin, 34 moderate, 158 solid, 206 strong

## Task Commits

Each task was committed atomically:

1. **Task 1: Verify and fix robots.txt (AUDIT-09)** - `b172709` (fix)
2. **Task 2: Remove keywords meta tag from all pages (AUDIT-06)** - `bc363d6` (fix)
3. **Task 3: Run word count audit and categorize all pages (AUDIT-01)** - `18df7e6` (feat)

## Files Created/Modified
- `public/robots.txt` - Minimal robots.txt: allow all, sitemap reference, no crawl-delay
- `scripts/remove-keywords-meta.js` - Reusable script to strip keywords from metadata exports
- `scripts/audit-word-count.js` - Updated with category system and JSON output to seo/
- `seo/word-count-audit.json` - 495 pages with word counts and thin/moderate/solid/strong categories
- `app/layout.tsx` - Keywords array removed from root metadata
- 174 `app/*/page.tsx` files - Keywords property removed from metadata exports

## Decisions Made
- Removed Crawl-delay: 1 directive -- not supported by Googlebot and unnecessary for a static site
- Keywords removal script targets only the `export const metadata: Metadata = {...}` block, preserving `keywords` properties in data objects (e.g., commercialClusters array in commercial/page.tsx)
- Word count uses words > 2 chars extracted from JSX text content (excludes imports, metadata, code)

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] Fixed keywords removal script for files with both metadata and data keywords**
- **Found during:** Task 2 (keywords removal)
- **Issue:** Initial regex approach matched `keywords` in data objects before metadata keywords, causing commercial/page.tsx metadata keywords to survive
- **Fix:** Rewrote removeKeywords() to first isolate the metadata export block via brace-depth parsing, then apply removal regexes only within that block
- **Files modified:** scripts/remove-keywords-meta.js, app/commercial/page.tsx (manual fix for the one file)
- **Verification:** Node script confirmed 0 metadata blocks contain keywords
- **Committed in:** bc363d6 (Task 2 commit)

---

**Total deviations:** 1 auto-fixed (1 bug)
**Impact on plan:** Bug fix was necessary for correctness. No scope creep.

## Issues Encountered
None beyond the deviation above.

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- robots.txt is correct and ready for crawling
- All pages have clean metadata (no obsolete keywords)
- Word count audit at seo/word-count-audit.json is ready for downstream plans (01-02 through 01-07) to identify thin content, prioritize rewrites, and track improvements
- 97 thin pages identified as priority targets for content improvement

## Self-Check: PASSED

All 6 key files verified on disk. All 3 task commits verified in git log.

---
*Phase: 01-content-audit-cleanup*
*Completed: 2026-02-16*
