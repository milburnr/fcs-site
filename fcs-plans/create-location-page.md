Create a location landing page for: $ARGUMENTS

## Instructions

Follow these steps to create a city-specific landing page optimized for "[service] in [City]" searches.

### 1. Research Phase

- Read CLAUDE.md for project context
- Research the city: major neighborhoods, landmarks, local building considerations
- Identify city-specific factors: flood zones, historic districts, common project types
- Determine distance from Ruskin headquarters

### 2. Content Creation

Generate 1,500+ words following this structure:

```markdown
# Commercial & Residential Construction in [City], FL

[Localized introduction - 100-150 words mentioning specific neighborhoods, landmarks, or local character]

## Your Trusted [City] Construction Partner

[Why FCS is the right choice for [City] projects - 200 words]
- Proximity to [City]
- Projects completed in the area
- Understanding of local regulations

## Construction Services in [City]

### Commercial Construction in [City]
[150 words describing commercial services with local context]
[Link to: /services/commercial/]

### Luxury Residential Construction in [City]  
[150 words describing residential services with local context]
[Link to: /services/residential/]

### Disaster Recovery in [City]
[150 words - especially relevant for coastal cities]
[Link to: /services/disaster-recovery/]

### Historic Restoration in [City]
[If applicable - mention historic districts]
[Link to: /services/historic-restoration/]

## Why [City] Property Owners Choose FCS

[300 words including:]
- Local testimonials (if available)
- Specific projects completed in [City] or nearby
- Distance from headquarters
- Local permit/regulation knowledge

## [City] Construction Regulations & Permitting

[200-300 words covering:]
- Local building department contact info
- Specific zoning considerations
- Flood zone requirements (if coastal)
- Hurricane code requirements
- Any unique local requirements

## Featured [City] Projects

[2-3 portfolio items from this area or nearby similar projects]

## Frequently Asked Questions for [City] Construction

[10 location-specific Q&As - 400 words]

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

## Get Started on Your [City] Project

[CTA section with form, phone, and map]

## Service Area Map

[Embedded map showing coverage area with [City] highlighted]
```

### 3. Technical Implementation

Create page at: `src/pages/locations/[city-slug]/index.tsx`

Include components:
```tsx
import SEOHead from '@/components/seo/SEOHead';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';
import FAQSchema from '@/components/seo/FAQSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import ServiceAreaMap from '@/components/ServiceAreaMap';
```

### 4. Schema Implementation

LocalBusiness schema variant for this city:
```json
{
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
  "name": "Florida Construction Specialists",
  "areaServed": {
    "@type": "City",
    "name": "[City]",
    "containedIn": {
      "@type": "State",
      "name": "Florida"
    }
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "[City center latitude]",
    "longitude": "[City center longitude]"
  }
  // ... rest of LocalBusiness data
}
```

Add FAQ schema for all 10 questions.

Breadcrumb: Home > Locations > [City]

### 5. Internal Linking Requirements

MUST include links to:
- All 4 service pillar pages
- 2-3 nearby location pages
- Relevant portfolio/case study pages
- Contact page
- Homepage

### 6. City-Specific Data to Include

| City | Coordinates | Distance from Ruskin | Key Notes |
|------|-------------|---------------------|-----------|
| Tampa | 27.9506, -82.4572 | ~15 min | Downtown, Ybor historic |
| Lakeland | 28.0395, -81.9498 | ~45 min | Central FL hub |
| Brandon | 27.9378, -82.2859 | ~20 min | Suburban growth |
| Plant City | 28.0186, -82.1195 | ~30 min | Agricultural heritage |
| Clearwater | 27.9659, -82.8001 | ~45 min | Beach/coastal |
| St. Petersburg | 27.7676, -82.6403 | ~40 min | Downtown, arts district |
| Sarasota | 27.3364, -82.5307 | ~45 min | Luxury market |
| Bradenton | 27.4989, -82.5748 | ~35 min | Growing market |

### 7. SEO Checklist

- [ ] Title: "Construction Services in [City], FL | Florida Construction Specialists" (50-60 chars)
- [ ] Meta description with [City] mention and CTA (155-160 chars)
- [ ] H1: "Commercial & Residential Construction in [City], FL"
- [ ] LocalBusiness schema with areaServed = [City]
- [ ] FAQ schema with 10 location-specific questions
- [ ] Breadcrumb schema
- [ ] Links to all service pillar pages
- [ ] Links to nearby location pages
- [ ] 5 CTAs placed strategically
- [ ] Phone click-to-call
- [ ] Word count: 1,500+

### 8. Build & Report

Run: `npm run build`

Report completion with:
- Page URL path
- Word count  
- Internal links added (list them)
- Schema types implemented
- City-specific content highlights
- Any research findings about local regulations
