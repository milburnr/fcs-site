/**
 * Gallery project data and R2 image URL helpers.
 *
 * Photo counts sourced from the processing manifest. Images are hosted on
 * Cloudflare R2 with public access enabled.
 */

export const R2_BASE_URL =
  "https://pub-293ff74728cf48d6827f2ddadc36947a.r2.dev";

export interface GalleryProject {
  slug: string;
  name: string;
  photoCount: number;
}

export interface GalleryImage {
  src: string;
  thumb: string;
  alt: string;
}

/**
 * All gallery projects with verified photo counts.
 * Total: 213 photos across 8 projects.
 */
export const GALLERY_PROJECTS: GalleryProject[] = [
  { slug: "5th-ave-home", name: "5th Ave Home", photoCount: 49 },
  { slug: "bayshore-drive", name: "Bayshore Drive", photoCount: 36 },
  { slug: "commodores-cove", name: "Commodore's Cove", photoCount: 10 },
  { slug: "horseshoe-loop-rd", name: "Horseshoe Loop Rd", photoCount: 23 },
  { slug: "italian-club", name: "Italian Club", photoCount: 33 },
  { slug: "mvp-orthodontics", name: "MVP Orthodontics", photoCount: 22 },
  { slug: "race-track", name: "Race Track", photoCount: 23 },
  { slug: "world-vision", name: "World Vision", photoCount: 17 },
];

/**
 * Generate image URLs for a gallery project.
 *
 * Each photo has a full-size (1600px) and thumbnail (400px) variant stored
 * on R2 at `gallery/{slug}/fcs-{slug}-{NN}-{size}.webp`.
 */
export function getProjectImages(project: GalleryProject): GalleryImage[] {
  const images: GalleryImage[] = [];

  for (let i = 1; i <= project.photoCount; i++) {
    const nn = String(i).padStart(2, "0");
    images.push({
      src: `${R2_BASE_URL}/gallery/${project.slug}/fcs-${project.slug}-${nn}-full.webp`,
      thumb: `${R2_BASE_URL}/gallery/${project.slug}/fcs-${project.slug}-${nn}-thumb.webp`,
      alt: `${project.name} - Photo ${i}`,
    });
  }

  return images;
}
