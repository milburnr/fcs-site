# External Integrations

**Analysis Date:** 2026-02-15

## APIs & External Services

**Analytics & Tracking:**
- Google Analytics 4 (GA4) - Page views, events, user behavior
  - Measurement ID: G-SF1MH0NQ35
  - Implemented via Google Tag Manager script in `app/layout.tsx` (lines 72-83)
  - Phone click tracking via GA4 events (gtag calls in `components/PhoneClickTracker.tsx`)
  - Form view/submission tracking in `components/HighLevelForm.tsx`

**Lead Generation & CRM:**
- LeadConnector (formerly HighLevel) - Chat widget and form platform
  - Widget ID: 696e669e9ec201ee9889bf3f
  - Chat widget loads from `https://widgets.leadconnectorhq.com/loader.js`
  - Implementation: `components/ChatWidget.tsx` (lazy-loads on user interaction or 5s timeout)
  - Preconnected domain in `app/layout.tsx` (line 86)

**Forms & Surveys:**
- TrustBasedSEO (HighLevel Forms) - Embedded forms and surveys
  - Form embed script: `https://link.trustbasedseo.com/js/form_embed.js`
  - Residential form ID: k8jDErhdZoQHf3eBLCoU (Design Consultation Request)
  - Commercial form ID: qTTguTVsvCK4pIPN1Z35 (Commercial Project Survey)
  - Implementation: `components/HighLevelForm.tsx` with lazy-loading via IntersectionObserver
  - Two widget types: forms (residential) and surveys (commercial)
  - Preconnected domain in `app/layout.tsx` (line 87)

**Maps:**
- Google Maps Embed API - Location maps and directions
  - API Key: AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8
  - Implementation: `components/GoogleMap.tsx`
  - Features: City location maps, business location display, directions links
  - City coordinates hardcoded for 8 service areas (Tampa, Lakeland, Brandon, Plant City, Clearwater, St. Petersburg, Sarasota, Bradenton, Ruskin)

## Data Storage

**Databases:**
- Not applicable - Static site (no database required)
- Data sources: JSON configuration files only

**File Storage:**
- Local filesystem only - Image files in `/public/images/`
- Legacy WordPress paths mapped to optimized images via `image-page-mapping.json`
- Image metadata stored in `image-catalog.json` (21.8KB, 486 analyzed images)

**Caching:**
- Netlify Edge CDN - Caches static assets
  - `/_next/static/*` - Cached 1 year (immutable)
  - `/wp-content/*` - Cached 1 year (immutable)
  - `/*.js` - Cached 1 year (immutable)
  - `/*.css` - Cached 1 year (immutable)
- Browser cache headers via `netlify.toml` (lines 10-28)

## Authentication & Identity

**Auth Provider:**
- None required - Static public website
- No user accounts or authentication system

## Monitoring & Observability

**Error Tracking:**
- None detected - No Sentry, Datadog, or similar error tracking service

**Logs:**
- Netlify build logs only (build output capture)
- Browser console logs for debugging (development only)

**Performance Monitoring:**
- Google Analytics 4 (Core Web Vitals tracking)
- PageSpeed Insights integration (manual testing)

## CI/CD & Deployment

**Hosting:**
- Netlify - Static site hosting and deployment
- Base directory: `sites/fcs-final`
- Build command: `npm run build`
- Publish directory: `out/` (Next.js static export)
- Node version: 20 (specified in `netlify.toml`)

**CI Pipeline:**
- Git-triggered builds via Netlify (currently disabled due to monorepo webpack issues)
- Manual deployment recommended: `netlify deploy --prod --dir=out --no-build`

**Build Process:**
- Next.js static export (`output: "export"` in `next.config.ts`)
- Builds to `out/` directory with HTML, CSS, JS
- No server-side rendering

## Environment Configuration

**Required env vars:**
- None explicitly required (all configuration hardcoded in source)

**Secrets location:**
- API keys embedded in source code:
  - Google Analytics: `app/layout.tsx` line 73
  - Google Maps: `components/GoogleMap.tsx` line 73
  - LeadConnector: `components/ChatWidget.tsx` line 36
  - HighLevel Forms: `components/HighLevelForm.tsx` lines 25, 31

**Note:** This is not ideal. Consider moving to environment variables for security.

## Webhooks & Callbacks

**Incoming:**
- LeadConnector chat widget - Receives form submissions directly to LeadConnector CRM
- HighLevel/TrustBasedSEO forms - Submissions sent to external form service
- No webhooks received by FCS site

**Outgoing:**
- Google Analytics events sent to `https://www.google-analytics.com/` (via gtag)
- Phone click tracking events sent to GA4
- Form view/submission events tracked in GA4

## Image Processing & Optimization

**Image Management:**
- Optimized images stored in `/public/images/`
- Multiple formats per image: AVIF, WebP, JPG fallback
- Image metadata: `image-catalog.json` (21.8KB)
- Image-to-page mapping: `image-page-mapping.json` (15.4KB)
- 486 analyzed images total across 6 topic clusters

**Image Component:**
- `components/OptimizedImage.tsx` - Handles format selection and responsive srcset
- Maps legacy wp-content paths to optimized images
- AI-generated alt text from `image-map.json` metadata

**Image Audit Data:**
- `image-audit-report.json` (132.3KB) - Comprehensive image analysis
- `schema-audit-report.json` (369.2KB) - Schema.org structure audit
- `seo-audit-results.json` (1.4MB) - Full SEO audit with recommendations

## External Redirects & Forwarding

**Netlify Redirects:**
- 301 redirects defined in `netlify.toml` (lines 31-792)
- Trailing slash enforcement (lines 31-35)
- Duplicate page consolidation (100+ redirect rules)
- Categories:
  - Commercial construction pages consolidation
  - Disaster recovery/hurricane pages consolidation
  - Historic restoration pages consolidation
  - Balcony reconstruction pages consolidation
  - Custom homes pages consolidation
  - Legacy broken link fixes

## Brand & Style Configuration

**Theme Data:**
- `lib/theme.ts` - Centralized color, font, and style configuration
- Brand colors: Primary green (#65DE5D), accent gold (#C9A227)
- Fonts: Roboto (body), Roboto Slab (headings) via `next/font`

**Business Data:**
- `lib/constants.ts` - All business information centralized
  - Company name, phone, email, address, hours
  - Service areas (8 cities)
  - Google Business Profile link
  - License number (CBC1262722)
  - Business statistics (40+ years, 300+ projects, $25M+ total value)

---

*Integration audit: 2026-02-15*
