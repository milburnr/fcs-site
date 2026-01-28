# Create Location Page

Create a location-specific landing page (1,500+ words) for a service area city.

## Required Arguments
- `city`: City name (e.g., Tampa, St. Petersburg, Clearwater)
- `type`: Page type - either "service-location" (service x city) or "city-landing" (all services in city)
- `service` (optional): Service slug if type is "service-location"

## Page Types

### Type 1: Service x Location Page (e.g., `/commercial-construction-tampa/`)
- Specific service in specific city
- 1,500+ words
- Target: "[Service] in [City]" searches

### Type 2: City Landing Page (e.g., `/locations/lakeland-fl/`)
- All services in one city
- 1,500+ words
- Target: "Construction contractor in [City]" searches

## Content Structure

### Service x Location Page (1,500+ words)

1. **Hero Section** (150 words)
   - `[Service] in [City], FL`
   - Local-specific intro
   - Trust badges

2. **Local Introduction** (200 words)
   - Mention specific neighborhoods/landmarks
   - Distance from Ruskin headquarters
   - Local project references

3. **Service Description for [City]** (400 words)
   - Service-specific content with local relevance
   - Types of projects in this area
   - Local building considerations

4. **Our [Service] Process** (300 words)
   - 5-step condensed process
   - Local permitting mentions

5. **Why [City] Clients Choose FCS** (200 words)
   - Local testimonials if available
   - Nearby completed projects
   - Local market knowledge

6. **[City] Building Regulations** (200 words)
   - Local building department info
   - Zoning considerations
   - Flood zone info if coastal

7. **FAQ for [City] [Service]** (300 words, 10 questions)
   - Location-specific questions
   - Use generateLocationFAQs() from constants.ts
   - FAQSchema required

8. **CTA Section**
   - Local-focused CTA
   - HighLevel form
   - Click-to-call

### City Landing Page (1,500+ words)

1. **Hero Section** (150 words)
   - `Construction Services in [City], FL`
   - Comprehensive intro

2. **Local Market Overview** (200 words)
   - City overview
   - Construction market in the area
   - FCS presence

3. **Services in [City]** (500 words)
   - Commercial Construction → `/services/commercial/`
   - Residential Construction → `/services/residential/`
   - Disaster Recovery → `/services/disaster-recovery/`
   - Historic Restoration → `/services/historic-restoration/`
   - 100 words per service with link to pillar

4. **Why [City] Property Owners Choose FCS** (200 words)
   - Distance from main office
   - Local testimonials
   - Projects in area

5. **[City] Construction Regulations** (200 words)
   - Building department info
   - Permitting requirements
   - Zoning considerations

6. **FAQ for [City]** (300 words, 10 questions)
   - Location-specific FAQs
   - FAQSchema required

7. **Service Area Map** (50 words)
   - Embedded map or description
   - Coverage area

8. **CTA Section**

## Schema Requirements

### Service x Location:
```tsx
<LocalBusinessSchema city="[City]" service="[Service Name]" />
<ServiceSchema
  serviceName="[Service Name]"
  serviceDescription="[Description]"
  city="[City]"
  minPrice="[Value]"
/>
<FAQSchema faqs={faqItems} />
<BreadcrumbSchema items={[
  { name: "Home", href: "/" },
  { name: "[Service]", href: "/services/[service]/" },
  { name: "[City]", href: "/[service]-[city-slug]/" }
]} />
```

### City Landing:
```tsx
<LocalBusinessSchema city="[City]" />
<FAQSchema faqs={faqItems} />
<BreadcrumbSchema items={[
  { name: "Home", href: "/" },
  { name: "Locations", href: "/locations/" },
  { name: "[City], FL", href: "/locations/[city-slug]/" }
]} />
```

## Internal Linking Requirements

### Service x Location:
- Link to parent service pillar page (REQUIRED)
- Link to same service in 2-3 nearby cities
- Link to 2 other services in this city
- Link to city landing page
- Minimum 5 internal links

### City Landing:
- Link to ALL 4 service pillar pages (REQUIRED)
- Link to 2-3 nearby city pages
- Link to service x location pages for this city
- Minimum 8 internal links

## File Locations

### Service x Location:
Save to: `app/[service]-[city-slug]/page.tsx`
Example: `app/commercial-construction-tampa/page.tsx`

### City Landing:
Save to: `app/locations/[city-slug]/page.tsx`
Example: `app/locations/lakeland-fl/page.tsx`

## City-Specific Content Guidelines

### Tampa (Primary Market)
- Mention: Downtown, Westshore, South Tampa, Hyde Park, Ybor City
- Distance: Home market
- Regulatory: City of Tampa Planning Commission

### St. Petersburg
- Mention: Downtown, Old Northeast, Central Avenue, Beach Drive
- Distance: 25 minutes from Ruskin
- Regulatory: City of St. Petersburg Development Review

### Clearwater
- Mention: Beach, Downtown, Countryside
- Distance: 40 minutes from Ruskin
- Regulatory: Coastal construction requirements

### Lakeland
- Mention: Downtown, Dixieland, Lake Morton
- Distance: 45 minutes from Ruskin
- Historic: Strong historic preservation district

### Sarasota
- Mention: Downtown, St. Armands, Siesta Key, Lido Key
- Distance: 45 minutes from Ruskin
- Regulatory: Sarasota County permitting

### Bradenton
- Mention: Downtown, Anna Maria Island proximity, Palmetto
- Distance: 30 minutes from Ruskin
- Historic: Historic district preservation

### Brandon
- Mention: Westfield Brandon, Bloomingdale
- Distance: 20 minutes from Ruskin
- Regulatory: Hillsborough County

### Plant City
- Mention: Downtown, Strawberry Festival, historic train depot
- Distance: 35 minutes from Ruskin
- Character: Agricultural heritage, growing commercial

## CTA Placement (5 per page)
1. Hero section
2. After service/market overview
3. After regulations section
4. After FAQ
5. Bottom of page
