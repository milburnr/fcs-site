# Phase 6: E-E-A-T Signals - Research

**Researched:** 2026-02-18
**Domain:** E-E-A-T credibility signals — author bylines, experience language, building code references, project photography
**Confidence:** HIGH

## Summary

Phase 6 layers credibility signals onto the existing 427-page FCS site without adding new content pages. The work breaks into four distinct workstreams: (1) adding a company byline to ~262 guide/article pages, (2) inserting 1-2 experience sentences on ALL pages (~427 pages), (3) adding Florida Building Code and statute references on technical pages, and (4) building photo gallery and inline photo infrastructure using the existing 248 optimized images.

The codebase already has strong foundations for this work. The `ArticleSchema` component already uses `Organization` type for author (not `Person`), matching the locked decision. The `ContentImage` and `ContentParallax` components exist for inline photos. The `OptimizedImage` component handles all image optimization. The site already has 195 gallery-suitable and 204 inline-suitable images in `image-map.json`. Experience language already exists on ~309 pages in some form, but an audit is needed to identify gaps and ensure consistency.

**Primary recommendation:** Create a reusable `AuthorByline` component for article pages, build a `CodeReference` component for building code callouts, and create a `ProjectGallery` component for service page photo sections. Then systematically apply these across all page types in batches organized by page category.

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions
- Company byline: "Florida Construction Specialists" (not individual names)
- Name only — no bio blurb under the byline (credentials already in trust line/footer)
- No author schema — LocalBusiness schema already covers FCS identity, skip redundant markup
- Byline appears on every blog/article page (~190 guide pages)
- Light touch: 1-2 experience sentences per page, mostly in intros or CTAs
- ALL pages get experience language — service pages, location pages, hub pages, AND all ~190 articles
- Code & permit references: Technical pages only — service pages, SB4-D content, condo remediation, structural pages (not all articles)
- External links: Yes — link to Florida statutes, building department sites, DBPR for transparency and authority
- Real project photos: Use existing photos now. New photographer photos coming this week — can be swapped in later
- Presentation: Mix of both — dedicated gallery sections AND inline photos within content
- Pages without matching photos: Fall back to existing optimized site images rather than leaving gaps
- Build galleries and inline photo placements that are easy to update when new photos arrive

### Claude's Discretion
- Experience language specificity level (verifiable vs. general)
- Per-article voice choice (topic-specific vs. company-level)
- Experience sentence placement within articles
- Whether Phase 4-5 pages need experience language added
- Building code reference format (inline vs. callout per instance)
- Whether location pages need additional code citations beyond Phase 5
- Photo presentation choice per page type

### Deferred Ideas (OUT OF SCOPE)
- Photo update phase — dedicated pass to swap in new photographer photos and expand gallery coverage once full photo library is available
- Individual author profiles — if FCS ever wants to feature the owner or engineer as named authors, revisit byline approach
</user_constraints>

## Standard Stack

### Core (already in project)
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| Next.js | 15 | App Router, static export | Already in use |
| TypeScript | - | Type safety for new components | Already in use |
| Tailwind CSS | - | Styling for byline, callout, gallery components | Already in use |
| next/image (Image) | - | Optimized image rendering | Already in use |

### Existing Components to Leverage
| Component | File | Purpose | How to Use |
|-----------|------|---------|------------|
| `OptimizedImage` | `components/OptimizedImage.tsx` | Maps wp-content paths to optimized avif/webp/jpg | Use for all project photos in galleries and inline |
| `ContentImage` | `components/ContentImage.tsx` | Inline content photos with left/right/center/full positioning | Use for inline project photos within text |
| `ContentParallax` | `components/ContentImage.tsx` | Full-width parallax section for visual breaks | Already used on location pages |
| `ArticleSchema` | `components/Schema.tsx` | Article structured data with Organization author | Already correct — uses Organization, not Person |
| `LocalBusinessSchema` | `components/Schema.tsx` | Business schema with credentials | Already includes CBC license credential |

### No New Dependencies Needed
This phase is purely component creation and content editing. No npm packages to install.

## Architecture Patterns

### Recommended New Components

```
components/
├── AuthorByline.tsx          # NEW — Company byline for article pages
├── CodeReference.tsx         # NEW — Building code callout box
├── ProjectGallery.tsx        # NEW — Photo gallery section for service pages
├── ContentImage.tsx          # EXISTING — Inline photos (already built)
├── OptimizedImage.tsx        # EXISTING — Image optimization (already built)
└── Schema.tsx                # EXISTING — No changes needed
```

### Pattern 1: AuthorByline Component

**What:** Simple company attribution line below article titles
**When to use:** Every guide/article page (~262 in guides + ~33 standalone article pages)
**Design:** Text-only, consistent with the site's clean aesthetic (Phase 3 trust line decision: text-based, no icons)

```typescript
// components/AuthorByline.tsx
import { BUSINESS_INFO } from "@/lib/constants";

interface AuthorBylineProps {
  publishDate?: string;
  modifiedDate?: string;
}

export function AuthorByline({ publishDate, modifiedDate }: AuthorBylineProps) {
  return (
    <div className="flex items-center gap-2 text-sm text-gray-500 mt-2 mb-6">
      <span>By {BUSINESS_INFO.name}</span>
      {publishDate && (
        <>
          <span className="text-gray-300">|</span>
          <time dateTime={publishDate}>
            {new Date(publishDate).toLocaleDateString('en-US', {
              year: 'numeric', month: 'long', day: 'numeric'
            })}
          </time>
        </>
      )}
      {modifiedDate && modifiedDate !== publishDate && (
        <>
          <span className="text-gray-300">|</span>
          <span>Updated {new Date(modifiedDate).toLocaleDateString('en-US', {
            year: 'numeric', month: 'long', day: 'numeric'
          })}</span>
        </>
      )}
    </div>
  );
}
```

**Placement:** Below the `<h1>` in article hero sections, above the main content body.

### Pattern 2: CodeReference Component (Building Code Callouts)

**What:** Styled callout box for building code citations with optional external link
**When to use:** Technical service pages, SB4-D content, condo remediation, structural pages
**Design:** Uses the existing `border-l-4` callout pattern already present in the codebase (seen in 15+ pages)

```typescript
// components/CodeReference.tsx
interface CodeReferenceProps {
  code: string;           // e.g., "Florida Building Code 8th Edition (2023)"
  section?: string;       // e.g., "Section 1609 — Wind Loads"
  description: string;    // What the code requires
  link?: string;          // External link to statute/code
  linkText?: string;      // e.g., "View Full Statute"
}

export function CodeReference({ code, section, description, link, linkText = "View Source" }: CodeReferenceProps) {
  return (
    <div className="bg-blue-50 border-l-4 border-blue-600 p-5 my-6 rounded-r-lg">
      <p className="font-bold text-blue-900 text-sm mb-1">{code}</p>
      {section && <p className="text-blue-800 text-sm font-medium mb-2">{section}</p>}
      <p className="text-blue-800 text-sm">{description}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline text-sm mt-2 inline-block"
        >
          {linkText} &rarr;
        </a>
      )}
    </div>
  );
}
```

**Note:** The SB4-D compliance page already has a similar pattern with white cards linking to `leg.state.fl.us` statutes. The new `CodeReference` component standardizes this as a reusable element with the `border-l-4` accent pattern already used across 15+ pages.

### Pattern 3: ProjectGallery Component

**What:** Grid of project photos for service pages, with easy photo swapping
**When to use:** Service hub pages, location pages with matching project photos
**Design:** Uses `OptimizedImage` for all photos, responsive grid, hover captions

```typescript
// components/ProjectGallery.tsx
import { OptimizedImage } from "@/components/OptimizedImage";

interface GalleryPhoto {
  src: string;       // wp-content path or /images/ path
  caption?: string;  // Optional caption (e.g., "Recent commercial project in Tampa")
}

interface ProjectGalleryProps {
  title?: string;
  subtitle?: string;
  photos: GalleryPhoto[];
  columns?: 2 | 3 | 4;
}

export function ProjectGallery({
  title = "Our Recent Projects",
  subtitle,
  photos,
  columns = 3
}: ProjectGalleryProps) {
  const gridCols = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
  };

  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        {title && (
          <h2 className="text-3xl font-bold text-center mb-4 font-heading">{title}</h2>
        )}
        {subtitle && (
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">{subtitle}</p>
        )}
        <div className={`grid ${gridCols[columns]} gap-4`}>
          {photos.map((photo, i) => (
            <figure key={i} className="relative overflow-hidden rounded-xl shadow-lg group">
              <div className="aspect-[4/3]">
                <OptimizedImage
                  src={photo.src}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  size="medium"
                />
              </div>
              {photo.caption && (
                <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {photo.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
```

**Photo infrastructure note:** Gallery `photos` arrays should be easy to update — just swap `src` values when new photographer photos arrive. The `OptimizedImage` component handles format/size optimization automatically.

### Anti-Patterns to Avoid
- **Over-stuffing experience language:** Adding experience claims to every paragraph makes content feel promotional rather than authoritative. Limit to 1-2 natural placements per page.
- **Fake specificity:** Claiming "We've completed 47 commercial roofing projects in Clearwater" when the number isn't verified. Use general but honest language ("hundreds of projects across Tampa Bay") unless specific claims are verifiable from BUSINESS_INFO constants.
- **Duplicating schema author data:** The CONTEXT explicitly says no author schema. The existing `ArticleSchema` already uses Organization type, which is correct. Do NOT add Person schema.
- **CGC vs CBC confusion:** FCS holds CBC (Certified Building Contractor), NOT CGC (Certified General Contractor). Phase 3 corrected this. Any new code references must use "CBC" and "Certified Building Contractor."

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Image optimization | Custom image pipeline | `OptimizedImage` component | Already handles avif/webp/jpg with srcset, alt text from image-map.json |
| Inline content images | Raw `<img>` or custom wrappers | `ContentImage` component | Already supports left/right/center/full positioning with captions |
| Parallax breaks | Custom scroll-based parallax | `ContentParallax` component | Already used on location pages, tested in production |
| Schema markup | Custom JSON-LD generation | Existing `ArticleSchema`, `LocalBusinessSchema` | Already correct Organization author type, includes CBC credential |

## Common Pitfalls

### Pitfall 1: Inconsistent Founding Date
**What goes wrong:** Some pages say "Since 1982", others "Since 1983", some "40+ years", some "four decades."
**Why it happens:** The codebase has `foundingDate: "1982"` in constants.ts but location pages built in Phase 5 use "Since 1983" in trust badges.
**How to avoid:** Standardize on `BUSINESS_INFO.foundingDate` ("1982") for all new content. Use "40+ years" or "Since 1982" consistently. Note: The hero badge on `commercial-construction-tampa` says "Since 1983" — this should be audited but is out of Phase 6 scope unless we're touching that page anyway.
**Warning signs:** grep for "1983" across the codebase before finalizing.

### Pitfall 2: CGC/CBC License Type Error
**What goes wrong:** Referencing FCS as having a CGC (Certified General Contractor) license instead of CBC (Certified Building Contractor).
**Why it happens:** Some older article content (pre-Phase 3) still says "CGC" or "General Contractor license."
**How to avoid:** Phase 3 corrected FCS self-references. Any new code reference content must use "CBC" and "Certified Building Contractor." The license number is `CBC1262722`.
**Warning signs:** grep for "CGC" on any page we're editing.

### Pitfall 3: Stale External Links
**What goes wrong:** Linking to specific Florida statute sections or building department pages that have moved.
**Why it happens:** Government websites reorganize frequently.
**How to avoid:** Use stable URL patterns. For Florida statutes, use `leg.state.fl.us/statutes/` with full section paths. For DBPR, use `myfloridalicense.com`. For building departments, use the main department URL (e.g., `tampa.gov/building-services`) rather than deep-linked subpages. Always add `target="_blank" rel="noopener noreferrer"`.
**Warning signs:** Any link that includes query parameters or session IDs.

### Pitfall 4: Over-scoping Article Edits
**What goes wrong:** Rewriting entire articles when the goal is just adding 1-2 experience sentences and a byline.
**Why it happens:** Once you open a 300-line page file, it's tempting to improve everything.
**How to avoid:** Phase 6 is a LAYER operation, not a rewrite. For each article: (1) add byline import + component, (2) add 1-2 experience sentences in natural locations, (3) move on. Keep edits surgical.
**Warning signs:** If a page edit touches more than 15-20 lines, it's probably doing too much.

### Pitfall 5: Missing Image Fallback
**What goes wrong:** Adding a gallery to a service page but having no relevant photos for that service type.
**Why it happens:** The 248 images are not evenly distributed across all service types.
**How to avoid:** Per the locked decision, "Fall back to existing optimized site images rather than leaving gaps." Use `image-map.json` tags to find best-match images. Construction-planning, safety-equipment, and commercial-building tagged images work as general fallbacks.
**Warning signs:** A gallery section with only 1-2 photos looks worse than no gallery.

## Page Inventory and Scope

### By Page Type

| Category | Count | Byline | Experience Language | Code References | Gallery/Photos |
|----------|-------|--------|---------------------|-----------------|----------------|
| Guide articles (commercial) | 191 | YES | YES (1-2 sentences) | Discretion per article | No (too many) |
| Guide articles (insurance) | 46 | YES | YES (1-2 sentences) | Discretion per article | No |
| Guide articles (residential) | 25 | YES | YES (1-2 sentences) | Discretion per article | No |
| Standalone article pages | ~33 | YES | YES (1-2 sentences) | Where technical | No |
| Service hub pages | 9 | No | YES | YES | YES (gallery sections) |
| Sub-service pages | 11 | No | YES | YES | Inline photos |
| Location pages (service+city) | 105 | No | YES | Discretion (Phase 5 may cover) | Inline photos |
| Location hub pages | 10 | No | YES | No | No |
| Standalone pages (about, contact, etc.) | ~12 | No | YES (where natural) | No | No |
| **Total** | **~427** | **~295** | **~427** | **~30-50** | **~20-30** |

### Article Pages Needing Byline (~295 total)
- 191 commercial guides (`/commercial/guides/*`)
- 46 insurance guides (`/insurance/guides/*`)
- 25 residential guides (`/residential/guides/*`)
- ~33 standalone article pages at top level

### Technical Pages for Code References (~30-50 pages)
- Service hub pages: balcony-reconstruction, condo-remediation, disaster-recovery, exterior-waterproofing, historic-restoration
- Sub-service pages: services/commercial/*, services/residential/hurricane-resistant-construction
- SB4-D specific pages (already have statute links)
- Location pages for condo-remediation, balcony-reconstruction, disaster-recovery (structural/code-heavy)
- Select guide articles on building codes, permits, contractor licensing

### Pages for Gallery/Photo Sections (~20-30 pages)
- 9 service hub pages (dedicated "Our Work" gallery)
- Select sub-service pages (inline project photos)
- Location pages for Tampa (flagship — most photos available)

## Key External Reference URLs

### Florida Building Code
| Resource | URL | Use For |
|----------|-----|---------|
| Florida Building Code official | https://www.floridabuilding.org/ | General FBC reference |
| FBC Online (8th Edition, current) | https://www.floridabuilding.org/bc/bc_default.aspx | Specific code sections |
| 8th Edition (2023) — current active code | Effective Jan 1, 2024 | Wind loads, structural, hurricane provisions |

### Florida Statutes
| Statute | URL | Use For |
|---------|-----|---------|
| F.S. 553.899 — Milestone Inspections | https://www.leg.state.fl.us/Statutes/index.cfm?App_mode=Display_Statute&URL=0500-0599/0553/Sections/0553.899.html | SB4-D, condo inspections |
| F.S. 718.112 — Condo Reserve Requirements | https://www.leg.state.fl.us/Statutes/index.cfm?App_mode=Display_Statute&URL=0700-0799/0718/Sections/0718.112.html | SIRS, reserve funding |
| F.S. 718.113 — Maintenance & Repair | https://www.leg.state.fl.us/Statutes/index.cfm?App_mode=Display_Statute&URL=0700-0799/0718/Sections/0718.113.html | Condo association duties |
| F.S. 489.113 — Contractor Qualifications | http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&Search_String=&URL=0400-0499/0489/Sections/0489.113.html | CBC license requirements |
| Chapter 489 (full) | https://www.flsenate.gov/Laws/Statutes/2021/Chapter489/All | Construction industry regulation |

### DBPR / License Verification
| Resource | URL | Use For |
|----------|-----|---------|
| MyFloridaLicense.com | https://www.myfloridalicense.com/ | License verification portal |
| DBPR License Search | https://www.myfloridalicense.com/wl11.asp?mode=2&search=Name&SID=&brd=&typ= | Search by name or license number |
| DBPR Condo Portal | https://www.myfloridalicense.com/condos-timeshares-mobile-homes/ | Condo milestone inspection reporting |

### Building Departments (already used in Phase 5 location pages)
| Department | URL | Cities |
|------------|-----|--------|
| City of Tampa Building Services | https://www.tampa.gov/building-services | Tampa |
| Hillsborough County | https://www.hillsboroughcounty.org/en/residents/property-owners-and-renters/building-and-construction | Brandon, Ruskin (unincorporated) |
| City of St. Petersburg | https://www.stpete.org/departments/development-services | St. Petersburg |
| City of Clearwater | https://www.myclearwater.com/government/city-departments/planning-and-development | Clearwater |
| City of Lakeland | https://www.lakelandgov.net/departments/community-development/building-inspections/ | Lakeland |
| City of Sarasota | https://www.sarasotafl.gov/government/building | Sarasota |
| City of Bradenton | https://www.bradentonfl.gov/202/Building | Bradenton |

## Code Examples

### Adding Byline to an Article Page

Current pattern (no byline):
```tsx
<h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
  Commercial Roofing Services in Tampa
</h1>
<p className="text-xl text-gray-200 mb-8">Description text...</p>
```

After adding byline:
```tsx
import { AuthorByline } from "@/components/AuthorByline";
// ...
<h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
  Commercial Roofing Services in Tampa
</h1>
<AuthorByline publishDate="2024-01-01" />
<p className="text-xl text-gray-200 mb-8">Description text...</p>
```

### Adding Experience Language to Intro

Current:
```tsx
<p className="text-xl text-gray-200 mb-8">
  From the office towers lining the Westshore Business District to the medical campuses...
</p>
```

After (1-2 experience sentences woven in):
```tsx
<p className="text-xl text-gray-200 mb-8">
  From the office towers lining the Westshore Business District to the medical campuses
  expanding near Tampa General Hospital, Florida Construction Specialists delivers commercial
  construction across every sector of Tampa's economy. Since 1982, our CBC-licensed team has
  managed projects from half a million to twenty-five million dollars, with in-house engineering
  that keeps design and execution under one roof.
</p>
```

### Adding Inline Code Reference

```tsx
import { CodeReference } from "@/components/CodeReference";
// ...
<p>Balcony reconstruction in Tampa must comply with current structural requirements...</p>
<CodeReference
  code="Florida Statutes"
  section="F.S. 553.899 — Mandatory Structural Inspections"
  description="Requires milestone structural inspections for condominium and cooperative buildings that are three stories or taller, at 25 years after initial certificate of occupancy and every 10 years thereafter."
  link="https://www.leg.state.fl.us/Statutes/index.cfm?App_mode=Display_Statute&URL=0500-0599/0553/Sections/0553.899.html"
  linkText="View Full Statute"
/>
```

### Adding Project Gallery to Service Page

```tsx
import { ProjectGallery } from "@/components/ProjectGallery";
// ...
<ProjectGallery
  title="Recent Commercial Projects"
  subtitle="A selection of our commercial construction work across Tampa Bay"
  photos={[
    { src: "/wp-content/uploads/2024/01/1.3.jpg", caption: "Commercial building project planning" },
    { src: "/wp-content/uploads/2024/01/2.1.jpg", caption: "Multi-story commercial construction" },
    { src: "/wp-content/uploads/2024/01/3.3.jpg", caption: "Completed commercial facility" },
  ]}
  columns={3}
/>
```

## Discretion Recommendations

### Experience Language Specificity
**Recommendation:** Use verifiable claims pulled from `BUSINESS_INFO` constants where possible, general company-level language elsewhere.

**Verifiable claims to use freely:**
- "Since 1982" (from `foundingDate`)
- "CBC license CBC1262722" (from `licenseNumber`)
- "300+ completed projects" (from `projectsCompleted`)
- "In-house engineer" (from `inHouseEngineer`)
- "In-house architectural draftsman" (from `inHouseArchitecturalDraftsman`)
- "$500K to $25M+ projects" (from `projectValueRange`)

**General claims (safe but less specific):**
- "Our team has managed hundreds of projects across Tampa Bay"
- "With over four decades of Florida construction experience"
- "Our in-house engineering team provides structural analysis"

### Per-Article Voice Choice
**Recommendation:** Default to company-level voice for most articles. Use topic-specific voice only when the article covers a narrow technical topic where FCS has demonstrable domain expertise (e.g., SB4-D compliance, hurricane-resistant construction, certified estimates).

### Phase 4-5 Page Overlap
**Recommendation:** YES, audit Phase 4-5 pages for experience language. Many location pages from Phase 5 already have trust badges ("Since 1983", license number) but may lack explicit first-person experience language in prose. Add where missing, skip where already strong. The auditing burden is low since we're just scanning intros and CTAs.

### Code Reference Format per Instance
**Recommendation:**
- **Inline mentions:** When referencing a code in passing within existing text (e.g., "...must meet Florida Building Code wind load requirements"). No component needed.
- **Callout boxes:** When giving specific statute numbers, section references, or linking to official sources. Use the `CodeReference` component.
- **Threshold:** If the reference includes a specific statute number or section, use a callout. If it's a general reference to "building codes" or "permit requirements," keep inline.

### Location Pages Beyond Phase 5
**Recommendation:** Most Phase 5 location pages already reference building departments with name + link callout cards. Add `CodeReference` callouts only to pages covering SB4-D-related services (condo-remediation, balcony-reconstruction) and disaster-recovery pages where hurricane code references strengthen authority. Skip adding code references to luxury-custom-homes, exterior-waterproofing, and insurance-restoration location pages unless natural.

## Image Inventory for Photo Sections

### Available Images by Topic (from image-map.json tags)
| Tag | Count | Best For |
|-----|-------|----------|
| completed-project | 42 | Gallery sections on service pages |
| commercial-construction | 30 | Commercial hub and location pages |
| commercial-building | 15 | Commercial service pages |
| new-construction | 15 | General service galleries |
| construction-progress | 13 | Inline "in-progress" photos |
| modern-architecture | 14 | Luxury/custom home pages |
| luxury-home | 11 | Residential service pages |
| storm-damage | 21 | Disaster recovery, insurance pages |
| construction-planning | 11 | General inline photos |
| residential-roofing | 56 | Residential-related pages |
| hero-image | 15 | Already in use for heroes |

### Image Usage Readiness
- **Gallery-suitable:** 195 images (useCases.gallery = true)
- **Inline-suitable:** 204 images (useCases.inline = true)
- **Hero-suitable:** 109 images (useCases.hero = true)
- **Total images:** 248

### Gallery Assignment Strategy
Service hub pages should get 3-6 photos each. Use `image-map.json` tags to match:
- `commercial` hub: commercial-construction, commercial-building, completed-project tags
- `balcony-reconstruction` hub: balcony-related, structural tags (may be limited)
- `disaster-recovery` hub: storm-damage, emergency tags
- `luxury-custom-homes` hub: luxury-home, modern-architecture tags
- When tags don't provide enough matches, use general completed-project and construction-progress images as fallbacks.

## Batch Organization

### Recommended Execution Order

1. **Create components** (AuthorByline, CodeReference, ProjectGallery) — foundation for all other work
2. **Service hub pages** (9 pages) — highest-impact pages, get gallery + experience language + code references
3. **Sub-service pages** (11 pages) — code references + experience language
4. **Guide articles by silo** (262 pages) — byline + experience language, organized by silo for consistency
5. **Standalone article pages** (~33 pages) — byline + experience language
6. **Location pages** (105 pages) — experience language audit + selective code references + inline photos
7. **Location hub pages + remaining pages** (22 pages) — experience language only

### Estimated Scale
- ~3 new components to create
- ~295 pages need byline added (import + component insertion)
- ~427 pages need experience language audit (many already have it — estimate ~150-200 actually need additions)
- ~30-50 pages need code reference additions
- ~20-30 pages need gallery or inline photo sections

## Open Questions

1. **Byline color in hero sections:** Many article heroes have white text on dark backgrounds. The byline component needs to handle both light-on-dark (hero) and dark-on-light (body) contexts. Recommendation: Accept an optional `variant="light" | "dark"` prop.

2. **Experience language overlap with "20+ years" claims:** Some older article CTAs reference "20+ years" while constants say "40+ years." This inconsistency predates Phase 6 but will be visible during editing. Recommendation: Correct to "40+ years" whenever touching a page.

3. **Photo captions:** Should gallery captions reference specific cities/projects, or stay generic? Recommendation: Generic captions for now ("Recent commercial construction project in Tampa Bay") since we don't have verified project-to-photo mapping. Photographer photos will have better provenance.

## Sources

### Primary (HIGH confidence)
- Codebase analysis: `components/Schema.tsx` — ArticleSchema already uses Organization type for author
- Codebase analysis: `components/OptimizedImage.tsx`, `components/ContentImage.tsx` — existing image infrastructure
- Codebase analysis: `lib/constants.ts` — foundingDate "1982", licenseNumber "CBC1262722", all company data
- Codebase analysis: `lib/image-map.json` — 248 images with tags, useCases, and optimized paths
- Codebase analysis: `app/insurance/guides/sb-4-d-compliance-tampa-bay-condos/page.tsx` — existing statute link pattern
- Codebase analysis: 15+ pages using `border-l-4` callout pattern for code/info boxes

### Secondary (MEDIUM confidence)
- Florida Building Code: https://www.floridabuilding.org/ — 8th Edition (2023) currently active, 9th Edition (2026) in development
- DBPR License Lookup: https://www.myfloridalicense.com/ — verified as active portal for contractor license verification
- Florida Statutes: https://www.leg.state.fl.us/statutes/ — confirmed URL structure for F.S. 489.113, 553.899, 718.112, 718.113
- Google E-E-A-T guidelines: https://developers.google.com/search/docs/fundamentals/creating-helpful-content — official Google documentation on helpful content

### Tertiary (LOW confidence)
- Building department URLs may change without notice. Verified as of 2026-02-18 via codebase (Phase 5 used these).

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH — no new dependencies, all components leverage existing patterns
- Architecture: HIGH — clear component patterns, well-defined page categories
- Pitfalls: HIGH — identified from actual codebase inconsistencies (1982 vs 1983, CGC vs CBC)
- External URLs: MEDIUM — government URLs verified but subject to change
- Image availability: HIGH — 248 images with metadata in image-map.json, tags for topic matching

**Research date:** 2026-02-18
**Valid until:** 2026-03-18 (stable — no moving technology targets)
