# Phase 10: Add Gallery Photos - Research

**Researched:** 2026-02-24
**Domain:** Image processing, Cloudflare R2 hosting, React carousel/lightbox, Next.js static pages
**Confidence:** HIGH

## Summary

This phase replaces the existing placeholder gallery page (currently at `/gallery/` with hardcoded stock data) with a real project photo gallery backed by 8 project photo folders (~1,200 MB total, 213 photos). Photos will be processed with Sharp into two WebP sizes (thumbnail ~400px, full ~1600px), uploaded to a new Cloudflare R2 bucket via wrangler CLI, and served via R2 public URL. The gallery index page becomes a card grid linking to 8 individual project pages, each with a carousel, thumbnail strip, and fullscreen lightbox.

The site already uses Next.js 15 with static export (`output: "export"`), so all gallery project pages must be created as individual static routes (e.g., `app/gallery/5th-ave-home/page.tsx`). No dynamic routes with `generateStaticParams` are used anywhere in this project. The hero slider on the homepage uses a custom `useState`/`useEffect` approach (not a library), but for the gallery carousel+lightbox, a purpose-built library is the right call.

**Primary recommendation:** Use `yet-another-react-lightbox` (YARL) for both the carousel and lightbox -- its Inline plugin transforms it into an embeddable carousel, and its Thumbnails plugin provides the thumbnail strip. This avoids installing two separate libraries and gives carousel, thumbnails, and fullscreen lightbox from a single dependency. Process images with a custom Sharp script (the existing `tools/image-processing/optimize-images.js` expects analyzed-images.json input and outputs avif/webp/jpg -- simpler to write a focused script for this task).

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions
- 8 completed project photo folders at `/Volumes/External-2TB/Projects/fcs-photos`
- Folder name = project name (use as-is for slugs/titles)
- Process using existing tool at `/service-site-builder/tools/image-processing`
- Convert to WebP, naming convention: `fcs-{project-slug}-{nn}.webp`
- Metadata and project descriptions will be added later -- get gallery and images up first
- Images must NOT be committed to git
- Cloudflare R2: same account as 5 Star site, separate bucket for FCS
- Automated upload script to process photos then push to R2 bucket
- Site references images via R2 public URL (or custom domain if configured)
- Card grid layout (responsive, 2-3 columns) for gallery index
- Each card shows overview/hero photo + project name, links to project page
- Lazy loading for cards below the fold
- Carousel/slideshow as primary photo viewer on project pages
- Thumbnail strip below carousel for quick navigation
- Click main image to open fullscreen lightbox
- CTA section at bottom matching site pattern
- Cross-links to related service pages where applicable
- Top-level nav item "Gallery" (check if one already exists)
- URL structure: `/gallery/` (index) + `/gallery/{project-name}/` (individual)
- Breadcrumbs: Home > Gallery > {Project Name}
- WebP only (no AVIF)
- Two sizes per photo: thumbnail (~400px wide), full (~1600px wide)
- First row of gallery index loads eagerly; rest lazy loaded

### Claude's Discretion
- Carousel library choice (or custom implementation)
- Lightbox implementation approach
- Exact card styling to match existing site design system
- How to determine "overview photo" from each project folder (first image, largest, etc.)
- R2 bucket naming and path structure
- Thumbnail strip scroll behavior

### Deferred Ideas (OUT OF SCOPE)
- Project metadata (location, service type, year, square footage)
- Project descriptions and detailed writeups
- Before/after comparison slider
- Filtering/search on gallery index by service type
</user_constraints>

## Standard Stack

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| sharp | ^0.34.5 | Image processing (resize + WebP conversion) | Already in `tools/image-processing/package.json`; fastest Node.js image processor |
| yet-another-react-lightbox | ^3.25 | Carousel + lightbox + thumbnails | Single library covers all three needs via plugins; 200K+ weekly npm downloads; supports React 19 |
| wrangler | 4.63+ (installed) | R2 bucket management and upload | Already installed globally at `/opt/homebrew/bin/wrangler`; authenticated with account |

### Supporting
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| yet-another-react-lightbox/plugins | (bundled) | Thumbnails, Inline, Fullscreen, Zoom plugins | Import from `yet-another-react-lightbox/plugins` |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| YARL | embla-carousel + separate lightbox | Embla has no built-in lightbox; need two libraries. YARL does both. |
| YARL | Swiper | Heavier bundle (~40KB vs ~15KB for YARL); overkill for photo gallery |
| YARL | Custom useState slider (like homepage) | No lightbox, no thumbnails, no keyboard nav, no swipe -- too much to hand-roll |
| Custom Sharp script | Existing optimize-images.js | Existing tool expects analyzed-images.json format and outputs avif/webp/jpg; easier to write a focused 80-line script for this specific task |

**Installation:**
```bash
npm install yet-another-react-lightbox
```

No Sharp install needed -- already in `tools/image-processing/node_modules`.

## Architecture Patterns

### Recommended Project Structure
```
app/gallery/
  page.tsx                          # Gallery index (card grid)
  5th-ave-home/page.tsx             # Individual project pages
  bayshore-drive/page.tsx
  commodores-cove/page.tsx
  horseshoe-loop-rd/page.tsx
  italian-club/page.tsx
  mvp-orthodontics/page.tsx
  race-track/page.tsx
  world-vision/page.tsx

components/
  GalleryCarousel.tsx               # Client component: YARL carousel + thumbnails + lightbox

lib/
  gallery-data.ts                   # Project data: slugs, names, photo counts, R2 URLs

scripts/
  process-gallery-photos.js         # Sharp script: resize + convert to WebP
  upload-gallery-to-r2.sh           # Wrangler upload to R2 bucket
```

### Pattern 1: Static Gallery Data File
**What:** A TypeScript data file that maps project slugs to photo counts and R2 base URLs, consumed by both the index page and individual project pages.
**When to use:** Static export sites that can't fetch data at build time from an API.
**Example:**
```typescript
// lib/gallery-data.ts
export const R2_BASE_URL = 'https://pub-XXXXX.r2.dev'; // or custom domain

export interface GalleryProject {
  slug: string;
  name: string;
  photoCount: number;
}

export const GALLERY_PROJECTS: GalleryProject[] = [
  { slug: '5th-ave-home', name: '5th Ave Home', photoCount: 49 },
  { slug: 'bayshore-drive', name: 'Bayshore Drive', photoCount: 36 },
  // ...
];

// Generate image URLs from convention
export function getProjectImages(project: GalleryProject) {
  return Array.from({ length: project.photoCount }, (_, i) => ({
    src: `${R2_BASE_URL}/gallery/${project.slug}/fcs-${project.slug}-${String(i + 1).padStart(2, '0')}-full.webp`,
    thumb: `${R2_BASE_URL}/gallery/${project.slug}/fcs-${project.slug}-${String(i + 1).padStart(2, '0')}-thumb.webp`,
    alt: `${project.name} - Photo ${i + 1}`,
  }));
}
```

### Pattern 2: YARL Carousel with Thumbnails and Lightbox
**What:** Use YARL's Inline plugin for the embedded carousel and its standard mode for fullscreen lightbox, sharing the same slide array.
**When to use:** Photo gallery pages needing carousel + thumbnail strip + fullscreen.
**Example:**
```tsx
// components/GalleryCarousel.tsx
'use client';

import Lightbox from 'yet-another-react-lightbox';
import Inline from 'yet-another-react-lightbox/plugins/inline';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import { useState } from 'react';

interface GalleryCarouselProps {
  slides: { src: string; thumb: string; alt: string }[];
}

export function GalleryCarousel({ slides }: GalleryCarouselProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const yarlSlides = slides.map(s => ({
    src: s.src,
    alt: s.alt,
    // Thumbnails plugin reads from this
  }));

  return (
    <>
      {/* Inline carousel */}
      <Lightbox
        slides={yarlSlides}
        plugins={[Inline, Thumbnails]}
        inline={{
          style: { width: '100%', maxWidth: '1200px', aspectRatio: '3/2' },
        }}
        on={{
          click: ({ index }) => {
            setCurrentIndex(index);
            setLightboxOpen(true);
          },
        }}
        carousel={{ finite: true }}
      />

      {/* Fullscreen lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={currentIndex}
        slides={yarlSlides}
        plugins={[Thumbnails, Fullscreen, Zoom]}
      />
    </>
  );
}
```

### Pattern 3: R2 Bucket Organization
**What:** Separate bucket for FCS, organized by project slug with size suffix.
**Example:**
```
fcs-gallery/                        # Bucket name
  gallery/
    5th-ave-home/
      fcs-5th-ave-home-01-full.webp   # 1600px wide
      fcs-5th-ave-home-01-thumb.webp  # 400px wide
      fcs-5th-ave-home-02-full.webp
      ...
    bayshore-drive/
      fcs-bayshore-drive-01-full.webp
      ...
```

### Anti-Patterns to Avoid
- **Committing images to git:** User explicitly forbids this. All images go to R2.
- **Using Next.js Image optimization with R2 URLs:** The site uses `images: { unoptimized: true }` for static export. Use native `<img>` with explicit `width`/`height` or YARL's built-in image handling.
- **Dynamic routes for gallery projects:** This codebase uses static route folders exclusively. Do not introduce `[slug]/page.tsx` patterns.
- **Over-engineering the data layer:** No database, no CMS, no API. A simple TypeScript array in `lib/gallery-data.ts` is the correct approach for 8 static projects.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Carousel with swipe | Custom touch event handlers | YARL with Inline plugin | Touch/swipe, keyboard nav, RTL support, accessibility are complex |
| Fullscreen lightbox | Custom overlay + portal | YARL standard mode | Focus trapping, scroll lock, escape key, animation, backdrop -- many edge cases |
| Thumbnail strip navigation | Custom scrollable strip | YARL Thumbnails plugin | Synchronized state between carousel position and thumbnail highlight |
| Image resizing to WebP | Manual ffmpeg/imagemagick | Sharp | 4-5x faster, cleaner API, already installed |
| R2 upload | Custom S3 SDK calls | wrangler CLI | Already authenticated, simpler than configuring AWS SDK for R2 |

**Key insight:** The carousel+lightbox+thumbnails trio is a solved problem. YARL handles all three from one import. Building custom versions would take 500+ lines of fragile code and miss accessibility requirements.

## Common Pitfalls

### Pitfall 1: File Naming with Special Characters
**What goes wrong:** Folder names like "Commodore's Cove" and "Horeseshoe Loop Rd" contain apostrophes and spaces that break URLs and shell commands.
**Why it happens:** Folder names are used directly as slugs without sanitization.
**How to avoid:** Slugify folder names: `commodores-cove`, `horseshoe-loop-rd`. Build a mapping table: `{ "Commodore's Cove": "commodores-cove" }`. Note the typo "Horeseshoe" in the source folder -- decide whether to fix it in the slug.
**Warning signs:** 404s on project pages, broken image URLs, shell script failures.

### Pitfall 2: Large Image Upload Timeouts
**What goes wrong:** Uploading 213 processed images (426 files with two sizes) to R2 via wrangler sequentially is slow.
**Why it happens:** Each `wrangler r2 object put` is a separate HTTP request.
**How to avoid:** Use `xargs -P 8` for parallel uploads (matching the 5 Star pattern in R2-SETUP.md). Process and upload one project at a time to track progress.
**Warning signs:** Upload script taking > 10 minutes.

### Pitfall 3: YARL CSS Not Loading in Static Export
**What goes wrong:** YARL styles import (`import 'yet-another-react-lightbox/styles.css'`) may not apply if only imported in a client component.
**Why it happens:** Next.js static export handles CSS imports from client components correctly, but the import must be in the client component file, not a server component.
**How to avoid:** Import YARL CSS directly in the `'use client'` component (GalleryCarousel.tsx). This is the standard pattern.
**Warning signs:** Carousel renders without styling (raw unstyled images).

### Pitfall 4: Missing `alt` Text and Accessibility
**What goes wrong:** Gallery images have generic or missing alt text, hurting SEO and accessibility.
**Why it happens:** No metadata is available yet (deferred to later).
**How to avoid:** Use pattern `"{Project Name} - Photo {N}"` as placeholder alt text. YARL passes alt through to `<img>` elements.
**Warning signs:** Lighthouse accessibility warnings.

### Pitfall 5: Gallery Index Card Images Not Lazy Loading
**What goes wrong:** All 8 project hero images load at once, including below-fold cards.
**Why it happens:** Default `<img>` loading is eager.
**How to avoid:** Use `loading="lazy"` on all cards except the first row (first 2-3 cards based on columns). User explicitly wants first row eager, rest lazy.
**Warning signs:** PageSpeed showing unnecessary image downloads on gallery index.

### Pitfall 6: Existing Gallery Page Replacement
**What goes wrong:** The existing `/gallery/page.tsx` has hardcoded placeholder projects and stock images. Must be fully replaced, not patched.
**Why it happens:** Attempting to incrementally modify the existing page leads to leftover placeholder data.
**How to avoid:** Replace the entire file. Preserve useful patterns (hero section style, CTA section, breadcrumbs, InternalLinks) but use real project data.

## Code Examples

### Image Processing Script (Sharp)
```javascript
// scripts/process-gallery-photos.js
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const SIZES = {
  full: { width: 1600, suffix: 'full' },
  thumb: { width: 400, suffix: 'thumb' },
};

const PROJECTS = {
  '5th Ave home': '5th-ave-home',
  'Bayshore Drive': 'bayshore-drive',
  "Commodore's Cove": 'commodores-cove',
  'Horeseshoe Loop Rd': 'horseshoe-loop-rd',
  'Italian Club': 'italian-club',
  'MVP Orthodontics': 'mvp-orthodontics',
  'Race Track': 'race-track',
  'World Vision': 'world-vision',
};

const INPUT_DIR = '/Volumes/External-2TB/Projects/fcs-photos';
const OUTPUT_DIR = '/Volumes/External-2TB/Projects/fcs-gallery-processed';

async function processProject(folderName, slug) {
  const inputPath = path.join(INPUT_DIR, folderName);
  const files = fs.readdirSync(inputPath)
    .filter(f => /\.(jpe?g|png)$/i.test(f))
    .sort();

  const outputPath = path.join(OUTPUT_DIR, slug);
  fs.mkdirSync(outputPath, { recursive: true });

  for (let i = 0; i < files.length; i++) {
    const num = String(i + 1).padStart(2, '0');
    const src = path.join(inputPath, files[i]);

    for (const [, { width, suffix }] of Object.entries(SIZES)) {
      const outFile = `fcs-${slug}-${num}-${suffix}.webp`;
      await sharp(src)
        .resize(width, null, { withoutEnlargement: true })
        .webp({ quality: 82 })
        .toFile(path.join(outputPath, outFile));
    }

    process.stdout.write(`  ${slug}: ${i + 1}/${files.length}\r`);
  }
  console.log(`  ${slug}: ${files.length} photos processed`);
}
```

### R2 Upload Script
```bash
#!/bin/bash
# scripts/upload-gallery-to-r2.sh
BUCKET="fcs-gallery"
SOURCE="/Volumes/External-2TB/Projects/fcs-gallery-processed"

for project_dir in "$SOURCE"/*/; do
  slug=$(basename "$project_dir")
  echo "Uploading $slug..."
  ls -1 "$project_dir" | xargs -P 8 -I {} \
    wrangler r2 object put "$BUCKET/gallery/$slug/{}" \
    --file="$project_dir/{}" --remote
done
echo "Upload complete."
```

### Overview Photo Selection
```javascript
// Recommendation: use the first image alphabetically as the overview/hero photo.
// Reasoning: DJI_ prefixed images (drone shots) sort before JGP_ (ground shots),
// so the first image is likely an aerial overview -- ideal for the card thumbnail.
// Verified across folders: DJI_ files are exterior/aerial, JGP_ are closer shots.
function getOverviewImage(slug, photoCount) {
  return `${R2_BASE_URL}/gallery/${slug}/fcs-${slug}-01-thumb.webp`;
}
```

## Existing Codebase Findings

### Current Gallery Page (`app/gallery/page.tsx`)
- Exists with full placeholder content (commercial + residential categories with stock images)
- Uses `BreadcrumbSchema`, `Breadcrumb`, `InternalLinks`, `BUSINESS_INFO` -- all should be preserved
- Hero section, stats bar, CTA section patterns should be adapted to real gallery
- Currently 456 lines of hardcoded placeholder data

### Navigation (`lib/constants.ts`, line 251-275)
- `NAV_ITEMS` array has: Home, Commercial, Residential, Insurance, Locations, About, Contact
- **No "Gallery" nav item exists** -- must be added
- Logical position: between "Locations" and "About"

### Photo Inventory
| Project Folder | Slug | Photos | Size | Notes |
|----------------|------|--------|------|-------|
| 5th Ave home | 5th-ave-home | 49 | 244 MB | DJI drone + JGP ground shots |
| Bayshore Drive | bayshore-drive | 36 | 201 MB | DJI drone + JGP ground shots |
| Commodore's Cove | commodores-cove | 10 | 63 MB | Smallest set |
| Horeseshoe Loop Rd | horseshoe-loop-rd | 23 | 125 MB | Note: typo in folder name |
| Italian Club | italian-club | 33 | 226 MB | JGP shots only |
| MVP Orthodontics | mvp-orthodontics | 22 | 103 MB | Mixed |
| Race Track | race-track | 23 | 132 MB | DJI-HDR + JGP shots |
| World Vision | world-vision | 17 | 106 MB | Smallest by count |
| **Total** | | **213** | **~1.2 GB** | |

### Photo Characteristics
- Source format: JPEG (high-res, 2-8 MB each)
- Drone shots (DJI_): 4096x2304 landscape typical
- Ground shots (JGP_): Mixed orientations, ~2342x3519 (some portrait)
- Race Track has `.JPG` extension (uppercase) -- script must handle case-insensitively
- Some files have suffixes like `JGP_8659a.jpg` -- sort order must handle these

### R2 Infrastructure
- Wrangler CLI installed at `/opt/homebrew/bin/wrangler` (v4.63.0)
- Authenticated -- `wrangler r2 bucket list` succeeds
- Existing bucket: `5star-images` (for 5 Star Roofing site)
- Need to create new bucket: `fcs-gallery` (or similar)
- Upload pattern from 5 Star: `wrangler r2 object put "bucket/path" --file="./file" --remote`
- Parallel upload with `xargs -P 8`

### Site Technology
- Next.js 15, React 19, Tailwind CSS, Framer Motion
- Static export (`output: "export"`, `trailingSlash: true`)
- `images: { unoptimized: true }` -- no Next.js image optimization
- Existing carousel pattern: homepage hero uses custom `useState` + `setInterval` (no library)

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| react-image-gallery | yet-another-react-lightbox (YARL) | 2023-2024 | YARL is smaller, more modular, supports React 19 |
| Multiple carousel + lightbox libs | YARL Inline plugin + standard lightbox | 2024 | Single dependency for both use cases |
| AVIF + WebP + JPEG fallback chain | WebP-only for modern galleries | 2024 | WebP has 97%+ browser support; AVIF adds complexity for marginal gain |
| S3 SDK for R2 | wrangler CLI | 2024-2025 | Simpler auth, no SDK config needed |

**Deprecated/outdated:**
- `react-images`: Unmaintained, last publish 2019
- `react-image-gallery`: Works but heavier than YARL, less plugin flexibility
- AVIF-first strategy: Unnecessary for gallery where WebP is sufficient

## Open Questions

1. **R2 bucket name and public URL**
   - What we know: Account has existing `5star-images` bucket. Need separate FCS bucket.
   - What's unclear: Exact bucket name preference (`fcs-gallery`? `fcs-images`?). Custom domain or r2.dev URL?
   - Recommendation: Create `fcs-gallery` bucket, use r2.dev public URL initially. Can add custom domain later.

2. **Portrait vs landscape photo handling in carousel**
   - What we know: Some JGP shots are portrait (2342x3519), drone shots are landscape (4096x2304).
   - What's unclear: Should portrait photos be letterboxed in the carousel, or should carousel height adjust?
   - Recommendation: Use `object-contain` with a fixed aspect ratio container (3:2). Portrait images will have black/dark bars on sides. YARL handles this well by default.

3. **"Horeseshoe" typo in folder name**
   - What we know: Source folder is "Horeseshoe Loop Rd" (missing an 'h' in Horseshoe).
   - What's unclear: Whether to use corrected slug (`horseshoe-loop-rd`) or match source (`horeseshoe-loop-rd`).
   - Recommendation: Use corrected slug `horseshoe-loop-rd` in URLs and display name "Horseshoe Loop Rd". The source folder typo doesn't need to propagate to the website.

## Sources

### Primary (HIGH confidence)
- Codebase inspection: `app/gallery/page.tsx`, `lib/constants.ts`, `next.config.ts`, `package.json`
- 5 Star R2 reference: `sites/5-star-roofing/R2-SETUP.md` -- bucket setup and upload patterns
- Photo folder inspection: `/Volumes/External-2TB/Projects/fcs-photos/` -- verified 8 folders, file counts, dimensions
- Wrangler CLI: verified installed and authenticated (`wrangler r2 bucket list` succeeds)

### Secondary (MEDIUM confidence)
- [Yet Another React Lightbox](https://yet-another-react-lightbox.com) -- official docs, plugins list, carousel example
- [YARL npm](https://www.npmjs.com/package/yet-another-react-lightbox) -- version 3.25, React 19 support confirmed
- [Sharp official docs](https://sharp.pixelplumbing.com/) -- resize + WebP output API
- [Embla Carousel discussions](https://github.com/davidjerleke/embla-carousel/discussions/269) -- confirmed no built-in lightbox

### Tertiary (LOW confidence)
- WebSearch carousel comparisons -- used for ecosystem overview, not for specific API claims

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH -- YARL verified via official docs, Sharp already in project, wrangler confirmed working
- Architecture: HIGH -- patterns based on direct codebase inspection of existing routes and components
- Pitfalls: HIGH -- identified from actual photo folder inspection (special chars, mixed extensions, portrait/landscape)

**Research date:** 2026-02-24
**Valid until:** 2026-03-24 (stable domain, no fast-moving APIs)
