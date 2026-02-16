#!/usr/bin/env node
/**
 * fix-schema-placement.js
 *
 * Fixes schema placement across all page types:
 * 1. Adds ArticleSchema to guide pages missing it
 * 2. Removes LocalBusinessSchema from guide/article pages
 * 3. Reports changes made
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const APP_DIR = path.join(__dirname, '..', 'app');

// Find all guide page.tsx files
function findGuidePages() {
  const result = execSync(
    `find ${APP_DIR} -path "*/guides/*/page.tsx"`,
    { encoding: 'utf-8' }
  );
  return result.trim().split('\n').filter(Boolean);
}

// Extract metadata title from page source
function extractMetadataTitle(source) {
  // Match title: "..." or title: '...' in metadata export
  const match = source.match(/title:\s*["'](.+?)["']/);
  return match ? match[1] : null;
}

// Extract metadata description from page source
function extractMetadataDescription(source) {
  const match = source.match(/description:\s*["'](.+?)["']/);
  return match ? match[1] : null;
}

// Derive slug from file path
function deriveSlug(filePath) {
  // e.g., app/commercial/guides/some-article/page.tsx -> /commercial/guides/some-article/
  const relative = path.relative(APP_DIR, filePath);
  const dir = path.dirname(relative); // commercial/guides/some-article
  return `/${dir}/`;
}

function processGuidePages() {
  const pages = findGuidePages();
  console.log(`Found ${pages.length} guide pages to process\n`);

  let addedArticle = 0;
  let removedLocal = 0;
  let alreadyHadArticle = 0;
  let noLocalToRemove = 0;

  for (const filePath of pages) {
    let source = fs.readFileSync(filePath, 'utf-8');
    let changed = false;
    const slug = deriveSlug(filePath);
    const shortPath = path.relative(path.join(__dirname, '..'), filePath);

    // --- Remove LocalBusinessSchema ---
    const hasLocalBizJSX = source.includes('<LocalBusinessSchema');
    if (hasLocalBizJSX) {
      // Remove JSX usage: <LocalBusinessSchema /> or <LocalBusinessSchema city="..." />
      // Handle multiline and single-line variants
      source = source.replace(/\s*<LocalBusinessSchema\s*(?:\/?>|[^>]*\/>)\n?/g, '\n');
      changed = true;
      removedLocal++;
    } else {
      noLocalToRemove++;
    }

    // Remove LocalBusinessSchema from import
    if (source.includes('LocalBusinessSchema')) {
      // Pattern: it's in a destructured import from Schema
      // Remove it from the import list
      source = source.replace(
        /import\s*\{([^}]*)\}\s*from\s*["']@\/components\/Schema["'];?/,
        (match, imports) => {
          const items = imports.split(',').map(s => s.trim()).filter(Boolean);
          const filtered = items.filter(i => i !== 'LocalBusinessSchema');
          if (filtered.length === 0) {
            return ''; // Remove entire import if nothing left
          }
          return `import { ${filtered.join(', ')} } from "@/components/Schema";`;
        }
      );
      changed = true;
    }

    // --- Add ArticleSchema JSX if missing ---
    const hasArticleJSX = source.includes('<ArticleSchema');
    if (!hasArticleJSX) {
      const title = extractMetadataTitle(source);
      const description = extractMetadataDescription(source);

      if (!title) {
        console.log(`  WARN: No title found in ${shortPath}, skipping ArticleSchema`);
        if (changed) fs.writeFileSync(filePath, source, 'utf-8');
        continue;
      }

      // Add ArticleSchema to import if not already there
      if (!source.includes('ArticleSchema')) {
        source = source.replace(
          /import\s*\{([^}]*)\}\s*from\s*["']@\/components\/Schema["'];?/,
          (match, imports) => {
            const items = imports.split(',').map(s => s.trim()).filter(Boolean);
            if (!items.includes('ArticleSchema')) {
              items.push('ArticleSchema');
            }
            return `import { ${items.join(', ')} } from "@/components/Schema";`;
          }
        );
      }

      // If no Schema import exists at all, add one
      if (!source.includes('@/components/Schema')) {
        // Add after the last import line
        const lastImportIdx = source.lastIndexOf('import ');
        const nextNewline = source.indexOf('\n', lastImportIdx);
        const lineEnd = source.indexOf('\n', nextNewline + 1);
        source = source.slice(0, nextNewline + 1) +
          'import { ArticleSchema } from "@/components/Schema";\n' +
          source.slice(nextNewline + 1);
      }

      // Escape title/description for JSX (handle double quotes)
      const escapedTitle = title.replace(/"/g, '\\"');
      const escapedDesc = description ? description.replace(/"/g, '\\"') : escapedTitle;

      // Insert ArticleSchema JSX after BreadcrumbSchema or at start of return fragment
      const articleJSX = `      <ArticleSchema\n        headline="${escapedTitle}"\n        description="${escapedDesc}"\n        datePublished="2024-01-01"\n        slug="${slug}"\n      />`;

      // Try to insert after BreadcrumbSchema line
      const breadcrumbPattern = /(\s*<BreadcrumbSchema\s+items=\{breadcrumbItems\}\s*\/>)/;
      if (breadcrumbPattern.test(source)) {
        source = source.replace(breadcrumbPattern, `$1\n${articleJSX}`);
      } else {
        // Insert after the opening fragment <>
        source = source.replace(/(\s*<>\s*\n)/, `$1${articleJSX}\n`);
      }

      addedArticle++;
      changed = true;
    } else {
      alreadyHadArticle++;
    }

    if (changed) {
      fs.writeFileSync(filePath, source, 'utf-8');
    }
  }

  console.log('\n=== Guide Pages Summary ===');
  console.log(`Total guide pages: ${pages.length}`);
  console.log(`ArticleSchema added: ${addedArticle}`);
  console.log(`ArticleSchema already present: ${alreadyHadArticle}`);
  console.log(`LocalBusinessSchema removed: ${removedLocal}`);
  console.log(`No LocalBusinessSchema to remove: ${noLocalToRemove}`);

  return { total: pages.length, addedArticle, removedLocal, alreadyHadArticle };
}

// Run
const results = processGuidePages();
console.log('\nDone!');
