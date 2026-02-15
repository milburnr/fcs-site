#!/usr/bin/env python3
"""
Quick fix script for adding FAQSchema to pages with FAQ data
Processes the 29 pages identified in the schema audit
"""

import json
import re
from pathlib import Path

BASE_DIR = Path("/Volumes/External-2TB/Projects/service-site-builder/sites/fcs-final")

# Load the audit results
with open(BASE_DIR / "audit-schema.json", 'r') as f:
    audit_data = json.load(f)

# Get all pages missing FAQSchema
missing_faq_pages = [
    issue['file'] for issue in audit_data['issues']
    if issue['issue_type'] == 'missing_faq_schema'
]

print(f"Found {len(missing_faq_pages)} pages needing FAQSchema fix\n")

def fix_page(file_path):
    """Add FAQSchema import and usage to a page"""
    full_path = BASE_DIR / file_path

    try:
        with open(full_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        return f"❌ Error reading file: {e}"

    # Check if FAQSchema is already imported
    if 'FAQSchema' in content:
        return "⏭️  Already has FAQSchema import"

    # Find the Schema import line
    schema_import_pattern = r'import\s+\{([^}]+)\}\s+from\s+[\'"]@/components/Schema[\'"]'
    match = re.search(schema_import_pattern, content)

    if not match:
        return "⚠️  No Schema import found - needs manual review"

    # Add FAQSchema to existing import
    current_imports = match.group(1)
    if 'FAQSchema' in current_imports:
        return "⏭️  Already imported FAQSchema"

    # Add FAQSchema to the import
    new_imports = current_imports.strip() + ', FAQSchema'
    new_import_line = f'import {{ {new_imports} }} from "@/components/Schema"'

    content = content.replace(match.group(0), new_import_line)

    # Find where to add the FAQSchema component
    # Look for the last closing tag before export default
    # Common pattern: add before </div></div> or before export default

    # Strategy: Add <FAQSchema faqs={faqs} /> just before the last </div> in the return statement
    # Find the return statement
    return_match = re.search(r'return\s*\([\s\S]*\);', content)
    if not return_match:
        return "⚠️  Can't find return statement - needs manual review"

    return_content = return_match.group(0)

    # Find the last </div> before the closing );
    last_div_pattern = r'(</div>\s*)\);'
    last_div_match = re.search(last_div_pattern, return_content)

    if not last_div_match:
        return "⚠️  Can't find closing div - needs manual review"

    # Insert FAQSchema before the last </div>
    faq_component = '\n      <FAQSchema faqs={faqs} />\n      '
    new_return = return_content.replace(
        last_div_match.group(0),
        faq_component + last_div_match.group(0)
    )

    # Replace in full content
    content = content.replace(return_content, new_return)

    # Write back
    try:
        with open(full_path, 'w', encoding='utf-8') as f:
            f.write(content)
        return "✅ Fixed - added FAQSchema import and component"
    except Exception as e:
        return f"❌ Error writing file: {e}"

# Process all pages
print("Processing pages...\n")
results = {"success": 0, "manual": 0, "error": 0}

for i, page_file in enumerate(missing_faq_pages, 1):
    result = fix_page(page_file)

    # Count results
    if "✅" in result:
        results["success"] += 1
    elif "⚠️" in result:
        results["manual"] += 1
    else:
        results["error"] += 1

    print(f"{i:2d}. {page_file.replace('app/', '').replace('/page.tsx', '')[:60]:<60} {result}")

print(f"\n{'='*80}")
print(f"SUMMARY")
print(f"{'='*80}")
print(f"✅ Successfully fixed: {results['success']}")
print(f"⚠️  Needs manual review: {results['manual']}")
print(f"❌ Errors: {results['error']}")
print(f"\nTotal processed: {len(missing_faq_pages)}")

if results['success'] > 0:
    print(f"\n💡 Next steps:")
    print(f"   1. Review the changes: git diff")
    print(f"   2. Test build: npm run build")
    print(f"   3. Re-run audit: python3 audit-schema.py")
