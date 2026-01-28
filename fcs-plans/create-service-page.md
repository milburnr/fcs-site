Create a new service page for: $ARGUMENTS

## Instructions

Follow these steps carefully:

### 1. Research Phase
- Read the CLAUDE.md file for project context and requirements
- Understand the service topic thoroughly
- Identify the parent pillar page this clusters under
- Determine target keywords: "[service] Tampa", "[service] Florida", "[service] near me"

### 2. Content Creation
Generate 1,500-2,000 words following this structure:

```markdown
# [Service Name] Services in Tampa Bay, Florida

[Opening hook - 50-100 words addressing reader's pain point or need]

## What is [Service Name]?
[Definition and context - 150-200 words explaining the service]

## Our [Service Name] Process
[Step-by-step breakdown - 300-400 words]
1. Initial Consultation & Assessment
2. Planning & Design  
3. Permitting & Approvals
4. Construction Phase
5. Final Inspection & Handover

## Types of [Service] Projects We Handle
[Detailed breakdown - 300-400 words with specific examples]

## Why Choose FCS for [Service Name]
[Value proposition - 200-300 words highlighting differentiators]
- 35+ years experience
- $10M+ bonding capacity
- Licensed CBC1262722
- Prime contractor - full accountability

## [Service Name] Costs & Investment
[Pricing context - 150-200 words]
- Factors affecting cost
- Why custom quotes are necessary
- Value vs. lowest price

## Frequently Asked Questions
[10 Q&As - 400-500 words total]
Include questions about: timeline, cost, permits, process, warranty, service area

## Featured [Service] Projects
[Portfolio section with links to relevant case studies]

## Get Started with Your [Service] Project
[CTA section with form embed and phone number]
```

### 3. Technical Implementation

Create the page file at: `src/pages/services/[category]/[service-slug].tsx`

Include required components:
```tsx
import SEOHead from '@/components/seo/SEOHead';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';
import ServiceSchema from '@/components/seo/ServiceSchema';
import FAQSchema from '@/components/seo/FAQSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
```

### 4. Schema Implementation

Add Service schema:
```json
{
  "@type": "Service",
  "serviceType": "[Service Name]",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Florida Construction Specialists"
  },
  "areaServed": ["Tampa", "Lakeland", "Brandon", "Clearwater", "St. Petersburg", "Sarasota", "Bradenton"],
  "description": "[Service description]"
}
```

Add FAQ schema for all 10 questions.

### 5. Internal Linking Requirements

MUST include links to:
- Parent pillar page (e.g., /services/commercial/ for commercial services)
- 2-3 related cluster pages
- Relevant location pages
- Contact page

### 6. SEO Checklist

Before completion, verify:
- [ ] Title: "[Service] in Tampa Bay | Florida Construction Specialists" (50-60 chars)
- [ ] Meta description with CTA and phone (155-160 chars)
- [ ] Single H1 with primary keyword
- [ ] All images have descriptive alt text
- [ ] LocalBusiness schema present
- [ ] Service schema present
- [ ] FAQ schema with 10 questions
- [ ] Breadcrumb schema
- [ ] 5+ internal links minimum
- [ ] Link to parent pillar page included
- [ ] 5 CTAs placed strategically
- [ ] Phone number is click-to-call link
- [ ] Word count: 1,500-2,000

### 7. Build & Report

Run: `npm run build`

Report completion with:
- Page URL path
- Word count
- Number of internal links
- Schema types implemented
- Any issues encountered
