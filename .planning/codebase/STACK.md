# Technology Stack

**Analysis Date:** 2026-02-15

## Languages

**Primary:**
- TypeScript 5.7.2 - All application code, configuration files, components
- CSS/TailwindCSS 3.4.17 - Styling system, component design
- JavaScript (via Next.js/React) - Runtime for client and server code

**Secondary:**
- HTML5 - Page structure, semantic markup, Schema.org JSON-LD

## Runtime

**Environment:**
- Node.js 20 (specified in `netlify.toml`)
- Browser: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+ (standard modern browser support)

**Package Manager:**
- npm (workspace package manager)
- Lockfile: `package-lock.json` present (1.2MB)

## Frameworks

**Core:**
- Next.js 15.5.11 - Full-stack React framework with App Router (static export mode)
- React 19.0.0 - Component library and UI rendering
- Framer Motion 12.23.24 - Animation library for page transitions and interactive effects

**UI Components:**
- Radix UI (multiple packages):
  - `@radix-ui/react-accordion` 1.2.12 - Accessible accordion component
  - `@radix-ui/react-tabs` 1.1.13 - Accessible tabs component
  - `@radix-ui/react-slot` 1.2.3 - Primitives for composition
- Lucide React 0.546.0 - Icon library (486+ icons)
- Class Variance Authority 0.7.1 - CSS class generation for variants
- Tailwind Merge 3.3.1 - Smart class merging for Tailwind CSS

**Styling:**
- Tailwind CSS 3.4.17 - Utility-first CSS framework
- PostCSS 8.4.49 - CSS processor
- Autoprefixer 10.4.20 - Vendor prefix injection
- Tailwindcss Animate 1.0.7 - Animation utility plugins

**Testing/Build:**
- Cheerio 1.1.2 - jQuery-like syntax for DOM parsing (used in verification scripts)
- Chromium 3.0.3 - Headless browser for screenshot/PDF testing
- Netlify Plugin Cache 1.0.3 - Build artifact caching on Netlify

## Key Dependencies

**Critical:**
- Next.js 15.5.11 - Why: Core framework enabling static site generation and routing
- React 19.0.0 - Why: Component rendering engine and hooks
- Tailwind CSS 3.4.17 - Why: Centralized styling system with brand theme
- Framer Motion 12.23.24 - Why: Smooth animations and interaction patterns

**Infrastructure:**
- TypeScript 5.7.2 - Type safety and developer experience
- Radix UI packages - Accessible component primitives
- Lucide React - Consistent icon system across site

## Configuration

**Environment:**
- Static export (`output: "export"` in `next.config.ts`)
- Trailing slashes enabled (`trailingSlash: true`)
- Image optimization disabled (`images.unoptimized: true`) - Required for static export
- Node.js memory: 8GB (default build), 16GB (large build via `npm run build:large`)

**Build:**
- Main build config: `next.config.ts` (15 lines, minimal configuration)
- PostCSS: `postcss.config.mjs` (autoprefixer + tailwindcss plugins)
- TypeScript: `tsconfig.json` (ES2017 target, strict mode enabled)
- Tailwind: `tailwind.config.ts` (extends theme from `lib/theme.ts`)

**Environment Variables:**
- Google Analytics ID: G-SF1MH0NQ35 (hardcoded in `app/layout.tsx`)
- Google Maps API Key: AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8 (hardcoded in `components/GoogleMap.tsx`)
- LeadConnector/HighLevel Widget ID: 696e669e9ec201ee9889bf3f (hardcoded in `components/ChatWidget.tsx`)
- TrustBasedSEO Form IDs: k8jDErhdZoQHf3eBLCoU (residential), qTTguTVsvCK4pIPN1Z35 (commercial)

**Note:** All external service keys are currently embedded in code. No `.env` file detected.

## Platform Requirements

**Development:**
- Node.js 20+
- npm 10+
- TypeScript 5.7.2+
- 8GB RAM minimum (16GB for `npm run build:large`)
- macOS/Linux/Windows with bash or zsh shell

**Production:**
- Netlify deployment platform
- Static hosting (serves pre-built `out/` directory)
- CDN support for caching headers on `/_next/static/*`, `/wp-content/*`, `/*.js`, `/*.css`
- 301 redirect support via `netlify.toml`

---

*Stack analysis: 2026-02-15*
