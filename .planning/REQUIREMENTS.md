# Requirements: FCS Local SEO Dominance

**Defined:** 2026-02-15
**Core Value:** The site ranks page 1 for priority keywords in Tampa Bay and generates organic leads for insurance restoration and condo remediation services.

## v1 Requirements

Requirements for this milestone. Each maps to roadmap phases.

### Content Audit & Cleanup

- [ ] **AUDIT-01**: Every page on the site has a word count assessed and categorized (thin <300, moderate 300-500, solid 500+, strong 1000+)
- [ ] **AUDIT-02**: All pages under 300 words are either expanded to 800+ words, 301-redirected to a relevant page, or set to noindex
- [ ] **AUDIT-03**: Off-topic pages (fishing charters, unrelated content) are removed or noindexed with 301 redirects where backlinks exist
- [ ] **AUDIT-04**: A keyword-to-URL map exists assigning one primary keyword to each indexed page with no duplicates
- [ ] **AUDIT-05**: Keyword cannibalization is resolved — no two indexed pages target the same primary keyword
- [ ] **AUDIT-06**: The `keywords` meta tag is removed from all pages (ignored by Google since 2009, signals outdated SEO)
- [ ] **AUDIT-07**: All 314 meta descriptions over 160 chars are trimmed to 150-160 chars with CTAs
- [ ] **AUDIT-08**: XML sitemap contains only pages intended for indexing (no thin, off-topic, or redirected pages)
- [ ] **AUDIT-09**: robots.txt is verified: allows Googlebot, points to sitemap, no important pages blocked

### Technical SEO & Silo Architecture

- [ ] **TECH-01**: Blog articles (~349 at root level) are reorganized into three content silos: `/commercial/guides/`, `/residential/guides/`, `/insurance/guides/`
- [ ] **TECH-02**: All moved articles have 301 redirects from old URLs to new silo URLs
- [ ] **TECH-03**: Duplicate hub pages resolved — single authoritative URL for each business line (commercial, residential, insurance)
- [ ] **TECH-04**: Breadcrumb navigation and BreadcrumbSchema updated to reflect silo structure
- [ ] **TECH-05**: Internal linking follows silo discipline — articles link to parent service pages and sibling articles within the same silo
- [ ] **TECH-06**: Every blog post links to at least 2 relevant service/money pages
- [ ] **TECH-07**: The 67 pages missing InternalLinks component have contextual internal links added
- [ ] **TECH-08**: No orphan pages exist (every page has 3+ internal links pointing to it)
- [ ] **TECH-09**: Most important 20-30 pages are reachable within 2 clicks from the homepage
- [ ] **TECH-10**: A pre-deploy validation script checks: all pages have meta titles, canonical URLs, no broken internal links, sitemap matches output

### Schema Markup Improvements

- [ ] **SCHEMA-01**: LocalBusiness schema uses real Ruskin address (822 Bayview Dr) with `areaServed` declaring Tampa Bay service area
- [ ] **SCHEMA-02**: LocalBusiness schema restricted to homepage and location-specific pages only (not every page)
- [ ] **SCHEMA-03**: ServiceSchema added to all core service landing pages with `hasOfferCatalog` property
- [ ] **SCHEMA-04**: `priceRange` format corrected to follow Google's structured data guidelines
- [ ] **SCHEMA-05**: FAQ schema appears only on pages where FAQ content is visibly rendered
- [ ] **SCHEMA-06**: All schema passes Google Rich Results Test for every page type (homepage, service, location, article)

### NAP & Trust Signals

- [ ] **NAP-01**: NAP (Name, Address, Phone) is identical on every page, exactly matching Google Business Profile
- [ ] **NAP-02**: Trust badges visible sitewide: "Since 1982 | Licensed CGC CBC1262722 | In-House Engineering"
- [ ] **NAP-03**: Phone number is prominent on mobile with sticky CTA
- [ ] **NAP-04**: Every form has trust signals nearby (license number, years in business, review count)

### Location Page Strengthening

- [ ] **LOC-01**: All 72 service+location pages have 1,500+ words of content
- [ ] **LOC-02**: Each location page has genuinely unique city-specific content (not template-swapped) — no two pages share >40% content
- [ ] **LOC-03**: Location pages include city-specific details: local building department info, permit processes, neighborhood names, landmarks
- [ ] **LOC-04**: Location pages include references to real local projects where available
- [ ] **LOC-05**: The `generateLocationFAQs()` function is replaced with unique, city-specific FAQ content per page
- [ ] **LOC-06**: Ruskin location page is among the top 5 strongest pages on the site (HQ city)
- [ ] **LOC-07**: Location hub pages (`/locations/[city]/`) link to ALL service+location pages for that city with bidirectional linking

### Hub Page Expansion

- [ ] **HUB-01**: Services hub page expanded from 94 words to 2,000+ words as a comprehensive pillar page
- [ ] **HUB-02**: Locations hub page expanded from 113 words to 2,000+ words covering all service areas
- [ ] **HUB-03**: Insurance hub page expanded from 162 words to 3,000+ words as the insurance restoration authority page
- [ ] **HUB-04**: Each hub page links to all child service/location pages in its silo
- [ ] **HUB-05**: Contact page expanded from 115 words with trust signals, service area map description, and clear CTAs

### E-E-A-T Signals

- [ ] **EEAT-01**: Every blog/article page has an author byline with name, title, and credentials
- [ ] **EEAT-02**: Technical content references specific Florida building codes and local permit requirements
- [ ] **EEAT-03**: First-person experience language is present on service pages ("In our 40+ years...")
- [ ] **EEAT-04**: Real project photos replace stock images where available
- [ ] **EEAT-05**: Schema markup includes `author` with `Person` type on article pages

### SB4-D Content Hub

- [ ] **SB4D-01**: SB4-D content hub expanded with compliance checklist page
- [ ] **SB4D-02**: SB4-D deadline calendar page created or existing page expanded with current milestone dates
- [ ] **SB4D-03**: SB4-D cost guidance content addresses "how much does condo remediation cost" queries
- [ ] **SB4D-04**: SB4-D inspection process guide targets "milestone inspection" and "SIRS study" keywords
- [ ] **SB4D-05**: In-house engineer credential is prominently featured as E-E-A-T differentiator on all SB4-D pages
- [ ] **SB4D-06**: CTAs on SB4-D pages are specific: "Get a Free SB4-D Compliance Assessment" (not generic "Contact Us")

### Insurance Restoration Content

- [ ] **INS-01**: Insurance restoration hub expanded to position FCS as Tampa Bay's large-loss authority
- [ ] **INS-02**: Claims process guide targets "insurance restoration contractor Tampa" and related long-tail keywords
- [ ] **INS-03**: Content covers: direct carrier negotiation, certified Xactimate estimates, expert witness capability
- [ ] **INS-04**: Disaster recovery pages (hurricane, fire, water) are differentiated with unique content per damage type
- [ ] **INS-05**: Insurance content includes specific dollar ranges and project scope details ($250K-$25M+)

### Conversion Optimization

- [ ] **CTA-01**: Generic CTAs ("Contact Us") replaced with service-specific CTAs on all service pages
- [ ] **CTA-02**: Every blog post ends with a relevant service page link and specific CTA
- [ ] **CTA-03**: HighLevel forms verified: submissions actually reach someone who responds within business hours
- [ ] **CTA-04**: Phone click tracking confirmed working on all pages via GA4

### Project Gallery

- [x] **GAL-01**: All 213 source photos from 8 project folders are processed to WebP format in two sizes (400px thumbnail, 1600px full)
- [x] **GAL-02**: Processed images are hosted on Cloudflare R2 and publicly accessible via URL
- [x] **GAL-03**: A gallery data file maps project slugs to names, photo counts, and R2 image URLs
- [x] **GAL-04**: Gallery index page at /gallery/ displays a responsive card grid with one hero photo per project linking to individual project pages
- [x] **GAL-05**: Each project page at /gallery/{slug}/ has a carousel with thumbnail strip navigation and fullscreen lightbox on click
- [x] **GAL-06**: Gallery is accessible from the main site navigation
- [x] **GAL-07**: Site builds successfully with all gallery pages included

## v2 Requirements

Deferred to future milestone. Tracked but not in current roadmap.

### Project Portfolio

- **PORT-01**: `/projects/` hub page with filterable case study listing
- **PORT-02**: 20+ individual case study pages with photos, scope, timeline, outcomes
- **PORT-03**: Before/after photo galleries with geo-tagged images
- **PORT-04**: Case study pages linked from relevant service and location pages

### Off-Site SEO

- **OFFSITE-01**: Google Business Profile fully optimized (all fields, weekly posts, geotagged photos)
- **OFFSITE-02**: 50+ consistent citations across directories (Yelp, BBB, Houzz, HomeAdvisor, Angi, local chambers)
- **OFFSITE-03**: Review generation system active with >2 reviews/month velocity
- **OFFSITE-04**: Social profiles claimed and populated (LinkedIn minimum, Facebook, Instagram)
- **OFFSITE-05**: All external citations audited for NAP consistency quarterly

### Advanced Features

- **ADV-01**: Video content (project walkthroughs, drone footage)
- **ADV-02**: Interactive service area map
- **ADV-03**: OpenGraph images on all key pages for social sharing
- **ADV-04**: Review management platform integration (Podium/Birdeye)

## Out of Scope

| Feature | Reason |
|---------|--------|
| Google Ads / paid advertising | Organic-only focus for this milestone |
| New pages beyond existing 496 | Improve existing pages, don't add more |
| CMS integration | Manual updates for now |
| Link building / outreach | On-site must be solid before off-site |
| GBP optimization beyond linking | Separate effort, v2 milestone |
| WordPress URL redirect audit | Requires GSC data not currently available |
| Server-side rendering | Static export constraint, no SSR |
| Mobile app | Web-only |

## Traceability

Which phases cover which requirements. Updated during roadmap creation.

| Requirement | Phase | Status |
|-------------|-------|--------|
| AUDIT-01 | Phase 1 | Pending |
| AUDIT-02 | Phase 1 | Pending |
| AUDIT-03 | Phase 1 | Pending |
| AUDIT-04 | Phase 1 | Pending |
| AUDIT-05 | Phase 1 | Pending |
| AUDIT-06 | Phase 1 | Pending |
| AUDIT-07 | Phase 1 | Pending |
| AUDIT-08 | Phase 1 | Pending |
| AUDIT-09 | Phase 1 | Pending |
| TECH-01 | Phase 2 | Pending |
| TECH-02 | Phase 2 | Pending |
| TECH-03 | Phase 2 | Pending |
| TECH-04 | Phase 2 | Pending |
| TECH-05 | Phase 2 | Pending |
| TECH-06 | Phase 2 | Pending |
| TECH-07 | Phase 2 | Pending |
| TECH-08 | Phase 2 | Pending |
| TECH-09 | Phase 2 | Pending |
| TECH-10 | Phase 2 | Pending |
| SCHEMA-01 | Phase 3 | Pending |
| SCHEMA-02 | Phase 3 | Pending |
| SCHEMA-03 | Phase 3 | Pending |
| SCHEMA-04 | Phase 3 | Pending |
| SCHEMA-05 | Phase 3 | Pending |
| SCHEMA-06 | Phase 3 | Pending |
| NAP-01 | Phase 3 | Pending |
| NAP-02 | Phase 3 | Pending |
| NAP-03 | Phase 3 | Pending |
| NAP-04 | Phase 3 | Pending |
| HUB-01 | Phase 4 | Pending |
| HUB-02 | Phase 4 | Pending |
| HUB-03 | Phase 4 | Pending |
| HUB-04 | Phase 4 | Pending |
| HUB-05 | Phase 4 | Pending |
| LOC-01 | Phase 5 | Pending |
| LOC-02 | Phase 5 | Pending |
| LOC-03 | Phase 5 | Pending |
| LOC-04 | Phase 5 | Pending |
| LOC-05 | Phase 5 | Pending |
| LOC-06 | Phase 5 | Pending |
| LOC-07 | Phase 5 | Pending |
| EEAT-01 | Phase 6 | Pending |
| EEAT-02 | Phase 6 | Pending |
| EEAT-03 | Phase 6 | Pending |
| EEAT-04 | Phase 6 | Pending |
| EEAT-05 | Phase 6 | Pending |
| SB4D-01 | Phase 7 | Pending |
| SB4D-02 | Phase 7 | Pending |
| SB4D-03 | Phase 7 | Pending |
| SB4D-04 | Phase 7 | Pending |
| SB4D-05 | Phase 7 | Pending |
| SB4D-06 | Phase 7 | Pending |
| INS-01 | Phase 8 | Pending |
| INS-02 | Phase 8 | Pending |
| INS-03 | Phase 8 | Pending |
| INS-04 | Phase 8 | Pending |
| INS-05 | Phase 8 | Pending |
| CTA-01 | Phase 9 | Pending |
| CTA-02 | Phase 9 | Pending |
| CTA-03 | Phase 9 | Pending |
| CTA-04 | Phase 9 | Pending |
| GAL-01 | Phase 10 | Complete |
| GAL-02 | Phase 10 | Complete |
| GAL-03 | Phase 10 | Complete |
| GAL-04 | Phase 10 | Complete |
| GAL-05 | Phase 10 | Complete |
| GAL-06 | Phase 10 | Complete |
| GAL-07 | Phase 10 | Complete |

**Coverage:**
- v1 requirements: 61 total
- Mapped to phases: 61
- Unmapped: 0

---
*Requirements defined: 2026-02-15*
*Last updated: 2026-02-15 after roadmap creation*
