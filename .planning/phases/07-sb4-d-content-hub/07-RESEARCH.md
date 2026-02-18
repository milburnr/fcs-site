# Phase 7: SB4-D Content Hub - Research

**Researched:** 2026-02-18
**Domain:** Content architecture, SB4-D legislative compliance, SEO content strategy
**Confidence:** HIGH

## Summary

The FCS site already has substantial SB4-D content scattered across multiple locations -- 17 pages touching on condo remediation, milestone inspections, SIRS, and SB4-D compliance. The primary challenge is NOT creating content from scratch but rather consolidating, reorganizing, and elevating existing content into a coherent authority hub anchored at `/sb4d-compliance/`.

The existing content has three problems: (1) it's split across `/commercial/`, `/insurance/guides/`, and top-level routes with no clear hub-and-spoke structure, (2) several pages contain outdated deadline language (still saying "approaching" for deadlines that passed in Dec 2024), and (3) the engineer is described as "in-house" on some pages, which contradicts the user's explicit decision that the engineer is a separate company.

The legislative landscape has also evolved since the existing content was written (Jan 2026). HB 913 (signed June 2025, effective July 1, 2025) introduced significant changes including SIRS deadline extension to Dec 31, 2025, baseline funding plans, a two-year reserve pause option, and an inflation-indexed $25K threshold. Content must be updated to reflect current law.

**Primary recommendation:** Create `/sb4d-compliance/` as the new pillar landing page with a pillar + cluster architecture. Rewrite/supplement existing pages to link back to it. Create location-specific SB4-D pages for Tampa, St. Pete, Clearwater, and Sarasota. Fix "in-house engineer" language across all SB4-D pages. Update all deadlines to past-due framing.

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions
- Write for both condo board members (non-technical decision makers) and property managers (semi-technical, need actionable steps)
- Cost guidance must be realistic -- never optimistically low. Acknowledge that construction costs typically overrun due to unforeseen issues. Provide ranges with strong caveats about variability
- Critical framing: It is February 2026 -- many SB4-D deadlines are already past due. Content should frame compliance as "you may already be non-compliant" not "deadlines are coming up"
- Voice: Claude picks appropriate voice per page, but the past-due deadline reality must inform the tone throughout
- New dedicated landing page at `/sb4d-compliance/` -- separate from existing `/balcony-reconstruction/` page
- Location-specific SB4-D pages for key cities (Tampa, St. Pete, Clearwater, Sarasota at minimum)
- The "in-house engineer" is actually Frank's friend who runs a separate engineering company -- NOT an FCS employee
- Position as: "Direct access to licensed structural engineers" -- emphasizes the capability without implying employment
- Never say "in-house" or "on staff" for the engineer -- use "dedicated engineering partner" or "direct access" language
- The public adjuster relationship can be mentioned similarly as an affiliated resource
- Author byline on SB4-D pages: FCS editorial team (not Frank individually)
- NO "free assessment" or "free estimate" -- SB4-D assessment work is intensive and Frank won't do it unless the business is likely
- Primary CTA: Phone call prominently featured ("Call to Discuss Your Building's Compliance Needs")
- Secondary CTA: Commercial form (existing HighLevel commercial survey) for those who prefer writing
- Urgency messaging: Factual, not fear-mongering -- "Many buildings are already past their initial milestone deadline"

### Claude's Discretion
- Code reference style (plain language first vs code-forward) -- decide per page type
- Hub structure (pillar + cluster vs single page)
- Existing page treatment (rewrite vs keep per page)
- "Why FCS" section placement
- Whether to create a downloadable lead magnet
- Which specific cities get location pages beyond the four confirmed
- Overall content voice per page type

### Deferred Ideas (OUT OF SCOPE)
- SB4-D specific HighLevel form with building-specific fields (age, unit count, last inspection) -- could be created later as a conversion optimization
- Insurance restoration tie-in content -- Phase 8 covers this separately
</user_constraints>

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
| `FAQWithSchema` | `@/components/FAQ` | FAQ sections with JSON-LD |
| `ServiceSchema, BreadcrumbSchema, FAQSchema, ArticleSchema, LocalBusinessSchema` | `@/components/Schema` | Structured data |
| `AuthorByline` | `@/components/AuthorByline` | "By Florida Construction Specialists" byline |
| `CodeReference` | `@/components/CodeReference` | Florida statute callout boxes |
| `InternalLinks, RelatedServices, NearbyLocations, ServiceAreaLinks` | `@/components/InternalLinks` | Hub cross-linking |
| `RelatedArticles` | `@/components/RelatedArticles` | Guide cross-linking |
| `BackToHub` | `@/components/BackToHub` | Link back to hub page |
| `ContentImage, ContentParallax` | `@/components/ContentImage` | Optimized images |
| `HighLevelForm` | `@/components/HighLevelForm` | Commercial form (secondary CTA) |
| `Accordion` | `@/components/ui/accordion` | Expandable FAQ sections |

**Installation:** No new packages needed. All components exist.

## Architecture Patterns

### Recommended Hub Structure: Pillar + Cluster

Based on the keyword research data (from `output/condo-remediation-research.md`) and the existing content inventory, a pillar + cluster model is the clear winner over a mega-page approach. Reasons:

1. **17 existing pages** already provide cluster content -- consolidating into one mega-page would destroy existing SEO equity
2. **Multiple distinct search intents** (informational: "what is SB4-D", commercial: "condo remediation cost", navigational: "Tampa SB4-D contractor") are best served by separate URLs
3. **Location-specific pages** inherently require separate routes

```
/sb4d-compliance/                          ← NEW PILLAR (primary landing)
├── /sb4d-compliance/checklist/            ← NEW (compliance checklist)
├── /sb4d-compliance/deadlines/            ← NEW (deadline calendar, past-due framing)
├── /sb4d-compliance/costs/                ← NEW (cost guidance with realistic ranges)
├── /sb4d-compliance/inspection-process/   ← NEW (milestone inspection + SIRS guide)
├── /sb4d-compliance/tampa/                ← NEW (location-specific)
├── /sb4d-compliance/st-petersburg/        ← NEW (location-specific)
├── /sb4d-compliance/clearwater/           ← NEW (location-specific)
├── /sb4d-compliance/sarasota/             ← NEW (location-specific)
│
├── EXISTING CLUSTER (update to link back to hub):
│   ├── /commercial/condo-remediation/     ← REWRITE links/CTAs, keep as service page
│   ├── /condo-remediation-{city}/         ← UPDATE breadcrumbs + links (8 pages)
│   ├── /insurance/guides/florida-sb4d-compliance-guide/  ← ASSESS for consolidation
│   ├── /insurance/guides/milestone-inspection-requirements/ ← ASSESS for consolidation
│   ├── /insurance/guides/sb-4-d-compliance-tampa-bay-condos/ ← ASSESS for consolidation
│   ├── /insurance/guides/condo-milestone-inspection-remediation/ ← ASSESS for consolidation
│   ├── /insurance/guides/sirs-structural-integrity-reserve-studies/ ← ASSESS for consolidation
│   ├── /commercial/guides/condo-structural-reserve-study-repairs/ ← ASSESS for consolidation
│   ├── /commercial/guides/condo-balcony-inspection-requirements/ ← UPDATE links
│   └── /commercial/guides/condo-milestone-inspection-remediation-tampa/ ← ASSESS overlap with location page
│
└── RELATED EXISTING (cross-link only):
    ├── /balcony-reconstruction/
    ├── /balcony-reconstruction-{city}/     (8 pages)
    └── /exterior-waterproofing/
```

### Existing Page Assessment (Claude's Discretion Recommendation)

Based on reviewing the content of each existing page:

| Page | Lines | Recommendation | Rationale |
|------|-------|---------------|-----------|
| `/commercial/condo-remediation/` | 1058 | **KEEP + UPDATE** | Strong service page. Update CTAs, fix deadline language, add links to new hub |
| `/condo-remediation-{city}/` (8 pages) | ~330 ea | **KEEP + UPDATE** | Location pages are valuable. Update links, fix "in-house" if present |
| `/insurance/guides/florida-sb4d-compliance-guide/` | 626 | **KEEP + REDIRECT consideration** | Overlaps with new hub. Add canonical to new hub OR keep as "insurance perspective" |
| `/insurance/guides/milestone-inspection-requirements/` | 624 | **KEEP + UPDATE** | Valuable detail page. Link to hub, update deadlines |
| `/insurance/guides/sb-4-d-compliance-tampa-bay-condos/` | 809 | **ABSORB into hub** | Most overlap with new `/sb4d-compliance/`. Redirect to hub or rewrite as distinct |
| `/insurance/guides/condo-milestone-inspection-remediation/` | 724 | **KEEP + UPDATE** | Good "after Phase 2" content, distinct from hub pillar |
| `/insurance/guides/sirs-structural-integrity-reserve-studies/` | 597 | **KEEP + UPDATE** | SIRS-specific detail, link to hub |
| `/commercial/guides/condo-structural-reserve-study-repairs/` | 841 | **KEEP + UPDATE** | Strong cost/planning content |
| `/commercial/guides/condo-balcony-inspection-requirements/` | 710 | **KEEP + UPDATE** | Balcony-specific, link to hub |
| `/commercial/guides/condo-milestone-inspection-remediation-tampa/` | 680 | **ASSESS overlap** | May overlap with `/sb4d-compliance/tampa/`. Consider redirect |

### Page Pattern (New Pages)

Every new page follows the established FCS pattern:

```typescript
// app/sb4d-compliance/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle, /* etc */ } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQWithSchema } from "@/components/FAQ";
import { AuthorByline } from "@/components/AuthorByline";
import { CodeReference } from "@/components/CodeReference";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  alternates: { canonical: 'https://floridaconstructionspecialists.com/sb4d-compliance/' },
  title: "SB4-D Compliance Tampa Bay | Condo Milestone Inspection | FCS",
  description: "...",
};

// Data arrays (faqs, features, etc.)

export default function SB4DCompliancePage() {
  return (
    <>
      {/* Schema markup */}
      {/* Hero with past-due urgency framing */}
      {/* Content sections */}
      {/* Phone CTA (primary) + Commercial form link (secondary) */}
      {/* FAQs with schema */}
      {/* Internal links to cluster pages */}
    </>
  );
}
```

### CTA Pattern (Per User Decision)

```typescript
// PRIMARY CTA - Phone call
<a href={`tel:${BUSINESS_INFO.phoneRaw}`}
   className="btn-primary flex items-center gap-2">
  <Phone className="w-5 h-5" />
  Call to Discuss Your Building's Compliance Needs
</a>

// SECONDARY CTA - Link to contact page with commercial form
<Link href="/contact/"
      className="btn-secondary flex items-center gap-2">
  <FileText className="w-5 h-5" />
  Request a Consultation Online
</Link>

// DO NOT USE:
// "Free Assessment" / "Free Estimate" / "Get a Free SB4-D Compliance Assessment"
```

### Engineer Language Pattern (Per User Decision)

```typescript
// CORRECT
"Direct access to licensed structural engineers"
"Dedicated engineering partners with decades of Florida experience"
"We coordinate with licensed Professional Engineers for all structural assessments"

// INCORRECT - NEVER USE
"Our in-house engineer"
"In-house engineering team"
"Engineer on staff"
```

### Anti-Patterns to Avoid
- **Duplicate content across hub and existing pages:** Each page must have a distinct focus. The hub pillar is an overview/gateway; cluster pages go deep on subtopics.
- **Outdated deadline language:** Every date reference must acknowledge Feb 2026 reality. Dec 31, 2024 deadlines are PAST. Dec 31, 2025 deadlines are PAST or imminent.
- **"Upcoming deadlines" framing:** Per user decision, frame as "you may already be non-compliant."
- **Optimistic cost ranges:** Always include contingency language. "Costs typically range from X to Y, with 10-20% contingency recommended for unforeseen conditions."
- **Generic CTAs:** No "Contact Us" buttons. Phone-first, compliance-specific language.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| FAQ sections | Custom accordion | `FAQWithSchema` component | Handles JSON-LD schema automatically |
| Schema markup | Manual JSON-LD | `ServiceSchema`, `FAQSchema`, etc. | Consistent, tested, maintained |
| Statute callouts | Custom styled boxes | `CodeReference` component | Consistent blue callout pattern across site |
| Internal linking | Manual link lists | `InternalLinks`, `RelatedArticles` components | Consistent styling, automatic patterns |
| Breadcrumbs | Manual nav | `Breadcrumb` component + `BreadcrumbSchema` | Handles both visual and schema |
| Image optimization | Raw `<img>` tags | `ContentImage` / `ContentParallax` | Handles optimized image serving |
| Author attribution | Manual text | `AuthorByline` component | Consistent, pulls from constants |

**Key insight:** The FCS site has mature component library. Every pattern needed for SB4-D pages already exists. The work is content writing and architecture, not component development.

## Common Pitfalls

### Pitfall 1: Content Cannibalization
**What goes wrong:** New `/sb4d-compliance/` pages compete with existing pages for the same keywords, splitting ranking signals.
**Why it happens:** The site already has 17 pages touching SB4-D topics. Adding more without careful differentiation creates keyword cannibalization.
**How to avoid:** Each page targets a distinct primary keyword. The hub pillar targets broad "SB4-D compliance" while cluster pages target specific subtopics ("milestone inspection cost", "SIRS deadline", "condo remediation Tampa"). Add canonical tags where overlap exists. Consider 301 redirects for pages that are effectively replaced.
**Warning signs:** Two FCS pages appearing for the same search query, or neither ranking well for overlapping terms.

### Pitfall 2: Outdated Legislative Information
**What goes wrong:** Content references deadlines and requirements that have changed since HB 913 (July 2025).
**Why it happens:** The condo-remediation-research.md was written January 2026 but references original SB 4-D deadlines. HB 913 made significant changes.
**How to avoid:** Use verified current deadlines:
- Dec 31, 2024: Milestone inspection for buildings with CO before July 1, 1992 (PAST DUE)
- Dec 31, 2025: SIRS completion deadline (PAST DUE as of Feb 2026)
- Dec 31, 2025: Milestone for buildings with CO between July 1992 - Dec 1994 (PAST DUE)
- Jan 1, 2025: Reserve waiver prohibition began (IN EFFECT)
- Dec 31, 2026: Coordinated SIRS/Milestone deadline
- HB 913 additions: Baseline funding plan requirement, 2-year reserve pause option, $25K threshold (inflation-indexed)
**Warning signs:** Any text saying "upcoming" or "approaching" for 2024/2025 deadlines.

### Pitfall 3: "In-House Engineer" Language Bleed
**What goes wrong:** Existing pages use "in-house engineer" and new pages inconsistently use different language, or worse, copy the wrong pattern.
**Why it happens:** 141 files across the site reference "in-house engineer." The pattern is deeply embedded.
**How to avoid:** When writing SB4-D pages, NEVER reference existing condo-remediation pages for engineer language. Always use "dedicated engineering partner" or "direct access to licensed structural engineers." Additionally, update existing SB4-D pages that use incorrect language.
**Warning signs:** Any variation of "in-house", "on staff", "our engineer" in new SB4-D content.

### Pitfall 4: Static Export Path Nesting
**What goes wrong:** Next.js static export with nested routes like `/sb4d-compliance/checklist/` may need explicit route directories.
**Why it happens:** Next.js App Router requires a directory per route segment. Each needs a `page.tsx`.
**How to avoid:** Create proper directory structure:
```
app/sb4d-compliance/page.tsx                    (hub pillar)
app/sb4d-compliance/checklist/page.tsx          (cluster)
app/sb4d-compliance/deadlines/page.tsx          (cluster)
app/sb4d-compliance/costs/page.tsx              (cluster)
app/sb4d-compliance/inspection-process/page.tsx (cluster)
app/sb4d-compliance/tampa/page.tsx              (location)
app/sb4d-compliance/st-petersburg/page.tsx      (location)
app/sb4d-compliance/clearwater/page.tsx         (location)
app/sb4d-compliance/sarasota/page.tsx           (location)
```
**Warning signs:** 404s on nested routes after build.

### Pitfall 5: Thin Location Pages
**What goes wrong:** Location-specific SB4-D pages end up as near-duplicates with only city name changed.
**Why it happens:** Temptation to template-ize location pages with minimal variation.
**How to avoid:** Each location page must include genuinely city-specific content:
- Tampa: City Code 5-110.9, (813) 274-3100 Construction Services, Bayshore corridor condo stock, Harbour Island/Davis Islands specifics
- St. Petersburg: Beach community considerations, Pinellas County Building Services (727) 464-3888, highest condo density in Tampa Bay
- Clearwater: Coastal proximity (25-year trigger for many buildings), beach condo concentration, tourism property considerations
- Sarasota: Affluent market, Sarasota County building department, barrier island properties, different county jurisdiction
**Warning signs:** 80%+ content overlap between location pages.

## Code Examples

### Hub Pillar Page Structure
```typescript
// app/sb4d-compliance/page.tsx
// This is the gateway page. It should:
// 1. Establish authority (past-due framing)
// 2. Provide high-level overview of SB4-D
// 3. Link to every cluster page
// 4. Include phone CTA prominently
// 5. NOT duplicate deep content from cluster pages

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Commercial", href: "/commercial/" },
  { name: "SB4-D Compliance", href: "/sb4d-compliance/" },
];

// Hub navigation cards linking to cluster pages
const hubPages = [
  {
    title: "Compliance Checklist",
    href: "/sb4d-compliance/checklist/",
    description: "Step-by-step checklist for condo boards to assess and achieve SB4-D compliance",
    icon: ClipboardCheck,
  },
  {
    title: "Deadline Calendar",
    href: "/sb4d-compliance/deadlines/",
    description: "Current milestone dates -- many buildings are already past their initial deadlines",
    icon: Calendar,
  },
  // ... costs, inspection-process, location pages
];
```

### CodeReference for Florida Statutes
```typescript
<CodeReference
  code="Florida Statute 553.899"
  section="Mandatory Structural Inspections for Condominium and Cooperative Buildings"
  description="Requires milestone inspections for all condo/co-op buildings 3+ stories at 30 years of age (or 25 years near coast). Phase 2 remediation must commence within 365 days of report."
  link="https://www.leg.state.fl.us/Statutes/index.cfm?App_mode=Display_Statute&URL=0500-0599/0553/Sections/0553.899.html"
  linkText="View Florida Statute"
/>
```

### Past-Due Deadline Framing
```typescript
// CORRECT framing for Feb 2026
<div className="bg-amber-50 border-l-4 border-amber-500 p-5 my-6 rounded-r-lg">
  <div className="flex items-start gap-3">
    <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
    <div>
      <p className="font-bold text-amber-900">Many Buildings Are Already Past Due</p>
      <p className="text-amber-800 text-sm mt-1">
        The December 31, 2024 milestone inspection deadline for buildings with certificates
        of occupancy before July 1992 has passed. The December 31, 2025 SIRS deadline has
        also passed. If your building has not completed these requirements, you may already
        be facing compliance exposure.
      </p>
    </div>
  </div>
</div>
```

### Phone-First CTA Section
```typescript
<section className="py-16 bg-gradient-to-br from-brand-green-dark to-brand-green-forest">
  <div className="container-custom text-center">
    <h2 className="text-3xl font-bold text-white mb-4">
      Discuss Your Building&apos;s Compliance Needs
    </h2>
    <p className="text-white/90 mb-8 max-w-2xl mx-auto">
      Whether you&apos;ve received a Phase 2 inspection report or haven&apos;t started
      the process yet, our team can help you understand your obligations and
      develop a remediation plan.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href={`tel:${BUSINESS_INFO.phoneRaw}`}
        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-gold text-brand-green-dark font-bold rounded-lg hover:bg-brand-gold-light transition-colors"
      >
        <Phone className="w-5 h-5" />
        Call {BUSINESS_INFO.phone}
      </a>
      <Link
        href="/contact/"
        className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors"
      >
        Request Consultation Online
      </Link>
    </div>
  </div>
</section>
```

## Current Legislative Facts (Verified Feb 2026)

### SB 4-D + SB 154 + HB 913 Combined Requirements

| Requirement | Deadline | Status (Feb 2026) |
|-------------|----------|-------------------|
| Milestone inspection: CO before July 1, 1992 | Dec 31, 2024 | **PAST DUE** |
| Milestone inspection: CO July 1992 - Dec 1994 | Dec 31, 2025 | **PAST DUE** |
| SIRS completion (all applicable buildings) | Dec 31, 2025 | **PAST DUE** |
| Reserve waiver prohibition begins | Jan 1, 2025 | **IN EFFECT** |
| Coordinated SIRS/Milestone deadline | Dec 31, 2026 | Approaching |
| Buildings reaching 30 years after Jan 1, 1995 | Year building turns 30 | Ongoing |
| Subsequent inspections | Every 10 years | Ongoing |

### HB 913 Key Changes (Effective July 1, 2025)
- SIRS must include a "baseline" funding plan showing reserves stay above zero
- Reserve threshold increased from $10,000 to $25,000 (indexed to inflation)
- Associations may pause reserve contributions for up to 2 fiscal years to prioritize immediate repairs
- Enhanced conflict-of-interest disclosures for engineers/architects
- Online reporting to DBPR required

### Tampa-Specific Requirements
- Tampa City Code 5-110.9 codifies SB 4-D locally
- Reports submitted via Accela "RCT" record type
- Construction Services contact: CSDLSP@tampagov.net, (813) 274-3100

### Cost Reality (for content accuracy)
- Special assessments: $10,000 - $150,000+ per unit depending on building and scope
- Balcony remediation per building: $500K - $5M
- Concrete restoration building-wide: $1M - $15M
- Building envelope waterproofing: $200K - $2M
- Parking structure repair: $500K - $10M
- Always include 10-20% contingency caveat
- Emphasize: "Costs typically exceed initial estimates due to hidden damage discovered during demolition"

## Existing Content Inventory (Complete)

### Pages That Need "In-House Engineer" Language Fix
These pages currently use "in-house engineer" or "in-house engineering" and will need updating as part of this phase (at minimum for SB4-D-related pages):

| Page | Current Language | Fix Priority |
|------|-----------------|--------------|
| `/condo-remediation-tampa/` | "in-house engineering team" (2 mentions) | HIGH |
| `/condo-remediation-st-petersburg/` | 1 mention | HIGH |
| `/insurance/guides/condo-milestone-inspection-remediation/` | 1 mention | HIGH |
| `/insurance/guides/sb-4-d-compliance-tampa-bay-condos/` | 1 mention | HIGH |
| `/insurance/guides/florida-sb4d-compliance-guide/` | 1 mention | HIGH |

Note: 141 total files site-wide use this language, but only SB4-D-related pages are in scope for this phase.

### Pages That Need Deadline Language Update
Every existing SB4-D page uses "approaching" or "upcoming" for deadlines that are now past. All must be updated to past-due framing.

## Recommended Hub Pages (New Content)

### 1. `/sb4d-compliance/` - Hub Pillar Landing Page
- **Primary keyword:** SB4-D compliance, condo compliance Tampa
- **Content:** Authority overview, hub navigation, why-FCS differentiators, phone CTA
- **Word count:** ~2,000 words
- **Distinct from existing:** This is a service-oriented landing page, not an informational guide

### 2. `/sb4d-compliance/checklist/` - Compliance Checklist
- **Primary keyword:** SB4-D compliance checklist, condo inspection checklist
- **Content:** Actionable step-by-step for board members, status assessment tool
- **Word count:** ~1,500-2,000 words
- **Requirement:** SB4D-01

### 3. `/sb4d-compliance/deadlines/` - Deadline Calendar
- **Primary keyword:** SB4-D deadline, condo milestone inspection deadline
- **Content:** Past-due status table, "where does your building stand" guidance, HB 913 updates
- **Word count:** ~1,500-2,000 words
- **Requirement:** SB4D-02

### 4. `/sb4d-compliance/costs/` - Cost Guidance
- **Primary keyword:** condo remediation cost, how much does condo remediation cost
- **Content:** Realistic ranges with contingency caveats, per-unit assessment ranges, financing options
- **Word count:** ~2,000-2,500 words
- **Requirement:** SB4D-03

### 5. `/sb4d-compliance/inspection-process/` - Inspection & SIRS Guide
- **Primary keyword:** milestone inspection process, SIRS study Florida
- **Content:** Phase 1/2 process, SIRS components, what happens after, engineering coordination
- **Word count:** ~2,000-2,500 words
- **Requirement:** SB4D-04

### 6-9. `/sb4d-compliance/{city}/` - Location Pages (Tampa, St. Pete, Clearwater, Sarasota)
- **Primary keyword:** SB4-D compliance {city}, condo remediation {city}
- **Content:** City-specific building department info, local condo stock context, jurisdiction requirements
- **Word count:** ~1,500-2,000 words each
- **Must include genuinely local content** (see Pitfall 5 above)

## Lead Magnet Recommendation (Claude's Discretion)

**Recommendation: Create a simple downloadable checklist PDF -- but defer it.**

Rationale: A "SB4-D Compliance Checklist for Condo Boards" PDF would be valuable for lead capture. However, this phase is already substantial (9 new pages + updates to 10+ existing pages). The checklist content will exist on the `/sb4d-compliance/checklist/` page. Creating a designed PDF download is a separate effort that could be added as a follow-up.

For now, the checklist page itself serves the same purpose without requiring PDF generation infrastructure.

## Open Questions

1. **Redirect strategy for overlapping existing pages**
   - What we know: `/insurance/guides/sb-4-d-compliance-tampa-bay-condos/` (809 lines) substantially overlaps with the new `/sb4d-compliance/` hub
   - What's unclear: Whether to 301 redirect the old URL or keep it as a distinct "insurance perspective" page
   - Recommendation: Keep for now (no redirect), but add canonical pointing to new hub and differentiate content focus. Revisit after 90 days of ranking data.

2. **Navigation placement for new hub**
   - What we know: Current nav has "Condo Remediation" under Commercial services pointing to `/commercial/condo-remediation/`
   - What's unclear: Whether `/sb4d-compliance/` should appear in the main nav or be discoverable through internal links
   - Recommendation: Add "SB4-D Compliance" as a sub-item under Commercial in nav, OR replace the condo-remediation nav link with the new hub (since `/commercial/condo-remediation/` would link to it)

3. **Scope of "in-house engineer" fixes**
   - What we know: 141 files use this language site-wide, but only ~5-7 are SB4-D related
   - What's unclear: Whether to fix ALL 141 files in this phase or only SB4-D pages
   - Recommendation: Fix only SB4-D-related pages in this phase. A separate cleanup task can address the remaining 130+ pages.

## Sources

### Primary (HIGH confidence)
- City of Tampa Condo Recertification page: https://www.tampa.gov/construction-services/condo-recert - Tampa City Code 5-110.9 requirements
- Florida Statute 553.899 (2025): https://www.leg.state.fl.us/Statutes/index.cfm?App_mode=Display_Statute&URL=0500-0599/0553/Sections/0553.899.html
- DBPR Condominium Portal: https://condos.myfloridalicense.com/

### Secondary (MEDIUM confidence)
- Florida Engineering LLC - SB4-D Building Reporting 2025: https://flengineeringllc.com/sb4d-building-reporting-requirements-2025/
- Florida Engineering LLC - Building Safety Act 2025: https://flengineeringllc.com/florida-building-safety-act-2025/
- Building Mavens - HB 913 Changes: https://buildingmavens.com/blog/florida-2025-sirs-law-changes-hb913/
- Falke HOA - Milestone Inspections Guide 2025-2026: https://www.falkehoa.com/florida-milestone-inspections-sirs-2025-2026
- Perez Mayoral PA - HB 913 Analysis: https://www.pmlawfla.com/new-2025-florida-condo-laws-hb-913-signed-by-desantis-what-homeowners-need-to-know/

### Tertiary (LOW confidence)
- NBC News - Condo repair costs article: https://www.nbcnews.com/politics/economics/reckoning-coming-floridas-condo-owners-buildings-face-millions-repairs-rcna165764 (cost per unit data)
- ManageCasa - Florida 2025 Condo Law overview: https://managecasa.com/articles/florida-2025-condo-law-funding-milestone-inspections-reserves
- Existing FCS site research: `output/condo-remediation-research.md` (generated Jan 2026, partially outdated on deadlines)

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - All components exist and are in active use across the site
- Architecture: HIGH - Pillar + cluster model is well-suited; existing content inventory is thoroughly mapped
- Pitfalls: HIGH - All pitfalls identified from direct codebase analysis (not hypothetical)
- Legislative facts: MEDIUM - Verified against multiple sources but some HB 913 details (exact effective provisions) would benefit from reading the actual bill text
- Cost data: MEDIUM - Ranges sourced from industry publications and existing FCS research, but market conditions vary

**Research date:** 2026-02-18
**Valid until:** 2026-04-18 (60 days -- stable unless new FL legislation passes)
