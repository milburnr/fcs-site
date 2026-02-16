#!/usr/bin/env node
/**
 * Move remaining ~30 unclassified article pages into silo guides directories.
 * Similar to move-articles-to-silos.js but for the second batch.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const NETLIFY_TOML_PATH = path.join(ROOT, 'netlify.toml');

const SILO_LABELS = {
  commercial: 'Commercial',
  residential: 'Residential',
  insurance: 'Insurance',
};

const articles = [
  { slug: 'affordable-commercial-construction-in-tampa', silo: 'commercial', pattern: 'commercial', method: 'keyword-pattern' },
  { slug: 'commercial-building-design-services-in-tampa', silo: 'commercial', pattern: 'commercial', method: 'keyword-pattern' },
  { slug: 'commercial-construction-consultancy-in-tampa', silo: 'commercial', pattern: 'commercial-construction', method: 'service-silo' },
  { slug: 'commercial-construction-loans-in-tampa', silo: 'commercial', pattern: 'commercial-construction', method: 'service-silo' },
  { slug: 'commercial-construction-regulations-in-tampa', silo: 'commercial', pattern: 'commercial-construction', method: 'service-silo' },
  { slug: 'commercial-construction-technology-in-tampa', silo: 'commercial', pattern: 'commercial-construction', method: 'service-silo' },
  { slug: 'commercial-construction-wants-vs-needs-in-tampa', silo: 'commercial', pattern: 'commercial-construction', method: 'service-silo' },
  { slug: 'commercial-interior-design-in-tampa', silo: 'commercial', pattern: 'commercial', method: 'keyword-pattern' },
  { slug: 'commercial-property-damage-restoration-in-tampa', silo: 'insurance', pattern: 'damage-restoration', method: 'keyword-pattern' },
  { slug: 'commercial-roofing-services-in-tampa', silo: 'commercial', pattern: 'commercial', method: 'keyword-pattern' },
  { slug: 'choosing-a-builder-expert-commercial-construction-in-tampa', silo: 'commercial', pattern: 'commercial-construction', method: 'service-silo' },
  { slug: 'choosing-materials-for-commercial-construction-in-tampa', silo: 'commercial', pattern: 'commercial-construction', method: 'service-silo' },
  { slug: 'key-factors-for-choosing-the-top-commercial-contractor-in-tampa', silo: 'commercial', pattern: 'commercial', method: 'keyword-pattern' },
  { slug: 'tips-for-choosing-a-commercial-contractor-in-tampa', silo: 'commercial', pattern: 'commercial', method: 'keyword-pattern' },
  { slug: 'hurricane-damage-repair-services-in-tampa', silo: 'insurance', pattern: 'hurricane-damage', method: 'keyword-pattern' },
  { slug: 'hurricane-proof-reconstruction-services-in-tampa', silo: 'insurance', pattern: 'hurricane', method: 'keyword-pattern' },
  { slug: 'complete-property-overhaul-after-disasters-in-tampa', silo: 'insurance', pattern: 'disaster', method: 'keyword-pattern' },
  { slug: 'adaptive-reuse-of-historic-buildings-in-tampa', silo: 'commercial', pattern: 'historic', method: 'keyword-pattern' },
  { slug: 'challenges-in-historic-restoration-projects-in-tampa', silo: 'commercial', pattern: 'historic-restoration', method: 'service-silo' },
  { slug: 'color-palettes-for-historic-buildings-in-tampa', silo: 'commercial', pattern: 'historic', method: 'keyword-pattern' },
  { slug: 'cost-of-historic-restoration-in-tampa', silo: 'commercial', pattern: 'historic-restoration', method: 'service-silo' },
  { slug: 'building-multi-generational-homes-in-tampa', silo: 'residential', pattern: 'home', method: 'keyword-pattern' },
  { slug: 'climate-resilient-custom-homes-in-tampa', silo: 'residential', pattern: 'custom-home', method: 'keyword-pattern' },
  { slug: 'crafting-custom-home-libraries-in-tampa', silo: 'residential', pattern: 'custom-home', method: 'keyword-pattern' },
  { slug: 'custom-home-accessibility-features-in-tampa', silo: 'residential', pattern: 'custom-home', method: 'keyword-pattern' },
  { slug: 'custom-home-interior-design-services-in-tampa', silo: 'residential', pattern: 'custom-home', method: 'keyword-pattern' },
  { slug: 'custom-home-theaters-and-entertainment-spaces-in-tampa', silo: 'residential', pattern: 'custom-home', method: 'keyword-pattern' },
  { slug: 'claims-negotiation-for-property-damage-in-tampa', silo: 'insurance', pattern: 'claim', method: 'keyword-pattern' },
  { slug: 'insurance-arbitration-appraisal', silo: 'insurance', pattern: 'insurance', method: 'keyword-pattern' },
  { slug: 'florida-construction-specialists-committed-to-the-community-in-tampa', silo: 'commercial', pattern: 'community-outreach', method: 'keyword-pattern' },
];

function main() {
  let toml = fs.readFileSync(NETLIFY_TOML_PATH, 'utf8');

  // Parse existing redirects
  const existingRedirectFroms = new Set(
    [...toml.matchAll(/from = "([^"]+)"/g)].map(m => m[1])
  );

  let moved = 0;
  let skipped = 0;
  let updatedRedirects = 0;
  let newRedirects = [];

  for (const article of articles) {
    const { slug, silo, pattern, method } = article;
    const siloLabel = SILO_LABELS[silo];
    const currentPath = `/${slug}/`;
    const targetPath = `/${silo}/guides/${slug}/`;

    const srcDir = path.join(ROOT, 'app', slug);
    const srcFile = path.join(srcDir, 'page.tsx');
    const destDir = path.join(ROOT, 'app', silo, 'guides', slug);
    const destFile = path.join(destDir, 'page.tsx');

    // Verify source exists
    if (!fs.existsSync(srcFile)) {
      console.warn(`  WARN: No page.tsx at ${srcDir}`);
      skipped++;
      continue;
    }

    // Skip if already at dest
    if (fs.existsSync(destFile)) {
      console.log(`  SKIP: ${slug} already moved`);
      skipped++;
      continue;
    }

    // 1. Create target directory
    fs.mkdirSync(destDir, { recursive: true });

    // 2. Read and transform page.tsx
    let content = fs.readFileSync(srcFile, 'utf8');

    // 2a. Update canonical URL
    const oldCanonical = `https://floridaconstructionspecialists.com/${slug}/`;
    const newCanonical = `https://floridaconstructionspecialists.com/${silo}/guides/${slug}/`;
    content = content.replace(oldCanonical, newCanonical);

    // 2b. Update OG/meta URLs (path-only references like '/{slug}/' or "/{slug}/")
    const slugEscaped = slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    content = content.replace(
      new RegExp(`(['"])/${slugEscaped}/(['"])`, 'g'),
      (match, q1, q2) => `${q1}/${silo}/guides/${slug}/${q2}`
    );

    // 2c. Update breadcrumbs
    const breadcrumbRegex = /const breadcrumbItems = \[\s*\{[^}]*name:\s*"Home"[^}]*\}[\s\S]*?\];/;
    const breadcrumbMatch = content.match(breadcrumbRegex);

    if (breadcrumbMatch) {
      const allNames = [...breadcrumbMatch[0].matchAll(/name:\s*"([^"]+)"/g)];
      const pageTitle = allNames.length > 1 ? allNames[allNames.length - 1][1] : slug;

      const newBreadcrumbs = `const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "${siloLabel}", href: "/${silo}/" },
  { name: "Guides", href: "/${silo}/guides/" },
  { name: "${pageTitle.replace(/"/g, '\\"')}", href: "/${silo}/guides/${slug}/" },
];`;
      content = content.replace(breadcrumbRegex, newBreadcrumbs);
    } else {
      console.warn(`  WARN: Non-standard breadcrumb format in ${slug}`);
    }

    // 3. Write to new location
    fs.writeFileSync(destFile, content, 'utf8');

    // 4. Delete old directory
    fs.rmSync(srcDir, { recursive: true, force: true });

    // 5. Handle redirect
    if (existingRedirectFroms.has(currentPath)) {
      const escapedFrom = currentPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const redirectBlockRegex = new RegExp(
        `(\\[\\[redirects\\]\\]\\s*\\n\\s*from = "${escapedFrom}"\\s*\\n\\s*to = )"[^"]*"`,
        'm'
      );
      const replacement = `$1"${targetPath}"`;
      const newToml = toml.replace(redirectBlockRegex, replacement);
      if (newToml !== toml) {
        toml = newToml;
        updatedRedirects++;
      } else {
        newRedirects.push({ from: currentPath, to: targetPath });
      }
    } else {
      newRedirects.push({ from: currentPath, to: targetPath });
    }

    moved++;
    console.log(`  MOVED: ${slug} => ${silo}/guides/${slug}/`);
  }

  // Append new redirects
  if (newRedirects.length > 0) {
    const redirectBlock = '\n# ===========================================\n' +
      '# 301 Redirects for Remaining Article Silo Moves (Phase 2b)\n' +
      '# ===========================================\n' +
      newRedirects.map(r =>
        `\n[[redirects]]\n  from = "${r.from}"\n  to = "${r.to}"\n  status = 301`
      ).join('\n') + '\n';
    toml += redirectBlock;
  }

  // Write updated netlify.toml
  fs.writeFileSync(NETLIFY_TOML_PATH, toml, 'utf8');

  // Summary
  console.log('\n=== Summary ===');
  console.log(`Moved: ${moved}`);
  console.log(`Skipped: ${skipped}`);
  console.log(`Existing redirects updated: ${updatedRedirects}`);
  console.log(`New redirects added: ${newRedirects.length}`);

  // Verify counts per silo
  for (const silo of ['commercial', 'residential', 'insurance']) {
    const guidesDir = path.join(ROOT, 'app', silo, 'guides');
    if (fs.existsSync(guidesDir)) {
      const dirs = fs.readdirSync(guidesDir).filter(f =>
        fs.statSync(path.join(guidesDir, f)).isDirectory()
      );
      console.log(`  ${silo}/guides/: ${dirs.length} articles`);
    }
  }
}

main();
