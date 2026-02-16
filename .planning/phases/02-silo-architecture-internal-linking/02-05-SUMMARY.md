# Plan 02-05 Summary: Orphan & Crawl Depth Audit

## Status: COMPLETE
Duration: ~5min | Commits: 911b0af

## What Was Done

### Task 1: Build Link Graph & BFS Analysis
- Created `scripts/audit-link-graph.js` -- source-code link graph builder (scans page.tsx + shared nav)
- Created `scripts/bfs-build-output.js` -- HTML build-output BFS (authoritative, captures dynamic components)
- Source-code audit misses RelatedServices/NearbyLocations/HubRelatedArticles dynamic links
- Build-output BFS is the accurate measure of crawl depth and reachability

### Task 2: Fix Orphan Pages & Crawl Depth
**Hub → Guides links (critical fix):**
- `/commercial/` → `/commercial/guides/` via InternalLinks + HubRelatedArticles (with correct allArticlesHref)
- `/residential/` → `/residential/guides/` via service links section
- `/insurance/` → `/insurance/guides/` via relatedLinks array

**Fixed stale URLs on commercial hub:**
- `/sb4d-compliance-guide/` → `/commercial/guides/sb4d-compliance-guide/`
- `/cpm-scheduling-commercial-construction/` → `/commercial/guides/cpm-scheduling-commercial-construction/`

**Added location grids for unreachable service+location pages:**
- `/commercial/condo-remediation/` -- converted static divs to `<Link>` for 8 condo-remediation-{city} pages
- `/insurance/` -- added new Service Areas section linking to 8 insurance-restoration-{city} pages

## Results

| Metric | Before | After |
|--------|--------|-------|
| Reachable pages | 152/428 (35%) | 368/428 (86%) |
| Unreachable pages | 276 | 60 |
| Key pages at depth 3+ | 3 guides UNREACHABLE | All within 2 clicks |
| Insurance-restoration locations | UNREACHABLE | Depth 2 |
| Condo-remediation locations | UNREACHABLE | Depth 2-3 |

## Remaining 60 Unreachable Pages (Expected)

- **~49 unclassified thin articles** -- `-in-tampa` suffix pages not in original 190 classification. Need separate classification pass (added to Pending Todos).
- **~6 utility pages** -- `/404/`, `/privacy/`, `/terms/`, `/privacy-policy/`, `/terms-and-conditions/`, `/premium-homepage/` -- expected (noindex/redirected)
- **~5 legacy pages** -- `/engineering/`, `/other-services/`, `/our-process/`, `/team/`, `/team-members/` -- candidates for consolidation/redirect

## Depth Distribution

```
Depth 0: 1 page   (homepage)
Depth 1: 32 pages (hubs, locations, nav-linked)
Depth 2: 86 pages (service pages, guides indexes, service+location)
Depth 3: 196 pages (guide articles, deep service+location)
Depth 4: 43 pages
Depth 5: 9 pages
Depth 6: 1 page
```

## Files Changed
- `app/commercial/page.tsx` -- guides link, fixed featured article URLs
- `app/residential/page.tsx` -- guides link
- `app/insurance/InsurancePageClient.tsx` -- guides link, location grid
- `app/commercial/condo-remediation/page.tsx` -- location links
- `scripts/audit-link-graph.js` -- new (source-code audit)
- `scripts/bfs-build-output.js` -- new (build-output BFS)
- `seo/link-graph-report.json` -- new (audit output)
