#!/usr/bin/env node
/**
 * add-breadcrumb-schema.js
 *
 * Adds BreadcrumbSchema to all pages that are missing it.
 * Run: node scripts/add-breadcrumb-schema.js [--dry-run]
 */

const fs = require('fs');
const path = require('path');

const APP_DIR = path.join(__dirname, '..', 'app');
const DRY_RUN = process.argv.includes('--dry-run');

let stats = {
  total: 0,
  alreadyHasSchema: 0,
  updated: 0,
  skipped: 0,
  errors: 0
};

/**
 * Convert folder name to readable title
 * e.g., "a-zero-accident-workplace-in-tampas-commercial-construction"
 *    -> "Zero Accident Workplace in Tampa's Commercial Construction"
 */
function folderToTitle(folderName) {
  // Remove leading numbers/prefixes like "a-" if they're articles
  let title = folderName;

  // Convert dashes to spaces
  title = title.replace(/-/g, ' ');

  // Title case each word
  title = title.replace(/\b\w/g, char => char.toUpperCase());

  // Fix common word casings
  title = title
    .replace(/\bIn\b/g, 'in')
    .replace(/\bOf\b/g, 'of')
    .replace(/\bFor\b/g, 'for')
    .replace(/\bThe\b/g, 'the')
    .replace(/\bAnd\b/g, 'and')
    .replace(/\bWith\b/g, 'with')
    .replace(/\bTo\b/g, 'to')
    .replace(/\bA\b/g, 'a')
    .replace(/\bAn\b/g, 'an')
    .replace(/\bTampas\b/g, "Tampa's")
    .replace(/\bFloridas\b/g, "Florida's");

  // Capitalize first letter
  title = title.charAt(0).toUpperCase() + title.slice(1);

  // Truncate if too long (for breadcrumb display)
  if (title.length > 50) {
    title = title.substring(0, 47) + '...';
  }

  return title;
}

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
 * Add BreadcrumbSchema to a page file
 */
function addBreadcrumbSchema(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const relativePath = path.relative(APP_DIR, filePath);
  const folderPath = path.dirname(relativePath);

  // Skip homepage
  if (folderPath === '.' || folderPath === '') {
    return { status: 'skipped', reason: 'homepage' };
  }

  // Check if already has BreadcrumbSchema
  if (content.includes('BreadcrumbSchema')) {
    return { status: 'already_has_schema' };
  }

  // Skip if no default function export
  if (!content.includes('export default function')) {
    return { status: 'skipped', reason: 'no default function export' };
  }

  // Get the folder name for the breadcrumb
  const folderName = path.basename(folderPath);
  const pageTitle = folderToTitle(folderName);
  const pageHref = `/${folderName}/`;

  let newContent = content;

  // Step 1: Update or add the Schema import
  const schemaImportRegex = /import\s*\{([^}]+)\}\s*from\s*["']@\/components\/Schema["'];?/;
  const hasSchemaImport = schemaImportRegex.test(content);

  if (hasSchemaImport) {
    // Add BreadcrumbSchema to existing import if not present
    newContent = newContent.replace(schemaImportRegex, (match, imports) => {
      if (imports.includes('BreadcrumbSchema')) {
        return match;
      }
      const importList = imports.split(',').map(i => i.trim()).filter(Boolean);
      importList.push('BreadcrumbSchema');
      return `import { ${importList.join(', ')} } from "@/components/Schema"`;
    });
  } else {
    // Add new import after other imports
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
        '\nimport { BreadcrumbSchema } from "@/components/Schema";' +
        newContent.slice(insertPosition);
    }
  }

  // Step 2: Add breadcrumbItems constant before the function
  // Find the line before "export default function"
  const exportFuncMatch = newContent.match(/export\s+default\s+function/);
  if (exportFuncMatch) {
    const insertPos = exportFuncMatch.index;
    const breadcrumbDef = `const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "${pageTitle}", href: "${pageHref}" },
];

`;
    newContent = newContent.slice(0, insertPos) + breadcrumbDef + newContent.slice(insertPos);
  }

  // Step 3: Add <BreadcrumbSchema items={breadcrumbItems} /> after <LocalBusinessSchema />
  if (newContent.includes('<LocalBusinessSchema />')) {
    newContent = newContent.replace(
      '<LocalBusinessSchema />',
      '<LocalBusinessSchema />\n      <BreadcrumbSchema items={breadcrumbItems} />'
    );
  } else if (newContent.includes('<LocalBusinessSchema')) {
    // Handle case where LocalBusinessSchema has props
    newContent = newContent.replace(
      /(<LocalBusinessSchema[^/]*\/>)/,
      '$1\n      <BreadcrumbSchema items={breadcrumbItems} />'
    );
  } else {
    // No LocalBusinessSchema, add after the fragment opening
    const returnFragmentRegex = /return\s*\(\s*<>/;
    if (returnFragmentRegex.test(newContent)) {
      newContent = newContent.replace(returnFragmentRegex, (match) => {
        return match + '\n      <BreadcrumbSchema items={breadcrumbItems} />';
      });
    }
  }

  // Verify the change was made
  if (!newContent.includes('<BreadcrumbSchema')) {
    return { status: 'error', reason: 'could not insert BreadcrumbSchema component' };
  }

  return { status: 'updated', content: newContent };
}

// Main execution
console.log(`\n${'='.repeat(60)}`);
console.log(`  Adding BreadcrumbSchema to Pages`);
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
    const result = addBreadcrumbSchema(filePath);

    switch (result.status) {
      case 'already_has_schema':
        stats.alreadyHasSchema++;
        break;

      case 'skipped':
        stats.skipped++;
        break;

      case 'updated':
        stats.updated++;
        updatedFiles.push(relativePath);
        if (!DRY_RUN) {
          fs.writeFileSync(filePath, result.content, 'utf8');
        }
        console.log(`✓ ${relativePath}`);
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
console.log(`  Already have schema:      ${stats.alreadyHasSchema}`);
console.log(`  Updated${DRY_RUN ? ' (would be)' : ''}:              ${stats.updated}`);
console.log(`  Skipped:                  ${stats.skipped}`);
console.log(`  Errors:                   ${stats.errors}`);
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
