# Architecture Research: Local SEO Site Structure for Multi-Location Construction Company

**Domain:** Local SEO information architecture for a multi-location commercial construction company
**Researched:** 2026-02-15
**Confidence:** HIGH (based on current SEO best practices, verified across multiple authoritative sources)

## Executive Summary

The FCS site has 454 route directories with approximately 72 true service+location pages, 9 location hub pages, 3 business-line hub pages (commercial, residential, insurance), and roughly 349 blog/article-style pages. The current structure is partially siloed but has significant architectural issues: blog articles live at the root level alongside service pages, internal linking is silo-aware but incomplete, and many blog articles appear to be thin content that could cannibalize service+location pages.

The recommended architecture uses a **three-tier content silo** pattern: Business Line Hubs (pillar pages) -> Service Pages (cluster cores) -> Location+Service Pages + Supporting Articles (cluster content). This matches how Google evaluates topical authority for local service businesses in 2025-2026.

## Current Architecture Assessment

### What Exists (454 routes)

```
/                                    # Homepage
├── /commercial/                     # Hub: Commercial services (GOOD)
│   ├── /commercial/industrial-construction/
│   ├── /commercial/historic-restoration/
│   ├── /commercial/condo-remediation/
│   └── /commercial/cpm-scheduling/
├── /residential/                    # Hub: Residential services (GOOD)
│   ├── /residential/waterfront-homes/
│   └── /residential/fema-compliance/
├── /insurance/                      # Hub: Insurance services (GOOD)
│   ├── /insurance/building-consultant/
│   ├── /insurance/fire-restoration/
│   ├── /insurance/water-restoration/
│   ├── ... (9 sub-pages)
├── /services/                       # General services index
│   ├── /services/commercial/
│   ├── /services/residential/
│   ├── /services/disaster-recovery/
│   └── /services/historic-restoration/
├── /locations/                      # Location hub
│   ├── /locations/tampa-fl/
│   ├── /locations/clearwater-fl/
│   └── ... (9 cities)
├── /commercial-construction-tampa/  # Service+Location (72 total)
├── /disaster-recovery-brandon/      # Service+Location
├── /eco-friendly-commercial-construction-in-tampa/  # Blog article (~229 "in tampa/florida")
├── /balcony-reconstruction/         # Standalone service page
└── ... (~349 blog articles at root level)
```

### Current Problems

| Problem | Impact | Severity |
|---------|--------|----------|
| **Blog articles live at root URL level** | 349 articles compete with service pages for crawl priority. Flat hierarchy signals to Google that articles are equally important as service pages. | HIGH |
| **Duplicate hub structure** | `/services/commercial/` AND `/commercial/` both exist. Two competing pages for the same topic. | HIGH |
| **Blog articles cannibalize service+location pages** | E.g., `/eco-friendly-commercial-construction-in-tampa/` competes with `/commercial-construction-tampa/` for "commercial construction tampa" | HIGH |
| **No clear content silo boundaries** | Blog articles link to each other and to service pages without silo discipline. Link equity leaks across topics. | MEDIUM |
| **Location pages lack service-specific depth** | `/locations/tampa-fl/` links to generic service hubs, not to `/commercial-construction-tampa/` | MEDIUM |
| **Breadcrumbs inconsistent** | Blog articles use flat breadcrumbs (Home > Article Title) instead of silo-aware breadcrumbs | MEDIUM |
| **~229 "in Tampa" articles may be thin content** | Many appear to be topically adjacent but not truly unique. Google's 2025 helpful content updates penalize this pattern. | HIGH |

## Recommended Architecture

### System Overview

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         TIER 0: HOMEPAGE                                │
│                         /                                               │
│  Links to: 3 business-line hubs, locations hub, about, contact          │
├─────────────────────────────────────────────────────────────────────────┤
│                    TIER 1: BUSINESS-LINE HUBS (Pillar Pages)            │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐                  │
│  │ /commercial/  │  │ /residential/ │  │ /insurance/   │                │
│  │ (Pillar)     │  │ (Pillar)     │  │ (Pillar)     │                  │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘                  │
├─────────┼──────────────────┼──────────────────┼─────────────────────────┤
│         │      TIER 2: SERVICE PAGES (Cluster Cores)                    │
│  ┌──────┴──────────────────────────────────────┐                        │
│  │ /commercial/commercial-construction/         │                       │
│  │ /commercial/multi-family-construction/        │                      │
│  │ /commercial/disaster-recovery/                │                      │
│  │ /commercial/historic-restoration/             │                      │
│  │ /commercial/balcony-reconstruction/           │                      │
│  │ /commercial/exterior-waterproofing/           │                      │
│  │ /commercial/condo-remediation/                │                      │
│  │ /residential/luxury-custom-homes/             │                      │
│  │ /insurance/insurance-restoration/             │                      │
│  └──────┬───────────────────────────────────────┘                       │
├─────────┼───────────────────────────────────────────────────────────────┤
│         │      TIER 3: SERVICE+LOCATION PAGES                           │
│  ┌──────┴──────────────────────────────────────┐                        │
│  │ /commercial-construction-tampa/              │                       │
│  │ /commercial-construction-clearwater/          │                      │
│  │ /disaster-recovery-brandon/                   │                      │
│  │ ... (72 pages, 9 services x 8 cities)         │                     │
│  └──────┬───────────────────────────────────────┘                       │
├─────────┼───────────────────────────────────────────────────────────────┤
│         │      TIER 3B: SUPPORTING ARTICLES (Cluster Content)           │
│  ┌──────┴──────────────────────────────────────┐                        │
│  │ /commercial/articles/eco-friendly-construction/                      │
│  │ /commercial/articles/choosing-materials/                             │
│  │ /insurance/articles/maximize-payouts/                                │
│  │ ... (~200 quality articles, pruned from 349)                         │
│  └──────────────────────────────────────────────┘                       │
├─────────────────────────────────────────────────────────────────────────┤
│                    PARALLEL: LOCATION HUBS                              │
│  ┌──────────────────────────────────────────────┐                       │
│  │ /locations/                                   │                      │
│  │ /locations/tampa-fl/        → links to all    │                      │
│  │ /locations/clearwater-fl/     service+location│                      │
│  │ /locations/st-petersburg-fl/  pages for city  │                      │
│  │ ... (9 cities)                                │                      │
│  └──────────────────────────────────────────────┘                       │
└─────────────────────────────────────────────────────────────────────────┘
```

### Component Responsibilities

| Component | Responsibility | Links To | Links From |
|-----------|---------------|----------|------------|
| **Homepage** | Brand authority, trust signals, overview of all services | 3 hubs, locations, top services | All pages (via nav) |
| **Business-Line Hubs** (`/commercial/`, `/residential/`, `/insurance/`) | Pillar pages. Comprehensive overview of all services in that line. Target head terms like "commercial construction Tampa Bay" | All service pages in silo, top articles | Homepage, nav, service pages (breadcrumb up) |
| **Service Pages** (`/commercial/commercial-construction/`) | Cluster core. Deep dive on one service. Target "commercial construction" + modifiers | All location variants, related articles, parent hub | Hub page, location pages, articles |
| **Service+Location Pages** (`/commercial-construction-tampa/`) | Bottom-of-funnel conversion pages. Target "[service] [city]" keywords | Parent service page, nearby city variants, 2-3 related articles, location hub | Service page, location hub, articles |
| **Location Hubs** (`/locations/tampa-fl/`) | City authority pages. Target "[city] construction" keywords | All service+location pages for that city, parent locations index | Nav, service+location pages |
| **Supporting Articles** (`/commercial/articles/...`) | Topical authority builders. Answer specific questions, support cluster core | Parent service page, 1-2 related articles, relevant service+location page | Service pages, other articles |

## Recommended URL Structure

### Current vs. Proposed

| Page Type | Current URL | Proposed URL | Why Change |
|-----------|-------------|-------------|------------|
| Commercial hub | `/commercial/` | `/commercial/` | Keep (already good) |
| Service hub (duplicate) | `/services/commercial/` | **REDIRECT to** `/commercial/` | Eliminate duplicate |
| Service page | `/commercial-construction/` (root) | `/commercial/commercial-construction/` | Nest under silo |
| Service+Location | `/commercial-construction-tampa/` | `/commercial-construction-tampa/` | **Keep at root** (short URL = better CTR) |
| Blog article | `/eco-friendly-commercial-construction-in-tampa/` | `/commercial/guides/eco-friendly-construction/` | Move into silo |
| Location hub | `/locations/tampa-fl/` | `/locations/tampa-fl/` | Keep (already good) |
| Services index | `/services/` | `/services/` | Keep as overview, but remove duplicate sub-pages |

**Key Decision: Service+Location pages stay at root.** These are the money pages. Short URLs perform better in SERPs and get higher click-through rates. The silo relationship is established through internal linking and breadcrumbs, not URL path.

### Proposed Directory Structure

```
app/
├── page.tsx                                    # Homepage
├── commercial/
│   ├── page.tsx                                # Commercial pillar hub
│   ├── commercial-construction/page.tsx        # Service cluster core
│   ├── multi-family-construction/page.tsx
│   ├── disaster-recovery/page.tsx
│   ├── historic-restoration/page.tsx
│   ├── balcony-reconstruction/page.tsx
│   ├── exterior-waterproofing/page.tsx
│   ├── condo-remediation/page.tsx
│   ├── industrial-construction/page.tsx
│   ├── cpm-scheduling/page.tsx
│   └── guides/                                 # Supporting articles (commercial silo)
│       ├── eco-friendly-construction/page.tsx
│       ├── choosing-materials/page.tsx
│       ├── construction-budgeting/page.tsx
│       └── ... (~100 articles)
├── residential/
│   ├── page.tsx                                # Residential pillar hub
│   ├── luxury-custom-homes/page.tsx
│   ├── waterfront-homes/page.tsx
│   ├── fema-compliance/page.tsx
│   └── guides/                                 # Supporting articles (residential silo)
│       ├── smart-home-integration/page.tsx
│       ├── hurricane-resistant-design/page.tsx
│       └── ... (~30 articles)
├── insurance/
│   ├── page.tsx                                # Insurance pillar hub
│   ├── insurance-restoration/page.tsx
│   ├── building-consultant/page.tsx
│   ├── certified-estimating/page.tsx
│   ├── expert-witness/page.tsx
│   ├── appraisal-arbitration/page.tsx
│   ├── fire-restoration/page.tsx
│   ├── water-restoration/page.tsx
│   ├── hurricane-restoration/page.tsx
│   ├── mold-remediation/page.tsx
│   └── guides/                                 # Supporting articles (insurance silo)
│       ├── maximize-insurance-payouts/page.tsx
│       ├── claims-negotiation/page.tsx
│       └── ... (~40 articles)
├── commercial-construction-tampa/page.tsx      # Service+Location (root level)
├── commercial-construction-clearwater/page.tsx
├── disaster-recovery-brandon/page.tsx
├── ... (72 service+location pages at root)
├── locations/
│   ├── page.tsx                                # Locations index
│   ├── tampa-fl/page.tsx
│   ├── clearwater-fl/page.tsx
│   └── ... (9 cities)
├── about/page.tsx
├── contact/page.tsx
├── gallery/page.tsx
└── resources/page.tsx                          # Optional: links to all guides
```

### Structure Rationale

- **Service+Location pages at root:** These target "[service] [city]" -- the highest-intent commercial keywords. Root-level URLs are shorter, have higher CTR, and the silo relationship is signaled through internal linking, not URL depth.
- **Articles nested under silos:** Moving 349 articles from root into `/commercial/guides/`, `/residential/guides/`, `/insurance/guides/` creates clear topical boundaries. Google's crawlers can understand silo structure through URL paths.
- **Services index simplified:** `/services/` becomes a simple overview that links to the three business-line hubs. No more duplicating `/services/commercial/` alongside `/commercial/`.

## Architectural Patterns

### Pattern 1: Three-Tier Content Silo

**What:** Organize all content into three business-line silos (Commercial, Residential, Insurance), each with a pillar hub page, service cluster cores, and supporting articles. Service+Location pages exist at root but are linked into their respective silos.

**When to use:** Always. This is the foundation of the site architecture.

**Trade-offs:**
- Pro: Clear topical authority signals. Google rewards sites that demonstrate deep expertise in focused topics.
- Pro: Link equity flows efficiently within silos.
- Con: Requires 301 redirects for ~349 blog articles currently at root level.
- Con: Blog articles need to be categorized into silos (some may fit multiple).

**Implementation:**
```
Internal linking within Commercial silo:

/commercial/ (hub)
  ├──→ /commercial/commercial-construction/ (service page)
  │      ├──→ /commercial-construction-tampa/ (location page)
  │      ├──→ /commercial-construction-clearwater/
  │      └──→ /commercial/guides/choosing-materials/ (article)
  ├──→ /commercial/disaster-recovery/
  │      ├──→ /disaster-recovery-tampa/
  │      └──→ /commercial/guides/hurricane-preparation/
  └──→ /commercial/guides/eco-friendly-construction/ (article)
         └──→ /commercial/commercial-construction/ (links back up)
```

### Pattern 2: Bidirectional Location-Service Linking

**What:** Every service+location page links to both its parent service page AND its location hub. Location hubs link to every service+location page for that city. This creates a matrix of cross-links.

**When to use:** On all 72 service+location pages and all 9 location hub pages.

**Trade-offs:**
- Pro: Maximizes internal link equity distribution to money pages.
- Pro: Users can navigate by either service or location.
- Con: Requires discipline to maintain as new pages are added.

**Example link structure for `/commercial-construction-tampa/`:**

```
Breadcrumb: Home > Commercial > Commercial Construction > Tampa

Links UP to:
  - /commercial/commercial-construction/ (parent service)

Links ACROSS to (same service, different cities):
  - /commercial-construction-clearwater/
  - /commercial-construction-st-petersburg/
  - /commercial-construction-brandon/
  - ... (all 7 other cities)

Links ACROSS to (same city, different services):
  - /disaster-recovery-tampa/
  - /multi-family-construction-tampa/
  - /historic-restoration-tampa/
  - ... (all other services in Tampa)

Links DOWN to (supporting articles):
  - /commercial/guides/tampa-permits-guide/
  - /commercial/guides/design-build-benefits/

Links LATERAL to (location hub):
  - /locations/tampa-fl/
```

### Pattern 3: Article-to-Money-Page Link Flow

**What:** Every supporting article includes exactly 2-3 contextual links to money pages (service pages or service+location pages). Articles link to their silo's service page first, then to the most relevant service+location page.

**When to use:** On all ~200+ supporting articles.

**Trade-offs:**
- Pro: Funnels link equity and user traffic from informational content to conversion pages.
- Pro: Builds topical authority for the service pages they support.
- Con: Requires editorial discipline. Generic "learn more" anchors waste link value.

**Implementation:**
```typescript
// In article: /commercial/guides/eco-friendly-construction/
// Contextual links within the body text:

// Link 1: To parent service page (always)
<Link href="/commercial/commercial-construction/">
  commercial construction services
</Link>

// Link 2: To most relevant service+location page
<Link href="/commercial-construction-tampa/">
  commercial construction in Tampa
</Link>

// Link 3: To related article (optional, same silo only)
<Link href="/commercial/guides/choosing-materials/">
  sustainable building materials guide
</Link>
```

## Data Flow: Internal Linking

### Link Equity Flow (Ideal)

```
Homepage (highest authority)
    │
    ├──→ /commercial/ (hub receives ~33% of homepage equity)
    │      │
    │      ├──→ /commercial/commercial-construction/ (service page)
    │      │      │
    │      │      ├──→ /commercial-construction-tampa/ (money page)
    │      │      ├──→ /commercial-construction-clearwater/
    │      │      └──→ ... (location pages)
    │      │
    │      ├──→ /commercial/guides/article-1/
    │      │      └──→ /commercial/commercial-construction/ (links back up)
    │      │      └──→ /commercial-construction-tampa/ (links to money page)
    │      │
    │      └──→ /commercial/guides/article-2/
    │             └──→ (same pattern)
    │
    ├──→ /locations/tampa-fl/ ──→ /commercial-construction-tampa/
    │                          ──→ /disaster-recovery-tampa/
    │                          ──→ ... (all services in Tampa)
    │
    └──→ /residential/ and /insurance/ (same pattern)
```

### Key Internal Linking Rules

1. **Every page links UP** to its parent in the silo hierarchy via breadcrumbs.
2. **Hub pages link DOWN** to all their direct children (service pages).
3. **Service pages link DOWN** to all their location variants.
4. **Service+Location pages link ACROSS** to same-service-different-city and same-city-different-service.
5. **Articles link TO money pages** (service pages and service+location pages), never the reverse unless editorially relevant.
6. **Cross-silo links are rare** and intentional. A commercial article should not link to a residential service page unless contextually necessary.
7. **Location hub pages link to ALL service+location pages** for their city (this is their primary purpose).

## Content Hierarchy: What to Build vs. Prune

### Tier 1 Priority: Service+Location Pages (72 pages) -- KEEP AND IMPROVE

These are the highest-value pages. Each targets "[service] [city]" keywords with strong commercial intent.

**Current state:** 72 pages exist (9 services x 8 cities). These are well-structured.

**Improvement needed:**
- Ensure each has 1,500+ words of unique, city-specific content
- Add local project references, permit office details, neighborhood mentions
- Ensure bidirectional linking (to location hub AND parent service page)
- Each should have 8-10 FAQs with FAQ schema

### Tier 2 Priority: Hub and Service Pages (~15 pages) -- KEEP AND STRENGTHEN

These are the pillar pages that establish topical authority.

**Current state:** `/commercial/`, `/residential/`, `/insurance/` exist and are well-done. Some service pages exist at root level and need to be nested.

**Improvement needed:**
- Each hub page should link to ALL child service pages and top 3-5 articles
- Each hub page should be 3,000+ words with comprehensive topic coverage
- Eliminate duplicate pages (`/services/commercial/` vs `/commercial/`)

### Tier 3 Priority: Supporting Articles (~349 pages) -- AUDIT, PRUNE, REORGANIZE

**Current state:** 349 articles at root level. ~229 contain "in tampa" or "in florida" in their slug. Many appear to be thin content or topically redundant.

**Action plan:**
1. **Audit all 349 articles** for thin content, duplication, and cannibalization
2. **Prune aggressively:** Target keeping ~150-200 high-quality articles. 301-redirect pruned pages to the most relevant service page.
3. **Categorize remaining articles** into silos (commercial, residential, insurance)
4. **Move to silo paths:** `/commercial/guides/[slug]/`, `/residential/guides/[slug]/`, `/insurance/guides/[slug]/`
5. **Add contextual links** from each article to its parent service page and most relevant service+location page

### Content to Prune (Examples of Likely Thin/Redundant)

| Page | Problem | Action |
|------|---------|--------|
| `/top-commercial-contractors-in-tampa/` | Self-promotional, not useful content | 301 to `/commercial/` |
| `/the-preferred-commercial-general-contractors-in-tampa/` | Same as above, duplicative | 301 to `/commercial/` |
| `/hire-top-commercial-contractor-in-tampa/` | Third page on same topic | 301 to `/commercial/` |
| `/choosing-a-builder-expert-commercial-construction-in-tampa/` | Thin "hire us" content | 301 to `/commercial/commercial-construction/` |
| `/leading-commercial-contractors-in-tampa/` | Yet another self-promotional page | 301 to `/commercial/` |
| `/top-commercial-contractors-in-tampa-for-commercial-construction/` | Duplicate of the above pattern | 301 to `/commercial/` |
| `/sustainable-commercial-construction-in-tampa/` and `/sustainable-commercial-construction-in-tampa-2/` | Literal duplicate | 301 the `-2` to the original |

**Expected outcome:** Reducing from ~349 root-level articles to ~150-200 silo-organized articles will:
- Reduce crawl waste (Google crawls fewer but better pages)
- Eliminate cannibalization (no more 5 pages targeting "commercial contractor tampa")
- Concentrate link equity on money pages
- Improve overall site quality score

## Scaling Considerations

| Scale | Architecture Adjustments |
|-------|--------------------------|
| Current (9 services x 8 cities = 72 location pages) | Current scale is manageable. Focus on quality over quantity. |
| Adding 2-3 new cities (e.g., Plant City, Riverview, Wesley Chapel) | Add new service+location pages at root. Add new location hub under `/locations/`. Update InternalLinks component to include new cities. ~20-30 new pages. |
| Adding new services (e.g., roofing, concrete) | Create new service page under appropriate silo. Create service+location pages for all 8+ cities. Add 5-10 supporting articles. ~15-20 new pages per service. |
| Doubling article count | Only if articles are truly unique and high-quality. Maintain silo discipline. Each article must link to at least one service page. |

### Scaling Priority

1. **First priority:** Fix existing architecture (redirects, silo organization, pruning). This alone could yield 20-40% organic traffic improvement.
2. **Second priority:** Deepen content on existing service+location pages (unique city content, project references).
3. **Third priority:** Add new cities only when there is search demand to justify it. Plant City already has a location page -- good.

## Anti-Patterns

### Anti-Pattern 1: Flat URL Structure for Blog Content

**What people do:** Put all blog articles at root level (e.g., `/eco-friendly-commercial-construction-in-tampa/`).
**Why it's wrong:** Creates a flat hierarchy where 349 articles compete with 72 money pages for crawl budget. Google cannot determine topical relationships from URL structure alone, and internal linking must work harder to compensate.
**Do this instead:** Nest articles under their silo: `/commercial/guides/eco-friendly-construction/`. This creates clear URL-based topical signals that reinforce internal linking.

### Anti-Pattern 2: Multiple Pages Targeting the Same Keyword

**What people do:** Create 5+ pages about "commercial contractor tampa" (hire us, top contractors, best contractors, choosing a contractor, etc.).
**Why it's wrong:** These pages cannibalize each other. Google picks the one it thinks is best (often not the one you want) and suppresses the rest. Net result: worse rankings than having one authoritative page.
**Do this instead:** Consolidate into one definitive page per keyword target. 301-redirect the others to it.

### Anti-Pattern 3: Location Pages Without Unique Content

**What people do:** Create city pages that are template-cloned with only the city name swapped out (e.g., "We provide [service] in [city]. Call us today.").
**Why it's wrong:** Google's helpful content system explicitly penalizes this as "scaled content abuse." These pages add no value for users.
**Do this instead:** Each service+location page must contain genuinely unique content: local permit processes, city-specific building codes, notable local projects, neighborhood-specific information, local climate/weather factors.

### Anti-Pattern 4: Cross-Silo Linking Without Purpose

**What people do:** Add "Related Articles" sections that link to any 3 random articles regardless of topic.
**Why it's wrong:** Dilutes the topical signal of your content silo. A commercial construction article linking to a residential custom homes article confuses Google about what the page is about.
**Do this instead:** Related links should stay within the same silo. If cross-silo linking is editorially necessary (e.g., insurance restoration article mentioning commercial construction), limit to 1 link maximum.

## Implementation Priority for FCS Site

### Phase 1: Audit and Prune (Highest Impact, Lowest Risk)
1. Audit all 349 blog articles for quality, uniqueness, and keyword targeting
2. Identify and consolidate duplicate/cannibalized content (301 redirects)
3. Target pruning to ~150-200 quality articles
4. Fix location hub pages to link to service+location pages (not generic service hubs)

### Phase 2: Silo Organization (High Impact, Medium Effort)
1. Eliminate duplicate hub pages (`/services/commercial/` -> 301 to `/commercial/`)
2. Move remaining articles into silo paths with 301 redirects
3. Update breadcrumbs to reflect silo hierarchy
4. Update InternalLinks component to enforce silo boundaries

### Phase 3: Content Deepening (Medium Impact, High Effort)
1. Expand service+location pages to 1,500+ words each with unique city content
2. Expand hub pillar pages to 3,000+ words each
3. Add new supporting articles to fill gaps in each silo (target 8-12 per service cluster)
4. Ensure every article has 2-3 contextual links to money pages

### Phase 4: Technical SEO Reinforcement
1. Update sitemap.xml to reflect new URL structure
2. Ensure canonical tags are correct on all pages
3. Add hreflang if targeting specific Florida regions
4. Submit updated sitemap to Google Search Console
5. Monitor for crawl errors from 301 redirects

## Sources

- [BrightLocal: How to Build Content Silos for Local SEO](https://www.brightlocal.com/learn/how-to-build-content-silos-for-local-seo/) -- MEDIUM confidence (industry authority)
- [Search Engine Land: Service Area Pages Guide](https://searchengineland.com/guide/service-area-pages) -- HIGH confidence (authoritative SEO publication)
- [Search Engine Land: Scalable Local SEO Practices](https://searchengineland.com/guide/scalable-local-seo-practices) -- HIGH confidence
- [Search Engine Land: Local Content Silos](https://searchengineland.com/local-content-silos-secret-local-search-success-223371) -- MEDIUM confidence (older but foundational)
- [Sterling Sky: Service Area Pages SEO](https://www.sterlingsky.ca/how-to-create-unique-and-helpful-service-area-pages-for-local-businesses/) -- HIGH confidence (local SEO specialist)
- [Robben Media: Location Page vs Service Page](https://robbenmedia.com/location-page-vs-service-page-understanding-the-key-differences-for-seo-success/) -- MEDIUM confidence
- [RocketClicks: Silo Structures for Service Area Pages](https://rocketclicks.com/client-education/how-website-silo-structures-benefit-multiple-service-area-pages/) -- MEDIUM confidence
- [SEOProfy: Local SEO for Multiple Locations 2026](https://seoprofy.com/blog/seo-for-multiple-locations/) -- MEDIUM confidence
- [Siteimprove: Internal Linking Blueprint](https://www.siteimprove.com/blog/internal-linking-strategy-for-seo/) -- HIGH confidence
- [Search Engine Land: Topic Clusters Guide](https://searchengineland.com/guide/topic-clusters) -- HIGH confidence

---
*Architecture research for: FCS local SEO site structure optimization*
*Researched: 2026-02-15*
