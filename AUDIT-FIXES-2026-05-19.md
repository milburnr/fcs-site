# AUDIT-FIXES — 2026-05-19

- **Source:** `content-ops/tools/site-audit/runs/fcs/2026-05-19/audit.md`
- **Project:** `/Volumes/External-2TB/Projects/Clients/fcs-final` (Next.js static export → Netlify, **pnpm**)
- **Site:** floridaconstructionspecialists.com
- **Supersedes:** `AUDIT-FIXES.md` (2026-04-25) — that earlier brief is left in place for history.

## How to use this brief

Work phases top-to-bottom. Deploy + verify each phase before moving on (broken-image fixes especially — they depend on Netlify behavior that's hard to reproduce locally). Don't skip the **Do NOT touch** list at the end.

```bash
cd /Volumes/External-2TB/Projects/Clients/fcs-final
pnpm install
pnpm run build              # produces /out/
pnpm run dev -- --port 4250 # 3000 is occupied by Graphiti MCP in this workspace
```

---

## PHASE 1: Visible defects (do first)

### Task 1.1 — Redirect dead URLs to the homepage (decision: 2026-05-21)

**Decision:** Rich opted for redirects-only — no dedicated `/testimonials/` or `/reviews/` pages. Three URLs to handle, all → homepage.

**Why:** `/blog/`, `/reviews/`, `/testimonials/` all 404 on production. No internal source links to them; traffic comes from GBP citations, social bios, historical WordPress references, and humans guessing. Redirecting to `/` (rather than building dedicated pages) keeps the surface area small and ships in one config edit.

**File:** `netlify.toml`

**Insert** before the existing `# 301 Redirects for Duplicate Page Consolidation` section, after the trailing-slash block:

```toml
# ===========================================
# Natural-URL redirects — URLs people type/cite that don't exist
# Decision 2026-05-21: redirect to homepage; no dedicated pages.
# ===========================================
[[redirects]]
  from = "/blog/"
  to = "/"
  status = 301

[[redirects]]
  from = "/blog/*"
  to = "/"
  status = 301

[[redirects]]
  from = "/reviews/"
  to = "/"
  status = 301

[[redirects]]
  from = "/reviews/*"
  to = "/"
  status = 301

[[redirects]]
  from = "/testimonials/"
  to = "/"
  status = 301

[[redirects]]
  from = "/testimonials/*"
  to = "/"
  status = 301
```

**Acceptance:**
- `curl -sI https://floridaconstructionspecialists.com/blog/` → 301 → `/`
- `curl -sI https://floridaconstructionspecialists.com/blog/anything/` → 301 → `/`
- `curl -sI https://floridaconstructionspecialists.com/reviews/` → 301 → `/`
- `curl -sI https://floridaconstructionspecialists.com/testimonials/` → 301 → `/`

**Note on the homepage's existing `aggregateRating` JSON-LD:** since `/reviews/` is no longer being built, the `aggregateRating` schema stays on `/` (which is still a Google-sanctioned location for it). No schema move needed.

---

### Tasks 1.2 and 1.3 — REMOVED

Per the 2026-05-21 decision, no dedicated `/testimonials/` or `/reviews/` pages are being built. Both URLs are redirected to `/` in Task 1.1.

---

### Task 1.4 — Fix broken images (24 URLs, 63 page-impacts)

**Why:** 24 unique image URLs return 404 across the site. Worst: `/images/hurricane-ian/hurricane-ian-display.webp` on **26 pages**.

**Diagnostic FIRST.** Before adding rules, find out why the existing `public/_redirects` rules aren't firing. The file contains:

```
/images/Ian-2/ian-2-display.webp  https://pub-293ff74728cf48d6827f2ddadc36947a.r2.dev/images/ian-2/ian-2-large.webp  200
```

…but the live site returns 404 on `/images/Ian-2/ian-2-display.webp`. Direct R2 fetch returns 200. Two hypotheses:

1. **`_redirects` isn't reaching the deploy.** Check `out/_redirects` exists after `pnpm run build`. If missing, fix the `public/` → `out/` copy step.
2. **`netlify.toml` rule precedence is shadowing.** netlify.toml wins on conflict — but no `/images/*` rule exists in netlify.toml that should conflict. Worth checking the Netlify dashboard "Redirects" tab for the compiled rule list; look for the `/images/Ian-2/...` rule.

**After the deploy is healthy:** several broken images **don't have rules yet** in `_redirects`. Add to `public/_redirects` (before the catch-all R2 proxy at the bottom):

```
/images/hurricane-ian/hurricane-ian-display.webp  https://pub-293ff74728cf48d6827f2ddadc36947a.r2.dev/images/hurricane-ian/hurricane-ian-large.webp  200
/images/custom-home-construction-1/custom-home-construction-1-display.webp  https://pub-293ff74728cf48d6827f2ddadc36947a.r2.dev/images/custom-home-construction-1/custom-home-construction-1-large.webp  200
/images/custom-home-construction-3/custom-home-construction-3-display.webp  https://pub-293ff74728cf48d6827f2ddadc36947a.r2.dev/images/custom-home-construction-3/custom-home-construction-3-large.webp  200
/images/hurricane-restoration-construction/hurricane-restoration-construction-display.webp  https://pub-293ff74728cf48d6827f2ddadc36947a.r2.dev/images/hurricane-restoration-construction/hurricane-restoration-construction-large.webp  200
/images/i9/i9-display.webp  https://pub-293ff74728cf48d6827f2ddadc36947a.r2.dev/images/i9/i9-large.webp  200
/images/maya-patel/maya-patel-display.webp  https://pub-293ff74728cf48d6827f2ddadc36947a.r2.dev/images/maya-patel/maya-patel-large.webp  200
/images/rebuild-superjumbo/rebuild-superjumbo-display.webp  https://pub-293ff74728cf48d6827f2ddadc36947a.r2.dev/images/rebuild-superjumbo/rebuild-superjumbo-large.webp  200
/images/replacing-roof-decking-and-rafters/replacing-roof-decking-and-rafters-display.webp  https://pub-293ff74728cf48d6827f2ddadc36947a.r2.dev/images/replacing-roof-decking-and-rafters/replacing-roof-decking-and-rafters-large.webp  200
/images/stages-of-construction-project-management/stages-of-construction-project-management-display.webp  https://pub-293ff74728cf48d6827f2ddadc36947a.r2.dev/images/stages-of-construction-project-management/stages-of-construction-project-management-large.webp  200
/images/tampa-hurricane-damage-restoration/tampa-hurricane-damage-restoration  https://pub-293ff74728cf48d6827f2ddadc36947a.r2.dev/images/tampa-hurricane-damage-restoration/tampa-hurricane-damage-restoration-large.webp  200
```

**Before adding any rule, verify the R2 target with `curl -sI`.** Some assets use a different suffix; check each. The R2 catalog uses `-large.webp` for most files we tested.

**Two assets have no R2 source at all** (content-ops-generated heroes that were never written):

```
/images/articles/stucco-repair-near-me-tampa.webp
/images/articles/tenant-improvement-contractors-near-me-tampa.webp
```

Either (a) regenerate via content-ops image-matcher and upload to R2, or (b) point the article frontmatter at an existing stucco/commercial R2 asset.

**Acceptance:**
- All 24 broken-image URLs from the audit return 200 after deploy
- Spot-check 5 affected pages (`/disaster-recovery/`, `/locations/tampa-fl/`, `/insurance/fire-restoration/`, `/services/historic-restoration/`, `/residential/`) — heroes load
- `pnpm run build` succeeds; no console errors on rendered pages

---

## PHASE 2: Schema cleanup

### Task 2.1 — Strip FAQPage JSON-LD from 129 pages

**Why:** Google deprecated FAQ rich-result eligibility for non-gov/non-health sites in May 2024. Continued emission is a defect.

**Strategy:** find the FAQPage emit site, gate or remove. **Keep the visible FAQ accordion DOM** — still valuable for user experience and on-page semantic chunk density for AI Overviews.

**Locate:**
```bash
grep -rn "FAQPage\|@type.*FAQPage" --include="*.tsx" --include="*.ts" \
  /Volumes/External-2TB/Projects/Clients/fcs-final/components \
  /Volumes/External-2TB/Projects/Clients/fcs-final/app | head
```

Most likely culprit: `components/FAQ.tsx` (which emits both the visible FAQ and the schema) or a `components/Schema.tsx` helper.

**Fix:** remove only the `<script type="application/ld+json">` block emitting `FAQPage`. Leave the visible `<dl>` / accordion intact.

**Acceptance:**
- `curl -sL https://floridaconstructionspecialists.com/balcony-reconstruction/ | grep -c FAQPage` → 0
- Spot-check 5 service pages; the visible FAQ accordion still renders
- Re-run `python3 tools/site-audit/audit.py --client fcs --mode client` from content-ops; `faqpage_present_count` is 0

---

## PHASE 3: Hub-and-spoke gaps

**See the detailed page-by-page plan in `HUB-PLAN-2026-05-21.md` (same directory).** The summary below names the gaps; the standalone plan has the full content brief, internal-link map, schema spec, and acceptance criteria per hub.

Three service hubs have 8 city spokes each but no parent. Six other service families do have parents.

### Task 3.1 — Build `/commercial-construction/` parent hub

**Spokes already in sitemap:** `/commercial-construction-tampa/`, `-bradenton/`, `-brandon/`, `-clearwater/`, `-lakeland/`, `-ruskin/`, `-sarasota/`, `-st-petersburg/` (8 pages).

**File:** `app/commercial-construction/page.tsx`

**Pattern to follow:** `app/balcony-reconstruction/page.tsx` (working hub with 8 spokes).

**Hub should contain:**
- 1,500–2,500 words
- Service overview (commercial construction in Tampa Bay context)
- Who it's for (retail, office, multi-family, medical, hospitality, industrial)
- The FCS approach (process, typical timeline, what makes you different)
- Code / permit context (Florida Building Code 2023, hurricane wind zones, FEMA flood zones, county Building Services departments)
- **Internal-link section** explicitly listing each of the 8 city spokes with descriptive anchor text
- FAQ block (visible DOM only — no FAQPage schema per Phase 2)
- CTA

**Also update:**
- `components/Footer.tsx` (or service nav) — add `/commercial-construction/` link
- `app/commercial/page.tsx` — link to `/commercial-construction/` as a top commercial service
- Each of the 8 city spokes — add a breadcrumb / "← Back to Commercial Construction" link

**Acceptance:**
- `curl -sI https://floridaconstructionspecialists.com/commercial-construction/` → 200
- Word count ≥ 1,500; H1, meta, canonical, LocalBusiness or Service schema present
- 8 internal links to the city spokes
- Sitemap includes `/commercial-construction/`

---

### Task 3.2 — Build `/condo-remediation/` parent hub

**Spokes:** 8 `/condo-remediation-<city>/` pages.

Same structure as 3.1, plus:
- Florida SB-4D context (link to `/sb4d-compliance/` micro-silo)
- Structural Integrity Reserve Studies (SIRS)
- Concrete restoration, balcony reconstruction, post-tension cable repair
- Insurance & assessment process (link to `/insurance/`)

---

### Task 3.3 — Build `/insurance-restoration/` parent hub

**Spokes:** 8 `/insurance-restoration-<city>/` pages.

Same structure as 3.1, plus:
- Insurance restoration overview (fire, water, hurricane, mold)
- Working with insurance adjusters (link to `/vip-public-adjuster/`)
- Claim-to-completion process
- Florida-specific: hurricane deductibles, ALE coverage, AOB rules

---

## PHASE 4: Content density (rolling)

Site-wide chunk density is 0.94/5 (target: 2.0+). 59.8% of chunks are low-density. The fix is concentrated in `commercial/guides/*`.

**Top 10 worst pages by low-density section count** — rewrite in this order:

| # | Page | Low / Total |
|---|---|---|
| 1 | `app/commercial/guides/choosing-a-builder-expert-commercial-construction-in-tampa/page.tsx` | 69/78 |
| 2 | `app/commercial/guides/building-plans-for-businesses-florida-construction-specialists/page.tsx` | 68/78 |
| 3 | `app/commercial/guides/custom-commercial-construction-solutions-in-tampa/page.tsx` | 68/73 |
| 4 | `app/residential/guides/commercial-residential-construction-in-florida/page.tsx` | 67/75 |
| 5 | `app/commercial/guides/commercial-construction-delays/page.tsx` | 51/61 |
| 6 | `app/commercial/guides/the-essential-role-of-florida-construction-specialists/page.tsx` | 47/50 |
| 7 | `app/insurance/guides/claims-negotiation-for-property-damage-in-tampa/page.tsx` | 47/55 |
| 8 | `app/commercial/guides/the-essential-duties-of-a-construction-manager-in-florida/page.tsx` | 42/53 |
| 9 | `app/insurance/guides/foundation-restoration-services-in-tampa-after-flooding/page.tsx` | 39/43 |
| 10 | `app/commercial/guides/how-technology-is-revolutionizing-the-construction-process/page.tsx` | 38/44 |

**Density rule (each section needs at least one of):**
- Concrete number (cost range, sq ft, project duration, year, %)
- Named entity (Florida Building Code section number, specific city/county department, named permit office)
- Material or standard (Class 4 shingles, UL 2218, ASCE 7-22 wind load, AISC 360, FBC 2023)
- AI-retrieval signal (header phrased as a question)

**Don't add fluff.** If a section can't be made specific, consolidate it with a neighbor and reduce the section count. Fewer dense sections beats many thin ones.

**Acceptance per page:**
- Word count ≥ existing
- Re-run audit; per-page chunk-density score ≥ 2.0/5

---

## PHASE 5: Inventory + decide

### Task 5.1 — 70+ programmatic "service-city" pages

Pages like `/top-commercial-contractors-in-tampa/`, `/hiring-a-commercial-contractor-in-tampa/`, `/spacious-family-homes-construction-in-tampa/` look like programmatic SEO output. They have no hub parents and overlap topically with the canonical city spokes.

**Export inventory:**
```bash
python3 -c "
import json, re
d = json.load(open('/Volumes/External-2TB/Projects/content-ops/tools/site-audit/runs/audits/fcs-raw-2026-05-19.json'))
urls = [p['url'] for p in d['crawl_inventory']['pages']]
prog = [u for u in urls if re.search(r'-(in|for|near|to)-(tampa|sarasota|clearwater|st-petersburg|lakeland|ruskin|brandon|bradenton)/?$', u)]
for u in prog: print(u)
" > /tmp/fcs-programmatic-pages.txt
wc -l /tmp/fcs-programmatic-pages.txt
```

**Decide per page:**
- Has GSC clicks/impressions? Rewrite + keep.
- Zero traffic? Either 301 to the canonical service-city page, or noindex.

### Task 5.2 — 12 legacy `/resources/` pages (stucco/concrete)

These are the pages with broken WP-upload images (Pattern B in the audit). Listed in the audit's `sitemap_paths_not_in_static_source`:

```
/resources/concrete-restore/
/resources/concrete-statue-restoration/
/resources/eifs-stucco-repair-tampa/
/resources/exterior-stucco-repair-near-me-tampa/
/resources/how-to-repair-large-stucco-holes-tampa/
/resources/modern-construction/
/resources/repair-stucco-hole-tampa/
/resources/repairing-stucco-cracks/
/resources/repairing-stucco/
/resources/restore-concrete-paint/
/resources/stucco-crack-repair-tampa/
/resources/stucco-repair-contractors-near-me-tampa/
/resources/stucco-repair-diy-tampa/
/resources/stucco-repair-near-me-tampa/
/resources/stucco-repair-tampa/
/resources/tenant-improvement-contractors-near-me-tampa/
/resources/what-to-know-about-stucco-repair-tampa/
```

**Decide per page based on GSC data:**
- Traffic > 50 imp/mo: rewrite with valid images + denser content
- Traffic 0: noindex meta + drop from sitemap, OR 301 to a relevant hub (most likely `/exterior-waterproofing/` or `/commercial/`)

---

## PHASE 6: Local SEO data

### Task 6.1 — Populate `client.json` manual blocks

**File:** `/Volumes/External-2TB/Projects/content-ops/clients/fcs/client.json`

Add at top level:

```json
"local_seo_manual": {
  "keyword_research": [
    { "keyword": "tampa commercial general contractor", "monthly_volume": 480, "intent": "commercial", "current_rank": null },
    { "keyword": "balcony reconstruction tampa", "monthly_volume": 90, "intent": "commercial", "current_rank": null }
    // ~10 target keywords with volume + intent + current rank
  ],
  "citations": [
    { "site": "Google Business Profile", "url": "https://maps.google.com/...", "status": "active" },
    { "site": "BBB", "url": "...", "status": "claimed" },
    { "site": "Yelp", "url": "...", "status": "pending" },
    { "site": "HomeAdvisor", "url": "...", "status": "claimed" },
    { "site": "Houzz", "url": "...", "status": "claimed" },
    { "site": "Tampa Chamber of Commerce", "url": "...", "status": "member" }
  ]
}
```

### Task 6.2 — Request GBP API access

The 2026-05-19 audit hit `quota_limit_value: 0` on `mybusinessaccountmanagement.googleapis.com` — service account `id-star-instant@star-commercial-roofing.iam.gserviceaccount.com` has GSC access but not GBP API access for this project.

Either:
- Request quota increase via Google Cloud Console, OR
- Grant a different project's service account access to the FCS GBP location and update `clients/fcs/client.json` `gbp_location_id`.

Once GBP API is reachable, re-run `python3 tools/site-audit/audit.py --client fcs --mode client --module gbp --find-gbp-location --save-gbp-id` to backfill the scorecard.

---

## Do NOT touch

- `next.config.ts` — `output: "export"`, `unoptimized: true`, `trailingSlash: true` are all intentional.
- `netlify.toml` cache headers (`[[headers]]`) — tuned; don't relax.
- The 436 existing 301 redirects in `netlify.toml` — these consolidate WordPress-migration duplicates. Don't remove any without GSC verification.
- The 9 `/locations/<city>-fl/` pages — they correctly redirect into service-city pages.
- The `/sb4d-compliance/` micro-silo — this is the model for Phase 3 hubs.
- `pnpm-lock.yaml` — site is pnpm. Never run `npm install`.
- The existing `AUDIT-FIXES.md` (2026-04-25) — left in place for history; don't overwrite or merge.

---

## Verification Checklist

After Phase 1:
- [ ] `/blog/`, `/blogs/`, `/articles/`, `/testimonial/` → 301 to correct destinations
- [ ] `/testimonials/` and `/reviews/` → 200, render correctly
- [ ] 24 audit-flagged image URLs return 200
- [ ] No console errors on `/` + `/disaster-recovery/` + `/commercial/`

After Phase 2:
- [ ] `grep -rc FAQPage out/` returns 0 in built HTML
- [ ] Re-run audit; `faqpage_present_count: 0`

After Phase 3:
- [ ] `/commercial-construction/`, `/condo-remediation/`, `/insurance-restoration/` → 200
- [ ] Each links to all 8 city spokes
- [ ] Sitemap includes the three new hubs

After Phase 4:
- [ ] Site-avg chunk density ≥ 2.0
- [ ] Each rewritten guide ≥ 2.0 individually

After Phase 6:
- [ ] Local SEO scorecard ≥ 25/40

Final:
- [ ] PSI mobile on homepage ≥ 90, LCP ≤ 2.5s
- [ ] PSI mobile on `/commercial-construction-tampa/` ≥ 85
- [ ] Production build passes; deploy passes; spot-check 10 pages live
