#!/usr/bin/env node
/**
 * add-internal-links.js
 *
 * Adds InternalLinks component to pages that are missing it.
 * Links are determined by analyzing the page URL/title to match topic.
 *
 * Run: node scripts/add-internal-links.js [--dry-run]
 */

const fs = require('fs');
const path = require('path');

const APP_DIR = path.join(__dirname, '..', 'app');
const DRY_RUN = process.argv.includes('--dry-run');

// Topic categories and their related pages
const TOPICS = {
  commercial: {
    keywords: ['commercial', 'office', 'retail', 'industrial', 'warehouse', 'medical', 'healthcare', 'tenant', 'business', 'corporate', 'mall', 'facility', 'building-design'],
    pillar: { href: '/services/commercial/', label: 'Commercial Construction Services' },
    relatedLinks: [
      { href: '/services/commercial/design-build/', label: 'Design-Build Construction' },
      { href: '/services/commercial/tenant-improvements/', label: 'Tenant Improvements' },
      { href: '/services/commercial/medical-construction/', label: 'Medical Facility Construction' },
      { href: '/commercial/', label: 'Commercial Projects' },
    ]
  },
  residential: {
    keywords: ['residential', 'home', 'house', 'custom', 'luxury', 'waterfront', 'kitchen', 'bathroom', 'addition', 'bedroom', 'living', 'family', 'estate'],
    pillar: { href: '/services/residential/', label: 'Residential Construction Services' },
    relatedLinks: [
      { href: '/services/residential/waterfront-homes/', label: 'Waterfront Home Construction' },
      { href: '/services/residential/home-additions/', label: 'Home Additions' },
      { href: '/services/residential/hurricane-resistant-construction/', label: 'Hurricane-Resistant Construction' },
      { href: '/residential/', label: 'Residential Projects' },
    ]
  },
  disaster: {
    keywords: ['disaster', 'hurricane', 'storm', 'fire', 'flood', 'water-damage', 'insurance', 'restoration', 'damage', 'recovery', 'emergency', 'remediation', 'mold', 'claims'],
    pillar: { href: '/services/disaster-recovery/', label: 'Disaster Recovery Services' },
    relatedLinks: [
      { href: '/services/disaster-recovery/hurricane-damage/', label: 'Hurricane Damage Restoration' },
      { href: '/services/disaster-recovery/fire-damage/', label: 'Fire Damage Restoration' },
      { href: '/services/disaster-recovery/water-damage/', label: 'Water Damage Restoration' },
      { href: '/services/disaster-recovery/insurance-claims-process/', label: 'Insurance Claims Process' },
    ]
  },
  historic: {
    keywords: ['historic', 'preservation', 'ybor', 'landmark', 'heritage', 'period', 'antique', 'shpo', 'tax-credit', 'historical'],
    pillar: { href: '/services/historic-restoration/', label: 'Historic Restoration Services' },
    relatedLinks: [
      { href: '/services/historic-restoration/shpo-compliance/', label: 'SHPO Compliance' },
      { href: '/services/historic-restoration/historic-tax-credits/', label: 'Historic Tax Credits' },
      { href: '/services/historic-restoration/material-sourcing/', label: 'Historic Material Sourcing' },
      { href: '/historic-restoration/', label: 'Historic Restoration Projects' },
    ]
  },
  balcony: {
    keywords: ['balcony', 'waterproofing', 'sb4', 'condo', 'exterior', 'deck', 'railing'],
    pillar: { href: '/services/residential/', label: 'Residential Construction Services' },
    relatedLinks: [
      { href: '/balcony-reconstruction/', label: 'Balcony Reconstruction' },
      { href: '/services/residential/balcony-reconstruction/', label: 'SB4-D Compliance' },
      { href: '/services/residential/exterior-waterproofing/', label: 'Exterior Waterproofing' },
      { href: '/condo-balcony-inspection-requirements/', label: 'Condo Inspection Requirements' },
    ]
  },
  construction: {
    keywords: ['construction', 'contractor', 'builder', 'project', 'permit', 'blueprint', 'planning', 'budget', 'timeline', 'schedule', 'safety', 'management'],
    pillar: { href: '/services/', label: 'Our Construction Services' },
    relatedLinks: [
      { href: '/services/commercial/', label: 'Commercial Construction' },
      { href: '/services/residential/', label: 'Residential Construction' },
      { href: '/about/', label: 'About Florida Construction Specialists' },
      { href: '/our-process/', label: 'Our Construction Process' },
    ]
  }
};

// Default links for pages that don't match specific topics
const DEFAULT_LINKS = [
  { href: '/services/', label: 'Our Services' },
  { href: '/services/commercial/', label: 'Commercial Construction' },
  { href: '/services/residential/', label: 'Residential Construction' },
  { href: '/contact/', label: 'Contact Us' },
];

let stats = {
  total: 0,
  alreadyHasLinks: 0,
  updated: 0,
  skipped: 0,
  errors: 0,
  byTopic: {}
};

/**
 * Find all page.tsx files recursively
 */
function findPageFiles(dir, files = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      findPageFiles(fullPath, files);
    } else if (entry.name === 'page.tsx') {
      files.push(fullPath);
    }
  }

  return files;
}

/**
 * Determine topic based on folder name
 */
function determineTopic(folderName) {
  const lowerName = folderName.toLowerCase();

  for (const [topic, config] of Object.entries(TOPICS)) {
    for (const keyword of config.keywords) {
      if (lowerName.includes(keyword)) {
        return topic;
      }
    }
  }

  return 'construction'; // default
}

/**
 * Generate internal links for a topic
 */
function generateLinks(topic, folderName) {
  const config = TOPICS[topic] || TOPICS.construction;
  const links = [];

  // Add pillar link
  links.push(config.pillar);

  // Add 2-3 related links (avoid linking to self)
  const selfSlug = `/${folderName}/`;
  const related = config.relatedLinks
    .filter(link => link.href !== selfSlug)
    .slice(0, 3);
  links.push(...related);

  // Always add contact
  if (!links.some(l => l.href === '/contact/')) {
    links.push({ href: '/contact/', label: 'Schedule a Consultation' });
  }

  return links;
}

/**
 * Add InternalLinks to a page file
 */
function addInternalLinks(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const relativePath = path.relative(APP_DIR, filePath);
  const folderPath = path.dirname(relativePath);

  // Skip special pages
  if (folderPath === '.' || folderPath === '' ||
      folderPath.startsWith('services/') ||
      folderPath.startsWith('locations/') ||
      folderPath === 'contact' ||
      folderPath === 'about' ||
      folderPath === 'gallery' ||
      folderPath === 'team' ||
      folderPath === 'privacy' ||
      folderPath === 'terms') {
    return { status: 'skipped', reason: 'special page' };
  }

  // Check if already has InternalLinks
  if (content.includes('InternalLinks') ||
      content.includes('RelatedServices') ||
      content.includes('NearbyLocations') ||
      content.includes('RelatedArticles')) {
    return { status: 'already_has_links' };
  }

  // Skip if no default function export
  if (!content.includes('export default function')) {
    return { status: 'skipped', reason: 'no default function export' };
  }

  const folderName = path.basename(folderPath);
  const topic = determineTopic(folderName);
  const links = generateLinks(topic, folderName);

  // Track topic
  stats.byTopic[topic] = (stats.byTopic[topic] || 0) + 1;

  let newContent = content;

  // Step 1: Add InternalLinks import
  const hasInternalLinksImport = content.includes('from "@/components/InternalLinks"') ||
                                  content.includes("from '@/components/InternalLinks'");

  if (!hasInternalLinksImport) {
    // Add import after other imports
    const importRegex = /^import\s+.+$/gm;
    let lastImportMatch;
    let match;
    while ((match = importRegex.exec(newContent)) !== null) {
      lastImportMatch = match;
    }

    if (lastImportMatch) {
      const insertPosition = lastImportMatch.index + lastImportMatch[0].length;
      newContent =
        newContent.slice(0, insertPosition) +
        '\nimport { InternalLinks } from "@/components/InternalLinks";' +
        newContent.slice(insertPosition);
    }
  }

  // Step 2: Generate links array code
  const linksArrayCode = `
const internalLinks = [
${links.map(l => `  { href: "${l.href}", label: "${l.label}" },`).join('\n')}
];
`;

  // Step 3: Add links array before export default function
  const exportFuncMatch = newContent.match(/export\s+default\s+function/);
  if (exportFuncMatch) {
    const insertPos = exportFuncMatch.index;
    newContent = newContent.slice(0, insertPos) + linksArrayCode + '\n' + newContent.slice(insertPos);
  }

  // Step 4: Add InternalLinks component before the last </> or closing section
  // Find the last CTA section or the closing fragment
  const ctaSectionRegex = /(<section[^>]*className="[^"]*(?:section|cta)[^"]*bg-(?:brand-green|gray)[^"]*"[^>]*>[\s\S]*?<\/section>)\s*(<\/>\s*\);?\s*\})/;
  const closingFragmentRegex = /(\s*)(<\/>\s*\);?\s*\})\s*$/;

  if (ctaSectionRegex.test(newContent)) {
    // Insert before the CTA section
    newContent = newContent.replace(ctaSectionRegex, (match, ctaSection, closing) => {
      return `
      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <InternalLinks
            title="Explore Our Services"
            links={internalLinks}
          />
        </div>
      </section>

${ctaSection}
${closing}`;
    });
  } else if (closingFragmentRegex.test(newContent)) {
    // Insert before the closing fragment
    newContent = newContent.replace(closingFragmentRegex, (match, whitespace, closing) => {
      return `
      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <InternalLinks
            title="Explore Our Services"
            links={internalLinks}
          />
        </div>
      </section>
${whitespace}${closing}`;
    });
  } else {
    return { status: 'error', reason: 'could not find insertion point' };
  }

  // Verify the change was made
  if (!newContent.includes('<InternalLinks')) {
    return { status: 'error', reason: 'could not insert InternalLinks component' };
  }

  return { status: 'updated', content: newContent, topic };
}

// Main execution
console.log(`\n${'='.repeat(60)}`);
console.log(`  Adding Internal Links to Pages`);
console.log(`  Mode: ${DRY_RUN ? 'DRY RUN (no files will be modified)' : 'LIVE'}`);
console.log(`${'='.repeat(60)}\n`);

const pageFiles = findPageFiles(APP_DIR);
stats.total = pageFiles.length;

console.log(`Found ${stats.total} page files\n`);

const updatedFiles = [];
const errorFiles = [];

for (const filePath of pageFiles) {
  const relativePath = path.relative(APP_DIR, filePath);

  try {
    const result = addInternalLinks(filePath);

    switch (result.status) {
      case 'already_has_links':
        stats.alreadyHasLinks++;
        break;

      case 'skipped':
        stats.skipped++;
        break;

      case 'updated':
        stats.updated++;
        updatedFiles.push({ path: relativePath, topic: result.topic });
        if (!DRY_RUN) {
          fs.writeFileSync(filePath, result.content, 'utf8');
        }
        console.log(`✓ ${relativePath} [${result.topic}]`);
        break;

      case 'error':
        stats.errors++;
        errorFiles.push({ path: relativePath, reason: result.reason });
        console.log(`✗ ${relativePath} - ${result.reason}`);
        break;
    }
  } catch (error) {
    stats.errors++;
    errorFiles.push({ path: relativePath, reason: error.message });
    console.log(`✗ ${relativePath} - ${error.message}`);
  }
}

console.log(`\n${'='.repeat(60)}`);
console.log(`  Summary`);
console.log(`${'='.repeat(60)}`);
console.log(`  Total pages found:        ${stats.total}`);
console.log(`  Already have links:       ${stats.alreadyHasLinks}`);
console.log(`  Updated${DRY_RUN ? ' (would be)' : ''}:              ${stats.updated}`);
console.log(`  Skipped:                  ${stats.skipped}`);
console.log(`  Errors:                   ${stats.errors}`);
console.log(`\n  By Topic:`);
for (const [topic, count] of Object.entries(stats.byTopic)) {
  console.log(`    ${topic}: ${count} pages`);
}
console.log(`${'='.repeat(60)}\n`);

if (errorFiles.length > 0) {
  console.log('Files with errors:');
  errorFiles.forEach(f => console.log(`  - ${f.path}: ${f.reason}`));
  console.log('');
}

if (DRY_RUN && stats.updated > 0) {
  console.log(`Run without --dry-run to apply changes to ${stats.updated} files.\n`);
}

process.exit(stats.errors > 0 ? 1 : 0);
