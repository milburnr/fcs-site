# Codebase Structure

**Analysis Date:** 2026-02-15

## Directory Layout

```
fcs-final/
├── app/                        # Next.js 15 App Router pages (454 routes)
│   ├── layout.tsx              # Root layout (fonts, GA4, Header, Footer)
│   ├── page.tsx                # Home page (dual-funnel gateway)
│   ├── globals.css             # Component classes (@layer components)
│   ├── commercial/             # Commercial hub and sub-routes
│   ├── residential/            # Residential hub and sub-routes
│   ├── about/                  # About page
│   ├── contact/                # Contact page
│   └── [service-slug]/         # 454+ individual service/topic pages
│
├── components/                 # React components (27 total)
│   ├── Header.tsx              # Navigation and branding
│   ├── Footer.tsx              # Footer with links and info
│   ├── Schema.tsx              # JSON-LD schema renderers
│   ├── OptimizedImage.tsx      # Image optimization with path mapping
│   ├── ParallaxSection.tsx     # Parallax background sections
│   ├── ContactForm.tsx         # Lead capture form
│   ├── HighLevelForm.tsx       # GHL CRM form embed (third-party)
│   ├── InternalLinks.tsx       # Related content navigation
│   ├── FAQ.tsx                 # FAQ accordion
│   ├── Testimonials.tsx        # Client testimonials
│   ├── PhoneClickTracker.tsx   # GA4 phone tracking
│   ├── Breadcrumb.tsx          # Navigation breadcrumbs
│   ├── StickyMobileCTA.tsx     # Mobile sticky CTA bar
│   ├── RelatedArticles.tsx     # Related content recommendations
│   ├── ContentImage.tsx        # Image with parallax effect
│   ├── AnimatedElements.tsx    # Animation utilities
│   ├── ui/                     # Radix UI components
│   │   └── accordion.tsx       # FAQ accordion (Radix)
│   └── [other 10+ components]
│
├── lib/                        # Configuration and data
│   ├── constants.ts            # Business info, services, testimonials (28KB)
│   ├── imageMapping.ts         # Image path mappings (80+ entries)
│   ├── image-map.json          # Large image metadata lookup (600KB)
│   ├── theme.ts                # Color theme (green/gold), fonts
│   ├── topicalMap.json         # Content silos and clusters (SEO structure)
│   ├── articleSilos.ts         # Article silo relationships
│   ├── serviceLocationContent.ts # Location-specific service content (70KB)
│   ├── locationData.ts         # City/location metadata
│   └── utils.ts                # Utility functions (cn() for class merging)
│
├── public/                     # Static assets
│   ├── images/                 # Optimized images (275+ folders, 600+ images)
│   │   ├── [topic-name]/       # Organized by content topic
│   │   ├── *.webp              # Primary format (AVIF available too)
│   │   └── *.jpg               # Fallback format
│   ├── wp-content/             # Legacy WordPress image paths (preserved)
│   ├── sitemap.xml             # Generated sitemap (268+ pages)
│   ├── robots.txt              # SEO robots directive
│   ├── favicon.png             # Site icon
│   └── logo.jpg                # Brand logo
│
├── scripts/                    # Build and automation scripts (20+ total)
│   ├── gap-analysis.js         # Content gap detection
│   ├── verify-build.js         # Build validation
│   ├── verify-silos.js         # Silo structure validation
│   ├── generate-sitemap.js     # Sitemap generation
│   ├── add-schema-to-pages.js  # Batch schema injection
│   ├── add-breadcrumbs.js      # Breadcrumb injection
│   ├── add-internal-links.js   # Internal link generation
│   └── [other 13+ scripts]
│
├── seo/                        # SEO audit and analysis
│   ├── seo-audit.js            # SEO analysis tool
│   ├── seo-audit-results.json  # Audit results (1.3MB)
│   └── [audit files]
│
├── out/                        # Static export output (git ignored)
│   └── [built HTML/CSS/JS]
│
├── .next/                      # Next.js build cache (git ignored)
│
├── netlify.toml                # Netlify deployment config (20KB)
├── next.config.ts              # Next.js configuration (static export)
├── tailwind.config.ts          # Tailwind CSS config with theme overrides
├── tsconfig.json               # TypeScript compiler options (strict mode)
├── package.json                # Dependencies (Next.js 15, Tailwind, Framer Motion)
├── package-lock.json           # Dependency lock file
│
└── .planning/codebase/         # GSD documentation (this file location)
    ├── ARCHITECTURE.md
    ├── STRUCTURE.md
    └── [other GSD docs]
```

## Directory Purposes

**app/**
- Purpose: Next.js App Router pages, routes, and layouts
- Contains: 454 page files (one `page.tsx` per route), layout wrappers
- Key files: `layout.tsx` (root layout with Header/Footer), `page.tsx` (home page)
- Structure: Flat directory per route (Next.js convention) - `/app/service-name/page.tsx` → `/service-name/`

**components/**
- Purpose: Reusable React components shared across pages
- Contains: Page templates (Header, Footer), UI elements (buttons, forms, cards), animations (ParallaxSection), tracking (PhoneClickTracker), schema (Schema.tsx)
- Key files:
  - `Header.tsx` - Navigation (includes logo, service menu, contact button)
  - `OptimizedImage.tsx` - Image rendering with path mapping to optimized assets
  - `ParallaxSection.tsx` - Animated section backgrounds
  - `ContactForm.tsx` - Multi-service contact form with validation
  - `HighLevelForm.tsx` - Embedded GHL CRM iframe for lead capture
- Structure: Flat (no subdirectories except `ui/` for Radix components)

**lib/**
- Purpose: Constants, configuration, and data layer
- Contains: Business info, service definitions, image mappings, theme colors, content structure
- Key files:
  - `constants.ts` - BUSINESS_INFO (phone, address, hours, services, testimonials, project stats)
  - `imageMapping.ts` - Maps content categories to optimized image paths (AI_IMAGES, SERVICE_HERO_IMAGES)
  - `theme.ts` - Brand colors (primary green, accent gold), font families
  - `topicalMap.json` - SEO content structure: commercial vs residential silos, content clusters, required pages
  - `articleSilos.ts` - Article category relationships for internal linking
- Usage: Imported by components and pages to get business data, styling, content relationships

**public/**
- Purpose: Static assets served directly (not processed by Next.js build)
- Contains: Optimized images (WebP/AVIF), fallback JPGs, sitemap, robots.txt, favicon
- Key subdirectories:
  - `images/` - 275+ folders organized by content topic (e.g., `/images/tampa-medical-facility-construction/`, `/images/custom-home-construction-2/`)
  - `wp-content/` - Legacy paths preserved for backward compatibility
- Files served at: `/images/[path]`, `/sitemap.xml`, `/robots.txt`, `/favicon.png`

**scripts/**
- Purpose: Build-time automation and validation
- Contains: Content gap analysis, sitemap generation, schema injection, breadcrumb generation, internal link creation, build verification
- Key scripts:
  - `gap-analysis.js` - Finds missing content nodes required by topical map
  - `verify-build.js` - Validates successful build, checks page counts
  - `verify-silos.js` - Validates that silos are properly interconnected
  - `generate-sitemap.js` - Creates `public/sitemap.xml` with all 454+ pages
- Run via: `npm run gap-analysis`, `npm run test:build`, `npm run test:silos`

**seo/**
- Purpose: SEO analysis and audit results
- Contains: Audit tool, results from latest SEO analysis, schema validation reports
- Files: `seo-audit.js` (analysis tool), `seo-audit-results.json` (1.3MB report)

**out/**
- Purpose: Static export output (production-ready HTML)
- Contents: Pre-built HTML, CSS, JavaScript for all 454+ pages
- Git: Ignored (generated during build)
- Deploy: Entire `out/` folder pushed to Netlify

**.next/**
- Purpose: Next.js build cache
- Git: Ignored
- Note: Can be safely deleted, will be regenerated on next build

## Key File Locations

**Entry Points:**
- `app/layout.tsx` - Root layout (fonts, GA4, Header/Footer, schema)
- `app/page.tsx` - Home page (hero slideshow, dual-funnel gateway, testimonials, featured projects)
- `netlify.toml` - Deployment configuration (base directory, build command, redirects)

**Configuration:**
- `next.config.ts` - Next.js config (static export, unoptimized images, trailing slashes)
- `tsconfig.json` - TypeScript strict mode, path aliases (`@/*` → root)
- `tailwind.config.ts` - Tailwind with theme overrides (brand colors, fonts)
- `package.json` - Dependencies and build scripts
- `lib/constants.ts` - Business info, services, testimonials (centralized data)
- `lib/theme.ts` - Brand colors, fonts, styling constants

**Core Logic:**
- `lib/imageMapping.ts` - Maps content categories to optimized images (80+ image entries)
- `lib/topicalMap.json` - SEO content structure (commercial/residential silos, clusters, required pages)
- `lib/articleSilos.ts` - Article categories and relationships
- `components/OptimizedImage.tsx` - Image optimization with path mapping

**Styling:**
- `app/globals.css` - Component classes (@layer components) for buttons, cards, sections (314 lines)
- `lib/theme.ts` - Brand color definitions (primary green, accent gold, text colors)
- `tailwind.config.ts` - Tailwind theme extension with brand colors and fonts

**Testing & Validation:**
- `scripts/verify-build.js` - Validates build success, page count
- `scripts/verify-silos.js` - Validates silo interconnection
- `scripts/gap-analysis.js` - Identifies missing content pages

## Naming Conventions

**Files:**
- Pages: `page.tsx` in each route directory (Next.js requirement)
- Components: PascalCase (e.g., `Header.tsx`, `OptimizedImage.tsx`, `ParallaxSection.tsx`)
- Scripts: kebab-case (e.g., `gap-analysis.js`, `verify-build.js`, `add-schema-to-pages.js`)
- Data files: kebab-case JSON (e.g., `topicalMap.json`, `image-map.json`)
- Utilities: camelCase (e.g., `imageMapping.ts`, `serviceLocationContent.ts`)

**Directories:**
- Routes: kebab-case matching URL structure (e.g., `/commercial-property-damage-restoration-in-tampa/`)
- Component groups: Single-word or multi-word CamelCase for Radix UI (e.g., `ui/`)
- Data organization: Topical names for images (e.g., `/images/tampa-medical-facility-construction/`)

**Functions & Variables:**
- React components: PascalCase (e.g., `Header`, `OptimizedImage`)
- Constants: SCREAMING_SNAKE_CASE for true constants (e.g., `BUSINESS_INFO`, `SERVICES`)
- Exported objects: camelCase (e.g., `imageMapping`, `themeColors`)
- Props interfaces: ComponentNameProps (e.g., `HeaderProps`, `OptimizedImageProps`)

**TypeScript Types:**
- Page metadata: Imported from `next` as `Metadata`
- Schema types: Inline JSX.Element where schema is rendered
- Component props: Explicit interfaces (e.g., `interface ParallaxSectionProps { ... }`)

## Where to Add New Code

**New Service Page:**
1. Create directory: `/app/[service-slug]/`
2. Create file: `/app/[service-slug]/page.tsx`
3. Template:
   ```tsx
   import type { Metadata } from "next";
   import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema";

   export const metadata: Metadata = {
     title: "...",
     description: "...",
     alternates: { canonical: "https://floridaconstructionspecialists.com/[slug]/" }
   };

   export default function Page() {
     return (
       <>
         <LocalBusinessSchema />
         <BreadcrumbSchema items={[...]} />
         <FAQSchema faqs={[...]} />
         {/* Hero, Content sections, CTA */}
       </>
     );
   }
   ```
4. Add to `lib/topicalMap.json` required_nodes array for that cluster
5. Update `lib/constants.ts` SERVICES array if new service type

**New Component:**
1. Create file: `/components/[ComponentName].tsx`
2. Export as default function (or named export)
3. Define TypeScript interface for props
4. Example:
   ```tsx
   interface MyComponentProps {
     title: string;
     children: React.ReactNode;
   }

   export function MyComponent({ title, children }: MyComponentProps) {
     return <div>{/* component JSX */}</div>;
   }
   ```
5. Import in pages as needed: `import { MyComponent } from "@/components/MyComponent"`

**New Utility or Data:**
1. Create file in `lib/` with camelCase name
2. Export constants or functions
3. Example: `lib/newUtils.ts` → `export const helperFunction = () => { ... }`
4. Import in components: `import { helperFunction } from "@/lib/newUtils"`

**New Image Asset:**
1. Place optimized WebP/AVIF in `/public/images/[topic-name]/`
2. Add mapping to `lib/imageMapping.ts` (if category-mapped)
3. Or add to `lib/image-map.json` for manual lookup
4. Use in components via `OptimizedImage`:
   ```tsx
   <OptimizedImage
     src="/images/[topic]/[name].webp"
     alt="..."
   />
   ```

**New Script:**
1. Create file: `/scripts/[script-name].js`
2. Add to `package.json` scripts if executable
3. Use Node.js APIs (fs, path, cheerio for HTML parsing)
4. Example: `node scripts/my-script.js`

## Special Directories

**processed-heroes/**
- Purpose: Temporary storage for pre-processed hero images
- Generated: Yes (during image processing step)
- Committed: No (build artifact, git ignored)
- Use: Intermediate images before final optimization

**ai-images-staging/**
- Purpose: Staging area for AI-generated images before production
- Generated: Yes (via image processing tool)
- Committed: No (staging area, not for production)
- Use: Review and approval before moving to `public/images/`

**output/**
- Purpose: Build artifacts and temporary outputs
- Generated: Yes (during various script runs)
- Committed: No (git ignored)
- Use: Script outputs, analysis results

**.planning/codebase/**
- Purpose: GSD documentation (architecture, structure, conventions, testing, concerns)
- Generated: No (manually maintained)
- Committed: Yes (important for team knowledge)
- Use: Reference for developers and Claude instances working on the codebase

**fcs-plans/**
- Purpose: Project planning documents and task tracking
- Generated: Partially (some generated by tools)
- Committed: Yes (project records)
- Use: Implementation roadmaps, task lists, audit reports

---

*Structure analysis: 2026-02-15*
