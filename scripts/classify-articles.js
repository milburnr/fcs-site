#!/usr/bin/env node

/**
 * classify-articles.js
 *
 * Classifies all root-level article pages into their target silo
 * (commercial, residential, or insurance) and produces a machine-readable
 * classification file for subsequent batch-move scripts.
 *
 * Inputs:
 *   - seo/keyword-map.json (page types and keywords)
 *   - lib/constants.ts (SERVICES silo assignments)
 *   - app/ directory scan (filesystem verification)
 *
 * Output:
 *   - seo/article-classification.json
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const KEYWORD_MAP_PATH = path.join(ROOT, 'seo/keyword-map.json');
const OUTPUT_PATH = path.join(ROOT, 'seo/article-classification.json');
const APP_DIR = path.join(ROOT, 'app');

// ---------------------------------------------------------------------------
// 1. SERVICES silo assignments (extracted from lib/constants.ts)
// ---------------------------------------------------------------------------
const SERVICE_SILOS = {
  'commercial-construction': 'commercial',
  'multi-family-construction': 'commercial',
  'disaster-recovery': 'commercial',
  'historic-restoration': 'commercial',
  'luxury-custom-homes': 'residential',
  'balcony-reconstruction': 'commercial',
  'exterior-waterproofing': 'commercial',
  // OTHER_SERVICES
  'building-consultants': 'commercial',
  'insurance-restoration': 'insurance',
  'certified-estimates': 'insurance',
  'expert-witness': 'insurance',
  // Additional service slugs from COMMERCIAL/RESIDENTIAL/INSURANCE_SERVICES
  'condo-remediation': 'commercial',
  'cpm-scheduling': 'commercial',
  'industrial-construction': 'commercial',
  'design-build': 'commercial',
  'waterfront-homes': 'residential',
  'fema-compliance': 'residential',
  'building-consultant': 'insurance',
  'licensed-general-contractor': 'insurance',
  'certified-estimating': 'insurance',
  'appraisal-arbitration': 'insurance',
  'fire-restoration': 'insurance',
  'water-restoration': 'insurance',
  'hurricane-restoration': 'insurance',
  'mold-remediation': 'insurance',
};

// ---------------------------------------------------------------------------
// 2. Location city slugs (service+location pages to EXCLUDE)
// ---------------------------------------------------------------------------
const LOCATION_SUFFIXES = [
  '-tampa', '-clearwater', '-st-petersburg', '-lakeland',
  '-sarasota', '-brandon', '-ruskin', '-largo', '-bradenton',
];

// Also exclude pages that ARE service+location combos (ending in city name)
function isServiceLocationPage(slug) {
  return LOCATION_SUFFIXES.some(suffix => slug.endsWith(suffix));
}

// ---------------------------------------------------------------------------
// 3. Structural / excluded pages
// ---------------------------------------------------------------------------
const EXCLUDED_SLUGS = new Set([
  'contact', 'about', 'team-members', 'team', 'privacy', 'privacy-policy',
  'terms', 'terms-and-conditions', 'premium-homepage', 'blog',
  'gallery', 'resources', 'our-process', 'engineering',
  'other-services', 'services', 'locations',
  // Hub pages resolved in 02-01
  'commercial-construction', 'custom-homes', 'insurance-restoration',
  'disaster-recovery-insurance-restoration',
  // Silo roots
  'commercial', 'residential', 'insurance',
]);

// Service root slugs that are service pages, not articles
const SERVICE_ROOT_SLUGS = new Set([
  'balcony-reconstruction', 'exterior-waterproofing', 'disaster-recovery',
  'historic-restoration', 'luxury-custom-homes', 'multi-family-construction',
  'building-consultants', 'certified-estimates', 'expert-witness',
  'vip-public-adjuster', 'insurance-arbitration-appraisal',
]);

// ---------------------------------------------------------------------------
// 4. Keyword pattern classification
// ---------------------------------------------------------------------------
const COMMERCIAL_PATTERNS = [
  'commercial', 'contractor', 'office', 'retail', 'industrial',
  'project-management', 'value-engineering', 'leed', 'sustainable-commercial',
  'pre-construction', 'design-build', 'tilt-up', 'warehouse', 'tenant',
  'balcony', 'waterproofing', 'historic-restoration', 'concrete', 'steel',
  'roofing', 'multi-family', 'condo', 'construction-management',
  'construction-manager', 'general-contractor', 'subcontract',
  'bidding', 'permits', 'safety-standard', 'modular', 'renovation',
  'remodel', 'blueprint', 'site-planning', 'budgeting', 'cost',
  'sprinkler', 'parking', 'mall', 'church', 'restaurant',
  'real-estate-development', 'real-estate-construction',
  'multi-tenant', 'facade', 'property-value', 'utility-mapping',
  'job-opportunit', 'networking', 'market-analysis', 'construction-law',
  'construction-project', 'building-plans', 'building-code',
  'construction-delay', 'construction-stage', 'construction-timeline',
  'post-construction', 'quality-control', 'construction-loan',
  'construction-insurance', 'construction-consultanc', 'engineering-service',
  'checklist', 'construction-quote', 'construction-regulation',
  'construction-trends', 'construction-technology', 'construction-safety',
  'construction-material', 'net-energy', 'green-contractor',
  'historic', 'preservation', 'cultural-heritage', 'restoration-project',
  'restoration-technique', 'restoration-excellence', 'restoration-effort',
  'restoration-guideline', 'restoration-rule', 'restoration-zoning',
  'restoration-permit', 'restoration-workshop', 'window-restoration',
  'landscape-restoration', 'roof-restoration', 'masonry-restoration',
  'plaster-repair', 'period-accurate', 'adaptive-reuse',
  'construction-process', 'construction-site', 'sustainable-building',
  'sustainable-construction', 'green-construction',
  'community-outreach', 'florida-construction-specialist',
  'preconstruction', 'negotiating-property', 'outdoor-sports',
  'modern-amenities', 'renovating-vs', 'new-construction',
];

const RESIDENTIAL_PATTERNS = [
  'custom-home', 'home-design', 'kitchen', 'bathroom', 'waterfront',
  'luxury-home', 'family-home', 'pet-friendly', 'energy-efficient-custom',
  'aging-in-place', 'smart-home', 'outdoor-living', 'pool', 'garage',
  'master-suite', 'home-renovation', 'residential',
  'home-builder', 'home-theater', 'wine-cellar', 'art-studio',
  'bedroom', 'landscaping-solution', 'bespoke', 'dream-home',
  'luxury-bathroom', 'unique-facade', 'gourmet-kitchen',
  'personalized-office', 'accessibility-feature', 'interior-design-service',
  'multi-generational-home', 'custom-outdoor', 'spacious-family',
  'high-end-home', 'home-improvement', 'building-instead-of-buying',
  'home-construction',
];

const INSURANCE_PATTERNS = [
  'insurance', 'disaster', 'hurricane', 'storm', 'flood', 'fire-damage',
  'water-damage', 'mold', 'claims', 'emergency', 'tornado', 'wind-damage',
  'smoke-damage', 'public-adjuster', 'adjuster', 'restoration-claim',
  'restoration-insurance', 'restoration-compliance', 'restoration-reporting',
  'restoration-documentation', 'restoration-consultation',
  'property-damage-assessment', 'property-damage-restoration',
  'damage-restoration', 'post-disaster', 'damage-assessment',
  'structural-drying', 'electrical-safety-check', 'demolition-service',
  'health-and-safety-inspection', 'interior-restoration',
  'landscaping-restoration', 'rebuilding-service',
  'disaster-prevention', 'disaster-response',
  'maximize-insurance', 'insurance-payout',
  'sb-4-d', 'sb4d', 'sirs', 'milestone-inspection',
  'breakaway-wall', 'fema-50-percent', 'flood-zone',
  'climate-change', 'climate-resilient',
  'reinforced-construction', 'hurricane-proof',
];

// ---------------------------------------------------------------------------
// 5. Content-based fallback keywords (audience targeting)
// ---------------------------------------------------------------------------
const COMMERCIAL_AUDIENCE = [
  'property-manager', 'developer', 'business-owner', 'investor',
  'corporate', 'commercial-property', 'commercial-building',
  'commercial-space', 'work-area', 'office-building',
];

const RESIDENTIAL_AUDIENCE = [
  'homeowner', 'family', 'home-owner', 'custom-home',
  'dream-home', 'residential', 'living-space',
];

const INSURANCE_AUDIENCE = [
  'claim', 'recovery', 'damage-assessment', 'payout',
  'adjuster', 'carrier', 'underwriter',
];

// ---------------------------------------------------------------------------
// Main classification logic
// ---------------------------------------------------------------------------
function classifyArticle(slug) {
  // Step a: SERVICES silo match - check if slug contains a service keyword
  for (const [serviceSlug, silo] of Object.entries(SERVICE_SILOS)) {
    if (slug.includes(serviceSlug)) {
      return { silo, method: 'service-silo', pattern: serviceSlug };
    }
  }

  // Step b: Keyword pattern match
  for (const pattern of INSURANCE_PATTERNS) {
    if (slug.includes(pattern)) {
      return { silo: 'insurance', method: 'keyword-pattern', pattern };
    }
  }

  for (const pattern of RESIDENTIAL_PATTERNS) {
    if (slug.includes(pattern)) {
      return { silo: 'residential', method: 'keyword-pattern', pattern };
    }
  }

  for (const pattern of COMMERCIAL_PATTERNS) {
    if (slug.includes(pattern)) {
      return { silo: 'commercial', method: 'keyword-pattern', pattern };
    }
  }

  // Step c: Content-based fallback (audience targeting)
  for (const kw of INSURANCE_AUDIENCE) {
    if (slug.includes(kw)) {
      return { silo: 'insurance', method: 'audience-fallback', pattern: kw };
    }
  }

  for (const kw of RESIDENTIAL_AUDIENCE) {
    if (slug.includes(kw)) {
      return { silo: 'residential', method: 'audience-fallback', pattern: kw };
    }
  }

  for (const kw of COMMERCIAL_AUDIENCE) {
    if (slug.includes(kw)) {
      return { silo: 'commercial', method: 'audience-fallback', pattern: kw };
    }
  }

  // Ultimate fallback: check the primary_keyword from keyword map
  return null; // will be handled below
}

function getTargetSubfolder(silo) {
  // Articles go into a /guides/ subfolder under their silo
  return `/${silo}/guides/`;
}

function main() {
  // Read keyword map
  const keywordMap = JSON.parse(fs.readFileSync(KEYWORD_MAP_PATH, 'utf8'));
  const pages = keywordMap.pages || [];

  // Get article pages from keyword map
  const articlePages = pages.filter(p => p.page_type === 'article');

  // Also verify filesystem: scan app/ for root-level page.tsx
  const appDirs = fs.readdirSync(APP_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name);

  const rootPagesOnDisk = new Set(
    appDirs.filter(dir => {
      const pagePath = path.join(APP_DIR, dir, 'page.tsx');
      return fs.existsSync(pagePath);
    })
  );

  // Build article slug set from keyword map, excluding structural and service pages
  const articleSlugs = new Set(
    articlePages
      .map(p => p.url.replace(/^\/|\/$/g, ''))
      .filter(slug => !EXCLUDED_SLUGS.has(slug) && !SERVICE_ROOT_SLUGS.has(slug) && !isServiceLocationPage(slug))
  );

  // Also find pages on disk that aren't in keyword map but look like articles
  // (root-level, not excluded, not service+location)
  const additionalArticles = [];
  for (const dir of rootPagesOnDisk) {
    if (articleSlugs.has(dir)) continue;
    if (EXCLUDED_SLUGS.has(dir)) continue;
    if (SERVICE_ROOT_SLUGS.has(dir)) continue;
    if (isServiceLocationPage(dir)) continue;
    // Skip if it's under a silo already
    if (['commercial', 'residential', 'insurance', 'services', 'locations'].includes(dir)) continue;
    // Skip non-content dirs
    if (dir.startsWith('.') || dir === 'api' || dir === 'fonts') continue;
    // This might be an article not in keyword map
    // Only add if it's truly root-level and content-looking
    if (!articleSlugs.has(dir) && dir.length > 3) {
      additionalArticles.push(dir);
    }
  }

  console.log(`\n=== Article Classification ===\n`);
  console.log(`Articles from keyword-map: ${articleSlugs.size}`);
  console.log(`Additional root pages found on disk: ${additionalArticles.length}`);

  // Combine all article slugs
  const allArticleSlugs = [...articleSlugs, ...additionalArticles];

  const results = [];
  const fallbacks = [];
  const counts = { commercial: 0, residential: 0, insurance: 0, total: 0 };

  for (const slug of allArticleSlugs) {
    const classification = classifyArticle(slug);

    if (!classification) {
      // Last resort: default to commercial (construction company, most content is commercial)
      fallbacks.push(slug);
      results.push({
        slug,
        currentPath: `/${slug}/`,
        targetSilo: 'commercial',
        targetPath: `/commercial/guides/${slug}/`,
        classifiedBy: 'default-fallback',
        matchedPattern: 'none (defaulted to commercial)',
      });
      counts.commercial++;
    } else {
      results.push({
        slug,
        currentPath: `/${slug}/`,
        targetSilo: classification.silo,
        targetPath: `${getTargetSubfolder(classification.silo)}${slug}/`,
        classifiedBy: classification.method,
        matchedPattern: classification.pattern,
      });
      counts[classification.silo]++;
    }
    counts.total++;
  }

  // Sort results by silo then slug
  results.sort((a, b) => {
    if (a.targetSilo !== b.targetSilo) return a.targetSilo.localeCompare(b.targetSilo);
    return a.slug.localeCompare(b.slug);
  });

  // Output JSON
  const output = {
    generated: new Date().toISOString(),
    counts,
    classificationMethods: {
      'service-silo': results.filter(r => r.classifiedBy === 'service-silo').length,
      'keyword-pattern': results.filter(r => r.classifiedBy === 'keyword-pattern').length,
      'audience-fallback': results.filter(r => r.classifiedBy === 'audience-fallback').length,
      'default-fallback': results.filter(r => r.classifiedBy === 'default-fallback').length,
    },
    articles: results,
  };

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(output, null, 2));

  // Print summary
  console.log(`\n--- Classification Results ---`);
  console.log(`Commercial:  ${counts.commercial}`);
  console.log(`Residential: ${counts.residential}`);
  console.log(`Insurance:   ${counts.insurance}`);
  console.log(`Total:       ${counts.total}`);

  console.log(`\n--- Classification Methods ---`);
  console.log(`Service silo match:  ${output.classificationMethods['service-silo']}`);
  console.log(`Keyword pattern:     ${output.classificationMethods['keyword-pattern']}`);
  console.log(`Audience fallback:   ${output.classificationMethods['audience-fallback']}`);
  console.log(`Default fallback:    ${output.classificationMethods['default-fallback']}`);

  if (fallbacks.length > 0) {
    console.log(`\n--- Default Fallback Articles (${fallbacks.length}) ---`);
    fallbacks.forEach(s => console.log(`  ${s}`));
  }

  console.log(`\n✓ Written to: seo/article-classification.json\n`);
}

main();
