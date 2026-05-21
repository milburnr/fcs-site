# FCS Site Audit — Action List
**Site:** floridaconstructionspecialists.com
**Source:** Ahrefs Site Audit, today's crawl (2026-04-30 01:26 AM)
**Comparison baseline:** today 12:38 AM (this is a brand-new run — every issue shows as NEW vs the empty baseline; numbers are absolute counts, not deltas)
**Total issues:** 29 categories. Spread across high/medium/low severity below.

---

## How to read this file

Each item shows:
- **Count** — number of pages affected
- **What it means** — plain English
- **Fix approach** — what needs to happen
- **Effort** — low / medium / high
- **Auto-fixable?** — can a script do it, or does it need manual work

Work top-down. Fixing higher-severity items often clears lower-severity items as a side effect (e.g., fixing broken images clears the "page has broken image" finding too).

---

## 🔴 HIGH PRIORITY — Errors that hurt rankings or user trust

### Group A — Broken images (102 total findings, big visible problem)

#### A1. Page has broken image — 70 pages
**What it means:** 70 pages have at least one `<img src>` pointing to a URL that returns a 404 or doesn't load.
**Fix approach:** Get the list from Ahrefs (click into the issue → see which pages and which image URLs). Either re-upload the missing images to R2/the CDN, or replace the references with working URLs. Likely root cause: a batch of image paths got renamed or the R2 bucket lost some keys.
**Effort:** Medium — depends on whether it's one missing folder (easy) or scattered (harder)
**Auto-fixable?** Partial — a script can swap dead URLs for a placeholder, but real fixes need the actual missing images.

#### A2. Image broken — 21 images
**What it means:** Same problem from the image side — 21 distinct image URLs are dead. Likely overlap with A1.
**Fix approach:** Cross-reference with A1. If most appear in A1 too, fixing A1 clears this.
**Effort:** Bundled with A1.

#### A3. Image file size too large — 11 images
**What it means:** 11 images exceed Ahrefs' size threshold (typically >100 KB without optimization).
**Fix approach:** Get the list from Ahrefs, run them through the same AVIF/WebP pipeline used on lnc — should drop sizes 60-80%.
**Effort:** Low — script-driven once we have the list.
**Auto-fixable?** Yes.

### Group B — Broken pages and links (95 findings)

#### B1. 404 page — 22 pages
**What it means:** 22 URLs Ahrefs hit returned a "page not found." Either the URLs shouldn't exist (fix internal links pointing to them) or the pages should exist (restore them).
**Fix approach:** Get the URL list. For each: decide "should this exist?"
- **Yes** → restore the page or add a 301 redirect to the new location
- **No** → find what's linking to it and fix the link

**Effort:** Medium — has to be done URL by URL
**Auto-fixable?** No — needs editorial decisions per URL.

#### B2. 4XX page — 22 pages
**What it means:** Likely the same 22 URLs from B1 (404 is the most common 4XX response). Verify overlap before treating separately.
**Effort:** Bundled with B1 if overlap is full.

#### B3. Timed out — 8 pages
**What it means:** 8 pages took too long for Ahrefs to load (their default timeout is 30s).
**Fix approach:** Identify which pages, then load them in a browser to see if they're slow. Common causes: a slow third-party embed, an unoptimized image, a database query if dynamic.
**Effort:** Medium — needs investigation per page.

#### B4. Page has links to broken page (indexable) — 26 pages
**What it means:** 26 indexable pages have at least one link pointing to a 404. Hurts user experience and Google trust.
**Fix approach:** Once B1 is resolved, this clears (links now point at working pages or redirects). Don't fix this directly — fix the broken pages.
**Effort:** Bundled with B1.

#### B5. Page has links to broken page (not indexable) — 13 pages
**What it means:** Same as B4 but on noindex pages. Lower priority but worth cleaning.
**Effort:** Bundled with B1.

### Group C — Sitemap problems (27 findings)

#### C1. Non-canonical page in sitemap — 15 pages
**What it means:** Sitemap.xml lists URLs that have a `<link rel="canonical">` pointing somewhere else. Confusing signal to Google.
**Fix approach:** Either:
- Remove the non-canonical URLs from the sitemap (preferred)
- Or change the canonical tag to point at the URL in the sitemap
**Effort:** Low — usually a one-line fix in the sitemap generator.
**Auto-fixable?** Yes (script).

#### C2. Page from sitemap timed out — 7 pages
**What it means:** 7 sitemap URLs failed to load within Ahrefs' timeout. Likely overlap with B3.
**Effort:** Bundled with B3.

#### C3. Noindex page in sitemap — 5 pages
**What it means:** Sitemap is telling Google "crawl these pages" but the pages have `<meta name="robots" content="noindex">`. Contradictory signal.
**Fix approach:** Either remove from sitemap (if intentionally noindex) or remove the noindex tag (if they should be indexed).
**Effort:** Low.
**Auto-fixable?** Yes (script).

### Group D — Orphan pages (8 findings)

#### D1. Orphan page indexable — 4 pages
**What it means:** 4 pages exist and are crawlable, but no internal link points to them. Google deprioritizes orphans.
**Fix approach:** For each, decide: should it exist? If yes, link to it from a logical parent (header, footer, related content). If no, remove it.
**Effort:** Low.

#### D2. Orphan page not indexable — 4 pages
**What it means:** Same as D1 but pages are noindex. Lower priority but still worth resolving.
**Effort:** Low.

---

## 🟡 MEDIUM PRIORITY — Worth fixing soon

### M1. Missing alt text — 11 images
**What it means:** 11 images have no `alt` attribute. Hurts accessibility and image SEO.
**Fix approach:** Add descriptive alt text to each. For decorative images, use `alt=""`.
**Effort:** Low.
**Auto-fixable?** Partial — a script can flag them, alt text writing is manual.

### M2. Meta description too short (indexable) — 5 pages
**What it means:** Meta description is shorter than ~70 chars. Google fills the gap with arbitrary text from the page.
**Fix approach:** Rewrite meta descriptions to 140-160 chars each.
**Effort:** Low.
**Auto-fixable?** No — needs human-written copy.

---

## 🔵 LOW PRIORITY — Notices, mostly cosmetic or batch-fixable

### L1. Title too long — 15 pages
**What it means:** SERP titles get truncated by Google around 60 chars. Same finding we just fixed on lnc.
**Fix approach:** Same playbook as lnc — shorten the brand suffix, or rewrite individual page titles.
**Effort:** Low.

### L2. Page has links to redirect (indexable) — 432 pages
**What it means:** 432 pages contain links that hit a redirect chain instead of the final URL. Slows crawl and dilutes link equity.
**Fix approach:** Run a script that crawls internal links, follows each redirect, and updates the source link to the final destination.
**Effort:** Low (script).
**Auto-fixable?** Yes — straightforward find/replace once you have the redirect map.

### L3. Page has links to redirect (not indexable) — 20 pages
**What it means:** Same as L2 on noindex pages. Bundle with L2.
**Effort:** Bundled with L2.

### L4. Page has only one dofollow incoming internal link (indexable) — 148 pages
**What it means:** These pages get only one internal link each. Weak internal link equity.
**Fix approach:** Add 1-2 more internal links from related content to each. Often resolved by adding "related articles" sections or topic-cluster hubs.
**Effort:** Medium — the strategic version is high-value but slow.

### L5. Page has only one dofollow incoming internal link (not indexable) — 3 pages
**Effort:** Bundled with L4.

### L6. 3XX redirect — 23 redirects
**What it means:** Redirects exist (this is INFO, not a problem). Just an inventory.
**Fix approach:** No action needed unless they show up as redirect chains (see L8).

### L7. HTTP to HTTPS redirect — 1
**What it means:** 1 URL still has an http→https redirect. Normal and expected.
**Fix approach:** No action.

### L8. Redirect chain — 1
**What it means:** Somewhere a redirect goes A→B→C instead of A→C. Wastes crawl budget.
**Fix approach:** Find the chain and collapse to a single hop.
**Effort:** Low.
**Auto-fixable?** Yes (script).

### L9. Noindex page — 5 pages

### L10. Noindex follow page — 5 pages
**What L9/L10 mean:** Inventory of pages with `noindex` directive. INFO-level. Action only needed if any of them shouldn't be noindex'd (worth a manual review).

### L11. Meta description too long — 2 pages
**Fix approach:** Trim to 160 chars.
**Effort:** Trivial.

### L12. Meta description too short (not indexable) — 2 pages
**Fix approach:** Bundled with M2.

### L13. Pages to submit to IndexNow — 432 pages
**What it means:** Ahrefs is suggesting you submit URLs to IndexNow (Bing/Yandex push-indexing protocol).
**Fix approach:** Already have an `add-all-canonicals.js` and similar scripts in the project. Adapt and run if IndexNow integration is desired.
**Effort:** Low.

### L14. Structured data has Google rich results validation error — 161 pages
**What it means:** Schema.org JSON-LD on 161 pages has at least one validation issue. Could prevent rich snippets in SERPs.
**Fix approach:** Pull a sample page, run it through Google's Rich Results Test, fix the schema template that generated it.
**Effort:** Medium — one fix in the template usually clears all 161.
**Auto-fixable?** Yes — once root cause is identified.

---

## Recommended order of operations

1. **Get the URL lists** for groups A, B, and C from Ahrefs (click each issue → "view affected URLs"). Without these, can't start.
2. **Fix images first** (Group A) — biggest visible problem and easiest to script
3. **Fix broken pages** (Group B) — most impactful for SEO
4. **Clean sitemap** (Group C) — quick wins
5. **Add internal links to orphans** (Group D)
6. **Fix structured data template** (L14) — high page count, single template fix
7. **Fix redirect chains and link-to-redirect** (L2, L8) — script-driven
8. **Polish titles and meta descriptions** (L1, M2) — manual content work
9. **Submit to IndexNow** (L13) — once everything else is clean

## What I'd kick off as the first GSD phase

Pick one of:
- **Phase: "Image cleanup"** — A1+A2+A3 bundled. Script-driven, biggest visible win.
- **Phase: "404 sweep"** — B1+B2+B4+B5 bundled. Highest SEO impact, manual editorial decisions.

Both are 4-8 hours of agent work each.

---

## Notes

- Numbers under "Change" all show ⬆ from 0 because this is a brand-new audit baseline — all 29 categories are technically "new" since 12:38 AM. Real comparisons will start showing on the next crawl.
- Existing `AUDIT-FIXES.md` (from 2026-04-25) is from a different audit cycle and should not be merged — work that one to closure separately.
