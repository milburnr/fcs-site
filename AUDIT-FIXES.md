# AUDIT-FIXES.md
# Site: floridaconstructionspecialists.com
# Generated: 2026-04-25
# Source: Site Audit — /Projects/content-automation-system/audits/fcs-audit-20260425.md

## GSD Context
This document is a Claude Code session brief. Work through tasks in priority order.
Run `npm run build` and check for errors after each phase. Do not skip phases.
Test on mobile after any image or script changes.

---

## PHASE 1: Critical Fixes [do first]

### Task 1.1 — Submit Unindexed URLs + Clean WP Crawl Waste
**Category:** SEO — Technical
**Files:** `scripts/submit-non-indexed.js`, `netlify.toml`
**Current state:** ~200 pages not indexed. WP cruft paths still in netlify.toml redirects consuming crawl budget on dead URLs.
**Required state:**
1. Run `node scripts/submit-non-indexed.js` to push unindexed URLs into Google Search Console queue
2. In `netlify.toml`, find any `/wp-content/*` redirect rules that don't point to R2 images — replace with a blanket 410 response for non-R2 wp-content paths:
   ```toml
   [[redirects]]
     from = "/wp-content/plugins/*"
     to = "/404/"
     status = 410
   [[redirects]]
     from = "/wp-content/themes/*"
     to = "/404/"
     status = 410
   ```
3. Ensure the R2 image proxies for `/wp-content/uploads/*` remain untouched above these rules
**Acceptance criteria:**
- `npm run build` passes
- No 404s for R2-proxied image paths
- submit-non-indexed.js runs without errors

### Task 1.2 — Fix Insurance Hub Page (Client → Server Render)
**Category:** SEO — Technical
**File:** `app/insurance/page.tsx`, `app/insurance/InsurancePageClient.tsx`
**Current state:** `page.tsx` renders only `<InsurancePageClient />` which has `"use client"` at top. All content and schema is JS-only — Google gets an empty HTML shell.
**Required state:**
1. In `app/insurance/page.tsx`, add server-rendered above-fold content directly: the hero section, H1, intro paragraph, and all three schema components (BreadcrumbSchema, ServiceSchema, and a LocalBusinessSchema)
2. Move `"use client"` to apply only to the interactive sections: gallery (`ProjectGallery`), form (`HighLevelForm`), parallax (`ParallaxSection`), and fade animations
3. Pattern to follow: see `app/commercial-construction-tampa/page.tsx` — it has LocalBusinessSchema, ServiceSchema, BreadcrumbSchema, FAQWithSchema all server-rendered, with only specific interactive components as client components
4. Add `export const metadata: Metadata = { ... }` to `app/insurance/page.tsx` (currently missing at the page level — only InsurancePageClient has the schema, not the page metadata)
**Acceptance criteria:**
- `curl https://floridaconstructionspecialists.com/insurance/ | grep "insurance-restoration"` returns content (or test locally with `curl http://localhost:3000/insurance/`)
- Schema visible in page source without JS execution
- `npm run build` passes

### Task 1.3 — Add RelatedServiceLocations to All Pages Missing It
**Category:** SEO — Technical
**Files:** All `page.tsx` files in `app/` that don't import RelatedServiceLocations
**Current state:** ~143 pages lack RelatedServiceLocations, weakening internal link graph. Pages without it are deprioritized in Google's crawl queue.
**Required state:**
1. Run this to find pages missing the component:
   ```bash
   grep -rL "RelatedServiceLocations" app/*/page.tsx app/*/*/page.tsx 2>/dev/null
   ```
2. For each page missing it, add import and place the component before the final CTA section:
   ```tsx
   import { RelatedServiceLocations } from "@/components/RelatedServiceLocations";
   // ... in JSX, before closing </main> or before CTA:
   <RelatedServiceLocations currentCity="Tampa" currentService="[service name]" />
   ```
3. Use the city and service values that match the page's URL slug
4. Spot-check that generated links resolve to real pages (don't link to pages that don't exist)
**Acceptance criteria:**
- `grep -rL "RelatedServiceLocations" app/*/page.tsx | wc -l` returns 0 (or near 0 for genuinely standalone pages like /about, /contact)
- `npm run build` passes

---

## PHASE 2: Important Fixes

### Task 2.1 — Fix Homepage Title Length
**Category:** SEO — Technical
**File:** `app/page.tsx`
**Current state:** `title: "Tampa Commercial Construction"` renders as "Tampa Commercial Construction | Florida Construction Specialists" (64 chars) — truncated in SERPs.
**Required state:** Change to:
```tsx
title: "Tampa Bay Commercial Construction | FCS",
```
This renders as "Tampa Bay Commercial Construction | FCS" (39 chars) — full display, adds "Bay" for geographic specificity, uses short brand name.
**Acceptance criteria:** Title visible in `<title>` tag of built page is ≤60 chars.

### Task 2.2 — Add Author Bylines + Author Page for E-E-A-T
**Category:** SEO — Content
**Files:** `app/` article/blog pages, new file `app/team/[slug]/page.tsx` or `app/about/page.tsx`
**Current state:** All articles lack author attribution. No author bio pages exist.
**Required state:**
1. Create author profiles for Robert Shamblin and Frank Bragano in `lib/authors.ts`:
   ```ts
   export const AUTHORS = {
     robert: { name: "Robert Shamblin", title: "Principal / Licensed General Contractor", license: "CBC1262722", bio: "..." },
     frank: { name: "Frank Bragano", title: "Principal / Restoration Specialist", bio: "..." },
   }
   ```
2. Add an `<AuthorByline>` server component to article pages
3. Add `Person` schema with `hasCredential` for the license number on the about page
**Acceptance criteria:** Google Rich Results Test shows Person schema on at least one page. Author name visible in article HTML source.

### Task 2.3 — Add Page-Specific OG Images for Key Pages
**Category:** Brand & Trust
**Files:** `app/commercial-construction-tampa/page.tsx`, `app/insurance-restoration-tampa/page.tsx`, `app/residential-lifetime-custom-homes/page.tsx`
**Current state:** All pages use `/og-image.jpg` — social shares show the same generic image.
**Required state:** Add unique `openGraph.images` to the top 5-10 highest-value pages using existing R2 images that match the page topic.
**Acceptance criteria:** Sharing commercial-construction-tampa on LinkedIn shows a commercial building image, not the generic OG.

---

## PHASE 3: Minor Improvements

### Task 3.1 — Default Meta Description Override Audit
Find all pages falling through to the layout default description ("With decades of experience...") and add unique, CTA-containing descriptions. Run:
```bash
grep -rL "description:" app/*/page.tsx app/*/*/page.tsx 2>/dev/null | head -20
```

### Task 3.2 — Verify WP Cruft Cleanup
Confirm that `out/wp-content/` (if it exists from previous builds) has been removed from the git-tracked output. Check `.gitignore` includes `out/`.

---

## Do NOT touch
- Hero image loading strategy (fetchPriority="high", same-origin Netlify CDN) — PSI score depends on this
- GA4 script strategy — `lazyOnload` is correct; changing to `afterInteractive` will kill LCP
- Roboto Slab `preload: false` — intentional, keeps font out of critical bandwidth race
- ChatWidget 5s defer — intentional
- R2 proxy redirects in `netlify.toml` for `/images/*` and `/wp-content/uploads/*`
- The RelatedServiceLocations component itself — it's working correctly
- Schema components (441/445 coverage is excellent — don't refactor these)

---

## You-Tasks (Require Rich, Not Claude Code)

- **GHL setup for FCS** — Create GHL subaccount for FCS, connect GBP, set up missed-call textback, weekly GBP post automation, and review response workflow. This is a pricing deliverable gap.
- **Search Console access** — Verify you have Search Console access for floridaconstructionspecialists.com to run submit-non-indexed.js and monitor indexing recovery
- **E-E-A-T content** — Get bios, license numbers, and a professional photo from Robert and Frank for the author pages

---

## Verification Checklist
- [ ] Run PageSpeed Insights on mobile after Phase 1 — confirm score stays ≥90
- [ ] Confirm LCP < 2.5s
- [ ] Confirm insurance page content visible in HTML source (no JS required)
- [ ] Confirm RelatedServiceLocations present on all service-location pages
- [ ] `npm run build` passes with no errors
- [ ] Check Search Console Coverage report 2 weeks after submit-non-indexed.js run
