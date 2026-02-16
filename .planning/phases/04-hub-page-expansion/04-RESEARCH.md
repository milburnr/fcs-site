# Phase 4: Hub Page Expansion - Research

**Researched:** 2026-02-16
**Domain:** Content expansion of thin hub/pillar pages in a Next.js static site
**Confidence:** HIGH

## Summary

Phase 4 targets the expansion of critically thin hub pages that serve as silo anchors. The research reveals a mixed landscape: two hub pages (commercial and residential) are already comprehensive pillar pages with 2,500+ words, rich component usage, and proper child page linking. Three hub pages (services, locations, contact) remain thin and need full rewrites. The insurance hub has moderate content but needs significant expansion to reach the 3,000-word target and authority positioning.

The site already has a rich component library (FadeIn, StaggerContainer, AnimatedCounter, ParallaxSection, FAQWithSchema, HubRelatedArticles, HighLevelForm, InContentCTA) and established patterns from the commercial/residential pages that serve as direct templates for the expansion work. The primary challenge is content creation, not technical implementation.

**Primary recommendation:** Audit all hub pages against word count and linking requirements, then expand only the genuinely thin ones (services, locations, contact, insurance) using the commercial page as the architectural template for component usage and content structure.

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions

**Content Depth & Tone:**
- Hybrid approach: substantial intro sections (why FCS, what we do, capability overview) + organized directory of child pages with meaningful descriptions
- Tone: Claude decides based on what converts best for commercial construction leads (FCS does $500K-$25M+ projects -- high-end commercial)
- Credential references (since 1982, in-house engineering, CBC license): Claude decides what level of mention is natural for hub pages vs saving deeper credentialing for Phase 6 (E-E-A-T)
- Rewrite approach: Claude assesses each hub individually -- preserve any personalized company-specific information, rewrite generic thin content from scratch
- Source material available: owner's resume, DRG PDF with project history (user will provide paths when needed), old site at old.floridaconstructionspecialists.com has content on main pages (home, about, services)

**Page Structure & Layout:**
- Use full component library: FadeIn animations, InteractiveCards, AccordionFAQ, counters -- these are the anchor pages, make them visually engaging
- Child page linking pattern: Claude decides (card grid vs sectioned list vs hybrid) based on what exists on site and what converts
- Hub CTAs: Claude decides approach -- BUT FCS is NOT a volume estimator. They're a large-capacity GC who handles complex $500K+ projects. CTAs should reflect qualification, not "free estimate" language. Think "Discuss Your Project" or "Schedule a Consultation" not "Get a Free Quote"
- FAQ sections on hubs: Claude determines which hubs benefit from FAQs based on long-tail keyword opportunity
- Contact page: Content + form approach -- add service area description, trust signals, office hours, what to expect when you call. Make it a real landing page, 500-800 words. Don't bury the form under content

**Which Hubs & Priority:**
- All hubs are equal priority -- do them all in one wave, they're all thin and all need expansion
- Hub count: Claude audits which hub pages are actually thin and includes any that need expansion (at minimum: services, locations, insurance, contact -- possibly also commercial and residential silo hubs)

**Linking & SEO Strategy:**
- Silo cross-linking: Claude decides based on SEO best practices for topical authority vs user experience
- Hub keyword targeting: Claude determines whether hubs target specific keywords or serve as navigation hubs, based on keyword map and search traffic opportunity
- Locations hub organization (80+ links): Claude determines best structure (by city, by service, matrix, or hybrid) for UX and SEO
- Anchor text: Claude balances keyword signal with natural readability based on current best practices

### Claude's Discretion
- Tone selection (authority vs approachable vs hybrid)
- Credential depth on hub pages (vs Phase 6)
- Per-hub rewrite assessment (preserve vs full rewrite)
- Child page linking pattern (cards vs sections vs hybrid)
- CTA copy and placement (qualified-lead-appropriate)
- FAQ inclusion per hub
- Which additional hubs beyond the 4 named need expansion
- Silo cross-linking policy
- Hub keyword targeting strategy
- Locations hub link organization
- Anchor text style

### Deferred Ideas (OUT OF SCOPE)
None -- discussion stayed within phase scope
</user_constraints>

## Hub Page Audit: Current State

### Assessment of All Six Potential Hub Pages

| Hub Page | Current Words (visible text) | Current State | Components Used | Child Links | Needs Expansion? |
|----------|------------------------------|---------------|-----------------|-------------|-------------------|
| `/services/` | ~94 (hero + section headers only) | THIN - just card grids from SERVICES/OTHER_SERVICES arrays | BreadcrumbSchema, InternalLinks, lucide icons | Links via SERVICES array but no descriptions | **YES - full rewrite** |
| `/locations/` | ~113 (one paragraph) | THIN - single paragraph, no child links, broken description text | BreadcrumbSchema, InternalLinks | Zero links to location or service-location pages | **YES - full rewrite** |
| `/insurance/` | ~800 (moderate) | MODERATE - has services grid, stats, Why FCS section | FadeIn, StaggerContainer, BreadcrumbSchema, ServiceSchema, HighLevelForm, InternalLinks | Links to 9 insurance service children + 8 location pages | **YES - needs expansion to 3,000 words** |
| `/contact/` | ~115 | THIN - basic form + contact info, no supporting content | BreadcrumbSchema, ContactFormSwitcher, InternalLinks | 5 internal links | **YES - needs content expansion** |
| `/commercial/` | ~2,500+ | COMPREHENSIVE - 6 prose paragraphs, service clusters, featured projects, industries, FAQ, articles, service areas | BreadcrumbSchema, ServiceSchema, Breadcrumb, HubRelatedArticles, HighLevelForm, ParallaxSection, ParallaxCardsContainer, FAQWithSchema, InternalLinks, Image | Links to all commercial child pages + 8 location pages | **NO - already done** |
| `/residential/` | ~3,500+ | COMPREHENSIVE - luxury design, 6 service cards, process timeline, testimonial, gallery, why-choose section | BreadcrumbSchema, ServiceSchema, Breadcrumb, ContentParallax, HighLevelForm, Image | Links to residential child pages + guides | **NO - already done** |

### Key Finding: Only 4 Hubs Need Work

The commercial and residential hub pages are already comprehensive pillar pages that exceed the 2,000-word requirement. They were likely expanded in a prior effort. **Phase 4 should focus on the 4 genuinely thin hubs: services, locations, insurance, and contact.**

## Architecture Patterns

### Established Hub Page Pattern (from `/commercial/` -- the gold standard)

The commercial page establishes the pattern that other hubs should follow:

```
1. Schema (BreadcrumbSchema + ServiceSchema)
2. Breadcrumb component
3. Hero Section (background image, badge, H1, subtitle, dual CTAs)
4. Trust Indicators strip (stats row with counters)
5. Introduction prose (2-3 paragraphs, ~300 words)
6. Service Clusters grid (cards with images linking to child pages)
7. Parallax section with form (visual break + embedded HighLevelForm)
8. Featured Projects section (real project cards with values)
9. Industries/Categories section (organized grid)
10. Related Articles section (HubRelatedArticles component)
11. FAQ section (FAQWithSchema component)
12. Service Areas grid (location links)
13. Final CTA section
14. Internal Links section
```

**Confidence:** HIGH -- directly observed in the codebase.

### Component Library Available

| Component | Import | Purpose | Used On |
|-----------|--------|---------|---------|
| `FadeIn` | `@/components/AnimatedElements` | Scroll-triggered fade animation | Insurance, many pages |
| `StaggerContainer` | `@/components/AnimatedElements` | Sequential child animation | Insurance |
| `AnimatedCounter` | `@/components/AnimatedElements` | Animated number counters | Available, not on hubs |
| `FAQWithSchema` | `@/components/FAQ` | Accordion FAQ with auto JSON-LD | Commercial |
| `ParallaxSection` + `ParallaxCardsContainer` + `ParallaxCard` | `@/components/ParallaxSection` | Background parallax with overlapping cards | Commercial |
| `HubRelatedArticles` | `@/components/HubRelatedArticles` | Related guide articles for hub pages | Commercial |
| `HighLevelForm` | `@/components/HighLevelForm` | Lead capture form (commercial/residential variants) | Commercial, residential, insurance, contact |
| `ContentParallax` | `@/components/ContentImage` | Image parallax visual break | Residential |
| `InContentCTA` | `@/components/InContentCTA` | Inline CTA within prose content | Available |
| `Testimonials` | `@/components/Testimonials` | Testimonial display | Available |
| `PathwayCard` | `@/components/PathwayCard` | Navigation card with icons | Available |
| `InternalLinks` | `@/components/InternalLinks` | Related page links section | All hubs |
| `ServiceSchema` | `@/components/Schema` | Service structured data | Commercial, residential, insurance |
| `BreadcrumbSchema` | `@/components/Schema` | Breadcrumb structured data | All hubs |
| `Breadcrumb` | `@/components/Breadcrumb` | Visual breadcrumb navigation | Commercial, residential |
| `ContactFormSwitcher` | `@/components/ContactFormSwitcher` | Commercial/residential form toggle | Contact page |

**Note:** "InteractiveCards" mentioned in context does not exist as a standalone component. The interactive card pattern is implemented inline using Tailwind classes + group hover effects (see commercial page service cluster cards). This is the pattern to follow.

**Confidence:** HIGH -- all verified in codebase.

### Child Pages That Must Be Linked

**Services Hub** -- must link to all service landing pages:
- Core SERVICES array (5): commercial-construction, multi-family-construction, disaster-recovery, historic-restoration, luxury-custom-homes
- Plus OTHER_SERVICES (4): building-consultants, insurance-restoration, certified-estimates, expert-witness
- Plus specialty pages: balcony-reconstruction, exterior-waterproofing
- Plus sub-hub pages: /commercial/, /residential/, /insurance/
- **Total: ~12-15 unique service page links**

**Locations Hub** -- must link to all location pages AND service-location pages:
- 9 city hub pages: /locations/tampa-fl/, /locations/st-petersburg-fl/, etc. (including plant-city-fl)
- 72 service-location pages: 9 services x 8 cities (balcony-reconstruction-{city}, commercial-construction-{city}, condo-remediation-{city}, disaster-recovery-{city}, exterior-waterproofing-{city}, historic-restoration-{city}, insurance-restoration-{city}, luxury-custom-homes-{city}, multi-family-construction-{city})
- **Total: ~81 links to organize**

**Insurance Hub** -- must link to all insurance-related pages:
- 9 direct child service pages: building-consultant, licensed-general-contractor, certified-estimating, appraisal-arbitration, fire-restoration, water-restoration, hurricane-restoration, mold-remediation + expert-witness
- 8 insurance-restoration location pages: insurance-restoration-{city}
- Insurance guides: /insurance/guides/
- Related: /disaster-recovery/ and disaster-recovery-{city} pages
- **Total: ~18-26 links**

**Contact Page** -- lighter linking requirements:
- Links to service hubs: /commercial/, /residential/, /insurance/
- Link to locations: /locations/
- Link to about: /about/
- **Total: ~5-8 strategic links**

### Data Sources in lib/constants.ts

All service and location data is already centralized:

| Constant | Items | Use |
|----------|-------|-----|
| `SERVICES` | 5 core services | Service cards with slug, description, icon, features |
| `OTHER_SERVICES` | 4 additional services | Additional service cards |
| `LOCATIONS` | 8 cities (+Plant City in app/) | Location data with name, slug, population, description |
| `COMMERCIAL_SERVICES` | 9 items | Nav links for commercial silo |
| `RESIDENTIAL_SERVICES` | 3 items | Nav links for residential silo |
| `INSURANCE_SERVICES` | 9 items | Nav links for insurance silo |
| `FAQ_DATABASE` | commercial, multiFamily, disaster, historic, balcony + more | FAQ content per service |
| `BUSINESS_INFO` | 1 object | Phone, address, hours, license, credentials |

**Confidence:** HIGH -- directly verified.

### Image Assets Available

The site has optimized AI-generated images available via `lib/imageMapping.ts`:
- `AI_IMAGES.*` -- service category images (medical, multifamily, industrial, historic, condo, office, hurricane, etc.)
- `PARALLAX_IMAGES.*` -- background parallax images (commercial, residential, etc.)
- `SERVICE_HERO_IMAGES.*` -- hero backgrounds per category
- `getImageForPage(slug)` -- automatic image selection by page slug

**Confidence:** HIGH -- verified in imageMapping.ts.

## Recommended Architecture Per Hub

### Services Hub (`/services/`)
**Pattern:** Navigation hub with substantial intro
- **Structure:** Hero > Trust strip > Intro prose (why FCS, capability overview, ~400 words) > Service Categories (3 silo sections: Commercial, Residential, Insurance) with card grids linking to child pages > Cross-silo overview > FAQ section > CTA > Internal Links
- **Word target:** 2,000+ words
- **Components:** FadeIn, AnimatedCounter (for trust strip), FAQWithSchema, HighLevelForm, InternalLinks, BreadcrumbSchema, ServiceSchema
- **Child linking:** Group by silo -- commercial services cluster, residential, insurance services cluster. Use image cards similar to commercial page pattern.
- **FAQ:** YES -- "construction services Tampa" has search volume; FAQ captures long-tail
- **CTA language:** "Discuss Your Project" / "Schedule a Consultation"

### Locations Hub (`/locations/`)
**Pattern:** Service area directory with substantial intro
- **Structure:** Hero > Trust strip > Intro prose (Tampa Bay market knowledge, service radius, ~400 words) > Primary Markets section (Tampa, St. Pete, etc. with expanded descriptions + service links) > Service-by-City matrix or by-city sections > Service area map description > CTA > Internal Links
- **Word target:** 2,000+ words
- **Link organization recommendation:** By city (9 sections), each city section showing its service-location page links. This gives 9 expandable sections each linking to 8-9 service pages. Reason: users search by city, not by service-then-city. Each city section gets 2-3 sentences of local context.
- **FAQ:** YES -- "construction company near me Tampa" captures local intent
- **CTA language:** "Discuss Your Project" / "Schedule a Consultation"
- **Fix needed:** Current meta description has typo "Sevice" -- must be corrected

### Insurance Hub (`/insurance/`)
**Pattern:** Authority pillar page (deepest content)
- **Structure:** Keep existing hero, stats, service grid. ADD: extended intro prose (~800 words on large-loss expertise, claims process overview, what sets FCS apart), claims lifecycle section, featured insurance restoration projects, expanded "why FCS" with more detail on Xactimate/carrier negotiation/expert witness, FAQ section (from FAQ_DATABASE.disaster), service area grid, CTA
- **Word target:** 3,000+ words (currently ~800, needs ~2,200 more)
- **Components:** Add FAQWithSchema, enhance with ParallaxSection visual break, add AnimatedCounter for stats
- **Content needs:** The insurance hub is the highest-value page on the site. It needs authority-level content covering: direct carrier negotiation process, Xactimate certification significance, expert witness capability, large loss vs small loss distinction, commercial vs residential claims differences, the FCS advantage (prime contractor, in-house engineer for damage assessment)
- **FAQ:** YES -- high long-tail opportunity for "insurance restoration contractor Tampa" queries
- **CTA language:** "Request a Claims Consultation" / "Discuss Your Loss"
- **Note:** This is a "use client" page via InsurancePageClient.tsx. The expansion needs to work within the client component pattern OR the page needs to be restructured to server component with client sub-components.

### Contact Page (`/contact/`)
**Pattern:** Landing page with form prominence
- **Structure:** Hero > Two-column layout (left: trust content + contact info, right: form -- KEEP FORM VISIBLE) > Service area coverage section with city descriptions > What to Expect section (qualification process description) > Trust signals strip > Internal Links
- **Word target:** 500-800 words (per user decision -- don't bury the form)
- **Components:** Keep ContactFormSwitcher, add FadeIn, possibly Testimonials
- **Critical rule:** Form must remain above-the-fold or immediately after hero. Content goes BELOW and ALONGSIDE the form, never pushing it down.
- **FAQ:** NO -- contact pages don't benefit from FAQ; users want to act, not read
- **CTA language:** "Discuss Your Project" / "Request a Consultation" / direct phone

## Common Pitfalls

### Pitfall 1: Burying the Form on Contact Page
**What goes wrong:** Adding 800 words of content before the contact form, pushing it below the fold
**Why it happens:** Treating content expansion as "add more text before everything else"
**How to avoid:** Content goes alongside and below the form, never above. Two-column layout with form in right column, visible immediately.
**Warning signs:** Form not visible without scrolling on desktop

### Pitfall 2: Generic Content That Doesn't Reflect FCS's Position
**What goes wrong:** Writing hub content like FCS is a residential handyman ("Free estimates! No job too small!")
**Why it happens:** Default construction contractor copywriting patterns
**How to avoid:** Every piece of content must reflect: $500K-$25M+ projects, prime contractor only, in-house engineering, 40+ years, large-capacity GC. CTAs say "Discuss Your Project" or "Schedule a Consultation" -- never "Get a Free Quote" or "Free Estimate"
**Warning signs:** Any CTA text containing "free estimate," "free quote," or "no job too small"

### Pitfall 3: Location Hub Becomes an Unnavigable Wall of Links
**What goes wrong:** Dumping 81 links into a flat list that nobody can navigate
**Why it happens:** Meeting the "link to every page" requirement without UX consideration
**How to avoid:** Organize by city with expandable sections. Each city gets a brief intro paragraph + a grid of its 8-9 service-location links. Consider collapsible sections or tabs for the 9 cities.
**Warning signs:** Page length exceeding 5,000px with no visual organization

### Pitfall 4: Insurance Page "use client" Constraint
**What goes wrong:** The insurance hub is a client component (InsurancePageClient.tsx) which means metadata must be exported from the wrapper page.tsx. Adding too much interactive state could affect performance.
**Why it happens:** The FadeIn/StaggerContainer components require "use client"
**How to avoid:** Consider restructuring: keep metadata export in page.tsx (already done), but evaluate whether the entire page needs to be a single client component or could be split into server + client sections for better performance. For this phase, keeping the existing pattern is fine since the commercial page uses server components with Image tags.
**Warning signs:** Very large client bundle size for the insurance page

### Pitfall 5: Losing Existing Personalized Content
**What goes wrong:** Full rewrite overwrites company-specific information that was carefully crafted
**Why it happens:** Starting from scratch instead of auditing what exists
**How to avoid:** For each hub, first extract any company-specific prose (real project names, specific credentials, unique positioning language) before rewriting. The commercial page's featured projects (Turner Agri-Center, Tiara Condo, Leon County, Bay Pines) are examples of personalized content that must be preserved.
**Warning signs:** Post-rewrite content that could belong to any construction company

### Pitfall 6: Inconsistent CTA Language Across Hubs
**What goes wrong:** Some hubs say "Get Free Estimate" while others say "Discuss Your Project"
**Why it happens:** Not coordinating CTA copy across the expansion effort
**How to avoid:** Establish a CTA vocabulary before writing: primary CTAs use "Discuss Your Project" / "Schedule a Consultation" / "Request a Bid" (for commercial). Phone CTAs always show the number. No "free estimate" or "free quote" language anywhere.
**Warning signs:** The existing services and locations pages still have "Get Free Estimate" CTAs that need updating

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Service card grids | Custom card layout | Follow commercial page pattern with Image + Link + group hover | Already proven, consistent with site design |
| FAQ sections | Custom accordion | `FAQWithSchema` component | Includes automatic JSON-LD schema generation |
| Stats/counters | Manual number display | `AnimatedCounter` or the trust strip pattern from commercial page | Consistent UX across hub pages |
| Service data | Hardcoded arrays in page files | Import from `lib/constants.ts` (SERVICES, LOCATIONS, COMMERCIAL_SERVICES, etc.) | Single source of truth, already maintained |
| Image selection | Manual path construction | `AI_IMAGES`, `PARALLAX_IMAGES`, `getImageForPage()` from `lib/imageMapping.ts` | Optimized paths, alt text included |
| Related articles | Manual article links | `HubRelatedArticles` component | Already handles formatting and "view all" link |
| Lead capture forms | Custom form | `HighLevelForm` (variant="commercial" or "residential") or `ContactFormSwitcher` | Connected to HighLevel/LeadConnector CRM |

## Code Examples

### Hub Page Skeleton (Server Component Pattern)

```typescript
// Source: /app/commercial/page.tsx pattern
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, CheckCircle } from "lucide-react";
import { BUSINESS_INFO, SERVICES, LOCATIONS } from "@/lib/constants";
import { BreadcrumbSchema, ServiceSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQWithSchema } from "@/components/FAQ";
import { HubRelatedArticles } from "@/components/HubRelatedArticles";
import { HighLevelForm } from "@/components/HighLevelForm";
import { InternalLinks } from "@/components/InternalLinks";
import { AI_IMAGES, AI_IMAGE_ALT, PARALLAX_IMAGES } from "@/lib/imageMapping";

export const metadata: Metadata = {
  alternates: { canonical: 'https://floridaconstructionspecialists.com/{hub}/' },
  title: "{Target Title} | FCS",
  description: "{150-160 char meta description with CTA}",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "{Hub Name}", href: "/{hub}/" },
];
```

### Service Card Grid Pattern

```typescript
// Source: /app/commercial/page.tsx service clusters
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  {services.map((service) => {
    const Icon = service.icon;
    return (
      <Link
        key={service.name}
        href={service.href}
        className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-brand-green/30"
      >
        <div className="relative h-40 w-full overflow-hidden">
          <Image
            src={service.image}
            alt={service.imageAlt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-5">
          <h3 className="text-lg font-bold text-brand-green-dark mb-2 group-hover:text-brand-green transition-colors font-heading">
            {service.name}
          </h3>
          <p className="text-sm text-gray-600 mb-3">{service.description}</p>
        </div>
      </Link>
    );
  })}
</div>
```

### Trust Strip Pattern

```typescript
// Source: /app/commercial/page.tsx trust indicators
<section className="py-8 bg-white border-b border-gray-100">
  <div className="container-custom">
    <div className="flex flex-wrap items-center justify-center gap-8 text-center">
      <div>
        <p className="text-3xl font-bold text-brand-green-dark">{BUSINESS_INFO.projectValueRange}</p>
        <p className="text-sm text-gray-600">Project Range</p>
      </div>
      <div className="h-12 w-px bg-gray-200 hidden md:block" />
      <div>
        <p className="text-3xl font-bold text-brand-green-dark">{BUSINESS_INFO.yearsInBusiness}</p>
        <p className="text-sm text-gray-600">Years Experience</p>
      </div>
      {/* ... more stats ... */}
    </div>
  </div>
</section>
```

### Qualified CTA Pattern (NOT "Free Estimate")

```typescript
// Source: /app/commercial/page.tsx CTA
<div className="flex flex-col sm:flex-row gap-4">
  <Link
    href="/contact/"
    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-gold text-white font-bold rounded-full hover:bg-brand-gold-dark transition-all"
  >
    Discuss Your Project
    <ArrowRight className="w-5 h-5" />
  </Link>
  <a
    href={`tel:${BUSINESS_INFO.phoneRaw}`}
    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-all"
  >
    <Phone className="w-5 h-5" />
    {BUSINESS_INFO.phone}
  </a>
</div>
```

## Specific Findings Per Hub

### Services Hub: Full Rewrite Required

**Current problems:**
1. Content is only card grids generated from SERVICES/OTHER_SERVICES arrays -- no prose
2. No introduction explaining FCS capabilities, scope, or positioning
3. "Get Free Estimate" CTA violates the qualification-focused language requirement
4. No FAQ section
5. Links only to top-level service pages, missing sub-services and silo hubs
6. InternalLinks section has generic links, not service-specific

**What to preserve:** The SERVICES array data-driven card grid pattern is good; expand it with images and richer descriptions.

**Content needs:**
- 400-600 word introduction covering FCS's full-service GC capability, project range, differentiators
- Organized service directory by silo (Commercial, Residential, Insurance)
- Each service card needs image, description, and link
- Trust strip with key stats
- FAQ section targeting "Tampa construction services" queries
- Updated CTAs throughout

### Locations Hub: Full Rewrite Required

**Current problems:**
1. Single paragraph of content, poorly written ("Sevice Locations" typo in meta)
2. Hero subtitle duplicates the broken meta description text
3. No links to ANY location pages or service-location pages
4. No city descriptions or local market knowledge
5. "Get Free Estimate" CTA needs replacement
6. Missing entirely: the 72 service-location pages and 9 city hub pages need linking

**What to preserve:** Nothing worth preserving -- full rewrite from scratch.

**Content needs:**
- 400-600 word introduction covering Tampa Bay service area, market knowledge, local presence
- 9 city sections with 2-3 sentences per city + grid of service-location links
- Service area overview/description (counties served, radius from Ruskin HQ)
- Trust strip
- Updated CTAs
- Organization strategy for 81+ links

### Insurance Hub: Expansion Required

**Current problems:**
1. ~800 words, needs to reach 3,000+
2. Good structure exists but content is surface-level
3. Missing: claims process walkthrough, detailed differentiator explanations
4. Missing: FAQ section (FAQ_DATABASE.disaster exists and is ready to use)
5. Missing: featured insurance restoration projects (like commercial page has)
6. "use client" component -- works but adds to client bundle
7. Already links to 9 child service pages and 8 location pages (good)

**What to preserve:**
- Hero section with FadeIn animations
- Stats strip (40+, 300+, $25M+, 100% Prime)
- Service grid with all 9 insurance service cards
- "Why Property Owners Choose FCS" section with bullet points
- Service areas grid with location links
- Related links section

**Content to add (~2,200 more words):**
- Extended intro prose: large-loss authority positioning, claims lifecycle overview
- "Our Insurance Restoration Process" section: step-by-step from initial damage assessment through final restoration
- Detailed differentiator section: Xactimate certification explanation, direct carrier negotiation, expert witness capability, in-house engineer for structural assessment
- Featured insurance projects section (real project cards like commercial page)
- FAQ section using FAQ_DATABASE.disaster
- Visual break (ParallaxSection) between major content sections

### Contact Page: Content Expansion Required

**Current problems:**
1. ~115 words of actual content beyond the form
2. Generic intro text that could belong to any contractor
3. Service areas section is just city name badges, no links or descriptions
4. Missing: trust signals, service area map description, what to expect when you call
5. InternalLinks are generic

**What to preserve:**
- Two-column layout (contact info left, form right) -- this is good UX
- ContactFormSwitcher component
- Phone/email/location/hours display with icons

**Content to add (~400-600 words):**
- Enhanced intro: what kind of projects FCS handles, who should contact them
- "What to Expect" section: qualification process, typical project discussion, timeline
- Service area description: which counties, how far from HQ, emergency availability
- Trust signals: license, years in business, in-house engineering
- Possible testimonial snippet
- Keep total under 800 words -- form must not be buried

## CTA Vocabulary (Qualified Lead Appropriate)

Based on user decision that FCS is NOT a volume estimator but a large-capacity GC:

| Context | Recommended CTA | DO NOT Use |
|---------|----------------|------------|
| Primary button | "Discuss Your Project" | "Get a Free Estimate" |
| Secondary button | "Schedule a Consultation" | "Get a Free Quote" |
| Commercial context | "Request a Bid" | "Contact Us Today" |
| Insurance context | "Request a Claims Consultation" | "Call for Free Estimate" |
| Phone CTA | "Call {phone}" (always show number) | "Call Now!" |
| Contact page | "Request a Consultation" | "Submit" (too generic) |

**Existing CTAs to update:** Services hub and locations hub both currently have "Get Free Estimate" buttons that must be changed.

## Tone Recommendation

**Recommended tone for hub pages: Confident Authority with Approachability**

Rationale for high-end commercial construction leads ($500K-$25M+ projects):
- Decision-makers (property managers, developers, HOA boards, facility managers) need confidence that FCS has capacity and experience
- But they also need to feel they can have a conversation, not submit a formal RFP as first contact
- The commercial page already models this well: professional but not stiff, detailed but not academic
- Insurance content should be slightly more urgent/empathetic (property owners in distress)
- Avoid: salesy tone, promotional language, superlatives without backing ("the best in Tampa")
- Favor: specific credentials, real numbers ($500K-$25M range), named projects, named capabilities (Xactimate, CPM scheduling, SHPO compliance)

**Confidence:** MEDIUM -- this is a judgment call based on commercial construction marketing best practices.

## Credential Depth Recommendation

For hub pages (vs Phase 6 E-E-A-T deep dive):

**Include on hub pages (light touch):**
- "Since 1982" / "40+ years" -- in trust strips and intro prose
- "Licensed CBC1262722" -- in trust strip, not repeated in body text
- "In-house engineering" -- mentioned in intro, not explained in detail
- "$500K-$25M+" project range -- in trust strip and hero
- "Prime contractor" -- mentioned once in intro

**Save for Phase 6 (deep dive):**
- Owner biography and credentials
- Specific project case studies with photos
- Building code expertise details
- First-person experience narratives
- Author attribution on content

**Confidence:** MEDIUM -- boundary between Phase 4 and Phase 6 is a judgment call.

## Open Questions

1. **Insurance page "use client" restructure**
   - What we know: The insurance hub is entirely a client component, which increases bundle size. The commercial page (our template) uses server components.
   - What's unclear: Whether restructuring the insurance page to a server component with client sub-components is worth the effort in Phase 4 or should be deferred.
   - Recommendation: Keep the existing client component pattern for Phase 4. The content expansion can happen within InsurancePageClient.tsx. Refactoring to server components is a separate optimization concern.

2. **Source material for company-specific content**
   - What we know: Owner's resume and DRG PDF exist but paths not yet provided. Old site at old.floridaconstructionspecialists.com may have content.
   - What's unclear: Whether we need this material for Phase 4 hub pages or can work with what's already in the codebase (constants.ts, commercial page featured projects, etc.)
   - Recommendation: The commercial page already has 4 featured projects with real names and values. Use these as the template. Request source material only if the insurance page expansion needs specific project details not already in the codebase.

3. **Plant City location page**
   - What we know: /locations/plant-city-fl/ exists in the app directory but Plant City is NOT in the LOCATIONS constant array (only 8 cities listed).
   - What's unclear: Whether Plant City should be added to LOCATIONS and included in the locations hub expansion.
   - Recommendation: Include Plant City in the locations hub since the page exists. May need to add Plant City to the LOCATIONS array in constants.ts.

## Sources

### Primary (HIGH confidence)
- Direct codebase analysis of all 6 hub page source files
- `lib/constants.ts` -- service, location, and FAQ data structures
- `lib/imageMapping.ts` -- available image assets
- `components/` directory -- full component inventory
- `.planning/ROADMAP.md` and `REQUIREMENTS.md` -- phase requirements
- `.planning/STATE.md` -- accumulated decisions from Phases 1-3
- `.planning/codebase/CONVENTIONS.md` -- coding standards
- `.planning/codebase/STACK.md` -- technology stack

### Secondary (MEDIUM confidence)
- CTA language recommendations based on commercial construction marketing practices
- Tone recommendations based on B2B high-ticket service conversion patterns
- Location hub organization recommendation based on local SEO best practices

## Metadata

**Confidence breakdown:**
- Current state audit: HIGH -- directly verified every hub page in codebase
- Architecture patterns: HIGH -- extracted from existing commercial/residential pages
- Component availability: HIGH -- verified every component file exists with exports
- Content recommendations: MEDIUM -- based on SEO/conversion best practices, not verified with traffic data
- Tone/CTA guidance: MEDIUM -- judgment calls constrained by user decisions

**Research date:** 2026-02-16
**Valid until:** No expiration -- codebase-focused research, not dependent on external library versions
