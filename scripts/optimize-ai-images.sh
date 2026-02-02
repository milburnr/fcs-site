#!/usr/bin/env bash

# FCS AI Image Optimizer
# Converts staging images to production-ready optimized versions
# with WebP/AVIF, multiple sizes, geotagging, and SEO metadata

set -e

STAGING_DIR="/Volumes/External-2TB/projects/service-site-builder/sites/fcs-final/ai-images-staging"
OUTPUT_DIR="/Volumes/External-2TB/projects/service-site-builder/sites/fcs-final/public/images"

# Tampa Bay coordinates for geotagging
TAMPA_LAT="27.9506"
TAMPA_LON="82.4572"

# Size definitions
SIZE_XL=2560
SIZE_LARGE=1920
SIZE_MEDIUM=1280
SIZE_SMALL=960

# Get SEO name and alt text for an image
get_image_info() {
    local rel_path="$1"
    case "$rel_path" in
        "commercial/apartment-complex.png")
            echo "tampa-apartment-complex-construction|Multi-story apartment complex construction in Tampa Bay Florida|commercial,multi-family,apartment,construction,tampa";;
        "commercial/church-building.png")
            echo "tampa-church-building-construction|Modern church building construction project in Tampa Bay|commercial,church,religious,construction,tampa";;
        "commercial/condo-building.png")
            echo "tampa-condo-building-construction|Condominium building construction in Tampa Bay Florida|commercial,condo,multi-family,construction,tampa";;
        "commercial/industrial-warehouse.png")
            echo "tampa-industrial-warehouse-construction|Industrial warehouse facility construction in Tampa Bay|commercial,industrial,warehouse,construction,tampa";;
        "commercial/medical-complete.png")
            echo "tampa-medical-facility-construction|Modern medical facility construction in Tampa Bay Florida|commercial,medical,healthcare,construction,tampa";;
        "commercial/medical-healthcare.png")
            echo "tampa-healthcare-center-construction|Healthcare center construction project Tampa Bay|commercial,medical,healthcare,construction,tampa";;
        "commercial/medical-v2.png")
            echo "tampa-medical-building-construction|Medical office building construction Tampa Bay Florida|commercial,medical,healthcare,construction,tampa";;
        "commercial/multifamily-construction.png")
            echo "tampa-multifamily-housing-construction|Multi-family housing development construction Tampa Bay|commercial,multi-family,residential,construction,tampa";;
        "commercial/office-complete-v2.png")
            echo "tampa-commercial-office-construction|Modern commercial office building construction Tampa Bay|commercial,office,construction,tampa";;
        "commercial/retail-plaza.png")
            echo "tampa-retail-plaza-construction|Retail plaza shopping center construction Tampa Bay|commercial,retail,plaza,construction,tampa";;
        "heroes/commercial-main.png")
            echo "tampa-commercial-construction-hero|Tampa Bay commercial construction general contractor|commercial,construction,hero,tampa,general-contractor";;
        "heroes/silhouette-crane-v2.png")
            echo "construction-crane-silhouette-tampa|Construction crane silhouette against sunset Tampa Bay|construction,crane,sunset,hero,tampa";;
        "locations/tampa-skyline.png")
            echo "tampa-bay-skyline-construction|Tampa Bay Florida skyline commercial construction|tampa,skyline,city,florida,construction";;
        "residential/condo-balconies.png")
            echo "tampa-condo-balcony-restoration|Condominium balcony restoration Tampa Bay Florida|residential,condo,balcony,restoration,tampa";;
        "residential/luxury-complete.png")
            echo "tampa-luxury-custom-home-construction|Luxury custom home construction Tampa Bay Florida|residential,luxury,custom-home,construction,tampa";;
        "residential/luxury-custom-home.png")
            echo "tampa-luxury-home-builder|Luxury home construction Tampa Bay area|residential,luxury,custom-home,construction,tampa";;
        "residential/waterfront-home.png")
            echo "tampa-waterfront-home-construction|Waterfront custom home construction Tampa Bay|residential,waterfront,custom-home,construction,tampa";;
        "restoration/historic-complete.png")
            echo "tampa-historic-building-restoration|Historic building restoration Tampa Bay Florida|restoration,historic,preservation,construction,tampa";;
        "restoration/hurricane-damage-repair.png")
            echo "tampa-hurricane-damage-restoration|Hurricane damage restoration services Tampa Bay|restoration,hurricane,disaster-recovery,construction,tampa";;
        "restoration/roof-restoration-aerial.png")
            echo "tampa-roof-restoration-aerial|Aerial view roof restoration project Tampa Bay|restoration,roofing,aerial,construction,tampa";;
        *)
            echo "";;
    esac
}

# Process a single image
process_image() {
    local src_path="$1"
    local rel_path="${src_path#$STAGING_DIR/}"
    
    # Get mapping for this image
    local info=$(get_image_info "$rel_path")
    if [[ -z "$info" ]]; then
        echo "⚠️  No mapping for: $rel_path (skipping)"
        return
    fi
    
    # Parse mapping
    local seo_name=$(echo "$info" | cut -d'|' -f1)
    local alt_text=$(echo "$info" | cut -d'|' -f2)
    local tags=$(echo "$info" | cut -d'|' -f3)
    
    echo "📸 Processing: $rel_path -> $seo_name"
    
    # Create output directory
    local out_dir="$OUTPUT_DIR/$seo_name"
    mkdir -p "$out_dir"
    
    # Get original dimensions
    local orig_dims=$(identify -format "%wx%h" "$src_path")
    local orig_width=$(echo $orig_dims | cut -dx -f1)
    local orig_height=$(echo $orig_dims | cut -dx -f2)
    
    # Calculate aspect ratio using awk for portability
    local aspect_ratio=$(awk "BEGIN {printf \"%.6f\", $orig_height / $orig_width}")
    
    # Process each size
    for size_info in "xl:$SIZE_XL" "large:$SIZE_LARGE" "medium:$SIZE_MEDIUM" "small:$SIZE_SMALL"; do
        local size_name=$(echo "$size_info" | cut -d: -f1)
        local target_width=$(echo "$size_info" | cut -d: -f2)
        
        # Skip if original is smaller than target
        if [ "$target_width" -gt "$orig_width" ]; then
            continue
        fi
        
        local target_height=$(awk "BEGIN {printf \"%.0f\", $target_width * $aspect_ratio}")
        
        echo "  → Creating ${size_name} (${target_width}x${target_height})"
        
        # Generate WebP
        convert "$src_path" -resize "${target_width}x${target_height}" -quality 85 "$out_dir/${seo_name}-${size_name}.webp"
        
        # Generate AVIF
        convert "$src_path" -resize "${target_width}x${target_height}" -quality 80 "$out_dir/${seo_name}-${size_name}.avif" 2>/dev/null || echo "    (AVIF skipped - not supported)"
        
        # Generate JPG fallback
        convert "$src_path" -resize "${target_width}x${target_height}" -quality 85 "$out_dir/${seo_name}-${size_name}.jpg"
    done
    
    # Create display version (medium size for OG/previews)
    convert "$src_path" -resize "1280x720^" -gravity center -extent 1280x720 -quality 85 "$out_dir/${seo_name}-display.webp"
    convert "$src_path" -resize "1280x720^" -gravity center -extent 1280x720 -quality 85 "$out_dir/${seo_name}-display.jpg"
    
    # Add geotag to all JPGs
    for jpg in "$out_dir"/*.jpg; do
        if [ -f "$jpg" ]; then
            exiftool -overwrite_original \
                -GPSLatitude="$TAMPA_LAT" \
                -GPSLatitudeRef="N" \
                -GPSLongitude="$TAMPA_LON" \
                -GPSLongitudeRef="W" \
                -Copyright="Florida Construction Specialists" \
                -Artist="Florida Construction Specialists" \
                -ImageDescription="$alt_text" \
                "$jpg" 2>/dev/null || true
        fi
    done
    
    # Format tags for JSON
    local json_tags=$(echo "$tags" | sed 's/,/","/g')
    
    # Create metadata.json
    cat > "$out_dir/metadata.json" << EOF
{
  "seoName": "$seo_name",
  "altText": "$alt_text",
  "tags": ["$json_tags"],
  "location": {
    "city": "Tampa",
    "state": "Florida",
    "lat": $TAMPA_LAT,
    "lon": -$TAMPA_LON
  },
  "copyright": "Florida Construction Specialists",
  "processedAt": "$(date -u +%Y-%m-%dT%H:%M:%S.000Z)",
  "responsive": {
    "sources": [
      "<source type=\"image/avif\" srcset=\"/images/$seo_name/${seo_name}-large.avif 1920w, /images/$seo_name/${seo_name}-medium.avif 1280w, /images/$seo_name/${seo_name}-small.avif 960w\" />",
      "<source type=\"image/webp\" srcset=\"/images/$seo_name/${seo_name}-large.webp 1920w, /images/$seo_name/${seo_name}-medium.webp 1280w, /images/$seo_name/${seo_name}-small.webp 960w\" />"
    ],
    "fallback": "${seo_name}-medium.jpg"
  }
}
EOF
    
    echo "  ✓ Complete"
}

# Main execution
echo "🔧 FCS AI Image Optimizer"
echo "========================="
echo ""

# Find and process all PNG files in staging
find "$STAGING_DIR" -name "*.png" -type f | while read img; do
    process_image "$img"
done

echo ""
echo "✅ All images processed!"
echo "📁 Output: $OUTPUT_DIR"
