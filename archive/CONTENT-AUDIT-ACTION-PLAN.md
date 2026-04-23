# SEO Content Audit - Action Plan
**Florida Construction Specialists Site**
**Date:** February 15, 2026
**Pages Analyzed:** 496
**Overall Health Score:** 85/100

---

## Executive Summary

### ✅ Strengths
- **Perfect H1 structure:** 100% of pages have exactly one H1 tag (no duplicates, no missing)
- **Strong content foundation:** 290 pages (58.5%) have ZERO issues
- **Excellent heading hierarchy:** Average 9.43 H2 tags per page
- **Good internal linking:** 86.5% of pages use InternalLinks component
- **Strong FAQ coverage:** 86.3% of pages have FAQ sections

### ⚠️ Areas for Improvement
- **Critical thin content:** 28 pages (5.6%) have <300 words
- **Moderate thin content:** 108 pages (21.8%) have <500 words
- **Missing internal links:** 67 pages (13.5%) need InternalLinks component
- **Missing FAQs:** 68 pages (13.7%) need FAQ sections

---

## 🔴 CRITICAL PRIORITY (Fix Immediately)

### Issue: 28 Pages with <300 Words

These pages are severely thin and hurt SEO. Google may consider them low-quality.

#### Top 10 Worst Offenders:
| Page | Words | Priority |
|------|-------|----------|
| `app/services/page.tsx` | 94 | 🔥 URGENT |
| `app/locations/page.tsx` | 113 | 🔥 URGENT |
| `app/contact/page.tsx` | 115 | 🔥 URGENT |
| `app/team/page.tsx` | 161 | 🔥 URGENT |
| `app/insurance/page.tsx` | 162 | 🔥 URGENT |
| `app/pre-construction-services-for-commercial-construction-in-tampa/page.tsx` | 212 | High |
| `app/tampa-flood-impact-restoration-services/page.tsx` | 216 | High |
| `app/tampa-debris-removal-and-cleanup-post-disaster/page.tsx` | 218 | High |
| `app/zero-accidents-commercial-construction-safety-specialists/page.tsx` | 221 | High |
| `app/facility-expansion-success-a-guide-for-commercial-construction/page.tsx` | 222 | High |

#### Recommended Actions:

**1. Hub Pages (Services, Locations) - Day 1**
```
Target: 800-1200 words each
Strategy: Overview + service/location grid + value props + CTAs
```

Files to fix:
- `app/services/page.tsx` (94 words → 1000 words)
  - Add: Service category overview, benefits, process, trust signals
  - Include: Service cards with descriptions

- `app/locations/page.tsx` (113 words → 1000 words)
  - Add: Service area map, city descriptions, local presence
  - Include: Location cards with unique content per city

**2. Utility Pages (Contact, Team, Insurance) - Day 2**
```
Target: 500-700 words each
Strategy: Functional + informational content
```

Files to fix:
- `app/contact/page.tsx` (115 words → 600 words)
  - Add: Contact methods, response time, office hours, directions
  - Include: FAQ about scheduling, estimates, emergency service

- `app/team/page.tsx` (161 words → 600 words)
  - Add: Company history, values, certifications, awards
  - Include: Team member bios with expertise areas

- `app/insurance/page.tsx` (162 words → 600 words)
  - Add: Insurance process overview, claim types, documentation needed
  - Include: FAQ about insurance restoration

**3. Topic/Service Pages - Days 3-5**
```
Target: 500-800 words each
Strategy: Add sections: Overview, Benefits, Process, Case Study, FAQ
```

Remaining 22 pages with <300 words - prioritize by traffic:
- Use Google Analytics to identify high-traffic pages
- Fix those first, then handle rest in batches

---

## 🟡 MEDIUM PRIORITY (Fix This Week)

### Issue 1: 80 Pages with 300-500 Words

These pages are borderline thin. Not critical but should be improved.

#### Strategy:
- **Batch expansion:** Group by topic/template and expand 10-15 pages per day
- **Target:** Bring all pages to 600-800 words minimum
- **Content additions:**
  - Expand existing sections with more details
  - Add new H2 sections (e.g., "Why Choose Us", "Our Process", "Case Studies")
  - Include relevant statistics and data
  - Add FAQ sections (kills two birds)

#### Breakdown by Category:
```
Topic/Blog Pages: 57 pages (avg 353 words)
  → Add 250-400 words each (benefits, process, local examples)

Hub: Services: 15 pages (avg 393 words)
  → Add 200-300 words (service details, differentiators)

Location Pages: 10 pages (avg 278 words)
  → Add 300-400 words (city-specific content, local projects)

Hub: Locations: 9 pages (avg 392 words)
  → Add 200-300 words (area served, local expertise)

Restoration Services: 7 pages (avg 300 words)
  → Add 300-400 words (process details, before/after)
```

### Issue 2: 67 Pages Missing InternalLinks Component

These pages lack internal linking, which hurts SEO and user navigation.

#### Affected Page Types:
```
Balcony Reconstruction pages: 7 pages
  - balcony-reconstruction-bradenton/page.tsx
  - balcony-reconstruction-brandon/page.tsx
  - balcony-reconstruction-lakeland/page.tsx
  - balcony-reconstruction-ruskin/page.tsx
  - balcony-reconstruction-sarasota/page.tsx
  - balcony-reconstruction-st-petersburg/page.tsx
  - balcony-reconstruction/page.tsx

Commercial Construction pages: 6 pages
  - commercial-construction-bradenton/page.tsx
  - commercial-construction-brandon/page.tsx
  - commercial-construction-lakeland/page.tsx
  - commercial-construction-ruskin/page.tsx
  - commercial-construction-sarasota/page.tsx
  - commercial-construction/page.tsx

Disaster Recovery pages: 7 pages
  - disaster-recovery-bradenton/page.tsx
  - disaster-recovery-brandon/page.tsx
  - disaster-recovery-lakeland/page.tsx
  - disaster-recovery-ruskin/page.tsx
  - disaster-recovery-sarasota/page.tsx
  - disaster-recovery-st-petersburg/page.tsx
  - disaster-recovery-tampa/page.tsx

... and 47 more pages
```

#### Quick Fix:
Add InternalLinks component before closing `</main>` tag:

```tsx
import { InternalLinks } from '@/components/InternalLinks';

// At end of page, before </main>
<InternalLinks
  links={[
    {
      href: '/related-service-1/',
      label: 'Related Service 1'
    },
    {
      href: '/related-service-2/',
      label: 'Related Service 2'
    },
    // ... 4-6 relevant links
  ]}
/>
```

**Recommendation:** Create a script to batch-add InternalLinks to similar page types.

---

## 🟢 LOW PRIORITY (Nice to Have)

### Issue: 68 Pages Missing FAQ Sections

FAQ sections improve user experience and enable FAQ schema markup.

#### Affected Pages:
- Utility pages: about, contact, gallery, resources
- Topic pages without FAQs: commercial construction topics, safety pages
- Some location pages

#### Strategy:
- **Phase 1:** Add FAQs to utility pages (about, contact, team, gallery)
- **Phase 2:** Add FAQs to topic pages when expanding content (combine with medium priority task)
- **Phase 3:** Add FAQs to remaining pages during next content refresh

#### FAQ Template:
```tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

<section className="section bg-gray-50">
  <div className="container-custom">
    <h2>Frequently Asked Questions</h2>

    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Question 1?</AccordionTrigger>
        <AccordionContent>
          Answer 1...
        </AccordionContent>
      </AccordionItem>

      {/* Add 5-8 FAQs per page */}
    </Accordion>
  </div>
</section>
```

---

## 📊 Top Performers (Learn From These)

These pages have excellent content and structure. Use them as templates:

### 1. Disaster Recovery Page
- **File:** `app/disaster-recovery/page.tsx`
- **Stats:** 8,813 words, 16 H2s
- **Strengths:** Comprehensive content, excellent structure, great examples

### 2. Tampa's Awards for Historic Restoration Excellence
- **File:** `app/tampas-awards-for-historic-restoration-excellence/page.tsx`
- **Stats:** 7,584 words, 29 H2s
- **Strengths:** Rich heading hierarchy, detailed content

### 3. Commercial Historic Restoration
- **File:** `app/commercial/historic-restoration/page.tsx`
- **Stats:** 6,692 words, 14 H2s, ZERO issues
- **Strengths:** Perfect structure, comprehensive, well-organized

### 4. Tampa's Guidelines for Historic Landscape Restoration
- **File:** `app/tampas-guidelines-for-historic-landscape-restoration/page.tsx`
- **Stats:** 6,207 words, 23 H2s
- **Strengths:** Excellent hierarchy, authoritative content

### 5. Balcony Reconstruction Hub
- **File:** `app/balcony-reconstruction/page.tsx`
- **Stats:** 5,930 words, 14 H2s
- **Strengths:** Great service hub page model

---

## 🚀 Implementation Timeline

### Week 1: Critical Issues
**Day 1 (Monday)**
- Fix hub pages: services, locations (94, 113 words → 1000+ words)
- **Impact:** 2 pages fixed, major SEO boost

**Day 2 (Tuesday)**
- Fix utility pages: contact, team, insurance (115, 161, 162 words → 600+ words)
- **Impact:** 3 pages fixed

**Day 3-5 (Wed-Fri)**
- Fix remaining 23 critical pages (<300 words)
- Group by topic, use templates
- **Impact:** 23 pages fixed, all critical issues resolved

### Week 2: Medium Priority
**Days 1-2 (Mon-Tue)**
- Add InternalLinks component to 67 pages
- Create script to batch process similar page types
- **Impact:** Improved internal linking site-wide

**Days 3-5 (Wed-Fri)**
- Begin expanding 80 medium-thin pages (300-500 words)
- Focus on high-traffic pages first
- **Impact:** 20-30 pages improved to 600+ words

### Week 3-4: Complete Medium Priority
- Continue expanding medium-thin pages
- **Goal:** All pages above 500 words

### Ongoing: Low Priority
- Add FAQs to utility pages
- Add FAQs to topic pages during content refreshes

---

## 📈 Success Metrics

### Target Outcomes:
- **Critical thin content:** 28 pages → 0 pages (<300 words)
- **Moderate thin content:** 108 pages → <20 pages (<500 words)
- **Internal links:** 86.5% → 95%+ coverage
- **FAQ coverage:** 86.3% → 90%+ coverage
- **Perfect pages:** 290 (58.5%) → 400+ (80%+)

### KPIs to Track:
1. Google Search Console impressions (should increase 15-25%)
2. Average position for key terms (should improve)
3. Page load times (monitor after content additions)
4. Bounce rate (should decrease with better content)
5. Time on page (should increase)

---

## 🛠️ Tools & Scripts

### Content Audit Script
```bash
python3 audit_content.py
```
**Output:** `audit-content.json` with full details

### Re-run After Changes
Run the audit script after each batch of fixes to track progress.

---

## 📝 Content Writing Guidelines

### Target Word Counts by Page Type:
- **Homepage:** 800-1200 words
- **Service hub pages:** 1000-1500 words
- **Location hub pages:** 800-1200 words
- **Service detail pages:** 800-1200 words
- **Location detail pages:** 600-900 words
- **Topic/blog pages:** 1000-2000 words
- **Utility pages:** 500-700 words

### Required Elements:
1. **H1 tag:** One per page, keyword-rich
2. **H2 tags:** 8-15 per page, structured hierarchy
3. **FAQ section:** 5-8 questions with detailed answers
4. **Internal links:** 6-10 relevant links via InternalLinks component
5. **CTA sections:** 2-3 strategic calls-to-action

### Content Structure Template:
```
1. Hero section (H1)
2. Overview (H2) - 150-200 words
3. Benefits/Features (H2) - 3-5 subsections with H3s
4. Process/How It Works (H2) - Step-by-step
5. Why Choose Us (H2) - Differentiators
6. Local/Relevant Examples (H2) - Case studies or examples
7. FAQ Section (H2) - 5-8 Q&As
8. Internal Links
9. Final CTA
```

---

## Full Data Files

- **Complete audit results:** `audit-content.json`
- **Summary report:** `audit-summary.txt`
- **This action plan:** `CONTENT-AUDIT-ACTION-PLAN.md`

---

**Next Steps:** Start with Week 1, Day 1 tasks. Fix services and locations hub pages first for maximum impact.
