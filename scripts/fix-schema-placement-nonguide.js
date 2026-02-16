#!/usr/bin/env node
/**
 * fix-schema-placement-nonguide.js
 *
 * Task 2: Fix schema placement on non-guide pages:
 * 1. Remove LocalBusinessSchema from pages that shouldn't have it
 * 2. Add ServiceSchema with serviceCategories to core service hub pages
 * 3. Add serviceCategories to existing ServiceSchema on service pages
 * 4. Remove LocalBusinessSchema from guide index pages
 */

const fs = require('fs');
const path = require('path');

const APP_DIR = path.join(__dirname, '..', 'app');

// Pages that SHOULD keep LocalBusinessSchema:
// - HomePageClient.tsx (homepage)
// - locations/{city}/page.tsx (9 city pages)
// - {service}-{city}/page.tsx (service-location pages, 9 services x 8 cities)
const TRUE_SERVICES = [
  'balcony-reconstruction', 'commercial-construction', 'condo-remediation',
  'disaster-recovery', 'exterior-waterproofing', 'historic-restoration',
  'insurance-restoration', 'luxury-custom-homes', 'multi-family-construction'
];
const CITIES = [
  'tampa', 'st-petersburg', 'clearwater', 'lakeland',
  'sarasota', 'bradenton', 'brandon', 'ruskin'
];

// Service categories for each service type
const SERVICE_CATEGORIES = {
  'commercial-construction': {
    name: 'Commercial Construction',
    description: 'Large-scale commercial construction from $500K to $25M+. Design-build, medical facilities, office buildings, retail, and industrial construction across Tampa Bay.',
    categories: ['Design-Build Construction', 'Medical Facilities', 'Office Buildings', 'Retail Construction', 'Industrial Construction']
  },
  'multi-family-construction': {
    name: 'Multi-Family Construction',
    description: 'Tampa Bay multi-family construction: condominiums, apartments, townhomes, senior living, and mixed-use developments from $1M to $50M+.',
    categories: ['Condominiums', 'Apartment Complexes', 'Townhomes', 'Senior Living Facilities', 'Mixed-Use Developments']
  },
  'disaster-recovery': {
    name: 'Disaster Recovery',
    description: 'Emergency disaster recovery and restoration services for commercial and residential properties across Tampa Bay. Hurricane, fire, water, and storm damage repair.',
    categories: ['Hurricane Damage Repair', 'Fire Restoration', 'Water Damage Restoration', 'Storm Damage Recovery', 'Emergency Board-Up']
  },
  'historic-restoration': {
    name: 'Historic Restoration',
    description: 'Historic building restoration and preservation in Tampa Bay. Period-accurate renovation, structural repair, and adaptive reuse of historic properties.',
    categories: ['Period-Accurate Renovation', 'Structural Repair', 'Adaptive Reuse', 'Facade Restoration', 'Historic Preservation']
  },
  'luxury-custom-homes': {
    name: 'Luxury Custom Homes',
    description: 'Custom luxury home construction in Tampa Bay. Bespoke design, premium materials, smart home integration, and waterfront properties.',
    categories: ['Custom Home Design', 'Waterfront Properties', 'Smart Home Integration', 'Premium Materials', 'Outdoor Living Spaces']
  },
  'balcony-reconstruction': {
    name: 'Balcony Reconstruction',
    description: 'Professional balcony reconstruction and structural repair across Tampa Bay. SB4-D compliance, waterproofing, railing replacement, and concrete restoration.',
    categories: ['Structural Repair', 'Waterproofing', 'Railing Replacement', 'Concrete Restoration', 'SB4-D Compliance']
  },
  'exterior-waterproofing': {
    name: 'Exterior Waterproofing',
    description: 'Commercial and residential exterior waterproofing services in Tampa Bay. Building envelope, foundation, below-grade, and deck waterproofing.',
    categories: ['Building Envelope Waterproofing', 'Foundation Waterproofing', 'Deck Coatings', 'Caulking and Sealants', 'Drainage Systems']
  },
  'condo-remediation': {
    name: 'Condo Remediation',
    description: 'Condominium remediation and structural repair services across Tampa Bay. Concrete restoration, rebar repair, waterproofing, and milestone inspections.',
    categories: ['Concrete Restoration', 'Rebar Repair', 'Structural Waterproofing', 'Milestone Inspections', 'Common Area Renovation']
  },
  'insurance-restoration': {
    name: 'Insurance Restoration',
    description: 'Insurance restoration contractor for Tampa Bay properties. Claims management, damage assessment, certified estimates, and full restoration services.',
    categories: ['Claims Management', 'Damage Assessment', 'Certified Estimating', 'Full Property Restoration', 'Public Adjuster Coordination']
  },
  // Silo hub pages
  'commercial': {
    name: 'Commercial Construction Services',
    description: 'Full-service commercial construction: design-build, tenant improvements, retail, medical, industrial, and multi-family across Tampa Bay.',
    categories: ['Design-Build', 'Tenant Improvements', 'Retail Construction', 'Medical Facilities', 'Industrial Construction']
  },
  'residential': {
    name: 'Residential Construction Services',
    description: 'Custom residential construction across Tampa Bay: luxury homes, additions, remodeling, hurricane-resistant construction, and kitchen renovations.',
    categories: ['Custom Home Building', 'Home Additions', 'Kitchen Remodeling', 'Hurricane-Resistant Construction', 'Whole-Home Renovation']
  },
  'insurance': {
    name: 'Insurance Restoration Services',
    description: 'Comprehensive insurance restoration: hurricane, fire, water, and mold damage repair with certified estimating and claims support across Tampa Bay.',
    categories: ['Hurricane Restoration', 'Fire Restoration', 'Water Restoration', 'Mold Remediation', 'Certified Estimating']
  }
};

function isServiceLocationPage(rel) {
  for (const svc of TRUE_SERVICES) {
    for (const city of CITIES) {
      if (rel === `${svc}-${city}`) return true;
    }
  }
  return false;
}

function isLocationPage(rel) {
  return /^locations\/[a-z]/.test(rel) && rel !== 'locations';
}

function isHomePage(rel) {
  return rel === 'HomePageClient';
}

function shouldKeepLocalBusiness(rel) {
  return isHomePage(rel) || isLocationPage(rel) || isServiceLocationPage(rel);
}

function getServiceType(rel) {
  // service-location pages: extract service prefix
  for (const svc of TRUE_SERVICES) {
    for (const city of CITIES) {
      if (rel === `${svc}-${city}`) return svc;
    }
  }
  // Hub pages
  for (const svc of TRUE_SERVICES) {
    if (rel === svc) return svc;
  }
  // Silo hubs
  if (['commercial', 'residential', 'insurance'].includes(rel)) return rel;
  return null;
}

function removeLocalBusinessSchema(source) {
  // Remove JSX: <LocalBusinessSchema /> or <LocalBusinessSchema city="..." /> etc.
  let modified = source.replace(/\s*<LocalBusinessSchema\s*(?:\/?>|[^>]*\/>)\n?/g, '\n');

  // Remove from import
  if (modified.includes('LocalBusinessSchema')) {
    modified = modified.replace(
      /import\s*\{([^}]*)\}\s*from\s*["']@\/components\/Schema["'];?/,
      (match, imports) => {
        const items = imports.split(',').map(s => s.trim()).filter(Boolean);
        const filtered = items.filter(i => i !== 'LocalBusinessSchema');
        if (filtered.length === 0) return '';
        return `import { ${filtered.join(', ')} } from "@/components/Schema";`;
      }
    );
  }
  return modified;
}

function addServiceCategories(source, serviceType) {
  const config = SERVICE_CATEGORIES[serviceType];
  if (!config) return source;

  // Check if serviceCategories is already present
  if (source.includes('serviceCategories')) return source;

  // Find ServiceSchema JSX and add serviceCategories prop
  // Pattern: <ServiceSchema\n  serviceName="..."\n  serviceDescription="..."\n  (optional city="...")\n/>
  const pattern = /(<ServiceSchema\s*\n(?:\s+\w+="[^"]*"\n)*?)(\s*(?:city="[^"]*"\n\s*)?)\s*\/>/;

  if (pattern.test(source)) {
    source = source.replace(pattern, (match, before, cityLine) => {
      const categoriesStr = JSON.stringify(config.categories);
      // Add serviceCategories before the closing />
      const cleanedCityLine = cityLine.trimEnd();
      if (cleanedCityLine) {
        return `${before}${cleanedCityLine}\n        serviceCategories={${categoriesStr}}\n      />`;
      }
      return `${before}        serviceCategories={${categoriesStr}}\n      />`;
    });
  } else {
    // Try simpler pattern: single-line or different formatting
    // Look for the closing /> of ServiceSchema
    const simplePattern = /(serviceDescription="[^"]*")\s*\n(\s*)(city="[^"]*"\s*\n\s*)?\/>/;
    if (simplePattern.test(source)) {
      source = source.replace(simplePattern, (match, desc, indent, cityProp) => {
        const categoriesStr = JSON.stringify(config.categories);
        if (cityProp) {
          return `${desc}\n${indent}${cityProp.trim()}\n${indent}serviceCategories={${categoriesStr}}\n${indent}/>`;
        }
        return `${desc}\n${indent}serviceCategories={${categoriesStr}}\n${indent}/>`;
      });
    }
  }

  return source;
}

function addServiceSchema(source, serviceType) {
  const config = SERVICE_CATEGORIES[serviceType];
  if (!config) return source;

  // Add ServiceSchema to import
  if (!source.includes('ServiceSchema')) {
    if (source.includes('@/components/Schema')) {
      source = source.replace(
        /import\s*\{([^}]*)\}\s*from\s*["']@\/components\/Schema["'];?/,
        (match, imports) => {
          const items = imports.split(',').map(s => s.trim()).filter(Boolean);
          items.push('ServiceSchema');
          return `import { ${items.join(', ')} } from "@/components/Schema";`;
        }
      );
    } else {
      // Add new import after last import
      const lastImportIdx = source.lastIndexOf('import ');
      const nextNewline = source.indexOf('\n', lastImportIdx);
      source = source.slice(0, nextNewline + 1) +
        'import { ServiceSchema } from "@/components/Schema";\n' +
        source.slice(nextNewline + 1);
    }
  }

  // Add ServiceSchema JSX after BreadcrumbSchema or at start of return fragment
  const categoriesStr = JSON.stringify(config.categories);
  const serviceJSX = `      <ServiceSchema\n        serviceName="${config.name}"\n        serviceDescription="${config.description.replace(/"/g, '\\"')}"\n        serviceCategories={${categoriesStr}}\n      />`;

  const breadcrumbPattern = /(\s*<BreadcrumbSchema\s+items=\{breadcrumbItems\}\s*\/>)/;
  if (breadcrumbPattern.test(source)) {
    source = source.replace(breadcrumbPattern, `$1\n${serviceJSX}`);
  } else {
    source = source.replace(/(\s*<>\s*\n)/, `$1${serviceJSX}\n`);
  }

  return source;
}

function processNonGuidePages() {
  // Find all non-guide page.tsx files with LocalBusinessSchema or ServiceSchema
  const { execSync } = require('child_process');

  // Get all non-guide pages with LocalBusinessSchema
  const localBizPages = execSync(
    `grep -rl "LocalBusinessSchema" ${APP_DIR}/ --include="*.tsx" | grep -v "/guides/"`,
    { encoding: 'utf-8' }
  ).trim().split('\n').filter(Boolean);

  // Also get guide index pages
  const guideIndexPages = execSync(
    `find ${APP_DIR} -path "*/guides/page.tsx"`,
    { encoding: 'utf-8' }
  ).trim().split('\n').filter(Boolean);

  // Get all non-guide pages with ServiceSchema (for adding categories)
  const serviceSchemaPages = execSync(
    `grep -rl "ServiceSchema" ${APP_DIR}/ --include="*.tsx" | grep -v "/guides/"`,
    { encoding: 'utf-8' }
  ).trim().split('\n').filter(Boolean);

  let removedLocalBiz = 0;
  let keptLocalBiz = 0;
  let addedServiceSchema = 0;
  let addedCategories = 0;
  let removedFromGuideIndex = 0;

  // Process guide index pages (remove LocalBusinessSchema)
  for (const filePath of guideIndexPages) {
    let source = fs.readFileSync(filePath, 'utf-8');
    if (source.includes('LocalBusinessSchema')) {
      source = removeLocalBusinessSchema(source);
      fs.writeFileSync(filePath, source, 'utf-8');
      removedFromGuideIndex++;
      console.log(`REMOVED LocalBiz from guide index: ${path.relative(APP_DIR, filePath)}`);
    }
  }

  // Process non-guide pages
  const processedFiles = new Set();

  for (const filePath of localBizPages) {
    const rel = path.relative(APP_DIR, filePath).replace('/page.tsx', '').replace('.tsx', '');
    let source = fs.readFileSync(filePath, 'utf-8');
    let changed = false;

    if (shouldKeepLocalBusiness(rel)) {
      keptLocalBiz++;
    } else {
      // Remove LocalBusinessSchema
      source = removeLocalBusinessSchema(source);
      changed = true;
      removedLocalBiz++;
      console.log(`REMOVED LocalBiz: ${rel}`);
    }

    if (changed) {
      fs.writeFileSync(filePath, source, 'utf-8');
    }
    processedFiles.add(filePath);
  }

  // Add ServiceSchema to hub pages that don't have it
  const hubPagesNeedingService = [
    { path: 'commercial-construction', exists: false },
    { path: 'commercial', exists: true },
    { path: 'residential', exists: true },
    { path: 'insurance', exists: true },
  ];

  for (const hub of hubPagesNeedingService) {
    if (!hub.exists) continue;
    const filePath = path.join(APP_DIR, hub.path, 'page.tsx');
    if (!fs.existsSync(filePath)) continue;

    let source = fs.readFileSync(filePath, 'utf-8');
    if (!source.includes('ServiceSchema')) {
      source = addServiceSchema(source, hub.path);
      fs.writeFileSync(filePath, source, 'utf-8');
      addedServiceSchema++;
      console.log(`ADDED ServiceSchema: ${hub.path}`);
    }
  }

  // Add serviceCategories to pages that have ServiceSchema but not categories
  for (const filePath of serviceSchemaPages) {
    if (filePath.includes('/guides/')) continue;

    let source = fs.readFileSync(filePath, 'utf-8');
    if (source.includes('serviceCategories')) continue;

    const rel = path.relative(APP_DIR, filePath).replace('/page.tsx', '').replace('.tsx', '');
    const serviceType = getServiceType(rel);

    if (serviceType) {
      source = addServiceCategories(source, serviceType);
      if (source.includes('serviceCategories')) {
        fs.writeFileSync(filePath, source, 'utf-8');
        addedCategories++;
        console.log(`ADDED categories: ${rel} (type: ${serviceType})`);
      }
    }
  }

  // Also check hub pages that already have ServiceSchema but need categories
  for (const svc of [...TRUE_SERVICES, 'commercial', 'residential', 'insurance']) {
    const filePath = path.join(APP_DIR, svc, 'page.tsx');
    if (!fs.existsSync(filePath)) continue;

    let source = fs.readFileSync(filePath, 'utf-8');
    if (source.includes('ServiceSchema') && !source.includes('serviceCategories')) {
      source = addServiceCategories(source, svc);
      if (source.includes('serviceCategories')) {
        fs.writeFileSync(filePath, source, 'utf-8');
        addedCategories++;
        console.log(`ADDED categories to hub: ${svc}`);
      }
    }
  }

  console.log('\n=== Non-Guide Pages Summary ===');
  console.log(`LocalBusinessSchema removed: ${removedLocalBiz}`);
  console.log(`LocalBusinessSchema kept: ${keptLocalBiz}`);
  console.log(`Guide index LocalBiz removed: ${removedFromGuideIndex}`);
  console.log(`ServiceSchema added: ${addedServiceSchema}`);
  console.log(`serviceCategories added: ${addedCategories}`);
}

processNonGuidePages();
console.log('\nDone!');
