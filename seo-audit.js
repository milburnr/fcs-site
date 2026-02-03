const fs = require('fs');
const path = require('path');

const OUT_DIR = '/Volumes/External-2TB/projects/service-site-builder/sites/fcs-final/out';

// Collect all HTML files
function getAllHtmlFiles(dir, files = []) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      getAllHtmlFiles(fullPath, files);
    } else if (item.endsWith('.html')) {
      files.push(fullPath);
    }
  }
  return files;
}

// Extract text content (strip HTML)
function stripHtml(html) {
  return html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

// Count words
function countWords(text) {
  return text.split(/\s+/).filter(w => w.length > 0).length;
}

// Extract element content
function extractElement(html, tag) {
  const regex = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i');
  const match = html.match(regex);
  return match ? match[1].trim() : null;
}

// Extract attribute value
function extractAttr(html, tag, attr) {
  const regex = new RegExp(`<${tag}[^>]*${attr}=["']([^"']+)["'][^>]*>`, 'i');
  const match = html.match(regex);
  return match ? match[1] : null;
}

// Extract all internal links
function extractInternalLinks(html, pageUrl) {
  const links = [];
  const regex = /href=["']([^"'#]+)["']/gi;
  let match;
  while ((match = regex.exec(html)) !== null) {
    const href = match[1];
    // Skip external, mailto, tel, etc.
    if (href.startsWith('http') && !href.includes('floridaconstructionspecialists')) continue;
    if (href.startsWith('mailto:') || href.startsWith('tel:')) continue;
    if (href.startsWith('javascript:')) continue;
    if (href.startsWith('/') || href.startsWith('./') || href.startsWith('../') || !href.includes(':')) {
      links.push(href);
    }
  }
  return [...new Set(links)];
}

// Check for schema types
function extractSchemaTypes(html) {
  const schemas = [];
  
  // JSON-LD schemas
  const jsonLdRegex = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let match;
  while ((match = jsonLdRegex.exec(html)) !== null) {
    try {
      const data = JSON.parse(match[1]);
      if (data['@type']) {
        schemas.push(data['@type']);
      }
      if (data['@graph']) {
        for (const item of data['@graph']) {
          if (item['@type']) schemas.push(item['@type']);
        }
      }
    } catch (e) {}
  }
  
  // Microdata
  if (html.includes('itemtype="http://schema.org/LocalBusiness"')) schemas.push('LocalBusiness');
  if (html.includes('itemtype="http://schema.org/Service"')) schemas.push('Service');
  if (html.includes('itemtype="http://schema.org/FAQPage"')) schemas.push('FAQPage');
  
  return [...new Set(schemas)];
}

// Check for FAQs
function hasFaqContent(html) {
  const faqPatterns = [
    /frequently asked questions/i,
    /FAQ/,
    /<h[23][^>]*>.*?(?:question|Q:|Q\d)/i,
    /itemtype=".*FAQPage"/i,
    /"@type"\s*:\s*"FAQPage"/i
  ];
  return faqPatterns.some(p => p.test(html));
}

// Check for GBP links
function hasGbpLink(html) {
  const gbpPatterns = [
    /google\.com\/maps/i,
    /maps\.google\.com/i,
    /g\.page/i,
    /business\.google\.com/i,
    /goo\.gl\/maps/i,
    /Google Business/i,
    /review.*google/i
  ];
  return gbpPatterns.some(p => p.test(html));
}

// Analyze a page
function analyzePage(filePath) {
  const html = fs.readFileSync(filePath, 'utf8');
  const relPath = filePath.replace(OUT_DIR, '').replace('/index.html', '/');
  
  // Title
  const title = extractElement(html, 'title') || '';
  
  // H1
  const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const h1 = h1Match ? stripHtml(h1Match[1]) : '';
  
  // Meta description
  const metaDesc = extractAttr(html, 'meta[^>]*name=["\'](description|Description)["\']', 'content') ||
                   extractAttr(html, 'meta', 'name=["\'](description)["\'].*content') || '';
  
  // Better meta description extraction
  const metaMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i) ||
                    html.match(/<meta[^>]*content=["']([^"']+)["'][^>]*name=["']description["']/i);
  const metaDescription = metaMatch ? metaMatch[1] : '';
  
  // Main content word count
  const mainContent = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i) ||
                      html.match(/<article[^>]*>([\s\S]*?)<\/article>/i) ||
                      html.match(/<div[^>]*class="[^"]*content[^"]*"[^>]*>([\s\S]*?)<\/div>/i);
  const contentText = mainContent ? stripHtml(mainContent[1]) : stripHtml(html);
  const wordCount = countWords(contentText);
  
  // Internal links
  const internalLinks = extractInternalLinks(html, relPath);
  
  // Schema types
  const schemas = extractSchemaTypes(html);
  
  // FAQ content
  const hasFaq = hasFaqContent(html);
  
  // GBP links
  const hasGbp = hasGbpLink(html);
  
  return {
    path: relPath,
    filePath,
    title,
    titleLength: title.length,
    h1,
    metaDescription,
    metaDescLength: metaDescription.length,
    wordCount,
    internalLinks,
    linkCount: internalLinks.length,
    schemas,
    hasFaq,
    hasGbp,
    hasGeoKeyword: /tampa|florida|fl|clearwater|st\.?\s*petersburg|sarasota|bradenton|lakeland|brandon|ruskin/i.test(title),
    hasBrandName: /florida construction specialists|fcs/i.test(title)
  };
}

// Main
const htmlFiles = getAllHtmlFiles(OUT_DIR);
console.log(`Found ${htmlFiles.length} HTML files\n`);

const results = [];
const linkMap = {}; // Track which pages link to which
const linkedToCount = {}; // Count inbound links per page

for (const file of htmlFiles) {
  const analysis = analyzePage(file);
  results.push(analysis);
  
  // Initialize linked count
  linkedToCount[analysis.path] = 0;
}

// Build link graph
for (const page of results) {
  for (const link of page.internalLinks) {
    // Normalize link
    let normalized = link;
    if (!normalized.startsWith('/')) {
      normalized = path.join(page.path, '..', link);
    }
    if (!normalized.endsWith('/')) normalized += '/';
    
    if (linkedToCount[normalized] !== undefined) {
      linkedToCount[normalized]++;
    }
  }
}

// Output results as JSON
const output = {
  totalPages: results.length,
  pages: results,
  linkStats: linkedToCount
};

fs.writeFileSync('/Volumes/External-2TB/projects/service-site-builder/sites/fcs-final/seo-audit-results.json', JSON.stringify(output, null, 2));
console.log('Results written to seo-audit-results.json');

// Summary stats
const thinContent = results.filter(p => p.wordCount < 300);
const noMetaDesc = results.filter(p => !p.metaDescription || p.metaDescription.length < 50);
const noH1 = results.filter(p => !p.h1);
const noGeoKeyword = results.filter(p => !p.hasGeoKeyword);
const orphanPages = Object.entries(linkedToCount).filter(([k, v]) => v === 0).map(([k]) => k);
const noOutboundLinks = results.filter(p => p.linkCount < 2);
const noSchema = results.filter(p => p.schemas.length === 0);

console.log('\n=== SUMMARY ===');
console.log(`Total pages: ${results.length}`);
console.log(`Thin content (<300 words): ${thinContent.length}`);
console.log(`Missing/short meta descriptions: ${noMetaDesc.length}`);
console.log(`Missing H1: ${noH1.length}`);
console.log(`No geo keyword in title: ${noGeoKeyword.length}`);
console.log(`Orphan pages (no inbound links): ${orphanPages.length}`);
console.log(`Pages with <2 outbound links: ${noOutboundLinks.length}`);
console.log(`Pages without schema: ${noSchema.length}`);
