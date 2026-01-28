# Create Service Page (Cluster)

Create a service cluster page (1,500-2,000 words) that links back to its parent pillar.

## Required Arguments
- `pillar`: Parent pillar (commercial, residential, disaster-recovery, historic-restoration)
- `service`: Service cluster slug (e.g., design-build, medical-construction, waterfront-homes)

## Page Requirements

### SEO Requirements
- **Title Tag**: `[Service Name] in Tampa Bay | Florida Construction Specialists` (50-60 chars)
- **Meta Description**: Service-specific value prop + CTA + Phone (155-160 chars)
- **H1**: Single H1 with service keyword
- **Canonical**: Self-referencing to `/services/[pillar]/[service]/`

### Content Structure (1,500-2,000 words)

1. **Hero Section** (150 words)
   - Service-specific headline
   - Brief value proposition
   - Trust badges (License, Bonding, Years)
   - Primary CTA

2. **Service Description** (400 words)
   - What this specific service entails
   - Who it's for (target client)
   - Project size range
   - Link BACK to parent pillar page (REQUIRED)

3. **Types/Categories** (300 words)
   - 4-6 sub-types of this service
   - Brief description of each
   - Bullet points with details

4. **Our Approach** (300 words)
   - How FCS handles this service type
   - What makes our approach different
   - Process highlights

5. **Why FCS for [Service]** (200 words)
   - Specific qualifications for this service
   - Relevant certifications
   - Portfolio examples

6. **FAQ Section** (300+ words, 10 questions)
   - Service-specific questions
   - FAQSchema markup required

7. **Related Services** (100 words)
   - Links to 2-3 sibling cluster pages
   - Link to parent pillar (REQUIRED)

8. **CTA Section**
   - Service-specific call to action
   - HighLevel form
   - Click-to-call

### Schema Requirements
```tsx
<LocalBusinessSchema service="[Service Name]" />
<ServiceSchema
  serviceName="[Service Name]"
  serviceDescription="[Description]"
  minPrice="[Min Value]"
/>
<FAQSchema faqs={faqItems} />
<BreadcrumbSchema items={[
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "[Pillar Name]", href: "/services/[pillar]/" },
  { name: "[Service Name]", href: "/services/[pillar]/[service]/" }
]} />
```

### Internal Linking Requirements (CRITICAL)
- **MUST** link back to parent pillar page (e.g., `/services/commercial/`)
- Link to 2-3 sibling cluster pages (horizontal linking)
- Link to 2 location pages for this service
- Link to 1 other pillar page (cross-topic)
- Minimum 5 internal links total

### CTA Placement (5 per page)
1. Hero section
2. After service description
3. After types/categories
4. After FAQ
5. Bottom of page

### File Location
Save to: `app/services/[pillar]/[service]/page.tsx`

### Example Cluster Pages by Pillar

**Commercial Pillar Clusters:**
- `/services/commercial/design-build/`
- `/services/commercial/medical-construction/`
- `/services/commercial/multi-family/`
- `/services/commercial/industrial-construction/`
- `/services/commercial/tenant-improvements/`
- `/services/commercial/commercial-additions/`
- `/services/commercial/retail-construction/`

**Residential Pillar Clusters:**
- `/services/residential/waterfront-homes/`
- `/services/residential/hurricane-resistant-construction/`
- `/services/residential/home-additions/`
- `/services/residential/kitchen-remodeling/`
- `/services/residential/balcony-reconstruction/`
- `/services/residential/exterior-waterproofing/`

**Disaster Recovery Clusters:**
- `/services/disaster-recovery/hurricane-damage/`
- `/services/disaster-recovery/water-damage/`
- `/services/disaster-recovery/fire-damage/`
- `/services/disaster-recovery/insurance-claims-process/`

**Historic Restoration Clusters:**
- `/services/historic-restoration/shpo-compliance/`
- `/services/historic-restoration/material-sourcing/`
- `/services/historic-restoration/historic-tax-credits/`

### Component Imports
```tsx
import { Metadata } from "next";
import { LocalBusinessSchema, ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQ } from "@/components/FAQ";
import { HighLevelForm } from "@/components/HighLevelForm";
import Link from "next/link";
```
