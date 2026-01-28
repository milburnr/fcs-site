Create a pillar page for: $ARGUMENTS

## Pillar Page Context

Pillar pages are the MOST IMPORTANT pages for topical authority. They must be:
- 2,500+ words (comprehensive coverage)
- The definitive resource on this topic for Tampa Bay
- Hub for all related cluster content
- Optimized for head terms AND long-tail keywords

## Instructions

### 1. Research & Planning

Before writing, identify:
- Primary keyword (head term): e.g., "commercial construction Tampa"
- Secondary keywords: e.g., "commercial contractor Florida", "commercial building Tampa Bay"
- Long-tail keywords: e.g., "how much does commercial construction cost in Tampa"
- All cluster pages that will link to this pillar
- Competitor content to outperform

### 2. Content Structure (2,500+ words)

```markdown
# [Topic] Services in Tampa Bay, Florida

[Compelling introduction - 150-200 words]
- Hook addressing reader's primary concern
- Establish FCS credibility immediately
- Preview what the page covers
- Include primary keyword in first 100 words

## What is [Topic]? [200-250 words]
[Comprehensive definition for searchers who need education]
- Clear explanation
- Industry context
- Why it matters to property owners

## [Topic] Services We Provide [400-500 words]

### [Service Category 1]
[150 words + link to cluster page]

### [Service Category 2]  
[150 words + link to cluster page]

### [Service Category 3]
[150 words + link to cluster page]

### [Service Category 4]
[150 words + link to cluster page]

[Continue for all cluster topics under this pillar]

## Our [Topic] Process [300-400 words]

### Phase 1: Discovery & Planning
[Detailed explanation]

### Phase 2: Design & Engineering
[Detailed explanation]

### Phase 3: Permitting & Approvals
[Detailed explanation]

### Phase 4: Construction
[Detailed explanation]

### Phase 5: Completion & Handover
[Detailed explanation]

## [Topic] Costs & Investment [200-300 words]
- Factors that affect pricing
- General ranges (without specific numbers that could date)
- Value considerations beyond lowest price
- Why detailed estimates require consultation

## Why Tampa Bay Chooses FCS for [Topic] [300-400 words]

### 35+ Years of [Topic] Experience
[Specific credibility points]

### $10M+ Bonding Capacity
[What this means for clients]

### Licensed & Insured (CBC1262722)
[Compliance and protection]

### Prime Contractor Accountability
[Never subcontract - full responsibility]

### Local Tampa Bay Expertise
[Market knowledge, relationships, permitting experience]

## [Topic] in Tampa Bay: Local Considerations [200-300 words]
- Regional regulations
- Climate considerations (hurricanes, humidity)
- Local permitting nuances
- Market conditions

## Frequently Asked Questions [500-600 words]

[Minimum 10 comprehensive Q&As]

**Q: How long does [topic] typically take?**
A: [Detailed answer with timeline factors]

**Q: What does [topic] cost in Tampa?**
A: [Detailed answer addressing cost factors]

**Q: Do I need permits for [topic]?**
A: [Detailed answer about permitting requirements]

**Q: What's included in your [topic] services?**
A: [Detailed answer about scope]

**Q: Do you offer financing for [topic]?**
A: [Answer about payment options]

**Q: What areas do you serve for [topic]?**
A: [List all service areas]

**Q: Are you licensed and insured?**
A: [Details about credentials]

**Q: What's your warranty on [topic] work?**
A: [Warranty information]

**Q: Can you work with my architect/designer?**
A: [Collaboration approach]

**Q: How do I get started?**
A: [Clear next steps]

## Featured [Topic] Projects [Portfolio Section]
[3-4 project highlights with images and links to full case studies]

## Related Resources
[Links to relevant blog posts, guides, resources]

## Start Your [Topic] Project Today
[Final CTA section with form, phone, and trust signals]
```

### 3. Technical Implementation

Create page at: `src/pages/services/[category]/index.tsx`

Required components:
```tsx
import SEOHead from '@/components/seo/SEOHead';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';
import ServiceSchema from '@/components/seo/ServiceSchema';
import FAQSchema from '@/components/seo/FAQSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import TableOfContents from '@/components/TableOfContents';
import RelatedServices from '@/components/RelatedServices';
```

### 4. Schema Implementation

**Service Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "[Topic]",
  "provider": {
    "@type": "HomeAndConstructionBusiness",
    "name": "Florida Construction Specialists",
    "telephone": "+1-813-420-7561",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "822 Bayview Dr",
      "addressLocality": "Ruskin",
      "addressRegion": "FL",
      "postalCode": "33579"
    }
  },
  "areaServed": [
    {"@type": "City", "name": "Tampa"},
    {"@type": "City", "name": "Lakeland"},
    {"@type": "City", "name": "Brandon"},
    {"@type": "City", "name": "Clearwater"},
    {"@type": "City", "name": "St. Petersburg"},
    {"@type": "City", "name": "Sarasota"},
    {"@type": "City", "name": "Bradenton"}
  ],
  "description": "[Comprehensive service description]",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "[Topic] Services",
    "itemListElement": [
      // List all cluster services
    ]
  }
}
```

**FAQ Schema:** Include all 10+ questions

### 5. Internal Linking Requirements

**Outbound links (FROM this pillar):**
- Every cluster page in this topic (5-8 links)
- Related pillar pages (2-3 links)
- Relevant location pages (3-4 links)
- Portfolio/case study pages (3-4 links)
- Contact page

**Ensure cluster pages link BACK to this pillar**

### 6. Pillar Pages Required

| Pillar | URL | Clusters |
|--------|-----|----------|
| Commercial Construction | /services/commercial/ | design-build, medical, multi-family, industrial, tenant-improvements, retail, commercial-additions |
| Residential Construction | /services/residential/ | waterfront-homes, hurricane-resistant, home-additions, kitchen-remodeling, balcony-reconstruction, exterior-waterproofing |
| Disaster Recovery | /services/disaster-recovery/ | hurricane-damage, water-damage, fire-damage, insurance-claims |
| Historic Restoration | /services/historic-restoration/ | shpo-compliance, historic-materials, historic-tax-credits |

### 7. Quality Checklist

- [ ] Word count: 2,500+ words
- [ ] Title tag optimized (50-60 chars)
- [ ] Meta description with CTA (155-160 chars)
- [ ] Single H1 with primary keyword
- [ ] Table of contents for navigation
- [ ] Links to ALL cluster pages
- [ ] Links to related pillars
- [ ] Links to location pages
- [ ] 10+ FAQ questions with schema
- [ ] Service schema implemented
- [ ] LocalBusiness schema present
- [ ] Breadcrumb schema
- [ ] Portfolio section with real projects
- [ ] 5+ CTAs strategically placed
- [ ] All images have alt text
- [ ] Phone is click-to-call
- [ ] Build passes without errors

### 8. Build & Report

Run: `npm run build`

Report completion with:
- Page URL path
- Word count (must be 2,500+)
- All cluster pages linked (list them)
- All internal links (count and list key ones)
- Schema types implemented
- FAQ questions included (list them)
- Any optimization recommendations
