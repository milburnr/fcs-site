#!/bin/bash
# Upload processed gallery photos to Cloudflare R2
#
# Prerequisites:
#   - wrangler CLI installed and authenticated
#   - Photos processed via process-gallery-photos.js
#
# Usage: bash scripts/upload-gallery-to-r2.sh

set -euo pipefail

BUCKET="fcs-gallery"
SOURCE="${FCS_GALLERY_DIR:-/Volumes/External-2TB/Projects/fcs-gallery-processed}"

if [ ! -d "$SOURCE" ]; then
  echo "Gallery source dir not found: $SOURCE"
  echo "Set FCS_GALLERY_DIR env var to override"
  exit 1
fi

echo "=== FCS Gallery R2 Upload ==="
echo "Bucket: $BUCKET"
echo "Source: $SOURCE"
echo ""

# Create bucket if it doesn't exist
echo "Ensuring bucket exists..."
wrangler r2 bucket create "$BUCKET" 2>/dev/null || true

# Upload each project directory
for project_dir in "$SOURCE"/*/; do
  slug=$(basename "$project_dir")

  # Skip non-directories (e.g., manifest.json)
  [ -d "$project_dir" ] || continue

  file_count=$(ls -1 "$project_dir"*.webp 2>/dev/null | wc -l | tr -d ' ')
  echo "Uploading $slug ($file_count files)..."

  ls -1 "$project_dir"*.webp 2>/dev/null | xargs -P 8 -I {} bash -c '
    file="$1"
    slug="$2"
    bucket="$3"
    fname=$(basename "$file")
    wrangler r2 object put "$bucket/gallery/$slug/$fname" \
      --file="$file" \
      --content-type="image/webp" \
      --remote 2>/dev/null
  ' _ {} "$slug" "$BUCKET"

  echo "  Done: $slug"
done

echo ""
echo "=== Upload complete ==="
echo "Enable public access in Cloudflare dashboard:"
echo "  R2 > fcs-gallery > Settings > Public access > Enable r2.dev subdomain"
