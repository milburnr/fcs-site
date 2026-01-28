#!/usr/bin/env node

/**
 * Fixes remaining pages that need ArticleSchema and FAQSchema
 */

const fs = require('fs');
const path = require('path');

const APP_DIR = path.join(__dirname, '..', 'app');

// Pages identified as needing both ArticleSchema and FAQSchema
const PAGES_TO_FIX = [
  'condo-common-area-reconstruction',
  'davis-islands-custom-home-building',
  'historic-home-energy-efficiency',
  'historic-tax-credits-commercial-buildings',
  'hurricane-resistant-luxury-home-design',
  'medical-office-value-engineering',
  'multi-family-flood-zone-construction',
  'renovating-historic-homes-tampa',
  'seawall-coordination-new-construction',
  'sirs-structural-integrity-reserve-studies',
  'smart-home-integration-luxury-estates',
  'tampa-certificate-of-appropriateness',
  'waterfront-lot-site-preparation',
  'waterproofing-historic-masonry',
];

function fixPage(pageDir) {
  const filePath = path.join(APP_DIR, pageDir, 'page.tsx');

  if (!fs.existsSync(filePath)) {
    console.log(`❌ Not found: ${pageDir}`);
    return false;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  const slug = `/${pageDir}/`;
  let modified = false;

  // Check if already has ArticleSchema and FAQSchema
  const hasArticle = /ArticleSchema/.test(content);
  const hasFAQ = /FAQSchema/.test(content);

  if (hasArticle && hasFAQ) {
    console.log(`✓ Already complete: ${pageDir}`);
    return false;
  }

  // Get metadata for schema
  const titleMatch = content.match(/title:\s*["']([^"']+)["']/);
  const descMatch = content.match(/description:\s*\n?\s*["']([^"']+)["']/s);
  const title = titleMatch ? titleMatch[1] : pageDir.replace(/-/g, ' ');
  const description = descMatch ? descMatch[1] : 'Expert construction services in Tampa Bay';

  // Fix Schema import
  if (!hasArticle || !hasFAQ) {
    const newImports = [];
    if (!hasArticle) newImports.push('ArticleSchema');
    if (!hasFAQ) newImports.push('FAQSchema');

    if (content.includes('from "@/components/Schema"')) {
      content = content.replace(
        /import\s*\{([^}]+)\}\s*from\s*["']@\/components\/Schema["']/,
        (match, imports) => {
          const importList = imports.split(',').map(i => i.trim()).filter(Boolean);
          newImports.forEach(imp => {
            if (!importList.includes(imp)) {
              importList.push(imp);
            }
          });
          return `import { ${importList.join(', ')} } from "@/components/Schema"`;
        }
      );
    }
  }

  // Add schemas after ServiceSchema
  if (!hasArticle || !hasFAQ) {
    const schemasToAdd = [];

    if (!hasArticle) {
      schemasToAdd.push(`
      <ArticleSchema
        headline="${title.replace(/"/g, '\\"')}"
        description="${description.replace(/"/g, '\\"').replace(/\n/g, ' ')}"
        datePublished="2024-06-01"
        dateModified="2025-01-15"
        slug="${slug}"
      />`);
    }

    if (!hasFAQ) {
      schemasToAdd.push(`
      <FAQSchema faqs={faqs} />`);
    }

    // Insert after ServiceSchema or LocalBusinessSchema
    const patterns = [
      /(<ServiceSchema[^>]*\/>)/,
      /(<LocalBusinessSchema[^>]*\/>)/,
    ];

    for (const pattern of patterns) {
      if (pattern.test(content)) {
        content = content.replace(pattern, (match) => {
          return match + schemasToAdd.join('');
        });
        modified = true;
        break;
      }
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`✅ Fixed: ${pageDir}`);
    return true;
  }

  return false;
}

console.log('🔧 Fixing remaining schema pages\n');

let fixed = 0;
for (const page of PAGES_TO_FIX) {
  if (fixPage(page)) {
    fixed++;
  }
}

console.log(`\n✅ Fixed ${fixed} pages`);
