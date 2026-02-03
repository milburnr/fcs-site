const fs = require('fs');
const path = require('path');

const pagesFile = '/tmp/faq-pages-to-update.txt';
const pages = fs.readFileSync(pagesFile, 'utf-8').trim().split('\n');

let processed = 0;
let skipped = 0;
let errors = [];

function cleanText(text) {
  return text
    .replace(/<[^>]+>/g, '')
    .replace(/\{[^}]+\}/g, '')
    .replace(/\s+/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&mdash;/g, '—')
    .replace(/&ndash;/g, '–')
    .trim();
}

function extractFAQs(content) {
  const faqs = [];
  
  // Find FAQ section
  const faqSectionStart = content.search(/Frequently Asked Questions|Common Questions About/i);
  if (faqSectionStart === -1) return faqs;
  
  const afterFaq = content.substring(faqSectionStart);
  const sectionEndMatch = afterFaq.match(/<\/section>/);
  const faqSection = sectionEndMatch 
    ? afterFaq.substring(0, sectionEndMatch.index) 
    : afterFaq.substring(0, 8000);
  
  // Pattern 1: <div><h4>Q</h4><p>A</p></div>
  const pattern1 = /<div>\s*<h4[^>]*>([^<]+)<\/h4>\s*<p[^>]*>([^<]+)<\/p>\s*<\/div>/gi;
  
  // Pattern 2: <div className="..."><h3 className="...">Q</h3><p className="...">A</p></div>
  const pattern2 = /<div\s+className="[^"]*">\s*<h3[^>]*>\s*([^<]+)\s*<\/h3>\s*<p[^>]*>\s*([^<]+)\s*<\/p>\s*<\/div>/gi;
  
  // Pattern 3: <div><h3>Q</h3><p>A</p></div> (simpler)
  const pattern3 = /<div>\s*<h3[^>]*>([^<]+)<\/h3>\s*<p[^>]*>([^<]+)<\/p>\s*<\/div>/gi;
  
  // Pattern 4: FAQ with bg-gray-50 wrapper (most common on FCS)
  const pattern4 = /<div\s+className="bg-gray-50[^"]*">\s*<h3[^>]*>\s*([^<]+)\s*<\/h3>\s*<p[^>]*>\s*([^<]+)\s*<\/p>\s*<\/div>/gi;
  
  let match;
  
  // Try pattern 4 first (most common for these pages)
  while ((match = pattern4.exec(faqSection)) !== null) {
    const question = cleanText(match[1]);
    const answer = cleanText(match[2]);
    if (question.length >= 10 && answer.length >= 30) {
      faqs.push({ question, answer });
    }
  }
  
  // If no FAQs, try pattern 1
  if (faqs.length === 0) {
    while ((match = pattern1.exec(faqSection)) !== null) {
      const question = cleanText(match[1]);
      const answer = cleanText(match[2]);
      if (question.length >= 10 && answer.length >= 30) {
        faqs.push({ question, answer });
      }
    }
  }
  
  // Try pattern 2
  if (faqs.length === 0) {
    while ((match = pattern2.exec(faqSection)) !== null) {
      const question = cleanText(match[1]);
      const answer = cleanText(match[2]);
      if (question.length >= 10 && answer.length >= 30 && 
          !question.toLowerCase().includes('frequently asked')) {
        faqs.push({ question, answer });
      }
    }
  }
  
  // Try pattern 3
  if (faqs.length === 0) {
    while ((match = pattern3.exec(faqSection)) !== null) {
      const question = cleanText(match[1]);
      const answer = cleanText(match[2]);
      if (question.length >= 10 && answer.length >= 30 &&
          !question.toLowerCase().includes('frequently asked')) {
        faqs.push({ question, answer });
      }
    }
  }
  
  return faqs;
}

function addFAQSchema(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Check if already has FAQSchema
  if (content.includes('FAQSchema faqs=') || content.includes('<FAQSchema faqs={')) {
    return { status: 'skipped', reason: 'already has FAQSchema' };
  }
  
  // Extract FAQs
  const faqs = extractFAQs(content);
  
  if (faqs.length === 0) {
    return { status: 'skipped', reason: 'no FAQs found' };
  }
  
  // Add FAQSchema to import
  if (content.includes('from "@/components/Schema"')) {
    content = content.replace(
      /import\s*{([^}]+)}\s*from\s*"@\/components\/Schema"/,
      (match, imports) => {
        if (imports.includes('FAQSchema')) return match;
        const importList = imports.split(',').map(s => s.trim());
        importList.push('FAQSchema');
        return `import { ${importList.join(', ')} } from "@/components/Schema"`;
      }
    );
  } else {
    // Add new import line
    if (content.includes('from "@/lib/constants"')) {
      content = content.replace(
        /(import[^;]+from\s*"@\/lib\/constants"[^;]*;)/,
        '$1\nimport { FAQSchema } from "@/components/Schema";'
      );
    } else {
      content = content.replace(
        /(import[^;]+;)/,
        '$1\nimport { FAQSchema } from "@/components/Schema";'
      );
    }
  }
  
  // Create FAQs array string
  const faqsArrayStr = `const faqs = [\n${faqs.map(faq => {
    const q = faq.question.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
    const a = faq.answer.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
    return `  {\n    question: "${q}",\n    answer: "${a}"\n  }`;
  }).join(',\n')}\n];`;
  
  // Insert before export default function
  content = content.replace(
    /export default function/,
    faqsArrayStr + '\n\nexport default function'
  );
  
  // Add FAQSchema component after other schemas
  const schemaPatterns = [
    /(<BreadcrumbSchema[^\/]*\/>)/,
    /(<LocalBusinessSchema[^\/]*\/>)/,
    /(<ServiceSchema[^\/]*\/>)/,
    /(<ArticleSchema[^\/]*\/>)/,
  ];
  
  let schemaAdded = false;
  for (const pattern of schemaPatterns) {
    if (content.match(pattern) && !schemaAdded) {
      content = content.replace(pattern, '$1\n      <FAQSchema faqs={faqs} />');
      schemaAdded = true;
      break;
    }
  }
  
  if (!schemaAdded) {
    content = content.replace(
      /return\s*\(\s*<>/,
      'return (\n    <>\n      <FAQSchema faqs={faqs} />'
    );
  }
  
  fs.writeFileSync(filePath, content);
  return { status: 'success', faqCount: faqs.length };
}

// Process pages
console.log(`Processing ${pages.length} pages...`);

for (const page of pages) {
  const fullPath = path.join('/Volumes/External-2TB/projects/service-site-builder/sites/fcs-final', page);
  
  if (!fs.existsSync(fullPath)) {
    console.log(`- ${page} - file not found`);
    skipped++;
    continue;
  }
  
  try {
    const result = addFAQSchema(fullPath);
    if (result.status === 'success') {
      processed++;
      console.log(`✓ ${page} - ${result.faqCount} FAQs`);
    } else {
      skipped++;
      console.log(`- ${page} - ${result.reason}`);
    }
  } catch (err) {
    errors.push({ page, error: err.message });
    console.log(`✗ ${page} - ERROR: ${err.message}`);
  }
}

console.log(`\nSummary:`);
console.log(`  Processed: ${processed}`);
console.log(`  Skipped: ${skipped}`);
console.log(`  Errors: ${errors.length}`);

if (errors.length > 0) {
  console.log('\nErrors:');
  errors.forEach(e => console.log(`  ${e.page}: ${e.error}`));
}
