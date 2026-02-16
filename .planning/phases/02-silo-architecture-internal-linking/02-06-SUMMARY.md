# Plan 02-06 Summary: Pre-deploy Validation & Sitemap Regeneration

## Status: COMPLETE
Duration: ~15min | Commits: 7456d5a, 0648318

## What Was Done

### Task 1: Pre-deploy Validation Script
- Created `scripts/validate-pre-deploy.js` with 6 automated checks:
  1. Meta titles present on all pages
  2. Canonical URLs correct (self-referencing, full domain, not redirect sources)
  3. No broken internal links (scans page.tsx + client components)
  4. No redirect chains in netlify.toml
  5. Sitemap-to-output consistency (both directions)
  6. No redirected pages in sitemap

### Task 2: Fix Broken Internal Links
- Created `scripts/fix-broken-links.js` with 24 URL mappings
- Fixed 36 broken links across 21 files (commit 7456d5a)
- Common patterns: old `/services/` prefixes, missing silo paths, fire-damage→fire-restoration

### Task 3: Classify & Move 69 Remaining Articles
- Initial validation found 32 canonical mismatches from unclassified articles at root paths
- Classified and moved ALL 69 remaining articles into silo directories:
  - 30 commercial, 3 residential, 8 insurance (first batch)
  - 28 more via second pass (second batch)
- Updated `seo/article-classification.json`: 259 total (190 commercial, 24 residential, 45 insurance)
- Added 69 new redirects to netlify.toml
- Removed 2 stale redirects (insurance-restoration-brandon/sarasota are live pages)

### Task 4: Sitemap Regeneration
- Regenerated `public/sitemap.xml` with 424 URLs

## Final Validation Results
- All 6 checks pass with 0 failures
- BFS: 418/428 pages reachable (97.7%)
- Only 10 unreachable: utility/legacy pages (/404/, /privacy/, /team/, etc.) -- expected
- All key pages within 2 clicks of homepage

## Files Changed
- 69 article page.tsx files moved to silo directories
- 21 files with broken link fixes
- `netlify.toml` -- 69 new redirects, 2 stale removed
- `seo/article-classification.json` -- 190→259 articles
- `public/sitemap.xml` -- regenerated (424 URLs)
- NEW: `scripts/validate-pre-deploy.js`
- NEW: `scripts/fix-broken-links.js`
- NEW: `scripts/list-broken-links.js` (diagnostic)
- NEW: `scripts/move-remaining-articles.js` (diagnostic)
