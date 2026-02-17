# Phase 5: Location Page Strengthening - Context

**Gathered:** 2026-02-16
**Status:** Ready for planning

<domain>
## Phase Boundary

Make all 72 service+location pages genuinely unique money pages with city-specific content that passes the doorway page test and ranks for "[service] [city]" queries. Replace generateLocationFAQs() with hand-written unique FAQ content per page. Ensure no two pages share more than 40% content.

</domain>

<decisions>
## Implementation Decisions

### City-specific content sourcing
- AI research per city during the research phase — Claude researches each city's building department, permit info, neighborhoods, weather patterns, and commercial landmarks
- No user-provided city data; researcher handles all city-specific fact gathering
- Reference real FCS projects in cities when available — specific project types and scopes, not generic presence language
- Consistent FCS brand voice across all cities — same professional tone, city-specific facts swapped in (no city-flavored voice variations)

### Local detail depth
- Building departments: department name + link only — avoid stale phone numbers, fee ranges, or official names that change
- Weather patterns: tie local climate to services — "Tampa's hurricane exposure means..." connecting weather to why they need FCS
- Neighborhoods: include subdivisions — go deeper than major areas, include specific HOA communities, condo complexes, business parks
- Landmarks: reference commercial landmarks only — well-known commercial buildings, business districts, and developments (not stadiums/parks)
- No city-to-building-type specialization — FCS does all building types everywhere, no artificial associations

### Page structure & sections
- Section order and structure: Claude's discretion — choose between service-first, city-first, or problem-first based on what works best
- FAQs: 5-6 fully unique FAQs per page — specific to each service+city combo, replacing generateLocationFAQs() entirely
- Visual breaks: parallax image section mid-page (similar to insurance hub pattern), using existing site images
- Neighborhoods: woven naturally into content throughout the page, not a dedicated "Areas We Serve" section

### Content differentiation approach
- Differentiation strategy: Claude's discretion — decide which sections carry the differentiation burden (city details, FAQs, service angles, or all)
- Every city researched and written fully independently — no geographic grouping or shared-angle content for similar cities
- No sample review step — batch all 72 pages in one pass, trust the approach
- Content architecture: Claude's discretion — decide whether content stays inline in page.tsx files or moves to data files + template

### City tier treatment
- **Tampa (flagship):** 2,000+ words — most neighborhoods, most detail, strongest pages on the site
- **Ruskin (lighter):** ~800-1,000 words — limited commercial activity, residential area where owners live, not a commercial hub
- **All other cities:** 1,500+ words standard treatment — full depth, full city research
- Ruskin is the only city getting lighter treatment

### Claude's Discretion
- Page section order and structure
- Which sections drive the <40% overlap target
- Content architecture (inline vs. data-driven)
- Exact parallax image selection per page
- How to handle cities with limited research data

</decisions>

<specifics>
## Specific Ideas

- Tampa pages should be the strongest on the site — it's the metro center and highest-volume market for FCS
- Ruskin is just the registered address (owner's residential area) — don't force commercial content that doesn't exist there
- Neighborhood mentions should include subdivisions, HOA communities, and business parks — not just major district names
- Commercial landmarks referenced should be relevant to FCS's work (commercial buildings, developments) not general landmarks

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>

---

*Phase: 05-location-page-strengthening*
*Context gathered: 2026-02-16*
