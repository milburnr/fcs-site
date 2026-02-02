/**
 * Image Mapping Strategy for FCS Website
 *
 * Maps page categories to appropriate background images from the WordPress library.
 * All images are in /wp-content/uploads/2023/12/
 */

const BASE_PATH = "/wp-content/uploads/2023/12";

// AI-generated optimized images (SEO-friendly, geotagged for Tampa)
export const AI_IMAGES = {
  // Commercial service card images
  medical: "/images/tampa-medical-facility-construction/tampa-medical-facility-construction-small.webp",
  multifamily: "/images/tampa-multifamily-housing-construction/tampa-multifamily-housing-construction-small.webp",
  industrial: "/images/tampa-industrial-warehouse-construction/tampa-industrial-warehouse-construction-small.webp",
  historic: "/images/tampa-historic-building-restoration/tampa-historic-building-restoration-small.webp",
  condo: "/images/tampa-condo-building-construction/tampa-condo-building-construction-small.webp",
  office: "/images/tampa-commercial-office-construction/tampa-commercial-office-construction-small.webp",
  retail: "/images/tampa-retail-plaza-construction/tampa-retail-plaza-construction-small.webp",
  apartment: "/images/tampa-apartment-complex-construction/tampa-apartment-complex-construction-small.webp",
  church: "/images/tampa-church-building-construction/tampa-church-building-construction-small.webp",
  hurricane: "/images/tampa-hurricane-damage-restoration/tampa-hurricane-damage-restoration-small.webp",
  
  // Hero images
  commercialHero: "/images/tampa-commercial-construction-hero/tampa-commercial-construction-hero-small.webp",
  craneHero: "/images/construction-crane-silhouette-tampa/construction-crane-silhouette-tampa-small.webp",
  skyline: "/images/tampa-bay-skyline-construction/tampa-bay-skyline-construction-small.webp",
  
  // Residential
  luxury: "/images/tampa-luxury-custom-home-construction/tampa-luxury-custom-home-construction-small.webp",
  waterfront: "/images/tampa-waterfront-home-construction/tampa-waterfront-home-construction-small.webp",
  balcony: "/images/tampa-condo-balcony-restoration/tampa-condo-balcony-restoration-small.webp",
  roofRestoration: "/images/tampa-roof-restoration-aerial/tampa-roof-restoration-aerial-small.webp",
} as const;

// Alt text for AI images (for SEO and accessibility)
export const AI_IMAGE_ALT = {
  medical: "Modern medical facility construction in Tampa Bay Florida",
  multifamily: "Multi-family housing development construction Tampa Bay",
  industrial: "Industrial warehouse facility construction in Tampa Bay",
  historic: "Historic building restoration Tampa Bay Florida",
  condo: "Condominium building construction in Tampa Bay Florida",
  office: "Modern commercial office building construction Tampa Bay",
  retail: "Retail plaza shopping center construction Tampa Bay",
  apartment: "Multi-story apartment complex construction in Tampa Bay Florida",
  church: "Modern church building construction project in Tampa Bay",
  hurricane: "Hurricane damage restoration services Tampa Bay",
  commercialHero: "Tampa Bay commercial construction general contractor",
  craneHero: "Construction crane silhouette against sunset Tampa Bay",
  skyline: "Tampa Bay Florida skyline commercial construction",
  luxury: "Luxury custom home construction Tampa Bay Florida",
  waterfront: "Waterfront custom home construction Tampa Bay",
  balcony: "Condominium balcony restoration Tampa Bay Florida",
  roofRestoration: "Aerial view roof restoration project Tampa Bay",
} as const;

// Primary hero/background images for each service category
export const SERVICE_HERO_IMAGES = {
  // Commercial Construction
  commercial: {
    primary: `${BASE_PATH}/Lions-World-Vision-Institute-Building-Exterior.jpg`,
    alt: [
      `${BASE_PATH}/office-building-1.jpg`,
      `${BASE_PATH}/facility-building-turner-agricivic-center-arcadia-fl.jpg`,
      `${BASE_PATH}/frame-building-sunset.jpeg`,
    ],
  },

  // Multi-Family / Condos
  multiFamily: {
    primary: `${BASE_PATH}/southwinds-condo-front.jpeg`,
    alt: [
      `${BASE_PATH}/OVERBAY-CONDOMINIUMS_REV3_10-19-18_Page_28.png`,
      `${BASE_PATH}/tiara-singer-island-hero.23.webp`,
    ],
  },

  // Balcony Reconstruction
  balcony: {
    primary: `${BASE_PATH}/FCS-Tiles-on-balcony.webp`,
    alt: [
      `${BASE_PATH}/Balconies1-1024x415.png`,
      `${BASE_PATH}/railing-replacement-best-practices-condos.webp`,
    ],
  },

  // Exterior Waterproofing
  waterproofing: {
    primary: `${BASE_PATH}/FCS-Exterior-Waterproofing.png`,
    alt: [`${BASE_PATH}/FCS-commercial-exterior-waterproofing.png`],
  },

  // Historic Restoration
  historic: {
    primary: `${BASE_PATH}/historic-preservation.jpg`,
    alt: [
      `${BASE_PATH}/Italian-Club.png`,
      `${BASE_PATH}/italian-club-tampa.jpg`,
      `${BASE_PATH}/historic-preservation-home.jpg`,
      `${BASE_PATH}/plant-high-school.webp`,
      `${BASE_PATH}/GulfBeachesMuseum.webp`,
    ],
  },

  // Disaster Recovery / Insurance Restoration
  disaster: {
    primary: `${BASE_PATH}/hurricane-insurance-restoration.webp`,
    alt: [
      `${BASE_PATH}/Ian-2.jpg`,
      `${BASE_PATH}/hurricane-ian.webp`,
      `${BASE_PATH}/hurricane-restoration.jpg`,
      `${BASE_PATH}/hurricane-restoration-construction.jpg`,
      `${BASE_PATH}/home-hero-after-great-disasters-sandy-crop.jpg`,
      `${BASE_PATH}/rebuild-superJumbo.jpg`,
    ],
  },

  // Custom Homes / Luxury Residential
  customHomes: {
    primary: `${BASE_PATH}/custom-home-construction-2.jpg`,
    alt: [
      `${BASE_PATH}/custom-home-1.png`,
      `${BASE_PATH}/custom-home2.png`,
      `${BASE_PATH}/custom-home-construction-1.jpg`,
      `${BASE_PATH}/custom-home-construction-3.jpg`,
      `${BASE_PATH}/custom-home-construction-4.jpg`,
      `${BASE_PATH}/custom-home-construction-5.jpg`,
      `${BASE_PATH}/Custom-home-2.jpg`,
      `${BASE_PATH}/new-home-1664284_1280.jpg`,
      `${BASE_PATH}/new-home-1664272_1280.jpg`,
      `${BASE_PATH}/hd-swimming-pool-water-blue-1080.jpg`,
    ],
  },

  // General Construction
  general: {
    primary: `${BASE_PATH}/home-construction.jpg`,
    alt: [
      `${BASE_PATH}/bulldozer-2195329_1280.jpg`,
      `${BASE_PATH}/blueprint-370588_1280.jpg`,
      `${BASE_PATH}/floor-plan-1857175_1280.jpg`,
      `${BASE_PATH}/roof-truss-3339206_1280.jpg`,
      `${BASE_PATH}/roofing-construction-job.jpg`,
      `${BASE_PATH}/Replacing-roof-decking-and-rafters.jpg`,
    ],
  },

  // Medical Facilities
  medical: {
    primary: `${BASE_PATH}/Lions-World-Vision-Institute-Building-Exterior.jpg`,
    alt: [`${BASE_PATH}/office-building-1.jpg`],
  },

  // Industrial / Mining
  industrial: {
    primary: `${BASE_PATH}/Mulberry-Phosphate-Mine.png`,
    alt: [`${BASE_PATH}/mines1.png`, `${BASE_PATH}/mines2.png`],
  },

  // Retail / Mall
  retail: {
    primary: `${BASE_PATH}/mall-front.jpg`,
    alt: [`${BASE_PATH}/mall-2.jpg`],
  },

  // Tampa Bay Area
  tampaBay: {
    primary: `${BASE_PATH}/Tampa-Bay-FEATURE.jpg`,
    alt: [`${BASE_PATH}/Downtown-Tampa-Over-The-Bay-At-Sunrise-1024x682-1.jpg`],
  },
} as const;

// Parallax section images (used for fixed background sections)
// Using optimized WebP versions where available for better performance
export const PARALLAX_IMAGES = {
  construction: `/images/home-construction/home-construction-large.webp`,
  office: `/images/office-building-1/office-building-1-large.webp`,
  sunset: `/images/frame-building-sunset/frame-building-sunset-large.webp`,
  historic: `/images/historic-preservation-home/historic-preservation-home-display.webp`,
  roofing: `/images/roofing-construction-job/roofing-construction-job-large.webp`,
  hurricane: `/images/hurricane-insurance-restoration/hurricane-insurance-restoration-display.webp`,
  customHome: `/images/custom-home-construction-2/custom-home-construction-2-large.webp`,
  tampaBay: `${BASE_PATH}/Tampa-Bay-FEATURE.jpg`, // Not optimized yet
  balcony: `${BASE_PATH}/FCS-Tiles-on-balcony.webp`, // Not optimized yet
  waterproofing: `${BASE_PATH}/FCS-Exterior-Waterproofing.png`, // Not optimized yet
  // Aliases for hub pages
  commercial: `/images/office-building-1/office-building-1-large.webp`,
  residential: `/images/custom-home-construction-2/custom-home-construction-2-large.webp`,
} as const;

// Map URL patterns to image categories
export function getImageForPage(slug: string): string {
  const lowerSlug = slug.toLowerCase();

  // Commercial construction
  if (
    lowerSlug.includes("commercial-construction") ||
    lowerSlug.includes("office") ||
    lowerSlug.includes("retail") ||
    lowerSlug.includes("warehouse")
  ) {
    return SERVICE_HERO_IMAGES.commercial.primary;
  }

  // Multi-family
  if (
    lowerSlug.includes("multi-family") ||
    lowerSlug.includes("condo") ||
    lowerSlug.includes("apartment")
  ) {
    return SERVICE_HERO_IMAGES.multiFamily.primary;
  }

  // Balcony
  if (lowerSlug.includes("balcony") || lowerSlug.includes("railing")) {
    return SERVICE_HERO_IMAGES.balcony.primary;
  }

  // Waterproofing
  if (lowerSlug.includes("waterproof")) {
    return SERVICE_HERO_IMAGES.waterproofing.primary;
  }

  // Historic restoration
  if (
    lowerSlug.includes("historic") ||
    lowerSlug.includes("restoration") ||
    lowerSlug.includes("preservation")
  ) {
    return SERVICE_HERO_IMAGES.historic.primary;
  }

  // Disaster / Insurance / Hurricane
  if (
    lowerSlug.includes("disaster") ||
    lowerSlug.includes("hurricane") ||
    lowerSlug.includes("storm") ||
    lowerSlug.includes("insurance-restoration") ||
    lowerSlug.includes("flood") ||
    lowerSlug.includes("damage")
  ) {
    return SERVICE_HERO_IMAGES.disaster.primary;
  }

  // Custom homes / Luxury / Residential
  if (
    lowerSlug.includes("custom-home") ||
    lowerSlug.includes("luxury") ||
    lowerSlug.includes("residential") ||
    lowerSlug.includes("home-construction")
  ) {
    return SERVICE_HERO_IMAGES.customHomes.primary;
  }

  // Medical
  if (
    lowerSlug.includes("medical") ||
    lowerSlug.includes("healthcare") ||
    lowerSlug.includes("hospital")
  ) {
    return SERVICE_HERO_IMAGES.medical.primary;
  }

  // Industrial
  if (
    lowerSlug.includes("industrial") ||
    lowerSlug.includes("manufacturing") ||
    lowerSlug.includes("mine")
  ) {
    return SERVICE_HERO_IMAGES.industrial.primary;
  }

  // Retail / Mall
  if (lowerSlug.includes("mall") || lowerSlug.includes("retail")) {
    return SERVICE_HERO_IMAGES.retail.primary;
  }

  // Tampa-specific
  if (lowerSlug.includes("tampa")) {
    return SERVICE_HERO_IMAGES.tampaBay.primary;
  }

  // Default to general construction
  return SERVICE_HERO_IMAGES.general.primary;
}

// Get alternate images for variety (useful for galleries or multiple sections)
export function getAlternateImages(category: keyof typeof SERVICE_HERO_IMAGES): readonly string[] {
  return SERVICE_HERO_IMAGES[category]?.alt || [];
}

// Get a specific parallax image
export function getParallaxImage(type: keyof typeof PARALLAX_IMAGES): string {
  return PARALLAX_IMAGES[type];
}

/**
 * Page Category Mapping for batch processing
 * Maps URL patterns to service categories for bulk image assignment
 */
export const PAGE_CATEGORY_PATTERNS = {
  commercial: [
    /commercial-construction/,
    /office-building/,
    /business-construction/,
    /facility-expansion/,
    /commercial-renovation/,
    /commercial-contractor/,
    /commercial-project/,
    /commercial-building/,
    /construction-management/,
    /general-contractor/,
    /design-build/,
    /pre-construction/,
    /post-construction/,
  ],
  multiFamily: [
    /multi-family/,
    /condo/,
    /apartment/,
    /housing-complex/,
    /overbay/,
    /tiara/,
  ],
  balcony: [
    /balcony/,
    /railing/,
    /deck/,
    /sb4-?d/i,
    /milestone-inspection/,
  ],
  waterproofing: [
    /waterproof/,
    /water-damage/,
    /moisture/,
    /basement/,
    /foundation.*water/,
  ],
  historic: [
    /historic/,
    /preservation/,
    /landmark/,
    /heritage/,
    /ybor/,
    /italian-club/,
    /tampa-heights/,
  ],
  disaster: [
    /disaster/,
    /hurricane/,
    /storm/,
    /insurance-restoration/,
    /flood/,
    /fire-damage/,
    /wind-damage/,
    /emergency/,
    /ian/,
  ],
  customHomes: [
    /custom-home/,
    /luxury.*home/,
    /residential.*construction/,
    /home-building/,
    /spacious.*home/,
    /waterfront.*home/,
    /estate/,
    /davis-islands/,
    /hyde-park/,
    /south-tampa/,
  ],
  medical: [
    /medical/,
    /healthcare/,
    /hospital/,
    /clinic/,
    /ahca/,
    /senior-living/,
  ],
  industrial: [
    /industrial/,
    /warehouse/,
    /manufacturing/,
    /flex-space/,
    /tilt-wall/,
  ],
  retail: [/retail/, /mall/, /store-design/, /shopping/],
  general: [
    /construction-cost/,
    /construction-safety/,
    /construction-permit/,
    /construction-timeline/,
    /construction-budget/,
    /construction-material/,
    /contractor/,
    /subcontractor/,
  ],
} as const;

/**
 * Categorize a page URL into a service category
 */
export function categorizePageUrl(url: string): keyof typeof SERVICE_HERO_IMAGES {
  const lowerUrl = url.toLowerCase();

  for (const [category, patterns] of Object.entries(PAGE_CATEGORY_PATTERNS)) {
    for (const pattern of patterns) {
      if (pattern.test(lowerUrl)) {
        return category as keyof typeof SERVICE_HERO_IMAGES;
      }
    }
  }

  return "general";
}
