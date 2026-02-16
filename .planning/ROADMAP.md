# Roadmap: FCS Local SEO Dominance

## Overview

Transform the 496-page FCS site from "exists online" to "dominates local search in Tampa Bay" by systematically cleaning content debt, restructuring into proper silos, strengthening money pages, and building authoritative content hubs for the two highest-value services: insurance restoration and SB4-D condo remediation. The approach is clean-house-first: prune before building, restructure before expanding, strengthen before polishing.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [ ] **Phase 1: Content Audit & Cleanup** - Assess every page, prune thin/off-topic content, resolve keyword cannibalization, clean up meta tags and sitemap
- [ ] **Phase 2: Silo Architecture & Internal Linking** - Reorganize ~349 blog articles into three content silos, fix internal linking, add missing InternalLinks components, ensure crawl depth
- [ ] **Phase 3: Schema & Trust Signals** - Fix schema markup issues, enforce NAP consistency, add trust badges sitewide, verify forms and phone tracking
- [ ] **Phase 4: Hub Page Expansion** - Expand the 5 critically thin hub pages into comprehensive pillar content that anchors the silo structure
- [ ] **Phase 5: Location Page Strengthening** - Make all 72 service+location pages genuinely unique with city-specific content, eliminating doorway page risk
- [ ] **Phase 6: E-E-A-T Signals** - Add author attribution, credentials, first-person experience language, and real project references across the site
- [ ] **Phase 7: SB4-D Content Hub** - Expand condo remediation content into the definitive Tampa Bay SB4-D authority hub
- [ ] **Phase 8: Insurance Restoration Content** - Position FCS as Tampa Bay's large-loss insurance restoration authority
- [ ] **Phase 9: Conversion Optimization** - Replace generic CTAs with service-specific ones, verify form delivery, confirm tracking

## Phase Details

### Phase 1: Content Audit & Cleanup
**Goal**: The site contains only quality, indexable pages -- no thin content dragging down the domain, no keyword cannibalization, no off-topic pages diluting topical authority
**Depends on**: Nothing (first phase)
**Requirements**: AUDIT-01, AUDIT-02, AUDIT-03, AUDIT-04, AUDIT-05, AUDIT-06, AUDIT-07, AUDIT-08, AUDIT-09
**Success Criteria** (what must be TRUE):
  1. Every page on the site has been assessed with a word count and categorization, and thin pages (<300 words) have been expanded, redirected, or noindexed
  2. A keyword-to-URL map exists where every indexed page has one primary keyword and no two pages share the same keyword
  3. Off-topic content (fishing charters, etc.) is removed or noindexed with 301 redirects in place
  4. All meta descriptions are 150-160 characters with CTAs, the `keywords` meta tag is gone from all pages, and the XML sitemap contains only pages intended for indexing
  5. robots.txt allows Googlebot, points to sitemap, and blocks nothing important
**Plans**: TBD

Plans:
- [ ] 01-01: TBD
- [ ] 01-02: TBD

### Phase 2: Silo Architecture & Internal Linking
**Goal**: Blog articles are organized into three content silos (commercial, residential, insurance) with proper internal linking discipline, so Google understands topical clusters and link equity flows correctly
**Depends on**: Phase 1
**Requirements**: TECH-01, TECH-02, TECH-03, TECH-04, TECH-05, TECH-06, TECH-07, TECH-08, TECH-09, TECH-10
**Success Criteria** (what must be TRUE):
  1. All blog articles live under silo paths (`/commercial/guides/`, `/residential/guides/`, `/insurance/guides/`) with 301 redirects from old URLs
  2. Each business line (commercial, residential, insurance) has a single authoritative hub URL with no duplicates
  3. Every blog post links to at least 2 relevant service/money pages, and the 67 pages missing InternalLinks have contextual links added
  4. No orphan pages exist (every page has 3+ internal links pointing to it) and the top 20-30 pages are reachable within 2 clicks from homepage
  5. A pre-deploy validation script checks meta titles, canonical URLs, broken internal links, and sitemap-to-output consistency
**Plans**: TBD

Plans:
- [ ] 02-01: TBD
- [ ] 02-02: TBD

### Phase 3: Schema & Trust Signals
**Goal**: Schema markup is correct, targeted, and passes Google validation; NAP is consistent across every page; trust signals are visible sitewide
**Depends on**: Phase 2
**Requirements**: SCHEMA-01, SCHEMA-02, SCHEMA-03, SCHEMA-04, SCHEMA-05, SCHEMA-06, NAP-01, NAP-02, NAP-03, NAP-04
**Success Criteria** (what must be TRUE):
  1. LocalBusiness schema uses the real Ruskin address with areaServed for Tampa Bay and appears only on homepage and location pages
  2. ServiceSchema with hasOfferCatalog is on all core service landing pages, FAQ schema only appears where FAQ content is visible, and all schema passes Google Rich Results Test
  3. NAP (Name, Address, Phone) is identical on every page and matches Google Business Profile exactly
  4. Trust badges ("Since 1982 | Licensed CGC CBC1262722 | In-House Engineering") are visible sitewide, phone is prominent on mobile with sticky CTA, and forms have trust signals nearby
**Plans**: TBD

Plans:
- [ ] 03-01: TBD
- [ ] 03-02: TBD

### Phase 4: Hub Page Expansion
**Goal**: The 5 thin hub pages (services, locations, insurance, contact, and any additional) become comprehensive pillar content that anchors the entire silo structure
**Depends on**: Phase 2
**Requirements**: HUB-01, HUB-02, HUB-03, HUB-04, HUB-05
**Success Criteria** (what must be TRUE):
  1. Services hub is 2,000+ words covering all service lines with links to every child service page
  2. Locations hub is 2,000+ words covering all service areas with links to every location page
  3. Insurance hub is 3,000+ words positioning FCS as the Tampa Bay insurance restoration authority with links to all insurance-related pages
  4. Contact page has trust signals, service area coverage description, and clear CTAs (not just a bare form)
**Plans**: TBD

Plans:
- [ ] 04-01: TBD
- [ ] 04-02: TBD

### Phase 5: Location Page Strengthening
**Goal**: All 72 service+location pages are genuinely unique money pages with city-specific content that passes the doorway page test and ranks for "[service] [city]" queries
**Depends on**: Phase 4
**Requirements**: LOC-01, LOC-02, LOC-03, LOC-04, LOC-05, LOC-06, LOC-07
**Success Criteria** (what must be TRUE):
  1. All 72 service+location pages have 1,500+ words and no two pages share more than 40% content
  2. Each location page includes city-specific details: local building department, permit processes, neighborhood names, landmarks, and references to real local projects where available
  3. The generateLocationFAQs() function is replaced with unique, hand-written FAQ content per page
  4. The Ruskin location page is among the top 5 strongest pages on the site
  5. Location hub pages link to ALL service+location pages for that city with bidirectional linking
**Plans**: TBD

Plans:
- [ ] 05-01: TBD
- [ ] 05-02: TBD

### Phase 6: E-E-A-T Signals
**Goal**: The site demonstrates real expertise, experience, authoritativeness, and trust through visible credentials, author attribution, and first-person experience language
**Depends on**: Phase 2
**Requirements**: EEAT-01, EEAT-02, EEAT-03, EEAT-04, EEAT-05
**Success Criteria** (what must be TRUE):
  1. Every blog/article page has an author byline with name, title, and credentials, backed by Person schema
  2. Technical content references specific Florida building codes and local permit requirements
  3. Service pages use first-person experience language ("In our 40+ years...") and real project photos replace stock images where available
**Plans**: TBD

Plans:
- [ ] 06-01: TBD

### Phase 7: SB4-D Content Hub
**Goal**: FCS owns the "SB4-D condo remediation Tampa" keyword space with the most comprehensive content hub in the market, leveraging the in-house engineer as a differentiator
**Depends on**: Phase 6
**Requirements**: SB4D-01, SB4D-02, SB4D-03, SB4D-04, SB4D-05, SB4D-06
**Success Criteria** (what must be TRUE):
  1. The SB4-D hub includes a compliance checklist page, a deadline calendar with current milestone dates, cost guidance content, and an inspection process guide
  2. The in-house engineer credential is prominently featured on all SB4-D pages as an E-E-A-T differentiator
  3. SB4-D pages target specific keywords: "milestone inspection," "SIRS study," "condo remediation cost," "SB4-D compliance"
  4. CTAs on SB4-D pages are specific ("Get a Free SB4-D Compliance Assessment") rather than generic
**Plans**: TBD

Plans:
- [ ] 07-01: TBD
- [ ] 07-02: TBD

### Phase 8: Insurance Restoration Content
**Goal**: FCS is positioned as Tampa Bay's large-loss insurance restoration authority with content covering the full claims lifecycle and specific project scope details
**Depends on**: Phase 6
**Requirements**: INS-01, INS-02, INS-03, INS-04, INS-05
**Success Criteria** (what must be TRUE):
  1. The insurance restoration hub positions FCS as a large-loss authority with specific dollar ranges ($250K-$25M+) and project scope details
  2. A claims process guide targets "insurance restoration contractor Tampa" and related long-tail keywords
  3. Content covers FCS's differentiators: direct carrier negotiation, certified Xactimate estimates, expert witness capability
  4. Disaster recovery pages (hurricane, fire, water) each have differentiated, unique content per damage type
**Plans**: TBD

Plans:
- [ ] 08-01: TBD
- [ ] 08-02: TBD

### Phase 9: Conversion Optimization
**Goal**: Every page on the site has a clear, service-specific path to conversion with verified delivery and tracking
**Depends on**: Phase 5, Phase 7, Phase 8
**Requirements**: CTA-01, CTA-02, CTA-03, CTA-04
**Success Criteria** (what must be TRUE):
  1. Generic "Contact Us" CTAs are replaced with service-specific CTAs on all service pages
  2. Every blog post ends with a relevant service page link and specific CTA
  3. HighLevel form submissions are verified to reach someone who responds within business hours
  4. Phone click tracking is confirmed working on all pages via GA4
**Plans**: TBD

Plans:
- [ ] 09-01: TBD

## Progress

**Execution Order:**
Phases execute in numeric order. Note: Phases 4 and 6 both depend on Phase 2 (not on each other). Phases 7 and 8 both depend on Phase 6 (not on each other). Phase 9 depends on Phases 5, 7, and 8.

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Content Audit & Cleanup | 0/? | Not started | - |
| 2. Silo Architecture & Internal Linking | 0/? | Not started | - |
| 3. Schema & Trust Signals | 0/? | Not started | - |
| 4. Hub Page Expansion | 0/? | Not started | - |
| 5. Location Page Strengthening | 0/? | Not started | - |
| 6. E-E-A-T Signals | 0/? | Not started | - |
| 7. SB4-D Content Hub | 0/? | Not started | - |
| 8. Insurance Restoration Content | 0/? | Not started | - |
| 9. Conversion Optimization | 0/? | Not started | - |
