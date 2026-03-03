#!/usr/bin/env node
/**
 * Fix OG tags for pages that use template literals or non-standard metadata patterns
 */
import fs from 'fs';

const SITE_URL = 'https://floridaconstructionspecialists.com';
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

// Gallery pages - use template literal pattern
const galleryPages = [
  '5th-ave-home', 'bayshore-drive', 'commodores-cove', 'horseshoe-loop-rd',
  'italian-club', 'mvp-orthodontics', 'race-track', 'world-vision'
];

for (const slug of galleryPages) {
  const filePath = `app/gallery/${slug}/page.tsx`;
  let content = fs.readFileSync(filePath, 'utf8');

  if (content.includes('openGraph:')) continue;

  // Insert OG block before the closing }; of metadata
  const ogBlock = `  openGraph: {
    title: \`\${project.name} | Project Gallery\`,
    description: \`View \${project.photoCount} photos of the \${project.name} project by Florida Construction Specialists.\`,
    url: "${SITE_URL}/gallery/${slug}/",
    type: "website",
    siteName: "Florida Construction Specialists",
    images: [{ url: "${OG_IMAGE}", width: 1200, height: 630, alt: "Florida Construction Specialists - Project Gallery" }],
  },`;

  content = content.replace(
    /(export const metadata:\s*Metadata\s*=\s*\{[\s\S]*?)(^\};)/m,
    `$1${ogBlock}\n$2`
  );
  fs.writeFileSync(filePath, content);
  console.log(`Fixed: gallery/${slug}`);
}

// Privacy page
{
  const filePath = 'app/privacy/page.tsx';
  let content = fs.readFileSync(filePath, 'utf8');
  if (!content.includes('openGraph:')) {
    const ogBlock = `  openGraph: {
    title: "Privacy Policy | Florida Construction Specialists",
    url: "${SITE_URL}/privacy/",
    type: "website",
    siteName: "Florida Construction Specialists",
    images: [{ url: "${OG_IMAGE}", width: 1200, height: 630, alt: "Florida Construction Specialists" }],
  },`;
    content = content.replace(
      /(export const metadata:\s*Metadata\s*=\s*\{[\s\S]*?)(^\};)/m,
      `$1${ogBlock}\n$2`
    );
    fs.writeFileSync(filePath, content);
    console.log('Fixed: privacy');
  }
}

// Terms page
{
  const filePath = 'app/terms/page.tsx';
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    if (!content.includes('openGraph:')) {
      // Check if it has metadata export
      if (content.includes('export const metadata')) {
        const ogBlock = `  openGraph: {
    title: "Terms of Service | Florida Construction Specialists",
    url: "${SITE_URL}/terms/",
    type: "website",
    siteName: "Florida Construction Specialists",
    images: [{ url: "${OG_IMAGE}", width: 1200, height: 630, alt: "Florida Construction Specialists" }],
  },`;
        content = content.replace(
          /(export const metadata[^=]*=\s*\{[\s\S]*?)(^\};)/m,
          `$1${ogBlock}\n$2`
        );
        fs.writeFileSync(filePath, content);
        console.log('Fixed: terms');
      }
    }
  }
}

// Terms and conditions (might be the actual terms page)
{
  const filePath = 'app/terms-and-conditions/page.tsx';
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    if (!content.includes('openGraph:')) {
      console.log('Note: terms-and-conditions exists but may need manual OG fix');
    }
  }
}

// historic-restoration-preservation - non-typed metadata
{
  const filePath = 'app/commercial/guides/historic-restoration-preservation/page.tsx';
  let content = fs.readFileSync(filePath, 'utf8');
  if (!content.includes('openGraph:')) {
    const ogBlock = `  openGraph: {
    title: "Historic Restoration & Preservation Tampa",
    description: "Historic restoration Tampa: traditional craftsmanship and modern techniques. Preserve Florida heritage. SHPO compliance.",
    url: "${SITE_URL}/commercial/guides/historic-restoration-preservation/",
    type: "website",
    siteName: "Florida Construction Specialists",
    images: [{ url: "${OG_IMAGE}", width: 1200, height: 630, alt: "Florida Construction Specialists - Historic Restoration" }],
  },`;
    content = content.replace(
      /(export const metadata\s*=\s*\{[\s\S]*?)(^\};)/m,
      `$1${ogBlock}\n$2`
    );
    fs.writeFileSync(filePath, content);
    console.log('Fixed: historic-restoration-preservation');
  }
}

console.log('\nDone!');
