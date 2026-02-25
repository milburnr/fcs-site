# Phase 10: Add gallery photos - Context

**Gathered:** 2026-02-24
**Status:** Ready for planning

<domain>
## Phase Boundary

Add a project photo gallery to the FCS site. Process 8 project photo folders into optimized WebP images, host on Cloudflare R2, and build a gallery index page with individual project pages featuring carousel/slideshow navigation. Gallery lives at /gallery/ with per-project subpages.

</domain>

<decisions>
## Implementation Decisions

### Photo sources & content
- 8 completed project photo folders at `/Volumes/External-2TB/Projects/fcs-photos`
- Folder name = project name (use as-is for slugs/titles)
- Varying photo counts per project; some exterior only, some exterior + interior
- Process using existing tool at `/service-site-builder/tools/image-processing`
- Convert to WebP, naming convention: `fcs-{project-slug}-{nn}.webp`
- Metadata and project descriptions will be added later — get gallery and images up first
- Images must NOT be committed to git

### Image hosting
- Cloudflare R2: same account as 5 Star site, separate bucket for FCS
- Automated upload script to process photos then push to R2 bucket
- Site references images via R2 public URL (or custom domain if configured)

### Gallery index page
- Card grid layout (responsive, 2-3 columns)
- Each card shows: overview/hero photo from the project folder + project name
- Cards link to individual project page
- Lazy loading for cards below the fold

### Individual project pages
- Carousel/slideshow as primary photo viewer
- Thumbnail strip below the carousel for quick navigation (click to jump)
- Click main image to open fullscreen lightbox
- CTA section at bottom (matching site pattern — "Need similar work? Contact us")
- Cross-links to related service pages where applicable

### Page structure & navigation
- Top-level nav item "Gallery" (check if one already exists as Gallery/Portfolio)
- URL structure: `/gallery/` (index) + `/gallery/{project-name}/` (individual)
- Breadcrumbs: Home > Gallery > {Project Name}

### Photo processing & sizing
- WebP only (no AVIF)
- Two sizes per photo: thumbnail (~400px wide) for cards/strip, full (~1600px wide) for carousel and lightbox
- First row of gallery index loads eagerly; rest lazy loaded

### Claude's Discretion
- Carousel library choice (or custom implementation)
- Lightbox implementation approach
- Exact card styling to match existing site design system
- How to determine "overview photo" from each project folder (first image, largest, etc.)
- R2 bucket naming and path structure
- Thumbnail strip scroll behavior

</decisions>

<specifics>
## Specific Ideas

- Gallery index should have a card with an overview photo for each project folder
- Use the existing image-processing tool at `tools/image-processing` for conversion
- Check existing nav for Gallery/Portfolio link before adding one
- Look at how 5 Star site connects to R2 for reference on the R2 integration pattern

</specifics>

<deferred>
## Deferred Ideas

- Project metadata (location, service type, year, square footage) — add after initial gallery is live
- Project descriptions and detailed writeups — future enhancement
- Before/after comparison slider — could be a separate feature
- Filtering/search on gallery index by service type — depends on metadata

</deferred>

---

*Phase: 10-add-gallery-photos*
*Context gathered: 2026-02-24*
