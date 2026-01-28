#!/usr/bin/env node

/**
 * Batch Schema Addition Script
 * Adds ArticleSchema and FAQSchema to pages that need them
 *
 * Usage:
 *   node scripts/add-schemas-batch.js --dry-run    # Preview changes
 *   node scripts/add-schemas-batch.js              # Apply changes
 */

const fs = require('fs');
const path = require('path');

const APP_DIR = path.join(__dirname, '..', 'app');
const DRY_RUN = process.argv.includes('--dry-run');

// Pages that are article-style content (need ArticleSchema)
const ARTICLE_PATTERNS = [
  /guide/i,
  /explained/i,
  /requirements/i,
  /standards/i,
  /tips/i,
  /how-to/i,
  /vs-/i,
  /-vs-/i,
  /compliance/i,
  /development/i,
  /construction-/i,
  /restoration/i,
  /inspection/i,
  /balancing/i,
  /adaptive/i,
  /navigating/i,
  /sourcing/i,
  /scheduling/i,
];

// Skip these directories (not articles)
const SKIP_DIRS = [
  'locations',
  'contact',
  'gallery',
  'team',
  'resources',
  'our-process',
  'commercial', // Hub pages handled separately
  'residential',
];

function getAllArticlePages(dir, pages = []) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      const relativePath = path.relative(APP_DIR, filePath);
      const firstSegment = relativePath.split(path.sep)[0];

      // Skip certain directories
      if (!SKIP_DIRS.includes(firstSegment)) {
        getAllArticlePages(filePath, pages);
      }
    } else if (file === 'page.tsx') {
      const relativePath = path.relative(APP_DIR, path.dirname(filePath));

      // Check if it's an article-style page
      const isArticle = ARTICLE_PATTERNS.some(pattern => pattern.test(relativePath));
      if (isArticle) {
        pages.push(filePath);
      }
    }
  }

  return pages;
}

function analyzeFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const relativePath = path.relative(APP_DIR, path.dirname(filePath));
  const slug = '/' + relativePath + '/';

  return {
    filePath,
    slug,
    content,
    hasArticleSchema: /ArticleSchema/.test(content),
    hasFAQSchema: /FAQSchema|FAQWithSchema/.test(content),
    hasAccordion: /<Accordion/.test(content),
    hasFaqsArray: /const\s+faqs\s*=\s*\[/.test(content),
    hasSchemaImport: /from\s+["']@\/components\/Schema["']/.test(content),
    metadata: extractMetadata(content),
  };
}

function extractMetadata(content) {
  const titleMatch = content.match(/title:\s*["']([^"']+)["']/);
  const descMatch = content.match(/description:\s*["']([^"']+)["']/);

  return {
    title: titleMatch ? titleMatch[1] : null,
    description: descMatch ? descMatch[1] : null,
  };
}

function addArticleSchema(analysis) {
  let content = analysis.content;

  // Check if already has ArticleSchema
  if (analysis.hasArticleSchema) {
    return { modified: false, content };
  }

  // Add ArticleSchema to import
  if (analysis.hasSchemaImport) {
    // Add ArticleSchema to existing Schema import
    content = content.replace(
      /import\s*\{([^}]+)\}\s*from\s*["']@\/components\/Schema["']/,
      (match, imports) => {
        const importList = imports.split(',').map(i => i.trim());
        if (!importList.includes('ArticleSchema')) {
          importList.push('ArticleSchema');
        }
        return `import { ${importList.join(', ')} } from "@/components/Schema"`;
      }
    );
  } else {
    // Add new Schema import after the first import
    content = content.replace(
      /(import[^;]+;)/,
      '$1\nimport { ArticleSchema } from "@/components/Schema";'
    );
  }

  // Add ArticleSchema component after existing schemas
  const schemaPattern = /<(LocalBusinessSchema|ServiceSchema)[^>]*\/>/;
  const schemaMatch = content.match(schemaPattern);

  if (schemaMatch) {
    const title = analysis.metadata.title || analysis.slug.replace(/\//g, '').replace(/-/g, ' ');
    const description = analysis.metadata.description || 'Expert construction guide for Tampa Bay';

    const articleSchema = `
      <ArticleSchema
        headline="${title}"
        description="${description.replace(/"/g, '\\"')}"
        datePublished="2024-06-01"
        dateModified="2025-01-15"
        slug="${analysis.slug}"
      />`;

    // Find the last schema component and add after it
    const lastSchemaIndex = content.lastIndexOf('/>');
    if (lastSchemaIndex > -1) {
      // Find end of schema section (before Breadcrumb or first section)
      const breadcrumbIndex = content.indexOf('<Breadcrumb');
      const sectionIndex = content.indexOf('<section');
      const insertPoint = Math.min(
        breadcrumbIndex > -1 ? breadcrumbIndex : Infinity,
        sectionIndex > -1 ? sectionIndex : Infinity
      );

      if (insertPoint < Infinity) {
        content = content.slice(0, insertPoint) + articleSchema + '\n\n      ' + content.slice(insertPoint);
      }
    }
  }

  return { modified: true, content };
}

function addFAQSchema(analysis) {
  let content = analysis.content;

  // Check if already has FAQSchema
  if (analysis.hasFAQSchema) {
    return { modified: false, content };
  }

  // Only add if has Accordion AND faqs array
  if (!analysis.hasAccordion || !analysis.hasFaqsArray) {
    return { modified: false, content };
  }

  // Add FAQSchema to import
  if (analysis.hasSchemaImport) {
    content = content.replace(
      /import\s*\{([^}]+)\}\s*from\s*["']@\/components\/Schema["']/,
      (match, imports) => {
        const importList = imports.split(',').map(i => i.trim());
        if (!importList.includes('FAQSchema')) {
          importList.push('FAQSchema');
        }
        return `import { ${importList.join(', ')} } from "@/components/Schema"`;
      }
    );
  }

  // Add FAQSchema component after ArticleSchema or other schemas
  const insertPatterns = [
    /<ArticleSchema[^>]*\/>/,
    /<ServiceSchema[^>]*\/>/,
    /<LocalBusinessSchema[^>]*\/>/,
  ];

  for (const pattern of insertPatterns) {
    if (pattern.test(content)) {
      content = content.replace(pattern, (match) => {
        return match + '\n      <FAQSchema faqs={faqs} />';
      });
      break;
    }
  }

  return { modified: true, content };
}

function processFile(filePath) {
  const analysis = analyzeFile(filePath);
  const changes = [];

  // Add ArticleSchema
  let result = addArticleSchema(analysis);
  if (result.modified) {
    changes.push('ArticleSchema');
    analysis.content = result.content;
  }

  // Add FAQSchema if applicable
  result = addFAQSchema({ ...analysis, content: result.content || analysis.content });
  if (result.modified) {
    changes.push('FAQSchema');
    analysis.content = result.content;
  }

  return {
    filePath,
    slug: analysis.slug,
    changes,
    content: analysis.content,
  };
}

function main() {
  console.log('📋 Batch Schema Addition Script');
  console.log('='.repeat(50));
  console.log(DRY_RUN ? '🔍 DRY RUN MODE - No files will be modified\n' : '✏️  LIVE MODE - Files will be modified\n');

  const pages = getAllArticlePages(APP_DIR);
  console.log(`Found ${pages.length} article-style pages to analyze\n`);

  const results = {
    modified: [],
    skipped: [],
  };

  for (const filePath of pages) {
    const result = processFile(filePath);

    if (result.changes.length > 0) {
      results.modified.push(result);
      console.log(`✅ ${result.slug}: +${result.changes.join(', ')}`);

      if (!DRY_RUN) {
        fs.writeFileSync(filePath, result.content);
      }
    } else {
      results.skipped.push(result);
    }
  }

  console.log('\n' + '='.repeat(50));
  console.log(`📊 Summary:`);
  console.log(`   Modified: ${results.modified.length} pages`);
  console.log(`   Skipped: ${results.skipped.length} pages (already have schemas)`);

  if (DRY_RUN && results.modified.length > 0) {
    console.log('\n💡 Run without --dry-run to apply changes');
  }

  return results;
}

main();
