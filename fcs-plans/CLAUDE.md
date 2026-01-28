# Florida Construction Specialists - Website Build Context

## Project Mission
Build a website that will rank in the Google Map Pack for commercial and residential construction searches throughout central eastern Florida, converting transactional visitors into qualified leads.

## Technical Stack
- **Framework**: React with TypeScript (or Next.js if SSR needed)
- **Styling**: Tailwind CSS (utility-first, no separate CSS files)
- **Deployment**: Netlify
- **Content**: MDX or structured JSON content files
- **Current URL**: https://fcs-site.netlify.app/

## Commands
```bash
npm run dev          # Start development server
npm run build        # Production build
npm run lint         # Run linting
npm run typecheck    # Run TypeScript checks
netlify deploy --prod # Deploy to production
```

## Business Information (USE EXACTLY - NAP Consistency Critical)
```
Name: Florida Construction Specialists
License: CBC1262722
Bonding: $10M+
Phone: (813) 420-7561
Address: 822 Bayview Dr, Ruskin, FL 33579
Email: info@floridaconstructionspecialists.com
Hours: Mon-Fri 8:00 AM - 4:00 PM
Website: https://floridaconstructionspecialists.com
```

## Service Areas
**Primary Cities**: Tampa, Lakeland, Brandon, Plant City, Clearwater, St. Petersburg, Sarasota, Bradenton
**Counties**: Hillsborough, Pinellas, Polk, Manatee

## Service Lines
1. **Commercial Construction** ($500K - $50M+ projects)
   - Design-Build, Medical/Healthcare, Multi-Family, Industrial, Tenant Improvements
2. **Residential Construction** ($1M+ luxury homes)
   - Waterfront Estates, Hurricane-Resistant, Home Additions, Balcony Reconstruction
3. **Historic Restoration**
   - SHPO Compliance, Historic Tax Credits, Material Sourcing
4. **Disaster Recovery**
   - Hurricane/Storm, Water Damage, Fire Damage, Insurance Restoration

## SEO Requirements (IMPORTANT)

### Title Tags
Format: `[Primary Keyword] in [City] | Florida Construction Specialists`
Length: 50-60 characters
Example: `Commercial Construction in Tampa | Florida Construction Specialists`

### Meta Descriptions
Length: 155-160 characters
Must include: Value proposition + CTA + Phone number
Example: `Tampa Bay's premier commercial contractor. $10M+ bonding, 35+ years experience. Get your free estimate today. Call (813) 420-7561.`

### H1 Tags
- One H1 per page (no exceptions)
- Include primary keyword naturally
- Don't duplicate title tag verbatim

### Schema Markup (Required on ALL pages)
1. **LocalBusiness** - Homepage and all pages
2. **Service** - Service pages
3. **FAQ** - Any page with FAQ section
4. **BreadcrumbList** - All pages except homepage
5. **AggregateRating** - When reviews are displayed

### Content Requirements
- **Pillar pages**: 2,500+ words
- **Service pages**: 1,500-2,000 words
- **Location pages**: 1,500+ words
- **Blog posts**: 1,000-1,500 words
- **All pages**: 10+ FAQ questions with schema

### Internal Linking Rules
- Every cluster page MUST link back to its parent pillar
- Minimum 5 internal links per page
- Use descriptive anchor text (not "click here")
- Link to related services and locations

### Image Requirements
- All images MUST have descriptive alt text
- Use WebP format with fallbacks
- Implement lazy loading
- Include location/service keywords naturally in alt text

## Code Style
```typescript
// Use ES modules
import { useState, useEffect } from 'react';

// Functional components with TypeScript
interface ServicePageProps {
  title: string;
  content: string;
  schema: SchemaData;
}

const ServicePage: React.FC<ServicePageProps> = ({ title, content, schema }) => {
  // Component logic
};

// Export pattern
export default ServicePage;
```

## Component Patterns

### SEO Head Component Usage
```tsx
<SEOHead
  title="Commercial Construction in Tampa | Florida Construction Specialists"
  description="Tampa Bay's premier commercial contractor..."
  canonical="/services/commercial/"
  schema={localBusinessSchema}
/>
```

### Schema Pattern
```tsx
<script type="application/ld+json">
  {JSON.stringify(schemaData)}
</script>
```

### CTA Placement (5 per page)
1. Hero section (form + call)
2. After service description
3. After portfolio/proof section
4. After testimonials
5. Bottom of page

### Phone Links (Click-to-Call)
```tsx
<a href="tel:8134207561">(813) 420-7561</a>
```

## Quality Checklist (Run before committing)
- [ ] Title tag 50-60 chars with keyword
- [ ] Meta description 155-160 chars with CTA
- [ ] Single H1 with primary keyword
- [ ] All images have alt text
- [ ] Schema markup present and valid
- [ ] 5+ internal links
- [ ] Phone number is click-to-call
- [ ] Build passes with no errors
- [ ] Lighthouse performance >90

## Content Voice
- **Confident** but not arrogant
- **Technical** but accessible
- **Specific** (use numbers, timelines, processes)
- **Local** (mention Tampa Bay specifics)
- **Solution-oriented** (focus on client outcomes)

## Differentiators (Emphasize in content)
1. Dual expertise: Commercial + Residential under one roof
2. $10M+ bonding capacity (larger projects than competitors)
3. 35+ years local Tampa Bay experience
4. Specialty niches: Historic restoration, SB4-D compliance
5. Prime contractor only - never subcontract, full accountability

## File Structure
```
src/
├── components/
│   ├── seo/           # SEOHead, schemas
│   ├── conversion/    # CTAs, forms, trust badges
│   └── layout/        # Header, footer, nav
├── pages/
│   ├── services/      # Service pillar + clusters
│   ├── locations/     # City landing pages
│   └── resources/     # Blog, guides
├── content/           # MDX or JSON content
└── lib/               # Utilities, schema generators
```

## When Creating New Pages
1. FIRST read the appropriate template in docs/templates/
2. Generate content following the template structure
3. Implement all required schema markup
4. Add internal links to pillar and related pages
5. Include 5 CTAs at strategic positions
6. Run build and verify no errors
7. Check Lighthouse score >90
