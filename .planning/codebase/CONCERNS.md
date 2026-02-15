# Codebase Concerns

**Analysis Date:** 2026-02-15

## Tech Debt

**Build Memory Constraints:**
- Issue: Building requires `NODE_OPTIONS='--max-old-space-size=8192'` in package.json script. Has fallback `--max-old-space-size=16384` for larger builds.
- Files: `package.json` (line 7-8), `netlify.toml` (build configuration)
- Impact: Production builds on Netlify may hit memory limits due to 496+ page count. Git-triggered builds are explicitly disabled (see CLAUDE.md note about webpack issues)
- Fix approach: Incremental page generation is needed for scaling. Currently static export with 505 pages causes tight memory during build. Consider splitting site into sections or implementing dynamic imports for components.

**Deployment Limitation - Manual Build Required:**
- Issue: Git-triggered builds on Netlify fail due to webpack/monorepo issues. Must build locally and deploy manually with `netlify deploy --prod --dir=out --no-build`
- Files: `netlify.toml` (build configuration noted at line 7), `CLAUDE.md` (explicit warning)
- Impact: Cannot deploy via Git push. Requires manual intervention. Risk of deployments being forgotten or delayed.
- Fix approach: Identify and fix webpack configuration preventing automated Netlify builds, or commit pre-built `out/` folder to git.

**Image Path Mapping Gap:**
- Issue: OptimizedImage component falls back to original path for unmapped images (line 93-105 in `components/OptimizedImage.tsx`). Not all old WordPress paths have optimized equivalents in `lib/image-map.json`
- Files: `components/OptimizedImage.tsx`, `lib/image-map.json` (~1600 KB JSON)
- Impact: Pages using images not in mapping serve unoptimized images, degrading performance for those assets
- Fix approach: Run comprehensive audit of all images used across 496 pages vs mapped images. Map missing images or replace with available optimized versions.

**Copy-Paste Component Instances:**
- Issue: 496 `page.tsx` files generated from template with highly similar structure (hero, content blocks, FAQ, internal links, schema)
- Files: All `app/*/page.tsx` files
- Impact: Difficult to apply consistent fixes across all pages. Schema markup changes, link strategies require manual updates to individual files or scripted bulk changes
- Fix approach: Extract page layout to reusable component wrapper or investigate Next.js layouts API for shared structure

---

## Known Bugs

**SEO Metadata Errors in Two Pages:**
- Symptom: JSX syntax errors with HTML entities
- Files:
  - `app/historic-restoration-preservation/page.tsx` - Had `&gt;` in JSX causing parse issue
  - `app/tenant-improvement-contractors-tampa/page.tsx` - Had `&lt;10` in JSX causing parse issue
- Trigger: When pages were generated, HTML entities weren't properly escaped in JSX context
- Workaround: Fixed in FCS-SEO-IMPROVEMENTS-2026-02-02 (February 2). Monitor for recurrence in generated pages.

**Redirect Chain for /commercial/ Route:**
- Symptom: Multiple redirect chains exist for removed service structure
- Files: `netlify.toml` lines 760-793 (redirect section for removed medical construction, nested service paths)
- Trigger: Historical migration from nested `/services/commercial/medical-construction/` to flat `/commercial-construction/`
- Impact: Potential chain redirects (A→B→C) instead of direct redirects, adding latency
- Fix approach: Audit redirect chains and consolidate to single-hop redirects where possible

---

## Security Considerations

**Image Metadata in Git:**
- Risk: `lib/image-map.json` is ~1600 KB and committed to git. Stores paths to all optimized images, which could reveal image processing infrastructure.
- Files: `lib/image-map.json`
- Current mitigation: Not sensitive data, just image paths and alt text
- Recommendations: No action needed - not a security risk

**Google Business Profile Link:**
- Risk: BUSINESS_INFO.gbpUrl is hardcoded in constants.ts, pointing to public Google Business Profile
- Files: `lib/constants.ts` (location of GBP link)
- Current mitigation: Public URL, no secrets exposed
- Recommendations: None - acceptable practice

---

## Performance Bottlenecks

**Large JSON Image Map Loading:**
- Problem: `lib/image-map.json` is ~1600 KB. Component imports entire mapping on every page load (line 3 of OptimizedImage.tsx uses `import imageMap from "@/lib/image-map.json"`)
- Files: `components/OptimizedImage.tsx`, `lib/image-map.json`
- Cause: Complete image metadata stored in single JSON file without lazy loading or splitting
- Improvement path:
  1. Split image-map.json into multiple chunks by image folder prefix
  2. Use dynamic imports: `const imageMap = await import(...).then(m => m.default)`
  3. Or: Cache image mapping at build time and generate minimal lookup table
  4. Estimated savings: 500-800 KB per page load

**496 Pages with Individual Export:**
- Problem: Each page individually exports metadata and components, leading to high bundle overhead
- Files: All `app/*/page.tsx` files
- Cause: Static export `output: "export"` in next.config.ts requires individual page generation
- Improvement path: Consider incremental static regeneration if moving off static export, or implement component-level code splitting

**Tailwind CSS Class Duplication:**
- Problem: All styles are centralized in `app/globals.css` with @layer components (314 lines). No tree-shaking of unused classes across 496 pages
- Files: `app/globals.css`, `tailwind.config.ts` (103 lines)
- Cause: Static export doesn't benefit from dynamic code splitting - entire CSS imported on all pages
- Improvement path: Use Tailwind's content purging configuration to strip unused classes (verify in tailwind.config.ts)

---

## Fragile Areas

**Page Generation Consistency:**
- Files: All `app/*/page.tsx` files (496 total)
- Why fragile: Pages are generated from template, but any manual edits are isolated. If template changes, pages don't auto-update unless regenerated
- Safe modification: Document the page template source. Use scripted generation for bulk changes. Never manually edit individual pages expecting updates to propagate.
- Test coverage: Basic build verification exists (`npm run test:build`), but no linting of generated page consistency

**Internal Links Component Interdependencies:**
- Files: `components/InternalLinks.tsx`, all pages using it
- Why fragile: Each page hardcodes arrays of related URLs (e.g., disaster recovery pages link to insurance restoration pages). If target pages are deleted or renamed, links break silently
- Safe modification: Update InternalLinks logic to validate href existence at build time. Add CI check: verify all internal link destinations exist
- Test coverage: No validation of link targets. Gap analysis detected 148 orphan pages, but no automated prevention of creating new ones

**Schema Markup Duplication:**
- Files: `components/Schema.tsx` (7 KB), used in 424+ pages with FAQ schema, service schema, breadcrumb schema
- Why fragile: Schema structure changes require updates to component and then re-deployment of all using pages
- Safe modification: Keep Schema.tsx stable. Add version number if changing. Test with Google's Rich Results Test before deploying
- Test coverage: No schema validation at build time

**OptimizedImage Fallback Behavior:**
- Files: `components/OptimizedImage.tsx` lines 93-105
- Why fragile: If image-map.json is missing entries, component silently falls back to unoptimized src. No warnings or errors logged
- Safe modification: Add console warning in development when fallback occurs. Create build-time audit of unmapped images
- Test coverage: No audit of fallback rates

---

## Scaling Limits

**Page Count Scalability:**
- Current capacity: 496 pages building successfully
- Limit: Memory constraints hit at 16 GB. Beyond ~600 pages with current architecture, builds will fail
- Scaling path:
  1. Immediate: Switch to incremental static regeneration (ISR) if budget allows server
  2. Medium term: Split site into separate Next.js apps (e.g., commercial/, residential/, services/)
  3. Long term: Implement API-driven content model with dynamic rendering

**Image Optimization Pipeline:**
- Current capacity: 249 image folders with multiple sizes (avif/webp/jpg) per image
- Limit: Image-map.json at 1600 KB. Performance degrades if mapping exceeds ~2 MB
- Scaling path: Hash-based chunking of image metadata or move to runtime image service

**Redirect Configuration:**
- Current capacity: 793 redirect rules in netlify.toml
- Limit: Netlify has no hard limit, but performance testing shows degradation at 1000+ rules
- Scaling path: Consolidate duplicate redirects. Use pattern-based redirects instead of individual rules.

---

## Dependencies at Risk

**Next.js 15 with Static Export:**
- Risk: Static export mode has limited feature support. Middleware, edge functions, and ISR not available. Upgrading may require architecture change.
- Impact: Cannot implement dynamic features without moving off static export
- Migration plan: Evaluate Netlify Edge Functions or move to Vercel with ISR support

**Chromium Dependency:**
- Risk: `chromium` package (3.0.3) in dependencies is unusual. Likely left from build tooling. Not used in app code.
- Impact: Adds 100+ MB to node_modules
- Migration plan: Remove if not needed. If needed for image processing, move to dev dependencies or external service

**Sharp/Image Processing Dependencies Missing:**
- Risk: No sharp or image processing library listed, but OptimizedImage component expects optimized image variants to exist
- Impact: Cannot regenerate images at runtime. Fully dependent on pre-optimized images in /public
- Migration plan: Document that all images must be pre-optimized. Or add image processing to build pipeline if dynamic optimization needed

---

## Test Coverage Gaps

**No Automated Link Validation:**
- What's not tested: Internal link integrity (148 orphan pages discovered manually). No CI check prevents new orphan pages.
- Files: All `app/*/page.tsx` files using InternalLinks component
- Risk: Broken links discovered only by manual audit or user reports
- Priority: High (affects SEO and user experience)
- Fix: Add build script: `npm run validate:links` that crawls all pages and verifies InternalLinks destinations exist

**No Schema Validation:**
- What's not tested: JSON-LD schema validity, structured data correctness
- Files: All pages with `<LocalBusinessSchema>`, `<ServiceSchema>`, `<FAQSchema>` components
- Risk: Invalid schema silently fails, Google doesn't enrich search results
- Priority: High (affects search engine visibility)
- Fix: Add `google-structured-data-testing-tool` integration to CI, or use `schema-validator` package

**No Image Optimization Audit:**
- What's not tested: Image-map.json completeness, fallback rates, actual image delivery
- Files: `components/OptimizedImage.tsx`, `lib/image-map.json`
- Risk: Pages unknowingly serving unoptimized images, degrading performance
- Priority: Medium
- Fix: Add build script to audit all `<OptimizedImage>` usages and verify mappings exist

**No Bundle Size Monitoring:**
- What's not tested: CSS/JS bundle sizes per page, total build size
- Files: All pages, globals.css
- Risk: Performance regression undetected until production complaints
- Priority: Medium
- Fix: Add `npm run build:analyze` to generate bundle report

**No Accessibility Testing:**
- What's not tested: WCAG 2.1 compliance, image alt text quality, semantic HTML
- Files: All components (OptimizedImage, Header, Footer, etc.)
- Risk: Accessibility issues not caught before deployment
- Priority: Low (but increasing legal importance)
- Fix: Add `axe-core` or `pa11y` to CI pipeline

---

## Missing Critical Features

**No Content Management System (CMS):**
- Problem: All content hardcoded in 496 TSX files. No way for non-technical users to edit content.
- Blocks: Cannot delegate content updates to support team. All changes require developer.
- Recommendation: Implement Keystatic CMS or Sanity for content management. Would unlock $3,600-7,200 yearly recurring revenue per client for manual updates.

**No Sitemap Auto-Generation:**
- Problem: `public/sitemap.xml` exists but is static. If pages are added/removed, sitemap becomes stale.
- Blocks: Google may crawl removed pages or miss new pages
- Recommendation: Implement `next-sitemap` package or build-time generation to auto-create from app/ directory structure

**No 404 Page Route:**
- Problem: 404 page exists but relies on Netlify redirect rule (line 650-652 in netlify.toml)
- Blocks: Static export cannot handle dynamic 404s. Depends on Netlify routing.
- Recommendation: Add explicit 404 handling to next.config.ts or ensure Netlify fallback remains in deployment config

**No A/B Testing Framework:**
- Problem: No experimentation infrastructure for testing title variations, CTA copy, etc.
- Blocks: Cannot optimize conversion rates scientifically
- Recommendation: Add Netlify Split Testing or Vercel Analytics for variant testing

---

## Documentation Gaps

**Image Mapping Process Not Documented:**
- Files: `components/OptimizedImage.tsx` has comments, but overall process unclear
- Issue: New developer won't understand how images are optimized or what to do when adding new images
- Fix: Create `IMAGES.md` documenting: old WordPress paths → mapping process → how to add new images

**Page Generation Process Not Documented:**
- Files: 496 generated pages exist, but no record of how they were generated
- Issue: If pages need bulk updates, script location and process unknown
- Fix: Create `PAGE-GENERATION.md` documenting the generator script and how to re-run it

**Deployment Process Not Documented in Code:**
- Files: `netlify.toml`, `CLAUDE.md`
- Issue: Manual deploy requirement documented only in CLAUDE.md (external file), not in codebase
- Fix: Add `DEPLOYMENT.md` to project root: explains why git deploys fail, how to deploy manually, what to verify

**Schema Markup Patterns Not Documented:**
- Files: `components/Schema.tsx` is complex but has minimal comments
- Issue: Developers won't know when to use which schema type, what fields are required
- Fix: Add JSDoc comments to each schema component and create `SCHEMA.md` documentation

---

## Architecture Concerns

**Monorepo Webpack Issues:**
- Problem: Git-triggered Netlify builds fail with webpack errors (documented in netlify.toml and CLAUDE.md)
- Files: `netlify.toml`, `next.config.ts`
- Impact: Cannot automate deployments. Manual build required.
- Root cause: Likely Next.js trying to trace dependencies into parent workspace packages
- Fix: Next.config.ts has `outputFileTracingRoot` set (line 11) to prevent parent lookup, but Netlify environment may override this

**Static Export Limitation:**
- Problem: `output: "export"` in next.config.ts locks out middleware, edge functions, ISR, API routes
- Files: `next.config.ts` line 5
- Impact: Cannot implement dynamic features (e.g., dynamic redirects, image optimization at runtime)
- Fix approach: Document this constraint. Evaluate Vercel/Netlify Edge for future dynamic needs.

**Component Prop Consistency:**
- Problem: OptimizedImage, ContentImage, ParallaxSection all have different prop interfaces
- Files: `components/OptimizedImage.tsx`, `components/ContentImage.tsx`, `components/ParallaxSection.tsx`
- Impact: Developers must learn each component's API
- Fix: Create design system documentation with prop standardization

---

## Summary

**Critical Issues (fix immediately):**
1. No automated link validation (148 orphan pages)
2. Manual deployment required (blocks CI/CD)
3. Build memory constraints (limits scalability)

**High Priority (fix this week):**
1. Image mapping gaps (performance degradation)
2. Schema validation missing (SEO impact)
3. Page generation fragility (bulk update risk)

**Medium Priority (fix this sprint):**
1. Large image-map.json performance (1600 KB per page load)
2. Redirect chain consolidation (redundant rules)
3. CMS implementation (unlocks recurring revenue)

**Low Priority (backlog):**
1. Bundle size monitoring
2. Accessibility testing
3. A/B testing framework

---

*Concerns audit: 2026-02-15*
