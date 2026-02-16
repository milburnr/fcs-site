# Stack Research: Local SEO Dominance

**Domain:** Local SEO for commercial construction / service business
**Project:** Florida Construction Specialists (FCS) - Tampa Bay
**Researched:** 2026-02-15
**Confidence:** HIGH (multiple authoritative sources corroborate; Google's own documentation confirms core ranking factors)

## Context: What We Already Have

The site is a 496-page Next.js 15 static site on Netlify. It already has:
- `components/Schema.tsx` with LocalBusiness, Service, FAQ, Breadcrumb, Article, Organization schemas
- `GeneralContractor` and `HomeAndConstructionBusiness` schema types configured
- GBP verified with review link
- 8 service areas with location x service pages
- FAQ database per service category
- Phone click tracking (GA4)

This research focuses on what to ADD and IMPROVE for local SEO dominance, not rebuilding what exists.

## Recommended Stack

### On-Site Technical SEO (What the Next.js site needs)

| Technology/Technique | Purpose | Why Recommended | Current Status |
|---------------------|---------|-----------------|----------------|
| Enhanced Schema Markup | Rich results + AI citation | Google uses structured data for Map Pack, AI Overviews, and Knowledge Panels. Construction companies with LocalBusiness + Service + FAQ schemas get more impressions and clicks. | Partially implemented - needs improvements (see below) |
| NAP Consistency Layer | Trust signal for Google | NAP (Name, Address, Phone) must be IDENTICAL across every page and every external listing. Even "St." vs "Street" discrepancies hurt rankings. | Exists in constants.ts but needs audit for consistency across all 496 pages |
| Geo-tagged Images | Local relevance signal | Geotagged photos improve local relevance. Google weights location metadata in images for Map Pack. | Image optimization exists but geo-tagging status unknown |
| Internal Linking Architecture | Topical authority + crawl efficiency | Hub-and-spoke linking between service pages and location pages signals topical depth to Google. | Has some internal links but needs systematic audit |
| Core Web Vitals | Ranking factor | Page speed, LCP, CLS, INP are confirmed ranking factors. Static export is already fast. | Good baseline from static export |
| Mobile-First Design | Required for ranking | Google indexes mobile-first. 60%+ of local searches happen on mobile. | Already responsive |

### Schema Markup Improvements (Critical)

| Schema Type | Where | Implementation | Priority |
|------------|-------|----------------|----------|
| `GeneralContractor` (primary @type) | Every page | Already using `["LocalBusiness", "HomeAndConstructionBusiness", "GeneralContractor"]` - this is correct. Use the MOST SPECIFIC type available. | DONE - minor improvements needed |
| `Service` with `hasOfferCatalog` | Service pages | Add `hasOfferCatalog` with individual `OfferCatalog` items listing specific services. Currently missing catalog structure. | HIGH |
| `Review` / `AggregateRating` | Homepage + service pages | Add aggregate review data from GBP. Google displays star ratings in search results. Must match actual GBP reviews exactly (no fabrication). | HIGH |
| `GeoShape` for service areas | Location pages | Define service area polygons or circles, not just city names. Tells Google exactly where you serve. Use `GeoCircle` with `geoRadius`. | MEDIUM |
| `ContactPoint` with `contactOption` | All pages | Add `contactOption: "TollFree"` or `"HearingImpairedSupported"` where applicable. Add `availableLanguage`. | MEDIUM |
| `WebSite` with `SearchAction` | Homepage only | Enables sitelinks search box in SERP. Low effort, high visibility. | LOW |
| `HowTo` schema | Process/methodology pages | For pages explaining construction processes. Earns featured snippets. | LOW |

**Schema improvements needed in `components/Schema.tsx`:**

1. Add `aggregateRating` to LocalBusinessSchema (pull from GBP data)
2. Add `hasOfferCatalog` to ServiceSchema listing specific service offerings
3. Add `areaServed` with `GeoCircle` using lat/lng + radius instead of just city names
4. Add `sameAs` with all social profiles and directory listings (currently empty in constants.ts)
5. Add `numberOfEmployees` and `employee` for key staff (signals legitimacy)
6. Add `award` for any industry recognitions
7. Fix: `priceRange` should not be "$500,000 - $50,000,000+" - Google expects consumer-facing price range indicators like "$$$$" or a realistic range

### Google Business Profile Optimization

| Action | Impact | Details |
|--------|--------|---------|
| Complete all GBP categories | HIGH | Primary: "General Contractor". Add secondary categories: "Construction Company", "Building Restoration Service", "Waterproofing Contractor", "Condo association" if applicable |
| Weekly GBP Posts | HIGH | Post project photos, company updates, industry news. GBP posting frequency correlates with Map Pack rankings. |
| Photo uploads (geotagged) | HIGH | Upload project photos weekly with EXIF GPS data embedded. Before/after photos perform best. |
| Review generation system | CRITICAL | Reviews are ~15% of Map Pack ranking. Need systematic post-project review requests. Automate via text/email after project completion. |
| Q&A section management | MEDIUM | Pre-populate GBP Q&A with common questions. Prevents competitors from seeding negative questions. |
| Service descriptions with location modifiers | HIGH | Each GBP service should include "in Tampa", "Tampa Bay area", etc. |
| Products/Services section | MEDIUM | Add each service as a GBP "product" with photos and descriptions |
| Business description optimization | HIGH | 750 characters max. Front-load with primary keywords: "Tampa commercial construction", "insurance restoration", "condo remediation" |

### Off-Site SEO (Citation & Link Building)

| Platform/Strategy | Priority | Details |
|-------------------|----------|---------|
| **Citation Building** | CRITICAL | List on 40+ directories with IDENTICAL NAP. Key ones: Google, Bing, Apple Maps, Yelp, BBB, Angi, HomeAdvisor, BuildZoom, Houzz, ChamberOfCommerce |
| **Construction-specific directories** | HIGH | AGC (Associated General Contractors), ABC, local builder associations, Florida DBPR contractor lookup (validates license CBC1262722) |
| **Data aggregators** | HIGH | Submit to Neustar Localeze, Factual (Foursquare), Data.com (Acxiom). These feed hundreds of smaller directories. |
| **Local link building** | HIGH | Tampa Bay Business Journal features, Tampa Chamber of Commerce, local event sponsorships, university partnerships |
| **Industry backlinks** | MEDIUM | Supplier websites, subcontractor cross-links, architect firm partnership pages |
| **Local news/PR** | MEDIUM | Project completion announcements in Tampa Bay Times, Tampa Bay Business Observer. SB4-D condo remediation is a timely news angle. |
| **BrightLocal** | RECOMMENDED | Best all-in-one tool for citation tracking, review monitoring, local rank tracking. ~$39/month. |
| **Whitespark** | ALTERNATIVE | Citation building + local rank tracker. Good for manual citation cleanup. |

### Content Strategy for Local Dominance

| Content Type | Purpose | Implementation |
|-------------|---------|----------------|
| **Service + Location Pages** (existing) | Rank for "[service] [city]" queries | Already have these. Need to ensure each has UNIQUE content (not template-swapped). Google penalizes doorway pages. |
| **SB4-D / Condo Remediation Content Hub** | Capture urgent legislative-driven demand | Create authoritative content hub around Florida SB4-D compliance: inspection requirements, remediation timelines, cost guides, association responsibilities. ~900,000 FL condo units are subject to these mandates. This is a time-sensitive opportunity. |
| **Insurance Restoration Guides** | Capture high-intent commercial keywords | "How to file a commercial property damage claim in Tampa", "Large loss restoration process explained", "Hurricane damage restoration timeline" |
| **Before/After Project Galleries** | Visual proof + image SEO | Geotagged project photos with descriptive alt text and captions. Each gallery page should target "[service] [city]" with schema. |
| **Local Knowledge Content** | E-E-A-T signals | Tampa Bay building code guides, Florida-specific construction requirements, hurricane preparedness for commercial properties. Shows genuine local expertise. |
| **Case Studies** | Trust + long-tail keywords | Detailed project walkthroughs with scope, challenges, solutions. "Historic restoration of [building name] in Tampa" |

### Review Generation System

| Component | Tool/Approach | Details |
|-----------|---------------|---------|
| Review request automation | Google review link + SMS/email | Use the existing `googleReviewLink` in constants.ts. Send 24-48 hours after project milestone or completion. |
| Review monitoring | BrightLocal or Google Alerts | Track new reviews across all platforms. Respond to every review within 24 hours. |
| Review velocity | Steady cadence matters more than bursts | Google values consistent review flow. Aim for 2-4 reviews/month minimum. |
| Review keywords | Coach clients naturally | Reviews mentioning services ("condo remediation", "insurance restoration") and locations ("Tampa") boost relevance. Never fake or incentivize (Google penalty). |
| Review response strategy | Respond to ALL reviews | Thank positive reviewers by name. Address negative reviews professionally. Responses show Google the business is active. |

## Content Patterns That Drive Map Pack Rankings

### Pattern 1: Unique Location Pages (NOT Doorway Pages)

**What makes it a doorway page (PENALTY RISK):**
- Same template with only city name swapped
- No unique local content
- Thin pages (<300 words of unique content)
- Multiple pages targeting minor keyword variants

**What makes it a legitimate location page:**
- 800+ words of genuinely unique content per page
- City-specific project references and case studies
- Local building code information specific to that jurisdiction
- Neighborhood-level detail (not just city-level)
- Unique photos from projects in that city
- Different FAQs relevant to that market

**Current risk:** The 496-page site likely has location pages following templates. Each MUST be audited for unique content. Google's March 2024 Core Update and August 2025 Spam Update specifically target template-swapped location pages.

### Pattern 2: Topical Authority Clusters

```
Hub Page: /commercial/condo-remediation/
  |
  +-- /condo-remediation-tampa/
  +-- /condo-remediation-st-petersburg/
  +-- /condo-remediation-clearwater/
  +-- /sb4-d-compliance-guide/
  +-- /milestone-inspection-requirements/
  +-- /condo-structural-repair-process/
  +-- /condo-remediation-cost-guide/
```

Each spoke links back to hub. Hub links to all spokes. Cross-link related spokes. This builds topical authority that Google rewards.

### Pattern 3: E-E-A-T Signals for Construction

- **Experience:** Project photos, case studies, before/after galleries
- **Expertise:** In-house engineer credential, license number on every page, technical content
- **Authoritativeness:** Industry association memberships, awards, media mentions
- **Trust:** Reviews, BBB rating, license verification link, physical address

## What NOT to Do (Penalty Risks)

| Anti-Pattern | Why It Hurts | What to Do Instead |
|-------------|-------------|-------------------|
| Template-swapped location pages | Google's 2024/2025 updates specifically target these as doorway pages. Widespread demotions reported. | Write genuinely unique content for each location. If you can't, consolidate into fewer, better pages. |
| Fake/incentivized reviews | Google suspends profiles for fake reviews. FTC also enforces. | Genuine review request system only. Never offer discounts for reviews. |
| Keyword stuffing in titles/meta | Over-optimization detected by SpamBrain AI. Titles like "Tampa Construction Tampa Contractor Tampa Builder" get demoted. | Natural titles: "Commercial Construction in Tampa \| FCS" |
| Exact-match anchor text overuse | Unnatural link profile triggers penalties | Vary anchor text: brand name, natural phrases, URLs |
| NAP inconsistencies | Confuses Google about business legitimacy. 80% of consumers lose trust with inconsistent NAP. | Audit ALL listings. Use exact same format everywhere. |
| Thin FAQ pages | Google devalues pages with little original content | Ensure FAQ answers are substantive (50+ words each), unique per page |
| Cloaking or hidden text | Manual action penalty | All content visible to users and crawlers identically |
| PBNs or link schemes | Manual action, can be catastrophic | Focus on earning links through quality content and genuine relationships |
| Schema markup that doesn't match page content | Google ignores or penalizes misleading structured data | Schema must accurately reflect what's on the page |
| Overusing AI-generated content | December 2025 Core Update targets "thin, outdated, or overly optimized pages" | AI-assisted is fine, but content must be reviewed, fact-checked, and genuinely useful |

## Alternatives Considered

| Recommended | Alternative | When to Use Alternative |
|-------------|-------------|-------------------------|
| BrightLocal for citation/rank tracking | Whitespark | If budget is tight. Whitespark is cheaper but less comprehensive. |
| Static Next.js site (current) | WordPress with Yoast/RankMath | NEVER for this project. The static site is faster, more secure, and already built. No migration. |
| Manual GBP management | GBP automation tools (Publer, etc.) | Only if managing multiple GBP locations. Single location doesn't justify the cost. |
| JSON-LD for schema (current) | Microdata/RDFa | Never. JSON-LD is Google's recommended format and easiest to maintain in React/Next.js. |
| Organic review generation | Review management platforms (Podium, Birdeye) | If review volume becomes a priority and manual outreach isn't working. Costs $300+/month. |

## Technical Implementation Specifics for Static Next.js

### Sitemap Generation
- Generate `sitemap.xml` at build time listing all 496 pages
- Include `<lastmod>` dates that reflect actual content changes
- Submit to Google Search Console
- Add `<sitemap>` reference in `robots.txt`

### robots.txt Requirements
```
User-agent: *
Allow: /
Sitemap: https://floridaconstructionspecialists.com/sitemap.xml

# Block build artifacts and non-content paths
Disallow: /wp-content/plugins/
Disallow: /_next/
```

### Page-Level Metadata Pattern
Every service + location page needs:
```tsx
export const metadata: Metadata = {
  title: "Condo Remediation Tampa | SB4-D Compliance | FCS",
  description: "Licensed Tampa condo remediation contractor...", // 150-160 chars, unique per page
  openGraph: {
    title: "...",
    description: "...",
    url: "https://floridaconstructionspecialists.com/condo-remediation-tampa/",
    images: [{ url: "/images/condo-remediation-tampa.webp" }],
  },
  alternates: {
    canonical: "https://floridaconstructionspecialists.com/condo-remediation-tampa/",
  },
};
```

**Critical: Every page must have a unique `canonical` URL.** Prevents duplicate content issues across location variants.

### Image Optimization for Local SEO
- All images in WebP/AVIF format (already done via OptimizedImage component)
- Descriptive file names: `condo-balcony-repair-tampa-bay.webp` not `IMG_4521.webp`
- Alt text includes service + location naturally: "Balcony reconstruction project in downtown Tampa"
- EXIF GPS coordinates embedded for geotagging (use `exiftool` in build pipeline)

## Priority Implementation Order

Based on impact and effort:

1. **GBP Optimization** (Week 1) - Highest ROI, no code changes needed
2. **Review Generation System** (Week 1-2) - ~15% of Map Pack ranking
3. **Schema Markup Improvements** (Week 2) - Fix existing schema, add AggregateRating
4. **Citation Building** (Week 2-4) - Submit to 40+ directories with consistent NAP
5. **Content Uniqueness Audit** (Week 3-4) - Identify and fix template-swapped pages
6. **SB4-D Content Hub** (Week 4-6) - Capture time-sensitive condo remediation demand
7. **Insurance Restoration Content** (Week 5-8) - High-value keyword targeting
8. **Link Building Campaign** (Ongoing) - Local partnerships, industry associations, PR

## SB4-D Condo Remediation: Time-Sensitive Opportunity

Florida's SB4-D mandates structural inspections for buildings 3+ stories, 30+ years old. Key deadlines:
- Buildings with COs before July 1, 1992: Inspection due by Dec 31, 2024/2025
- ~900,000 FL condo units affected
- Associations scrambling to find qualified contractors
- Phase 2 inspections (invasive structural testing) create remediation projects

**SEO angle:** Create THE authoritative resource for "SB4-D condo remediation Tampa" before competitors. This is a low-competition, high-intent keyword cluster with regulatory urgency driving search volume. FCS's in-house engineer is a significant differentiator here.

**Target keywords:**
- "condo structural inspection Tampa"
- "SB4-D contractor Tampa"
- "milestone inspection remediation Florida"
- "condo balcony repair Tampa Bay"
- "structural remediation contractor Florida"
- "condo association contractor Tampa"

## Sources

- [Google Business Profile Help: Improve Local Ranking](https://support.google.com/business/answer/7091) -- HIGH confidence, official Google documentation
- [Google Search Central: LocalBusiness Structured Data](https://developers.google.com/search/docs/appearance/structured-data/local-business) -- HIGH confidence, official Google documentation
- [Schema.org: HomeAndConstructionBusiness](https://schema.org/HomeAndConstructionBusiness) -- HIGH confidence, official specification
- [BrightLocal: Local SEO Schema Templates](https://www.brightlocal.com/learn/local-seo-schema-templates/) -- MEDIUM confidence, industry authority
- [Schema Markup for Contractor Websites Guide](https://eseospace.com/blog/schema-markup-for-contractor-websites/) -- MEDIUM confidence, verified against schema.org spec
- [Local Dominator: Local Search Ranking Factors 2026](https://localdominator.co/local-search-ranking-factors/) -- MEDIUM confidence, aligns with Google documentation
- [Backlinko: Local SEO Definitive Guide 2026](https://backlinko.com/local-seo-guide) -- MEDIUM confidence, established SEO authority
- [Florida SB4-D Building Safety Law](https://www.thorntontomasetti.com/florida-sb4d-building-safety-law) -- HIGH confidence, engineering firm primary source
- [Florida Engineering LLC: SB4-D Reporting Requirements 2025](https://flengineeringllc.com/sb4d-building-reporting-requirements-2025/) -- MEDIUM confidence, industry source
- [ServiceTitan: Construction SEO Definitive Guide 2025](https://www.servicetitan.com/blog/construction-seo) -- MEDIUM confidence, SaaS vendor with industry data
- [Google: Doorway Pages Penalty](https://www.manningmarketing.com/articles/what-are-doorwaygateway-pages/) -- MEDIUM confidence, aligned with Google webmaster guidelines
- [DesignRush: Google 2025 Spam Update](https://news.designrush.com/google-2025-spam-update-complete-seo-penalties) -- MEDIUM confidence, news source reporting factual update

---
*Stack research for: Local SEO dominance -- commercial construction / Tampa Bay*
*Researched: 2026-02-15*
