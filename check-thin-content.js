#!/usr/bin/env node
// Script to check FCS pages for thin content
// Run: node check-thin-content.js > thin-content-report.txt

const https = require('https');
const fs = require('fs');

const baseUrl = 'https://floridaconstructionspecialists.com';

// Read page list
const pages = fs.readFileSync('/tmp/fcs-pages-to-check.txt', 'utf8')
  .trim()
  .split('\n')
  .filter(p => p.length > 0);

async function checkPage(slug) {
  return new Promise((resolve) => {
    const url = `${baseUrl}/${slug}/`;
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        // Check for the thin content pattern
        const isThin = data.includes('Managing commercial construction delays is crucial for successfully completing a project') &&
                       data.includes('When hiring a commercial contractor in Tampa, it is important to consider several key factors');
        
        // Rough content length check (exclude HTML)
        const textOnly = data.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ');
        const length = textOnly.length;
        
        resolve({ slug, isThin, length, statusCode: res.statusCode });
      });
    }).on('error', (err) => {
      resolve({ slug, error: err.message });
    });
  });
}

async function main() {
  console.log('Checking FCS pages for thin content...\n');
  
  const thinPages = [];
  const goodPages = [];
  
  for (let i = 0; i < pages.length; i++) {
    const result = await checkPage(pages[i]);
    
    if (result.isThin) {
      thinPages.push(result.slug);
      console.log(`[THIN] ${result.slug}`);
    } else if (result.error) {
      console.log(`[ERROR] ${result.slug}: ${result.error}`);
    } else {
      goodPages.push(result.slug);
      console.log(`[OK] ${result.slug} (${result.length} chars)`);
    }
    
    // Small delay to avoid rate limiting
    await new Promise(r => setTimeout(r, 100));
  }
  
  console.log('\n=== SUMMARY ===');
  console.log(`Total pages checked: ${pages.length}`);
  console.log(`Thin content pages: ${thinPages.length}`);
  console.log(`Good pages: ${goodPages.length}`);
  
  console.log('\n=== THIN PAGES LIST ===');
  thinPages.forEach(p => console.log(p));
}

main();
