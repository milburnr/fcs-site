const fs = require('fs');
const path = require('path');

// Check if googleapis is installed
let google;
try {
  google = require('googleapis').google;
} catch (error) {
  console.error('❌ Error: googleapis package is not installed');
  console.error('\nPlease run: npm install googleapis');
  process.exit(1);
}

/**
 * FCS Non-Indexed URL Submitter
 * Reads sitemap, checks indexing status via site: search, submits only non-indexed URLs
 *
 * Usage:
 *   node submit-non-indexed.js                 # Check & submit
 *   node submit-non-indexed.js --dry-run       # Preview without submitting
 *   node submit-non-indexed.js --batch-size=50 # Submit first 50 non-indexed
 */

const SITE_URL = 'https://floridaconstructionspecialists.com';
const SERVICE_ACCOUNT_KEY_PATH = path.join(__dirname, '..', 'fcs-index-1.json');
const SITEMAP_PATH = path.join(__dirname, 'public', 'sitemap.xml');
const BATCH_SIZE = parseInt(process.argv.find(arg => arg.startsWith('--batch-size='))?.split('=')[1]) || 200;
const DRY_RUN = process.argv.includes('--dry-run');
const DELAY_BETWEEN_REQUESTS = 100; // ms between API calls
const DELAY_BETWEEN_CHECKS = 500; // ms between indexing checks

const stats = {
  totalUrls: 0,
  indexed: 0,
  notIndexed: 0,
  submitted: 0,
  failed: 0,
  quotaHit: false,
  errors: []
};

/**
 * Parse sitemap.xml and extract URLs
 */
function parseSitemap() {
  if (!fs.existsSync(SITEMAP_PATH)) {
    throw new Error(`Sitemap not found at: ${SITEMAP_PATH}`);
  }

  const xml = fs.readFileSync(SITEMAP_PATH, 'utf8');
  const urlMatches = xml.match(/<loc>(.*?)<\/loc>/g);
  
  if (!urlMatches) {
    throw new Error('No URLs found in sitemap');
  }

  return urlMatches.map(match => match.replace(/<\/?loc>/g, ''));
}

/**
 * Check if URL is indexed using Brave Search site: query
 * Returns true if indexed, false if not
 */
async function checkIndexStatus(url) {
  try {
    // Extract path from URL for site: search
    const urlObj = new URL(url);
    const path = urlObj.pathname;
    
    // Use site: operator to check specific page
    const searchQuery = `site:${urlObj.hostname}${path}`;
    
    // Use fetch to check Brave Search (free, no API key needed)
    const searchUrl = `https://search.brave.com/search?q=${encodeURIComponent(searchQuery)}`;
    const response = await fetch(searchUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
      }
    });
    
    const html = await response.text();
    
    // If the exact URL appears in results, it's indexed
    const isIndexed = html.includes(url) && !html.includes('No results found');
    
    return isIndexed;
  } catch (error) {
    console.error(`⚠️  Could not check ${url}: ${error.message}`);
    // If check fails, assume not indexed (safer to resubmit)
    return false;
  }
}

/**
 * Initialize Google Indexing API client
 */
async function getIndexingClient() {
  if (!fs.existsSync(SERVICE_ACCOUNT_KEY_PATH)) {
    throw new Error(`Service account key not found at: ${SERVICE_ACCOUNT_KEY_PATH}`);
  }

  const auth = new google.auth.GoogleAuth({
    keyFile: SERVICE_ACCOUNT_KEY_PATH,
    scopes: ['https://www.googleapis.com/auth/indexing'],
  });

  const authClient = await auth.getClient();
  return google.indexing({ version: 'v3', auth: authClient });
}

/**
 * Submit URL to Google Indexing API
 */
async function submitUrl(indexing, url) {
  try {
    if (DRY_RUN) {
      console.log(`  ✓ Would submit: ${url}`);
      stats.submitted++;
      return { success: true };
    }

    await indexing.urlNotifications.publish({
      requestBody: { url: url, type: 'URL_UPDATED' },
    });

    console.log(`  ✓ Submitted: ${url}`);
    stats.submitted++;
    return { success: true };
  } catch (error) {
    if (error.message.includes('quota') || error.message.includes('429')) {
      console.log(`  ⚠️  Daily quota reached at ${stats.submitted} URLs`);
      stats.quotaHit = true;
      return { success: false, quotaHit: true };
    }
    
    console.error(`  ❌ Failed: ${url} - ${error.message}`);
    stats.failed++;
    stats.errors.push({ url, error: error.message });
    return { success: false };
  }
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  console.log('🔍 FCS Non-Indexed URL Submitter\n');
  console.log('='.repeat(70));

  if (DRY_RUN) {
    console.log('🔄 DRY RUN MODE - No URLs will be submitted\n');
  }

  // Parse sitemap
  console.log('📄 Reading sitemap...');
  const allUrls = parseSitemap();
  stats.totalUrls = allUrls.length;
  console.log(`✅ Found ${allUrls.length} URLs in sitemap\n`);

  // Check indexing status for each URL
  console.log('🔎 Checking indexing status...\n');
  const nonIndexedUrls = [];
  
  for (let i = 0; i < allUrls.length; i++) {
    const url = allUrls[i];
    const isIndexed = await checkIndexStatus(url);
    
    if (isIndexed) {
      console.log(`  ✅ Indexed: ${url}`);
      stats.indexed++;
    } else {
      console.log(`  ❌ Not indexed: ${url}`);
      stats.notIndexed++;
      nonIndexedUrls.push(url);
    }
    
    // Rate limit checks
    if (i < allUrls.length - 1) {
      await delay(DELAY_BETWEEN_CHECKS);
    }
    
    // Stop after batch size to avoid long runtime
    if (i >= BATCH_SIZE - 1) {
      console.log(`\n⏸️  Stopped after ${BATCH_SIZE} checks (use --batch-size to adjust)`);
      break;
    }
  }

  console.log('\n' + '='.repeat(70));
  console.log(`📊 Indexing Status: ${stats.indexed} indexed, ${stats.notIndexed} not indexed\n`);

  if (nonIndexedUrls.length === 0) {
    console.log('🎉 All checked URLs are indexed! Nothing to submit.');
    return;
  }

  console.log(`📤 Submitting ${nonIndexedUrls.length} non-indexed URLs...\n`);

  // Initialize API client
  let indexing;
  if (!DRY_RUN) {
    console.log('🔐 Initializing Google Indexing API client...');
    indexing = await getIndexingClient();
    console.log('✅ Connected!\n');
  }

  // Submit non-indexed URLs
  const startTime = Date.now();
  for (let i = 0; i < nonIndexedUrls.length; i++) {
    const result = await submitUrl(indexing, nonIndexedUrls[i]);
    
    if (result.quotaHit) {
      console.log(`\n⏸️  Stopped at ${stats.submitted} submissions due to quota limit`);
      break;
    }
    
    if (i < nonIndexedUrls.length - 1) {
      await delay(DELAY_BETWEEN_REQUESTS);
    }
  }
  const duration = ((Date.now() - startTime) / 1000).toFixed(2);

  // Summary
  console.log('\n' + '='.repeat(70));
  console.log('📊 FINAL SUMMARY');
  console.log('='.repeat(70));
  console.log(`Total URLs checked: ${stats.totalUrls > BATCH_SIZE ? BATCH_SIZE : stats.totalUrls}`);
  console.log(`Already indexed: ${stats.indexed}`);
  console.log(`Not indexed: ${stats.notIndexed}`);
  console.log(`Submitted: ${stats.submitted}`);
  console.log(`Failed: ${stats.failed}`);
  if (stats.quotaHit) {
    console.log(`⚠️  Daily quota reached`);
  }
  console.log(`Duration: ${duration}s`);

  if (stats.errors.length > 0) {
    console.log('\n❌ Errors:');
    stats.errors.forEach(({ url, error }) => {
      console.log(`  - ${url}: ${error}`);
    });
  }

  if (DRY_RUN) {
    console.log('\n💡 Run without --dry-run to actually submit URLs');
  } else {
    console.log('\n✅ Done! Check Google Search Console in 24-48 hours');
  }
}

main().catch(error => {
  console.error('\n💥 Fatal error:', error);
  process.exit(1);
});
