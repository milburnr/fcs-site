import puppeteer from 'puppeteer';

const BASE = 'https://floridaconstructionspecialists.com';
const pages = [
  '/insurance/water-restoration/',
  '/insurance/',
  '/disaster-recovery/',
  '/luxury-custom-homes/',
  '/residential/',
  '/historic-restoration/',
  '/exterior-waterproofing/',
  '/services/',
  '/commercial/',
  '/balcony-reconstruction/',
];

const browser = await puppeteer.launch({ headless: true });

for (const path of pages) {
  const page = await browser.newPage();
  const failedRequests = [];

  page.on('requestfailed', (req) => {
    if (req.resourceType() === 'image') {
      failedRequests.push({ url: req.url(), error: req.failure()?.errorText });
    }
  });

  page.on('response', (res) => {
    if (res.request().resourceType() === 'image' && res.status() >= 400) {
      failedRequests.push({ url: res.url(), status: res.status() });
    }
  });

  await page.goto(`${BASE}${path}`, { waitUntil: 'networkidle2', timeout: 30000 });

  const imgResults = await page.evaluate(() => {
    const imgs = Array.from(document.querySelectorAll('img'));
    return imgs.map(img => ({
      src: img.src,
      naturalWidth: img.naturalWidth,
      complete: img.complete,
      alt: img.alt,
    }));
  });

  // Also check CSS background images
  const bgImages = await page.evaluate(() => {
    const elements = Array.from(document.querySelectorAll('*'));
    const bgs = [];
    for (const el of elements) {
      const style = window.getComputedStyle(el);
      const bg = style.backgroundImage;
      if (bg && bg !== 'none' && bg.includes('url(')) {
        const match = bg.match(/url\(["']?([^"')]+)["']?\)/);
        if (match) bgs.push(match[1]);
      }
    }
    return bgs;
  });

  const broken = imgResults.filter(img => img.complete && img.naturalWidth === 0);

  if (broken.length > 0 || failedRequests.length > 0) {
    console.log(`\n❌ ${path}`);
    broken.forEach(img => console.log(`  broken img: ${img.src}`));
    failedRequests.forEach(img => console.log(`  failed: ${img.url} (${img.error || img.status})`));
  } else {
    console.log(`✓ ${path} — ${imgResults.length} imgs OK`);
  }

  if (bgImages.length > 0) {
    // Check bg images via fetch
    for (const url of bgImages) {
      if (url.startsWith('data:')) continue;
      try {
        const resp = await page.evaluate(async (u) => {
          const r = await fetch(u, { method: 'HEAD' });
          return { status: r.status, ok: r.ok };
        }, url);
        if (!resp.ok) {
          console.log(`  broken bg: ${url} (${resp.status})`);
        }
      } catch (e) {
        console.log(`  broken bg: ${url} (fetch failed)`);
      }
    }
  }

  await page.close();
}

await browser.close();
