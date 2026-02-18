# Phase 8: Insurance Restoration Content - Research

**Researched:** 2026-02-18
**Domain:** Content expansion, SEO content strategy, insurance restoration authority positioning
**Confidence:** HIGH

## Summary

Phase 8 builds ON TOP of significant prior work. The insurance hub (`/insurance/`) was already expanded to 3,000+ words in Phase 4 (04-03-PLAN) with claims process walkthrough, differentiator cards (Xactimate, carrier negotiation, expert witness, prime contractor, in-house engineering), 8-item FAQ with schema, and a project gallery. Phase 6 added experience language and author bylines to the 45+ insurance guide articles. The hub is already strong.

The remaining gaps are specific and well-defined by the five INS requirements: (1) the hub needs INS-05 dollar ranges and project scope details woven more prominently throughout (some exist but could be deeper), (2) the three disaster-specific child pages (hurricane, fire, water) need differentiated expansion and E-E-A-T enhancements they lack (no CodeReference, no ProjectGallery, no BackToHub, no AuthorByline), (3) the "in-house engineer" language persists on 6 insurance silo pages and must be corrected to "dedicated engineering partner" / "direct access" language, and (4) several insurance child pages (certified-estimating, building-consultant, appraisal-arbitration, licensed-general-contractor) are lighter at 1,100-2,000 words and could benefit from dollar ranges and scope details per INS-05.

**Primary recommendation:** Focus Phase 8 on three work streams: (A) fix "in-house engineer" language across all insurance pages, (B) expand and differentiate the three disaster pages (hurricane, fire, water) with unique content, CodeReference callouts, ProjectGallery, and specific dollar/scope details, (C) enhance the insurance hub and lighter child pages with more specific dollar ranges and project scope details. No new pages need to be created -- all work is expansion and improvement of existing pages.

## Standard Stack

### Core (No new libraries needed)
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| Next.js 15 | Current | App Router pages | Already in use site-wide |
| TypeScript | Current | Type-safe pages | Already in use site-wide |
| Tailwind CSS | Current | Styling | Already in use site-wide |
| lucide-react | Current | Icons | Already in use site-wide |

### Existing Components to Use
| Component | Import Path | Purpose |
|-----------|-------------|---------|
| `Breadcrumb` | `@/components/Breadcrumb` | Page navigation breadcrumbs |
| `FAQWithSchema` / `FAQ` | `@/components/FAQ` | FAQ sections with JSON-LD (hub uses FAQWithSchema, child pages use FAQ) |
| `ServiceSchema, BreadcrumbSchema, FAQSchema` | `@/components/Schema` | Structured data |
| `AuthorByline` | `@/components/AuthorByline` | E-E-A-T byline (NOT on disaster child pages yet) |
| `CodeReference` | `@/components/CodeReference` | Florida statute/building code callouts (NOT on any insurance child pages yet) |
| `ProjectGallery` | `@/components/ProjectGallery` | Real project photo galleries (on hub only, NOT on disaster child pages) |
| `InternalLinks, RelatedServices, NearbyLocations` | `@/components/InternalLinks` | Cross-linking |
| `HighLevelForm` | `@/components/HighLevelForm` | Contact form |
| `ContentImage, ContentParallax` | `@/components/ContentImage` | Optimized images |
| `ParallaxSection` | `@/components/ParallaxSection` | Visual breaks (hub has this) |

**Installation:** No new packages needed. All components exist.

**Important:** BackToHub component only supports `silo: "commercial" | "residential"`. It needs an "insurance" silo option added, OR use `customHubTitle`/`customHubHref` props which already exist as escape hatches.

## Architecture Patterns

### Current Insurance Silo Structure
```
/insurance/                          # Hub page (InsurancePageClient.tsx, 576 lines, 3,000+ words) -- Phase 4 expanded
  /hurricane-restoration/            # Disaster child page (416 lines, ~2,580 words, 10 FAQs)
  /fire-restoration/                 # Disaster child page (433 lines, ~2,782 words, 12 FAQs)
  /water-restoration/                # Disaster child page (416 lines, ~2,477 words, 10 FAQs)
  /mold-remediation/                 # Service child page (302 lines, ~2,058 words)
  /certified-estimating/             # Differentiator page (300 lines, ~1,841 words)
  /building-consultant/              # Differentiator page (333 lines, ~1,989 words)
  /appraisal-arbitration/            # Differentiator page (269 lines, ~1,831 words)
  /licensed-general-contractor/      # Differentiator page (272 lines, ~1,186 words)
  /guides/                           # 45 guide articles (insurance silo blog content)
  /guides/page.tsx                   # Guide index page

/insurance-restoration-{city}/       # 8 location pages (Tampa, St. Pete, Clearwater, etc.)
/disaster-recovery/                  # Parallel hub (12,174 words) -- separate from insurance silo
/disaster-recovery-{city}/           # 8 disaster recovery location pages
/expert-witness/                     # Standalone page linked from insurance hub
```

### What Prior Phases Established

**Phase 4 (04-03)** expanded the insurance hub with:
- Extended intro positioning FCS as large-loss authority (~400 words)
- 6-step claims process walkthrough with icons
- 5 differentiator cards + license card
- ParallaxSection visual break
- 8-item FAQ with FAQWithSchema
- CTA vocabulary: "Request a Claims Consultation" / "Discuss Your Loss"

**Phase 6** added to insurance pages:
- ProjectGallery on InsurancePageClient.tsx (4 storm photos)
- AuthorByline on all 45+ insurance guide articles
- Experience language verified on insurance hub
- CodeReference NOT added to any insurance child pages
- ProjectGallery NOT added to any insurance child pages
- AuthorByline NOT added to any insurance child pages (only guide articles)

### Pattern for Expanding Disaster Child Pages

The disaster child pages (hurricane, fire, water) follow a consistent pattern:
```
metadata + canonical
breadcrumbItems
faqs[] (10-12 items)
services[] (5-6 service cards)
processSteps[] (6 steps)

Page layout:
  Hero > Breadcrumb > Stats > Services Grid > Process Section > FAQ > Form > Internal Links
```

The enhancement pattern should add:
1. **BackToHub** link to `/insurance/` (using customHubTitle/customHubHref)
2. **AuthorByline** after breadcrumb
3. **Specific dollar ranges and scope details** woven into existing prose (INS-05)
4. **CodeReference** callouts for relevant Florida statutes
5. **ProjectGallery** with damage-type-specific photos
6. **Expanded unique content** per damage type (differentiation per INS-04)

### Anti-Patterns to Avoid
- **Don't rewrite the hub page.** Phase 4 already expanded it to 3,000+ words. Enhance, don't replace.
- **Don't duplicate content across disaster pages.** INS-04 requires differentiation. Each damage type has genuinely different processes, timelines, insurance considerations.
- **Don't use "in-house engineer" language.** Phase 7 established "dedicated engineering partner" / "direct access to licensed structural engineers."
- **Don't use "Free Estimate" or "Free Quote" CTAs.** Insurance silo uses "Request a Claims Consultation" (primary) and "Discuss Your Loss" (secondary).

## Existing Content Assessment Per Requirement

### INS-01: Insurance hub as large-loss authority
**Status: MOSTLY DONE (Phase 4)**
- Hub already has 3,000+ words, claims process, differentiators, FAQ
- Dollar ranges mentioned: "$250K", "$5 million", "$10 million", "$25 million" in intro prose
- Meta description: "Tampa Bay's large loss insurance restoration contractor. Prime contractor for $250K-$25M+ claims"
- **Gap:** Could add more specific project scope examples (e.g., "100-unit condo reroofing", "20-story commercial facade restoration")
- **Gap:** "In-House Engineering" differentiator card title needs language fix

### INS-02: Claims process guide targeting keywords
**Status: MOSTLY DONE (Phase 4)**
- 6-step claims process walkthrough exists on hub page
- Hub targets "insurance restoration contractor Tampa" in title and meta
- Multiple guide articles exist: `understanding-tampa-insurance-restoration-claims`, `preparing-for-insurance-restoration-consultations-in-tampa`, `claims-negotiation-for-property-damage-in-tampa`
- **Gap:** The claims process section on the hub could link to specific guide articles for deeper reading
- **Gap:** The guides lack cross-links back to the hub's process section

### INS-03: Differentiator content (carrier negotiation, Xactimate, expert witness)
**Status: MOSTLY DONE (Phase 4 + Phase 6)**
- Hub has 5 dedicated differentiator cards with 100+ word descriptions each
- Dedicated child pages exist: `/insurance/certified-estimating/`, `/insurance/appraisal-arbitration/`, `/expert-witness/`
- **Gap:** Differentiator child pages lack CodeReference callouts and ProjectGallery
- **Gap:** Dollar amounts on differentiator pages are sparse

### INS-04: Disaster recovery pages differentiated per damage type
**Status: PARTIALLY DONE**
- All three disaster pages exist with unique FAQs and unique service cards
- Content IS already differentiated (hurricane covers wind/surge/roofing; fire covers smoke types/odor/content; water covers categories 1-3/drying/mold prevention)
- **Gap:** No CodeReference on any disaster page
- **Gap:** No ProjectGallery on any disaster page
- **Gap:** No AuthorByline on any disaster page
- **Gap:** Dollar ranges are minimal -- hurricane mentions "$250K+", fire mentions "$250K+ residential, $500K+ commercial", water mentions "$50,000+"
- **Gap:** Could add more specific project scope details per damage type

### INS-05: Specific dollar ranges and project scope details
**Status: PARTIALLY DONE**
- Hub mentions $250K-$25M+ range in intro and FAQ
- Disaster pages mention some ranges but inconsistently
- **Gap:** No specific project scope descriptions (e.g., "12-story condo reroofing after Hurricane Ian", "100,000 sq ft commercial fire restoration")
- **Gap:** Licensed-general-contractor page is the thinnest (1,186 words) and lacks dollar details

## "In-House Engineer" Language Fix Inventory

**CRITICAL:** Phase 7 established that the engineer is NOT an FCS employee. Use "dedicated engineering partner" or "direct access to licensed structural engineers."

Files with "in-house" or "staff engineer" language that must be corrected:

| File | Instances | Severity |
|------|-----------|----------|
| `app/insurance/InsurancePageClient.tsx` | 4 (title "In-House Engineering", description, process step, intro prose) | HIGH -- hub page |
| `app/insurance/building-consultant/page.tsx` | 3 ("In-House Engineering" bullet, "staff engineer", FAQ answer) | HIGH |
| `app/insurance/licensed-general-contractor/page.tsx` | 2 (FAQ question "in-house engineer", FAQ answer) | HIGH |
| `app/insurance/guides/sb-4-d-compliance-tampa-bay-condos/page.tsx` | Unknown | MEDIUM (SB4-D, may be Phase 7 scope) |
| `app/insurance/guides/florida-sb4d-compliance-guide/page.tsx` | Unknown | MEDIUM (SB4-D, may be Phase 7 scope) |
| `app/insurance/guides/condo-milestone-inspection-remediation/page.tsx` | Unknown | MEDIUM (SB4-D, may be Phase 7 scope) |
| `app/insurance-restoration-tampa/page.tsx` | At least 1 | MEDIUM |

**Note:** The 3 SB4-D guide files may have been fixed by Phase 7 execution. Verify before including in Phase 8 scope. The non-SB4-D files (hub, building-consultant, licensed-general-contractor, insurance-restoration-tampa) are definitely Phase 8 scope.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Back-to-hub link | Custom link component | `BackToHub` with `customHubTitle="Insurance Services" customHubHref="/insurance/"` | Already exists with escape hatch props |
| FAQ with schema | Raw JSON-LD | `FAQWithSchema` or `FAQ` component | Already handles structured data correctly |
| Building code callouts | Custom styled divs | `CodeReference` component | Established in Phase 6, consistent styling |
| Project galleries | Custom image grids | `ProjectGallery` component | Handles responsive images, established pattern |

## Common Pitfalls

### Pitfall 1: Duplicating Content Across Disaster Pages
**What goes wrong:** Hurricane, fire, and water pages end up with identical "FCS differentiator" sections copy-pasted across all three.
**Why it happens:** Lazy templating. All three pages share the same company, so writers default to the same boilerplate.
**How to avoid:** Each damage type has genuinely different processes, timelines, insurance nuances, and code requirements. Write damage-type-specific differentiator content:
- Hurricane: wind load codes, surge zone considerations, named storm deductibles, FEMA 50% rule
- Fire: fire investigation timelines, smoke type classification, content salvage protocols, arson exclusions
- Water: IICRC categories, mold prevention windows (24-48hr), flood vs. water damage insurance distinction
**Warning signs:** Same paragraphs appearing in multiple files. Grep for identical sentences.

### Pitfall 2: Losing Phase 4 Insurance Hub Content
**What goes wrong:** The hub page gets rewritten instead of enhanced, losing the 3,000+ word expansion from Phase 4.
**Why it happens:** Phase 8 requirements overlap with what Phase 4 already did (INS-01, INS-02, INS-03 are largely satisfied).
**How to avoid:** Read the existing InsurancePageClient.tsx (576 lines) FIRST. Identify specific gaps (dollar ranges, scope details, cross-links to guides). Make surgical additions, not rewrites.
**Warning signs:** InsurancePageClient.tsx getting shorter. Differentiator cards being replaced. Process steps being rewritten.

### Pitfall 3: Wrong CTA Vocabulary
**What goes wrong:** "Free Estimate", "Get a Quote", or "Contact Us" appear on insurance pages.
**Why it happens:** Default CTA language from other silos leaking into insurance content.
**How to avoid:** Insurance silo uses ONLY: "Request a Claims Consultation" (primary), "Discuss Your Loss" (secondary), phone number always visible. Verify with grep after every edit.
**Warning signs:** Any "Free" or "Quote" or generic "Contact Us" on insurance pages.

### Pitfall 4: "In-House Engineer" Language
**What goes wrong:** New content uses "in-house engineer" or "our engineer" or "staff engineer" phrasing.
**Why it happens:** Phase 4 used this language before the Phase 7 decision that the engineer is a separate company.
**How to avoid:** Use "dedicated engineering partner", "direct access to licensed structural engineers", or "our engineering team" (never "in-house" or "staff"). Grep-verify after edits.
**Warning signs:** Any "in-house" or "staff engineer" anywhere in the insurance silo.

## Code Examples

### BackToHub for Insurance Child Pages
```tsx
// Since BackToHub only supports "commercial" | "residential" as silo types,
// use the customHubTitle/customHubHref props:
<BackToHub
  silo="commercial"  // Required but overridden by custom props
  customHubTitle="Insurance Services"
  customHubHref="/insurance/"
/>
```

### CodeReference for Hurricane Restoration
```tsx
<CodeReference
  code="Florida Building Code 8th Edition (2023)"
  section="Section 1609 -- Wind Loads"
  description="All structural repairs after hurricane damage must meet current Florida Building Code wind load requirements, which mandate design for the basic wind speed at the property's location. Tampa Bay properties typically require design for 150-170 mph wind speeds depending on proximity to the coast."
  link="https://www.floridabuilding.org/fbc/thecode/3_FBC-8th-Edition-2023-Code-and-Commentary.htm"
  linkText="View Florida Building Code"
/>
```

### CodeReference for Fire Restoration
```tsx
<CodeReference
  code="NFPA 921 -- Guide for Fire and Explosion Investigations"
  description="Fire damage restoration cannot begin until the fire investigator or authority having jurisdiction releases the structure. FCS coordinates with fire marshals and insurance investigators to ensure proper evidence preservation before restoration begins."
/>
```

### CodeReference for Water Restoration
```tsx
<CodeReference
  code="IICRC S500 -- Standard for Professional Water Damage Restoration"
  description="All water damage restoration follows IICRC S500 standards, which classify water damage into three categories based on contamination level and define specific restoration protocols for each. Category 3 (black water) contamination requires the most aggressive intervention including controlled demolition and antimicrobial treatment."
/>
```

### Dollar Range / Scope Detail Pattern (INS-05)
```tsx
// Weave specific ranges and project types into existing prose:
<p>
  FCS specializes in large-loss hurricane restoration projects ranging from
  $250,000 single-building roof replacements to $15 million+ multi-building
  condominium restorations involving complete roof systems, building envelope
  reconstruction, and interior restoration across 100+ units. Our bonding
  capacity and workforce depth support projects of this scale without the
  delays of contractors who must subcontract major scope items.
</p>
```

## Scope Analysis: What Phase 8 MUST Do vs. What's Already Done

### Already Satisfied (verify, don't redo)
- INS-01 (hub as authority): Hub is 3,000+ words with claims process, differentiators, FAQ -- DONE in Phase 4
- INS-02 (claims process guide): 6-step process on hub + multiple guide articles -- DONE in Phase 4
- INS-03 (differentiator content): 5 differentiator cards on hub + dedicated child pages -- DONE in Phase 4

### Phase 8 Actual Work Items

**Work Stream A: "In-House Engineer" Language Fix (all insurance silo pages)**
- Fix InsurancePageClient.tsx (4 instances)
- Fix building-consultant/page.tsx (3 instances)
- Fix licensed-general-contractor/page.tsx (2 instances)
- Fix insurance-restoration-tampa/page.tsx (at least 1 instance)
- Verify SB4-D guides were fixed by Phase 7 (if not, fix them too)

**Work Stream B: Disaster Page Differentiation (INS-04)**
- Expand hurricane-restoration/page.tsx with: CodeReference (FBC wind loads), ProjectGallery, dollar/scope details, unique hurricane-specific content
- Expand fire-restoration/page.tsx with: CodeReference (NFPA 921), ProjectGallery, dollar/scope details, unique fire-specific content
- Expand water-restoration/page.tsx with: CodeReference (IICRC S500), ProjectGallery, dollar/scope details, unique water-specific content
- Each page should have genuinely differentiated content (not shared boilerplate)

**Work Stream C: Dollar Ranges & Scope Details (INS-05)**
- Add specific project scope examples to hub page (types of projects, square footage ranges, unit counts)
- Add dollar ranges to disaster pages where sparse
- Enhance lighter differentiator pages (especially licensed-general-contractor at 1,186 words) with scope details
- Add cross-links from hub's process section to relevant guide articles

**Work Stream D: E-E-A-T Enhancements for Insurance Child Pages**
- Add BackToHub (using custom props) to all insurance child pages that lack it
- Add AuthorByline to disaster pages and differentiator pages that lack it
- This brings insurance child pages to parity with the SB4-D pages from Phase 7

## Estimated Plan Structure

| Plan | Scope | Key Files | Est. Complexity |
|------|-------|-----------|-----------------|
| 08-01 | "In-house engineer" language fix across insurance silo | InsurancePageClient.tsx, building-consultant, licensed-general-contractor, insurance-restoration-tampa, possibly SB4-D guides | Low -- find/replace with verification |
| 08-02 | Hurricane restoration page expansion + E-E-A-T | hurricane-restoration/page.tsx | Medium -- content expansion |
| 08-03 | Fire restoration page expansion + E-E-A-T | fire-restoration/page.tsx | Medium -- content expansion |
| 08-04 | Water restoration page expansion + E-E-A-T | water-restoration/page.tsx | Medium -- content expansion |
| 08-05 | Hub + differentiator pages: dollar ranges, scope details, cross-links | InsurancePageClient.tsx, certified-estimating, building-consultant, appraisal-arbitration, licensed-general-contractor | Medium -- surgical additions |

## Open Questions

1. **Mold remediation page treatment**
   - What we know: It exists at 302 lines / ~2,058 words with FAQs. No CodeReference or ProjectGallery.
   - What's unclear: INS-04 specifies "hurricane, fire, water" -- mold is not explicitly listed. Should mold get the same expansion treatment?
   - Recommendation: Include mold in a disaster page plan OR defer to Phase 9. Mold is often secondary to water damage, not a standalone disaster type. Lighter touch is fine.

2. **Disaster recovery hub overlap**
   - What we know: A `/disaster-recovery/` page exists with 12,174 words, plus 8 location pages. This overlaps with `/insurance/hurricane-restoration/`, `/insurance/fire-restoration/`, `/insurance/water-restoration/`.
   - What's unclear: Should insurance child pages link to disaster recovery, or does that dilute the insurance silo?
   - Recommendation: Keep insurance child pages focused on the insurance/claims angle. Link to disaster-recovery only in InternalLinks section (not in main content). The insurance silo emphasizes claims management; disaster-recovery emphasizes construction capability.

3. **Expert witness page inclusion**
   - What we know: `/expert-witness/` is a standalone page linked from the insurance hub. It's outside the `/insurance/` path.
   - What's unclear: Should Phase 8 enhance the expert witness page with dollar ranges?
   - Recommendation: Include as a minor enhancement in the hub/differentiator plan (08-05). Add a sentence about dollar ranges of cases FCS has supported.

## Sources

### Primary (HIGH confidence)
- Direct codebase inspection of all insurance silo pages (line counts, word counts, component usage, content analysis)
- Phase 4 plan (04-03-PLAN.md) and summary (04-03-SUMMARY.md) documenting the hub expansion
- Phase 6 summaries (06-03, 06-04, 06-05) documenting E-E-A-T additions to insurance pages
- Phase 7 research (07-RESEARCH.md) documenting "in-house engineer" language decision
- ROADMAP.md and REQUIREMENTS.md for Phase 8 requirements (INS-01 through INS-05)

### Secondary (MEDIUM confidence)
- [Loopex Digital - SEO for Restoration Companies](https://www.loopexdigital.com/industries/seo-for-restoration-company) -- keyword strategy patterns
- Competitor analysis (NextGen Restoration, BluSky, Paul Davis, OnSite Construction) -- Tampa market positioning

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH -- no new libraries, all components already exist
- Architecture: HIGH -- direct codebase inspection, clear gap analysis
- Content strategy: HIGH -- requirements are specific, existing content is well-documented
- Pitfalls: HIGH -- learned from Phase 4/6/7 execution summaries

**Research date:** 2026-02-18
**Valid until:** 2026-03-18 (stable -- content-only changes, no technology shifts)
