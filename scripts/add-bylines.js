#!/usr/bin/env node
// Batch-add AuthorByline component to all guide article pages.
// Usage: node scripts/add-bylines.js
// Scans app/commercial/guides, app/insurance/guides, app/residential/guides
// Idempotent: skips files that already contain AuthorByline.

const fs = require("fs");
const path = require("path");
const glob = require("glob") || null;

const ROOT = path.resolve(__dirname, "..");

const GUIDE_PATTERNS = [
  "app/commercial/guides/*/page.tsx",
  "app/insurance/guides/*/page.tsx",
  "app/residential/guides/*/page.tsx",
];

const IMPORT_LINE = 'import { AuthorByline } from "@/components/AuthorByline";';

function findGuideFiles() {
  const files = [];
  for (const pattern of GUIDE_PATTERNS) {
    const fullPattern = path.join(ROOT, pattern);
    // Simple glob using fs
    const parts = fullPattern.split("*");
    if (parts.length !== 2) continue;
    const dir = parts[0];
    const suffix = parts[1];
    if (!fs.existsSync(dir)) continue;
    for (const entry of fs.readdirSync(dir)) {
      const candidate = path.join(dir, entry, suffix.replace(/^\//, ""));
      if (fs.existsSync(candidate)) {
        files.push(candidate);
      }
    }
  }
  return files;
}

function addBylineToFile(filePath) {
  const content = fs.readFileSync(filePath, "utf-8");

  // Idempotent: skip if already has AuthorByline
  if (content.includes("AuthorByline")) {
    return "skip";
  }

  const lines = content.split("\n");

  // Step 1: Add import after last existing component import
  let importInsertIdx = -1;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    // Find last import line (before any non-import, non-empty line)
    if (line.startsWith("import ") || line.match(/^\s*} from /)) {
      importInsertIdx = i;
    }
    // Stop scanning after we leave the import block
    if (importInsertIdx > 0 && !line.startsWith("import ") && !line.match(/^\s*}?\s*from /) && line.trim() !== "" && !line.match(/^\s*[A-Za-z]/)) {
      break;
    }
  }

  // More robust: find the last line that is part of an import statement
  importInsertIdx = -1;
  let inImport = false;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.startsWith("import ")) {
      inImport = true;
    }
    if (inImport) {
      importInsertIdx = i;
      // Check if this line ends the import (has "from" and semicolon or just semicolon)
      if (line.includes(" from ") && line.endsWith(";")) {
        inImport = false;
      } else if (line.endsWith(";")) {
        inImport = false;
      }
    }
    // If we hit a non-import, non-blank line after imports, stop
    if (!inImport && importInsertIdx > 0 && line !== "" && !line.startsWith("import ")) {
      break;
    }
  }

  if (importInsertIdx === -1) {
    return "error:no-imports";
  }

  // Step 2: Find </h1> line
  let h1CloseIdx = -1;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes("</h1>")) {
      h1CloseIdx = i;
      break; // First h1 only
    }
  }

  if (h1CloseIdx === -1) {
    return "error:no-h1";
  }

  // Determine indentation of the h1 closing tag line
  const h1Line = lines[h1CloseIdx];
  const indent = h1Line.match(/^(\s*)/)[1];

  // Insert AuthorByline after </h1> with same indentation
  const bylineJSX = `${indent}<AuthorByline />`;

  // Build new content
  // First insert import (after importInsertIdx)
  lines.splice(importInsertIdx + 1, 0, IMPORT_LINE);

  // h1CloseIdx shifted by 1 due to import insertion
  const adjustedH1Idx = h1CloseIdx + 1;
  lines.splice(adjustedH1Idx + 1, 0, bylineJSX);

  fs.writeFileSync(filePath, lines.join("\n"), "utf-8");
  return "success";
}

// Main
const files = findGuideFiles();
let success = 0;
let skipped = 0;
let errors = [];

for (const file of files) {
  const relPath = path.relative(ROOT, file);
  const result = addBylineToFile(file);
  if (result === "success") {
    success++;
  } else if (result === "skip") {
    skipped++;
  } else {
    errors.push({ file: relPath, error: result });
  }
}

console.log(`\nByline Insertion Summary`);
console.log(`========================`);
console.log(`Total files found: ${files.length}`);
console.log(`Successfully updated: ${success}`);
console.log(`Skipped (already has byline): ${skipped}`);
console.log(`Errors: ${errors.length}`);

if (errors.length > 0) {
  console.log(`\nErrors:`);
  for (const { file, error } of errors) {
    console.log(`  ${file}: ${error}`);
  }
}

process.exit(errors.length > 0 ? 1 : 0);
