# Quick Reference: Fixing SEO Issues

## Problem 1: Page has "use client" directive

### ❌ Current (Broken)
```typescript
"use client";

// Cannot export metadata!

export default function MyPage() {
  return <div>...</div>;
}
```

### ✅ Fixed (Server + Client Split)

**File 1: app/my-page/page.tsx** (Server Component)
```typescript
import { Metadata } from "next";
import { MyPageClient } from "@/components/MyPageClient";

// ✅ Metadata works here
export const metadata: Metadata = {
  title: "Page Title | Florida Construction Specialists",
  description: "Your SEO-optimized description here (150-160 characters).",
  alternates: {
    canonical: "https://floridaconstructionspecialists.com/my-page/",
  },
};

export default function MyPage() {
  return <MyPageClient />;
}
```

**File 2: components/MyPageClient.tsx** (Client Component)
```typescript
"use client";

import { FadeIn } from "@/components/AnimatedElements";
import { HighLevelForm } from "@/components/HighLevelForm";

export function MyPageClient() {
  // All animations, forms, and interactive elements here
  return (
    <>
      <FadeIn>
        <h1>Page Content</h1>
      </FadeIn>
      <HighLevelForm variant="commercial" />
    </>
  );
}
```

---

## Problem 2: Page missing metadata entirely

### ❌ Current (Broken)
```typescript
import Link from "next/link";

// No metadata export!

export default function MyPage() {
  return (
    <div>
      <h1>My Page Title</h1>
      <p>Content...</p>
    </div>
  );
}
```

### ✅ Fixed (Add Metadata)
```typescript
import { Metadata } from "next";
import Link from "next/link";

// ✅ Add metadata export
export const metadata: Metadata = {
  title: "My Page Title | Florida Construction Specialists",
  description: "Compelling description that summarizes the page content for search engines and social media.",
  alternates: {
    canonical: "https://floridaconstructionspecialists.com/my-page/",
  },
  openGraph: {
    title: "My Page Title",
    description: "Compelling description...",
    url: "https://floridaconstructionspecialists.com/my-page/",
    type: "website",
  },
};

export default function MyPage() {
  return (
    <div>
      <h1>My Page Title</h1>
      <p>Content...</p>
    </div>
  );
}
```

---

## Metadata Template (Copy/Paste)

```typescript
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "[Page Title] | Florida Construction Specialists",
  description: "[SEO description 150-160 characters describing what this page offers]",
  alternates: {
    canonical: "https://floridaconstructionspecialists.com/[page-slug]/",
  },
  keywords: [
    "keyword 1",
    "keyword 2",
    "keyword 3",
  ],
  openGraph: {
    title: "[Page Title]",
    description: "[Description for social media]",
    url: "https://floridaconstructionspecialists.com/[page-slug]/",
    type: "website",
    images: [
      {
        url: "https://floridaconstructionspecialists.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "[Image description]",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "[Page Title]",
    description: "[Description for Twitter]",
  },
};
```

---

## How to Determine Canonical URL

**Formula:**
```
https://floridaconstructionspecialists.com/[route-path]/
```

**Examples:**

| File Path | Canonical URL |
|-----------|---------------|
| `app/page.tsx` | `https://floridaconstructionspecialists.com/` |
| `app/about/page.tsx` | `https://floridaconstructionspecialists.com/about/` |
| `app/insurance/page.tsx` | `https://floridaconstructionspecialists.com/insurance/` |
| `app/services/disaster-recovery/page.tsx` | `https://floridaconstructionspecialists.com/services/disaster-recovery/` |

**Important:** Always include trailing slash `/`

---

## Writing Good Metadata

### Title Tag (50-60 characters)
**Formula:** `[Primary Keyword] | Florida Construction Specialists`

✅ Good:
```
"Insurance Restoration Services Tampa | FCS"
"Commercial Construction Tampa | FCS"
"Historic Building Restoration | FCS"
```

❌ Bad:
```
"Insurance" (too short)
"Insurance Restoration Services in Tampa Bay Area Florida | Florida Construction Specialists" (too long)
```

### Description (150-160 characters)
**Formula:** `[What you offer] + [Key benefit] + [Location/qualifier]`

✅ Good:
```
"Prime contractor for large loss commercial & residential insurance claims. 40+ years experience. From damage assessment to complete restoration in Tampa Bay."
```

❌ Bad:
```
"We do insurance work." (too short)
"Florida Construction Specialists is the leading provider of comprehensive insurance restoration services..." (generic, keyword stuffing)
```

### Keywords (5-10 relevant terms)
```typescript
keywords: [
  "main service",
  "location-based keyword",
  "specific offering",
  "qualifier (e.g., licensed, certified)",
  "alternative phrasing"
]
```

---

## Testing Your Metadata

### 1. Local Testing
After adding metadata, run:
```bash
npm run build
npm start
```

View page source (Ctrl+U) and check for:
```html
<title>Your Title | FCS</title>
<meta name="description" content="Your description">
<link rel="canonical" href="https://...">
```

### 2. Preview Tools
- **Meta Tags:** https://metatags.io/
- **Rich Results:** https://search.google.com/test/rich-results
- **Facebook:** https://developers.facebook.com/tools/debug/
- **Twitter:** https://cards-dev.twitter.com/validator

### 3. After Deploy
- Check Google Search Console
- Verify canonical in live page source
- Test social sharing links

---

## Common Mistakes to Avoid

### ❌ Don't Do This

**1. Forgetting trailing slash**
```typescript
canonical: "https://floridaconstructionspecialists.com/about"  // ❌ Missing /
```

**2. Using "use client" unnecessarily**
```typescript
"use client";  // ❌ Only use if you NEED client features

export const metadata = { ... }  // Won't work!
```

**3. Duplicate titles across pages**
```typescript
title: "Florida Construction Specialists"  // ❌ Too generic, same on every page
```

**4. Missing metadata import**
```typescript
// ❌ Forgot to import
export const metadata: Metadata = { ... }  // TypeScript error
```

**5. Inconsistent casing in URL**
```typescript
canonical: "https://FloridaConstructionSpecialists.com/About/"  // ❌ Use lowercase
```

### ✅ Do This Instead

**1. Always trailing slash**
```typescript
canonical: "https://floridaconstructionspecialists.com/about/"  // ✅
```

**2. Split components when needed**
```typescript
// page.tsx - server component with metadata
// PageClient.tsx - "use client" for interactivity
```

**3. Unique titles for each page**
```typescript
title: "Historic Building Restoration | Florida Construction Specialists"  // ✅ Specific
```

**4. Import Metadata type**
```typescript
import { Metadata } from "next";  // ✅
```

**5. Lowercase, consistent URLs**
```typescript
canonical: "https://floridaconstructionspecialists.com/about/"  // ✅
```

---

## Priority Order for Fixing

### Week 1: Critical Pages (10 pages)
1. Homepage (`app/page.tsx`)
2. Insurance page (`app/insurance/page.tsx`)
3. About page
4. Contact page
5. Main service pages
6. Other "use client" pages

### Week 2: Important Pages (20-30 pages)
7. All service hub pages
8. Top 10 blog posts (by traffic)
9. Location pages
10. High-value service pages

### Week 3: Remaining Pages (460+ pages)
11. Run automated script
12. Manual review of generated metadata
13. Deploy in batches
14. Monitor Google Search Console

---

## Verification Checklist

After fixing a page, verify:

- [ ] `export const metadata` exists
- [ ] Title is unique and descriptive (50-60 chars)
- [ ] Description is compelling (150-160 chars)
- [ ] Canonical URL is correct with trailing slash
- [ ] File is NOT using `"use client"` (unless split)
- [ ] OpenGraph tags included (for social)
- [ ] Page builds without errors (`npm run build`)
- [ ] Metadata appears in page source (view source)
- [ ] No duplicate metadata on other pages

---

## Quick Commands

```bash
# Find all pages with "use client"
grep -r "\"use client\"" app/**/*.tsx

# Find all pages missing metadata
grep -rL "export const metadata" app/**/*.tsx

# Test build
npm run build

# Deploy to Netlify
netlify deploy --prod --dir=out --no-build
```

---

## Need Help?

**Documentation:**
- Full audit: `audit-technical.json`
- Detailed guide: `SEO-AUDIT-FINDINGS.md`
- Executive summary: `AUDIT-EXECUTIVE-SUMMARY.md`

**Next.js Metadata Docs:**
https://nextjs.org/docs/app/api-reference/functions/generate-metadata

**Test Tools:**
- https://metatags.io/
- https://search.google.com/test/rich-results
