# FCS Website Rebuild: Claude Code Master Implementation Plan

## Executive Assessment

### Current State Analysis

Based on the Perplexity audit and live site review of https://fcs-site.netlify.app/, the current FCS site has:

**Strengths:**
- Clean TypeScript/React foundation on Netlify (modern, fast infrastructure)
- Clear dual-pathway positioning (Commercial B2B / Residential B2C)
- Core trust signals present (License CBC1262722, $10M+ bonding, 20+ years)
- Basic testimonials section with project-specific attribution
- Click-to-call CTAs implemented
- Responsive mobile design foundation

**Critical Gaps Preventing Map Pack Competitiveness:**

| Gap | Current State | Required State | Impact |
|-----|--------------|----------------|--------|
| Content Depth | ~10-15 pages, thin content | 60+ pages, 1,500-2,500 words each | Topical authority |
| Schema Markup | None detected | Full LocalBusiness, Service, FAQ, AggregateRating | Rich snippets, local pack |
| Location Pages | Single "Locations" page | 8+ city-specific landing pages | "Near me" rankings |
| Content Clusters | Scattered service pages | 4 pillar pages + 25+ cluster pages | Domain authority |
| Internal Linking | Minimal architecture | Strategic hub-and-spoke | PageRank distribution |
| Conversion Infrastructure | Basic CTAs | Multi-touch optimization with tracking | 3-5% conversion rate |
| Core Web Vitals | Unknown (needs audit) | LCP <2.5s, INP <200ms, CLS <0.1 | Performance ranking factor |

**Competitive Gap Summary:**
Top Florida construction competitors maintain 50-100+ ranked keywords, 50+ reviews, and comprehensive local SEO infrastructure. FCS currently ranks for likely <10 keywords. To compete in map pack results for central eastern Florida, this gap must be systematically closed.

---

## BMAD-Aligned Implementation Architecture

This plan follows the Breakthrough Method for Agile AI-Driven Development, optimized for Claude Code execution with proper context engineering.

### Phase 0: Foundation Setup (Pre-Development)

#### 0.1 Create CLAUDE.md Context File

```markdown
# FCS Website Build Context

## Project Overview
Florida Construction Specialists website rebuild - TypeScript/React on Netlify
Goal: Dominate local search in central eastern Florida for commercial/residential construction

## Technical Stack
- Framework: React with TypeScript
- Styling: Tailwind CSS
- Deployment: Netlify
- Content: MDX or structured JSON content files

## Key Business Info (Use Exactly)
- Company: Florida Construction Specialists
- License: CBC1262722
- Bonding: $10M+
- Phone: (813) 420-7561
- Address: 822 Bayview Dr, Ruskin, FL 33579
- Email: info@floridaconstructionspecialists.com
- Hours: Mon-Fri 8:00 AM - 4:00 PM

## Service Areas (NAP Consistency Critical)
Primary: Tampa, Lakeland, Brandon, Plant City, Clearwater, St. Petersburg, Sarasota, Bradenton
Secondary: Hillsborough County, Pinellas County, Polk County, Manatee County

## Service Lines
1. Commercial Construction ($500K-$50M+ projects)
2. Residential Construction ($1M+ luxury homes)
3. Historic Restoration
4. Disaster Recovery / Insurance Restoration

## SEO Requirements
- All pages need unique title tags: "[Service] | [Location] | Florida Construction Specialists"
- Meta descriptions: 155-160 chars, include CTA
- H1 tags: One per page, include primary keyword
- Schema: LocalBusiness, Service, FAQ, AggregateRating on every relevant page
- Alt text: Descriptive, keyword-rich but natural

## Code Style
- Use ES modules (import/export)
- Functional components with hooks
- Tailwind for styling (no separate CSS files)
- SEO component for meta tags
- Schema component for JSON-LD

## Commands
- npm run dev: Start development server
- npm run build: Production build
- npm run lint: Run linting
- netlify deploy --prod: Deploy to production
```

#### 0.2 Project Directory Structure

```
fcs-site/
├── .claude/
│   ├── commands/
│   │   ├── create-service-page.md
│   │   ├── create-location-page.md
│   │   ├── create-cluster-content.md
│   │   └── audit-seo.md
│   └── stories/
│       ├── epic-1-foundation/
│       ├── epic-2-content-architecture/
│       ├── epic-3-local-seo/
│       └── epic-4-conversion/
├── src/
│   ├── components/
│   │   ├── seo/
│   │   │   ├── SEOHead.tsx
│   │   │   ├── LocalBusinessSchema.tsx
│   │   │   ├── ServiceSchema.tsx
│   │   │   ├── FAQSchema.tsx
│   │   │   └── BreadcrumbSchema.tsx
│   │   ├── conversion/
│   │   │   ├── StickyPhoneCTA.tsx
│   │   │   ├── ContactForm.tsx
│   │   │   ├── QuoteRequestForm.tsx
│   │   │   └── TrustBadges.tsx
│   │   └── layout/
│   ├── pages/
│   │   ├── services/
│   │   │   ├── commercial/
│   │   │   ├── residential/
│   │   │   ├── historic-restoration/
│   │   │   └── disaster-recovery/
│   │   ├── locations/
│   │   │   ├── tampa/
│   │   │   ├── lakeland/
│   │   │   └── [city]/
│   │   └── resources/
│   ├── content/
│   │   ├── services/
│   │   ├── locations/
│   │   ├── projects/
│   │   └── blog/
│   └── lib/
│       ├── schema-generators.ts
│       └── seo-utils.ts
├── CLAUDE.md
└── docs/
    ├── PRD.md
    ├── ARCHITECTURE.md
    └── CONTENT-STRATEGY.md
```

---

## Epic 1: Technical SEO Foundation

### Story 1.1: Schema Markup Infrastructure

**Context:** Schema markup is critical for local SEO and rich snippets. FCS needs LocalBusiness, Service, FAQ, and AggregateRating schemas across the site.

**Acceptance Criteria:**
- [ ] LocalBusinessSchema component with all required fields
- [ ] ServiceSchema component for each service type
- [ ] FAQSchema component with dynamic question/answer pairs
- [ ] BreadcrumbSchema for navigation hierarchy
- [ ] AggregateRating schema (placeholder for future reviews)
- [ ] Schemas validate via Google Rich Results Test

**Implementation Details:**

```typescript
// src/components/seo/LocalBusinessSchema.tsx
interface LocalBusinessSchemaProps {
  additionalType?: string; // e.g., "HomeAndConstructionBusiness"
  serviceArea?: string[]; // Cities served
}

const localBusinessData = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
  "name": "Florida Construction Specialists",
  "image": "https://floridaconstructionspecialists.com/logo.jpg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "822 Bayview Dr",
    "addressLocality": "Ruskin",
    "addressRegion": "FL",
    "postalCode": "33579",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 27.7208,
    "longitude": -82.4333
  },
  "telephone": "+1-813-420-7561",
  "email": "info@floridaconstructionspecialists.com",
  "url": "https://floridaconstructionspecialists.com",
  "openingHours": "Mo-Fr 08:00-16:00",
  "priceRange": "$$$",
  "paymentAccepted": ["Cash", "Check", "Credit Card", "Financing"],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "license",
      "recognizedBy": {
        "@type": "Organization",
        "name": "Florida Department of Business and Professional Regulation"
      },
      "identifier": "CBC1262722"
    }
  ],
  "areaServed": [
    {"@type": "City", "name": "Tampa", "containedIn": "Florida"},
    {"@type": "City", "name": "Lakeland", "containedIn": "Florida"},
    // ... all service areas
  ]
};
```

---

### Story 1.2: SEO Head Component

**Context:** Every page needs unique, optimized meta tags for search visibility.

**Acceptance Criteria:**
- [ ] Dynamic title tag generation with location + service pattern
- [ ] Unique meta descriptions per page (155-160 chars)
- [ ] Canonical URLs
- [ ] Open Graph tags for social sharing
- [ ] Twitter Card meta tags
- [ ] Robots directives where needed

**Template Pattern:**
```
Title: [Primary Keyword] in [City] | Florida Construction Specialists
Meta: [Value proposition] in [City]. [Trust signal]. [CTA]. Call (813) 420-7561.
```

---

### Story 1.3: Core Web Vitals Optimization

**Context:** Construction sites average 3.3s load time. Target <2.5s LCP for competitive advantage.

**Acceptance Criteria:**
- [ ] Image optimization pipeline (WebP, lazy loading, srcset)
- [ ] Critical CSS inlining
- [ ] JavaScript code splitting
- [ ] Font optimization (preload, display:swap)
- [ ] Lighthouse score >90 on all pages
- [ ] CLS <0.1 (reserve space for images/ads)

**Implementation:**
```typescript
// next.config.js or equivalent
const optimizationConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
  experimental: {
    optimizeCss: true,
  }
};
```

---

## Epic 2: Content Architecture & Topical Authority

### Story 2.1: Commercial Construction Pillar Page

**Context:** This is the highest-value content cluster. The pillar page must be 2,500+ words and serve as the hub for all commercial content.

**Target Keywords:**
- Commercial construction Tampa
- Commercial contractor Florida
- Commercial general contractor near me
- Design-build construction Tampa Bay

**Page Structure:**
```markdown
# Commercial Construction Services in Tampa Bay, Florida

## Introduction (200 words)
- What we do, who we serve, why choose FCS
- Include all primary keywords naturally

## Our Commercial Construction Capabilities (400 words)
- Project types (new construction, buildouts, renovations)
- Size range ($500K - $50M+)
- Industries served

## Design-Build vs Traditional Construction (300 words)
- Explain approaches
- Link to cluster page: /services/commercial/design-build/

## Commercial Project Types (500 words with links to clusters)
### Medical & Healthcare Facilities
[Link to cluster: /services/commercial/medical-construction/]
### Multi-Family Developments  
[Link to cluster: /services/commercial/multi-family/]
### Industrial & Warehouse
[Link to cluster: /services/commercial/industrial-construction/]
### Tenant Improvements
[Link to cluster: /services/commercial/tenant-improvements/]

## Our Commercial Construction Process (400 words)
- Step-by-step timeline
- What to expect
- Include process schema

## Why Tampa Bay Businesses Choose FCS (300 words)
- 35+ years experience
- $10M+ bonding capacity
- License CBC1262722
- Local expertise

## Commercial Construction FAQ (10 questions, 400 words)
[FAQ Schema required]

## Recent Commercial Projects (Portfolio links)

## Get Your Commercial Project Started
[CTA with form]
```

**Cluster Pages Required:**
1. `/services/commercial/design-build/` - Design-Build Construction
2. `/services/commercial/medical-construction/` - Medical & Healthcare
3. `/services/commercial/multi-family/` - Multi-Family Developments
4. `/services/commercial/industrial-construction/` - Industrial & Warehouse
5. `/services/commercial/tenant-improvements/` - Tenant Improvements
6. `/services/commercial/commercial-additions/` - Commercial Additions
7. `/services/commercial/retail-construction/` - Retail Construction

---

### Story 2.2: Residential Construction Pillar Page

**Target Keywords:**
- Luxury home builder Tampa
- Custom home construction Florida
- Residential contractor near me
- Waterfront home builder Tampa Bay

**Page Structure:** (2,500+ words)
```markdown
# Luxury Custom Home Construction in Tampa Bay

## Introduction
## What Makes a Luxury Custom Home
## Our Residential Construction Services
### Waterfront Custom Estates
### Historic Home Restoration
### Hurricane-Resistant Construction
### Home Additions & Renovations
## The Custom Home Building Process
## Specialty Expertise
### FEMA/Flood Zone Compliance
### Balcony Reconstruction (SB4-D)
### Exterior Waterproofing
## FAQ (10 questions)
## Portfolio Showcase
## CTA
```

**Cluster Pages:**
1. `/services/residential/waterfront-homes/`
2. `/services/residential/hurricane-resistant-construction/`
3. `/services/residential/home-additions/`
4. `/services/residential/kitchen-remodeling/`
5. `/services/residential/balcony-reconstruction/`
6. `/services/residential/exterior-waterproofing/`

---

### Story 2.3: Disaster Recovery Pillar Page

**Context:** High-intent, urgent need searches. These visitors are ready to convert immediately.

**Target Keywords:**
- Disaster recovery contractor Florida
- Insurance restoration Tampa
- Storm damage repair Tampa Bay
- Water damage restoration commercial

**Page Structure:** (2,500+ words)
```markdown
# Disaster Recovery & Insurance Restoration in Tampa Bay

## Emergency Response - We're Here When You Need Us
[Prominent emergency contact CTA]

## Types of Disaster Recovery We Handle
### Hurricane & Storm Damage
### Water Damage Restoration
### Fire Damage Restoration
### Large Loss Insurance Claims

## The Insurance Restoration Process
### Initial Assessment & Documentation
### Working with Your Insurance Carrier
### Scope Development & Approval
### Restoration Execution
### Final Walkthrough

## Why Choose FCS for Disaster Recovery
- 24/7 availability
- Direct insurance carrier relationships
- Bonding capacity for large losses
- Documentation expertise

## FAQ (10 questions about insurance claims, timelines)

## Emergency Contact
[Multiple prominent CTAs]
```

---

### Story 2.4: Historic Restoration Pillar Page

**Target Keywords:**
- Historic restoration Tampa
- Historic building renovation Florida
- SHPO compliance contractor
- Historic preservation contractor

**Page Structure:** (2,500+ words)
- Niche expertise positioning
- Compliance requirements (SHPO, Secretary of Interior Standards)
- Grant navigation assistance
- Material sourcing expertise
- Case studies from Ybor City, Tampa historic districts

---

## Epic 3: Location-Based SEO Pages

### Story 3.1: City Landing Page Template

**Context:** Each major service area needs a dedicated landing page optimized for "[service] in [city]" searches.

**Target Cities (8 pages minimum):**
1. Tampa, FL (primary)
2. Lakeland, FL
3. Brandon, FL
4. Plant City, FL
5. Clearwater, FL
6. St. Petersburg, FL
7. Sarasota, FL
8. Bradenton, FL

**Page Template (1,500+ words each):**

```markdown
# Commercial & Residential Construction in [City], FL

## Your Trusted [City] Construction Partner
[Localized introduction mentioning specific neighborhoods, landmarks]

## Construction Services in [City]
### Commercial Construction in [City]
[Link to commercial pillar]
### Residential Construction in [City]
[Link to residential pillar]
### Disaster Recovery in [City]
[Link to disaster recovery pillar]

## Why [City] Property Owners Choose FCS
[Local testimonials if available]
[Mention local projects completed]
[Distance from main office: "Just XX minutes from our Ruskin headquarters"]

## [City] Construction Regulations & Permitting
[Local building department info]
[Specific zoning considerations]
[Flood zone info if coastal]

## Featured [City] Projects
[2-3 portfolio items from this area]

## FAQ for [City] Construction
[10 location-specific questions]

## Get Started on Your [City] Project
[CTA with phone, form]

## Service Area Map
[Embedded map showing coverage]
```

**Schema Requirements per Location Page:**
- LocalBusiness with `areaServed` set to this specific city
- BreadcrumbSchema: Home > Locations > [City]
- ServiceSchema for each service available in this city

---

### Story 3.2: Service Area Schema Implementation

**Acceptance Criteria:**
- [ ] Each location page has unique LocalBusiness schema variant
- [ ] `areaServed` properly configured for that city
- [ ] Geo coordinates for city center
- [ ] Breadcrumb schema for navigation

---

## Epic 4: Conversion Optimization Infrastructure

### Story 4.1: Sticky Mobile CTA Component

**Context:** 65% of local searches happen on mobile. Sticky phone button is critical for conversion.

**Acceptance Criteria:**
- [ ] Fixed position phone button on mobile (bottom of viewport)
- [ ] Click-to-call functionality (`tel:8134207561`)
- [ ] Only shows on mobile viewports (<768px)
- [ ] Doesn't obscure critical content
- [ ] Tracks clicks via analytics event

**Implementation:**
```tsx
// src/components/conversion/StickyPhoneCTA.tsx
const StickyPhoneCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 md:hidden z-50 p-4 bg-gradient-to-t from-black/20 to-transparent">
      <a
        href="tel:8134207561"
        className="flex items-center justify-center gap-2 w-full py-4 bg-orange-600 text-white font-bold rounded-lg shadow-lg hover:bg-orange-700 transition-colors"
        onClick={() => trackEvent('phone_click', { location: 'sticky_mobile' })}
      >
        <PhoneIcon className="w-5 h-5" />
        Call (813) 420-7561
      </a>
    </div>
  );
};
```

---

### Story 4.2: Multi-Step Quote Request Form

**Context:** Forms should be 3-5 fields max. Multi-step reduces cognitive load and improves completion rates.

**Form Fields:**
1. Step 1: Project Type (Commercial / Residential)
2. Step 2: Service Needed (dropdown based on Step 1)
3. Step 3: Project Timeline (dropdown)
4. Step 4: Contact Info (Name, Phone, Email - phone prioritized)
5. Step 5: Brief Description (optional)

**Acceptance Criteria:**
- [ ] Progressive disclosure (one step at a time)
- [ ] Progress indicator
- [ ] Mobile-optimized touch targets (44x44px minimum)
- [ ] Validation with clear error messages
- [ ] Success confirmation with next steps
- [ ] Form submission tracking

---

### Story 4.3: Trust Signal Components

**Context:** Construction buyers need credibility signals to convert.

**Components Needed:**

```tsx
// TrustBadges.tsx - For hero sections
<TrustBadges 
  badges={[
    { icon: 'license', text: 'Licensed: CBC1262722' },
    { icon: 'bond', text: '$10M+ Bonding' },
    { icon: 'experience', text: '35+ Years Experience' },
    { icon: 'projects', text: '150+ Projects Delivered' }
  ]}
/>

// ReviewAggregate.tsx - For displaying overall rating
<ReviewAggregate 
  rating={4.8}
  reviewCount={47}
  platform="Google"
/>

// CertificationDisplay.tsx - For showing credentials
<CertificationDisplay 
  certifications={[
    'Florida Licensed General Contractor',
    'BBB Accredited',
    'Fully Insured'
  ]}
/>
```

---

### Story 4.4: Strategic CTA Placement

**Context:** CTAs needed at 5 key positions per page.

**Placement Requirements:**
1. **Hero Section** - Primary CTA (form), Secondary (call)
2. **After Service Description** - "Get a Quote for [Service]"
3. **After Portfolio/Proof** - "See What We Can Build for You"
4. **After Testimonials** - "Join Our Satisfied Clients"
5. **Bottom of Page** - Full contact section

**CTA Copy Guidelines:**
- Avoid generic "Submit" or "Contact Us"
- Use action-oriented: "Get Your Free Estimate", "Schedule Consultation", "Start Your Project"
- Include urgency where appropriate: "Get Started Today"

---

## Epic 5: Internal Linking Architecture

### Story 5.1: Hub-and-Spoke Linking Model

**Context:** Internal links distribute PageRank and signal topical relationships to Google.

**Linking Rules:**

```
PILLAR PAGES (Hubs)
├── Link TO all related cluster pages
├── Link TO location pages mentioning this service
├── Link TO relevant portfolio items
└── Link TO blog posts about this topic

CLUSTER PAGES (Spokes)
├── Link BACK to parent pillar page (required)
├── Link TO related cluster pages (horizontal)
├── Link TO location pages for this service
└── Link TO 1-2 other pillar pages (cross-topic)

LOCATION PAGES
├── Link TO all service pillar pages
├── Link TO nearby location pages
├── Link TO projects completed in this area
└── Link TO headquarters/main about page

BLOG POSTS
├── Link TO relevant pillar page (required)
├── Link TO 1-2 cluster pages
├── Link TO service pages mentioned
└── Link TO location page if location-specific
```

**Implementation:**
```tsx
// src/components/InternalLinks.tsx
interface RelatedLink {
  href: string;
  title: string;
  description?: string;
}

const RelatedServices = ({ links }: { links: RelatedLink[] }) => (
  <aside className="my-8 p-6 bg-gray-50 rounded-lg">
    <h3 className="text-lg font-semibold mb-4">Related Services</h3>
    <ul className="space-y-2">
      {links.map(link => (
        <li key={link.href}>
          <Link href={link.href} className="text-blue-600 hover:underline">
            {link.title}
          </Link>
          {link.description && (
            <p className="text-sm text-gray-600">{link.description}</p>
          )}
        </li>
      ))}
    </ul>
  </aside>
);
```

---

## Epic 6: Content Production System

### Story 6.1: Service Page Content Template

**Context:** Each service page needs 1,500-2,000 words following a consistent structure.

**Template:**
```markdown
---
title: "[Service Name] in Tampa Bay | Florida Construction Specialists"
description: "[155-160 char meta description with CTA]"
keywords: ["primary keyword", "secondary keyword", "location keyword"]
schema:
  type: "Service"
  provider: "Florida Construction Specialists"
  areaServed: ["Tampa", "Lakeland", ...]
---

# [Service Name] Services in Tampa Bay, Florida

[Hook paragraph - 50-100 words addressing the reader's need]

## What is [Service Name]?
[Definition and context - 150-200 words]

## Our [Service Name] Process
[Step-by-step breakdown - 300-400 words]
1. Initial Consultation & Assessment
2. Planning & Design
3. Permitting & Approvals
4. Construction Phase
5. Final Inspection & Handover

## Types of [Service] Projects We Handle
[Detailed breakdown - 300-400 words]
- Type 1
- Type 2
- Type 3

## Why Choose FCS for [Service Name]
[Value proposition - 200-300 words]
- Experience differentiator
- Quality differentiator
- Service differentiator

## [Service Name] Costs & Investment
[Pricing context - 150-200 words]
- Factors affecting cost
- Range indicators
- Why we provide custom quotes

## Frequently Asked Questions
[10 Q&As - 400-500 words total]
Q1: How long does [service] typically take?
Q2: What permits are required for [service]?
Q3: Do you handle [related service]?
... etc.

## Featured [Service] Projects
[Portfolio callouts with links]

## Get Started with Your [Service] Project
[CTA section]
```

---

### Story 6.2: FAQ Content Development

**Context:** FAQ sections serve dual purpose - user value and featured snippet opportunities.

**FAQ Requirements per Page Type:**

**Service Pages (10 questions each):**
1. How long does [service] take?
2. What does [service] cost?
3. Do I need permits for [service]?
4. What's included in your [service]?
5. Do you offer financing?
6. What areas do you serve?
7. Are you licensed and insured?
8. What's your process?
9. Can you work with my architect/designer?
10. What warranty do you offer?

**Location Pages (10 questions each):**
1. Do you serve [City]?
2. What construction services do you offer in [City]?
3. How far is your office from [City]?
4. Have you completed projects in [City]?
5. What are [City]'s building permit requirements?
6. Do you handle [City] zoning issues?
7. What's unique about building in [City]?
8. Can you recommend architects in [City]?
9. What neighborhoods in [City] do you serve?
10. How do I get started on my [City] project?

---

## Claude Code Execution Strategy

### Custom Slash Commands

Create these in `.claude/commands/`:

**create-service-page.md:**
```markdown
Create a new service page for: $ARGUMENTS

Follow these steps:
1. Read the service page template from docs/templates/service-page-template.md
2. Research the service topic using available context
3. Create the page file in src/pages/services/[category]/
4. Generate 1,500-2,000 words of unique content following the template
5. Create corresponding schema data
6. Add FAQ schema with 10 questions
7. Implement internal links to pillar page and related content
8. Create meta tags following SEO guidelines in CLAUDE.md
9. Run build to verify no errors
10. Report completion with word count and internal link count
```

**create-location-page.md:**
```markdown
Create a location landing page for: $ARGUMENTS

Follow these steps:
1. Read the location page template from docs/templates/location-page-template.md
2. Research [City], FL - neighborhoods, landmarks, building regulations
3. Create the page file in src/pages/locations/[city]/
4. Generate 1,500+ words of locally-relevant content
5. Add LocalBusiness schema variant for this city
6. Include FAQ schema with 10 location-specific questions
7. Link to all service pillar pages
8. Include geo coordinates and service area map
9. Run build to verify no errors
10. Report completion with verification checklist
```

**audit-seo.md:**
```markdown
Audit SEO for page: $ARGUMENTS

Check and report on:
1. Title tag (format, length, keywords)
2. Meta description (length, CTA inclusion)
3. H1 tag (unique, keyword-rich)
4. Schema markup (present, valid)
5. Internal links (count, relevance)
6. Image alt text (all images)
7. Content length (word count)
8. Keyword usage (natural, not stuffed)
9. Mobile responsiveness
10. Core Web Vitals indicators

Output a checklist with pass/fail for each item and recommendations for any failures.
```

---

### Execution Phases

#### Phase 1: Foundation (Week 1-2)
```
Day 1-2: Schema Infrastructure
- Implement all schema components
- Test with Google Rich Results Test

Day 3-4: SEO Component System  
- SEOHead component
- Breadcrumb component
- Internal linking components

Day 5-7: Core Web Vitals
- Image optimization pipeline
- Font loading optimization
- Build performance audit

Day 8-10: Conversion Components
- StickyPhoneCTA
- ContactForm / QuoteRequestForm
- TrustBadges

Day 11-14: Testing & QA
- Lighthouse audits all pages
- Schema validation
- Mobile responsiveness testing
```

#### Phase 2: Content Architecture (Week 3-6)
```
Week 3: Pillar Pages
- Commercial Construction pillar (2,500+ words)
- Residential Construction pillar (2,500+ words)

Week 4: Pillar Pages + Initial Clusters
- Disaster Recovery pillar (2,500+ words)
- Historic Restoration pillar (2,500+ words)
- 4 commercial cluster pages

Week 5: Cluster Content
- 4 residential cluster pages
- 4 disaster recovery cluster pages
- Internal linking implementation

Week 6: Location Pages
- Tampa landing page
- Lakeland landing page
- 4 additional location pages
- Cross-linking audit
```

#### Phase 3: Content Expansion (Week 7-10)
```
Week 7-8: Remaining Cluster Pages
- All remaining cluster content
- Portfolio case studies (10 detailed)
- Blog foundation (5 cornerstone posts)

Week 9-10: Optimization
- Content gap analysis
- Thin content expansion
- Internal linking audit & fixes
- Conversion testing setup
```

#### Phase 4: Launch Prep (Week 11-12)
```
Week 11: Technical QA
- Full Lighthouse audit suite
- Schema validation all pages
- Broken link check
- 404 page optimization
- Sitemap generation
- Robots.txt optimization

Week 12: Pre-Launch
- Analytics setup (GA4)
- Search Console verification
- GBP linking
- Redirect mapping (old site)
- Final content review
```

---

## Quality Benchmarks

### Per-Page Checklist

Before any page is considered complete:

- [ ] Word count meets minimum (1,500+ service pages, 2,500+ pillars)
- [ ] Title tag follows pattern, 50-60 characters
- [ ] Meta description 155-160 characters with CTA
- [ ] Single H1 with primary keyword
- [ ] Proper heading hierarchy (H2, H3, etc.)
- [ ] All images have descriptive alt text
- [ ] LocalBusiness schema present
- [ ] Service schema present (service pages)
- [ ] FAQ schema with 10+ questions (where applicable)
- [ ] Breadcrumb schema
- [ ] Minimum 5 internal links
- [ ] Link to parent pillar page (cluster pages)
- [ ] Link to 2+ related pages
- [ ] 2+ CTAs per page
- [ ] Phone number click-to-call
- [ ] Mobile-responsive verification
- [ ] Lighthouse performance >90
- [ ] Build passes without errors

### Site-Wide Benchmarks

| Metric | Target |
|--------|--------|
| Total Pages | 60+ |
| Total Word Count | 100,000+ |
| Average Page Word Count | 1,700+ |
| Pillar Pages | 4 |
| Cluster Pages | 25+ |
| Location Pages | 8+ |
| Blog Posts | 10+ |
| Schema Coverage | 100% |
| Internal Links per Page | 5+ average |
| Lighthouse Performance | >90 all pages |
| Mobile Usability | 100% compliant |

---

## Competitive Differentiation Strategy

### Content Differentiators

To stand out from competitors, FCS content should emphasize:

1. **Dual Expertise**: Commercial + Residential under one roof (rare in market)
2. **Bonding Capacity**: $10M+ enables projects competitors can't touch
3. **35+ Years Local**: Deep Tampa Bay market knowledge
4. **Specialty Niches**: Historic restoration, SB4-D compliance, disaster recovery
5. **Prime Contractor Only**: Never sub - full accountability

### Voice & Tone Guidelines

```
DO:
- Confident but not arrogant
- Technical expertise accessible to non-experts
- Specific (numbers, timelines, processes)
- Local knowledge (mention Tampa Bay specifics)
- Solution-oriented (focus on client outcomes)

DON'T:
- Generic marketing speak
- Overpromise on timelines or costs
- Jargon without explanation
- Disparage competitors directly
- Use stock content that could apply anywhere
```

---

## Success Metrics & Tracking

### 6-Month Targets

| Metric | Baseline | Target |
|--------|----------|--------|
| Organic Sessions | <100 | 300-500 |
| Ranked Keywords (Top 10) | <10 | 20-30 |
| GBP Views | ~75 | 200-300 |
| Organic Phone Calls | 0-2 | 10-15 |
| Form Submissions | 0-2 | 8-12 |
| Domain Authority | ~15 | 25-30 |

### 12-Month Targets

| Metric | Target |
|--------|--------|
| Organic Sessions | 800+ |
| Ranked Keywords (Top 10) | 40-60 |
| GBP Views | 500+ |
| Organic Phone Calls | 25+ |
| Form Submissions | 20+ |
| Domain Authority | 35-40 |

### Tracking Implementation

```typescript
// Analytics events to implement
const trackingEvents = {
  phone_click: { category: 'conversion', label: 'phone_click' },
  form_start: { category: 'conversion', label: 'form_start' },
  form_complete: { category: 'conversion', label: 'form_complete' },
  cta_click: { category: 'engagement', label: 'cta_click' },
  service_page_view: { category: 'content', label: 'service_view' },
  location_page_view: { category: 'content', label: 'location_view' },
  portfolio_view: { category: 'content', label: 'portfolio_view' },
};
```

---

## Appendix: Content Inventory

### Required Pages (60+ total)

**Home & Core (5 pages)**
- Homepage
- About Us
- Contact
- Portfolio Overview
- FAQ/Resources Hub

**Commercial Pillar + Clusters (8 pages)**
- Commercial Construction (pillar)
- Design-Build Construction
- Medical & Healthcare Facilities
- Multi-Family Developments
- Industrial & Warehouse
- Tenant Improvements
- Commercial Additions
- Retail Construction

**Residential Pillar + Clusters (7 pages)**
- Luxury Custom Homes (pillar)
- Waterfront Homes
- Hurricane-Resistant Construction
- Home Additions
- Kitchen Remodeling
- Balcony Reconstruction
- Exterior Waterproofing

**Disaster Recovery Pillar + Clusters (5 pages)**
- Disaster Recovery (pillar)
- Hurricane Damage Restoration
- Water Damage Restoration
- Fire Damage Restoration
- Insurance Claims Process

**Historic Restoration Pillar + Clusters (4 pages)**
- Historic Restoration (pillar)
- SHPO Compliance
- Historic Material Sourcing
- Historic Tax Credits

**Location Pages (8 pages)**
- Tampa
- Lakeland
- Brandon
- Plant City
- Clearwater
- St. Petersburg
- Sarasota
- Bradenton

**Portfolio/Case Studies (10 pages)**
- 5 Commercial projects
- 3 Residential projects
- 2 Restoration projects

**Blog Posts (10+ pages)**
- 2 commercial construction topics
- 2 residential construction topics
- 2 local market insights
- 2 disaster prep/recovery topics
- 2 process/educational content

**Legal/Utility (5 pages)**
- Privacy Policy
- Terms of Service
- Sitemap (HTML)
- 404 Page
- Thank You/Confirmation

---

## Closing Notes

This implementation plan positions FCS to:

1. **Achieve topical authority** through comprehensive content clusters
2. **Dominate local search** with optimized location pages and schema
3. **Convert visitors** through strategic CTA placement and trust signals
4. **Scale content** with repeatable templates and Claude Code automation

The estimated value of this implementation, if executed by a top agency like Hook Agency, would be **$75,000-$125,000** based on:
- 60+ pages of custom content @ $500-800/page = $30,000-48,000
- Technical SEO implementation = $15,000-25,000
- Schema and structured data = $5,000-10,000
- Conversion optimization = $10,000-15,000
- Strategy and architecture = $15,000-25,000

Execute with Claude Code using the BMAD-aligned story structure, custom slash commands, and quality checkpoints defined above.
