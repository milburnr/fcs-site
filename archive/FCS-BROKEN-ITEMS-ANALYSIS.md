# FCS Site Broken Items Analysis

**Date:** 2025-01-29  
**Total Broken Items:** 426 (with recursion), 92 unique

## Executive Summary

The FCS site has **92 unique broken references** breaking down into:
- **27 unique missing images** (referenced ~174 times across pages)
- **19 unique broken links** (referenced ~39 times across pages)

**Root Cause:** WordPress-to-Next.js migration left legacy image paths and internal links pointing to non-existent resources.

---

## Broken Images Analysis

### Pattern: Legacy WordPress Upload Paths
All broken images use the WordPress upload structure: `/wp-content/uploads/YYYY/MM/filename`

### Missing Images (27 unique files):

#### 2023/12 Directory (22 files):
1. `big-graphic-1.png` - Homepage hero
2. `hurricane-ian.webp` - Disaster/storm pages
3. `facility-building-turner-agricivic-center-arcadia-fl.jpg` - Commercial pages (most referenced!)
4. `FCS-Tiles-on-balcony.webp` - Balcony/waterproofing pages
5. `FCS-Exterior-Waterproofing.png` - Waterproofing services
6. `Ian-2.jpg` - Hurricane damage pages
7. `Replacing-roof-decking-and-rafters.jpg` - Roofing/restoration
8. `custom-home-1.png` - Custom homes
9. `custom-home-construction-2.jpg` - Custom homes
10. `Custom-home-2.jpg` - Custom homes
11. `historic-preservation.jpg` - Historic restoration
12. `plant-high-school.webp` - Historic/commercial
13. `Lions-World-Vision-Institute-Building-Exterior.jpg` - Commercial
14. `Leon-County-Detention-Center-Tallahasse.png` - Commercial
15. `Downtown-Tampa-Over-The-Bay-At-Sunrise-1024x682-1.jpg` - Location pages
16. `FCS-commercial-building.webp` - Commercial services
17. `FCS-commercial-project.webp` - Commercial services
18. `FCS-concrete-restoration.webp` - Restoration services
19. `Old/Tampa-Bay-FEATURE.jpg` - Tampa location
20. `Old/custom-home-construction-1.jpg` - Custom homes
21. `Old/custom-home-construction-2.jpg` - Custom homes
22. `Old/railing-replacement-best-practices-condos.webp` - Balcony/condo

#### 2024/01 Directory (5 files):
1. `Custom-home-2-rotated-1.jpg` - Custom homes
2. `m88.jpg` - Unknown usage
3. `1111.jpg` - Unknown usage
4. `e2.webp` - Unknown usage
5. `i9.jpg` - Unknown usage

### High-Impact Images (most referenced):
| Image | Est. References |
|-------|-----------------|
| `facility-building-turner-agricivic-center-arcadia-fl.jpg` | 50+ pages |
| `FCS-Tiles-on-balcony.webp` | 20+ pages |
| `hurricane-ian.webp` | 15+ pages |
| `Ian-2.jpg` | 10+ pages |

---

## Broken Links Analysis

### 19 Pages Referenced But Don't Exist:

#### Navigation/Core Links (HIGH PRIORITY):
1. `/portfolio/` - Referenced in navigation and many pages
2. `/locations/tampa/` - Location page missing

#### Service Pages (MEDIUM PRIORITY):
3. `/hurricane-damage-restoration/`
4. `/water-damage-restoration/`
5. `/fire-damage-restoration/`
6. `/insurance-claims-management/`
7. `/insurance-restoration-brandon/`
8. `/insurance-restoration-sarasota/`
9. `/waterfront-home-construction-tampa/`

#### Technical/Compliance Pages:
10. `/ahca-compliance-medical-construction/`
11. `/sb4d-compliance-guide/`
12. `/cpm-scheduling-commercial-construction/`
13. `/flood-zone-ve-vs-ae-construction/`
14. `/balancing-modern-comfort-historic-character/`

#### Nested Structure Issues:
15. `/residential/coastal-resilience/`
16. `/residential/luxury-custom-homes/`
17. `/residential/luxury-home-building/`
18. `/residential/waterfront-construction/`
19. `/services/commercial/historic-restoration/`

---

## Prioritized Fix Plan

### Phase 1: Critical (Do First) 🔴
**Impact: Affects user experience and navigation**

1. **Create `/portfolio/` page** - Core navigation link
   - Action: Create `app/portfolio/page.tsx` with project gallery
   - Effort: Medium (needs content curation)

2. **Fix homepage hero image** (`big-graphic-1.png`)
   - Action: Replace with existing optimized image or source new one
   - Location: `app/page.tsx`
   - Effort: Low

3. **Fix high-frequency image** (`facility-building-turner-agricivic-center-arcadia-fl.jpg`)
   - Action: Find replacement or update all references
   - Impact: 50+ pages
   - Effort: Low (if using find/replace)

### Phase 2: High Priority 🟠
**Impact: SEO and user journeys**

4. **Create disaster restoration pages:**
   - `/hurricane-damage-restoration/`
   - `/water-damage-restoration/`
   - `/fire-damage-restoration/`
   - Action: Create service pages or redirect to existing disaster-recovery page
   - Effort: Medium

5. **Create `/locations/tampa/` page**
   - Action: Create location page or redirect to main locations
   - Effort: Low

6. **Fix remaining frequently-used images:**
   - `FCS-Tiles-on-balcony.webp`
   - `hurricane-ian.webp`
   - `Ian-2.jpg`
   - Action: Source from fcs-optimized folder or stock images
   - Effort: Medium

### Phase 3: Medium Priority 🟡
**Impact: Content completeness**

7. **Create insurance service pages:**
   - `/insurance-claims-management/`
   - `/insurance-restoration-brandon/`
   - `/insurance-restoration-sarasota/`
   - Action: Create or redirect

8. **Fix nested URL structure issues:**
   - `/residential/coastal-resilience/` → redirect to `/coastal-construction/`
   - `/residential/luxury-custom-homes/` → redirect to `/luxury-custom-homes/`
   - etc.
   - Action: Add redirects in `netlify.toml` or create pages

9. **Fix remaining broken images** (lower frequency)

### Phase 4: Low Priority 🟢
**Impact: Edge cases and completeness**

10. **Technical/blog content pages:**
    - `/sb4d-compliance-guide/`
    - `/ahca-compliance-medical-construction/`
    - etc.
    - Action: Create as blog posts or remove references

---

## Quick Wins (Can Do Immediately)

### 1. Bulk Image Path Update
Run a script to replace missing images with placeholders or existing alternatives:

```bash
# Find all references to missing images
grep -r "facility-building-turner-agricivic-center-arcadia-fl.jpg" app/ --include="*.tsx" -l
# Replace with an existing commercial image
```

### 2. Add Redirects for Broken Links
Add to `netlify.toml`:
```toml
[[redirects]]
  from = "/portfolio/*"
  to = "/gallery/"
  status = 301

[[redirects]]
  from = "/residential/luxury-custom-homes/*"
  to = "/luxury-custom-homes/"
  status = 301
```

### 3. Image Mapping Script
Use images from `/tools/image-processing/output/fcs-optimized/`:
- Map `hurricane-ian.webp` → `hurricane-insurance-restoration/hurricane-insurance-restoration-display.webp`
- Map other images to closest semantic match

---

## Available Resources

### Optimized Images Available
Location: `/Volumes/External-2TB/projects/service-site-builder/tools/image-processing/output/fcs-optimized/`
Count: **249 folders** with multiple sizes per image

These can be used to replace missing images with proper, optimized versions.

### Existing Images in Build
Location: `out/wp-content/uploads/`
Count: **489 images** (many are WordPress resized variants)

---

## Recommended Execution Order

1. ✅ Run image audit to map missing → available replacements
2. ✅ Bulk replace image paths in source files
3. ✅ Add redirects for broken link URLs
4. ✅ Create `/portfolio/` page (gallery with existing content)
5. ✅ Rebuild and re-verify with `qa check`
6. ✅ Deploy and test

**Estimated Total Effort:** 4-6 hours for Phase 1-2, additional 4-6 hours for Phase 3-4
