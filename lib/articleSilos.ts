/**
 * Article Silo Assignments
 * ========================
 * Maps articles to their strict parent silos for the Double Helix strategy.
 * NO cross-silo linking is allowed.
 *
 * Usage:
 *   import { getArticleSilo, getRelatedArticles } from '@/lib/articleSilos';
 *   const silo = getArticleSilo('/article-slug/');
 *   const related = getRelatedArticles('/article-slug/', 5);
 */

export type Silo = 'commercial' | 'residential';
export type Cluster =
  // Commercial clusters
  | 'medical-construction'
  | 'industrial-construction'
  | 'historic-restoration-commercial'
  | 'condo-remediation'
  | 'multi-family-disaster'
  | 'multi-family-construction'
  // Residential clusters
  | 'south-tampa-regulatory'
  | 'coastal-resilience'
  | 'luxury-custom-homes'
  | 'waterfront-construction'
  | 'historic-preservation-residential';

interface ArticleInfo {
  title: string;
  silo: Silo;
  cluster: Cluster;
}

/**
 * Commercial Silo Articles
 * Theme: Risk Mitigation, ROI, & Logistics
 */
export const COMMERCIAL_ARTICLES: Record<string, ArticleInfo> = {
  // Medical Construction
  '/ahca-compliance-medical-construction/': {
    title: 'Navigating AHCA Inspections for Medical Facilities',
    silo: 'commercial',
    cluster: 'medical-construction',
  },
  '/medical-office-value-engineering/': {
    title: 'Medical Office Value Engineering',
    silo: 'commercial',
    cluster: 'medical-construction',
  },
  '/clean-room-construction-standards/': {
    title: 'Clean Room Construction Standards',
    silo: 'commercial',
    cluster: 'medical-construction',
  },

  // Industrial & Large Scale
  '/cpm-scheduling-commercial-construction/': {
    title: 'CPM Scheduling to Prevent Commercial Project Delays',
    silo: 'commercial',
    cluster: 'industrial-construction',
  },
  '/tilt-wall-vs-metal-buildings/': {
    title: 'Tilt-Wall vs Metal Buildings',
    silo: 'commercial',
    cluster: 'industrial-construction',
  },
  '/warehouse-construction-tampa-bay/': {
    title: 'Warehouse Construction in Tampa Bay',
    silo: 'commercial',
    cluster: 'industrial-construction',
  },

  // Historic Restoration (Commercial)
  '/tampa-historic-social-clubs-restoration/': {
    title: "Tampa's Historic Social Clubs Restoration",
    silo: 'commercial',
    cluster: 'historic-restoration-commercial',
  },
  '/florida-shpo-requirements/': {
    title: 'Navigating Florida SHPO Requirements',
    silo: 'commercial',
    cluster: 'historic-restoration-commercial',
  },
  '/historic-tax-credits-commercial/': {
    title: 'Historic Tax Credits for Commercial Buildings',
    silo: 'commercial',
    cluster: 'historic-restoration-commercial',
  },

  // Condo Remediation & Compliance
  '/sb4d-compliance-guide/': {
    title: 'Florida SB4-D Compliance Guide for Condo Associations',
    silo: 'commercial',
    cluster: 'condo-remediation',
  },
  '/milestone-inspection-requirements/': {
    title: 'Milestone Inspection Requirements Explained',
    silo: 'commercial',
    cluster: 'condo-remediation',
  },
  '/sirs-structural-integrity-reserve-studies/': {
    title: 'SIRS Structural Integrity Reserve Studies',
    silo: 'commercial',
    cluster: 'condo-remediation',
  },

  // Multi-Family Disaster Recovery
  '/multi-family-flood-restoration/': {
    title: 'Multi-Family Flood Damage Restoration Process',
    silo: 'commercial',
    cluster: 'multi-family-disaster',
  },
  '/insurance-restoration-condo-associations/': {
    title: 'Insurance Restoration for Condo Associations',
    silo: 'commercial',
    cluster: 'multi-family-disaster',
  },
  '/common-area-reconstruction-disasters/': {
    title: 'Common Area Reconstruction After Disasters',
    silo: 'commercial',
    cluster: 'multi-family-disaster',
  },
};

/**
 * Residential Silo Articles
 * Theme: Vision, Legacy, & Regulatory Mastery
 */
export const RESIDENTIAL_ARTICLES: Record<string, ArticleInfo> = {
  // South Tampa Regulatory
  '/hyde-park-renovation-guide/': {
    title: 'The Hyde Park Renovation Guide',
    silo: 'residential',
    cluster: 'south-tampa-regulatory',
  },
  '/sourcing-historic-materials-tampa/': {
    title: 'Sourcing Historic Materials in Tampa Bay',
    silo: 'residential',
    cluster: 'south-tampa-regulatory',
  },
  '/certificate-of-appropriateness-process/': {
    title: 'Certificate of Appropriateness Process',
    silo: 'residential',
    cluster: 'south-tampa-regulatory',
  },

  // Coastal Resilience
  '/fema-50-percent-rule-explained/': {
    title: 'The FEMA 50% Rule Explained',
    silo: 'residential',
    cluster: 'coastal-resilience',
  },
  '/waterproofing-historic-masonry/': {
    title: 'Waterproofing Historic Masonry',
    silo: 'residential',
    cluster: 'coastal-resilience',
  },
  '/flood-zone-ve-vs-ae/': {
    title: 'Flood Zone VE vs AE: What Homeowners Need to Know',
    silo: 'residential',
    cluster: 'coastal-resilience',
  },
  '/breakaway-wall-construction/': {
    title: 'Breakaway Wall Construction Requirements',
    silo: 'residential',
    cluster: 'coastal-resilience',
  },

  // Luxury Custom Homes
  '/waterfront-home-construction-tampa/': {
    title: 'Building on Tampa Bay Waterfront Lots',
    silo: 'residential',
    cluster: 'luxury-custom-homes',
  },
  '/smart-home-integration-luxury-estates/': {
    title: 'Smart Home Integration for Luxury Estates',
    silo: 'residential',
    cluster: 'luxury-custom-homes',
  },
  '/hurricane-resistant-luxury-home-design/': {
    title: 'Hurricane-Resistant Luxury Home Design',
    silo: 'residential',
    cluster: 'luxury-custom-homes',
  },
  '/davis-islands-custom-home-building/': {
    title: 'Davis Islands Custom Home Building',
    silo: 'residential',
    cluster: 'luxury-custom-homes',
  },

  // Waterfront Construction
  '/seawall-coordination-new-construction/': {
    title: 'Seawall Coordination for New Construction',
    silo: 'residential',
    cluster: 'waterfront-construction',
  },
  '/marine-grade-building-materials/': {
    title: 'Marine-Grade Building Materials Guide',
    silo: 'residential',
    cluster: 'waterfront-construction',
  },

  // Historic Preservation (Residential)
  '/renovating-historic-homes-tampa/': {
    title: 'Renovating Historic Homes in Tampa',
    silo: 'residential',
    cluster: 'historic-preservation-residential',
  },
  '/period-accurate-material-sourcing/': {
    title: 'Period-Accurate Material Sourcing',
    silo: 'residential',
    cluster: 'historic-preservation-residential',
  },
};

/**
 * Combined article map
 */
export const ARTICLE_SILOS = {
  ...COMMERCIAL_ARTICLES,
  ...RESIDENTIAL_ARTICLES,
};

/**
 * Silo configuration
 */
export const SILO_CONFIG = {
  commercial: {
    hub: '/commercial/',
    theme: 'Risk & Logistics',
    schemaType: 'GeneralContractor' as const,
    clusters: [
      'medical-construction',
      'industrial-construction',
      'historic-restoration-commercial',
      'condo-remediation',
      'multi-family-disaster',
      'multi-family-construction',
    ],
  },
  residential: {
    hub: '/residential/',
    theme: 'Design & Regulation',
    schemaType: 'HomeAndConstructionBusiness' as const,
    clusters: [
      'south-tampa-regulatory',
      'coastal-resilience',
      'luxury-custom-homes',
      'waterfront-construction',
      'historic-preservation-residential',
    ],
  },
};

/**
 * Get the silo for a given article path
 * Returns null for articles not in the map
 */
export function getArticleSilo(path: string): Silo | null {
  const article = ARTICLE_SILOS[path];
  return article?.silo ?? null;
}

/**
 * Get the cluster for a given article path
 */
export function getArticleCluster(path: string): Cluster | null {
  const article = ARTICLE_SILOS[path];
  return article?.cluster ?? null;
}

/**
 * Get related articles in the same silo and cluster
 * Returns up to `limit` articles, prioritizing same cluster
 */
export function getRelatedArticles(currentPath: string, limit = 5): Array<{ path: string; title: string; cluster: Cluster }> {
  const current = ARTICLE_SILOS[currentPath];
  if (!current) return [];

  const related: Array<{ path: string; title: string; cluster: Cluster; priority: number }> = [];

  // Get all articles in the same silo
  const siloArticles = current.silo === 'commercial' ? COMMERCIAL_ARTICLES : RESIDENTIAL_ARTICLES;

  for (const [path, article] of Object.entries(siloArticles)) {
    if (path === currentPath) continue;

    related.push({
      path,
      title: article.title,
      cluster: article.cluster,
      // Same cluster = higher priority
      priority: article.cluster === current.cluster ? 1 : 2,
    });
  }

  // Sort by priority (same cluster first), then limit
  return related
    .sort((a, b) => a.priority - b.priority)
    .slice(0, limit)
    .map(({ path, title, cluster }) => ({ path, title, cluster }));
}

/**
 * Get the hub URL for a given silo
 */
export function getSiloHub(silo: Silo): string {
  return SILO_CONFIG[silo].hub;
}

/**
 * Check if an internal link is allowed (same silo or neutral page)
 */
export function isLinkAllowed(fromPath: string, toPath: string): boolean {
  // Neutral pages can link anywhere
  const neutralPages = ['/', '/about/', '/contact/', '/locations/', '/portfolio/'];
  if (neutralPages.includes(fromPath)) return true;

  // Check silo assignments
  const fromSilo = getArticleSilo(fromPath);
  const toSilo = getArticleSilo(toPath);

  // If either is not in a silo, allow the link
  if (!fromSilo || !toSilo) return true;

  // Only allow same-silo links
  return fromSilo === toSilo;
}
