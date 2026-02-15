# Coding Conventions

**Analysis Date:** 2026-02-15

## Naming Patterns

**Files:**
- Page components: `kebab-case` with `.tsx` extension (e.g., `app/about/page.tsx`, `app/commercial-property-damage-restoration-in-tampa/page.tsx`)
- Component files: PascalCase with `.tsx` extension (e.g., `components/Header.tsx`, `components/OptimizedImage.tsx`)
- Utility/library files: camelCase with `.ts` extension (e.g., `lib/constants.ts`, `lib/utils.ts`, `lib/theme.ts`)
- Script files: camelCase with `.js` extension (e.g., `scripts/verify-build.js`, `scripts/verify-silos.js`)

**Functions:**
- React components: PascalCase (e.g., `export default function Header()`, `export function FAQ()`)
- Utility functions: camelCase (e.g., `getSizeVariant()`, `extractInternalLinks()`, `checkLinkBleed()`)
- Helper functions: camelCase, prefixed with verb (e.g., `getSiloFromPath()`, `getOptimizedBgUrl()`)

**Variables:**
- Constants (exported): UPPER_SNAKE_CASE (e.g., `export const BUSINESS_INFO`, `export const SERVICES`, `export const NAV_ITEMS`)
- Local variables: camelCase (e.g., `const mobileMenuOpen`, `const scrolled`, `const imageEntry`)
- State variables: camelCase (e.g., `const [openIndex, setOpenIndex] = useState()`)
- Booleans: Prefix with `is` or `has` (e.g., `isOpen`, `hasOptimizedVersion()`)

**Types:**
- Interface names: PascalCase, suffixed with `Props` for component props (e.g., `OptimizedImageProps`, `FAQProps`, `LocalBusinessSchemaProps`)
- Interface names: PascalCase without suffix for data models (e.g., `SizeVariant`, `ImageMapEntry`, `FAQItem`)
- Type unions: PascalCase when used as types (e.g., `schemaType?: "GeneralContractor" | "HomeAndConstructionBusiness"`)

## Code Style

**Formatting:**
- Prettier is NOT explicitly configured; Next.js default formatter applies
- Line length: No explicit limit, but keep reasonable (80-120 chars)
- Indentation: 2 spaces (default for TypeScript/React)
- Trailing commas: Present in multiline objects/arrays

**Linting:**
- Next.js built-in ESLint runs via `npm run lint`
- No custom ESLint config file (uses Next.js defaults)
- Ignores: `node_modules/`, `.next/`, `out/`, `dist/`
- Disable specific rules inline using `// eslint-disable-next-line @typescript-eslint/no-explicit-any` (e.g., in `OptimizedImage.tsx` line 22)

**TypeScript Strict Mode:**
- `strict: true` in `tsconfig.json`
- No implicit `any` without explicit escape (see `OptimizedImage.tsx` line 23 for example)
- All React imports typed with `React.ReactNode` for children props

## Import Organization

**Order:**
1. External library imports (`next/`, `react/`, third-party packages)
2. Type imports (e.g., `import type { Metadata } from "next"`)
3. Relative imports (components, utilities, data)
4. Component-scoped data/constants

**Example from `app/about/page.tsx`:**
```typescript
import Link from "next/link";
import { Phone, CheckCircle, Building2, ... } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { LocalBusinessSchema, ... } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";
```

**Path Aliases:**
- `@/*` maps to project root (configured in `tsconfig.json`)
- Used consistently throughout: `@/components/`, `@/lib/`, never relative imports across directories

**"use client" Directive:**
- Client components have `"use client"` at top of file (e.g., `Header.tsx`, `OptimizedImage.tsx`, `FAQ.tsx`)
- Server components (pages, layout) omit the directive
- Used only when state, event handlers, or hooks are required

## Error Handling

**Patterns:**
- Script verification: Pass/fail pattern with `results` object tracking (see `scripts/verify-build.js`)
  ```javascript
  const results = {
    passed: [],
    failed: [],
  };

  function pass(test) {
    results.passed.push(test);
    console.log(`✅ ${test}`);
  }

  function fail(test, reason) {
    results.failed.push({ test, reason });
    console.log(`❌ ${test}: ${reason}`);
  }
  ```

- Component error handling: Fallback patterns
  ```typescript
  // If optimized version doesn't exist, fall back to original
  if (!imageEntry) {
    return <img src={src} alt={alt || ""} {...props} />;
  }
  ```

- Process exit codes: `process.exit(0)` for success, `process.exit(1)` for failure in scripts
- Validation: Early returns with descriptive error messages before proceeding with logic

## Logging

**Framework:** Native `console` object

**Patterns:**
- Use emoji prefixes for clarity:
  - `✅` for pass/success
  - `❌` for fail/error
  - `⚠️` for warnings
  - `🔍` for analysis/check
  - `📄` for file counts/info
- Scripts use `console.log()` with formatted sections using `─` dividers
- Avoid logging in React components; reserve for scripts and build-time operations

**Example from `verify-silos.js`:**
```javascript
console.log('🔍 Verifying Silo Integrity...\n');
console.log('--- Required Pages ---');
console.log('\n========================================');
console.log(`✅ Passed: ${results.passed.length}`);
```

## Comments

**When to Comment:**
- Complex algorithms (e.g., silo detection logic in `verify-silos.js`)
- Non-obvious business logic (e.g., schema type matching for commercial vs. residential)
- Section headers for organization
- Edge case handling explanations

**JSDoc/TSDoc:**
- Used for exported functions and components
- Includes purpose, usage, and example (see `OptimizedImage.tsx` lines 68-77)
- Format:
  ```typescript
  /**
   * OptimizedImage Component
   *
   * Renders optimized images with AVIF/WebP/JPG fallbacks and responsive srcsets.
   * Automatically maps old wp-content paths to optimized versions.
   *
   * Usage:
   * <OptimizedImage src="/wp-content/uploads/2023/12/custom-home-1.png" />
   */
  ```

## Function Design

**Size:** Aim for single responsibility; split into helpers if > 50 lines
- Example: `getSizeVariant()` (20 lines) handles single concern of looking up image sizes
- Page components can be larger due to schema/metadata inclusion

**Parameters:**
- Component props via destructured interface (e.g., `OptimizedImageProps`)
- Multiple parameters grouped in objects/interfaces, not as separate params
- Optional parameters clearly marked in interface with `?`

**Return Values:**
- React components return JSX
- Utility functions return typed values (not `any` without escape)
- Fallback returns handled explicitly (see OptimizedImage fallback to original src)

## Module Design

**Exports:**
- Default export for page components and main React components (e.g., `export default function Header()`)
- Named exports for utility functions and helpers (e.g., `export function getOptimizedBgUrl()`)
- Mixed when component has utilities (e.g., `OptimizedImage.tsx` exports component as default + utility functions as named)

**Barrel Files:**
- Not used; imports are direct from component files
- Favors explicit imports over index aggregation

**Component Composition:**
- Smaller sub-components defined within file as separate functions (e.g., `FAQAccordion()` inside `FAQ.tsx`)
- Props passed explicitly; no implicit context leakage
- Schema components alongside UI (e.g., `FAQSchema()` exported from `FAQ.tsx`)

## CSS & Styling

**Approach:** Tailwind CSS utility-first with centralized component classes

**Component Classes:**
- Defined in `app/globals.css` under `@layer components`
- Examples from globals.css:
  - `.btn-primary` - Primary call-to-action button with green + shadow
  - `.btn-cta` - CTA button with gold styling
  - `.card` - Base card with elevated shadow
  - `.card-hover` - Card with hover elevation effect
  - `.service-card` - Card with bottom accent bar on hover
  - `.card-feature` - Feature grid card with top gradient border
  - `.section` - Standard section spacing

**Color System:**
- Defined in `lib/theme.ts` for centralized control
- Extended in `tailwind.config.ts` as brand colors (green, gold variants)
- Applied via Tailwind classes: `bg-brand-green`, `text-brand-gold`, etc.

**Inline Styles:**
- Minimal use; reserved for dynamic values or gradients
- Example from `Header.tsx`: `style={{ background: 'linear-gradient(135deg, #daa520 0%, #b8860b 100%)' }}`
- Prefer Tailwind when static

## State Management

**React Hooks:**
- `useState()` for local component state (e.g., `mobileMenuOpen`, `openIndex`)
- No Redux/Zustand; Next.js static export requires client-side state only
- Props passed down explicitly; no context usage observed

**Patterns:**
- Toggle patterns: `[isOpen, setIsOpen] = useState(false)` with `onClick={() => setIsOpen(!isOpen)}`
- Array index patterns: `[openIndex, setOpenIndex] = useState<number | null>(0)` for accordion tracking

## TypeScript

**Type Safety:**
- `strict: true` enforced
- Explicit type annotations for function parameters and returns
- Interface definitions for all component props and data structures

**Generic Constraints:**
- Used sparingly; schema functions take generic `Record<string, unknown>` for flexibility
- Example: `interface ImageMapEntry { ... }` defines contract for image metadata

## Vendor-Specific Conventions

**Next.js:**
- App Router patterns: `app/` directory with `page.tsx` files
- `layout.tsx` at root for global structure
- `next.config.ts` for configuration
- `metadata` exported from page components (static export compatible)
- Font loading via `next/font` in layout (no external font CDN)

**Tailwind CSS:**
- Utility classes preferred; component classes for reusables
- Custom colors via theme config
- Responsive prefixes: `md:`, `lg:` for breakpoints

**Radix UI:**
- Accordion component for FAQ sections via `@radix-ui/react-accordion`
- Tabs via `@radix-ui/react-tabs` (if used)
- Direct component imports; no barrel aggregation

---

*Convention analysis: 2026-02-15*
