# FCS Implementation Task Breakdown

## Phase 1: Technical Foundation (Days 1-3)

### 1.1 Create Core Components

#### FAQ Component with Schema Markup
- [ ] Create `components/FAQ.tsx` with:
  - Accordion UI (expand/collapse)
  - Automatic FAQ Schema JSON-LD injection
  - Styling consistent with site theme
  - Support for 5-10 FAQs per page

```tsx
// Example usage:
<FAQ items={[
  { question: "What size projects does FCS handle?", answer: "..." },
  { question: "Do you work as a subcontractor?", answer: "No, FCS is always the prime contractor..." },
]} />
```

#### Schema Components
- [ ] Create `components/LocalBusinessSchema.tsx`
- [ ] Create `components/ServiceSchema.tsx`
- [ ] Create `components/BreadcrumbSchema.tsx`
- [ ] Create `lib/schema-templates.ts` with generators

#### Internal Linking Component
- [ ] Create `components/RelatedServices.tsx`
- [ ] Create `components/NearbyLocations.tsx`
- [ ] Create `components/RelatedArticles.tsx`

### 1.2 Update lib/constants.ts

Add premium positioning data:
```typescript
export const BUSINESS_INFO = {
  // ... existing
  projectValueRange: "$500K - $50M+",
  bondingCapacity: "$10M+",
  yearsInBusiness: "20+",
  projectsCompleted: "150+",
  totalProjectValue: "$50M+",
};

export const FAQ_DATABASE = {
  commercial: [...],
  multiFamily: [...],
  historic: [...],
  disaster: [...],
  balcony: [...],
  waterproofing: [...],
  general: [...],
};
```

---

## Phase 2: Duplicate Consolidation (Days 4-5)

### 2.1 Pages to KEEP (Authoritative)

**Core Service Pages:**
- `/commercial-construction/` - KEEP, rewrite
- `/residential-lifetime-custom-homes/` - KEEP, rewrite
- `/disaster-recovery/` - KEEP, rewrite
- `/historic-restoration-preservation/` - KEEP, rewrite
- `/balcony-reconstruction/` - KEEP, rewrite
- `/exterior-waterproofing/` - KEEP, rewrite

**Other Services:**
- `/building-consultants/` - KEEP
- `/certified-estimates/` - KEEP
- `/insurance-arbitration-appraisal/` - KEEP, rename to `/insurance-restoration/`
- `/expert-witness/` - KEEP

**Core Pages:**
- `/about/` - KEEP, enhance
- `/contact/` - KEEP, redesign form
- `/services/` - KEEP
- `/locations/` - KEEP
- `/gallery/` - KEEP, convert to `/portfolio/`

### 2.2 Pages to CONSOLIDATE (301 Redirect)

**Commercial Construction Duplicates → /commercial-construction/**
```
/a-comprehensive-look-at-commercial-construction-stages-in-florida/
/a-zero-accident-workplace-in-tampas-commercial-construction/
/affordable-commercial-construction-in-tampa/
/answering-financial-questions-florida-construction-specialists-perspective-on-commercial-construction-in-tampa/
/avoid-commercial-construction-delays-in-florida/
/best-commercial-builders-in-tampa/
/best-time-to-renovate-your-commercial-space-in-florida/
/commercial-building-design-services-in-tampa/
/commercial-buildings-facade-renovations/
/commercial-construction-budgeting-tips-for-florida-specialists/
/commercial-construction-consultancy-in-tampa/
/commercial-construction-delays/
/commercial-construction-ideas-for-mall-revamp/
/commercial-construction-insurance-coverage/
/commercial-construction-loans-in-tampa/
/commercial-construction-project-dont-hire-unlicensed-contractors/
/commercial-construction-project-on-schedule/
/commercial-construction-questions-answered/
/commercial-construction-regulations-in-tampa/
/commercial-construction-stages-in-florida/
/commercial-construction-technology-in-tampa/
/commercial-construction-vs-remodeling-and-renovation-in-florida/
/commercial-construction-wants-vs-needs-in-tampa/
/commercial-interior-design-in-tampa/
/commercial-renovation-secrets-from-floridas-top-contractors/
/commercial-residential-construction-in-florida/
/commercial-roofing-services-in-tampa/
/common-construction-mistakes-to-avoid-for-commercial-project/
/construction-project-management-and-scheduling/
/construction-quotes-for-commercial-project/
/custom-commercial-construction-solutions-in-tampa/
/efficient-commercial-construction-timelines-in-tampa/
/efficient-commercial-construction-timelines-in-tampa-by-florida-construction-specialists/
```

**"Choosing Contractor" Duplicates → /why-choose-fcs/ (NEW PAGE)**
```
/choosing-a-builder-expert-commercial-construction-in-tampa/
/choosing-a-builder-expert-commercial-construction-in-tampa-by-florida-construction-specialists/
/choosing-materials-for-commercial-construction-in-tampa/
/choosing-perfect-location-for-your-florida-commercial-construction/
/choosing-the-perfect-location-for-commercial-construction/
/choosing-the-right-waterproofing-solution-your-ultimate-guide/
/florida-construction-specialists-choosing-materials-for-commercial-construction-in-tampa/
/florida-construction-specialists-the-key-benefits-of-choosing-a-local-general-contractor-in-tampa-for-commercial-construction/
/key-factors-for-choosing-the-top-commercial-contractor-in-tampa/
/key-factors-for-choosing-the-top-commercial-contractor-in-tampa-florida-construction-specialists/
/tips-for-choosing-a-commercial-contractor-in-tampa/
```

**Blueprint/Planning Duplicates → /our-process/ (NEW PAGE)**
```
/building-the-perfect-construction-blueprint/
/building-the-perfect-construction-blueprint-insights-from-florida-construction-specialists/
/crafting-the-ideal-commercial-blueprint-in-tampa-florida/
/building-plans-for-businesses-florida-construction-specialists/
```

**Design-Build Duplicates → /design-build-construction/ (NEW PAGE)**
```
/benefits-of-design-build-construction-for-commercial-project/
/benifits-of-design-build-construction-for-commercial-projects/ (typo)
/experienced-design-build-firm-in-florida/
/streamlining-your-design-build-project-timeline/
```

**Hurricane/Disaster Duplicates → /disaster-recovery/**
```
/building-hurricane-safe-structures-florida/
/building-hurricane-safe-structures-florida-construction-specialists-at-the-forefront-of-commercial-construction-in-tampa/
/hurricane-damage-repair-services-in-tampa/
/hurricane-proof-reconstruction-services-in-tampa/
/roof-repair-services-in-tampa-after-storms/
/storm-damage-restoration-and-insurance-in-tampa/
/tampa-emergency-board-up-services-post-hurricane/
/tampa-hurricane-damage-repair-services/
/tampa-insurance-restoration-for-hurricane-damage/
/tampa-residential-restoration-after-hurricane-damage/
/tampa-residential-restoration-after-hurricanes/
```

**Historic Restoration Duplicates → /historic-restoration-preservation/**
```
/adaptive-reuse-of-historic-buildings-in-tampa/
/architectural-styles-in-tampas-historic-restoration/
/challenges-in-historic-restoration-projects-in-tampa/
/color-palettes-for-historic-buildings-in-tampa/
/cost-of-historic-restoration-in-tampa/
/exploring-tampas-rich-architectural-heritage/
/facade-preservation-in-tampa/
/historic-building-restorations-in-tampa/
/historic-restoration-challenges-in-florida/
/historic-restoration-challenges-in-tampa/
/historic-restoration-success-stories-in-tampa/
/historic-restoration-techniques-in-tampa/
/importance-of-historic-preservation-in-tampas-urban-landscape/
/navigating-tampa-historic-preservation-guidelines/
/preserving-tampas-historical-gems/
/restoring-historic-interiors-in-tampa/
/secrets-to-successfully-restoring-historic-buildings-in-tampa/
/seismic-retrofitting-for-historic-buildings-in-tampa/
/tampa-historic-restoration-projects-unique-challenges-and-solutions/
/tampas-historic-business-districts-restored/
/tampas-most-notable-historic-building-restorations/
/the-art-of-adaptive-reuse-in-historic-restoration/
/the-art-of-historic-building-restoration-in-tampa/
/traditional-techniques-in-historic-restoration-in-tampa/
/unlocking-tampas-hidden-treasures-historic-restoration/
```

**Balcony Duplicates → /balcony-reconstruction/**
```
/bacony-restoration-and-exterior-waterproofing/ (typo)
/balcony-railing-designs/
/balcony-reconstruction-exterior-waterproofing/
/balcony-restoration-and-exterior-waterproofing-for-longevity/
/balcony-restoration-services/
/balcony-safety-measures/
/balcony-waterproofing-for-long-lasting-protection/
/balcony-waterproofing-techniques-for-ultimate-protection/
```

### 2.3 Create netlify.toml Redirects

```toml
# 301 Redirects for consolidated pages

# Commercial Construction Consolidations
[[redirects]]
  from = "/a-comprehensive-look-at-commercial-construction-stages-in-florida/"
  to = "/commercial-construction/"
  status = 301

[[redirects]]
  from = "/a-zero-accident-workplace-in-tampas-commercial-construction/"
  to = "/commercial-construction/"
  status = 301

# ... continue for all consolidated pages
```

---

## Phase 3: New Page Creation (Days 6-15)

### 3.1 Service Hub Pages (Rewrite with Premium Positioning)

Each page needs:
- [ ] Premium H1 with project value range
- [ ] Hero with actual project image
- [ ] 3 featured projects with values
- [ ] Our Process section
- [ ] Why Choose FCS section
- [ ] FAQ section (5-7 questions) with Schema
- [ ] Service area section
- [ ] Internal links
- [ ] LocalBusiness Schema
- [ ] Service Schema

**Pages to rewrite:**
1. [ ] `/commercial-construction/` - "Large-Scale Commercial Construction | $500K - $50M+ Projects"
2. [ ] `/residential-lifetime-custom-homes/` - "Luxury Custom Homes | $1M+ Residential Construction"
3. [ ] `/disaster-recovery/` - "Large Loss Property Restoration | Prime Contractor"
4. [ ] `/historic-restoration-preservation/` - "Historic Restoration & Preservation | Certified Specialists"
5. [ ] `/balcony-reconstruction/` - "Commercial Balcony Reconstruction | Multi-Family & Condo"
6. [ ] `/exterior-waterproofing/` - "Building Envelope & Waterproofing | Commercial & Residential"

### 3.2 New Service Hub Pages to Create

1. [ ] `/multi-family-construction/` - "Multi-Family Construction | Condos & Apartment Complexes"
2. [ ] `/insurance-restoration/` - "Insurance Restoration | Large Loss Claims Contractor"
3. [ ] `/design-build-construction/` - "Design-Build Construction | Single-Source Delivery"
4. [ ] `/tenant-improvements/` - "Tenant Improvements & Build-Outs | Commercial Spaces"

### 3.3 City Overview Pages (Rewrite)

Each city page needs:
- [ ] Premium H1 with city name
- [ ] Brief FCS presence overview
- [ ] Services available cards (link to service×location)
- [ ] 2-3 featured projects in that city
- [ ] Why [City] businesses choose FCS
- [ ] Contact section with city pre-selected
- [ ] FAQ section (5 city-specific questions)
- [ ] LocalBusiness Schema with city service area

**Pages:**
1. [ ] `/locations/tampa-fl/` - REWRITE completely (remove tourist content)
2. [ ] `/locations/st-petersburg-fl/` - Already exists, enhance
3. [ ] `/locations/clearwater-fl/` - Already exists, enhance
4. [ ] `/locations/lakeland-fl/` - Already exists, enhance
5. [ ] `/locations/sarasota-fl/` - Already exists, enhance
6. [ ] `/locations/bradenton-fl/` - Already exists, enhance
7. [ ] `/locations/brandon-fl/` - Already exists, enhance
8. [ ] `/locations/ruskin-fl/` - Already exists, enhance

### 3.4 Service × Location Pages (48 NEW PAGES)

**Template structure:**
- H1: "[Service] in [City], FL"
- Meta: Optimized title and description
- Hero with service image
- City-specific service overview
- Types of [service] projects in [city]
- 2 featured projects in [city]
- Our process (condensed)
- FAQ section (5 questions) - city-specific
- Related services in [city]
- Same service in nearby cities
- LocalBusiness Schema
- Service Schema
- FAQ Schema

**Pages to create (6 services × 8 cities = 48):**

**Commercial Construction:**
- [ ] `/commercial-construction-tampa/`
- [ ] `/commercial-construction-st-petersburg/`
- [ ] `/commercial-construction-clearwater/`
- [ ] `/commercial-construction-lakeland/`
- [ ] `/commercial-construction-sarasota/`
- [ ] `/commercial-construction-bradenton/`
- [ ] `/commercial-construction-brandon/`
- [ ] `/commercial-construction-ruskin/`

**Multi-Family Construction:**
- [ ] `/multi-family-construction-tampa/`
- [ ] `/multi-family-construction-st-petersburg/`
- [ ] `/multi-family-construction-clearwater/`
- [ ] `/multi-family-construction-lakeland/`
- [ ] `/multi-family-construction-sarasota/`
- [ ] `/multi-family-construction-bradenton/`
- [ ] `/multi-family-construction-brandon/`
- [ ] `/multi-family-construction-ruskin/`

**Disaster Recovery:**
- [ ] `/disaster-recovery-tampa/`
- [ ] `/disaster-recovery-st-petersburg/`
- [ ] `/disaster-recovery-clearwater/`
- [ ] `/disaster-recovery-lakeland/`
- [ ] `/disaster-recovery-sarasota/`
- [ ] `/disaster-recovery-bradenton/`
- [ ] `/disaster-recovery-brandon/`
- [ ] `/disaster-recovery-ruskin/`

**Historic Restoration:**
- [ ] `/historic-restoration-tampa/`
- [ ] `/historic-restoration-st-petersburg/`
- [ ] `/historic-restoration-clearwater/`
- [ ] `/historic-restoration-lakeland/`
- [ ] `/historic-restoration-sarasota/`
- [ ] `/historic-restoration-bradenton/`
- [ ] `/historic-restoration-brandon/`
- [ ] `/historic-restoration-ruskin/`

**Balcony Reconstruction:**
- [ ] `/balcony-reconstruction-tampa/`
- [ ] `/balcony-reconstruction-st-petersburg/`
- [ ] `/balcony-reconstruction-clearwater/`
- [ ] `/balcony-reconstruction-lakeland/`
- [ ] `/balcony-reconstruction-sarasota/`
- [ ] `/balcony-reconstruction-bradenton/`
- [ ] `/balcony-reconstruction-brandon/`
- [ ] `/balcony-reconstruction-ruskin/`

**Exterior Waterproofing:**
- [ ] `/exterior-waterproofing-tampa/`
- [ ] `/exterior-waterproofing-st-petersburg/`
- [ ] `/exterior-waterproofing-clearwater/`
- [ ] `/exterior-waterproofing-lakeland/`
- [ ] `/exterior-waterproofing-sarasota/`
- [ ] `/exterior-waterproofing-bradenton/`
- [ ] `/exterior-waterproofing-brandon/`
- [ ] `/exterior-waterproofing-ruskin/`

---

## Phase 4: FAQ Database (Days 6-8)

### 4.1 FAQ Requirements

**EVERY page must have:**
- Minimum 5 FAQs
- Maximum 10 FAQs
- FAQ Schema markup
- Accordion UI component

### 4.2 FAQ Categories

**Commercial Construction FAQs:**
1. What size commercial projects does FCS handle?
2. Do you work as a subcontractor or prime contractor?
3. What is your bonding capacity?
4. How long does a typical commercial project take?
5. Do you provide design-build services?
6. What types of commercial buildings do you construct?
7. Do you handle permits and inspections?

**Multi-Family Construction FAQs:**
1. What types of multi-family projects do you build?
2. Do you handle condo and apartment construction?
3. What is the typical project value for multi-family?
4. How do you handle common area construction?
5. Do you offer balcony and exterior waterproofing?

**Disaster Recovery FAQs:**
1. Do you work with insurance companies?
2. What is large loss property restoration?
3. How quickly can you respond to commercial disasters?
4. Do you handle the insurance claim process?
5. What types of disasters do you restore from?
6. Are you a prime contractor for insurance restoration?

**Historic Restoration FAQs:**
1. Are you certified for historic restoration?
2. Do you work with the Florida Division of Historical Resources?
3. What makes historic restoration different from renovation?
4. How do you preserve original materials?
5. Can you add modern amenities to historic buildings?

**Balcony Reconstruction FAQs:**
1. Do you specialize in condo balcony repair?
2. What causes balcony structural damage?
3. How do you waterproof balconies?
4. Do you handle HOA and condo association work?
5. What is the typical timeline for balcony reconstruction?

**Waterproofing FAQs:**
1. What is building envelope waterproofing?
2. Do you waterproof commercial buildings?
3. What areas need waterproofing in Florida?
4. How long does commercial waterproofing last?
5. Do you warranty your waterproofing work?

**Location-Specific FAQs (template):**
1. Do you serve [City], FL?
2. How many projects have you completed in [City]?
3. Do you have an office in [City]?
4. What types of projects do you do in [City]?
5. How far from [City] do you provide services?

### 4.3 FAQ Component Implementation

```tsx
// components/FAQ.tsx
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
}

export function FAQ({ items, title = "Frequently Asked Questions" }: FAQProps) {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
          {title}
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {items.map((item, index) => (
            <FAQAccordion key={index} item={item} />
          ))}
        </div>
      </div>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": items.map(item => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
              }
            }))
          })
        }}
      />
    </section>
  );
}
```

---

## Phase 5: Schema Implementation (Days 8-10)

### 5.1 Create Schema Components

**LocalBusinessSchema.tsx:**
```tsx
export function LocalBusinessSchema({ city }: { city?: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "name": "Florida Construction Specialists",
    "image": "https://floridaconstructionspecialists.com/logo.jpg",
    "telephone": "(813) 420-4561",
    "email": "info@floridaconstructionspecialists.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ruskin",
      "addressRegion": "FL",
      "postalCode": "33579",
      "addressCountry": "US"
    },
    "areaServed": city ? {
      "@type": "City",
      "name": city
    } : [
      {"@type": "City", "name": "Tampa"},
      {"@type": "City", "name": "St. Petersburg"},
      // ... all cities
    ],
    "priceRange": "$500,000 - $50,000,000+",
    "openingHours": "Mo-Fr 08:00-16:00"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
```

### 5.2 Add Schema to Every Page

Every page.tsx must include:
```tsx
import { LocalBusinessSchema } from '@/components/LocalBusinessSchema';
import { FAQ } from '@/components/FAQ';

// ... page content

<LocalBusinessSchema city="Tampa" />
<FAQ items={faqs} />
```

---

## Phase 6: Contact Form Redesign (Day 11)

### 6.1 Enterprise Contact Form

Replace generic form with:
```tsx
// components/ProjectConsultationForm.tsx
export function ProjectConsultationForm() {
  return (
    <form className="space-y-6">
      <div>
        <label>Project Type *</label>
        <select>
          <option>Commercial Construction</option>
          <option>Multi-Family Residential</option>
          <option>Disaster Recovery / Insurance Restoration</option>
          <option>Historic Restoration</option>
          <option>Luxury Custom Home ($1M+)</option>
          <option>Balcony / Waterproofing</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label>Estimated Project Value *</label>
        <select>
          <option>$250,000 - $500,000</option>
          <option>$500,000 - $1,000,000</option>
          <option>$1,000,000 - $5,000,000</option>
          <option>$5,000,000 - $10,000,000</option>
          <option>$10,000,000+</option>
        </select>
      </div>

      <div>
        <label>Project Location *</label>
        <select>
          <option>Tampa</option>
          <option>St. Petersburg</option>
          <option>Clearwater</option>
          <option>Lakeland</option>
          <option>Sarasota</option>
          <option>Bradenton</option>
          <option>Brandon</option>
          <option>Ruskin</option>
          <option>Other Tampa Bay Area</option>
        </select>
      </div>

      <div>
        <label>Project Timeline</label>
        <select>
          <option>Ready to start immediately</option>
          <option>1-3 months</option>
          <option>3-6 months</option>
          <option>6-12 months</option>
          <option>Planning phase</option>
        </select>
      </div>

      <div>
        <label>Name *</label>
        <input type="text" required />
      </div>

      <div>
        <label>Company (if commercial project)</label>
        <input type="text" />
      </div>

      <div>
        <label>Email *</label>
        <input type="email" required />
      </div>

      <div>
        <label>Phone *</label>
        <input type="tel" required />
      </div>

      <div>
        <label>Brief Project Description</label>
        <textarea rows={4} />
      </div>

      <button type="submit" className="btn-cta w-full">
        Schedule Project Consultation
      </button>
    </form>
  );
}
```

---

## Phase 7: Testing & Launch (Days 12-15)

### 7.1 Pre-Launch Checklist

**Every page must have:**
- [ ] Unique H1
- [ ] Unique meta title (under 60 chars)
- [ ] Unique meta description (under 160 chars)
- [ ] LocalBusiness Schema
- [ ] FAQ section (5+ questions)
- [ ] FAQ Schema
- [ ] Internal links (5+)
- [ ] CTA for consultation
- [ ] Phone number clickable
- [ ] Images with alt text
- [ ] Mobile responsive
- [ ] Page speed < 3s

### 7.2 Build & Deploy

```bash
# Build
npm run build

# Verify page count
find out -name "*.html" | wc -l

# Test locally
npx serve out

# Deploy to Netlify
# Base: sites/fcs-final
# Publish: out
# Build: npm run build
```

### 7.3 Post-Launch

- [ ] Submit sitemap to Google Search Console
- [ ] Run Google Indexing API for priority pages
- [ ] Monitor rankings in target cities
- [ ] Check for crawl errors
- [ ] Verify schema with Rich Results Test

---

## Summary: Total New Work

| Category | Count |
|----------|-------|
| New components to create | 8 |
| Service pages to rewrite | 6 |
| New service hub pages | 4 |
| City pages to rewrite | 8 |
| New service×location pages | 48 |
| Pages to consolidate via 301 | ~150 |
| FAQs to write | ~300 (5-7 per page) |
| **Total new/rewritten pages** | **66** |
| **Total pages after consolidation** | **~180-200** |

This transforms 459 low-quality pages into ~180-200 high-quality, SEO-optimized pages with proper schema markup, FAQs, and premium positioning.
