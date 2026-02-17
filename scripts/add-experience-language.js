/**
 * add-experience-language.js
 *
 * Scans all guide articles across commercial, insurance, and residential silos.
 * Audits each for existing experience language.
 * For articles missing it, appends a silo-appropriate experience sentence
 * to the first content paragraph (after the hero section).
 * Also fixes "1983" -> "1982" standardization.
 */

const fs = require('fs');
const path = require('path');

const APP_DIR = path.join(__dirname, '..', 'app');

// Experience language detection patterns (case-insensitive)
const EXPERIENCE_PATTERNS = [
  /since 1982/i,
  /since 1983/i,
  /40\+ years/i,
  /four decades/i,
  /over 40 years/i,
  /40 years/i,
  /in-house engineer/i,
  /in-house engineering/i,
  /300\+ project/i,
  /300 completed/i,
  /hundreds of project/i,
  /CBC license/i,
  /CBC1262722/i,
  /\$500K to \$25M/i,
  /half a million to twenty-five million/i,
  /our team has/i,
  /we have completed/i,
  /our experience/i,
  /in our experience/i,
];

// Silo-specific experience templates
const TEMPLATES = {
  commercial: [
    ' Florida Construction Specialists brings over four decades of commercial construction expertise to every project, backed by CBC license CBC1262722 and an in-house engineering team.',
    ' With more than 300 completed projects since 1982, our CBC-licensed team delivers the structural knowledge and field experience that complex commercial work demands.',
    ' Since 1982, Florida Construction Specialists has managed commercial projects from $500K to $25M+, bringing in-house engineering and decades of Florida building expertise to every engagement.',
  ],
  insurance: [
    ' Florida Construction Specialists has supported property owners through the insurance restoration process since 1982, with in-house engineering and certified Xactimate estimating capabilities.',
    ' With over four decades of experience navigating Florida\'s insurance landscape, our CBC-licensed team provides the documentation and construction expertise that complex claims require.',
    ' Since 1982, Florida Construction Specialists has helped property owners restore damage valued from $500K to $25M+, with the engineering and estimating credentials that carriers and adjusters recognize.',
  ],
  residential: [
    ' Florida Construction Specialists has delivered quality residential construction across Tampa Bay since 1982, with the same CBC-licensed professionalism and in-house engineering that defines our commercial work.',
    ' With over four decades of residential building experience, our team brings structural expertise and attention to detail that homeowners throughout Tampa Bay trust.',
    ' Since 1982, Florida Construction Specialists has combined residential craftsmanship with commercial-grade engineering, backed by CBC license CBC1262722.',
  ],
};

function hasExperienceLanguage(content) {
  return EXPERIENCE_PATTERNS.some(pattern => pattern.test(content));
}

function determineSilo(filePath) {
  if (filePath.includes('/commercial/')) return 'commercial';
  if (filePath.includes('/insurance/')) return 'insurance';
  if (filePath.includes('/residential/')) return 'residential';
  return null;
}

/**
 * Find the first content <p> tag after the hero section.
 * Strategy: Find the SECOND <section (first is hero), then find the first <p> in that section.
 * The paragraph must have real content (>50 chars of text).
 */
function findFirstContentParagraph(content) {
  // Find all section starts
  const sectionPattern = /<section\s/g;
  let sectionMatches = [];
  let match;
  while ((match = sectionPattern.exec(content)) !== null) {
    sectionMatches.push(match.index);
  }

  if (sectionMatches.length < 2) {
    return null; // Can't find content section
  }

  // Start searching from the second section onward
  const searchStart = sectionMatches[1];
  const searchContent = content.substring(searchStart);

  // Find all <p> tags with their content
  const pPattern = /<p\s[^>]*>([\s\S]*?)<\/p>/g;
  let pMatch;
  while ((pMatch = pPattern.exec(searchContent)) !== null) {
    const pContent = pMatch[1];
    // Strip JSX/HTML tags to get text content
    const textContent = pContent.replace(/<[^>]+>/g, '').replace(/\{[^}]+\}/g, '').trim();

    // Skip very short paragraphs (captions, labels, etc.)
    if (textContent.length < 50) continue;

    // Return the absolute position info
    const absoluteStart = searchStart + pMatch.index;
    const closingTagPos = content.indexOf('</p>', absoluteStart + pMatch[0].indexOf('>'));

    if (closingTagPos === -1) continue;

    return {
      start: absoluteStart,
      closingTagPos: closingTagPos,
      text: textContent,
    };
  }

  return null;
}

function processFile(filePath, templateIndex) {
  const silo = determineSilo(filePath);
  if (!silo) return { status: 'error', reason: 'Unknown silo' };

  let content = fs.readFileSync(filePath, 'utf-8');
  let modified = false;
  let yearFixed = false;

  // Fix "1983" -> "1982" (only in context of "since 1983" or founding references)
  if (/1983/.test(content)) {
    // Replace "since 1983" with "since 1982"
    const newContent = content.replace(/since 1983/gi, 'since 1982');
    if (newContent !== content) {
      content = newContent;
      modified = true;
      yearFixed = true;
    }
  }

  // Check for existing experience language
  if (hasExperienceLanguage(content)) {
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf-8');
      return { status: 'already-had', yearFixed: true };
    }
    return { status: 'already-had', yearFixed: false };
  }

  // Need to insert experience language
  const paragraph = findFirstContentParagraph(content);
  if (!paragraph) {
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf-8');
    }
    return { status: 'skipped', reason: 'No suitable paragraph found', yearFixed };
  }

  // Select template (rotate using index)
  const templates = TEMPLATES[silo];
  const template = templates[templateIndex % templates.length];

  // Insert the experience sentence before the closing </p> tag
  const before = content.substring(0, paragraph.closingTagPos);
  const after = content.substring(paragraph.closingTagPos);
  content = before + template + after;
  modified = true;

  fs.writeFileSync(filePath, content, 'utf-8');
  return { status: 'added', template: template.trim(), yearFixed };
}

function getGuideFiles(siloDir) {
  const guidesDir = path.join(APP_DIR, siloDir, 'guides');
  if (!fs.existsSync(guidesDir)) return [];

  const dirs = fs.readdirSync(guidesDir).filter(d => {
    const stat = fs.statSync(path.join(guidesDir, d));
    return stat.isDirectory();
  });

  return dirs.map(d => path.join(guidesDir, d, 'page.tsx')).filter(f => fs.existsSync(f));
}

function main() {
  console.log('Experience Language Insertion Script');
  console.log('====================================\n');

  const silos = ['commercial', 'insurance', 'residential'];
  const results = {
    total: 0,
    alreadyHad: 0,
    added: 0,
    skipped: 0,
    yearFixed: 0,
    errors: 0,
  };

  const skippedFiles = [];

  for (const silo of silos) {
    const files = getGuideFiles(silo);
    console.log(`\n${silo.toUpperCase()} silo: ${files.length} articles`);

    let siloAdded = 0;
    let siloAlreadyHad = 0;
    let siloSkipped = 0;
    let templateIndex = 0;

    for (const file of files) {
      results.total++;
      const result = processFile(file, templateIndex);

      if (result.yearFixed) results.yearFixed++;

      switch (result.status) {
        case 'already-had':
          siloAlreadyHad++;
          results.alreadyHad++;
          break;
        case 'added':
          siloAdded++;
          results.added++;
          templateIndex++; // Only advance template rotation on successful insertions
          break;
        case 'skipped':
          siloSkipped++;
          results.skipped++;
          skippedFiles.push({ file: path.relative(APP_DIR, file), reason: result.reason });
          break;
        case 'error':
          results.errors++;
          console.log(`  ERROR: ${path.relative(APP_DIR, file)} - ${result.reason}`);
          break;
      }
    }

    console.log(`  Already had experience language: ${siloAlreadyHad}`);
    console.log(`  Newly added: ${siloAdded}`);
    if (siloSkipped > 0) console.log(`  Skipped (no suitable paragraph): ${siloSkipped}`);
  }

  console.log('\n====================================');
  console.log('SUMMARY');
  console.log('====================================');
  console.log(`Total articles scanned: ${results.total}`);
  console.log(`Already had experience language: ${results.alreadyHad}`);
  console.log(`Newly added: ${results.added}`);
  console.log(`Skipped: ${results.skipped}`);
  console.log(`Year fixes (1983 -> 1982): ${results.yearFixed}`);
  console.log(`Errors: ${results.errors}`);

  if (skippedFiles.length > 0) {
    console.log('\nSkipped files (manual review needed):');
    for (const { file, reason } of skippedFiles) {
      console.log(`  - ${file}: ${reason}`);
    }
  }

  // Coverage check
  const coverage = results.alreadyHad + results.added;
  console.log(`\nCoverage: ${coverage}/${results.total} articles have experience language (${Math.round(coverage/results.total*100)}%)`);
}

main();
