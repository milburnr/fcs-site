# Audit fixes — items that need your call

Generated 2026-04-30 from `AUDIT-TODO-2026-04-30.md`.

Everything in this file was **left untouched** because it would either remove a feature, change editorial content beyond a title/length trim, or required a judgment call I didn't want to make for you. Each section explains the issue in plain English with a specific suggested action.

---

## 1. Duplicate "legal" pages — pick one

There are two privacy pages and two terms pages in the build, with slightly different content:

| URL | Indexable? | What's on it |
|-----|-----------|--------------|
| `/privacy/` | No (noindex) | Older privacy policy |
| `/privacy-policy/` | No (noindex) | Newer/longer privacy policy |
| `/terms/` | No (noindex) | Older terms |
| `/terms-and-conditions/` | **Yes** | Newer terms |

Why this matters: having two of each is harmless but messy. Search engines won't index `/privacy/` or `/terms/` because they're noindexed. Only `/terms-and-conditions/` gets indexed.

**What I changed:** the footer now links to `/privacy-policy/` and `/terms-and-conditions/` (the longer slugs).

**Decision needed:** keep both pairs, or delete the older `/privacy/` and `/terms/` pages? If we delete, I'd add 301 redirects to the surviving URL so any old bookmarks still work.

---

## 2. Duplicate "team" pages — same content, two URLs

Both pages exist and both are indexable:
- `/team/` — "The Team Behind Tampa Bay's Premier Construction"
- `/team-members/` — "The People Behind Every Successful Project"

Same idea, different copy. Google considers this duplicate content even though the words differ.

**What I changed:** the footer now links to `/team/` only (more concise URL).

**Decision needed:** which one is the "real" team page? The other should 301 to it.

---

## 3. Hub pages that exist but redirect away

These pages are built into the site but every visitor is redirected to a different page:

| Built page | Redirects to | Probably intent |
|-----------|-------------|-----------------|
| `/building-consultants/` | `/commercial/` | absorbed into commercial hub |
| `/certified-estimates/` | `/commercial/` | absorbed into commercial hub |
| `/engineering/` | `/commercial/` | absorbed into commercial hub |
| `/expert-witness/` | `/other-services/` | moved into other-services |
| `/services/` | `/commercial/` | old navigation entry |

These show up in the audit as "orphan pages" — pages that exist but nobody links to them. They're functionally fine because the redirect intercepts before anyone reaches the static page, but they're dead code in `app/`.

**Decision needed:** delete the source files in `app/{slug}/page.tsx` to keep the codebase clean? The redirects would continue to work. Not a user-facing change.

---

## 4. Article hero images on R2 — local copies optimized but R2 still has the originals

I re-encoded 11 article hero PNGs in `public/images/articles/` from ~2 MB PNGs down to ~150 KB WebPs (78–93% smaller per file). The MDX files now reference the .webp versions.

**Why this matters for production:** Netlify proxies `/images/*` to R2. When a request comes in, Netlify checks if the file exists locally first (in the build output) — if yes, it serves locally; if no, it proxies to R2. So the new .webp files **will work in production** because they're in `out/images/articles/` from the build.

**Optional follow-up:** to be belt-and-suspenders safe (and for any direct-link traffic), upload the new WebPs to R2:

```bash
for f in public/images/articles/*.webp; do
  name=$(basename "$f")
  wrangler r2 object put fcs-gallery/images/articles/$name --file=$f --remote
done
```

That's optional. The current state works.

---

## 5. 4 image references that production now serves but my discovery script flags as broken

These are paths the rendered HTML asks for that don't exist on R2:

- `/wp-content/uploads/2024/01/9999.jpg`
- `/wp-content/uploads/2023/12/Old/istockphoto-1053758464-612x612-1.jpg`
- `/wp-content/uploads/2024/01/6.4.jpg`
- `/wp-content/uploads/2024/01/j4.jpeg`

**What I did:** added specific entries to `public/_redirects` that rewrite each of these dead WP paths to a working optimized R2 image. So in production these requests will succeed (Netlify will rewrite them before they hit R2). My discovery script doesn't follow `_redirects` rules so it still reports them as broken; that's a discovery-script limitation, not a real bug.

**Decision needed (optional):** want me to also update the source MDX/lib references to use the working `/images/...` paths directly? It would clean up the `_redirects` file but is purely cosmetic.

---

## 6. Pages that are "thinly linked" — only one internal link points to them (L4)

125 indexable pages have exactly one internal link pointing to them. Down from 148 in the audit, but still a lot. These are mostly long-tail pages like service-location combos and old article URLs.

**Why it matters:** Google de-prioritizes pages with weak internal link signals. Adding "related articles" or "related services" sections to relevant hubs would lift these pages.

**Why I didn't auto-fix:** picking the *right* internal links to add is editorial — adding the wrong ones creates link spam. Manual or semi-automated review needed.

**Suggested next step:** let me run a topic-similarity script that proposes related-article matches for each thin page; you review/approve in batches.

---

## 7. Pages too big (B3 — Ahrefs marked them as "timed out")

9 pages have HTML output >500KB and may be slow to render:

- `/balcony-reconstruction/`
- `/commercial/condo-remediation/`
- `/commercial/guides/`
- `/commercial/historic-restoration/`
- `/disaster-recovery/`
- `/multi-family-construction/`
- `/other-services/`
- `/condo-remediation-tampa/`
- `/multi-family-construction-tampa/`

Most are probably big because they include large lists of related articles + JSON-LD schema. Not catastrophic — your PageSpeed score is still high — but worth investigating for the 8 pages Ahrefs actually couldn't load in 30s.

**Why I didn't auto-fix:** "size" is not the same as "timeout." A timeout could be a slow third-party script (chat widget, GTM) or a broken embed. Need to load each page in a real browser and watch the network panel.

**Suggested next step:** I can write a Playwright-based script that loads each page, waits for network idle, and reports anything that's slow or failed. Want that as a follow-up?

---

## 8. Title and meta description rewrites I made (FYI, not requiring approval — but let me know if you want any reverted)

For each, the old version was over Google's truncation limit. I trimmed while keeping the keyword.

**Article titles trimmed:**

| File | Old | New |
|------|-----|-----|
| `concrete-restore.mdx` | What Is Concrete Restore? A Guide for Tampa Bay Property Owners | What Is Concrete Restore? A Tampa Bay Guide |
| `repairing-stucco.mdx` | What Is Repairing Stucco? A Guide to the Process, Materials, and What to Expect | Repairing Stucco: Process, Materials & What to Expect |
| `what-to-know-about-stucco-repair-tampa.mdx` | Stucco Repair in Tampa: What Florida Homeowners Need to Know | Stucco Repair in Tampa: A Homeowner's Guide |
| `commercial-general-contractors-near-me-tampa.mdx` | How to Find Commercial General Contractors Near You in Tampa, FL | Commercial General Contractors Near You in Tampa, FL |
| `concrete-statue-restoration.mdx` | What Is Concrete Statue Restoration? A Guide for Tampa Bay Property Owners | What Is Concrete Statue Restoration? A Tampa Bay Guide |
| `exterior-stucco-repair-near-me-tampa.mdx` | Exterior Stucco Repair Near Me — Tampa Bay Homeowners Guide | Exterior Stucco Repair Near Me — Tampa Guide |
| `modern-construction.mdx` | What Is Modern Construction? Methods, Materials, and What Owners Should Expect | What Is Modern Construction? Methods & Expectations |
| `stucco-repair-diy-tampa.mdx` | What Tampa Homeowners Should Know About DIY Stucco Repair | DIY Stucco Repair: What Tampa Homeowners Should Know |
| `stucco-repair-tampa.mdx` | What Tampa Property Owners Should Know About Stucco Repair | Stucco Repair: What Tampa Property Owners Should Know |
| `tenant-improvement-contractors-near-me-tampa.mdx` | How to Find Tenant Improvement Contractors Near Me in Tampa | Tenant Improvement Contractors Near Me in Tampa |
| `eifs-stucco-repair-tampa.mdx` | What Is EIFS Stucco Repair? A Tampa Property Owner's Guide | EIFS Stucco Repair: A Tampa Property Owner's Guide |

**Page titles trimmed:**

| File | Old | New |
|------|-----|-----|
| `app/insurance/page.tsx` | Insurance Restoration Tampa \| Licensed GC & Claims Support | Insurance Restoration Tampa \| Licensed GC |
| `app/gallery/race-track/page.tsx` | Tampa Motor Enclave – Private Garage Buildout \| Gallery | Tampa Motor Enclave – Private Garage Buildout |

**Meta descriptions trimmed (>160 chars → ≤160):**

| File | Trimmed |
|------|---------|
| `concrete-restore.mdx` | "Concrete restore repairs, resurfaces, and protects deteriorated concrete. Learn what's involved and when your Tampa Bay property needs it." |
| `concrete-statue-restoration.mdx` | "Concrete statue restoration repairs cracked, spalled, and discolored ornamental figures. Learn the process and when to call a pro." |
