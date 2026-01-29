# CLAUDE.md - FCS Site Project Rules

## Project: Florida Construction Specialists
- **Repo:** milburnr/fcs-site
- **Live:** https://floridaconstructionspecialists.com
- **Deploy:** Netlify

## Critical Rules

### Images - USE THE OPTIMIZED ONES
The site has AI-analyzed, optimized images. **Do not use raw wp-content paths.**

✅ Correct:
```tsx
import { OptimizedImage } from '@/components/OptimizedImage';

<OptimizedImage 
  src="/wp-content/uploads/2023/12/some-image.jpg"  // Old path OK, component handles mapping
  className="..."
/>
```

❌ Wrong:
```tsx
<img src="/wp-content/uploads/2023/12/some-image.jpg" />  // No! Loses optimization
```

The OptimizedImage component:
- Maps old wp-content paths → optimized /images/ paths
- Serves avif/webp with jpg fallback
- Uses AI-generated alt text from image-map.json
- Handles responsive srcset

### Deploying
**Git-triggered builds FAIL** due to monorepo webpack issues.

Deploy manually:
```bash
# Build locally first
npm run build

# Deploy the out folder directly
netlify deploy --prod --dir=out --no-build
```

### Before Pushing
1. Run `npm run build` locally - catch errors before Netlify
2. Check the `/out` folder has your changes
3. Verify images exist in `/public` if you added any

### Image Resources
- Optimized images: `/public/images/` (avif/webp/jpg)
- Image mapping: `/src/data/image-map.json`
- Original analysis: `../../tools/image-processing/output/fcs-analyzed-images.json`
- Image catalog with alt tags: `/image-catalog.json`

### Common Issues

**"Image not found" after deploy**
- Check if image is in `/public/` 
- Verify it's in git (not gitignored)
- May need to copy from `tools/image-processing/output/fcs-optimized/`

**Build fails on Netlify**
- Don't rely on git-triggered builds
- Use `netlify deploy --prod --dir=out --no-build`

**Alt tags wrong/missing**
- Check image-map.json for the mapping
- AI alt tags are in metadata.json per image folder

## Memory Channel
When using memory-keeper, use channel: "fcs-site"
