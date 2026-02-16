# Pitfalls Research

**Domain:** Local SEO for construction companies (commercial general contractor, Tampa Bay)
**Researched:** 2026-02-15
**Confidence:** HIGH (verified against current Google policies, algorithm updates through Dec 2025, and site-specific evidence)

## Critical Pitfalls

### Pitfall 1: Location Pages as Doorway Pages

**What goes wrong:**
Creating location pages (e.g., `balcony-reconstruction-bradenton/`, `balcony-reconstruction-clearwater/`) that swap city names but keep nearly identical content. Google classifies these as "doorway pages" -- intermediate pages created to rank for specific location queries that funnel users to the same business. The algorithm filters most of these pages from search results entirely. FCS currently has ~80 location pages across 8 service types x 8-10 cities. If these share >60% of the same content with only city name substitution, they are at high risk of doorway page filtering.

**Why it happens:**
The service-x-location page matrix is standard contractor SEO advice from 2018-2022. Agencies mass-produced these pages at scale. Google's algorithm evolved faster than the practice died. The temptation is to template out pages quickly across all cities, but post-December 2025 core update, the bar for location page quality is substantially higher.

**How to avoid:**
Each location page must be genuinely unique. Requirements for a legitimate location page:
- City-specific project examples or case studies (real jobs in that city)
- Local code/permitting information unique to that municipality (e.g., Hillsborough vs. Pinellas County requirements)
- Local landmarks, neighborhood references, or geographic context that cannot be swapped between pages
- Unique FAQs addressing location-specific concerns
- Minimum 800 words of unique, non-templated content per page
- If you cannot write 800 words of genuinely unique content for a city, the page should not exist

**Warning signs:**
- Running a diff between two location pages shows >40% shared text (excluding boilerplate nav/footer)
- Location pages rank for zero keywords after 3 months indexed
- Google Search Console shows these pages as "Crawled - currently not indexed"
- Multiple location pages competing for the same query in Search Console

**Phase to address:**
Phase 1 (Content Audit) -- audit all location pages for uniqueness. Consolidate or noindex weak ones before creating new content that dilutes further.

---

### Pitfall 2: Thin Content Triggering Site-Wide Helpful Content Classifier

**What goes wrong:**
Google's Helpful Content System is a site-wide classifier. It does not penalize individual thin pages -- it downgrades the entire domain when it detects a pattern of unhelpful content. FCS has 28 pages under 300 words and 80 pages in the 300-500 word range. That is 108 potentially thin pages out of 496 total -- approximately 22% of the site. If Google's classifier determines these pages exist primarily to capture search traffic rather than help users, the entire site's ranking ability is suppressed, including the strong pages.

**Why it happens:**
During WordPress-to-Next.js migration, all legacy pages were carried over without content quality evaluation. Some pages were thin on the WordPress site and remained thin. Others lost content during migration (e.g., the 12-line redirect pages like `services/disaster-recovery/fire-damage/page.tsx` that only import a client component). The "more pages = more rankings" mindset from early SEO persists.

**How to avoid:**
- Audit every page under 500 words. For each: expand to 800+ words with genuine value, merge into a parent page with 301 redirect, or noindex/remove
- Apply the "would a human find this page useful on its own?" test -- if the answer is no, the page hurts more than it helps
- Never carry forward thin WordPress content without expanding it
- After pruning, submit updated sitemap to Google Search Console and request re-crawl
- The Helpful Content classifier recovery takes months -- better to prune aggressively now than wait for classification

**Warning signs:**
- Site-wide organic traffic decline not tied to a specific page
- Google Search Console impressions dropping across all queries (not just specific ones)
- New content fails to rank despite strong on-page signals
- "Crawled - currently not indexed" status increasing across the site

**Phase to address:**
Phase 1 (Content Audit) -- identify and triage thin pages. Phase 2 (Content Expansion) -- expand or consolidate before publishing new content.

---

### Pitfall 3: Keyword Cannibalization Across 496 Pages

**What goes wrong:**
Multiple pages compete for the same keyword, splitting ranking authority and confusing Google about which page to show. With 496 pages, FCS almost certainly has cannibalization issues. Likely examples:
- `commercial-construction-tampa/` vs `tampas-premier-commercial-remodeling-contractors/` vs `top-commercial-contractors-in-tampa-for-commercial-construction/`
- `condo-remediation-tampa/` vs `condo-milestone-inspection-remediation-tampa/` vs `condo-milestone-inspection-remediation/`
- Multiple blog posts about the same topic (e.g., insurance restoration, hurricane damage) competing with service pages

When pages cannibalize each other, none of them rank well. The authority that should concentrate on one definitive page is diluted across 3-5 weaker pages.

**Why it happens:**
WordPress sites accumulate blog posts over years without keyword strategy. During migration, nobody mapped which pages target which keywords. Blog posts often accidentally target the same terms as service pages. The construction industry has a narrow keyword universe (commercial construction, restoration, renovation + city names), making accidental overlap nearly inevitable at 496 pages.

**How to avoid:**
- Build a keyword-to-URL map before any content work. Every page gets one primary keyword. No two pages share a primary keyword
- Use Google Search Console query data to identify which pages Google is already ranking for which terms -- work with Google's existing understanding, not against it
- Consolidate competing pages: pick a winner, 301 redirect the losers
- Blog posts must target long-tail informational queries that do not compete with service pages
- Service pages own transactional/commercial intent; blog posts own informational intent

**Warning signs:**
- Google Search Console shows multiple URLs appearing for the same query
- A page's ranking fluctuates wildly (Google alternating between cannibalized pages)
- Blog posts outrank service pages for commercial-intent keywords
- URL click distribution in Search Console is spread thinly across many URLs for the same query cluster

**Phase to address:**
Phase 1 (Content Audit) -- map all pages to target keywords, identify cannibalization. Phase 2 -- consolidate before expanding.

---

### Pitfall 4: Off-Topic Content Diluting Site Topical Authority

**What goes wrong:**
Google's topical authority model rewards sites that demonstrate deep expertise in a focused subject area. Pages that fall outside the site's core topic dilute this signal. FCS has at least one blatantly off-topic page (`poseidon-fishing-charters-premier-angling-adventures-in-ruskin-fl/`). There may be others. Even well-written blog posts that stray too far from construction (generic business advice, lifestyle content, community event posts with no construction tie-in) weaken the site's topical authority signal.

**Why it happens:**
WordPress sites often published "anything and everything" to appear active. Local business blogs sometimes cover community topics loosely related to their service area. Content writers who run out of construction-specific ideas drift into tangential topics. The fishing charters page was likely a partner/community post from the WordPress era.

**How to avoid:**
- Every page must directly relate to construction, restoration, historic preservation, or insurance restoration
- Blog posts about local topics must have a clear construction angle (e.g., "How Tampa Bay's hurricane season affects commercial building maintenance" is fine; "Best fishing spots in Ruskin" is not)
- Remove or noindex pages that cannot be tied back to construction expertise
- Create a content brief template that requires a clear connection to a core service

**Warning signs:**
- Pages exist that you would not show a prospective client during a sales conversation
- Pages that get traffic but zero conversions or leads
- Topically unrelated pages appearing in Google Search Console for the site

**Phase to address:**
Phase 1 (Content Audit) -- identify and remove off-topic pages immediately. This is the fastest win.

---

### Pitfall 5: Meta Description Over-Optimization and Keyword Stuffing

**What goes wrong:**
314 meta descriptions exceed 160 characters. While Google often rewrites meta descriptions regardless, excessively long descriptions stuffed with keywords send a spam signal. More critically, the `keywords` meta tag (which Google has officially ignored since 2009) is present on many FCS pages and filled with keyword lists. This does nothing for rankings but signals to Google that the site is using outdated, aggressive SEO tactics. Combined with other signals, it contributes to an overall "over-optimized" profile.

**Why it happens:**
SEO agencies from 2015-2020 taught that keyword meta tags and long descriptions helped rankings. The WordPress site was built with these practices. During migration, metadata was copied verbatim without modernization.

**How to avoid:**
- Meta descriptions: 150-160 characters maximum. Write for click-through rate (compelling copy), not keyword density
- Remove the `keywords` meta tag entirely from all pages -- it provides zero ranking benefit and signals outdated SEO
- Focus metadata effort on title tags (still a strong ranking factor) rather than descriptions
- Write descriptions that answer "why should a searcher click this result?" not "how many keywords can we fit?"

**Warning signs:**
- Meta descriptions being rewritten by Google in search results (visible in Search Console)
- Click-through rates below industry average despite good rankings
- Manual review reveals keyword-stuffed descriptions that read unnaturally

**Phase to address:**
Phase 2 (Technical SEO) -- batch-fix meta descriptions as a systematic pass. Low effort, medium impact.

---

### Pitfall 6: Missing or Inconsistent NAP and Google Business Profile Misalignment

**What goes wrong:**
For local SEO, Name/Address/Phone (NAP) consistency across the website, Google Business Profile, and all citation sources is a foundational ranking factor. Businesses with consistent NAP data are 40% more likely to appear in the local pack. A construction company based in Ruskin but targeting Tampa as a primary service area faces a specific challenge: the physical address is in Ruskin, but the business wants to rank in Tampa. If the site overemphasizes Tampa in a way that conflicts with the GBP address in Ruskin, Google may distrust the location signals.

**Why it happens:**
Service-area businesses naturally want to rank where the customers are (Tampa), not where the office is (Ruskin). This leads to NAP inconsistencies, incorrect schema markup, or misleading location signals. During site migration, the business address may have been presented differently across pages. Citation sources from the WordPress era may still list old or inconsistent information.

**How to avoid:**
- Consistent NAP on every page, exactly matching GBP (822 Bayview Dr, Ruskin, FL 33579)
- Use `areaServed` in schema markup to declare Tampa Bay service area without faking the business location
- LocalBusiness schema must use the real Ruskin address, not a Tampa address
- Audit all citation sources (Yelp, Bing, Facebook, BBB, Houzz, HomeAdvisor, Angi, local chamber) for NAP consistency
- Do not create city-specific GBP listings for cities where there is no physical presence

**Warning signs:**
- GBP suspended or flagged for address inconsistency
- Not appearing in local pack for "construction company near me" searches in Ruskin area
- Citation audit reveals 3+ different address/phone formats across directories
- Google Maps shows incorrect business location

**Phase to address:**
Phase 2 (Technical SEO) for on-site NAP consistency. Phase 3 (Off-Site) for citation audit and cleanup.

---

### Pitfall 7: AI-Generated Content Without E-E-A-T Signals

**What goes wrong:**
Google does not penalize AI content per se, but penalizes low-quality content that lacks expertise, experience, authoritativeness, and trustworthiness -- regardless of how it was produced. A 496-page construction site where blog posts read like generic AI output (no author attribution, no project photos, no specific project details, no professional credentials) triggers the Helpful Content classifier. The December 2025 core update specifically targets "sites with poor E-E-A-T signals" with 45-80% visibility reduction. Construction is a licensed trade -- E-E-A-T matters because bad construction advice can result in building failures.

**Why it happens:**
Scaling from a small WordPress blog to 496 pages almost certainly involved AI content generation or cheap outsourced writing at some point. Generic blog posts about "benefits of commercial construction" or "how to choose a contractor" can be written by anyone and demonstrate zero first-hand experience. The WordPress-to-Next.js migration preserved this content without adding expertise signals.

**How to avoid:**
- Every blog post needs an author with credentials (name, title, license number for technical content)
- Include real project photos, not stock images
- Reference specific Florida building codes, local permit requirements, or real inspection experiences
- Include case studies with specific details: project type, location, challenges, solutions, outcomes
- First-person experience signals: "In our 40 years of working in Hillsborough County..." or "When we encountered this issue during a recent SB4-D inspection..."
- Schema markup: add `author` with `Person` type and `hasCredential` properties

**Warning signs:**
- Blog posts could have been written about any construction company in any state
- No author bylines or "About the Author" sections
- Stock photos used instead of real project photos
- No specific Florida building codes, permit numbers, or local regulatory references
- Content reads as general industry information rather than practitioner expertise

**Phase to address:**
Phase 3 (Content Enhancement) -- add E-E-A-T signals to existing content. Phase 4 (New Content) -- build E-E-A-T requirements into content briefs from the start.

---

## Moderate Pitfalls

### Pitfall 8: Schema Markup Over-Reach

**What goes wrong:**
Adding LocalBusiness schema to every page (instead of just the homepage and location pages) or including review/rating schema without actual on-page reviews visible to users. Google's structured data policies require that schema content match visible page content. Fabricated or misleading schema triggers manual actions that suppress rich results.

**Prevention:**
- LocalBusiness schema on homepage and location-specific pages only
- Service schema on service pages
- FAQ schema only on pages with visible FAQ sections
- Never add review/aggregate rating schema unless reviews are displayed on the page
- Audit current schema implementation against Google's structured data guidelines

**Phase to address:** Phase 2 (Technical SEO)

---

### Pitfall 9: Ignoring Google Business Profile Optimization

**What goes wrong:**
Focusing entirely on the website while neglecting GBP. For local construction companies, GBP drives the local pack (map) results, which appear above organic results. A perfectly optimized website that does not appear in the local pack misses the highest-converting local search real estate.

**Prevention:**
- Complete every GBP field: services, service areas, business description, photos, hours
- Post GBP updates weekly (project photos, completed jobs, team updates)
- Actively solicit reviews from completed projects (recent review velocity matters more than total count)
- Respond to every review (positive and negative) within 48 hours
- Add photos of real projects, team, office, vehicles -- not stock images
- Select the correct primary category ("General Contractor" or "Commercial Construction Company")

**Phase to address:** Phase 3 (Off-Site SEO), but GBP audit should happen in Phase 1.

---

### Pitfall 10: Internal Linking Architecture Trapping Link Equity

**What goes wrong:**
With 496 pages, internal linking structure determines how authority flows through the site. If blog posts link to each other but not to service pages, or if location pages are orphaned (reachable only from one navigation menu), link equity gets trapped. The most important pages (service pages, location pages) do not receive sufficient internal link authority to rank.

**Prevention:**
- Every blog post must link to at least 2 relevant service pages
- Every location page must link to the parent service page and adjacent location pages
- Hub pages (e.g., `/commercial/`, `/services/`) must link to all spoke pages
- Use descriptive anchor text that includes target keywords (not "click here" or "learn more")
- Run a crawl analysis to identify orphan pages (pages with <3 internal links pointing to them)
- Ensure the most important 20-30 pages are reachable within 2 clicks from the homepage

**Phase to address:** Phase 2 (Technical SEO) for structural audit. Ongoing during content phases.

---

### Pitfall 11: Carrying Forward Legacy WordPress URL Bloat

**What goes wrong:**
The WordPress site likely had category pages, tag pages, author archives, date archives, and paginated pages that were migrated as flat pages. Some FCS page slugs look like WordPress blog post titles (`a-zero-accident-workplace-in-tampas-commercial-construction`, `boost-sales-with-effective-retail-store-design-ideas`). If these pages are low-quality, they contribute to the thin content problem. If they were removed during migration but no 301 redirects were set up, the site loses any existing backlink authority those URLs had.

**Prevention:**
- Audit all pages with blog-style slugs -- determine if they deserve to exist as standalone pages
- For removed pages, set up 301 redirects to the most relevant surviving page
- For retained pages, ensure they meet the 800+ word, E-E-A-T quality bar
- Check Google Search Console for 404 errors from the WordPress migration
- Preserve backlink equity: any WordPress URL that had external links pointing to it needs a redirect

**Phase to address:** Phase 1 (Content Audit) -- URL audit and redirect mapping.

---

### Pitfall 12: Over-Targeting Tampa at the Expense of Actual Location (Ruskin)

**What goes wrong:**
FCS is headquartered in Ruskin but has 199 pages containing "Tampa" in the URL or content. Only a handful mention Ruskin prominently. Google knows the business address is in Ruskin. If the site aggressively targets Tampa without a proportional presence for its actual location, Google may distrust the location signals for both Tampa and Ruskin. This is especially problematic for local pack rankings, where proximity to the searcher is a dominant ranking factor.

**Prevention:**
- Ensure Ruskin location page is among the strongest on the site
- Build genuinely strong Tampa content that justifies the targeting (case studies from Tampa projects, Tampa-specific building codes, Tampa permit process guides)
- Do not try to rank for "near me" queries in Tampa -- proximity-based queries will favor businesses physically in Tampa
- Focus Tampa content on service-specific queries ("commercial construction Tampa") rather than proximity queries
- Ensure schema markup reflects the real Ruskin address while using `areaServed` for Tampa Bay

**Phase to address:** Phase 2 (Content Strategy) -- balance location targeting.

---

## Minor Pitfalls

### Pitfall 13: Social Profile Links Are Empty

**What goes wrong:**
The constants file shows empty strings for Facebook, Instagram, LinkedIn, and YouTube. Missing social profiles reduce trust signals (E-E-A-T) and eliminate a source of citations and engagement signals that support local SEO.

**Prevention:**
Claim and populate social profiles. Even minimal LinkedIn and Facebook presence is better than empty links. Google's knowledge panel uses social profiles to verify business legitimacy.

**Phase to address:** Phase 3 (Off-Site SEO)

---

### Pitfall 14: No Review Schema or Testimonial Strategy

**What goes wrong:**
Construction companies live and die by reputation. Without visible reviews on the site and an active strategy for generating Google reviews, the site lacks social proof for both users and search engines. Review velocity (pace of new reviews) is a local pack ranking factor.

**Prevention:**
- Build a review generation workflow: request reviews after project milestones, not just completion
- Display Google reviews on the site using compliant methods
- Add testimonial pages with real client names and project details
- Do not fabricate reviews or use review schema without visible reviews on the page

**Phase to address:** Phase 3 (Off-Site SEO) for review generation, Phase 4 (Content Enhancement) for on-site testimonials.

---

### Pitfall 15: Build/Deploy Configuration Masking SEO Issues

**What goes wrong:**
FCS deploys via manual `netlify deploy --prod --dir=out --no-build` because git-triggered builds fail. This means there is no CI/CD pipeline catching SEO regressions (broken meta tags, missing canonical URLs, accidentally removed pages). A developer could push changes that create hundreds of 404s, and nobody would know until Google deindexes the pages.

**Prevention:**
- Build locally and verify output before every deploy
- Add a pre-deploy check script that validates: all pages have meta titles, all pages have canonical URLs, no 404s in internal links, sitemap includes all pages
- Periodically diff the `out/` directory against previous builds to catch accidentally removed pages
- Monitor Google Search Console weekly for coverage issues

**Phase to address:** Phase 2 (Technical SEO) -- build a validation script.

---

## Technical Debt Patterns

| Shortcut | Immediate Benefit | Long-term Cost | When Acceptable |
|----------|-------------------|----------------|-----------------|
| Copying location pages with city-name swaps | Fast coverage of all cities | Doorway page classification, site-wide ranking suppression | Never -- each page must be genuinely unique |
| Keeping all 496 pages from WordPress migration | No broken links, no redirect work | 22% thin content drags down entire site via Helpful Content classifier | Never for thin pages -- prune or expand immediately |
| Using `keywords` meta tag | Feels like "doing SEO" | Signals outdated tactics to Google, wastes developer time | Never -- Google has ignored this tag since 2009 |
| Stock photos instead of project photos | Faster page creation | Fails E-E-A-T signals, looks generic to users and Google | Early MVP only, replace within 30 days |
| AI-generated blog content without editing | Volume at scale | Helpful Content classifier suppression, zero conversion value | Never without substantial human expert editing and E-E-A-T additions |

## Integration Gotchas

| Integration | Common Mistake | Correct Approach |
|-------------|----------------|------------------|
| Google Business Profile | Setting primary category to generic "Construction Company" | Use most specific category: "General Contractor" or "Commercial Construction Company" |
| Google Search Console | Submitting sitemap and never checking back | Weekly monitoring of coverage issues, especially "Crawled - currently not indexed" |
| Schema Markup | Adding AggregateRating without visible reviews on page | Only add rating schema when reviews are actually displayed |
| Google Analytics | Tracking pageviews but not conversions | Set up goal tracking for phone clicks, form submissions, and driving directions clicks |
| Citation Sources | Creating listings and abandoning them | Citations with wrong info are worse than no citation -- audit quarterly |
| HighLevel Forms | Form exists but no lead routing/notification | Verify form submissions actually reach someone who responds within 1 hour |

## Performance Traps

| Trap | Symptoms | Prevention | When It Breaks |
|------|----------|------------|----------------|
| 496 pages in sitemap with many low-quality | Crawl budget waste, slow indexing of new pages | Prune sitemap to quality pages only, use noindex for thin pages | Immediately -- crawl budget is already strained |
| Large hero images on every page | Core Web Vitals failure, high LCP | Next.js Image optimization, WebP/AVIF, lazy loading below fold | Already an issue if images are unoptimized |
| Client-side rendering for content | Google sees empty page initially, poor indexation | Static generation (already using `output: "export"`) -- verify all content is in HTML source | Not applicable if static export works correctly |
| Too many internal links per page | Diluted link equity, "link farm" appearance | Maximum 100 internal links per page, prioritize relevance | At 496 pages, any page linking to "related" pages could hit this |

## UX Pitfalls

| Pitfall | User Impact | Better Approach |
|---------|-------------|-----------------|
| Location pages with no local content | User in Clearwater lands on a page that could be about any city | Include local project photos, local code info, driving directions, neighborhood names |
| Generic CTAs ("Contact Us") | Low conversion -- user does not know what happens next | Specific CTAs: "Get a Free SB4-D Compliance Assessment" or "Schedule a Milestone Inspection Consultation" |
| No visible phone number on mobile | Mobile users cannot call easily -- construction buyers often call from job sites | Sticky phone CTA on mobile, phone in header |
| Blog posts with no next step | User reads article and bounces | Every blog post ends with a relevant service page link and CTA |
| Form without trust signals | User hesitates to submit personal info to unknown company | Show license number, years in business, and review count near form |

## "Looks Done But Isn't" Checklist

- [ ] **Canonical URLs:** Every page has one, and they all point to `https://floridaconstructionspecialists.com/` (not `www.`, not `http://`). Currently set on most pages but verify no conflicts.
- [ ] **301 Redirects from WordPress:** All old WordPress URLs that had backlinks redirect to equivalent new pages. Check Google Search Console for 404s.
- [ ] **robots.txt:** Confirm it exists, allows Googlebot, and points to sitemap. Not blocking any important pages.
- [ ] **XML Sitemap:** Contains only pages you want indexed. Does NOT contain thin pages, off-topic pages, or redirected URLs.
- [ ] **GBP Website URL:** Points to the new domain/homepage, not the old WordPress URL or a staging URL.
- [ ] **Noindex on Thin Pages:** Pages under 300 words either expanded or set to `noindex` so they do not drag down site quality.
- [ ] **Hreflang/Language:** Not needed for English-only US site, but verify no accidental hreflang tags from WordPress migration.
- [ ] **OpenGraph Images:** Present on key pages for social sharing. Many FCS pages lack OpenGraph metadata entirely.
- [ ] **Mobile Responsiveness:** All 496 pages render correctly on mobile. Batch test, do not assume.
- [ ] **Internal Link Integrity:** No broken internal links across 496 pages. One broken link can cascade to poor user signals.

## Recovery Strategies

| Pitfall | Recovery Cost | Recovery Steps |
|---------|---------------|----------------|
| Doorway page classification | HIGH (3-6 months) | Consolidate to unique location pages, submit reconsideration, wait for re-crawl |
| Helpful Content classifier suppression | HIGH (3-9 months) | Prune thin content, improve remaining content quality, classifier recovery is slow and not tied to specific update cycles |
| Keyword cannibalization | MEDIUM (1-2 months) | Build keyword map, consolidate competing pages via 301 redirects, resubmit sitemap |
| NAP inconsistency | LOW (2-4 weeks) | Audit all citations, submit corrections, update on-site NAP |
| Off-topic content dilution | LOW (1 week) | Remove/noindex off-topic pages, resubmit sitemap |
| Schema markup spam | LOW (2-4 weeks) | Fix schema violations, submit reconsideration through Search Console |
| Missing E-E-A-T signals | MEDIUM (2-3 months) | Add author bios, project photos, credential references -- requires real content, not boilerplate |

## Pitfall-to-Phase Mapping

| Pitfall | Prevention Phase | Verification |
|---------|------------------|--------------|
| Doorway pages (location pages) | Phase 1: Content Audit | Diff test: no two location pages share >40% content |
| Thin content / Helpful Content | Phase 1: Content Audit, Phase 2: Content Expansion | Zero pages under 300 words in sitemap; <5% under 500 words |
| Keyword cannibalization | Phase 1: Content Audit | Keyword-to-URL map complete; no primary keyword shared by 2+ pages |
| Off-topic content | Phase 1: Content Audit | Every indexed page relates to construction services |
| Meta description issues | Phase 2: Technical SEO | All descriptions 150-160 chars; `keywords` meta tag removed |
| NAP inconsistency | Phase 2: Technical SEO + Phase 3: Off-Site | NAP audit passes across all citation sources |
| AI content / E-E-A-T | Phase 3: Content Enhancement | Every page has author attribution and first-hand experience signals |
| Schema over-reach | Phase 2: Technical SEO | Schema audit passes Google Rich Results Test on all page types |
| GBP optimization | Phase 1: Audit, Phase 3: Off-Site | GBP fully populated, weekly posts active, review velocity >2/month |
| Internal linking | Phase 2: Technical SEO | No orphan pages; service pages have >10 internal links |
| WordPress URL legacy | Phase 1: Content Audit | Zero 404s in Search Console from old WordPress URLs |
| Tampa over-targeting | Phase 2: Content Strategy | Ruskin page is top-5 strongest page on site |
| Social profiles | Phase 3: Off-Site | All social links populated and active |
| Review strategy | Phase 3: Off-Site | On-site testimonials + GBP review velocity increasing |
| Deploy validation | Phase 2: Technical SEO | Pre-deploy script catches missing meta tags and broken links |

## Sources

- [Google Structured Data Policies](https://developers.google.com/search/docs/appearance/structured-data/sd-policies) - Official guidelines on schema markup (HIGH confidence)
- [Google LocalBusiness Structured Data](https://developers.google.com/search/docs/appearance/structured-data/local-business) - Required schema properties (HIGH confidence)
- [Google Search AI Content Guidance](https://developers.google.com/search/blog/2023/02/google-search-and-ai-content) - Official stance on AI content (HIGH confidence)
- [Google Helpful Content Update - Search Engine Land](https://searchengineland.com/library/platforms/google/google-algorithm-updates/helpful-content-update) - Classifier behavior documentation (HIGH confidence)
- [Google Doorway Pages Policy](https://www.imarkinfotech.com/what-are-doorway-pages-why-google-penalizes-them/) - Doorway page classification (MEDIUM confidence)
- [Sterling Sky - Location Pages SEO](https://www.sterlingsky.ca/location-pages-seo-multi-location-businesses/) - Multi-location page best practices (MEDIUM confidence)
- [Search Engine Journal - Duplicate Content in Local SEO](https://www.searchenginejournal.com/when-is-duplicate-content-acceptable-for-local-seo-google-explains/519562/) - Google's clarification on location page duplication (MEDIUM confidence)
- [Search Engine Land - Service Area Pages](https://searchengineland.com/guide/service-area-pages) - Best practices for service area businesses (MEDIUM confidence)
- [BrightLocal - Local Ranking Factors](https://www.brightlocal.com/learn/google-local-algorithm-and-ranking-factors/) - 2026 local ranking factor survey (MEDIUM confidence)
- [Contractor Growth Network - Helpful Content for Contractors](https://www.contractorgrowthnetwork.com/google-helpful-content-algorithm-update/) - Construction-specific HCU impact (MEDIUM confidence)
- [Hook Agency - Contractor SEO Mistakes 2025](https://hookagency.com/blog/contractor-seo-mistakes-2025/) - Industry-specific pitfalls (MEDIUM confidence)
- [Google December 2025 Core Update](https://almcorp.com/blog/google-december-2025-core-update-complete-guide/) - Latest algorithm update details (MEDIUM confidence)
- [Semrush - AI Content Penalties](https://www.semrush.com/blog/does-google-penalize-ai-content/) - AI content research data (MEDIUM confidence)

---
*Pitfalls research for: Local SEO for commercial construction contractor (Tampa Bay)*
*Researched: 2026-02-15*
