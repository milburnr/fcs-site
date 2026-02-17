# Project State

## Project Reference

See: .planning/PROJECT.md (updated 2026-02-15)

**Core value:** The site ranks page 1 for priority keywords in Tampa Bay and generates organic leads for insurance restoration and condo remediation services.
**Current focus:** Phase 5: Location Page Strengthening

## Current Position

Phase: 5 of 9 (Location Page Strengthening)
Plan: 8 of 9 in current phase
Status: Executing Phase 5
Last activity: 2026-02-17 -- Completed 05-07 (Brandon Location Pages)

Progress: [████████░░] 78%

## Performance Metrics

**Velocity:**
- Total plans completed: 20
- Average duration: ~4min
- Total execution time: ~70 min

**By Phase:**

| Phase | Plans | Total | Avg/Plan |
|-------|-------|-------|----------|
| - | - | - | - |

**Recent Trend:**
- Last 5 plans: none
- Trend: N/A

*Updated after each plan completion*
| Phase 01 P01 | 5min | 3 tasks | 178 files |
| Phase 01 P02 | 4min | 2 tasks | 3 files |
| Phase 01 P03 | 4min | 3 tasks | 202 files |
| Phase 01 P04 | 3min | 2 tasks | 4 files |
| Phase 01 P05 | 10min | 1 tasks | 1 files |
| Phase 01 P07 | 6min | 2 tasks | 310 files |
| Phase 01 P06 | 3min | 2 tasks | 2 files |
| Phase 02 P01 | 5min | 2 tasks | 300 files |
| Phase 02 P02 | 3min | 1 tasks | 2 files |
| Phase 02 P03 | 8min | 2 tasks | 194 files |
| Phase 02 P04 | 10min | 2 tasks | 280 files |
| Phase 02 P05 | 5min | 2 tasks | 7 files |
| Phase 02 P06 | 15min | 4 tasks | 96 files |
| Phase 03 P01 | 5min | 2 tasks | 280 files |
| Phase 03 P02 | 3min | 2 tasks | 2 files |
| Phase 03 P03 | -- | -- | -- |
| Phase 03 P04 | 2min | 2 tasks | 2 files |
| Phase 03 P03 | 10min | 2 tasks | 429 files |
| Phase 04 P01 | 7min | 2 tasks | 2 files |
| Phase 04 P02 | 6min | 1 tasks | 1 files |
| Phase 04 P03 | 5min | 1 tasks | 2 files |
| Phase 05 P01 | 25min | 2 tasks | 9 files |
| Phase 05 P05 | 30min | 2 tasks | 9 files |
| Phase 05 P03 | 28min | 2 tasks | 9 files |
| Phase 05 P04 | 30min | 2 tasks | 9 files |
| Phase 05 P07 | 29min | 2 tasks | 9 files |
| Phase 05 P02 | 35min | 2 tasks | 9 files |

## Accumulated Context

### Decisions

Decisions are logged in PROJECT.md Key Decisions table.
Recent decisions affecting current work:

- [Roadmap]: Clean-house-first strategy -- prune and restructure before adding new content
- [Roadmap]: Schema + NAP merged into single phase (both are trust infrastructure)
- [Roadmap]: SB4-D and Insurance kept as separate phases (different markets, different keyword spaces)
- [Phase 01-01]: Removed Crawl-delay directive (not supported by Googlebot)
- [Phase 01-01]: Keywords removal targets only metadata exports, preserves data object keywords
- [Phase 01-01]: Word count categories: thin (<300), moderate (300-499), solid (500-999), strong (1000+)
- [Phase 01-02]: 122 of 128 placeholder directories already deleted prior to plan execution
- [Phase 01-02]: 6 thin pages are real service pages needing content expansion, not deletion
- [Phase 01-03]: 97 thin pages categorized: 30 expand later, 64 redirect, 3 noindex
- [Phase 01-03]: Hub/structural pages kept for Phase 4 expansion, SB4-D pages for Phase 7
- [Phase 01-03]: 428 indexable pages remain after thin content cleanup
- [Phase 01-04]: Keyword derivation priority: title extraction first, URL slug fallback
- [Phase 01-04]: Page type priority for cannibalization: service-location > hub > location > article
- [Phase 01-04]: 428 pages mapped, 3 cannibalization conflicts resolved, zero duplicates
- [Phase 01-05]: 277 oversized descriptions rewritten (314 total minus 37 excluded redirect/noindex)
- [Phase 01-05]: City names stripped from keywords to avoid template redundancy
- [Phase 01-05]: CTA rotation enforced: zero consecutive duplicates across all rewrites
- [Phase 01-07]: 31 additional oversized descriptions fixed beyond Plan 05 scope (25 top-level + 6 nested)
- [Phase 01-07]: 48 short descriptions (<120 chars) documented for future expansion
- [Phase 01-07]: Pre-existing TypeScript error in app/commercial/page.tsx fixed (optional chaining)
- [Phase 01-06]: 361 indexable URLs in sitemap (431 pages - 67 redirected - 3 noindexed)
- [Phase 01-06]: Priority tiers: homepage 1.0, hubs 0.9, service-location 0.8, locations 0.7, articles 0.6, utility 0.5
- [Phase 02-01]: All 3 winner hubs already had correct self-referencing canonicals
- [Phase 02-01]: No unique content in loser pages warranted merging into winners
- [Phase 02-01]: 38 Phase 1 redirects updated to prevent chains through /commercial-construction/
- [Phase 02-01]: Child pages under /services/commercial/ (6) and /services/residential/ (3) preserved
- [Phase 02-02]: 190 articles classified (not 277 estimated; 14 structural/service pages excluded from 204 keyword-map articles)
- [Phase 02-02]: Articles target /{silo}/guides/{slug}/ path structure
- [Phase 02-02]: Classification priority: service-silo > keyword-pattern > audience-fallback (zero default fallbacks)
- [Phase 02-03]: 34 Phase 1 redirects updated from hub targets to new silo paths
- [Phase 02-03]: 156 new redirects added for articles without prior redirects
- [Phase 02-03]: Guides index pages use static JSON import for Next.js static export compatibility
- [Phase 02-04]: 999 internal link URL replacements across 274 files
- [Phase 02-04]: 18 articles had only 1 money link; all now have 2+ (balcony→/balcony-reconstruction/, waterproofing→/exterior-waterproofing/)
- [Phase 02-04]: verify-silos.js classification disagreements are NOT actual silo bleed; script update deferred to Plan 06
- [Phase 02-05]: Build-output BFS is authoritative (captures dynamic component links); source-code audit misses ~200 pages
- [Phase 02-05]: 368/428 pages reachable (86%), all key pages within 2 clicks of homepage
- [Phase 02-05]: ~11 utility/legacy pages expected unreachable (/404/, /privacy/, /team/, /premium-homepage/, etc.)
- [Phase 02-06]: All 69 remaining unclassified articles moved to silos (total now 259)
- [Phase 02-06]: Pre-deploy validation passes all 6 checks, 0 failures
- [Phase 02-06]: BFS: 418/428 reachable (97.7%), up from 368/428 (86%) after 02-05
- [Phase 03-01]: 302 wrong phone numbers, license numbers, and CGC prefix references replaced across 280 pages
- [Phase 03-01]: FCS holds CBC (Certified Building Contractor) license, not CGC -- all FCS self-references corrected
- [Phase 03-01]: 26 educational CGC references preserved in advisory content about Florida licensing types
- [Phase 03-02]: Kept minPrice as deprecated no-op in ServiceSchema (145 pages pass it)
- [Phase 03-02]: License credential renamed from General Contractor to Certified Building Contractor (CBC)
- [Phase 03-04]: Trust line is text-based (no icons) -- clean design per user decision
- [Phase 03-04]: SAB address shows city + state only -- owner home address not displayed
- [Phase 03-04]: Only verified credentials in trust lines (removed unverified $40M+ Bonding claim)
- [Phase 03-03]: LocalBusinessSchema restricted to 82 locally-relevant pages (homepage + 9 locations + 72 service-location)
- [Phase 03]: Service-location pages keep both LocalBusinessSchema and ServiceSchema for dual local+service signals
- [Phase 03]: serviceCategories (hasOfferCatalog) added to all 119 ServiceSchema instances, not just core hubs
- [Phase 04-03]: Used PARALLAX_IMAGES.hurricane for insurance hub visual break
- [Phase 04-03]: Replaced basic "Why FCS" bullet list with 5-card differentiator grid + license card
- [Phase 04-03]: 8 FAQs written targeting insurance restoration contractor queries
- [Phase 04-03]: CTA vocabulary: "Request a Claims Consultation" (primary), "Discuss Your Loss" (secondary)
- [Phase 04-01]: Services hub uses 5-column grid (3+2) for contact two-column 60/40 split
- [Phase 04-01]: Insurance service cards use text-only layout to differentiate from image-heavy commercial cards
- [Phase 04-01]: Contact page city badges are links to location pages for internal linking
- [Phase 04-02]: Plant City gets hub-only link (no service-location pages exist)
- [Phase 04-02]: 72 service-location links dynamically generated via CITY_DATA + SERVICE_LOCATION_PAGES arrays
- [Phase 04-02]: CITY_DATA defined inline (custom context prose per city doesn't belong in shared constants)
- [Phase 04-02]: Locations hub rewritten from 113 words to 2,000+ with 81+ organized links
- [Phase 05-01]: Tampa pages use prose-heavy format: Hero > Market Intro > Parallax > Capabilities > Local Expertise > Process > FAQ > Links > CTA
- [Phase 05-01]: Building dept pattern: name + link only, styled as callout card with border-left accent
- [Phase 05-01]: Word count over line count: pages 267-396 lines but all exceed 2,000 words (cleaner code)
- [Phase 05-01]: Each Tampa page has unique market intro angle, unique FAQ set (6 per page), different neighborhood coverage
- [Phase 05-05]: Sarasota pages focus on barrier island luxury market: Siesta Key, Lido Key, Longboat Key, Bird Key
- [Phase 05-05]: Hurricane Ian (2022) integrated across disaster recovery, insurance, condo remediation, balcony, waterproofing pages
- [Phase 05-05]: Sarasota School of Architecture (Paul Rudolph) featured in historic-restoration page
- [Phase 05-05]: Dropped ArticleSchema, cost tables, stats sections from old format per Tampa pattern
- [Phase 05-03]: Clearwater pages emphasize barrier island geography, Gulf salt spray, Memorial Causeway access constraints
- [Phase 05-03]: SB4-D content integrated into balcony, condo remediation, and waterproofing pages
- [Phase 05-03]: Clearwater neighborhoods matched per service: Harbor Oaks (historic), Sand Key (condo/balcony), Island Estates (luxury), US 19 (commercial)
- [Phase 05-02]: Peninsula geography as unifying theme: bidirectional salt exposure, no protected building orientation, citywide SB 4-D applicability
- [Phase 05-02]: Unique parallax images per page, no overlap with Tampa image assignments
- [Phase 05-02]: SB 4-D citywide applicability (entire city within 3-mile coastal zone) referenced in condo-remediation, balcony, waterproofing pages

### Pending Todos

- Consolidate or redirect legacy pages (/engineering/, /other-services/, /our-process/, /team/, /team-members/)

### Blockers/Concerns

- Phase 5 (Location Pages) requires research into 8 Florida municipalities' building codes and permit processes
- Phase 7 (SB4-D) requires verification of current SB4-D regulatory deadlines against Florida statutes
- Doorway page risk is the single biggest threat -- location page uniqueness in Phase 5 is critical

## Session Continuity

Last session: 2026-02-17
Stopped at: Completed 05-03-PLAN.md (Clearwater location pages)
Resume file: .planning/phases/05-location-page-strengthening/05-04-PLAN.md
