#!/usr/bin/env node
/**
 * add-subservice-categories.js
 * Adds serviceCategories to sub-service pages that have ServiceSchema without categories
 */

const fs = require('fs');
const path = require('path');

const SUBSERVICE_CATEGORIES = {
  'app/services/commercial/commercial-additions/page.tsx': ['Building Additions', 'Vertical Expansions', 'Lateral Extensions', 'Parking Structures'],
  'app/services/commercial/design-build/page.tsx': ['Integrated Design-Build', 'Pre-Construction Planning', 'Value Engineering', 'Project Management'],
  'app/services/commercial/industrial-construction/page.tsx': ['Warehouse Construction', 'Manufacturing Facilities', 'Distribution Centers', 'Industrial Renovations'],
  'app/services/commercial/multi-family/page.tsx': ['Condominiums', 'Apartment Complexes', 'Townhomes', 'Mixed-Use Developments'],
  'app/services/commercial/retail-construction/page.tsx': ['Retail Build-Outs', 'Shopping Centers', 'Restaurant Construction', 'Storefront Renovation'],
  'app/services/commercial/tenant-improvements/page.tsx': ['Office Buildouts', 'Space Reconfiguration', 'ADA Compliance', 'Common Area Upgrades'],
  'app/services/residential/home-additions/page.tsx': ['Room Additions', 'Second Story Additions', 'In-Law Suites', 'Garage Conversions'],
  'app/services/residential/hurricane-resistant-construction/page.tsx': ['Impact Windows', 'Reinforced Roofing', 'Storm-Rated Doors', 'Structural Upgrades'],
  'app/services/residential/kitchen-remodeling/page.tsx': ['Custom Cabinetry', 'Countertop Installation', 'Kitchen Layout Design', 'Appliance Integration'],
  'app/services/historic-restoration/page.tsx': ['Period-Accurate Renovation', 'Structural Repair', 'Facade Restoration', 'Adaptive Reuse', 'Historic Preservation'],
  'app/insurance/appraisal-arbitration/page.tsx': ['Insurance Appraisal', 'Claim Arbitration', 'Dispute Resolution', 'Expert Testimony'],
  'app/insurance/building-consultant/page.tsx': ['Building Assessment', 'Damage Documentation', 'Repair Specifications', 'Code Compliance Review'],
  'app/insurance/certified-estimating/page.tsx': ['Xactimate Estimates', 'Loss Quantification', 'Scope Documentation', 'Supplemental Claims'],
  'app/insurance/fire-restoration/page.tsx': ['Fire Damage Repair', 'Smoke Remediation', 'Structural Assessment', 'Content Restoration'],
  'app/insurance/hurricane-restoration/page.tsx': ['Wind Damage Repair', 'Roof Restoration', 'Water Intrusion Repair', 'Emergency Board-Up'],
  'app/insurance/licensed-general-contractor/page.tsx': ['Licensed Contracting', 'Permit Management', 'Code Compliance', 'Quality Assurance'],
  'app/insurance/mold-remediation/page.tsx': ['Mold Testing', 'Mold Removal', 'Moisture Control', 'Air Quality Restoration'],
  'app/insurance/water-restoration/page.tsx': ['Water Extraction', 'Structural Drying', 'Flood Damage Repair', 'Moisture Monitoring'],
};

let count = 0;

for (const [filePath, categories] of Object.entries(SUBSERVICE_CATEGORIES)) {
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

  // Add serviceCategories before the closing /> of ServiceSchema
  // Pattern: find the last prop before />
  const categoriesStr = JSON.stringify(categories);

  // Match the closing /> of the ServiceSchema component
  // Look for minPrice="..." followed by \n and /> or just serviceDescription="..." followed by />
  const patterns = [
    // Has minPrice before />
    /(minPrice="[^"]*"\s*\n\s*)(\/\>)/,
    // Has serviceDescription before />
    /(serviceDescription="[^"]*"\s*\n\s*)(\/\>)/,
    // Has city before />
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
