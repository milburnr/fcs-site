#!/usr/bin/env node
/**
 * add-remaining-categories.js
 * Adds serviceCategories to remaining pages with ServiceSchema but no categories
 */

const fs = require('fs');
const path = require('path');

const REMAINING_CATEGORIES = {
  // Location pages - general construction categories
  'app/locations/tampa-fl/page.tsx': ['Commercial Construction', 'Disaster Recovery', 'Historic Restoration', 'Luxury Custom Homes', 'Insurance Restoration'],
  'app/locations/st-petersburg-fl/page.tsx': ['Commercial Construction', 'Disaster Recovery', 'Historic Restoration', 'Luxury Custom Homes', 'Insurance Restoration'],
  'app/locations/clearwater-fl/page.tsx': ['Commercial Construction', 'Disaster Recovery', 'Historic Restoration', 'Luxury Custom Homes', 'Insurance Restoration'],
  'app/locations/lakeland-fl/page.tsx': ['Commercial Construction', 'Disaster Recovery', 'Historic Restoration', 'Luxury Custom Homes', 'Insurance Restoration'],
  'app/locations/sarasota-fl/page.tsx': ['Commercial Construction', 'Disaster Recovery', 'Historic Restoration', 'Luxury Custom Homes', 'Insurance Restoration'],
  'app/locations/bradenton-fl/page.tsx': ['Commercial Construction', 'Disaster Recovery', 'Historic Restoration', 'Luxury Custom Homes', 'Insurance Restoration'],
  'app/locations/brandon-fl/page.tsx': ['Commercial Construction', 'Disaster Recovery', 'Historic Restoration', 'Luxury Custom Homes', 'Insurance Restoration'],
  'app/locations/ruskin-fl/page.tsx': ['Commercial Construction', 'Disaster Recovery', 'Historic Restoration', 'Luxury Custom Homes', 'Insurance Restoration'],
  'app/locations/plant-city-fl/page.tsx': ['Commercial Construction', 'Disaster Recovery', 'Historic Restoration', 'Luxury Custom Homes', 'Insurance Restoration'],
  // Commercial sub-pages
  'app/commercial/historic-restoration/page.tsx': ['Period-Accurate Renovation', 'Structural Repair', 'Facade Restoration', 'Adaptive Reuse'],
  'app/commercial/industrial-construction/page.tsx': ['Warehouse Construction', 'Manufacturing Facilities', 'Distribution Centers', 'Industrial Renovations'],
  'app/commercial/condo-remediation/page.tsx': ['Concrete Restoration', 'Rebar Repair', 'Structural Waterproofing', 'Milestone Inspections'],
  // Specialty pages
  'app/other-services/page.tsx': ['Engineering Services', 'Expert Witness', 'Building Consulting', 'Pre-Construction Services'],
  'app/engineering/page.tsx': ['Structural Engineering', 'Building Assessment', 'Load Calculations', 'Engineering Reports'],
  'app/expert-witness/page.tsx': ['Expert Testimony', 'Construction Forensics', 'Damage Assessment', 'Litigation Support'],
  'app/building-consultants/page.tsx': ['Building Assessment', 'Code Compliance', 'Damage Documentation', 'Repair Specifications'],
  'app/certified-estimates/page.tsx': ['Xactimate Estimates', 'Loss Quantification', 'Scope Documentation', 'Supplemental Claims'],
  // Article-like Tampa pages with ServiceSchema
  'app/water-damage-restoration-insurance-claims-in-tampa/page.tsx': ['Water Extraction', 'Structural Drying', 'Claims Management', 'Property Restoration'],
  'app/insurance-restoration-compliance-and-regulations-in-tampa/page.tsx': ['Regulatory Compliance', 'Code Requirements', 'Permit Management', 'Claims Documentation'],
  'app/insurance-restoration-project-management-in-tampa/page.tsx': ['Project Coordination', 'Claims Management', 'Contractor Oversight', 'Timeline Management'],
};

let count = 0;

for (const [filePath, categories] of Object.entries(REMAINING_CATEGORIES)) {
  const fullPath = path.join(process.cwd(), filePath);
  if (!fs.existsSync(fullPath)) {
    console.log(`SKIP (not found): ${filePath}`);
    continue;
  }

  let source = fs.readFileSync(fullPath, 'utf-8');
  if (source.includes('serviceCategories')) {
    console.log(`SKIP (already has): ${filePath}`);
    continue;
  }

  if (!source.includes('ServiceSchema')) {
    console.log(`SKIP (no ServiceSchema): ${filePath}`);
    continue;
  }

  const categoriesStr = JSON.stringify(categories);
  const patterns = [
    /(minPrice="[^"]*"\s*\n\s*)(\/\>)/,
    /(serviceDescription="[^"]*"\s*\n\s*)(\/\>)/,
    /(city="[^"]*"\s*\n\s*)(\/\>)/,
  ];

  let matched = false;
  for (const pattern of patterns) {
    if (pattern.test(source)) {
      source = source.replace(pattern, (match, before, closing) => {
        const indent = before.match(/\n(\s*)/)?.[1] || '        ';
        return `${before.trimEnd()}\n${indent}serviceCategories={${categoriesStr}}\n${indent}${closing}`;
      });
      matched = true;
      break;
    }
  }

  if (!matched) {
    console.log(`WARN (no pattern matched): ${filePath}`);
    continue;
  }

  fs.writeFileSync(fullPath, source, 'utf-8');
  count++;
  console.log(`ADDED categories: ${filePath}`);
}

console.log(`\nTotal: ${count} pages updated`);
