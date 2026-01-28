#!/usr/bin/env node
/**
 * Bulk WordPress to Next.js Converter
 * Converts all WordPress static HTML pages to Next.js page.tsx files
 */

const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

// Configuration
const WORDPRESS_DIR = path.join(__dirname, '../wordpress/simply-static-1-1768596916');
const APP_DIR = path.join(__dirname, '../app');
const BUSINESS_NAME = 'Florida Construction Specialists';

// Pages to skip (already manually created or special pages)
const SKIP_PAGES = new Set([
  '', // root/homepage
  'about',
  'about-us',
  'balcony-reconstruction',
  'commercial-construction',
  'contact',
  'disaster-recovery',
  'exterior-waterproofing',
  'historic-restoration-preservation',
  'residential-lifetime-custom-homes',
  'services',
]);

// Skip these directory patterns
const SKIP_PATTERNS = [
  /^author\//,
  /^category\//,
  /^tag\//,
  /^page\//,
  /^wp-/,
  /^feed\//,
  /^comments\//,
  /^xmlrpc/,
  /^wp-json/,
];

/**
 * Extract content from WordPress HTML
 */
function extractContent(htmlPath) {
  const html = fs.readFileSync(htmlPath, 'utf-8');
  const $ = cheerio.load(html);

  // Extract title (remove site name suffix)
  let title = $('title').text().trim();
  title = title.replace(/ - Florida Construction Specialists$/, '').trim();
  title = title.replace(/ \| Florida Construction Specialists$/, '').trim();

  // Extract meta description
  let description = $('meta[name="description"]').attr('content') || '';
  description = description.trim();
  if (description.length > 160) {
    description = description.substring(0, 157) + '...';
  }

  // Extract H1
  let h1 = '';
  $('h1').each((i, el) => {
    const text = $(el).text().trim();
    if (text && !h1) {
      h1 = text;
    }
  });

  // Extract main content paragraphs
  const paragraphs = [];
  const seenContent = new Set();

  // Try different content selectors
  const contentSelectors = [
    '.elementor-widget-text-editor p',
    '.elementor-text-editor p',
    '.entry-content p',
    '.post-content p',
    'article p',
    '.e-con p',
    'main p',
  ];

  for (const selector of contentSelectors) {
    $(selector).each((i, el) => {
      let text = $(el).text().trim();
      // Clean up text
      text = text.replace(/\s+/g, ' ').trim();

      if (text.length > 50 && !seenContent.has(text)) {
        seenContent.add(text);
        paragraphs.push(text);
      }
    });

    if (paragraphs.length >= 3) break;
  }

  // Extract H2 headings for structure
  const headings = [];
  $('h2').each((i, el) => {
    const text = $(el).text().trim();
    if (text && text.length > 3 && text.length < 100) {
      headings.push(text);
    }
  });

  // Extract images
  const images = [];
  $('img').each((i, el) => {
    const src = $(el).attr('src') || $(el).attr('data-src');
    const alt = $(el).attr('alt') || '';
    if (src && !src.includes('data:image') && !src.includes('gravatar')) {
      // Convert to relative path
      let imgPath = src;
      if (imgPath.startsWith('/')) {
        imgPath = imgPath;
      } else if (imgPath.includes('wp-content')) {
        imgPath = '/' + imgPath.substring(imgPath.indexOf('wp-content'));
      }
      images.push({ src: imgPath, alt });
    }
  });

  // Get featured image (og:image)
  let featuredImage = $('meta[property="og:image"]').attr('content') || '';
  if (featuredImage && !featuredImage.startsWith('/')) {
    if (featuredImage.includes('wp-content')) {
      featuredImage = '/' + featuredImage.substring(featuredImage.indexOf('wp-content'));
    }
  }

  return {
    title: title || h1 || 'Page',
    description: description || (paragraphs[0] ? paragraphs[0].substring(0, 157) + '...' : ''),
    h1: h1 || title,
    paragraphs,
    headings: headings.slice(0, 5),
    images: images.slice(0, 10),
    featuredImage,
  };
}

/**
 * Generate page.tsx content
 */
function generatePageTsx(slug, content) {
  const { title, description, h1, paragraphs, headings, featuredImage } = content;

  // Escape strings for JSX
  const escapeJsx = (str) => {
    return str
      .replace(/&/g, '&amp;')
      .replace(/'/g, "&apos;")
      .replace(/"/g, '&quot;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  };

  // Build content sections
  let contentSections = '';

  if (paragraphs.length > 0) {
    contentSections = paragraphs.map((p, i) => {
      if (i === 0 || (headings[i-1] && i <= headings.length)) {
        const heading = i === 0 ? '' : headings[i-1] ? `
              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                ${escapeJsx(headings[i-1])}
              </h2>` : '';
        return `${heading}
              <p className="text-gray-600 mb-6">
                ${escapeJsx(p)}
              </p>`;
      }
      return `
              <p className="text-gray-600 mb-6">
                ${escapeJsx(p)}
              </p>`;
    }).join('\n');
  } else {
    contentSections = `
              <p className="text-gray-600 mb-6">
                Contact Florida Construction Specialists for more information about our ${escapeJsx(title.toLowerCase())} services in Tampa Bay.
              </p>`;
  }

  return `import Link from "next/link";
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "${escapeJsx(title)} - ${BUSINESS_NAME}",
  description: "${escapeJsx(description)}",
};

export default function Page() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-brand-green-dark to-brand-green-forest">
        <div className="container-custom text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            ${escapeJsx(h1)}
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            ${escapeJsx(description.substring(0, 150))}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Get Free Estimate
            </Link>
            <a
              href={\`tel:\${BUSINESS_INFO.phoneRaw}\`}
              className="btn-secondary flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            ${contentSections}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Get Free Estimate
            </Link>
            <a
              href={\`tel:\${BUSINESS_INFO.phoneRaw}\`}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green-dark font-bold rounded-full hover:bg-gray-100 transition-all"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
`;
}

/**
 * Get all page slugs from WordPress export
 */
function getWordPressPageSlugs() {
  const slugs = [];

  function scanDir(dir, basePath = '') {
    const items = fs.readdirSync(dir);

    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        const slug = basePath ? `${basePath}/${item}` : item;
        const indexPath = path.join(fullPath, 'index.html');

        // Check if this directory has an index.html
        if (fs.existsSync(indexPath)) {
          // Skip if matches skip patterns
          const shouldSkip = SKIP_PATTERNS.some(pattern => pattern.test(slug));
          if (!shouldSkip && !SKIP_PAGES.has(slug) && !slug.includes('/page/')) {
            slugs.push({
              slug,
              htmlPath: indexPath,
            });
          }
        }

        // Recurse into subdirectories (but skip deep nesting)
        if (!slug.includes('/')) {
          scanDir(fullPath, slug);
        }
      }
    }
  }

  scanDir(WORDPRESS_DIR);
  return slugs;
}

/**
 * Main conversion function
 */
async function main() {
  console.log('WordPress to Next.js Bulk Converter');
  console.log('===================================\n');

  // Get all page slugs
  const pages = getWordPressPageSlugs();
  console.log(`Found ${pages.length} pages to convert\n`);

  let converted = 0;
  let skipped = 0;
  let errors = 0;

  for (const page of pages) {
    const { slug, htmlPath } = page;
    const appPath = path.join(APP_DIR, slug);
    const pageTsxPath = path.join(appPath, 'page.tsx');

    // Skip if page already exists
    if (fs.existsSync(pageTsxPath)) {
      console.log(`[SKIP] ${slug} - already exists`);
      skipped++;
      continue;
    }

    try {
      // Extract content
      const content = extractContent(htmlPath);

      // Generate page.tsx
      const pageTsx = generatePageTsx(slug, content);

      // Create directory and write file
      fs.mkdirSync(appPath, { recursive: true });
      fs.writeFileSync(pageTsxPath, pageTsx);

      console.log(`[OK] ${slug}`);
      converted++;
    } catch (err) {
      console.error(`[ERROR] ${slug}: ${err.message}`);
      errors++;
    }
  }

  console.log('\n===================================');
  console.log(`Converted: ${converted}`);
  console.log(`Skipped: ${skipped}`);
  console.log(`Errors: ${errors}`);
  console.log(`Total: ${pages.length}`);
}

main().catch(console.error);
