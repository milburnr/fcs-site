"use client";

import imageMap from "@/lib/image-map.json";

interface SizeVariant {
  path: string;
  width: number;
  height: number;
  fileSize: number;
}

interface ImageMapEntry {
  folder: string;
  basePath: string;
  altText: string;
  quality: number;
  tags: string[];
  useCases: Record<string, boolean>;
  sizes: Record<string, Record<string, SizeVariant>>;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const typedImageMap = imageMap as Record<string, any>;

// Helper to get size variant, handling different naming conventions
function getSizeVariant(entry: ImageMapEntry, preferredSize: string, format: string): SizeVariant | undefined {
  const sizes = entry.sizes;
  // Try preferred size first
  if (sizes[preferredSize]?.[format]) return sizes[preferredSize][format];
  // Fallback mappings
  const sizeMap: Record<string, string[]> = {
    large: ["large", "display", "hero"],
    medium: ["medium", "grid", "content"],
    small: ["small", "thumbnail", "thumb"],
  };
  const alternatives = sizeMap[preferredSize] || [preferredSize];
  for (const alt of alternatives) {
    if (sizes[alt]?.[format]) return sizes[alt][format];
  }
  // Last resort: return any available size
  for (const sizeKey of Object.keys(sizes)) {
    if (sizes[sizeKey]?.[format]) return sizes[sizeKey][format];
  }
  return undefined;
}

interface OptimizedImageProps {
  /** Original wp-content path or new /images/ path */
  src: string;
  /** Override alt text (uses metadata alt if not provided) */
  alt?: string;
  /** CSS class name */
  className?: string;
  /** High priority loading (above fold images) */
  priority?: boolean;
  /** Image width constraint */
  width?: number;
  /** Image height constraint */
  height?: number;
  /** Object fit style */
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  /** Sizes attribute for responsive loading */
  sizes?: string;
  /** onClick handler */
  onClick?: () => void;
}

/**
 * OptimizedImage Component
 * 
 * Renders optimized images with AVIF/WebP/JPG fallbacks and responsive srcsets.
 * Automatically maps old wp-content paths to optimized versions.
 * 
 * Usage:
 * <OptimizedImage src="/wp-content/uploads/2023/12/custom-home-1.png" />
 * <OptimizedImage src="/wp-content/uploads/2023/12/custom-home-1.png" alt="Custom override" priority />
 */
export function OptimizedImage({
  src,
  alt,
  className = "",
  priority = false,
  width,
  height,
  objectFit = "cover",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px",
  onClick,
}: OptimizedImageProps) {
  // Look up optimized version
  const imageEntry = typedImageMap[src];
  
  // If no optimized version exists, fall back to original
  if (!imageEntry) {
    return (
      <img
        src={src}
        alt={alt || ""}
        className={className}
        loading={priority ? "eager" : "lazy"}
        width={width}
        height={height}
        style={{ objectFit }}
        onClick={onClick}
      />
    );
  }

  // Use metadata alt if no override provided
  const finalAlt = alt || imageEntry.altText || "";
  
  // Build srcsets for each format using helper
  const largeAvif = getSizeVariant(imageEntry, "large", "avif");
  const mediumAvif = getSizeVariant(imageEntry, "medium", "avif");
  const smallAvif = getSizeVariant(imageEntry, "small", "avif");
  
  const largeWebp = getSizeVariant(imageEntry, "large", "webp");
  const mediumWebp = getSizeVariant(imageEntry, "medium", "webp");
  const smallWebp = getSizeVariant(imageEntry, "small", "webp");
  
  const largeJpg = getSizeVariant(imageEntry, "large", "jpg");
  const mediumJpg = getSizeVariant(imageEntry, "medium", "jpg");
  const smallJpg = getSizeVariant(imageEntry, "small", "jpg");

  const avifParts = [
    largeAvif && `${largeAvif.path} ${largeAvif.width}w`,
    mediumAvif && `${mediumAvif.path} ${mediumAvif.width}w`,
    smallAvif && `${smallAvif.path} ${smallAvif.width}w`,
  ].filter(Boolean);
  const avifSrcset = avifParts.join(", ");
  
  const webpParts = [
    largeWebp && `${largeWebp.path} ${largeWebp.width}w`,
    mediumWebp && `${mediumWebp.path} ${mediumWebp.width}w`,
    smallWebp && `${smallWebp.path} ${smallWebp.width}w`,
  ].filter(Boolean);
  const webpSrcset = webpParts.join(", ");
  
  const jpgParts = [
    largeJpg && `${largeJpg.path} ${largeJpg.width}w`,
    mediumJpg && `${mediumJpg.path} ${mediumJpg.width}w`,
    smallJpg && `${smallJpg.path} ${smallJpg.width}w`,
  ].filter(Boolean);
  const jpgSrcset = jpgParts.join(", ");

  // Fallback to medium jpg
  const fallbackSrc = mediumJpg?.path || largeJpg?.path || src;
  
  // Get dimensions from medium size
  const imgWidth = width || mediumJpg?.width;
  const imgHeight = height || mediumJpg?.height;

  return (
    <picture onClick={onClick}>
      {avifSrcset && (
        <source type="image/avif" srcSet={avifSrcset} sizes={sizes} />
      )}
      {webpSrcset && (
        <source type="image/webp" srcSet={webpSrcset} sizes={sizes} />
      )}
      <img
        src={fallbackSrc}
        srcSet={jpgSrcset || undefined}
        sizes={jpgSrcset ? sizes : undefined}
        alt={finalAlt}
        className={className}
        loading={priority ? "eager" : "lazy"}
        width={imgWidth}
        height={imgHeight}
        style={{ objectFit }}
        decoding={priority ? "sync" : "async"}
      />
    </picture>
  );
}

/**
 * Get optimized background image URL for CSS
 * Returns the best available format (prefers webp for broad support)
 */
export function getOptimizedBgUrl(src: string, size: "large" | "medium" | "small" = "large"): string {
  const imageEntry = typedImageMap[src] as ImageMapEntry | undefined;
  if (!imageEntry) return src;
  
  // Return webp for best balance of support and compression
  const webp = getSizeVariant(imageEntry, size, "webp");
  const jpg = getSizeVariant(imageEntry, size, "jpg");
  return webp?.path || jpg?.path || src;
}

/**
 * Get image metadata (alt text, quality score, tags)
 */
export function getImageMeta(src: string): ImageMapEntry | null {
  return (typedImageMap[src] as ImageMapEntry) || null;
}

/**
 * Check if an image has an optimized version
 */
export function hasOptimizedVersion(src: string): boolean {
  return src in typedImageMap;
}

export default OptimizedImage;
