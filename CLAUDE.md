# CLAUDE.md - FCS Site Project Rules

## Project: Florida Construction Specialists
- **Repo:** milburnr/fcs-site
- **Live:** https://floridaconstructionspecialists.com
- **Deploy:** Netlify (git-triggered auto-deploy)

## Critical Rules

### Images - Served from Cloudflare R2
Images are NOT in the git repo. They're hosted on Cloudflare R2 and served via Netlify proxy rewrites (see `public/_redirects`).

- **R2 bucket:** `fcs-gallery`
- **R2 public URL:** `https://pub-293ff74728cf48d6827f2ddadc36947a.r2.dev`
- **Proxy rules:** `/images/*` and `/wp-content/uploads/*` → R2

Local copies may exist in `public/images/` and `public/wp-content/` for development but are gitignored.

#### Using Images
```tsx
// Preferred: OptimizedImage handles format selection + responsive srcset
import { OptimizedImage } from '@/components/OptimizedImage';
<OptimizedImage src="/wp-content/uploads/2023/12/some-image.jpg" />

// Also works: raw <img> tags with /images/ paths (served via proxy)
<img src="/images/some-folder/some-image-display.webp" alt="..." />
```

The OptimizedImage component:
- Maps old wp-content paths → optimized /images/ paths
- Serves avif/webp with jpg fallback
- Uses AI-generated alt text from image-map.json
- Handles responsive srcset

#### Gallery Images
Gallery photos use R2 directly (not proxy):
```tsx
import { R2_BASE_URL } from '@/lib/gallery-data';
// Full URLs: https://pub-293ff74728cf48d6827f2ddadc36947a.r2.dev/gallery/...
```

#### Adding New Images
1. Optimize and upload to R2 bucket `fcs-gallery` at the `images/` prefix
2. Update `lib/image-map.json` with the mapping
3. Use via OptimizedImage or raw `<img>` with `/images/` path

### Deploying
Git push triggers Netlify auto-deploy. Manual deploy also works:
```bash
npm run build
netlify deploy --prod --dir=out --no-build
```

### Image Resources
- Image mapping: `lib/image-map.json`
- Original analysis: `../../tools/image-processing/output/fcs-analyzed-images.json`
- Image catalog with alt tags: `/image-catalog.json`
- Local copies (dev only): `public/images/`, `public/wp-content/`

### Common Issues

**"Image not found" after deploy**
- Verify the image exists in R2: `curl -I https://pub-293ff74728cf48d6827f2ddadc36947a.r2.dev/images/...`
- Check `public/_redirects` proxy rules are intact
- Upload missing image: `wrangler r2 object put fcs-gallery/images/... --file=... --remote`

**Alt tags wrong/missing**
- Check image-map.json for the mapping
- AI alt tags are in metadata.json per image folder

## Memory Channel
When using memory-keeper, use channel: "fcs-site"
