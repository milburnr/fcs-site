#!/usr/bin/env node
/**
 * Silo Verification Script
 * ========================
 * Checks for "Link Bleed" - cross-silo linking that violates the Double Helix strategy.
 * Also verifies schema types match the assigned silo.
 *
 * Usage: node scripts/verify-silos.js
 */

const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(__dirname, '..', 'out');

// Results
const violations = {
  linkBleed: [],
  schemaType: [],
  missingSilo: [],
};

/**
 * Commercial page patterns
 */
const COMMERCIAL_PATTERNS = [
  /^commercial/,
  /commercial-construction/,
  /multi-family/,
  /disaster-recovery/,
  /^insurance-restoration/,
  /medical-construction/,
  /industrial-construction/,
  /condo-remediation/,
  /sb4d/,
  /ahca/,
  /cpm-scheduling/,
  /tilt-wall/,
  /warehouse/,
];

/**
 * Residential page patterns
 */
const RESIDENTIAL_PATTERNS = [
  /^residential/,
  /luxury-custom-homes/,
  /balcony-reconstruction/,
  /exterior-waterproofing/,
  /historic-preservation(?!.*commercial)/,
  /waterfront-home/,
  /fema-50/,
  /hyde-park/,
  /davis-islands/,
  /flood-zone/,
  /seawall/,
  /breakaway-wall/,
];

/**
 * Neutral pages that can link to both silos
 */
const NEUTRAL_PATTERNS = [
  /^index\.html$/,
  /^about/,
  /^contact/,
  /^locations/,
  /^portfolio/,
  /^services/,
];

/**
 * Determine silo from page path
 */
function getSiloFromPath(pagePath) {
  const normalized = pagePath.replace(/\\/g, '/').toLowerCase();

  // Check if neutral
  for (const pattern of NEUTRAL_PATTERNS) {
    if (pattern.test(normalized)) return 'neutral';
  }

  // Check if commercial
  for (const pattern of COMMERCIAL_PATTERNS) {
    if (pattern.test(normalized)) return 'commercial';
  }

  // Check if residential
  for (const pattern of RESIDENTIAL_PATTERNS) {
    if (pattern.test(normalized)) return 'residential';
  }

  return 'unknown';
}

/**
 * Extract internal links from HTML content
 * Only extracts links from main content area (excludes header, nav, footer)
 */
function extractInternalLinks(content) {
  const links = [];

  // Remove header, nav, and footer sections before extracting links
  // These are site-wide navigation and should not be checked for silo violations
  let mainContent = content;

  // Remove header section
  mainContent = mainContent.replace(/<header[\s\S]*?<\/header>/gi, '');

  // Remove nav sections
  mainContent = mainContent.replace(/<nav[\s\S]*?<\/nav>/gi, '');

  // Remove footer section
  mainContent = mainContent.replace(/<footer[\s\S]*?<\/footer>/gi, '');

  const hrefPattern = /href=["']([^"']+)["']/gi;
  let match;

  while ((match = hrefPattern.exec(mainContent)) !== null) {
    const href = match[1];
    // Only internal links (starting with / and not external)
    if (href.startsWith('/') && !href.startsWith('//')) {
      links.push(href);
    }
  }

  return links;
}

/**
 * Check for cross-silo links
 */
function checkLinkBleed(pagePath, content) {
  const pageSilo = getSiloFromPath(pagePath);

  // Skip neutral pages
  if (pageSilo === 'neutral' || pageSilo === 'unknown') return;

  const links = extractInternalLinks(content);

  for (const link of links) {
    const linkSilo = getSiloFromPath(link);

    // Skip links to neutral pages
    if (linkSilo === 'neutral' || linkSilo === 'unknown') continue;

    // Check for cross-silo link
    if (linkSilo !== pageSilo) {
      violations.linkBleed.push({
        page: pagePath,
        pageSilo,
        link,
        linkSilo,
      });
    }
  }
}

/**
 * Check schema type matches silo
 */
function checkSchemaType(pagePath, content) {
  const pageSilo = getSiloFromPath(pagePath);

  // Only check commercial and residential pages
  if (pageSilo !== 'commercial' && pageSilo !== 'residential') return;

  // Extract schema type
  const schemaMatch = content.match(/"@type"\s*:\s*"([^"]+)"/);
  if (!schemaMatch) {
    violations.missingSilo.push({ page: pagePath, expectedSilo: pageSilo });
    return;
  }

  const schemaType = schemaMatch[1];

  // Check expected schema type
  if (pageSilo === 'commercial' && schemaType !== 'GeneralContractor') {
    violations.schemaType.push({
      page: pagePath,
      expected: 'GeneralContractor',
      found: schemaType,
    });
  } else if (pageSilo === 'residential' && schemaType !== 'HomeAndConstructionBusiness') {
    // Note: HomeAndConstructionBusiness is the recommended residential type,
    // but GeneralContractor is also acceptable for luxury construction
    if (schemaType !== 'HomeAndConstructionBusiness' && schemaType !== 'GeneralContractor') {
      violations.schemaType.push({
        page: pagePath,
        expected: 'HomeAndConstructionBusiness',
        found: schemaType,
      });
    }
  }
}

/**
 * Walk the build output directory
 */
function walkBuildOutput(callback) {
  function walk(dir, relativePath = '') {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      const relPath = path.join(relativePath, entry.name);

      if (entry.isDirectory()) {
        walk(fullPath, relPath);
      } else if (entry.name === 'index.html') {
        const content = fs.readFileSync(fullPath, 'utf-8');
        callback(relPath, content);
      }
    }
  }

  walk(OUT_DIR);
}

/**
 * Main execution
 */
function main() {
  console.log('🔍 Verifying Silo Integrity...\n');

  if (!fs.existsSync(OUT_DIR)) {
    console.log('❌ Build output not found. Run npm run build first.');
    process.exit(1);
  }

  let pageCount = 0;

  walkBuildOutput((pagePath, content) => {
    pageCount++;
    checkLinkBleed(pagePath, content);
    checkSchemaType(pagePath, content);
  });

  console.log(`Analyzed ${pageCount} pages\n`);

  // Report results
  let hasViolations = false;

  if (violations.linkBleed.length > 0) {
    hasViolations = true;
    console.log('❌ Link Bleed Violations (Cross-Silo Links):');
    console.log('─'.repeat(60));
    for (const v of violations.linkBleed) {
      console.log(`  Page: ${v.page} (${v.pageSilo})`);
      console.log(`    → Links to: ${v.link} (${v.linkSilo})`);
      console.log('');
    }
  } else {
    console.log('✅ No link bleed violations found');
  }

  console.log('');

  if (violations.schemaType.length > 0) {
    hasViolations = true;
    console.log('❌ Schema Type Mismatches:');
    console.log('─'.repeat(60));
    for (const v of violations.schemaType) {
      console.log(`  Page: ${v.page}`);
      console.log(`    Expected: ${v.expected}, Found: ${v.found}`);
      console.log('');
    }
  } else {
    console.log('✅ Schema types match silos');
  }

  if (violations.missingSilo.length > 0) {
    console.log('\n⚠️  Pages missing schema type:');
    for (const v of violations.missingSilo) {
      console.log(`  - ${v.page} (expected: ${v.expectedSilo})`);
    }
  }

  // Summary
  console.log('\n========================================');
  console.log(`Link Bleed Violations: ${violations.linkBleed.length}`);
  console.log(`Schema Type Issues: ${violations.schemaType.length}`);
  console.log('========================================\n');

  if (hasViolations) {
    console.log('⚠️  Silo integrity issues found. Please fix before deploying.');
    process.exit(1);
  } else {
    console.log('✅ Silo verification passed!');
    process.exit(0);
  }
}

main();
