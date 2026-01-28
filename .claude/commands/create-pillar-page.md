# Create Pillar Page

Create a comprehensive pillar page (2,500+ words) for Florida Construction Specialists.

## Required Arguments
- `service`: The main service category (commercial, residential, disaster-recovery, historic-restoration)

## Page Requirements

### SEO Requirements
- **Title Tag**: `[Primary Keyword] in Tampa Bay | Florida Construction Specialists` (50-60 chars)
- **Meta Description**: Value proposition + CTA + Phone number (155-160 chars)
- **H1**: Single H1 with primary keyword (don't duplicate title verbatim)
- **Canonical**: Self-referencing to `/services/[service]/`

### Content Structure (2,500+ words minimum)

1. **Hero Section** (200 words)
   - Gradient background with trust badges
   - Prime contractor positioning, $500K-$50M+ projects
   - 43+ years industry experience, $10M+ bonding, License CBC1262722
   - Primary CTA (form) + Secondary CTA (call)

2. **Service Overview** (400 words)
   - What we do, project types, size range
   - Industries/sectors served
   - Featured project mention with value

3. **Service Categories Section** (500 words)
   - H2 for each cluster service
   - 100-word description per category
   - Link to cluster page: `/services/[pillar]/[cluster]/`
   - Example clusters for Commercial: design-build, medical-construction, multi-family, industrial-construction, tenant-improvements

4. **Our Process Section** (400 words)
   - 5-6 step process with clear headings
   - HowTo schema markup potential

5. **Why Choose FCS Section** (300 words)
   - Prime contractor only (never subcontract)
   - $10M+ bonding capacity
   - 43+ years local experience
   - License CBC1262722
   - Specific project examples from portfolio

6. **Featured Projects** (200 words)
   - 3-4 relevant portfolio items with values
   - Link to portfolio page

7. **FAQ Section** (400+ words, 10 questions minimum)
   - FAQSchema markup required
   - Use questions from FAQ_DATABASE in lib/constants.ts
   - Add location-specific questions

8. **CTA Section**
   - Full contact info
   - HighLevel form embed
   - Click-to-call phone link

### Schema Requirements
```tsx
<LocalBusinessSchema schemaType="GeneralContractor" service="[Service Name]" />
<ServiceSchema
  serviceName="[Service Name]"
  serviceDescription="[Description]"
  minPrice="[Min Value]"
/>
<FAQSchema faqs={faqItems} />
<BreadcrumbSchema items={[
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "[Service Name]", href: "/services/[slug]/" }
]} />
```

### Internal Linking Requirements
- Link to ALL related cluster pages (minimum 5)
- Link to 3-4 location pages mentioning this service
- Link to 2-3 portfolio items
- Link to 1-2 related pillar pages (cross-topic)

### CTA Placement (5 per page)
1. Hero section (form + call)
2. After service overview
3. After process section
4. After featured projects
5. Bottom of page (full contact)

### Premium Positioning Language

**Always Use:**
- "Prime Contractor" (not subcontractor)
- "$500K-$50M+ Projects"
- "Large-Scale Construction"
- "Schedule a Consultation" (not "Get Quote")
- Specific project values

**Never Use:**
- "Emergency repairs"
- "Quick fix"
- "Affordable"
- "Get Free Estimate"
- "Small jobs welcome"

### File Location
Save to: `app/services/[service]/page.tsx`

### Component Imports
```tsx
import { Metadata } from "next";
import { LocalBusinessSchema, ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQ } from "@/components/FAQ";
import { HighLevelForm } from "@/components/HighLevelForm";
import { BUSINESS_INFO, FAQ_DATABASE } from "@/lib/constants";
```
