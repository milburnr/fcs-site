#!/usr/bin/env node
/**
 * add-schema-to-pages.js
 *
 * Adds LocalBusinessSchema to all pages that are missing it.
 * Run: node scripts/add-schema-to-pages.js [--dry-run]
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
 * Add LocalBusinessSchema to a page file
 */
function addSchemaToPage(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');

  // Check if already has LocalBusinessSchema
  if (content.includes('LocalBusinessSchema')) {
    return { status: 'already_has_schema' };
  }

  // Skip layout.tsx disguised as page.tsx, etc.
  if (!content.includes('export default function')) {
    return { status: 'skipped', reason: 'no default function export' };
  }

  // Skip if no return statement with JSX
  if (!content.includes('return (')) {
    return { status: 'skipped', reason: 'no return statement' };
  }

  let newContent = content;

  // Step 1: Add or update the import statement
  const schemaImportRegex = /import\s*\{([^}]+)\}\s*from\s*["']@\/components\/Schema["'];?/;
  const hasSchemaImport = schemaImportRegex.test(content);

  if (hasSchemaImport) {
    // Add LocalBusinessSchema to existing import if not present
    newContent = newContent.replace(schemaImportRegex, (match, imports) => {
      if (imports.includes('LocalBusinessSchema')) {
        return match; // Already has it
      }
      const newImports = imports.trim() + ', LocalBusinessSchema';
      return `import { ${newImports} } from "@/components/Schema"`;
    });
  } else {
    // Add new import statement after other imports
    // Find the last import statement
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
        '\nimport { LocalBusinessSchema } from "@/components/Schema";' +
        newContent.slice(insertPosition);
    } else {
      // No imports found, add at beginning
      newContent = 'import { LocalBusinessSchema } from "@/components/Schema";\n' + newContent;
    }
  }

  // Step 2: Add <LocalBusinessSchema /> component after the first <> or return (
  // Find the return statement with JSX fragment
  const returnFragmentRegex = /return\s*\(\s*<>/;
  const returnDivRegex = /return\s*\(\s*<(?!>)/;

  if (returnFragmentRegex.test(newContent)) {
    // Has fragment <>, add after it
    newContent = newContent.replace(returnFragmentRegex, (match) => {
      return match + '\n      <LocalBusinessSchema />';
    });
  } else if (returnDivRegex.test(newContent)) {
    // Has direct element, wrap with fragment and add schema
    // This is more complex, we'll use a different approach
    // Find "return (" and add wrapping
    const returnMatch = newContent.match(/return\s*\(\s*\n?\s*(<[^>]+>)/);
    if (returnMatch) {
      const openTag = returnMatch[1];
      // We need to wrap the entire return content in a fragment
      // This is complex, so let's try a simpler approach:
      // Just add the schema as a sibling if possible

      // Actually, let's use a hack - find the first element and insert schema before it
      newContent = newContent.replace(/return\s*\(\s*\n(\s*)(<)/m, (match, whitespace, bracket) => {
        return `return (\n${whitespace}<>\n${whitespace}  <LocalBusinessSchema />\n${whitespace}  ${bracket}`;
      });

      // We also need to close the fragment before the final closing paren
      // Find the last ); and add </> before it
      const lastParenRegex = /(\s*)\);\s*\n?\s*\}\s*$/;
      if (lastParenRegex.test(newContent)) {
        newContent = newContent.replace(lastParenRegex, (match, whitespace) => {
          return `${whitespace}</>\n${whitespace});\n}`;
        });
      }
    }
  }

  // Verify the change was made
  if (!newContent.includes('<LocalBusinessSchema')) {
    return { status: 'error', reason: 'could not insert schema component' };
  }

  return { status: 'updated', content: newContent };
}

// Main execution
console.log(`\n${'='.repeat(60)}`);
console.log(`  Adding LocalBusinessSchema to Pages`);
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
    const result = addSchemaToPage(filePath);

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
