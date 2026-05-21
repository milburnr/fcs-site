# Audit fix results — 2026-04-30

## Before → After (vs. AUDIT-TODO-2026-04-30.md baseline)

| Code | Issue | Audit | After | Δ |
|------|-------|-------|-------|---|
| A1 | Pages with broken images | 70 | 3* | −96% |
| A2 | Broken image URLs | 21 | 4* | −81% |
| A3 | Oversized images (>100 KB) | 11 | 52** | mixed |
| B1 | 404 pages | 22 | 0 | ✅ |
| B2 | 4XX pages | 22 | 0 | ✅ |
| B3 | Timed-out pages | 8 | (needs browser) | — |
| B4 | Indexable→broken links | 26 | 0 | ✅ |
| B5 | Noindex→broken links | 13 | 0 | ✅ |
| C1 | Non-canonical in sitemap | 15 | 0 | ✅ |
| C2 | Sitemap timeouts | 7 | (bundled w/ B3) | — |
| C3 | Noindex in sitemap | 5 | 0 | ✅ |
| D1 | Orphan indexable | 4 | 7*** | mixed |
| D2 | Orphan noindex | 4 | 3 | ✅ |
| L1 | Title >60 chars | 15 | 3**** | −80% |
| L2 | Pages with redirect links | 432 | 1 | −99% |
| L3 | Noindex pages with redirect links | 20 | 1 | −95% |
| L4 | Pages with one incoming link | 148 | 125 | −16% |
| L8 | Redirect chains | 1 | 0 | ✅ |
| L9 | Noindex pages (inventory) | 5 | 7 | informational |
| L10 | Noindex follow (inventory) | 5 | 7 | informational |
| L11 | Meta desc too long | 2 | 0 | ✅ |
| L12 | Meta desc too short noindex | 2 | 0 | ✅ |
| L14 | JSON-LD schema errors | 161 | 0 | ✅ |
| M1 | Missing alt text | 11 | 0 | ✅ |
| M2 | Meta desc too short | 5 | 0 | ✅ |

\* 3 of 4 are false positives — paths that have specific `_redirects` rewrites to working images. Production behavior is correct; my discovery script is overly literal.

\** A3 went up because my discovery uses a stricter 100 KB threshold than Ahrefs and we now check the full image catalog (310 unique URLs). Of the 52, only 3 were over 1 MB and those were optimized (1.9–2.3 MB → 150–215 KB).

\*** All 7 are pages that redirect away (so they're functionally not orphans — the redirect intercepts before the orphan page is served). See DISCUSSION-LIST.md item 3.

\**** 2 of 3 are the Next.js default 404 page (unfixable). The 3rd is a minor edge case.

## What changed

### Code / config
- `components/Schema.tsx` — `ArticleSchema` now always emits `image` (defaults to OG image) — clears all 161 schema errors
- `components/Testimonials.tsx` — `TestimonialSchema` now includes required address + telephone
- `components/Footer.tsx` — added Privacy, Terms, Team, Gallery links (was orphaning those pages); fixed Commercial Construction hub link to point at `/commercial/`
- `components/OptimizedImage.tsx` — unchanged
- `app/sitemap.ts` — now skips noindex pages, redirected sources, and pages whose canonical points elsewhere
- `app/multi-family-construction/page.tsx` — fixed city links to point at `/multi-family-construction-{city}/` instead of nonexistent `/locations/{city}-fl/multi-family-construction/`
- `app/resources/[slug]/page.tsx` — fixed canonical to use `floridaconstructionspecialists.com` (was using a different domain) and stopped double-appending the brand suffix
- `app/gallery/race-track/page.tsx` — title trimmed
- `app/insurance/page.tsx` — title trimmed
- `lib/imageMapping.ts` — image-path corruption from earlier swap fixed

### Redirects
- `netlify.toml` — 26 new 301 redirects added for the dead URLs (`/condo-remediation`, `/multi-family`, `/concrete-restoration`, `/stucco-repair`, `/services/luxury-custom-homes`, `/locations/{city}-fl/multi-family-construction`)
- `netlify.toml` + `public/_redirects` — 78 redirect chains collapsed (each old URL now points directly at its final destination)
- `public/_redirects` — 16 specific image rewrites added that map dead WP-style image paths to working optimized R2 keys

### Content
- 11 article hero PNGs re-encoded to WebP (1.9–2.4 MB → 110–280 KB each)
- 11 MDX article titles trimmed to fit ≤60 chars in SERP
- 2 MDX meta descriptions trimmed to ≤160 chars
- 1 broken in-content link fixed (`/stucco-repair/` → `/resources/repairing-stucco/`)
- 248 internal links rewritten to point directly at final destination instead of redirected URL

### Source-of-truth fixes
- The slug-to-final-URL rewriter (`scripts/rewrite-redirect-links.mjs`) is idempotent — can be re-run after future redirects are added
- The redirect-chain collapser (`scripts/collapse-redirect-chains.mjs`) is idempotent — same
- The discovery script (`scripts/audit-discover.mjs`) can be re-run anytime to produce fresh findings

## Files added
- `scripts/audit-discover.mjs` — full audit scanner
- `scripts/collapse-redirect-chains.mjs` — redirect chain collapser
- `scripts/rewrite-redirect-links.mjs` — internal link rewriter
- `scripts/swap-broken-images.mjs` — broken-image substituter
- `scripts/optimize-article-hero-images.mjs` — PNG → WebP optimizer
- `scripts/fix-corrupted-image-paths.mjs` — repair script for an earlier scripted typo
- `audit-findings.json` — current state of all findings (data file)
- `AUDIT-FIX-PLAN.md` — the plan that was executed
- `AUDIT-FIX-RESULTS.md` — this file
- `DISCUSSION-LIST.md` — items that need your call

## What's NOT done — see DISCUSSION-LIST.md
1. Duplicate /privacy/ + /privacy-policy/ pages
2. Duplicate /terms/ + /terms-and-conditions/ pages
3. Duplicate /team/ + /team-members/ pages
4. 5 redirected hub pages still in `app/` as dead code
5. Article hero WebPs not yet uploaded to R2 (works locally without — optional cleanup)
6. 4 image references that production rewrites correctly but discovery flags
7. 125 thinly-linked pages (L4) — needs editorial review
8. 8 timed-out pages (B3) — needs browser-based investigation
