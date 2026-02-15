#!/usr/bin/env python3
"""
Schema Markup Audit Script for FCS Site
Checks all page.tsx files for proper schema implementation
"""

import os
import json
import re
from pathlib import Path
from collections import defaultdict

# Base directory
BASE_DIR = Path("/Volumes/External-2TB/Projects/service-site-builder/sites/fcs-final")
APP_DIR = BASE_DIR / "app"
OUTPUT_FILE = BASE_DIR / "audit-schema.json"

# Schema component types to check
SCHEMA_COMPONENTS = [
    "LocalBusinessSchema",
    "ServiceSchema",
    "BreadcrumbSchema",
    "FAQSchema",
    "ArticleSchema",
    "OrganizationSchema"
]

def find_all_page_files():
    """Find all page.tsx files in the app directory"""
    page_files = []
    for root, dirs, files in os.walk(APP_DIR):
        if "page.tsx" in files:
            page_files.append(Path(root) / "page.tsx")
    return sorted(page_files)

def analyze_page_file(file_path):
    """Analyze a single page.tsx file for schema usage"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        return {
            "error": f"Failed to read file: {str(e)}",
            "imported_schemas": [],
            "used_schemas": [],
            "has_faq_data": False,
            "has_breadcrumb_data": False,
            "is_service_page": False,
            "has_canonical": False
        }

    # Get relative path for reporting
    rel_path = file_path.relative_to(BASE_DIR)

    # Check imports
    imported_schemas = []
    import_pattern = r'import\s+\{([^}]+)\}\s+from\s+[\'"]@/components/Schema[\'"]'
    import_matches = re.findall(import_pattern, content)
    if import_matches:
        for match in import_matches:
            components = [c.strip() for c in match.split(',')]
            imported_schemas.extend([c for c in components if c in SCHEMA_COMPONENTS])

    # Check which schemas are actually used in JSX
    used_schemas = []
    for schema in SCHEMA_COMPONENTS:
        # Look for <SchemaComponent or <SchemaComponent> or { SchemaComponent() }
        if re.search(rf'<{schema}[\s/>]|{{{schema}\(\)}}', content):
            used_schemas.append(schema)

    # Check for FAQ data
    has_faq_data = bool(re.search(r'const\s+faqs\s*[=:]\s*\[', content))

    # Check for breadcrumb data
    has_breadcrumb_data = bool(re.search(r'const\s+breadcrumbItems\s*[=:]\s*\[', content))

    # Check if it's a service page (heuristic: has "service" in path or specific keywords)
    path_str = str(rel_path).lower()
    is_service_page = (
        '/services/' in path_str or
        'restoration' in path_str or
        'remediation' in path_str or
        'roofing' in path_str or
        'damage' in path_str or
        'repair' in path_str or
        bool(re.search(r'(commercial|residential|emergency)', path_str))
    )

    # More precise check: look for service-related content
    if not is_service_page:
        is_service_page = bool(re.search(r'(service|restoration|repair|remediation)', content.lower()[:2000]))

    # Check for canonical URL
    has_canonical = bool(re.search(r'<link\s+rel=[\'"]canonical[\'"]|rel:\s*[\'"]canonical[\'"]', content))

    return {
        "imported_schemas": imported_schemas,
        "used_schemas": used_schemas,
        "has_faq_data": has_faq_data,
        "has_breadcrumb_data": has_breadcrumb_data,
        "is_service_page": is_service_page,
        "has_canonical": has_canonical
    }

def generate_issues(file_path, analysis):
    """Generate issues based on analysis results"""
    issues = []
    rel_path = str(file_path.relative_to(BASE_DIR))

    # Issue: FAQ data but no FAQSchema
    if analysis["has_faq_data"] and "FAQSchema" not in analysis["used_schemas"]:
        issues.append({
            "file": rel_path,
            "issue_type": "missing_faq_schema",
            "details": "Page has FAQ data (const faqs = [...]) but does not use FAQSchema",
            "severity": "high"
        })

    # Issue: Breadcrumb data but no BreadcrumbSchema
    if analysis["has_breadcrumb_data"] and "BreadcrumbSchema" not in analysis["used_schemas"]:
        issues.append({
            "file": rel_path,
            "issue_type": "missing_breadcrumb_schema",
            "details": "Page has breadcrumbItems but does not use BreadcrumbSchema",
            "severity": "medium"
        })

    # Issue: Service page but no ServiceSchema
    if analysis["is_service_page"] and "ServiceSchema" not in analysis["used_schemas"]:
        # Don't flag if it's a general services directory page or blog
        if not any(x in rel_path.lower() for x in ['/services/page.tsx', '/blog/', '/about/', '/contact/']):
            issues.append({
                "file": rel_path,
                "issue_type": "missing_service_schema",
                "details": "Appears to be a service page but does not use ServiceSchema",
                "severity": "medium"
            })

    # Issue: Missing canonical URL
    if not analysis["has_canonical"]:
        issues.append({
            "file": rel_path,
            "issue_type": "missing_canonical",
            "details": "Page does not have a canonical URL",
            "severity": "low"
        })

    # Issue: Imported but not used
    unused = set(analysis["imported_schemas"]) - set(analysis["used_schemas"])
    if unused:
        issues.append({
            "file": rel_path,
            "issue_type": "unused_import",
            "details": f"Imported but not used: {', '.join(unused)}",
            "severity": "low"
        })

    # Issue: Used but not imported
    not_imported = set(analysis["used_schemas"]) - set(analysis["imported_schemas"])
    if not_imported:
        issues.append({
            "file": rel_path,
            "issue_type": "missing_import",
            "details": f"Used but not imported: {', '.join(not_imported)}",
            "severity": "high"
        })

    return issues

def main():
    print("Starting schema markup audit...")
    print(f"Scanning: {APP_DIR}")

    # Find all page files
    page_files = find_all_page_files()
    print(f"Found {len(page_files)} page.tsx files")

    # Initialize counters
    schema_usage_counts = defaultdict(int)
    all_issues = []
    pages_with_issues = 0

    # Analyze each file
    for i, page_file in enumerate(page_files, 1):
        if i % 50 == 0:
            print(f"Progress: {i}/{len(page_files)} files analyzed...")

        analysis = analyze_page_file(page_file)

        # Count schema usage
        for schema in analysis["used_schemas"]:
            schema_usage_counts[schema] += 1

        # Generate issues
        issues = generate_issues(page_file, analysis)
        if issues:
            pages_with_issues += 1
            all_issues.extend(issues)

    # Group issues by type
    issues_by_type = defaultdict(int)
    for issue in all_issues:
        issues_by_type[issue["issue_type"]] += 1

    # Prepare summary
    summary = {
        "total_pages": len(page_files),
        "pages_with_issues": pages_with_issues,
        "schema_usage": dict(schema_usage_counts),
        "issue_counts": dict(issues_by_type),
        "issues_breakdown": {
            "high_severity": len([i for i in all_issues if i["severity"] == "high"]),
            "medium_severity": len([i for i in all_issues if i["severity"] == "medium"]),
            "low_severity": len([i for i in all_issues if i["severity"] == "low"])
        }
    }

    # Prepare output
    output = {
        "summary": summary,
        "issues": all_issues
    }

    # Write to file
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(output, f, indent=2)

    print(f"\n{'='*60}")
    print("AUDIT COMPLETE")
    print(f"{'='*60}")
    print(f"\nTotal pages analyzed: {len(page_files)}")
    print(f"Pages with issues: {pages_with_issues}")
    print(f"\nSchema Usage:")
    for schema, count in sorted(schema_usage_counts.items()):
        print(f"  {schema}: {count} pages")

    print(f"\nIssue Counts:")
    for issue_type, count in sorted(issues_by_type.items()):
        print(f"  {issue_type}: {count}")

    print(f"\nSeverity Breakdown:")
    print(f"  High: {summary['issues_breakdown']['high_severity']}")
    print(f"  Medium: {summary['issues_breakdown']['medium_severity']}")
    print(f"  Low: {summary['issues_breakdown']['low_severity']}")

    print(f"\nDetailed results written to: {OUTPUT_FILE}")
    print(f"{'='*60}\n")

if __name__ == "__main__":
    main()
