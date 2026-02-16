# Phase 3: Schema & Trust Signals - Research

**Researched:** 2026-02-16
**Domain:** Schema.org structured data, NAP consistency, trust signal UX, GA4 phone tracking
**Confidence:** HIGH

## Summary

The FCS site has 427 pages with inconsistent schema markup, NAP errors, and scattered trust signals. The schema infrastructure exists (components/Schema.tsx) with LocalBusinessSchema, ServiceSchema, FAQSchema, ArticleSchema, BreadcrumbSchema, and OrganizationSchema components, but they are applied unevenly across page types. The most critical finding is NAP inconsistency: 40 pages contain a wrong phone number (813-906-1302 instead of 813-420-7561), and at least 3 different wrong license numbers appear across the site (CGC1529395, CGC1522434, CGC1532648) when the real license is CBC1262722.

FAQ schema implementation is extensive (~340 pages) but Google restricted FAQ rich results to government and health sites in August 2023. This means FAQ schema will NOT produce rich results for FCS regardless of implementation quality. However, FAQ schema is still valid structured data and may benefit AI search engines (Gemini, ChatGPT, Perplexity), so the decision is whether to keep it clean or strip it. The existing Schema.tsx components are well-structured and can be enhanced in place without new libraries.

**Primary recommendation:** Fix NAP consistency first (wrong phone numbers, wrong license numbers), then fix schema component issues (priceRange format, missing hasOfferCatalog, SAB address handling), then add trust badges to footer sitewide, and verify GA4 phone tracking.

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions
- LocalBusiness, ServiceSchema, FAQ schema placement: Claude decides based on maximum ranking impact for qualified lead generation
- No pricing in schema -- every project is custom ($500K-$25M range), avoid setting expectations
- FAQ schema cleanup: Claude decides (strict match vs. adding where missing) based on rich result eligibility
- Add Article schema to all blog/article pages NOW with placeholder author (company name) -- Phase 6 upgrades to real person attribution with datePublished
- Business name: "Florida Construction Specialists" -- exact match, no suffix/tagline
- Single phone number across entire site -- one canonical number on all pages
- Service-area business (SAB) -- no public storefront, HQ is owner's home in Ruskin
- GBP is set as service-area business (no address shown), not storefront
- Claude decides: whether to show street address or just "Ruskin, FL" / service area -- research SAB best practices for local SEO
- Credentials: use whatever is already mentioned on the site (known: Since 1982, CGC CBC1262722, in-house engineering -- may find more during audit)
- Text-based, clean design -- no icons or shield graphics
- License number displayed but NOT linked to DBPR verification page -- keep users on site
- Placement: Claude decides where badges appear (footer, hero, etc.) based on trust signal best practices
- Sticky phone CTA: Claude decides behavior (always visible vs. scroll-triggered) based on conversion best practices
- HighLevel forms are in place and working -- no need to change form provider
- Minimal trust signals near forms -- keep forms clean, let footer/header badges handle credibility
- Verify and fix GA4 phone click tracking across all pages as part of this phase

### Claude's Discretion
- Schema type distribution across page types (which pages get which schemas)
- SAB address handling (show street vs. city-only vs. service-area-only)
- Trust badge placement (footer-only vs. footer+hero vs. other)
- Mobile sticky CTA trigger behavior
- FAQ schema cleanup aggressiveness

### Deferred Ideas (OUT OF SCOPE)
None -- discussion stayed within phase scope
</user_constraints>

## Current State Audit

### Site Scale
| Category | Count | Notes |
|----------|-------|-------|
| Total pages | 427 | All page.tsx files |
| Guide/article pages | 262 | In */guides/* directories |
| Location pages | 10 | In /locations/* (9 cities + index) |
| Service x Location pages | ~55 | e.g. /commercial-construction-tampa/ |
| Core service pages | ~15 | Hub pages for each service |
| Other pages | ~85 | About, contact, specialty, etc. |

### Current Schema Coverage (from existing audit)
| Schema Type | Pages | Coverage | Status |
|-------------|-------|----------|--------|
| LocalBusinessSchema | ~130-495 | Variable | On all page types but inconsistently -- some via layout.tsx, some per-page |
| BreadcrumbSchema | ~494 | ~99.6% | Good coverage via Breadcrumb component |
| FAQSchema | ~340 | ~68.5% | Heavy use but MOOT -- no rich results for non-gov/health |
| ServiceSchema | ~200 | ~40% | Missing from many service pages |
| ArticleSchema | ~153 | ~36% of articles | Many guide pages lack it |
| OrganizationSchema | 2 | Homepage only | Correct -- belongs on homepage |

### Critical NAP Issues Found
| Issue | Count | Severity |
|-------|-------|----------|
| Wrong phone (813-906-1302) in hardcoded text | 40 pages | CRITICAL |
| Wrong license CGC1529395 in meta descriptions | 2+ pages | CRITICAL |
| Wrong license CGC1522434 on insurance-restoration-tampa | 1 page | CRITICAL |
| Wrong license CGC1532648 on team-members page | 1 page | CRITICAL |
| "CGC" prefix used (should be "CBC") in meta descriptions | Many pages | HIGH |
| Correct license CBC1262722 in constants.ts | 1 (source of truth) | Correct |

### Schema Component Issues (components/Schema.tsx)
| Issue | Details | Fix |
|-------|---------|-----|
| priceRange format | "$500,000 - $50,000,000+" -- too specific, user said NO pricing | Remove priceRange entirely or use "$$$$" |
| ServiceSchema has minPrice | Default "500000" in offers -- violates no-pricing decision | Remove offers/price from ServiceSchema |
| No hasOfferCatalog | Requirement SCHEMA-03 specifies this for service pages | Add hasOfferCatalog with service categories |
| LocalBusinessSchema on every page | Currently in layout.tsx head -- should be restricted per SCHEMA-02 | Move to per-page, restrict to homepage + locations |
| areaServed format | Individual City objects without state containedInPlace (inconsistent) | Standardize with State containedInPlace |
| ArticleSchema author | Uses Organization -- correct for now, Phase 6 upgrades to Person | Keep as-is |

## Architecture Patterns

### Schema Placement Strategy (Claude's Discretion Decision)

Based on Google's current structured data guidelines and the goal of maximum ranking impact:

**Recommended schema distribution by page type:**

| Page Type | LocalBusiness | Service | FAQ | Article | Breadcrumb | Organization |
|-----------|:---:|:---:|:---:|:---:|:---:|:---:|
| Homepage | YES | NO | NO | NO | NO | YES |
| Location pages (9) | YES (city-specific areaServed) | NO | Keep existing | NO | YES | NO |
| Core service hubs (~15) | NO | YES (with hasOfferCatalog) | Keep existing | NO | YES | NO |
| Service x Location (~55) | YES (city-specific) | YES | Keep existing | NO | YES | NO |
| Guide/article pages (~262) | NO | NO | Keep if visible FAQ | YES | YES | NO |
| About/Contact/Other | NO | NO | Only if visible FAQ | NO | YES | NO |

**Rationale:**
- LocalBusinessSchema in layout.tsx `<head>` currently fires on ALL 427 pages -- this dilutes relevance. Restrict to homepage + location + service-location pages where local intent matters.
- OrganizationSchema stays in layout.tsx head (fires on all pages) -- this is correct per Google guidelines.
- ServiceSchema with hasOfferCatalog goes on service hub pages where Google needs to understand what FCS offers.
- ArticleSchema goes on ALL 262 guide pages (decision locked) with company author.
- FAQ schema stays where visible FAQ content exists but is LOW priority since no rich results are possible.

### SAB Address Handling (Claude's Discretion Decision)

**Recommendation: Include full street address in schema, display "Ruskin, FL" visually.**

Research findings:
- Google's LocalBusiness structured data documentation lists `address` as a REQUIRED property. Omitting it may prevent schema validation.
- The GBP is set as SAB (no address shown to users), but Google still has the address on file.
- Schema.org and Google's validator expect an address for LocalBusiness type.
- The schema is machine-readable -- it tells Google where the business HQ is, even if users don't see it.
- Visually showing the full street address is a separate decision from schema.

**Implementation:**
- Schema markup: Keep full address (822 Bayview Dr, Ruskin, FL 33579) -- required for validation
- Footer display: Show "Ruskin, FL" (city + state only) -- protects owner's home address
- areaServed: Always include to signal SAB nature
- Do NOT use Organization type instead of LocalBusiness -- LocalBusiness with areaServed is correct for SAB

### Trust Badge Placement (Claude's Discretion Decision)

**Recommendation: Footer + hero trust bar, text-based, no icons.**

Research and current state:
- Homepage already has a trust bar with icons (Shield, Award, CheckCircle) -- decision says NO icons/shields
- Footer currently has NO trust badges
- StickyMobileCTA already has a trust line: "Licensed CBC1262722 . $10M+ Bonding . 43+ Years Experience"
- The sticky CTA trust line is a good pattern to replicate

**Implementation:**
- Footer: Add text-based trust line above copyright: "Since 1982 | Licensed CBC1262722 | In-House Engineering"
- Homepage trust bar: Convert from icon-based to text-based (remove Shield, Award, CheckCircle icons)
- Other pages: Footer handles it sitewide, no per-page trust badges needed
- Near forms: Minimal -- requirement NAP-04 says trust signals nearby, but decision says keep forms clean. A single text line below/above the form wrapper is sufficient.

### Mobile Sticky CTA Behavior (Claude's Discretion Decision)

**Recommendation: Keep scroll-triggered (current 300px threshold) with dismissal option.**

Research findings:
- Sticky CTAs improve mobile conversions by 12-40% on average
- The current implementation is already well-designed: scroll-triggered at 300px, dismissible, with GA4 tracking
- Always-visible would risk Google's intrusive interstitial penalty (covers content immediately on load)
- The current trust line in the sticky CTA ("Licensed CBC1262722 . $10M+ Bonding . 43+ Years Experience") is already good
- Current behavior matches best practices: appears after scroll, can be dismissed, large touch target

**Keep current implementation as-is.** Only changes needed:
- Fix the "$10M+ Bonding" text -- "bonding" is not a verified credential from the user's list
- Verify GA4 tracking fires correctly

### FAQ Schema Aggressiveness (Claude's Discretion Decision)

**Recommendation: Keep FAQ schema WHERE visible FAQ content exists, fix mismatches, but do NOT add to new pages.**

Rationale:
- FAQ rich results are restricted to gov/health sites since August 2023 -- no SERP benefit for FCS
- FAQ schema still provides structured data that AI search engines may consume
- Removing existing working FAQ schema provides no benefit ("structured data that's not being used does not cause problems for Search" -- Google)
- The 29 pages identified with FAQ content but missing FAQSchema should get it added for consistency
- But do NOT add FAQ sections to pages just for schema purposes -- waste of effort

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Schema validation | Custom validator | Google Rich Results Test (manual) + schema-dts (types) | Google's validator is the authority |
| NAP consistency | Manual page-by-page fixes | Grep + sed / programmatic find-replace | 40+ pages need phone fix, must be automated |
| Trust badge component | Per-page trust markup | Single TrustBadge component in Footer | Consistency, single source of truth |
| Phone tracking | Custom analytics | Existing PhoneTrackingProvider (already built) | Already working, just needs verification |

**Key insight:** The existing Schema.tsx component architecture is solid. The work is fixing data quality (wrong numbers, wrong license) and adjusting schema placement (which pages get which types), not rebuilding the schema system.

## Common Pitfalls

### Pitfall 1: Duplicate Schema Conflict
**What goes wrong:** LocalBusinessSchema fires both from layout.tsx `<head>` AND from individual pages, creating duplicate JSON-LD blocks on the same page.
**Why it happens:** layout.tsx includes `<LocalBusinessSchema />` and `<OrganizationSchema />` in `<head>`, then individual pages ALSO include `<LocalBusinessSchema />`.
**How to avoid:** Remove LocalBusinessSchema from layout.tsx head. Keep OrganizationSchema there. Add LocalBusinessSchema per-page ONLY to homepage, location pages, and service-location pages.
**Warning signs:** Google Rich Results Test shows duplicate LocalBusiness entities on a page.

### Pitfall 2: Hardcoded Phone Numbers in Content
**What goes wrong:** Pages have phone numbers written directly in JSX text (not from BUSINESS_INFO constant), so changing the number in constants.ts doesn't fix them.
**Why it happens:** Content was migrated from old site with hardcoded strings. Some pages generated by AI included literal phone numbers.
**How to avoid:** grep for all phone-number patterns, replace with `{BUSINESS_INFO.phone}` references. Future content must use constants.
**Warning signs:** Multiple phone numbers appearing in search results for same business.

### Pitfall 3: priceRange Causing User Expectations
**What goes wrong:** Schema shows "$500,000 - $50,000,000+" which Google may display, setting wrong expectations for potential leads.
**Why it happens:** priceRange was set to project value range instead of relative indicator.
**How to avoid:** Remove priceRange entirely OR use "$$$$" notation. Decision says NO pricing in schema.
**Warning signs:** Google Knowledge Panel shows price range from schema.

### Pitfall 4: FAQ Schema on Pages Without Visible FAQs
**What goes wrong:** FAQSchema component fires but no visible FAQ accordion is rendered, violating Google's policy.
**Why it happens:** Some pages import FAQSchema but conditionally render or remove the FAQ section.
**How to avoid:** Use FAQWithSchema component which couples the visual FAQ with its schema, or verify every FAQSchema has a corresponding visible FAQ component.
**Warning signs:** Google Search Console structured data errors mentioning content mismatch.

### Pitfall 5: Wrong License Numbers in Meta Descriptions
**What goes wrong:** At least 3 different incorrect license numbers appear in meta descriptions and page content (CGC1529395, CGC1522434, CGC1532648). Also "CGC" prefix used when actual license is "CBC".
**Why it happens:** Content was likely generated with hallucinated license numbers.
**How to avoid:** grep for all license number patterns, replace with canonical `{BUSINESS_INFO.licenseNumber}` or literal "CBC1262722".
**Warning signs:** DBPR lookup shows no match, potential legal issues with displaying wrong license.

## Code Examples

### Pattern 1: LocalBusinessSchema with SAB areaServed (Enhanced)
```typescript
// components/Schema.tsx - Updated LocalBusinessSchema
export function LocalBusinessSchema({ city }: { city?: string }) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness", "GeneralContractor"],
    "name": "Florida Construction Specialists",
    "image": "https://floridaconstructionspecialists.com/logo.jpg",
    "telephone": "+1-813-420-7561",
    "email": BUSINESS_INFO.email,
    "url": "https://floridaconstructionspecialists.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": BUSINESS_INFO.address.street,
      "addressLocality": BUSINESS_INFO.address.city,
      "addressRegion": BUSINESS_INFO.address.state,
      "postalCode": BUSINESS_INFO.address.zip,
      "addressCountry": "US",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": BUSINESS_INFO.coordinates.lat,
      "longitude": BUSINESS_INFO.coordinates.lng,
    },
    // REMOVED: priceRange -- no pricing in schema per decision
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "16:00",
    },
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "license",
        "name": "Florida Certified Building Contractor License",
        "identifier": "CBC1262722",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Florida Department of Business and Professional Regulation",
        },
      },
    ],
    "foundingDate": "1982",
    "areaServed": city
      ? {
          "@type": "City",
          "name": city,
          "containedInPlace": { "@type": "State", "name": "Florida" },
        }
      : [
          "Tampa", "St. Petersburg", "Clearwater", "Lakeland",
          "Sarasota", "Bradenton", "Brandon", "Ruskin",
        ].map(name => ({
          "@type": "City",
          "name": name,
          "containedInPlace": { "@type": "State", "name": "Florida" },
        })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
```

### Pattern 2: ServiceSchema with hasOfferCatalog (New)
```typescript
// components/Schema.tsx - Updated ServiceSchema
interface ServiceSchemaProps {
  serviceName: string;
  serviceDescription: string;
  city?: string;
  serviceCategories?: string[]; // For hasOfferCatalog
}

export function ServiceSchema({ serviceName, serviceDescription, city, serviceCategories }: ServiceSchemaProps) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": serviceName,
    "provider": {
      "@type": "GeneralContractor",
      "name": "Florida Construction Specialists",
      "telephone": "+1-813-420-7561",
      "url": "https://floridaconstructionspecialists.com",
    },
    "areaServed": city
      ? { "@type": "City", "name": city, "containedInPlace": { "@type": "State", "name": "Florida" } }
      : [
          "Tampa", "St. Petersburg", "Clearwater", "Lakeland",
          "Sarasota", "Bradenton", "Brandon", "Ruskin",
        ].map(name => ({
          "@type": "City", "name": name,
          "containedInPlace": { "@type": "State", "name": "Florida" },
        })),
    "description": serviceDescription,
    // REMOVED: offers/priceSpecification -- no pricing per decision
  };

  if (serviceCategories && serviceCategories.length > 0) {
    schema["hasOfferCatalog"] = {
      "@type": "OfferCatalog",
      "name": `${serviceName} Services`,
      "itemListElement": serviceCategories.map(cat => ({
        "@type": "OfferCatalog",
        "name": cat,
      })),
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
```

### Pattern 3: Footer Trust Line (Text-Only)
```typescript
// In Footer component, above copyright
<div className="border-t border-gray-800">
  <div className="container-custom py-4 text-center">
    <p className="text-gray-400 text-sm">
      Since 1982 | Licensed CBC1262722 | In-House Engineering & Architectural Drafting
    </p>
  </div>
</div>
```

### Pattern 4: ArticleSchema on Guide Pages
```typescript
// Standard pattern for guide/article pages
import { ArticleSchema, BreadcrumbSchema } from "@/components/Schema";

// In JSX:
<ArticleSchema
  headline={metadata.title as string}
  description={metadata.description as string}
  datePublished="2024-01-01"
  slug="/commercial/guides/article-slug/"
/>
<BreadcrumbSchema items={breadcrumbItems} />
// NO LocalBusinessSchema on article pages
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| FAQ rich results for all sites | Restricted to gov/health only | August 2023 | FAQ schema has no SERP benefit for FCS |
| priceRange as dollar amounts | priceRange as "$" symbols or omitted | Ongoing best practice | Avoid setting wrong expectations |
| LocalBusiness on every page | LocalBusiness only on locally-relevant pages | Best practice | Reduces spam signals to Google |
| Separate schema per concern | Combined JSON-LD blocks OK | Always valid | Can have multiple script blocks per page |

**Deprecated/outdated:**
- HowTo rich results: Deprecated on desktop as of August 2023
- FAQ rich results: Restricted to gov/health sites since August 2023 (markup still valid, just no SERP display)
- priceRange as exact dollar amounts: Not deprecated but poor practice for custom-priced services

## Open Questions

1. **Exact credentials list**
   - What we know: Since 1982, CBC1262722, in-house engineering, in-house architectural draftsman, financing capability
   - What's unclear: Are there other certifications or awards not yet mentioned on the site? (e.g., BBB accreditation, safety awards, bonding capacity specifics)
   - Recommendation: Use what's confirmed. The decision says "use whatever is already mentioned on the site." The trust badge should be: "Since 1982 | Licensed CBC1262722 | In-House Engineering"

2. **Footer address display for SAB**
   - What we know: GBP is SAB (no address shown), HQ is owner's home
   - What's unclear: Whether showing city-only in footer could hurt local SEO citations
   - Recommendation: Show "Ruskin, FL" in footer (city + state), full address in schema only. This balances owner privacy with citation consistency.

3. **Scale of wrong phone number fixes**
   - What we know: 40 pages have hardcoded (813) 906-1302
   - What's unclear: Whether these are in meta descriptions only, or also in page body content
   - Recommendation: Comprehensive grep + replace. Many are in meta descriptions AND body text. Must fix all.

## Sources

### Primary (HIGH confidence)
- [Google LocalBusiness Structured Data Documentation](https://developers.google.com/search/docs/appearance/structured-data/local-business) - Required/recommended properties, priceRange format
- [Google FAQ Structured Data Documentation](https://developers.google.com/search/docs/appearance/structured-data/faqpage) - Eligibility restricted to gov/health sites
- [Google Article Structured Data Documentation](https://developers.google.com/search/docs/appearance/structured-data/article) - No required properties, recommended fields
- [Google FAQ/HowTo Changes Blog Post (Aug 2023)](https://developers.google.com/search/blog/2023/08/howto-faq-changes) - Official announcement of restrictions
- Direct codebase audit of components/Schema.tsx, layout.tsx, Footer.tsx, Header.tsx, StickyMobileCTA.tsx, constants.ts

### Secondary (MEDIUM confidence)
- [Schema.org LocalBusiness Type](https://schema.org/LocalBusiness) - Type hierarchy and properties
- [Schema.org Service Type](https://schema.org/Service) - hasOfferCatalog property
- [Authority NW: Service-Area Businesses Schema & GMB](https://authoritynw.com/blog/service-area-businesses-gmb-schema-setup/) - SAB-specific guidance
- [Red Arrow Marketing: LocalBusiness Schema Best Practices](https://redarrowmarketing.com/2025/12/02/local-business-schema-how-structured-data-boosts-local-seo-conversions-and-google-visibility/) - areaServed for SABs

### Tertiary (LOW confidence)
- Sticky CTA conversion statistics (12-40% improvement) - aggregated from multiple marketing sources, exact numbers vary

## Metadata

**Confidence breakdown:**
- Schema architecture: HIGH - Based on Google's official documentation and direct codebase audit
- NAP issues: HIGH - Found via direct grep of codebase, verified wrong numbers
- Trust badge design: HIGH - Constrained by user decisions (text-only, no icons)
- FAQ schema value: HIGH - Google officially restricted to gov/health in Aug 2023
- SAB address handling: MEDIUM - Google docs require address for LocalBusiness, but SAB is a gray area

**Research date:** 2026-02-16
**Valid until:** 2026-04-16 (stable domain, schema.org changes slowly)
