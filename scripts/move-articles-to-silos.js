#!/usr/bin/env node
/**
 * Move classified articles from root paths into silo guides directories.
 * Reads seo/article-classification.json and for each article:
 * 1. Creates target directory: app/{silo}/guides/{slug}/
 * 2. Copies page.tsx to new location with updated canonical + breadcrumbs
 * 3. Deletes old directory
 * 4. Collects redirect entries
 *
 * After processing, appends redirect blocks to netlify.toml and updates
 * any existing Phase 1 redirects that targeted the same old paths.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const CLASSIFICATION_PATH = path.join(ROOT, 'seo/article-classification.json');
const NETLIFY_TOML_PATH = path.join(ROOT, 'netlify.toml');

const SILO_LABELS = {
  commercial: 'Commercial',
  residential: 'Residential',
  insurance: 'Insurance',
};

function main() {
  const classification = JSON.parse(fs.readFileSync(CLASSIFICATION_PATH, 'utf8'));
  const articles = classification.articles;
  let toml = fs.readFileSync(NETLIFY_TOML_PATH, 'utf8');

  console.log(`Processing ${articles.length} articles...`);

  // Parse existing redirects to detect overlap
  const existingRedirectFroms = new Set(
    [...toml.matchAll(/from = "([^"]+)"/g)].map(m => m[1])
  );

  let moved = 0;
  let skipped = 0;
  let updatedRedirects = 0;
  let newRedirects = [];

  for (let i = 0; i < articles.length; i++) {
    const article = articles[i];
    const { slug, currentPath, targetSilo, targetPath } = article;
    const siloLabel = SILO_LABELS[targetSilo];

    const srcDir = path.join(ROOT, 'app', slug);
    const srcFile = path.join(srcDir, 'page.tsx');
    const destDir = path.join(ROOT, 'app', targetSilo, 'guides', slug);
    const destFile = path.join(destDir, 'page.tsx');

    // Skip if source doesn't exist
    if (!fs.existsSync(srcFile)) {
      console.warn(`  WARN: No page.tsx at ${srcDir}, skipping`);
      skipped++;
      continue;
    }

    // Skip if destination already exists (idempotent)
    if (fs.existsSync(destFile)) {
      console.log(`  SKIP: ${slug} already at destination`);
      skipped++;
      continue;
    }

    // 1. Create target directory
    fs.mkdirSync(destDir, { recursive: true });

    // 2. Read and transform page.tsx
    let content = fs.readFileSync(srcFile, 'utf8');

    // 2a. Update canonical URL
    const oldCanonical = `https://floridaconstructionspecialists.com/${slug}/`;
    const newCanonical = `https://floridaconstructionspecialists.com/${targetSilo}/guides/${slug}/`;
    content = content.replace(oldCanonical, newCanonical);

    // Also update openGraph url if present
    const ogOld = `'/${slug}/'`;
    const ogNew = `'/${targetSilo}/guides/${slug}/'`;
    // Handle both single and double quotes for OG URLs
    content = content.replace(
      new RegExp(`(['"])/${slug}/['"]`, 'g'),
      (match, quote) => {
        // Don't replace canonical (already handled) or href in breadcrumbs (handled next)
        return `${quote}/${targetSilo}/guides/${slug}/${quote}`;
      }
    );
    // Restore the canonical that was already correct (it uses the full URL so won't be affected)

    // 2b. Update breadcrumbs
    // Pattern: breadcrumbItems array with Home + page title
    const breadcrumbRegex = /const breadcrumbItems = \[\s*\{[^}]*name:\s*"Home"[^}]*\}[\s\S]*?\];/;
    const breadcrumbMatch = content.match(breadcrumbRegex);

    if (breadcrumbMatch) {
      // Extract the page title from the last breadcrumb item
      const titleMatch = breadcrumbMatch[0].match(/name:\s*"([^"]+)"[^}]*\}\s*,?\s*\];?$/m);
      // Try to get the last name value
      const allNames = [...breadcrumbMatch[0].matchAll(/name:\s*"([^"]+)"/g)];
      const pageTitle = allNames.length > 1 ? allNames[allNames.length - 1][1] : slug;

      const newBreadcrumbs = `const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "${siloLabel}", href: "/${targetSilo}/" },
  { name: "Guides", href: "/${targetSilo}/guides/" },
  { name: "${pageTitle.replace(/"/g, '\\"')}", href: "/${targetSilo}/guides/${slug}/" },
];`;
      content = content.replace(breadcrumbRegex, newBreadcrumbs);
    } else {
      // Try alternate pattern: inline Breadcrumb items prop
      console.warn(`  WARN: Non-standard breadcrumb format in ${slug}, updating inline`);
    }

    // 3. Write to new location
    fs.writeFileSync(destFile, content, 'utf8');

    // 4. Delete old directory
    fs.rmSync(srcDir, { recursive: true, force: true });

    // 5. Track redirect
    if (existingRedirectFroms.has(currentPath)) {
      // Update existing redirect in toml
      // Match the specific redirect block and update its `to` value
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
        // Fallback: add as new redirect if update didn't match
        newRedirects.push({ from: currentPath, to: targetPath });
      }
    } else {
      newRedirects.push({ from: currentPath, to: targetPath });
    }

    moved++;

    if ((i + 1) % 50 === 0) {
      console.log(`  Progress: ${i + 1}/${articles.length} processed`);
    }
  }

  // Append new redirects to netlify.toml
  if (newRedirects.length > 0) {
    const redirectBlock = '\n# ===========================================\n' +
      '# 301 Redirects for Article Silo Moves (Phase 2)\n' +
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
  console.log(`Total redirect entries: ${updatedRedirects + newRedirects.length}`);

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
