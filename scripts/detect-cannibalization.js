#!/usr/bin/env node
/**
 * detect-cannibalization.js
 *
 * Reads keyword-map.json, finds duplicate primary keywords across pages,
 * resolves conflicts by page type priority and word count, and reassigns
 * losers to long-tail keyword variants.
 *
 * Output: seo/cannibalization-report.json + updated keyword-map.json
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const KEYWORD_MAP_PATH = path.join(ROOT, 'seo/keyword-map.json');
const WORD_COUNT_PATH = path.join(ROOT, 'seo/word-count-audit.json');
const REPORT_PATH = path.join(ROOT, 'seo/cannibalization-report.json');

// Load data
const keywordMap = JSON.parse(fs.readFileSync(KEYWORD_MAP_PATH, 'utf8'));
const wordCountAudit = JSON.parse(fs.readFileSync(WORD_COUNT_PATH, 'utf8'));

// Build word count lookup
const wordCounts = new Map();
for (const page of wordCountAudit.pages) {
  wordCounts.set(page.url, page.wordCount);
}

// Page type priority (lower = higher priority)
const TYPE_PRIORITY = {
  'service-location': 0,
  'hub': 1,
  'location': 2,
  'article': 3
};

/**
 * Normalize a keyword for comparison
 */
function normalizeKeyword(kw) {
  return kw
    .toLowerCase()
    .replace(/[&]/g, 'and')
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Generate a reassigned long-tail keyword variant for a loser page
 */
function generateReassignment(originalKeyword, loserPage, winnerPage) {
  const kw = originalKeyword.toLowerCase();
  const loserType = loserPage.page_type;
  const loserUrl = loserPage.url;
  const slug = loserUrl.replace(/^\/|\/$/g, '');

  // Strategy based on page type
  if (loserType === 'article') {
    // Try to make it more specific based on the article's URL/title
    const slugWords = slug.replace(/-/g, ' ').split(' ');

    // Look for differentiating words in the slug that aren't in the keyword
    const kwWords = new Set(kw.split(' '));
    const uniqueWords = slugWords.filter(w =>
      !kwWords.has(w) &&
      !['in', 'for', 'and', 'the', 'a', 'an', 'of', 'to', 'with', 'your', 'our'].includes(w) &&
      w.length > 2
    );

    if (uniqueWords.length > 0) {
      // Add the most relevant unique word as a qualifier
      return `${kw} ${uniqueWords[0]}`;
    }

    // Fallback: add "guide" prefix
    if (!kw.includes('guide')) {
      return `${kw} guide`;
    }
    return `${kw} overview`;
  }

  if (loserType === 'hub') {
    if (!kw.includes('services')) {
      return `${kw} services`;
    }
    return `${kw} overview`;
  }

  if (loserType === 'location') {
    if (!kw.includes('contractor')) {
      return `${kw} contractor`;
    }
    return `${kw} services`;
  }

  // service-location losing to another service-location (rare)
  return `${kw} specialist`;
}

/**
 * Determine winner among competing pages
 */
function determineWinner(pages) {
  // Sort by: type priority (ascending), then word count (descending), then URL length (ascending)
  const sorted = [...pages].sort((a, b) => {
    const typePriA = TYPE_PRIORITY[a.page_type] ?? 99;
    const typePriB = TYPE_PRIORITY[b.page_type] ?? 99;
    if (typePriA !== typePriB) return typePriA - typePriB;

    const wcA = wordCounts.get(a.url) || a.wordCount || 0;
    const wcB = wordCounts.get(b.url) || b.wordCount || 0;
    if (wcA !== wcB) return wcB - wcA; // Higher word count wins

    return a.url.length - b.url.length; // Shorter URL wins
  });

  return sorted[0];
}

// Group pages by normalized primary keyword
const keywordGroups = new Map();
for (const page of keywordMap.pages) {
  const normalized = normalizeKeyword(page.primary_keyword);
  if (!keywordGroups.has(normalized)) {
    keywordGroups.set(normalized, []);
  }
  keywordGroups.get(normalized).push(page);
}

// Find conflicts (2+ pages sharing same normalized keyword)
const conflicts = [];
const reassignments = new Map(); // url -> new keyword

for (const [normalizedKw, pages] of keywordGroups) {
  if (pages.length < 2) continue;

  const winner = determineWinner(pages);
  const losers = pages.filter(p => p.url !== winner.url);

  const conflict = {
    keyword: normalizedKw,
    pages: pages.map(p => ({
      url: p.url,
      type: p.page_type,
      wordCount: wordCounts.get(p.url) || p.wordCount || 0,
      original_keyword: p.primary_keyword
    })),
    winner: winner.url,
    resolutions: []
  };

  for (const loser of losers) {
    const newKeyword = generateReassignment(normalizedKw, loser, winner);

    // Check if reassigned keyword also conflicts -- if so, make it more specific
    let finalKeyword = newKeyword;
    let attempts = 0;
    while (reassignments.has(finalKeyword) && attempts < 3) {
      finalKeyword = `${finalKeyword} ${loser.page_type}`;
      attempts++;
    }

    const resolution = {
      url: loser.url,
      action: 'reassign',
      new_keyword: finalKeyword,
      reason: `${winner.page_type} page ${winner.url} has higher priority for "${normalizedKw}"`
    };

    // Check if pages are very similar (same type, similar word count) -> suggest merge
    const winnerWc = wordCounts.get(winner.url) || winner.wordCount || 0;
    const loserWc = wordCounts.get(loser.url) || loser.wordCount || 0;
    if (loser.page_type === winner.page_type && Math.abs(winnerWc - loserWc) < 100) {
      resolution.action = 'merge';
      resolution.reason = `Similar page type and content length -- consider merging into ${winner.url}`;
      resolution.new_keyword = finalKeyword; // Still reassign in case merge doesn't happen
    }

    conflict.resolutions.push(resolution);
    reassignments.set(loser.url, finalKeyword);
  }

  conflicts.push(conflict);
}

// Apply reassignments to keyword map
for (const page of keywordMap.pages) {
  if (reassignments.has(page.url)) {
    page.primary_keyword = reassignments.get(page.url);
    page.source = page.source === 'existing' ? 'existing-reassigned' : 'derived-reassigned';
  }
}

// Build summary
const summary = {
  total_conflicts: conflicts.length,
  total_pages_affected: conflicts.reduce((sum, c) => sum + c.pages.length, 0),
  resolved_keep: conflicts.length, // each conflict has exactly one winner
  resolved_reassign: conflicts.reduce((sum, c) => sum + c.resolutions.filter(r => r.action === 'reassign').length, 0),
  resolved_merge: conflicts.reduce((sum, c) => sum + c.resolutions.filter(r => r.action === 'merge').length, 0)
};

// Write cannibalization report
const report = {
  generated: new Date().toISOString().split('T')[0],
  summary,
  conflicts
};

fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, 2) + '\n');

// Write updated keyword map
fs.writeFileSync(KEYWORD_MAP_PATH, JSON.stringify(keywordMap, null, 2) + '\n');

// Report
console.log('=== Cannibalization Detection Complete ===');
console.log(`Total conflicts found: ${summary.total_conflicts}`);
console.log(`Total pages affected: ${summary.total_pages_affected}`);
console.log(`  Winners (kept): ${summary.resolved_keep}`);
console.log(`  Reassigned: ${summary.resolved_reassign}`);
console.log(`  Suggested merge: ${summary.resolved_merge}`);

// Verify no duplicates remain
const finalKeywords = keywordMap.pages.map(p => normalizeKeyword(p.primary_keyword));
const dupes = {};
for (const kw of finalKeywords) {
  dupes[kw] = (dupes[kw] || 0) + 1;
}
const remainingDupes = Object.entries(dupes).filter(([_, count]) => count > 1);
if (remainingDupes.length > 0) {
  console.log(`\nWARNING: ${remainingDupes.length} duplicate keywords remain:`);
  for (const [kw, count] of remainingDupes) {
    console.log(`  "${kw}" (${count} pages)`);
    const matching = keywordMap.pages.filter(p => normalizeKeyword(p.primary_keyword) === kw);
    for (const m of matching) {
      console.log(`    - ${m.url} (${m.page_type})`);
    }
  }
} else {
  console.log('\nVerification: ZERO duplicate primary keywords. All conflicts resolved.');
}

console.log('\nFiles written:');
console.log(`  ${REPORT_PATH}`);
console.log(`  ${KEYWORD_MAP_PATH}`);
