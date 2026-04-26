#!/usr/bin/env node
/**
 * add-related-service-locations.js
 * Adds RelatedServiceLocations component to pages that are missing it.
 * Safe to re-run — skips pages that already have the component.
 */

const fs = require('fs');
const path = require('path');

const APP_DIR = path.resolve(__dirname, '..', 'app');

// Map of slug → props for RelatedServiceLocations
const PAGES = {
  // Parent service hubs
  'balcony-reconstruction':        { city: 'Tampa', service: 'balcony-reconstruction',   serviceName: 'Balcony Reconstruction' },
  'commercial':                    { city: 'Tampa', service: 'commercial-construction',   serviceName: 'Commercial Construction' },
  'disaster-recovery':             { city: 'Tampa', service: 'disaster-recovery',         serviceName: 'Disaster Recovery' },
  'exterior-waterproofing':        { city: 'Tampa', service: 'exterior-waterproofing',    serviceName: 'Exterior Waterproofing' },
  'historic-restoration':          { city: 'Tampa', service: 'historic-restoration',      serviceName: 'Historic Restoration' },
  'luxury-custom-homes':           { city: 'Tampa', service: 'luxury-custom-homes',       serviceName: 'Luxury Custom Homes' },
  'multi-family-construction':     { city: 'Tampa', service: 'multi-family-construction', serviceName: 'Multi-Family Construction' },
  'insurance':                     { city: 'Tampa', service: 'insurance-restoration',     serviceName: 'Insurance Restoration' },
  'residential':                   { city: 'Tampa', service: 'luxury-custom-homes',       serviceName: 'Luxury Custom Homes' },
  // Insurance sub-services
  'building-consultants':          { city: 'Tampa', service: 'insurance-restoration',     serviceName: 'Insurance Restoration' },
  'certified-estimates':           { city: 'Tampa', service: 'insurance-restoration',     serviceName: 'Insurance Restoration' },
  'expert-witness':                { city: 'Tampa', service: 'insurance-restoration',     serviceName: 'Insurance Restoration' },
  'vip-public-adjuster':           { city: 'Tampa', service: 'insurance-restoration',     serviceName: 'Insurance Restoration' },
  'sb4d-compliance':               { city: 'Tampa', service: 'balcony-reconstruction',    serviceName: 'Balcony Reconstruction' },
  'engineering':                   { city: 'Tampa', service: 'commercial-construction',   serviceName: 'Commercial Construction' },
  'pre-construction-services-tampa': { city: 'Tampa', service: 'commercial-construction', serviceName: 'Commercial Construction' },
  'our-process':                   { city: 'Tampa', service: 'commercial-construction',   serviceName: 'Commercial Construction' },
  // Commercial Tampa articles
  'bespoke-architectural-design-in-tampa':                   { city: 'Tampa', service: 'commercial-construction', serviceName: 'Commercial Construction' },
  'eco-friendly-commercial-construction-in-tampa':           { city: 'Tampa', service: 'commercial-construction', serviceName: 'Commercial Construction' },
  'efficient-commercial-construction-timelines-in-tampa':    { city: 'Tampa', service: 'commercial-construction', serviceName: 'Commercial Construction' },
  'floridas-top-commercial-contractor-in-tampa':             { city: 'Tampa', service: 'commercial-construction', serviceName: 'Commercial Construction' },
  'hiring-a-commercial-contractor-in-tampa':                 { city: 'Tampa', service: 'commercial-construction', serviceName: 'Commercial Construction' },
  'hiring-commercial-contractors-in-tampa':                  { city: 'Tampa', service: 'commercial-construction', serviceName: 'Commercial Construction' },
  'leading-commercial-contractors-in-tampa':                 { city: 'Tampa', service: 'commercial-construction', serviceName: 'Commercial Construction' },
  'leading-engineering-services-for-commercial-buildings-in-tampa': { city: 'Tampa', service: 'commercial-construction', serviceName: 'Commercial Construction' },
  'proper-permits-insights-from-the-top-commercial-contractor-in-tampa': { city: 'Tampa', service: 'commercial-construction', serviceName: 'Commercial Construction' },
  'the-importance-of-quality-construction-materials-in-tampa': { city: 'Tampa', service: 'commercial-construction', serviceName: 'Commercial Construction' },
  'the-key-traits-of-top-commercial-contractors-in-tampa':   { city: 'Tampa', service: 'commercial-construction', serviceName: 'Commercial Construction' },
  'top-bonded-insured-commercial-contractor-in-tampa':       { city: 'Tampa', service: 'commercial-construction', serviceName: 'Commercial Construction' },
  'top-commercial-contractors-in-tampa':                     { city: 'Tampa', service: 'commercial-construction', serviceName: 'Commercial Construction' },
  'top-commercial-modular-construction-in-tampa':            { city: 'Tampa', service: 'commercial-construction', serviceName: 'Commercial Construction' },
  'trends-and-future-of-commercial-construction-in-tampa':   { city: 'Tampa', service: 'commercial-construction', serviceName: 'Commercial Construction' },
  // Custom home articles
  'eco-friendly-custom-homes-in-tampa':      { city: 'Tampa', service: 'luxury-custom-homes', serviceName: 'Luxury Custom Homes' },
  'energy-efficient-custom-homes-in-tampa':  { city: 'Tampa', service: 'luxury-custom-homes', serviceName: 'Luxury Custom Homes' },
  'custom-home-wine-cellars-in-tampa':       { city: 'Tampa', service: 'luxury-custom-homes', serviceName: 'Luxury Custom Homes' },
  'designing-your-dream-home-in-tampa':      { city: 'Tampa', service: 'luxury-custom-homes', serviceName: 'Luxury Custom Homes' },
  'secure-custom-home-construction-in-tampa': { city: 'Tampa', service: 'luxury-custom-homes', serviceName: 'Luxury Custom Homes' },
  'spacious-family-homes-construction-in-tampa': { city: 'Tampa', service: 'luxury-custom-homes', serviceName: 'Luxury Custom Homes' },
  'waterfront-custom-homes-in-tampa':        { city: 'Tampa', service: 'luxury-custom-homes', serviceName: 'Luxury Custom Homes' },
  // Disaster recovery articles
  'flood-remediation-contractors-in-tampa':            { city: 'Tampa', service: 'disaster-recovery', serviceName: 'Disaster Recovery' },
  'post-disaster-health-and-safety-inspections-in-tampa': { city: 'Tampa', service: 'disaster-recovery', serviceName: 'Disaster Recovery' },
  'post-disaster-interior-restoration-in-tampa':       { city: 'Tampa', service: 'disaster-recovery', serviceName: 'Disaster Recovery' },
  // Insurance restoration articles
  'insurance-restoration-compliance-and-regulations-in-tampa': { city: 'Tampa', service: 'insurance-restoration', serviceName: 'Insurance Restoration' },
  'insurance-restoration-project-management-in-tampa':         { city: 'Tampa', service: 'insurance-restoration', serviceName: 'Insurance Restoration' },
  'maximize-insurance-payouts-for-restoration-in-tampa':       { city: 'Tampa', service: 'insurance-restoration', serviceName: 'Insurance Restoration' },
  'property-damage-assessment-for-insurance-claims-in-tampa':  { city: 'Tampa', service: 'insurance-restoration', serviceName: 'Insurance Restoration' },
  'roof-damage-restoration-and-insurance-claims-in-tampa':     { city: 'Tampa', service: 'insurance-restoration', serviceName: 'Insurance Restoration' },
  'technology-role-in-insurance-restoration-processes-in-tampa': { city: 'Tampa', service: 'insurance-restoration', serviceName: 'Insurance Restoration' },
  'water-damage-restoration-insurance-claims-in-tampa':        { city: 'Tampa', service: 'insurance-restoration', serviceName: 'Insurance Restoration' },
};

const IMPORT_LINE = `import { RelatedServiceLocations } from "@/components/RelatedServiceLocations";\n`;

function buildComponent({ city, service, serviceName }) {
  return `\n      <RelatedServiceLocations\n        currentCity="${city}"\n        currentService="${service}"\n        currentServiceName="${serviceName}"\n      />`;
}

function addImport(src) {
  if (src.includes('RelatedServiceLocations')) return src; // already there
  // Insert after the last import line
  const lines = src.split('\n');
  let lastImportIdx = -1;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith('import ')) lastImportIdx = i;
  }
  if (lastImportIdx === -1) return IMPORT_LINE + src;
  lines.splice(lastImportIdx + 1, 0, IMPORT_LINE.trimEnd());
  return lines.join('\n');
}

function addComponent(src, props) {
  const component = buildComponent(props);
  // Strategy 1: before <RelatedArticles (best spot — already used by other pages)
  if (src.includes('<RelatedArticles')) {
    return src.replace(/(\n\s*<RelatedArticles)/, `${component}\n$1`);
  }
  // Strategy 2: before </main>
  if (src.includes('</main>')) {
    const idx = src.lastIndexOf('</main>');
    return src.slice(0, idx) + component + '\n      ' + src.slice(idx);
  }
  // Strategy 3: before closing </> of the root return fragment
  // Find the last </> that closes the return
  const lastFrag = src.lastIndexOf('\n    </>');
  if (lastFrag !== -1) {
    return src.slice(0, lastFrag) + component + src.slice(lastFrag);
  }
  // Fallback: before last </>
  const lastAny = src.lastIndexOf('</>');
  if (lastAny !== -1) {
    return src.slice(0, lastAny) + component + '\n      ' + src.slice(lastAny);
  }
  console.warn('  ⚠️  Could not find insertion point');
  return src;
}

let updated = 0;
let skipped = 0;
let notFound = 0;

for (const [slug, props] of Object.entries(PAGES)) {
  const filePath = path.join(APP_DIR, slug, 'page.tsx');
  if (!fs.existsSync(filePath)) {
    console.log(`  ⚠️  Not found: ${slug}/page.tsx`);
    notFound++;
    continue;
  }

  let src = fs.readFileSync(filePath, 'utf-8');

  if (src.includes('RelatedServiceLocations')) {
    console.log(`  ✓  Already has it: ${slug}`);
    skipped++;
    continue;
  }

  src = addImport(src);
  src = addComponent(src, props);
  fs.writeFileSync(filePath, src, 'utf-8');
  console.log(`  ✅ Updated: ${slug}`);
  updated++;
}

console.log(`\nDone: ${updated} updated, ${skipped} already had it, ${notFound} not found`);
