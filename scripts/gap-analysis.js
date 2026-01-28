#!/usr/bin/env node
/**
 * Gap Analysis Script
 * ====================
 * Analyzes existing blog/article content against the topical map
 * to identify orphaned content and missing nodes.
 *
 * Usage: node scripts/gap-analysis.js
 * Output: content-gap-report.md
 */

const fs = require('fs');
const path = require('path');

// Configuration
const APP_DIR = path.join(__dirname, '..', 'app');
const TOPICAL_MAP_PATH = path.join(__dirname, '..', 'lib', 'topicalMap.json');
const OUTPUT_PATH = path.join(__dirname, '..', 'content-gap-report.md');

// Directories to exclude from article analysis (not blog content)
const EXCLUDED_DIRS = [
  'commercial',
  'residential',
  'services',
  'locations',
  'about',
  'contact',
  'portfolio',
  'api',
];

// Known hub/service pages (not articles)
const HUB_PATTERNS = [
  /^commercial-construction/,
  /^multi-family-construction/,
  /^disaster-recovery/,
  /^historic-restoration/,
  /^luxury-custom-homes/,
  /^balcony-reconstruction/,
  /^exterior-waterproofing/,
  /^building-consultants/,
  /^insurance-restoration/,
  /^certified-estimates/,
  /^expert-witness/,
];

/**
 * Load and parse the topical map
 */
function loadTopicalMap() {
  const content = fs.readFileSync(TOPICAL_MAP_PATH, 'utf-8');
  return JSON.parse(content);
}

/**
 * Get all article directories from the app folder
 */
function getArticleDirectories() {
  const entries = fs.readdirSync(APP_DIR, { withFileTypes: true });
  const articles = [];

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;

    // Skip excluded directories
    if (EXCLUDED_DIRS.includes(entry.name)) continue;

    // Skip hub/service pages
    if (HUB_PATTERNS.some(pattern => pattern.test(entry.name))) continue;

    // Check if it has a page.tsx (is a valid page)
    const pagePath = path.join(APP_DIR, entry.name, 'page.tsx');
    if (fs.existsSync(pagePath)) {
      articles.push({
        slug: entry.name,
        path: `/${entry.name}/`,
        pagePath: pagePath,
      });
    }
  }

  return articles;
}

/**
 * Extract title from page.tsx if possible
 */
function extractTitleFromPage(pagePath) {
  try {
    const content = fs.readFileSync(pagePath, 'utf-8');

    // Try to find title in metadata
    const titleMatch = content.match(/title:\s*["']([^"']+)["']/);
    if (titleMatch) {
      return titleMatch[1].split('|')[0].trim();
    }

    // Try to find h1 content
    const h1Match = content.match(/<h1[^>]*>([^<]+)<\/h1>/);
    if (h1Match) {
      return h1Match[1].trim();
    }

    return null;
  } catch {
    return null;
  }
}

/**
 * Simple keyword matching score (0-100)
 */
function calculateMatchScore(articleSlug, articleTitle, keywords) {
  const searchText = `${articleSlug} ${articleTitle || ''}`.toLowerCase();
  let matchCount = 0;

  for (const keyword of keywords) {
    const keywordLower = keyword.toLowerCase();
    // Check for exact keyword match
    if (searchText.includes(keywordLower)) {
      matchCount += 2;
    }
    // Check for partial word matches
    const words = keywordLower.split(/\s+/);
    for (const word of words) {
      if (word.length > 3 && searchText.includes(word)) {
        matchCount += 1;
      }
    }
  }

  // Normalize to 0-100 score
  return Math.min(100, (matchCount / keywords.length) * 50);
}

/**
 * Assign articles to silos based on keyword matching
 */
function assignArticlesToSilos(articles, topicalMap) {
  const assignments = {
    commercial: [],
    residential: [],
    orphaned: [],
  };

  for (const article of articles) {
    const title = extractTitleFromPage(article.pagePath);
    article.title = title || article.slug.replace(/-/g, ' ');

    // Calculate match scores for each silo
    let commercialScore = 0;
    let residentialScore = 0;
    let bestCommercialCluster = null;
    let bestResidentialCluster = null;

    // Check commercial clusters
    for (const cluster of topicalMap.silos.commercial.clusters) {
      const score = calculateMatchScore(article.slug, article.title, cluster.keywords);
      if (score > commercialScore) {
        commercialScore = score;
        bestCommercialCluster = cluster.name;
      }
    }

    // Check residential clusters
    for (const cluster of topicalMap.silos.residential.clusters) {
      const score = calculateMatchScore(article.slug, article.title, cluster.keywords);
      if (score > residentialScore) {
        residentialScore = score;
        bestResidentialCluster = cluster.name;
      }
    }

    // Assign to silo based on scores
    const THRESHOLD = 15; // Minimum score to be considered a match

    if (commercialScore >= THRESHOLD && commercialScore > residentialScore) {
      assignments.commercial.push({
        ...article,
        cluster: bestCommercialCluster,
        score: commercialScore,
      });
    } else if (residentialScore >= THRESHOLD) {
      assignments.residential.push({
        ...article,
        cluster: bestResidentialCluster,
        score: residentialScore,
      });
    } else {
      assignments.orphaned.push({
        ...article,
        commercialScore,
        residentialScore,
      });
    }
  }

  return assignments;
}

/**
 * Find missing required nodes
 */
function findMissingNodes(articles, topicalMap) {
  const allTitles = articles.map(a => (a.title || a.slug).toLowerCase());
  const missing = {
    commercial: [],
    residential: [],
  };

  // Check commercial required nodes
  for (const cluster of topicalMap.silos.commercial.clusters) {
    for (const node of cluster.required_nodes) {
      const nodeLower = node.toLowerCase();
      const found = allTitles.some(title =>
        title.includes(nodeLower) ||
        nodeLower.split(' ').every(word => word.length < 4 || title.includes(word))
      );
      if (!found) {
        missing.commercial.push({
          node,
          cluster: cluster.name,
        });
      }
    }
  }

  // Check residential required nodes
  for (const cluster of topicalMap.silos.residential.clusters) {
    for (const node of cluster.required_nodes) {
      const nodeLower = node.toLowerCase();
      const found = allTitles.some(title =>
        title.includes(nodeLower) ||
        nodeLower.split(' ').every(word => word.length < 4 || title.includes(word))
      );
      if (!found) {
        missing.residential.push({
          node,
          cluster: cluster.name,
        });
      }
    }
  }

  return missing;
}

/**
 * Generate the markdown report
 */
function generateReport(assignments, missingNodes, topicalMap) {
  const lines = [];
  const now = new Date().toISOString().split('T')[0];

  lines.push('# Content Gap Analysis Report');
  lines.push(`Generated: ${now}`);
  lines.push('');
  lines.push('## Summary');
  lines.push('');
  lines.push(`| Category | Count |`);
  lines.push(`| --- | --- |`);
  lines.push(`| Commercial Articles | ${assignments.commercial.length} |`);
  lines.push(`| Residential Articles | ${assignments.residential.length} |`);
  lines.push(`| Orphaned Content | ${assignments.orphaned.length} |`);
  lines.push(`| Missing Commercial Nodes | ${missingNodes.commercial.length} |`);
  lines.push(`| Missing Residential Nodes | ${missingNodes.residential.length} |`);
  lines.push('');

  // Orphaned content section
  lines.push('---');
  lines.push('## Orphaned Content (ACTION: Review for Deletion or Reassignment)');
  lines.push('');
  lines.push('These articles do not match any cluster in the topical map:');
  lines.push('');
  if (assignments.orphaned.length === 0) {
    lines.push('*No orphaned content found.*');
  } else {
    lines.push('| Article | Path | Commercial Score | Residential Score |');
    lines.push('| --- | --- | --- | --- |');
    for (const article of assignments.orphaned) {
      lines.push(`| ${article.title} | ${article.path} | ${article.commercialScore.toFixed(0)} | ${article.residentialScore.toFixed(0)} |`);
    }
  }
  lines.push('');

  // Missing nodes section
  lines.push('---');
  lines.push('## Missing Content Nodes (ACTION: Create)');
  lines.push('');

  lines.push('### Commercial Silo');
  lines.push('');
  if (missingNodes.commercial.length === 0) {
    lines.push('*All required commercial nodes are covered.*');
  } else {
    lines.push('| Missing Node | Cluster | Priority |');
    lines.push('| --- | --- | --- |');
    for (const node of missingNodes.commercial) {
      lines.push(`| ${node.node} | ${node.cluster} | HIGH |`);
    }
  }
  lines.push('');

  lines.push('### Residential Silo');
  lines.push('');
  if (missingNodes.residential.length === 0) {
    lines.push('*All required residential nodes are covered.*');
  } else {
    lines.push('| Missing Node | Cluster | Priority |');
    lines.push('| --- | --- | --- |');
    for (const node of missingNodes.residential) {
      lines.push(`| ${node.node} | ${node.cluster} | HIGH |`);
    }
  }
  lines.push('');

  // Commercial assignments
  lines.push('---');
  lines.push('## Commercial Silo Articles');
  lines.push('');
  if (assignments.commercial.length === 0) {
    lines.push('*No commercial articles found.*');
  } else {
    // Group by cluster
    const byCluster = {};
    for (const article of assignments.commercial) {
      if (!byCluster[article.cluster]) {
        byCluster[article.cluster] = [];
      }
      byCluster[article.cluster].push(article);
    }
    for (const [cluster, articles] of Object.entries(byCluster)) {
      lines.push(`### ${cluster}`);
      lines.push('');
      for (const article of articles) {
        lines.push(`- [${article.title}](${article.path}) (score: ${article.score.toFixed(0)})`);
      }
      lines.push('');
    }
  }

  // Residential assignments
  lines.push('---');
  lines.push('## Residential Silo Articles');
  lines.push('');
  if (assignments.residential.length === 0) {
    lines.push('*No residential articles found.*');
  } else {
    // Group by cluster
    const byCluster = {};
    for (const article of assignments.residential) {
      if (!byCluster[article.cluster]) {
        byCluster[article.cluster] = [];
      }
      byCluster[article.cluster].push(article);
    }
    for (const [cluster, articles] of Object.entries(byCluster)) {
      lines.push(`### ${cluster}`);
      lines.push('');
      for (const article of articles) {
        lines.push(`- [${article.title}](${article.path}) (score: ${article.score.toFixed(0)})`);
      }
      lines.push('');
    }
  }

  return lines.join('\n');
}

/**
 * Main execution
 */
function main() {
  console.log('🔍 Running Gap Analysis...\n');

  // Load topical map
  console.log('Loading topical map...');
  const topicalMap = loadTopicalMap();
  console.log(`  - Commercial clusters: ${topicalMap.silos.commercial.clusters.length}`);
  console.log(`  - Residential clusters: ${topicalMap.silos.residential.clusters.length}`);

  // Get articles
  console.log('\nScanning articles...');
  const articles = getArticleDirectories();
  console.log(`  - Found ${articles.length} article pages`);

  // Assign to silos
  console.log('\nAssigning articles to silos...');
  const assignments = assignArticlesToSilos(articles, topicalMap);
  console.log(`  - Commercial: ${assignments.commercial.length}`);
  console.log(`  - Residential: ${assignments.residential.length}`);
  console.log(`  - Orphaned: ${assignments.orphaned.length}`);

  // Find missing nodes
  console.log('\nChecking for missing required nodes...');
  const missingNodes = findMissingNodes(articles, topicalMap);
  console.log(`  - Missing commercial nodes: ${missingNodes.commercial.length}`);
  console.log(`  - Missing residential nodes: ${missingNodes.residential.length}`);

  // Generate report
  console.log('\nGenerating report...');
  const report = generateReport(assignments, missingNodes, topicalMap);
  fs.writeFileSync(OUTPUT_PATH, report);
  console.log(`  - Report saved to: ${OUTPUT_PATH}`);

  console.log('\n✅ Gap analysis complete!');
}

main();
