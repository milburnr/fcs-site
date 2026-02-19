#!/usr/bin/env node
/**
 * replace-guide-ctas.js
 *
 * Replaces inline green CTA banner sections in guide pages with the
 * GuideCTA component. Only replaces the LAST bg-brand-green section
 * in each file (the bottom CTA), preserving mid-content callouts.
 *
 * Usage:
 *   node scripts/replace-guide-ctas.js --silo commercial
 *   node scripts/replace-guide-ctas.js --silo insurance --dry-run
 *   node scripts/replace-guide-ctas.js --silo residential
 *   node scripts/replace-guide-ctas.js --silo sb4d
 */

const fs = require("fs");
const path = require("path");

// Parse CLI args
const args = process.argv.slice(2);
const siloIdx = args.indexOf("--silo");
const silo = siloIdx !== -1 ? args[siloIdx + 1] : null;
const dryRun = args.includes("--dry-run");

if (!silo || !["commercial", "residential", "insurance", "sb4d"].includes(silo)) {
  console.error("Usage: node scripts/replace-guide-ctas.js --silo <commercial|residential|insurance|sb4d> [--dry-run]");
  process.exit(1);
}

const GENERIC_HEADINGS = [
  "Ready to Get Started?",
  "Ready to Start Your Commercial Project?",
  "Ready to Build Your Dream Home?",
  "Get Your Free Estimate",
  "Get Free Estimate",
  "Contact Us Today",
  "Let's Get Started",
  "Need Expert Help?",
  "Need Insurance Restoration Help?",
  "Get Your SB 4-D Compliance Assessment",
  "Schedule Your Free Consultation",
];

function isGenericHeading(heading) {
  const normalized = heading.trim().replace(/&apos;/g, "'").replace(/&amp;/g, "&");
  if (GENERIC_HEADINGS.some(g => g.toLowerCase() === normalized.toLowerCase())) {
    return true;
  }
  return false;
}

function findLastGreenSection(content) {
  // Find all <section> blocks with bg-brand-green in className
  const sectionPattern = /<section[^>]*bg-brand-green[^>]*>/g;
  const matches = [];
  let match;
  while ((match = sectionPattern.exec(content)) !== null) {
    matches.push(match);
  }

  if (matches.length === 0) return null;

  // Take the last match
  const lastMatch = matches[matches.length - 1];
  const startIdx = lastMatch.index;

  // Find the matching </section> by counting nested sections
  let depth = 1;
  let searchIdx = startIdx + lastMatch[0].length;
  while (depth > 0 && searchIdx < content.length) {
    const nextOpen = content.indexOf("<section", searchIdx);
    const nextClose = content.indexOf("</section>", searchIdx);

    if (nextClose === -1) break;

    if (nextOpen !== -1 && nextOpen < nextClose) {
      depth++;
      searchIdx = nextOpen + 8;
    } else {
      depth--;
      if (depth === 0) {
        const endIdx = nextClose + "</section>".length;
        return {
          start: startIdx,
          end: endIdx,
          text: content.substring(startIdx, endIdx),
        };
      }
      searchIdx = nextClose + "</section>".length;
    }
  }

  return null;
}

function extractHeading(sectionText) {
  const h2Match = sectionText.match(/<h2[^>]*>([\s\S]*?)<\/h2>/);
  if (!h2Match) return null;
  return h2Match[1].replace(/<[^>]+>/g, "").trim();
}

function processFile(filePath, silo, dryRun) {
  let content = fs.readFileSync(filePath, "utf-8");

  // Skip if already using GuideCTA
  if (content.includes("GuideCTA")) {
    return { status: "skipped", reason: "already has GuideCTA" };
  }

  const greenSection = findLastGreenSection(content);
  if (!greenSection) {
    return { status: "skipped", reason: "no bg-brand-green section found" };
  }

  // Verify this looks like a CTA section (has Link to /contact/ or btn-cta or tel: link)
  if (!greenSection.text.includes("/contact/") && !greenSection.text.includes("btn-cta") && !greenSection.text.includes("tel:")) {
    return { status: "skipped", reason: "green section doesn't look like a CTA" };
  }

  const heading = extractHeading(greenSection.text);
  const isGeneric = heading ? isGenericHeading(heading) : true;

  // Build replacement
  let replacement;
  if (!heading || isGeneric) {
    replacement = `<GuideCTA silo="${silo}" />`;
  } else {
    const escapedHeading = heading.replace(/"/g, '&quot;');
    replacement = `<GuideCTA silo="${silo}" heading="${escapedHeading}" />`;
  }

  // Detect indentation of the section
  const lineStart = content.lastIndexOf("\n", greenSection.start) + 1;
  const indent = content.substring(lineStart, greenSection.start).match(/^\s*/)[0];
  const replacementWithIndent = `${indent}${replacement}`;

  if (dryRun) {
    return {
      status: "would-update",
      heading: heading || "(none)",
      isGeneric,
      replacement: replacementWithIndent.trim(),
    };
  }

  // Replace the section
  let newContent = content.substring(0, greenSection.start) + replacementWithIndent + content.substring(greenSection.end);

  // Add GuideCTA import if not present
  if (!newContent.includes("import { GuideCTA }")) {
    const importLines = newContent.match(/^import .+$/gm);
    if (importLines) {
      const lastImport = importLines[importLines.length - 1];
      const lastImportIdx = newContent.lastIndexOf(lastImport) + lastImport.length;
      newContent = newContent.substring(0, lastImportIdx) +
        '\nimport { GuideCTA } from "@/components/GuideCTA";' +
        newContent.substring(lastImportIdx);
    }
  }

  // Check if BUSINESS_INFO is still used after replacing the CTA
  const contentWithoutImports = newContent.replace(/^import .+$/gm, "");
  if (!contentWithoutImports.includes("BUSINESS_INFO")) {
    newContent = newContent.replace(/import\s*\{\s*BUSINESS_INFO\s*\}\s*from\s*["']@\/lib\/constants["'];?\s*\n/g, "");
  }

  // Remove Phone from lucide-react imports if no longer used in JSX
  const contentAfterCTA = newContent.replace(/<GuideCTA[^>]*\/>/g, "");
  const phoneStillUsed = contentAfterCTA.replace(/^import .+$/gm, "").includes("<Phone");
  if (!phoneStillUsed) {
    newContent = newContent.replace(
      /import\s*\{([^}]*)\}\s*from\s*["']lucide-react["'];?/g,
      (match, imports) => {
        const parts = imports.split(",").map(s => s.trim()).filter(Boolean);
        const filtered = parts.filter(p => p !== "Phone");
        if (filtered.length === 0) {
          return ""; // Remove entire import
        }
        return `import { ${filtered.join(", ")} } from "lucide-react";`;
      }
    );
    newContent = newContent.replace(/\n{3,}/g, "\n\n");
  }

  fs.writeFileSync(filePath, newContent, "utf-8");

  return {
    status: "updated",
    heading: heading || "(none)",
    isGeneric,
    headingPreserved: !isGeneric,
  };
}

// Main
const guidesDir = path.resolve(process.cwd(), `app/${silo}/guides`);
if (!fs.existsSync(guidesDir)) {
  console.error(`Directory not found: ${guidesDir}`);
  process.exit(1);
}

const dirs = fs.readdirSync(guidesDir, { withFileTypes: true })
  .filter(d => d.isDirectory())
  .map(d => d.name);

let updated = 0;
let skipped = 0;
let preserved = 0;
let noSection = 0;

console.log(`\n${dryRun ? "[DRY RUN] " : ""}Processing ${dirs.length} ${silo} guide pages...\n`);

for (const dir of dirs) {
  const filePath = path.join(guidesDir, dir, "page.tsx");
  if (!fs.existsSync(filePath)) {
    console.log(`  SKIP: ${dir}/page.tsx (file not found)`);
    skipped++;
    continue;
  }

  const result = processFile(filePath, silo, dryRun);

  if (result.status === "updated" || result.status === "would-update") {
    updated++;
    if (result.headingPreserved || (!result.isGeneric && result.heading !== "(none)")) {
      preserved++;
      console.log(`  ${dryRun ? "WOULD UPDATE" : "UPDATED"}: ${dir} [heading preserved: "${result.heading}"]`);
    } else {
      console.log(`  ${dryRun ? "WOULD UPDATE" : "UPDATED"}: ${dir}`);
    }
  } else {
    skipped++;
    if (result.reason === "no bg-brand-green section found") {
      noSection++;
    }
    console.log(`  SKIP: ${dir} (${result.reason})`);
  }
}

console.log(`\n--- Summary ---`);
console.log(`Total files: ${dirs.length}`);
console.log(`${dryRun ? "Would update" : "Updated"}: ${updated}`);
console.log(`Skipped: ${skipped}${noSection > 0 ? ` (${noSection} had no green CTA section)` : ""}`);
console.log(`Headings preserved: ${preserved}`);
if (dryRun) {
  console.log(`\nRe-run without --dry-run to apply changes.`);
}
