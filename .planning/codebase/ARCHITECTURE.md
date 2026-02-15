# Architecture

**Analysis Date:** 2026-02-15

## Pattern Overview

**Overall:** Hub-and-Spoke Topical Silo Architecture with Static Export

**Key Characteristics:**
- Next.js 15 App Router with static HTML export (no server rendering)
- Dual-silo content strategy: Commercial (B2B) and Residential (Design/Build)
- SEO-optimized topical maps with interconnected content clusters
- Service location matrix (multi-tenant, disaster recovery, historic restoration, design/build homes)
- Centralized business data (constants, image mappings, schema templates)
- Component-driven UI with Tailwind CSS and Framer Motion animations

## Layers

**Presentation Layer:**
- Purpose: React components for rendering pages and UI elements
- Location: `components/` (27 components), `components/ui/` (Radix UI accordion)
- Contains: Page layouts, forms, animations, schema renderers, tracking components
- Depends on: `lib/constants.ts`, `lib/imageMapping.ts`, `lib/theme.ts`, Next.js Image
- Used by: All `app/*/page.tsx` files

**Data & Configuration Layer:**
- Purpose: Centralized business information, image mappings, content relationships
- Location: `lib/constants.ts`, `lib/imageMapping.ts`, `lib/topicalMap.json`, `lib/articleSilos.ts`
- Contains: Business info (phone, address, coordinates), service definitions, image paths, theme configuration
- Depends on: None (foundational)
- Used by: Presentation layer components, page files

**Routing & Page Layer:**
- Purpose: Next.js App Router pages for each content route
- Location: `app/` (454 directories, each with `page.tsx` and optional layout files)
- Contains: Hub pages (`/commercial/`, `/residential/`, `/about/`, etc.), service pages, topical content
- Depends on: Presentation layer, data layer
- Used by: Next.js Router for SSG/static export

**Schema & SEO Layer:**
- Purpose: Structured data (JSON-LD) for search engines and social sharing
- Location: `components/Schema.tsx` (renders LocalBusiness, Organization, Service, FAQ, Breadcrumb, Testimonial schemas)
- Contains: Schema generators that emit JSON-LD into page `<head>`
- Depends on: `lib/constants.ts` for business info
- Used by: All pages via `app/layout.tsx` and individual page files

**Analytics & Tracking Layer:**
- Purpose: User interaction tracking and phone click attribution
- Location: `components/PhoneTrackingProvider.tsx`, `components/PhoneClickTracker.tsx`, GA4 script in `app/layout.tsx`
- Contains: GTM tracking, phone click event logging, context provider
- Depends on: React Context, gtag function from Google Tag Manager
- Used by: Layout wrapper, phone links throughout site

## Data Flow

**Page Render Flow:**

1. Browser requests `/service-name/` → Next.js static export serves pre-built HTML
2. `app/layout.tsx` loads globally (fonts, GA4, schema templates, header/footer)
3. Specific `app/[slug]/page.tsx` renders:
   - Fetches metadata from constants and data files
   - Imports components (Hero, Content sections, FAQ, Internal Links, CTA)
   - Renders schema markup (`LocalBusinessSchema`, `BreadcrumbSchema`, `FAQSchema`)
   - Includes tracking (phone click provider, GA4)
4. Components render with data from `lib/constants.ts` and prop drilling
5. Images resolved through `OptimizedImage` component which maps paths via `lib/imageMapping.ts`
6. Static HTML file written to `out/[slug]/index.html` during build

**State Management:**
- **Global:** React Context via `PhoneTrackingProvider` for phone tracking state
- **Page:** Local component state for animations, form inputs, hero slideshow (e.g., `useState` in `app/page.tsx`)
- **Build-time:** Topical map (`lib/topicalMap.json`) and article silos (`lib/articleSilos.ts`) define content relationships
- **No runtime state management:** Vercel's SWR, Redux, etc. not used (static site)

## Key Abstractions

**Page Template Pattern:**
- Purpose: Consistent structure across 454+ pages (hero, content blocks, FAQ, internal links, CTA)
- Examples: `app/commercial-property-damage-restoration-in-tampa/page.tsx`, `app/about/page.tsx`, `app/page.tsx`
- Pattern: Each page imports schema components, declares metadata, renders consistent section layout with Hero → Content → FAQ → InternalLinks → CTA

**Component Composition:**
- Purpose: Reusable, composable UI blocks (Header, Footer, ContactForm, ParallaxSection, etc.)
- Examples:
  - `components/Header.tsx` - Navigation and brand (shared across all pages)
  - `components/ParallaxSection.tsx` + `ParallaxCardsContainer.tsx` - Content sections with parallax background
  - `components/OptimizedImage.tsx` - Image rendering with path mapping and optimization
  - `components/HighLevelForm.tsx` - Third-party form embed (GHL CRM integration)
- Pattern: Functional components with TypeScript props, no internal data fetching

**Image Optimization Layer:**
- Purpose: Map old WordPress paths to optimized WebP/AVIF images
- Examples: `components/OptimizedImage.tsx`, `lib/imageMapping.ts`
- Pattern: Component accepts `/wp-content/...` path, maps to `/images/[optimized-name]/[variant].webp` via lookup table

**Schema Template Pattern:**
- Purpose: Centralized JSON-LD schema generation
- Examples:
  - `LocalBusinessSchema()` - Same business info on every page (address, phone, hours, geo coords)
  - `FAQSchema(faqs)` - FAQ array → FAQPage schema
  - `BreadcrumbSchema(items)` - Breadcrumb navigation → BreadcrumbList schema
- Pattern: Pure functions that return `<script type="application/ld+json">` elements

**Content Silo Pattern (SEO):**
- Purpose: Organize content by topic and service area for search engine relevance
- Examples: `lib/topicalMap.json` defines `commercial` silo with clusters (medical, industrial, historic, condo remediation, etc.)
- Pattern: Each silo has hub page (`/commercial/`, `/residential/`) that links to related clusters; clusters link to individual topic pages

## Entry Points

**Home Page:**
- Location: `app/page.tsx`
- Triggers: Browser visits `/` or domain root
- Responsibilities: Dual-funnel gateway (commercial vs. residential pathways), testimonials, featured projects, trust signals, hero slideshow, final CTA

**Commercial Hub:**
- Location: `app/commercial/page.tsx` (if exists, or managed via folder structure)
- Triggers: User selects "Commercial Pathway" or visits `/commercial/`
- Responsibilities: Hub page for commercial services, lists service clusters (medical, industrial, historic restoration, condo remediation)

**Residential Hub:**
- Location: `app/residential/page.tsx`
- Triggers: User selects "Design/Build Pathway" or visits `/residential/`
- Responsibilities: Hub page for residential/design-build services, highlights luxury custom homes, preservation, compliance

**Service Detail Pages:**
- Location: `app/[service-name]/page.tsx` (e.g., `app/commercial-property-damage-restoration-in-tampa/page.tsx`)
- Triggers: Direct URL visit or internal link from hub
- Responsibilities: Service-specific content (hero, problem/solution, process, FAQ, related services, CTA)

**Root Layout:**
- Location: `app/layout.tsx`
- Triggers: Every page load
- Responsibilities: Font loading (next/font), GA4 initialization, schema rendering, header/footer injection, phone tracking provider, sticky mobile CTA

## Error Handling

**Strategy:** Graceful degradation with fallback UI

**Patterns:**
- Images: `OptimizedImage` falls back to `/images/` path if mapping not found; no error thrown
- Forms: `HighLevelForm` embeds third-party iframe; if load fails, CTA button still clickable
- Schema: If data missing (e.g., business hours), schema field omitted, page still renders
- Phone Tracking: If GA4 not loaded, phone clicks still work (just not tracked)
- Build Errors: TypeScript strict mode catches type mismatches; missing image paths cause build warnings but not failures

## Cross-Cutting Concerns

**Logging:**
- GA4 event tracking via gtag() in `PhoneClickTracker.tsx`
- Console logs in development via Next.js dev server
- No server-side logging (static site)

**Validation:**
- TypeScript strict mode (`tsconfig.json`: `"strict": true`)
- Image path validation via `OptimizedImage` component
- Metadata validation during build (Next.js checks canonical URLs, titles, descriptions)

**Authentication:**
- Not applicable (public website, no user accounts)
- Phone tracking via GA4 identifies traffic source, not user identity

**Performance:**
- Static export: All pages pre-rendered at build time
- Image optimization: WebP/AVIF with fallback to JPG
- Code splitting: Next.js automatic per-page
- Font optimization: `next/font` with `display: "swap"` for zero FOUT
- Preload: LCP hero image preloaded in `app/layout.tsx`

---

*Architecture analysis: 2026-02-15*
