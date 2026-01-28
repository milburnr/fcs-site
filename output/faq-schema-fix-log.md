# FAQ Schema Fix Log

**Date:** 2025-01-17
**Task:** Add FAQWithSchema component to pages with FAQ content for Google rich results

## Summary

Fixed **8 pages** that had FAQ content displayed but were missing the FAQSchema structured data component.

## Pages Fixed (8 total)

### Original 5 Known Pages
1. ✅ `/contractors-role-in-tampa-insurance-restoration/page.tsx`
   - Had 5 FAQ items as inline h3/p elements
   - Converted to FAQWithSchema component

2. ✅ `/historic-building-preservation-in-tampa/page.tsx`
   - Had 6 FAQ items in border-left styled divs
   - Converted to FAQWithSchema component

3. ✅ `/tampa-commercial-construction-costs/page.tsx`
   - Had 5 FAQ items in card-style layout
   - Converted to FAQWithSchema component

4. ✅ `/custom-home-accessibility-features-in-tampa/page.tsx`
   - Had 5 FAQ items in bg-gray-50 cards
   - Converted to FAQWithSchema component

5. ✅ `/sustainable-building-practices-florida-green-construction/page.tsx`
   - Had 5 FAQ items in a nested div section
   - Converted to FAQWithSchema component

### Additional Pages Found & Fixed (3)
6. ✅ `/custom-home-interior-design-services-in-tampa/page.tsx`
   - Had 5 FAQ items about interior design
   - Converted to FAQWithSchema component

7. ✅ `/tampas-custom-family-home-builders/page.tsx`
   - Had 5 FAQ items about family home construction
   - Converted to FAQWithSchema component

8. ✅ `/tampa-luxury-custom-home-building-services/page.tsx`
   - Had 5 FAQ items about luxury home building
   - Converted to FAQWithSchema component

## Pages Already Correct

The following pages were checked and already have proper FAQ schema:
- `/condo-milestone-inspection-remediation/page.tsx` - Uses FAQWithSchema correctly
- `/key-considerations-for-building-medical-facilities-in-florida/page.tsx` - Uses FAQSchema + Accordion
- `/insurance-arbitration-appraisal/page.tsx` - Uses FAQSchema + FAQ component

## Fix Pattern Applied

For each page:
1. Added import: `import { FAQWithSchema } from "@/components/FAQ";`
2. Created `const faqs = [...]` array with question/answer objects
3. Removed inline FAQ HTML display
4. Added `<FAQWithSchema items={faqs} title="..." description="..." />` component

## Pages Needing Future Attention

A full scan revealed **115+ additional pages** with "Frequently Asked" content that may need FAQ schema. These include pages about:
- Commercial construction topics
- Historic restoration
- Custom home features
- Insurance restoration
- Design-build services

These pages should be reviewed in a future pass to complete full site coverage.

## Technical Notes

- The FAQWithSchema component handles both the visual display AND the JSON-LD structured data
- Using `items` prop (not `faqs`) based on the working example
- Added title and description props for section headings
