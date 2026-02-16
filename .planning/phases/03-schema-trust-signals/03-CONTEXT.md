# Phase 3: Schema & Trust Signals - Context

**Gathered:** 2026-02-16
**Status:** Ready for planning

<domain>
## Phase Boundary

Fix schema markup to be correct, targeted, and Google-validated. Enforce NAP consistency across all pages matching Google Business Profile. Add visible trust signals sitewide. Verify phone tracking and form delivery. This is trust infrastructure — making Google and users confident FCS is a legitimate, established business.

</domain>

<decisions>
## Implementation Decisions

### Schema Placement Rules
- LocalBusiness, ServiceSchema, FAQ schema placement: Claude decides based on maximum ranking impact for qualified lead generation
- No pricing in schema — every project is custom ($500K-$25M range), avoid setting expectations
- FAQ schema cleanup: Claude decides (strict match vs. adding where missing) based on rich result eligibility
- Add Article schema to all blog/article pages NOW with placeholder author (company name) — Phase 6 upgrades to real person attribution with datePublished

### NAP Source of Truth
- Business name: "Florida Construction Specialists" — exact match, no suffix/tagline
- Single phone number across entire site — one canonical number on all pages
- Service-area business (SAB) — no public storefront, HQ is owner's home in Ruskin
- GBP is set as service-area business (no address shown), not storefront
- Claude decides: whether to show street address or just "Ruskin, FL" / service area — research SAB best practices for local SEO

### Trust Badge Design & Placement
- Credentials: use whatever is already mentioned on the site (known: Since 1982, CGC CBC1262722, in-house engineering — may find more during audit)
- Text-based, clean design — no icons or shield graphics
- License number displayed but NOT linked to DBPR verification page — keep users on site
- Placement: Claude decides where badges appear (footer, hero, etc.) based on trust signal best practices

### Mobile CTA & Form Trust
- Sticky phone CTA: Claude decides behavior (always visible vs. scroll-triggered) based on conversion best practices
- HighLevel forms are in place and working — no need to change form provider
- Minimal trust signals near forms — keep forms clean, let footer/header badges handle credibility
- Verify and fix GA4 phone click tracking across all pages as part of this phase

### Claude's Discretion
- Schema type distribution across page types (which pages get which schemas)
- SAB address handling (show street vs. city-only vs. service-area-only)
- Trust badge placement (footer-only vs. footer+hero vs. other)
- Mobile sticky CTA trigger behavior
- FAQ schema cleanup aggressiveness

</decisions>

<specifics>
## Specific Ideas

- User's primary goal: "whatever will cause this site to rank the highest for the most number of keywords to bring in the most number of qualified leads possible"
- FCS is a service-area business — this fundamentally changes LocalBusiness schema approach (no physical storefront for customers to visit)
- The Ruskin address is the owner's home — be thoughtful about whether/how to display it

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>

---

*Phase: 03-schema-trust-signals*
*Context gathered: 2026-02-16*
