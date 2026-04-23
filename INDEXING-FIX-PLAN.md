# FCS Indexing Fix Plan

**Created:** 2026-03-31
**Problem:** ~200 of 433 URLs not indexed by Google
**Root causes:** Weak internal linking, stale sitemap dates, WP cruft, content similarity

---

## Phase 11: Get Indexed (4 tasks)

### 11-01: Fix Sitemap lastmod Dates (Quick Win)
**Impact:** HIGH | **Effort:** 30 min | **Files:** 1 script, 1 output

The current `scripts/generate-sitemap.js` sets `lastmod: TODAY` for every URL — Google sees all 433 pages as "changed" on the same date, which is the same as saying none of them changed. Fix it to use actual git commit dates per file.

**What to do:**
1. Modify `scripts/generate-sitemap.js` to use `git log -1 --format=%aI -- <filepath>` for each page's lastmod
2. Fall back to `TODAY` only for files with no git history
3. Regenerate `public/sitemap.xml`
4. Verify dates are varied across pages

**Verification:**
```bash
node scripts/generate-sitemap.js
grep "<lastmod>" public/sitemap.xml | sort -u | wc -l  # Should be >1
```

---

### 11-02: Add RelatedPages Component to All Service-Location Pages (Biggest Impact)
**Impact:** CRITICAL | **Effort:** 2-3 hours | **Files:** 1 new component + ~72 service-location pages

The homepage only links to 52 internal pages. ~380 pages have weak or zero incoming links from other pages. Google deprioritizes poorly-linked pages.

**What to do:**
1. Create `components/RelatedServiceLocations.tsx` — a "Related Services in [City]" + "This Service in Other Cities" component
2. The component takes `currentCity` and `currentService` props and renders:
   - **Same city, different services:** e.g., on `/commercial-construction-tampa/` → links to `/balcony-reconstruction-tampa/`, `/insurance-restoration-tampa/`, etc.
   - **Same service, different cities:** e.g., on `/commercial-construction-tampa/` → links to `/commercial-construction-clearwater/`, `/commercial-construction-brandon/`, etc.
3. Use data from `lib/locationData.ts` and `lib/constants.ts` (cities and services already defined there)
4. Add the component to all 72 service-location pages, placed before the CTA section
5. Style: grid of link cards matching existing design (bg-white border rounded-lg shadow-sm)

**Key constraint:** Don't link to pages that don't exist. Cross-reference against actual `app/` directory to build the link set.

**Verification:**
```bash
npm run build  # Must pass
# Spot-check 3 pages for correct links
# Run BFS reachability check if script exists
```

---

### 11-03: Clean WordPress Legacy Cruft
**Impact:** MEDIUM | **Effort:** 30 min | **Files:** directories

Old WordPress plugin files in `public/wp-content/` and `out/wp-content/` waste crawl budget. Google crawls these dead files instead of real content.

**What to do:**
1. Delete `public/wp-content/plugins/` directory (keep `public/wp-content/uploads/` — used for image proxy rewrites)
2. Delete entire `out/` directory (stale build output, not deployed)
3. Add to `public/robots.txt`:
   ```
   Disallow: /wp-content/plugins/
   ```
4. Verify `public/_redirects` image proxy rules still work (they reference `/wp-content/uploads/`, not `/wp-content/plugins/`)

**Verification:**
```bash
# Confirm image rewrites survive
grep "wp-content" public/_redirects
# Build and deploy
npm run build
```

---

### 11-04: Resubmit Sitemap to Google After Deploy
**Impact:** HIGH | **Effort:** 15 min | **Files:** 0 (API call)

After deploying fixes from 11-01 through 11-03, force Google to re-process the sitemap.

**What to do:**
1. Deploy to Netlify (git push)
2. Use the Google Indexing API service account to ping sitemap:
   ```bash
   curl "https://www.google.com/ping?sitemap=https://floridaconstructionspecialists.com/sitemap.xml"
   ```
3. If we have Search Console API access, submit sitemap there too
4. Run the `submit-non-indexed.js` script if it exists to submit individual unindexed URLs

**Verification:**
- Check Google Search Console in 48-72 hours for increased "Indexed" count

---

## Housekeeping: Archive Old Planning Docs

Move completed planning/audit docs to `archive/` to declutter root. These are all from Jan-Feb 2026 and Phases 1-10 are complete.

**Move to `archive/`:**
- AUDIT-EXECUTIVE-SUMMARY.md
- AUDIT-README.md
- AUDIT-SUMMARY-FINAL.md
- CONTENT-AUDIT-ACTION-PLAN.md
- CONTENT-FIX-LOG.md
- CONTENT-WORK-PLAN.md
- CONTENT_PLAN.md
- FCS-AUDIT-2026-02-02.md
- FCS-BROKEN-ITEMS-ANALYSIS.md
- FCS-CLIENT-PRESENTATION.md
- FCS-ENHANCEMENT-PLAN.md
- FCS-FULL-AUDIT-2026-02-02.md
- FCS-IMAGE-FIX-MAPPING.md
- FCS-SEO-IMPROVEMENTS-2026-02-02.md
- FCS-TASK-LIST.md
- FCS-VISION-AND-GAP-ANALYSIS.md
- FIX-QUICK-REFERENCE.md
- IMPLEMENTATION-TASKS.md
- RESTORATION-TOPICAL-MAP.md
- "Rebuilding FCS Website_ Strategy and SEO.md"
- SCHEMA-AUDIT-REPORT.md
- SEO-AUDIT-FINDINGS.md
- SEO-AUDIT-REPORT.md
- THIN-CONTENT-AUDIT.md
- content-gap-report.md
- form-specifications.md
- redirect-map.md

**Keep at root:**
- CLAUDE.md (project rules — active)
- INDEXING-FIX-PLAN.md (this plan — active)

---

## Execution Order

1. **11-01** (sitemap dates) — fastest, most straightforward
2. **11-03** (WP cruft cleanup) — also fast, reduces crawl waste
3. **11-02** (RelatedPages component) — biggest impact but most work
4. **Housekeeping** (archive docs) — can be done anytime
5. **11-04** (resubmit) — after deploying 01-03
6. **Build + deploy** — `npm run build && git push`

---

## Success Metric

**Before:** ~200 of 433 URLs not indexed
**Target:** <50 unindexed URLs within 30 days of deploy
**How to check:** Google Search Console → Coverage → "Valid" count
