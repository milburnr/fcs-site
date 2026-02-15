# Schema Markup Audit Report
**Date:** 2026-02-15
**Total Pages Audited:** 496
**Site:** Florida Construction Specialists

## Executive Summary

The site has **excellent schema markup coverage** overall, with strong implementation of structured data across most pages. However, there are **29 critical issues** and **279 medium-priority opportunities** for improvement.

### Schema Usage Across Site

| Schema Type | Pages Using | Coverage |
|-------------|-------------|----------|
| **LocalBusinessSchema** | 495 | 99.8% ✅ |
| **BreadcrumbSchema** | 494 | 99.6% ✅ |
| **FAQSchema** | 340 | 68.5% ⚠️ |
| **ServiceSchema** | 200 | 40.3% ⚠️ |
| **ArticleSchema** | 153 | 30.8% ✅ |
| **OrganizationSchema** | 2 | 0.4% ℹ️ |

### Issue Breakdown

| Severity | Count | Issue Type |
|----------|-------|------------|
| **HIGH** | 29 | Missing FAQSchema on pages with FAQ data |
| **MEDIUM** | 279 | Service pages without ServiceSchema |
| **LOW** | 584 | Canonical URLs (false positive - in metadata), Unused imports |

## Critical Issues (HIGH SEVERITY)

### 29 Pages with FAQ Data Missing FAQSchema

These pages have FAQ sections (const faqs = [...]) but don't include FAQSchema markup, missing valuable rich snippet opportunities:

#### Service Pages (9)
- app/balcony-reconstruction/page.tsx
- app/commercial-construction/page.tsx
- app/condo-milestone-inspection-remediation/page.tsx
- app/condo-structural-reserve-study-repairs/page.tsx
- app/disaster-recovery/page.tsx
- app/exterior-waterproofing/page.tsx
- app/historic-building-preservation-in-tampa/page.tsx
- app/historic-restoration/page.tsx
- app/insurance-restoration/page.tsx

#### Location Pages (11)
- app/locations/bradenton-fl/page.tsx
- app/locations/brandon-fl/page.tsx
- app/locations/clearwater-fl/page.tsx
- app/locations/plant-city-fl/page.tsx
- app/locations/ruskin-fl/page.tsx
- app/locations/sarasota-fl/page.tsx
- app/locations/st-petersburg-fl/page.tsx
- app/locations/tampa-fl/page.tsx
- app/insurance-restoration-ruskin/page.tsx

#### Specialty Pages (9)
- app/contractors-role-in-tampa-insurance-restoration/page.tsx
- app/custom-home-accessibility-features-in-tampa/page.tsx
- app/custom-home-interior-design-services-in-tampa/page.tsx
- app/luxury-custom-homes/page.tsx
- app/other-services/page.tsx
- app/sb-4-d-compliance-tampa-bay-condos/page.tsx
- app/sustainable-building-practices-florida-green-construction/page.tsx
- app/tampa-commercial-construction-costs/page.tsx
- app/tampa-luxury-custom-home-building-services/page.tsx
- app/tampas-custom-family-home-builders/page.tsx
- app/top-tools-for-commercial-construction-in-tampa/page.tsx

### Impact
- **SEO:** Missing rich snippets in Google search results
- **CTR:** FAQ rich snippets can increase click-through rates by 30-50%
- **Fix Effort:** LOW - Simple import and component addition per page

### Recommended Fix

For each page, add:
```tsx
import { FAQSchema } from "@/components/Schema"

// In the JSX, before closing tags:
<FAQSchema faqs={faqs} />
```

## Medium Priority (MEDIUM SEVERITY)

### 279 Service Pages Missing ServiceSchema

Many informational/blog-style service pages don't have ServiceSchema markup. Examples:

- app/a-zero-accident-workplace-in-tampas-commercial-construction/page.tsx
- app/adaptive-reuse-of-historic-buildings-in-tampa/page.tsx
- app/advanced-building-materials-in-tampa/page.tsx
- app/affordable-commercial-construction-in-tampa/page.tsx
- app/architectural-styles-in-tampas-historic-restoration/page.tsx
- ...and 274 more

### Analysis

Many of these are **blog/informational pages** rather than core service landing pages, so ServiceSchema may not be strictly required. However, adding it could:

- Improve service discoverability in search
- Provide additional structured data context
- Support Google's Service schema understanding

### Recommendation

**Prioritize adding ServiceSchema to:**
1. **Primary service pages** (the 20-30 core services)
2. **Location-specific service pages**
3. Consider skipping for purely educational/blog content

## Low Priority Issues

### Canonical URLs (False Positive)

The audit flagged 496 pages as "missing canonical URLs", but this is a **false positive**. Canonical URLs are correctly implemented in the Next.js metadata:

```tsx
export const metadata: Metadata = {
  alternates: { canonical: 'https://floridaconstructionspecialists.com/page-url/' },
  // ...
}
```

**Action:** None required - canonical URLs are properly implemented.

### Unused Schema Imports (88 pages)

Some pages import schema components but don't use them (likely from copy/paste templates).

**Impact:** Minimal - slight bloat in bundle size
**Action:** Low priority cleanup task

## Implementation Priority

### Phase 1: Critical (Do First)
**Add FAQSchema to 29 pages with FAQ data**
- **Effort:** 1-2 hours
- **Impact:** HIGH - Immediate SEO benefit
- **ROI:** Maximum

### Phase 2: High Value (Do Soon)
**Add ServiceSchema to core service pages**
- Identify 20-30 primary service landing pages
- Add ServiceSchema with proper service details
- **Effort:** 3-4 hours
- **Impact:** MEDIUM-HIGH

### Phase 3: Cleanup (When Time Permits)
**Remove unused schema imports**
- Use ESLint or manual cleanup
- **Effort:** 1-2 hours
- **Impact:** LOW - code cleanliness only

## Schema Implementation Quality

### Strengths ✅

1. **Near-perfect LocalBusinessSchema coverage** (495/496 pages)
2. **Excellent BreadcrumbSchema usage** (494/496 pages)
3. **Strong FAQSchema adoption** (340 pages - 69% coverage)
4. **Consistent implementation patterns** across the site

### Areas for Improvement ⚠️

1. **FAQ pages missing schema** - 29 high-value pages
2. **ServiceSchema coverage** - Could expand from 200 to ~250 pages
3. **OrganizationSchema** - Only 2 pages (likely intentional - usually just in layout)

## Technical Notes

### Schema Components Location
All schema components imported from: `@/components/Schema`

Available components:
- LocalBusinessSchema
- ServiceSchema
- BreadcrumbSchema
- FAQSchema
- ArticleSchema
- OrganizationSchema

### Canonical URL Implementation
Implemented via Next.js 15 metadata API in page.tsx files:
```tsx
export const metadata: Metadata = {
  alternates: { canonical: 'https://floridaconstructionspecialists.com/page-url/' },
}
```

## Audit Methodology

1. Scanned all 496 page.tsx files in /app directory
2. Checked schema imports and actual usage in JSX
3. Detected FAQ data structures (const faqs = [...])
4. Detected breadcrumb data (const breadcrumbItems = [...])
5. Heuristically identified service pages by path and content keywords
6. Checked for canonical URL patterns

## Files Generated

- `/audit-schema.json` - Complete detailed results with all 892 issues
- `/audit-schema.py` - Audit script (reusable for future audits)
- `/SCHEMA-AUDIT-REPORT.md` - This summary report

## Next Steps

1. ✅ Review this report
2. 🔧 Fix 29 critical FAQSchema issues (highest priority)
3. 🔧 Evaluate ServiceSchema opportunities on core service pages
4. 📊 Re-run audit after fixes: `python3 audit-schema.py`
5. 🎯 Track rich snippet appearance in Google Search Console

---

**Overall Assessment:** The site has strong schema markup fundamentals. Fixing the 29 critical FAQ schema issues should be the immediate priority for maximum SEO impact.
