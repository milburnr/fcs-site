# Phase 5: Location Page Strengthening - Research

**Researched:** 2026-02-16
**Domain:** Location page content uniqueness, city-specific SEO, doorway page compliance
**Confidence:** HIGH

## Summary

Phase 5 targets 72 service+location pages (9 services x 8 cities) that need genuine city-specific content to pass Google's doorway page test and rank for "[service] [city]" queries. Research into the current codebase reveals that **some pages already have strong unique content** (Tampa commercial-construction has ~2,035 words with rich city details) while others are structurally identical with city names swapped (balcony-reconstruction pages show ~60% content overlap when city names are normalized).

The `generateLocationFAQs()` function in `lib/constants.ts` still exists at lines 469-498 but is **no longer called by any page** -- all 72 pages already have inline FAQ arrays. However, many FAQs across pages for the same service share identical structure with only city names changed, which still counts as template-swapped content.

**Primary recommendation:** Rewrite each of the 72 pages independently with city-specific research baked into every section, achieving <40% content overlap. Organize work by city (8 batches) rather than by service, since city research is the differentiator and can be reused across services within the same city.

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions
- AI research per city during the research phase -- Claude researches each city's building department, permit info, neighborhoods, weather patterns, and commercial landmarks
- No user-provided city data; researcher handles all city-specific fact gathering
- Reference real FCS projects in cities when available -- specific project types and scopes, not generic presence language
- Consistent FCS brand voice across all cities -- same professional tone, city-specific facts swapped in (no city-flavored voice variations)
- Building departments: department name + link only -- avoid stale phone numbers, fee ranges, or official names that change
- Weather patterns: tie local climate to services -- "Tampa's hurricane exposure means..." connecting weather to why they need FCS
- Neighborhoods: include subdivisions -- go deeper than major areas, include specific HOA communities, condo complexes, business parks
- Landmarks: reference commercial landmarks only -- well-known commercial buildings, business districts, and developments (not stadiums/parks)
- No city-to-building-type specialization -- FCS does all building types everywhere, no artificial associations
- FAQs: 5-6 fully unique FAQs per page -- specific to each service+city combo, replacing generateLocationFAQs() entirely
- Visual breaks: parallax image section mid-page (similar to insurance hub pattern), using existing site images
- Neighborhoods: woven naturally into content throughout the page, not a dedicated "Areas We Serve" section
- Every city researched and written fully independently -- no geographic grouping or shared-angle content for similar cities
- No sample review step -- batch all 72 pages in one pass, trust the approach
- **Tampa (flagship):** 2,000+ words -- most neighborhoods, most detail, strongest pages on the site
- **Ruskin (lighter):** ~800-1,000 words -- limited commercial activity, residential area where owners live, not a commercial hub
- **All other cities:** 1,500+ words standard treatment -- full depth, full city research
- Ruskin is the only city getting lighter treatment

### Claude's Discretion
- Page section order and structure
- Which sections drive the <40% overlap target
- Content architecture (inline vs. data-driven)
- Exact parallax image selection per page
- How to handle cities with limited research data

### Deferred Ideas (OUT OF SCOPE)
None -- discussion stayed within phase scope
</user_constraints>

## Current State Analysis

### Page Inventory (72 pages total)

**9 Services:**
1. `balcony-reconstruction` (8 cities)
2. `commercial-construction` (8 cities)
3. `condo-remediation` (8 cities)
4. `disaster-recovery` (8 cities)
5. `exterior-waterproofing` (8 cities)
6. `historic-restoration` (8 cities)
7. `insurance-restoration` (8 cities)
8. `luxury-custom-homes` (8 cities)
9. `multi-family-construction` (8 cities)

**8 Cities:**
Tampa, St. Petersburg, Clearwater, Lakeland, Sarasota, Bradenton, Brandon, Ruskin

### Current Page Quality (by line count)

Pages range from 450 lines (disaster-recovery-bradenton) to 1,309 lines (condo-remediation-lakeland). Line counts do NOT correlate with content uniqueness -- many pages with identical line counts have templated content.

**Services with highest existing quality (already expanded in Phase 4 or earlier):**
- `condo-remediation` - 827-1,309 lines, generally strong
- `commercial-construction` - 530-576 lines, already has good city detail
- `insurance-restoration` - 827-1,145 lines, strong existing content

**Services with most templated content (identical line counts):**
- `exterior-waterproofing` - All 8 cities at exactly 465 lines
- `balcony-reconstruction` - 6 cities at exactly 482 lines (Tampa/Clearwater different)
- `disaster-recovery` - 450-820 lines, mixed quality

### Content Overlap Assessment

Testing balcony-reconstruction-bradenton vs balcony-reconstruction-brandon with city names normalized: **~60% overlap**. This significantly exceeds the 40% target. The overlap comes from:
1. Identical section structures and headings
2. Same service feature descriptions with city name swapped
3. Same process steps with minor local detail changes
4. Same cost/timeline tables (sometimes identical numbers)
5. Same "Why Choose FCS" sections

### generateLocationFAQs() Status

The function exists at `lib/constants.ts:469-498` but is **not called by any page file**. All 72 pages already define FAQ arrays inline. However, many FAQ sets across cities for the same service follow identical patterns:
- Same question structures with city name inserted
- Same answer templates with minor local detail variations
- This still constitutes template-swapped content per Google's guidelines

### Existing Components and Patterns

**Components already used by all 72 pages:**
- `ContentParallax` - All 72 pages already have at least one parallax section
- `FAQWithSchema` or inline `FAQ` + `FAQSchema` - All pages have FAQ sections
- `RelatedServices` / `NearbyLocations` - Most Phase 4+ pages use these
- `InternalLinks` - Older pages use manual link arrays
- `LocalBusinessSchema`, `ServiceSchema`, `BreadcrumbSchema` - All pages
- `GoogleMap` - Some pages (inconsistent)
- `HighLevelForm` - Only Tampa commercial-construction page

**ContentParallax component** (`components/ContentImage.tsx`):
```tsx
export function ContentParallax({
  src, alt, title, subtitle, overlayOpacity = 0.5
}: { src: string; alt: string; title?: string; subtitle?: string; overlayOpacity?: number })
```

### Location Hub Pages (LOC-07)

Location hub pages exist at `/locations/[city]-fl/` for all 8 cities plus Plant City. Currently, the Tampa hub page links to service hubs (`/commercial/`, `/residential/`, `/insurance/`) but does NOT link to any service+location pages (e.g., `/commercial-construction-tampa/`). This is a gap that LOC-07 requires fixing.

### Available Images

The `/public/images/` directory contains project photos with descriptive names. Many are already used by existing pages. Available categories include:
- `facility-building-*` - Commercial buildings
- `lions-world-vision-*` - Institutional
- `leon-county-*` - Government/institutional
- `construction-*` - General construction
- `custom-home-*` - Residential
- `downtown-tampa-*` - Tampa skyline
- `commercial-construction-*` - Commercial
- Various numbered directories with project photos

## Architecture Patterns

### Recommended Content Architecture: Inline in page.tsx

**Decision: Keep content inline in page.tsx files, NOT in separate data files.**

Rationale:
1. Current pattern across all 72 pages is inline content -- changing architecture is unnecessary scope
2. Each page needs genuinely unique prose, not data-driven templates -- data files + templates is what created the overlap problem
3. Next.js App Router pages with static export work well with inline content
4. Inline content is easier to audit for uniqueness

### Recommended Page Structure (Claude's Discretion)

Based on analysis of the strongest existing pages (commercial-construction-tampa, condo-remediation-lakeland), recommend this section order:

**Standard Treatment (1,500+ words, 6 cities):**
1. Hero with city-specific messaging and trust badges
2. City market introduction (city-specific, NOT about FCS -- about WHY this city needs this service)
3. ContentParallax visual break
4. Service capabilities in this city (how the service applies to this city's specific conditions)
5. Local expertise section (building department, weather, neighborhoods woven in naturally)
6. Process section (city-specific permitting and construction considerations)
7. FAQ section (5-6 unique FAQs per page)
8. Internal links (RelatedServices + NearbyLocations)
9. CTA section

**Tampa Flagship (2,000+ words):**
Same structure but deeper on every section, more neighborhoods, more commercial landmarks, more detail.

**Ruskin Lighter Treatment (800-1,000 words):**
Condensed structure -- Hero, brief market context, service capabilities, FAQ (5-6 unique), internal links, CTA. Skip the deep local expertise section since Ruskin is primarily residential.

### Differentiation Strategy (Claude's Discretion)

**Primary differentiation carriers (sections that MUST be unique per page):**
1. **City market introduction** -- Each city gets unique economic/construction context
2. **Local expertise section** -- Different building departments, weather patterns, neighborhoods
3. **FAQs** -- 5-6 fully unique questions and answers per page

**Secondary differentiation carriers:**
4. **Service capabilities** -- Same service framed differently for each city's market
5. **Process section** -- City-specific permitting details

**Acceptable shared content (contributes to the ~40% shared baseline):**
- Trust badges (identical across all pages -- small percentage)
- CTA sections (very similar -- small percentage)
- Hero structure/layout code (TSX structure, not prose)

This approach ensures the three major prose sections (intro, expertise, FAQs) are completely unique, driving overlap well below 40%.

### Work Organization

**Recommended: Organize by city, not by service.**

Each city requires independent research into:
- Building department name and website URL
- Weather patterns relevant to construction
- Neighborhoods, subdivisions, HOA communities, business parks
- Commercial landmarks, business districts, developments
- County/jurisdiction details

This research applies to all 9 services for that city. Writing all 9 pages for one city back-to-back allows reusing research efficiently while ensuring each service page has a unique angle on the same city facts.

**Batch order:**
1. Tampa (9 pages, 2,000+ words each -- flagship, most research)
2. St. Petersburg (9 pages, 1,500+ words)
3. Clearwater (9 pages, 1,500+ words)
4. Lakeland (9 pages, 1,500+ words)
5. Sarasota (9 pages, 1,500+ words)
6. Bradenton (9 pages, 1,500+ words)
7. Brandon (9 pages, 1,500+ words)
8. Ruskin (9 pages, 800-1,000 words -- lighter treatment)

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Internal links | Manual link arrays | `RelatedServices` + `NearbyLocations` components | Already exist, data-driven from constants |
| Schema markup | Custom JSON-LD | `LocalBusinessSchema`, `ServiceSchema`, `FAQSchema`, `BreadcrumbSchema` components | Already exist, consistent output |
| FAQ rendering | Custom accordion | `FAQWithSchema` component | Already handles both UI and schema in one |
| Parallax sections | Custom parallax | `ContentParallax` component | Already exists with proper props |
| Content overlap measurement | Manual comparison | Rough line-level diff with city names normalized | Simple `diff` + `sed` is sufficient for spot-checking |

## Common Pitfalls

### Pitfall 1: Template-Swapping Disguised as Unique Content
**What goes wrong:** Writer produces content that looks different but follows identical sentence structures with city names inserted. Google's doorway page detector catches this.
**Why it happens:** It's faster to write one template and swap details. Also happens unconsciously when writing multiple pages in a session.
**How to avoid:** Write each page from scratch for that specific city+service combination. Start with city-specific facts and build content around them, not vice versa. Research the city BEFORE writing.
**Warning signs:** Two pages for the same service have the same paragraph count, same heading structure, same sentence lengths.

### Pitfall 2: Stale Government Information
**What goes wrong:** Building department phone numbers, fee schedules, or official names change. Page has incorrect info.
**Why it happens:** City websites update without notice.
**How to avoid:** User decision locks this: **department name + link only**. No phone numbers, no fee ranges, no specific official names that change. Just "City of Tampa Building Services Department" with a link.

### Pitfall 3: Fabricating Local Details
**What goes wrong:** Writer invents neighborhood names, business parks, or commercial landmarks that don't exist or are mislocated.
**Why it happens:** Pressure to fill content with local details for cities with limited research data.
**How to avoid:** Only include verifiable details. For smaller cities (Ruskin), lean into what IS true (logistics corridor, Sun City Center retirement, Apollo Beach waterfront) rather than inventing commercial activity.

### Pitfall 4: Forgetting Bidirectional Linking (LOC-07)
**What goes wrong:** Location hub pages at `/locations/[city]-fl/` don't link to the service+location pages, or the service+location pages don't link back.
**Why it happens:** Focus on content writing overshadows the linking requirement.
**How to avoid:** Explicit task for updating all 8 location hub pages to include links to all 9 service+location pages for that city. Verify bidirectional links are present.

### Pitfall 5: Inconsistent Brand Voice
**What goes wrong:** Tampa pages sound confident and assertive while Lakeland pages sound tentative. Or Bradenton pages adopt a "coastal vibe" tone.
**Why it happens:** Writer unconsciously adjusts tone based on city perception.
**How to avoid:** User decision locks consistent FCS brand voice across all cities. Same professional tone everywhere. City-specific facts change, voice does not.

### Pitfall 6: Ruskin Contradiction
**What goes wrong:** Success criteria says "Ruskin is top 5 strongest" but user decided "Ruskin gets lighter treatment (800-1,000 words)."
**Why it happens:** The original requirements were written before the context discussion refined the approach.
**How to avoid:** **User decision overrides original requirement.** Ruskin gets 800-1,000 words. The LOC-06 requirement should be treated as superseded by the CONTEXT.md decision. Ruskin pages should be *high quality* within their shorter format, but they are NOT expected to be among the longest or most detailed pages.

## Code Examples

### Current Page Pattern (what already works)

All 72 pages follow this import/structure pattern:
```tsx
// File: app/[service]-[city]/page.tsx
import Link from "next/link";
import { Phone, MapPin, CheckCircle, ... } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { FAQWithSchema } from "@/components/FAQ";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema, ArticleSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { RelatedServices, NearbyLocations } from "@/components/InternalLinks";
import type { Metadata } from "next";
import { ContentParallax } from "@/components/ContentImage";

export const metadata: Metadata = {
  alternates: { canonical: 'https://floridaconstructionspecialists.com/[service]-[city]/' },
  title: "[Service] in [City] | FCS",
  description: "...",
};

const faqs = [
  { question: "...", answer: "..." },
  // 5-6 unique FAQs
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "[Service Hub]", href: "/[service-hub]/" },
  { name: "[City]", href: "/[service]-[city]/" },
];

export default function [Service][City]Page() {
  return (
    <>
      <LocalBusinessSchema city="[City]" service="[Service]" />
      <ServiceSchema ... />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Page sections */}
    </>
  );
}
```

### ContentParallax Usage
```tsx
<ContentParallax
  src="/images/[image-folder]/[image-name]-display.webp"
  alt="[Descriptive alt text]"
  title="[Overlay title]"
  subtitle="[Overlay subtitle]"
  overlayOpacity={0.55}
/>
```

### RelatedServices + NearbyLocations (preferred over manual links)
```tsx
<RelatedServices city="[City]" currentService="[service-slug]" />
<NearbyLocations currentCity="[City]" service="[service-slug]" serviceName="[Service Name]" />
```

### Location Hub Bidirectional Links (LOC-07 pattern)

Location hub pages need to add service+location links. Pattern:
```tsx
// In /locations/tampa-fl/page.tsx
const serviceLocationLinks = [
  { href: "/commercial-construction-tampa/", label: "Commercial Construction in Tampa" },
  { href: "/multi-family-construction-tampa/", label: "Multi-Family Construction in Tampa" },
  { href: "/disaster-recovery-tampa/", label: "Disaster Recovery in Tampa" },
  { href: "/historic-restoration-tampa/", label: "Historic Restoration in Tampa" },
  { href: "/luxury-custom-homes-tampa/", label: "Luxury Custom Homes in Tampa" },
  { href: "/balcony-reconstruction-tampa/", label: "Balcony Reconstruction in Tampa" },
  { href: "/exterior-waterproofing-tampa/", label: "Exterior Waterproofing in Tampa" },
  { href: "/insurance-restoration-tampa/", label: "Insurance Restoration in Tampa" },
  { href: "/condo-remediation-tampa/", label: "Condo Remediation in Tampa" },
];
```

## City Research Requirements

For each city, the implementer needs to research and document:

### 1. Building Department (name + link only)
- Official department name
- Website URL for permits/building services
- County vs. city jurisdiction (some cities are unincorporated)

### 2. Weather Patterns (tied to services)
- Annual rainfall and seasonal patterns
- Hurricane exposure level
- Flood zone prevalence
- Any unique weather considerations (coastal vs inland)

### 3. Neighborhoods & Subdivisions
- Major commercial districts/business parks
- Residential subdivisions and HOA communities
- Condo complexes (relevant for condo-remediation, balcony pages)
- Industrial/logistics areas
- Waterfront areas

### 4. Commercial Landmarks
- Major commercial buildings and developments
- Business districts
- Hospital/medical corridors
- Industrial parks
- Shopping/retail centers (commercial buildings, not consumer destinations)

### 5. County/Jurisdiction Details
- Which county the city is in
- Whether permits go through city or county
- Any special overlay districts or historic districts

## Scope and Scale

### Effort Estimate
- **72 pages** to rewrite
- **8 cities** to research
- Tampa: 9 pages x 2,000+ words = ~18,000+ words
- Ruskin: 9 pages x 800-1,000 words = ~7,200-9,000 words
- Other 6 cities: 54 pages x 1,500+ words = ~81,000+ words
- **Total: ~106,000+ words of unique content**
- Plus 8 location hub page updates for LOC-07

### Dependencies
- All existing 72 page files already exist and will be replaced/rewritten
- Components (`ContentParallax`, `FAQWithSchema`, `RelatedServices`, etc.) all exist and work
- `BUSINESS_INFO` constants are stable
- Image files in `/public/images/` are available

### What Gets Deleted
- The `generateLocationFAQs()` function in `lib/constants.ts` (lines 468-498) should be removed after all pages are confirmed not using it
- Existing inline content in all 72 page files will be replaced with new unique content

## Open Questions

1. **How to verify <40% overlap at scale?**
   - What we know: Manual `diff` with city name normalization works for spot checks
   - What's unclear: No automated tool to check all 72 pages against each other
   - Recommendation: Build a simple script that strips TSX, normalizes city/county names, and computes pairwise similarity for same-service pages. Run after each city batch.

2. **Real FCS project references per city**
   - What we know: The about page and some existing pages reference specific projects (Italian American Club in Ybor City, Wotjowicz House, etc.)
   - What's unclear: Which cities FCS has actually completed projects in beyond Tampa
   - Recommendation: Reference project types and scopes generally ("commercial renovation projects in the Westshore corridor") rather than fabricating specific project names. Use known projects where they exist (Tampa historic projects are documented).

3. **LOC-06 vs CONTEXT.md contradiction on Ruskin**
   - What we know: Requirements say top-5 strongest; user decided lighter treatment
   - Recommendation: Follow user decision. Ruskin gets 800-1,000 words. Note this in the plan as a deliberate override.

## Sources

### Primary (HIGH confidence)
- Codebase analysis: All 72 page files examined for structure, line counts, overlap
- `lib/constants.ts` lines 54-498: SERVICES, LOCATIONS, generateLocationFAQs() verified
- `components/ContentImage.tsx`: ContentParallax component API verified
- `components/InternalLinks.tsx`: RelatedServices/NearbyLocations component API verified
- `.planning/ROADMAP.md`: Phase dependencies and requirements verified
- `.planning/REQUIREMENTS.md`: LOC-01 through LOC-07 requirements verified

### Secondary (MEDIUM confidence)
- Content overlap measurement: Approximate line-level diff analysis (~60% overlap for same-service pages)
- Word count estimates: Derived from stripping TSX tags (includes some code artifacts)

## Metadata

**Confidence breakdown:**
- Current state analysis: HIGH - Direct codebase examination
- Architecture patterns: HIGH - Based on established project patterns
- Content requirements: HIGH - Clear user decisions in CONTEXT.md
- Overlap measurement: MEDIUM - Approximate method, sufficient for planning
- City research scope: MEDIUM - Research depth will be validated during implementation

**Research date:** 2026-02-16
**Valid until:** 2026-03-16 (stable domain, no external dependencies)
