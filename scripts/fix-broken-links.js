#!/usr/bin/env node
/**
 * Fix broken internal links by replacing with correct URLs.
 * Maps old/incorrect paths to current valid paths.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

// URL replacement map: old -> new
const REPLACEMENTS = {
  '/services/balcony-reconstruction/': '/balcony-reconstruction/',
  '/services/exterior-waterproofing/': '/exterior-waterproofing/',
  '/services/luxury-custom-homes/': '/luxury-custom-homes/',
  '/services/commercial/preconstruction/': '/our-process/',
  '/services/commercial/tenant-improvement/': '/commercial/',
  '/services/residential/': '/residential/',
  '/commercial/waterproofing/': '/exterior-waterproofing/',
  '/commercial/masonry/': '/commercial/',
  '/commercial/concrete-restoration/': '/balcony-reconstruction/',
  '/commercial/design-build/': '/commercial/',
  '/commercial/tenant-improvements/': '/commercial/',
  '/commercial/metal-buildings/': '/commercial/industrial-construction/',
  '/commercial/parking-structures/': '/commercial/condo-remediation/',
  '/projects/': '/portfolio/',
  '/preconstruction/': '/our-process/',
  '/fire-damage-restoration-tampa/': '/insurance/fire-restoration/',
  '/flood-damage-restoration-tampa/': '/insurance/water-restoration/',
  '/hurricane-damage-restoration-tampa-bay/': '/insurance/hurricane-restoration/',
  '/hurricane-damage-tampa/': '/insurance/hurricane-restoration/',
  '/insurance-claim-contractor-tampa/': '/insurance/',
  '/commercial-restoration-tampa/': '/commercial-construction-tampa/',
  '/commercial-restoration-st-petersburg/': '/commercial-construction-st-petersburg/',
  '/sustainable-commercial-construction-in-florida/': '/commercial/guides/sustainable-commercial-construction-in-tampa/',
  // These guides don't exist, point to the condo-remediation and commercial hubs
  '/commercial/guides/sb4d-compliance-guide/': '/commercial/condo-remediation/',
  '/commercial/guides/cpm-scheduling-commercial-construction/': '/commercial/',
};

// Files to fix (from broken link analysis)
const FILES_TO_CHECK = [
  'app/balcony-reconstruction/page.tsx',
  'app/commercial/page.tsx',
  'app/commercial/condo-remediation/page.tsx',
  'app/commercial/historic-restoration/page.tsx',
  'app/commercial/industrial-construction/page.tsx',
  'app/commercial/guides/integrating-modern-amenities-in-tampas-historic-homes/page.tsx',
  'app/commercial/guides/renovating-vs-new-construction-florida/page.tsx',
  'app/commercial/guides/revolutionizing-commercial-construction-florida/page.tsx',
  'app/condo-remediation-bradenton/page.tsx',
  'app/condo-remediation-lakeland/page.tsx',
  'app/condo-remediation-ruskin/page.tsx',
  'app/condo-remediation-tampa/page.tsx',
  'app/insurance-restoration-clearwater/page.tsx',
  'app/insurance-restoration-lakeland/page.tsx',
  'app/insurance-restoration-tampa/page.tsx',
  'app/other-services/page.tsx',
  'app/residential/guides/tampa-custom-outdoor-living-spaces/page.tsx',
  'app/services/residential/home-additions/page.tsx',
  'app/services/residential/hurricane-resistant-construction/page.tsx',
  'app/services/residential/kitchen-remodeling/page.tsx',
  'app/waterfront-custom-homes-in-tampa/page.tsx',
];

let totalReplacements = 0;
let filesFixed = 0;

for (const relFile of FILES_TO_CHECK) {
  const filePath = path.join(ROOT, relFile);
  if (!fs.existsSync(filePath)) {
    console.log(`  SKIP: ${relFile} (not found)`);
    continue;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  let fileReplacements = 0;

  for (const [oldUrl, newUrl] of Object.entries(REPLACEMENTS)) {
    // Match href="..." and href: "..." and href='...' patterns
    const patterns = [
      new RegExp(`(href[=:]\\s*["'\`])${oldUrl.replace(/\//g, '\\/')}(["'\`])`, 'g'),
    ];

    for (const pattern of patterns) {
      const matches = content.match(pattern);
      if (matches) {
        content = content.replace(pattern, `$1${newUrl}$2`);
        fileReplacements += matches.length;
      }
    }
  }

  if (fileReplacements > 0) {
    fs.writeFileSync(filePath, content, 'utf8');
    filesFixed++;
    totalReplacements += fileReplacements;
    console.log(`  FIXED: ${relFile} (${fileReplacements} replacements)`);
  }
}

console.log(`\nTotal: ${totalReplacements} replacements in ${filesFixed} files`);
