# FCS Audit Fix Plan — 2026-04-30

Source: `AUDIT-TODO-2026-04-30.md` (Ahrefs crawl, 29 issue categories)
Strategy: discover real URL lists from local `out/` build + R2 HEAD checks, then auto-fix everything safe. Surface anything that would remove features or pages for human decision.

## Guardrails (per user)
- **Never remove images, automations, or features.**
- Every change must enhance the site or keep it functionally identical.
- Anything destructive → goes to `DISCUSSION-LIST.md` for the user to review.

## Phases

### Phase 1 — Discovery (build a master findings file)
Single Node script (`scripts/audit-discover.mjs`) that produces `audit-findings.json`:
- Parse `out/` HTML for every `<img src>`, every `<a href>` internal link, every JSON-LD `<script>`, plus `<title>` and `<meta name="description">` and `<link rel="canonical">`
- Verify each image src (R2 HEAD or local file)
- Verify each internal link resolves to a built page or `_redirects`/`netlify.toml` redirect
- Cross-check sitemap entries against canonical tags + noindex meta
- Detect orphan pages (built but never linked)
- Detect redirect chains in `_redirects` + `netlify.toml`
- Detect over-long titles, short/long meta descriptions, missing alt text
- Validate JSON-LD shape against Google's required fields for the schema types in use

Output: `audit-findings.json` keyed by issue code (A1, A2, …, L14).

### Phase 2 — Auto-fix wave (safe, idempotent, no removal)

| Code | Fix | Approach |
|------|-----|----------|
| A1/A2 | Broken images | Inspect missing R2 keys. If a sibling exists (same folder, near-name) swap to it. If no sibling exists → flag in DISCUSSION. Never strip the `<img>` tag. |
| A3 | Oversized images | Re-encode AVIF/WebP via sharp; upload to R2 if local original exists; record action. |
| B1/B2/B4/B5 | 404 pages | For each broken target URL: if a canonical/redirect target exists in `redirects.json` or by similarity, add a 301 to `netlify.toml`. If a real page exists at a near slug, add 301. If neither → DISCUSSION. |
| B3 | Timed-out pages | Inspect built HTML size, hero image size, any client-only heavy widgets. Surface findings. |
| C1 | Non-canonical in sitemap | Run `generate-sitemap.js` after Phase 2 fixes. Add canonical-vs-loc check inside generator (refuses to emit any URL whose page declares a different canonical). |
| C3 | Noindex in sitemap | Generator already filters; just regenerate. |
| D1/D2 | Orphan pages | Add internal links from logical parent (service hub, location hub). Never delete. |
| L1 | Title too long | Trim brand suffix to fit ≤60 chars; preserve keyword. Edit each affected `page.tsx` `metadata.title`. |
| L2/L3 | Links to redirect | Build redirect map → run codemod that rewrites internal links to final URL. |
| L8 | Redirect chain | Walk `_redirects` + `netlify.toml`, collapse multi-hop chains to single hop. |
| L11 | Meta description too long | Truncate cleanly to ≤160 chars at sentence boundary. |
| L14 | Schema validation errors | Identify which schema template / required field is missing, patch component. |
| M1 | Missing alt text | Use `lib/image-map.json` AI alt mapping; for unmapped, generate from filename heuristic + folder context. |
| M2 / L12 | Meta description too short | Surface for editorial — don't auto-write copy. |
| L9/L10 | Noindex inventory | Surface for review. |
| L13 | IndexNow | Skip unless requested. |
| L6/L7 | Redirect inventory | No action (informational). |

### Phase 3 — Verify
- Re-run discovery script → fewer findings
- `npm run test:build` (existing build verifier)
- `npm run test:silos`
- Build (`npm run build`) and inspect `out/` for residual issues
- Regenerate sitemap

### Phase 4 — Report
- Update `AUDIT-FIX-PLAN.md` with actual counts before/after
- `DISCUSSION-LIST.md` with anything that needs Rich's call

## Order of execution
1. Discovery script
2. Sitemap fixes (C1, C3) — quick wins, no risk
3. Redirect chain collapse (L8) + redirect map build
4. Internal-link rewrites (L2, L3)
5. Broken-image triage (A1, A2, A3)
6. 404 sweep (B1/B2/B4/B5)
7. Title trim (L1)
8. Meta description trim (L11)
9. Alt text (M1)
10. Orphan link injection (D1/D2)
11. Schema fix (L14)
12. Re-build, regenerate sitemap, re-discover
13. Write DISCUSSION-LIST.md
