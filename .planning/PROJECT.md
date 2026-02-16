# FCS Site — Local SEO Dominance

## What This Is

A comprehensive SEO improvement project for Florida Construction Specialists (floridaconstructionspecialists.com), a Tampa Bay commercial construction company. The 496-page Next.js site was recently rebuilt from WordPress for speed and security. It needs to go from "exists online" to "dominates local search" — generating actual leads for a business that currently relies entirely on referrals.

## Core Value

The site must be professional enough that the client (who paid $10,000) is proud to show it to anyone — and strong enough in local SEO to rank page 1 and generate leads for insurance restoration and condo remediation in Tampa Bay.

## Requirements

### Validated

<!-- Shipped and confirmed valuable. -->

- ✓ Site rebuilt on Next.js 15 with static export — existing
- ✓ 496 pages with hub-and-spoke architecture — existing
- ✓ Schema markup: LocalBusiness (99.8%), Breadcrumb (99.6%), FAQ (74%) — existing + audit fixes
- ✓ All pages have H1 tags, metadata, canonical URLs — existing + audit fixes
- ✓ 9 "use client" pages split to enable metadata export — audit fix
- ✓ FAQSchema added to 29 pages missing it — audit fix
- ✓ Duplicate meta descriptions eliminated — audit fix
- ✓ Google Business Profile verified and linked — existing
- ✓ GA4 tracking with phone click events — existing
- ✓ Build passing (499 pages generated) — verified

### Active

<!-- Current scope. Building toward these. -->

- [ ] Hub pages expanded to 1000+ words (services, locations, insurance — currently under 300 words)
- [ ] Location pages strengthened with genuine local signals (landmarks, neighborhoods, county-specific details)
- [ ] Blog/article content upgraded from generic filler to authoritative, locally-relevant content
- [ ] Insurance restoration content positions FCS as Tampa Bay's large-loss authority
- [ ] Condo remediation / SB4-D content captures urgent compliance deadline searches
- [ ] 314 meta descriptions trimmed to 150-160 chars
- [ ] 67 pages get InternalLinks component added
- [ ] All thin content pages (<500 words) expanded to competitive depth
- [ ] E-E-A-T signals strengthened: credentials, case studies, specific project references
- [ ] Local SEO signals consistent: NAP, service areas, GBP alignment across all pages

### Out of Scope

- Paid advertising / Google Ads — organic only for now
- Google Business Profile optimization beyond URL linking — separate effort
- Link building / off-site SEO — focus is on-site first
- New service categories or pages beyond existing 496 — improve what exists
- CMS integration — manual updates for now

## Context

**Business:** Florida Construction Specialists (FCS), headquartered at 822 Bayview Dr, Ruskin FL. Merger of Florida Restoration Team and Shamblin Construction, operating since 1982. Licensed CGC (CBC1262722). Always prime contractor, never subcontractor. Projects $500K-$25M+. In-house engineer and architectural draftsman.

**Priority services for ranking:**
1. **Insurance restoration** — large loss commercial/residential claims ($250K+). This is where the money is. Direct carrier negotiation, certified Xactimate estimates, expert witness capability.
2. **Condo remediation / SB4-D compliance** — urgent Florida market. Milestone inspections, SIRS studies, structural repairs. Deadlines creating demand NOW.

**Service areas:** Tampa (primary), St. Petersburg, Clearwater, Lakeland, Sarasota, Bradenton, Brandon, Ruskin (HQ).

**Technical stack:** Next.js 15, TypeScript, Tailwind CSS, Framer Motion, static export to Netlify. Images optimized (AVIF/WebP). No database.

**Current state:**
- Rebuilt from WordPress — faster, more secure, modern
- Zero organic leads currently — business runs on referrals
- GBP verified and linked to site
- SEO audit completed 2025-02-15 — critical technical issues fixed
- Content quality varies: some pages excellent (5000+ words), some thin (<300 words)

**What "done" looks like (progressive):**
1. No embarrassing issues — client can show site to anyone confidently
2. Page 1 rankings for priority keywords in Tampa Bay
3. Phone ringing and forms converting from organic search

## Constraints

- **Tech stack**: Next.js 15 static export — no server-side rendering, no API routes
- **Deployment**: Netlify manual deploy (`netlify deploy --prod --dir=out --no-build`) — git-triggered builds fail
- **Images**: Use OptimizedImage component — maps wp-content paths to optimized /images/ paths
- **Budget**: Client paid $10K — work must justify that investment
- **Timeline**: ASAP for embarrassment-proofing, 3-6 months for ranking/leads

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Rebuild from WordPress to Next.js | Speed, security, developer control | ✓ Good — site is fast and modern |
| Static export (no SSR) | Simplicity, Netlify hosting, no server costs | ✓ Good — 496 pages build in ~10s |
| Server/client component split for metadata | "use client" pages couldn't export metadata | ✓ Good — all pages now have SEO metadata |
| Focus on insurance + condo remediation first | Highest-value services with market urgency | — Pending |
| Content-first approach before link building | On-site must be solid before off-site matters | — Pending |

---
*Last updated: 2026-02-15 after initialization*
