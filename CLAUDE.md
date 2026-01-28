# Florida Construction Specialists - Website Build Context

## Project Mission
Build a website that will rank in the Google Map Pack for commercial and residential construction searches throughout central eastern Florida, converting transactional visitors into qualified leads for $500K-$50M+ projects.

## Technical Stack
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS (utility-first, all styles in globals.css)
- **UI Components**: Radix UI (accordion, tabs, button)
- **Animations**: Framer Motion
- **Deployment**: Netlify (static export)
- **Current URL**: https://fcs-site.netlify.app/

## Commands
```bash
npm run dev          # Start development server (localhost:3000)
npm run build        # Production build (static export to out/)
npm run lint         # Run linting
npm start            # Preview production build
```

## Business Information (USE EXACTLY - NAP Consistency Critical)
```
Name: Florida Construction Specialists
License: CBC1262722
Bonding: $10M+
Phone: (813) 420-7561
Phone Raw: 8134207561
Address: 822 Bayview Dr, Ruskin, FL 33579
Email: info@floridaconstructionspecialists.com
Hours: Mon-Fri 8:00 AM - 4:00 PM
Website: https://floridaconstructionspecialists.com
Founding Date: 2004
Years in Business: 20+
Projects Completed: 150+
Total Project Value: $50M+
```

## Principal Background (Frank Bragano)
- **43+ years** in property claims and construction
- **Former Allstate Commercial adjuster** (1982-1989)
- **Executive General Adjuster** credentials (CJW-Vericlaim/Sedgwick)
- Part of **Disaster Remediation Group (DRG)** consortium
- Direct phone: (813) 420-7561

## Service Areas
**Primary**: Tampa (home market)
**Central**: Lakeland, Brandon, Plant City
**Coastal**: Clearwater, St. Petersburg, Sarasota, Bradenton
**Headquarters**: Ruskin, FL

## Service Lines

### Commercial Construction ($500K - $50M+ projects)
- Design-Build Construction
- Medical/Healthcare Facilities
- Multi-Family Developments
- Industrial & Warehouse
- Tenant Improvements
- Retail Construction

### Residential Construction ($1M+ luxury homes)
- Waterfront Custom Estates
- Hurricane-Resistant Construction
- Home Additions & Renovations
- Balcony Reconstruction (SB4-D compliance)
- Exterior Waterproofing

### Historic Restoration ($500K+)
- SHPO Compliance & Coordination
- Secretary of Interior Standards
- Historic Tax Credits Navigation
- Period-Accurate Material Sourcing
- Ybor City Historic District expertise

### Disaster Recovery ($250K+ large loss)
- Hurricane/Storm Damage Restoration
- Water Damage & Mold Remediation
- Fire Damage Restoration
- Insurance Claims Management
- Large Loss Commercial Restoration

## Featured Portfolio Projects

### Hurricane Recovery
- **Turner Agri-Center** - Hurricane Charley ($12.5M estimated)
- **Leon County Detention Center** - Water Loss/Hurricane Irene ($1.8M)
- **Tiara Condominium** - Hurricanes Francis & Wilma
- **Historic Sebring Fire Station** - Hurricane Charley ($900K)
- **Hurricane Harvey Texas** - Multiple properties ($40M+ total)
- **Hurricane Irma Miami** - Multiple properties ($20M+ total)

### Historic Restoration
- **Italian American Club, Ybor City** ($1.2M) - Complete restoration
- **Lion's Eye Institute, Ybor City** - National Historic Register
- **Bay Pines Veterans Hospital, St. Petersburg** ($2M) - Federal historic compliance
- **Plant High School, Tampa** ($525K) - Tuckpointing, brick restoration
- **Wotjowicz House, Ybor City** - Ground-up historic district construction
- **Ferraro House, Ybor City** - Ground-up historic district construction

### Industrial/Commercial
- **Coronet Phosphate Mine** - Overhead Railway Collapse
- **Mulberry Phosphates** - Tornado damage
- **Carlton Arms Apartment Complex** - Large Loss Fire
- **Wellington Polo Club** - Fire & Mold
- **Imperial Gardens Apartments** - Large Loss Fire

## SEO Requirements

### Title Tags
- **Format**: `[Primary Keyword] in [City] | Florida Construction Specialists`
- **Length**: 50-60 characters
- **Example**: `Commercial Construction in Tampa | Florida Construction Specialists`

### Meta Descriptions
- **Length**: 155-160 characters
- **Must include**: Value proposition + CTA + Phone number
- **Example**: `Tampa Bay's premier commercial contractor. $10M+ bonding, 20+ years experience. Schedule your project consultation. Call (813) 420-7561.`

### H1 Tags
- ONE H1 per page (no exceptions)
- Include primary keyword naturally
- Don't duplicate title tag verbatim

### Content Requirements
- **Pillar pages**: 2,500+ words
- **Service pages**: 1,500-2,000 words
- **Location pages**: 1,500+ words
- **All pages**: 10+ FAQ questions with schema

### Schema Markup (Required on ALL pages)
1. **LocalBusinessSchema** - Every page
2. **ServiceSchema** - Service pages
3. **FAQSchema** - Any page with FAQ section
4. **BreadcrumbSchema** - All pages except homepage

### Internal Linking Rules
- Every cluster page MUST link back to its parent pillar
- Minimum 5 internal links per page
- Use descriptive anchor text (not "click here")
- Link to related services and locations

## Code Style

### Component Pattern
```typescript
import { Metadata } from "next";
import { LocalBusinessSchema, ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQ } from "@/components/FAQ";
import { HighLevelForm } from "@/components/HighLevelForm";
import { BUSINESS_INFO, FAQ_DATABASE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Commercial Construction in Tampa | Florida Construction Specialists",
  description: "Tampa Bay's premier commercial contractor. $10M+ bonding...",
  keywords: ["commercial construction tampa", "..."],
};

export default function PageName() {
  const faqs = [...]; // from FAQ_DATABASE or custom

  return (
    <>
      <LocalBusinessSchema service="Commercial Construction" />
      <ServiceSchema serviceName="Commercial Construction" serviceDescription="..." />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[...]} />

      {/* Page content */}
    </>
  );
}
```

### Phone Links (Click-to-Call)
```tsx
<a href="tel:8134207561" className="...">(813) 420-7561</a>
```

### CTA Placement (5 per page)
1. Hero section (form + call)
2. After service description
3. After portfolio/proof section
4. After testimonials/FAQ
5. Bottom of page

## Premium Positioning Language

### ALWAYS Use:
- "Prime Contractor" (never subcontractor)
- "$500K-$50M+ Projects"
- "Large-Scale Construction"
- "Schedule a Consultation" (not "Get Quote")
- "Project Consultation" (not "Free Estimate")
- Specific project values in content

### NEVER Use:
- "Emergency repairs"
- "Quick fix"
- "Affordable" / "Cheap"
- "Get Free Estimate"
- "Small jobs welcome"
- Tourist content (Busch Gardens, ZooTampa references)

## Key Differentiators (Emphasize in Content)
1. **Prime Contractor Only** - Never subcontract, full accountability
2. **$10M+ Bonding Capacity** - Larger projects than competitors
3. **43+ Years Experience** - Frank Bragano's industry expertise
4. **Dual Expertise** - Commercial + Residential under one roof
5. **Insurance Industry Background** - Former adjuster brings unique expertise
6. **Historic Restoration Certified** - SHPO compliance, Ybor City expertise
7. **SB4-D Compliance** - Condo balcony inspection/reconstruction

## Content Voice
- **Confident** but not arrogant
- **Technical** but accessible
- **Specific** (use numbers, timelines, processes)
- **Local** (mention Tampa Bay specifics)
- **Solution-oriented** (focus on client outcomes)

## File Structure
```
sites/fcs-final/
├── app/
│   ├── layout.tsx              # Root layout, metadata, schemas
│   ├── page.tsx                # Homepage
│   ├── globals.css             # All component classes
│   ├── services/
│   │   ├── page.tsx            # Services hub
│   │   ├── commercial/         # Commercial pillar + clusters
│   │   ├── residential/        # Residential pillar + clusters
│   │   ├── disaster-recovery/  # Disaster recovery pillar + clusters
│   │   └── historic-restoration/ # Historic restoration pillar + clusters
│   ├── locations/              # City landing pages
│   ├── [service]-[city]/       # Service x Location pages
│   └── resources/              # Blog/articles
├── components/
│   ├── Schema.tsx              # All schema generators
│   ├── ContactForm.tsx         # Lead form
│   ├── HighLevelForm.tsx       # External form embed
│   ├── Header.tsx              # Site header
│   ├── Footer.tsx              # Site footer
│   └── ...
├── lib/
│   ├── constants.ts            # Business info, services, FAQs
│   ├── theme.ts                # Colors, fonts
│   └── ...
└── public/                     # Static assets
```

## Quality Checklist (Run before committing)
- [ ] Title tag 50-60 chars with keyword
- [ ] Meta description 155-160 chars with CTA and phone
- [ ] Single H1 with primary keyword
- [ ] All images have alt text
- [ ] Schema markup present and valid (LocalBusiness, Service, FAQ, Breadcrumb)
- [ ] 5+ internal links including parent pillar
- [ ] Phone number is click-to-call: `href="tel:8134207561"`
- [ ] 5 CTAs strategically placed
- [ ] Premium positioning language (no "free estimate", "emergency", etc.)
- [ ] Build passes with no errors: `npm run build`
- [ ] Content meets word count (pillar: 2,500+, service: 1,500+, location: 1,500+)

## Slash Commands Available
- `/create-pillar-page` - Create 2,500+ word comprehensive hub page
- `/create-service-page` - Create 1,500-2,000 word cluster page
- `/create-location-page` - Create 1,500+ word city landing page
- `/audit-seo` - Run SEO quality validation checklist
