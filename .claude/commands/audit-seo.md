# SEO Audit Checklist

Run this audit on any FCS page before committing. Check each item and fix any failures.

## Required Arguments
- `page`: Path to the page file (e.g., `app/services/commercial/page.tsx`)

## Audit Checklist

### 1. Title Tag
- [ ] Length: 50-60 characters
- [ ] Format: `[Primary Keyword] in [City/Tampa Bay] | Florida Construction Specialists`
- [ ] Contains primary keyword
- [ ] Unique across site

### 2. Meta Description
- [ ] Length: 155-160 characters
- [ ] Contains value proposition
- [ ] Contains CTA
- [ ] Contains phone number: (813) 420-7561
- [ ] Unique across site

### 3. H1 Tag
- [ ] Exactly ONE H1 per page
- [ ] Contains primary keyword naturally
- [ ] Does NOT duplicate title tag verbatim
- [ ] Describes page content clearly

### 4. Heading Hierarchy
- [ ] H1 → H2 → H3 (no skipped levels)
- [ ] H2s for major sections
- [ ] H3s for subsections
- [ ] Keywords distributed naturally in headings

### 5. Content Quality
- [ ] **Pillar pages**: 2,500+ words
- [ ] **Service pages**: 1,500-2,000 words
- [ ] **Location pages**: 1,500+ words
- [ ] No thin content (<500 words)
- [ ] No duplicate content from other pages
- [ ] Premium positioning language used
- [ ] No "emergency repair" or small-job language

### 6. Schema Markup
- [ ] LocalBusinessSchema present
- [ ] ServiceSchema present (service pages)
- [ ] FAQSchema present with 10+ questions
- [ ] BreadcrumbSchema present
- [ ] Schema validates (test at schema.org validator)

### 7. Internal Linking
- [ ] Minimum 5 internal links
- [ ] Links to parent pillar page (cluster pages)
- [ ] Links to related services
- [ ] Links to location pages
- [ ] Descriptive anchor text (not "click here")
- [ ] No orphan pages

### 8. Images
- [ ] All images have descriptive alt text
- [ ] Alt text includes location/service keywords naturally
- [ ] Images lazy-loaded
- [ ] Appropriate file sizes

### 9. CTA Placement
- [ ] CTA #1: Hero section (form + call)
- [ ] CTA #2: After service description
- [ ] CTA #3: After portfolio/proof section
- [ ] CTA #4: After testimonials/FAQ
- [ ] CTA #5: Bottom of page

### 10. Phone Links
- [ ] All phone numbers use click-to-call: `<a href="tel:8134207561">(813) 420-7561</a>`
- [ ] Phone number consistent: (813) 420-7561

### 11. NAP Consistency
Verify exact match:
```
Name: Florida Construction Specialists
Address: 822 Bayview Dr, Ruskin, FL 33579
Phone: (813) 420-7561
```

### 12. Premium Positioning Check

**Must NOT contain:**
- [ ] "Emergency repairs"
- [ ] "Quick fix"
- [ ] "Affordable"
- [ ] "Cheap"
- [ ] "Get Free Estimate"
- [ ] "Small jobs welcome"
- [ ] Tourist content (Busch Gardens, ZooTampa, etc.)

**Must contain (where relevant):**
- [ ] "Prime Contractor"
- [ ] "$500K-$50M+" or specific project value range
- [ ] "Schedule a Consultation" or "Project Consultation"
- [ ] License: CBC1262722
- [ ] Bonding: $10M+

### 13. Technical
- [ ] Page builds without errors: `npm run build`
- [ ] Trailing slash present in URL
- [ ] Canonical URL correct and self-referencing
- [ ] No console errors in browser

### 14. Performance
- [ ] Lighthouse Performance score: >90
- [ ] Lighthouse SEO score: >90
- [ ] Lighthouse Accessibility score: >90
- [ ] Mobile-friendly

## Quick Validation Commands

```bash
# Build the site (catches TypeScript/build errors)
cd sites/fcs-final && npm run build

# Check for duplicate titles
grep -r "title:" app/ --include="*.tsx" | sort | uniq -d

# Check for thin content (files under 100 lines likely thin)
wc -l app/**/page.tsx | sort -n | head -20

# Find pages missing FAQ
grep -rL "FAQSchema" app/ --include="page.tsx"

# Find pages missing LocalBusinessSchema
grep -rL "LocalBusinessSchema" app/ --include="page.tsx"
```

## Schema Validation

Test schema at: https://validator.schema.org/

Copy the JSON-LD from browser DevTools:
1. Open page in browser
2. Right-click → Inspect
3. Elements tab → search for `application/ld+json`
4. Copy JSON content
5. Paste into validator

## Common Issues & Fixes

### Issue: Title too long
**Fix:** Shorten to 50-60 chars. Remove "Florida" if needed: `Commercial Construction Tampa | FCS`

### Issue: Missing FAQ Schema
**Fix:** Add FAQ section with minimum 10 questions using FAQ component and FAQSchema

### Issue: No internal links
**Fix:** Add RelatedServices, NearbyLocations, or InternalLinks components

### Issue: Thin content
**Fix:** Expand with:
- More detailed service descriptions
- Local market information
- Process explanations
- Additional FAQ questions
- Portfolio/case study references

### Issue: Duplicate content
**Fix:** Rewrite to be unique. Focus on:
- Different angle/perspective
- Location-specific details
- Service-specific applications
- Unique examples/case studies

### Issue: Premium positioning violation
**Fix:** Replace:
- "Free estimate" → "Project consultation"
- "Affordable" → "Competitive" or remove
- "Quick" → "Efficient" or "Streamlined"
- "Small jobs" → Remove entirely

## Audit Report Template

```markdown
# SEO Audit: [Page Path]

**Date:** [Date]
**Overall Score:** [X/14 categories passed]

## Passed
- [List passed items]

## Failed
- [List failed items with specific issues]

## Recommendations
1. [Specific fix needed]
2. [Specific fix needed]
```
