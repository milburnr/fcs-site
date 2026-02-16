# Project Research Summary

**Project:** Florida Construction Specialists (FCS) -- Local SEO Dominance
**Domain:** Local SEO for commercial construction / insurance restoration / condo remediation (Tampa Bay)
**Researched:** 2026-02-15
**Confidence:** HIGH

## Executive Summary

FCS has a 496-page Next.js static site that is structurally sound but suffering from content quality debt inherited from its WordPress migration. The site has strong technical foundations (comprehensive schema markup, static export for speed, 72 service-x-location pages, solid SB4-D and insurance restoration content). However, an estimated 22% of pages are thin content (under 500 words), ~349 blog articles sit at root level competing with money pages for crawl budget, and multiple pages cannibalize each other for the same keywords. All four research tracks converge on one conclusion: the site needs aggressive pruning and restructuring before any new content is added. Adding more content to a site with a potential Helpful Content classifier issue will make things worse, not better.

The recommended approach is a "clean house first" strategy: audit and prune thin/duplicate/off-topic content, reorganize remaining articles into three content silos (Commercial, Residential, Insurance), strengthen the existing 72 service+location pages with genuinely unique city-specific content, and only then build new differentiating features like project portfolios and case studies. The SB4-D condo remediation content is FCS's strongest competitive moat -- zero Tampa competitors have comparable depth -- and should be expanded into a full authority hub once the foundation is clean.

The single biggest risk is doorway page classification on the location pages. If Google's SpamBrain detects that the 72 service+location pages share >60% template content, the entire site faces ranking suppression that takes 3-9 months to recover from. The single biggest opportunity is the SB4-D content hub: Florida's structural inspection mandates are creating urgent demand from ~900,000 condo units, FCS has an in-house engineer as a differentiator, and no competitor owns this keyword space in Tampa Bay.

## Top Findings (Cross-Research Consensus)

These findings were flagged by multiple researchers independently, indicating high confidence:

1. **Content pruning is prerequisite to everything else.** STACK, FEATURES, ARCHITECTURE, and PITFALLS all flag thin content and the Helpful Content classifier as the primary risk. 108 pages under 500 words, ~349 root-level blog articles, and keyword cannibalization across duplicate pages must be addressed before any new content work. This was unanimous across all four research tracks.

2. **Location pages must pass the doorway page test.** STACK and PITFALLS both call out template-swapped location pages as a critical penalty risk under Google's August 2025 spam update. ARCHITECTURE provides the fix: each page needs 800+ words of genuinely unique content with city-specific project references, local building codes, and neighborhood details. The `generateLocationFAQs()` function is specifically flagged as a risk.

3. **Three-tier content silo is the correct architecture.** ARCHITECTURE recommends Business Line Hubs > Service Pages > Location+Service Pages with supporting articles nested under silos. STACK's topical authority cluster pattern corroborates this. FEATURES identifies the current flat blog structure as an anti-feature. All three agree: articles must move from root level into silo paths.

4. **Project portfolios are the #1 missing differentiator.** FEATURES and STACK both identify that every major Tampa competitor (Van Bebber, CSI) showcases project portfolios prominently. FCS has zero case study pages. This is the highest-impact addition for both SEO (backlink magnet, E-E-A-T signal) and conversion (visual proof of work quality). However, this requires client cooperation to provide project data and photos.

5. **SB4-D content is an unreplicated competitive advantage.** STACK and FEATURES both identify the SB4-D condo remediation content (10+ existing pages) as FCS's strongest moat. No Tampa competitor has this depth. With SB4-D deadlines actively hitting (Dec 2024/2025 inspections, Jan 2026 reserve funding), this is a time-sensitive opportunity. FCS's in-house engineer amplifies the E-E-A-T signal.

6. **NAP consistency and GBP optimization are table stakes being underserved.** STACK, FEATURES, and PITFALLS all flag that NAP must be identical across all 496 pages and all external citations. PITFALLS adds a nuance: FCS is headquartered in Ruskin but targets Tampa, creating a trust gap if location signals conflict. GBP optimization (weekly posts, review generation, category optimization) is off-site work that all researchers rate as highest-ROI.

7. **Schema markup needs targeted improvements, not a rebuild.** STACK identifies specific schema gaps (missing AggregateRating, missing hasOfferCatalog, incorrect priceRange). PITFALLS warns against schema over-reach (LocalBusiness on every page, rating schema without visible reviews). The existing schema foundation is strong; it needs refinement, not replacement.

## Key Findings

### Recommended Stack

See: [STACK.md](./STACK.md)

The existing Next.js 15 static site on Netlify is the correct stack. No migration needed. The focus is on SEO infrastructure additions.

**Core technologies and techniques:**
- **Enhanced Schema Markup** (on-site): Add AggregateRating, hasOfferCatalog, GeoShape service areas. Fix priceRange format.
- **BrightLocal or Whitespark** (off-site tool): Citation tracking, local rank monitoring, review management. ~$39/month.
- **Content Silo Architecture** (on-site): Three-tier hub-spoke structure for Commercial, Residential, Insurance business lines.
- **GBP Optimization** (off-site): Weekly posts, review generation, complete category/service descriptions, geotagged photo uploads.
- **Geo-tagged Images** (on-site): Embed EXIF GPS coordinates in project photos for local relevance signals.

### Expected Features

See: [FEATURES.md](./FEATURES.md)

**Must have (table stakes):**
- Consistent NAP on every page matching GBP exactly
- AggregateRating schema reflecting real Google reviews
- Canonical URLs on all 496 pages (audit needed)
- Trust badges visible sitewide ("40+ Years | Licensed CBC1262722")
- Meta descriptions under 160 chars, remove `keywords` meta tag

**Should have (differentiators):**
- Project portfolio with 20+ case studies (photos, scope, timeline, outcomes)
- Before/after photo galleries with geo-tagged images
- SB4-D content hub expansion (deadline calendar, compliance checklist, cost guidance)
- Content silo structure with articles nested under business lines
- Location pages with genuinely unique city-specific content

**Defer (v2+):**
- Video content (project walkthroughs, drone footage)
- Interactive service area map
- Review management platform (Podium/Birdeye -- only if manual outreach fails)

### Architecture Approach

See: [ARCHITECTURE.md](./ARCHITECTURE.md)

The site needs a three-tier content silo with 301 redirects for ~150 pruned articles and all duplicate hub pages. Service+location pages stay at root level (short URLs, high CTR). Blog articles move into `/commercial/guides/`, `/residential/guides/`, `/insurance/guides/`. The duplicate `/services/commercial/` vs `/commercial/` structure must be resolved.

**Major components:**
1. **Business-Line Hubs** (`/commercial/`, `/residential/`, `/insurance/`) -- Pillar pages, 3,000+ words, link to all child service pages
2. **Service Pages** (nested under hubs) -- Cluster cores targeting head terms, link down to location variants
3. **Service+Location Pages** (72 pages at root) -- Money pages targeting "[service] [city]", bidirectional linking to service parent and location hub
4. **Location Hubs** (`/locations/[city]/`) -- City authority pages linking to ALL service+location pages for that city
5. **Supporting Articles** (nested under silos) -- Topical authority builders, each linking to 2-3 money pages

### Critical Pitfalls

See: [PITFALLS.md](./PITFALLS.md)

1. **Doorway page classification on location pages** -- Audit all 72 service+location pages. If diff shows >40% shared content between city variants, expand with unique local content or consolidate. Recovery takes 3-6 months.
2. **Thin content triggering site-wide Helpful Content classifier** -- 108 pages under 500 words (22% of site). Prune aggressively: expand to 800+ words, merge via 301 redirect, or noindex. Classifier recovery takes 3-9 months.
3. **Keyword cannibalization across 496 pages** -- Multiple pages target "commercial contractor Tampa" and similar terms. Build keyword-to-URL map, pick winners, 301-redirect losers. Without this, no page ranks well.
4. **Off-topic content diluting topical authority** -- At least one completely off-topic page exists (fishing charters). Others likely exist. Remove immediately.
5. **Ruskin vs. Tampa location signal conflict** -- HQ in Ruskin, 199 pages mention Tampa. Schema must use real Ruskin address with `areaServed` for Tampa Bay. Over-targeting Tampa without substance triggers distrust.

## Implications for Roadmap

### Phase 1: Content Audit and Cleanup
**Rationale:** Every researcher agrees: fix the foundation before building on it. Thin content, cannibalization, and off-topic pages are actively harming the site right now. This phase has the highest ROI because it removes negatives rather than adding positives.
**Delivers:** Clean, pruned site with ~300-350 quality pages. Keyword-to-URL map. Redirect map for ~150 pruned pages. Off-topic content removed.
**Addresses:** Thin content audit, keyword cannibalization identification, off-topic page removal, wp-content directory cleanup, Crawl-delay removal from robots.txt
**Avoids:** Helpful Content classifier suppression, doorway page classification, crawl budget waste
**Needs research:** No -- audit methodology is well-documented. Standard tooling (Screaming Frog or manual audit).

### Phase 2: Technical SEO and Silo Restructuring
**Rationale:** Once content is pruned, reorganize what remains into proper silos. This phase creates the URL structure and internal linking patterns that all future content will follow. Must happen before new content is created so new pages are born into the correct silo.
**Delivers:** Three-tier silo structure with articles nested under business lines. 301 redirects for moved articles. Updated breadcrumbs. Duplicate hub pages resolved. Fixed meta descriptions sitewide. Canonical tag audit complete. Schema markup improvements deployed. Pre-deploy validation script.
**Addresses:** Silo organization, internal linking architecture, meta description fixes, canonical URLs, schema enhancements (AggregateRating, hasOfferCatalog, GeoShape), trust badges sitewide, NAP consistency audit
**Avoids:** Cross-silo link equity leakage, schema over-reach, meta keyword stuffing signals, deploy-time SEO regressions
**Needs research:** Partial -- 301 redirect strategy for ~150 articles needs careful keyword mapping to avoid losing existing rankings.

### Phase 3: Location Page Strengthening
**Rationale:** After pruning and restructuring, the 72 service+location pages are the highest-value pages on the site. They target bottom-of-funnel "[service] [city]" queries. Making each genuinely unique is the primary defense against doorway page classification.
**Delivers:** 72 location pages each with 1,500+ words of unique city-specific content, local project references, municipal building department info, city-specific FAQs (replacing generateLocationFAQs()), bidirectional linking to location hubs and service parents.
**Addresses:** Location page uniqueness, doorway page risk mitigation, Ruskin vs. Tampa targeting balance
**Avoids:** Doorway page classification, thin content per-page
**Needs research:** Yes -- requires research into each municipality's building codes, permit processes, and local construction context for 8 cities.

### Phase 4: Project Portfolio and E-E-A-T
**Rationale:** Project case studies are the #1 missing differentiator vs. competitors. They also provide the unique local content needed by location pages (Phase 3) and the E-E-A-T signals needed to satisfy Helpful Content requirements. This phase depends on client providing project data and photos.
**Delivers:** `/projects/` hub with 20+ individual case study pages. Before/after galleries. Author bios with credentials on blog posts. Geo-tagged project photos.
**Addresses:** Project portfolio gap, E-E-A-T signals, before/after galleries, image geo-tagging
**Avoids:** AI content without expertise signals, stock photo usage, generic content that lacks first-hand experience
**Needs research:** No -- case study page patterns are well-established. Main blocker is client data, not technical uncertainty.

### Phase 5: Content Hub Expansion (SB4-D and Insurance)
**Rationale:** With the foundation clean, silos in place, location pages unique, and E-E-A-T established, now expand the two biggest competitive moats: SB4-D condo remediation and insurance restoration. These are time-sensitive (SB4-D deadlines) and high-value (large-loss commercial claims).
**Delivers:** Expanded SB4-D content hub (compliance checklist, deadline calendar, cost guidance, inspection process guides). Enhanced insurance restoration guides (claims process, adjuster relationships, hurricane damage timelines). New supporting articles filling gaps in each silo.
**Addresses:** SB4-D content hub expansion, insurance restoration guides, blog content targeting local long-tail queries
**Avoids:** Content that cannicalizes existing pages (keyword map from Phase 1 prevents this)
**Needs research:** Yes -- SB4-D regulatory details and deadlines need verification against current Florida statutes.

### Phase 6: Off-Site SEO (GBP, Citations, Reviews)
**Rationale:** Off-site factors (GBP signals, citations, reviews) account for ~50% of local pack ranking. This work can begin in parallel with on-site phases but is listed last because on-site must be clean first -- sending Google to a messy site via strong off-site signals is counterproductive.
**Delivers:** Optimized GBP profile, 50+ consistent citations across directories, review generation system, weekly GBP posting cadence, social profile establishment (LinkedIn minimum).
**Addresses:** GBP optimization, citation building, review generation, social profiles, local link building
**Avoids:** NAP inconsistency across citations, fake reviews, GBP suspension
**Needs research:** No -- citation building and GBP optimization are well-documented processes. BrightLocal/Whitespark handle most of this.

### Phase Ordering Rationale

- **Phase 1 before everything:** Pruning thin content is the single highest-leverage action. A site suppressed by the Helpful Content classifier cannot rank regardless of how good new content is.
- **Phase 2 before Phase 3:** Silo structure must exist before location pages are strengthened, so new internal links follow silo discipline from day one.
- **Phase 3 before Phase 4:** Location pages need project references from case studies, but the location page structure and uniqueness requirements must be defined first.
- **Phase 4 can partially overlap Phase 3:** As project data comes in from the client, case studies can be built while location pages are being enhanced.
- **Phase 5 after Phase 4:** Content hub expansion builds on the E-E-A-T foundation established by case studies and author attribution.
- **Phase 6 in parallel starting Phase 2:** GBP optimization and citation building can begin once NAP consistency is verified on-site. Review generation is ongoing.

### Research Flags

Phases likely needing deeper research during planning:
- **Phase 2:** 301 redirect strategy for ~150 articles requires keyword-level analysis to avoid ranking losses
- **Phase 3:** Municipality-specific building codes and permit processes for 8 Florida cities
- **Phase 5:** Current SB4-D regulatory deadlines and requirements (law is actively being interpreted)

Phases with standard patterns (skip research-phase):
- **Phase 1:** Content audit methodology is well-established (Screaming Frog, manual review, word count analysis)
- **Phase 4:** Case study page patterns are standard in construction industry
- **Phase 6:** Citation building, GBP optimization, and review generation are thoroughly documented

## Tensions and Contradictions

1. **Pruning vs. URL equity:** Removing ~150 pages risks losing any backlink authority those URLs accumulated. ARCHITECTURE recommends 301 redirects for all pruned pages, but PITFALLS warns that redirect chains can dilute equity. Resolution: 301 redirect every pruned URL directly to its most relevant surviving page. Never chain redirects.

2. **Location page quantity vs. quality:** STACK recommends location pages for every service-city combination (the matrix is valuable). PITFALLS warns that pages without 800+ unique words should not exist. Resolution: Keep all 72 existing service+location pages but invest heavily in making each genuinely unique. Do not add new city pages until existing ones are strong.

3. **Schema on every page vs. schema restraint:** STACK recommends comprehensive schema across the site. PITFALLS warns against LocalBusiness schema on every page and rating schema without visible reviews. Resolution: LocalBusiness schema on homepage and location pages only. Service schema on service pages. FAQ schema only where FAQs are visible. AggregateRating only when real reviews are displayed.

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| Stack | HIGH | Existing stack is correct. Improvements are incremental. Google's own documentation confirms schema and GBP ranking factors. |
| Features | MEDIUM-HIGH | Competitor analysis confirms portfolio gap. Feature prioritization is well-supported. Client dependency on project data introduces uncertainty. |
| Architecture | HIGH | Three-tier silo pattern is well-documented across multiple authoritative SEO sources. URL structure recommendations are backed by CTR research. |
| Pitfalls | HIGH | All critical pitfalls verified against current Google policies and algorithm updates through Dec 2025. Site-specific evidence (page counts, content analysis) supports each finding. |

**Overall confidence:** HIGH

### Gaps to Address

- **Actual content quality of 496 pages:** Research identified the risk but did not audit every page. Phase 1 must include a systematic page-by-page audit with word counts, uniqueness scores, and keyword targets.
- **Current Google Search Console data:** No GSC data was analyzed. Actual indexing status, crawl errors, and keyword rankings would sharpen prioritization.
- **GBP current state:** GBP completeness, review count, and posting history are unknown. Phase 1 should include a GBP audit.
- **Backlink profile:** No backlink analysis was performed. Understanding which pages have external links is critical before pruning (do not 301 a page with strong backlinks without care).
- **Client willingness to provide project data:** Case studies require FCS to share project photos, details, and client permissions. If this data is unavailable, Phase 4 is blocked.

## Sources

### Primary (HIGH confidence)
- [Google Business Profile Help: Improve Local Ranking](https://support.google.com/business/answer/7091)
- [Google Search Central: LocalBusiness Structured Data](https://developers.google.com/search/docs/appearance/structured-data/local-business)
- [Google Structured Data Policies](https://developers.google.com/search/docs/appearance/structured-data/sd-policies)
- [Google Search AI Content Guidance](https://developers.google.com/search/blog/2023/02/google-search-and-ai-content)
- [Schema.org: HomeAndConstructionBusiness](https://schema.org/HomeAndConstructionBusiness)
- [Search Engine Land: Service Area Pages Guide](https://searchengineland.com/guide/service-area-pages)
- [Search Engine Land: Topic Clusters Guide](https://searchengineland.com/guide/topic-clusters)
- [Sterling Sky: Service Area Pages SEO](https://www.sterlingsky.ca/how-to-create-unique-and-helpful-service-area-pages-for-local-businesses/)
- [Florida SB4-D Building Safety Law](https://www.thorntontomasetti.com/florida-sb4d-building-safety-law)

### Secondary (MEDIUM confidence)
- [BrightLocal: Local SEO Schema Templates](https://www.brightlocal.com/learn/local-seo-schema-templates/)
- [BrightLocal: Content Silos for Local SEO](https://www.brightlocal.com/learn/how-to-build-content-silos-for-local-seo/)
- [BrightLocal: Local Ranking Factors 2026](https://www.brightlocal.com/learn/google-local-algorithm-and-ranking-factors/)
- [Backlinko: Local SEO Definitive Guide 2026](https://backlinko.com/local-seo-guide)
- [ServiceTitan: Construction SEO Guide 2025](https://www.servicetitan.com/blog/construction-seo)
- [Hook Agency: Contractor SEO Mistakes 2025](https://hookagency.com/blog/contractor-seo-mistakes-2025/)
- [Contractor Growth Network: Helpful Content for Contractors](https://www.contractorgrowthnetwork.com/google-helpful-content-algorithm-update/)
- [Van Bebber, CSI Tampa, Rossi Construction websites](https://vanbebber.com/) (competitor analysis)

---
*Research completed: 2026-02-15*
*Ready for roadmap: yes*
