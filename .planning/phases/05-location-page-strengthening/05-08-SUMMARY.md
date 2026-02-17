---
phase: 05-location-page-strengthening
plan: 08
subsystem: content
tags: [seo, location-pages, ruskin, faq-schema, content-parallax, internal-linking, headquarters]

# Dependency graph
requires:
  - phase: 04-hub-page-expansion
    provides: "Hub pages with RelatedServices/NearbyLocations linking components"
  - phase: 03-trust-infrastructure
    provides: "LocalBusinessSchema, ServiceSchema, BreadcrumbSchema components"
provides:
  - "9 Ruskin service+location pages with ~800-1,000 words unique city-specific content"
  - "Lighter treatment pattern for residential/HQ city (only city with condensed format)"
  - "54 unique FAQs across 9 Ruskin pages (6 per page)"
affects: []

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "Ruskin condensed structure: Hero > Market Context > ContentParallax > Capabilities > FAQ > Links > CTA"
    - "Dropped from standard format: Local Expertise section, Process section (lighter treatment)"
    - "FCS headquarters badge on every page: 822 Bayview Dr trust signal"
    - "Unincorporated Hillsborough County permitting (same as Brandon pattern)"

key-files:
  modified:
    - app/commercial-construction-ruskin/page.tsx
    - app/multi-family-construction-ruskin/page.tsx
    - app/condo-remediation-ruskin/page.tsx
    - app/disaster-recovery-ruskin/page.tsx
    - app/insurance-restoration-ruskin/page.tsx
    - app/exterior-waterproofing-ruskin/page.tsx
    - app/historic-restoration-ruskin/page.tsx
    - app/luxury-custom-homes-ruskin/page.tsx
    - app/balcony-reconstruction-ruskin/page.tsx

decisions:
  - "Ruskin is the ONLY city getting lighter ~800-1000 word treatment (all other cities get 2,000+)"
  - "Condensed structure drops Local Expertise and Process sections from standard city format"
  - "Dropped ArticleSchema, cost tables, sidebar layouts, stats sections, Why Choose FCS sections from old format"
  - "FCS headquarters at 822 Bayview Dr mentioned on every page as trust signal"
  - "Sun City Center retirement community, Apollo Beach waterfront, US 41 corridor as three geographic anchors"
  - "SB 4-D content: 25-year coastal (Apollo Beach) vs 30-year inland (Sun City Center) distinction on relevant pages"

metrics:
  duration: "20min"
  completed: "2026-02-17"
---

# Phase 05 Plan 08: Ruskin Location Pages Summary

**All 9 Ruskin service+location pages rewritten with condensed ~800-1,000 word format as the only city receiving lighter treatment.**

## What Was Built

Rewrote all 9 Ruskin location pages from verbose old format (sidebars, cost tables, process steps, stats sections) to a condensed prose-heavy structure reflecting Ruskin's character as FCS's residential headquarters city rather than a major commercial market.

### Pages Rewritten (9 total)

| Page | Hero Image | Parallax Image | FAQs | Key Angle |
|------|-----------|----------------|------|-----------|
| commercial-construction-ruskin | commercial-construction-in-tampa | commercial-construction-design | 6 | US 41 corridor, Sun City Center commercial, Apollo Beach waterfront |
| multi-family-construction-ruskin | southwinds-condo-front | tampa-multifamily-housing-construction | 6 | SouthShore workforce housing, senior living, agricultural land conversion |
| condo-remediation-ruskin | tampa-condo-balcony-restoration | fcs-tiles-on-balcony | 6 | SB 4-D: 25yr coastal vs 30yr inland, retirement community associations |
| disaster-recovery-ruskin | hurricane-restoration | hurricane-insurance-restoration | 6 | Apollo Beach surge, Little Manatee River flooding, senior community needs |
| insurance-restoration-ruskin | tampa-hurricane-damage-restoration | florida-hurricane-storm | 5 | Large loss specialization, multi-party Sun City Center claims |
| exterior-waterproofing-ruskin | fcs-exterior-waterproofing | fcs-commercial-exterior-waterproofing | 6 | Coastal salt exposure, Sun City Center condo envelopes, SB 4-D |
| historic-restoration-ruskin | historic-preservation | historic-preservation-home | 6 | 1910 agricultural colony founding, mid-century Sun City Center |
| luxury-custom-homes-ruskin | custom-home-construction-2 | tampa-luxury-custom-home-construction | 6 | Apollo Beach waterfront value, golf course homes, FEMA compliance |
| balcony-reconstruction-ruskin | tampa-condo-balcony-restoration | fcs-tiles-on-balcony | 6 | Sun City Center aging buildings, marine-grade Apollo Beach materials |

### Content Structure (Condensed Ruskin Pattern)

1. **Hero** -- "FCS Headquarters -- Ruskin, Florida" badge, trust badges (HQ, License, Projects), dual CTA
2. **Market Context** -- Prose section with Hillsborough County Building Services link, honest about residential character
3. **ContentParallax** -- Unique image per page
4. **Capabilities** -- 6-card grid with service-specific offerings
5. **FAQ** -- 5-6 unique FAQs with FAQWithSchema component
6. **Internal Links** -- RelatedServices + NearbyLocations components
7. **CTA** -- Final section with footer trust line (License, HQ, Years, Prime Contractor)

### What Changed from Old Format

**Removed:**
- ArticleSchema (kept LocalBusiness + Service + Breadcrumb only)
- Cost/timeline tables
- Process step sections
- Sidebar layouts with contact cards
- "Why Choose FCS" sections
- Stats sections with fabricated numbers
- SB 4-D alert banners
- Trust badge strips (absorbed into hero)
- Neighborhood feature cards with tag badges

**Added/Improved:**
- Consistent condensed structure across all 9 pages
- Unique prose-heavy market context per page
- Hillsborough County Building Services link on every page
- FCS headquarters trust signal consistently placed
- Unique parallax images avoiding overlap with other cities

## Commits

| Hash | Message |
|------|---------|
| e409d0f | feat(05-08): rewrite all 9 Ruskin location pages with condensed format |

## Deviations from Plan

None -- plan executed exactly as written.

## Self-Check: PASSED

All 9 files exist and build successfully. Commit e409d0f verified in git log.
