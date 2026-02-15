#!/usr/bin/env python3
"""
SEO Audit Script for FCS Site
Analyzes all pages for:
1. Insurance page "use client" analysis
2. Canonical URL issues across all pages
"""

import os
import json
import re
from pathlib import Path
from typing import Dict, List, Any, Optional

# Base configuration
BASE_DIR = Path("/Volumes/External-2TB/Projects/service-site-builder/sites/fcs-final")
APP_DIR = BASE_DIR / "app"
BASE_URL = "https://floridaconstructionspecialists.com"
OUTPUT_FILE = BASE_DIR / "audit-technical.json"

def analyze_insurance_page() -> Dict[str, Any]:
    """
    Analyzes the /insurance/ page for "use client" issues.
    """
    insurance_file = APP_DIR / "insurance" / "page.tsx"

    analysis = {
        "file": str(insurance_file.relative_to(BASE_DIR)),
        "has_use_client": False,
        "client_features_used": [],
        "can_export_metadata": False,
        "recommended_changes": [],
        "severity": "none"
    }

    if not insurance_file.exists():
        analysis["error"] = "File not found"
        return analysis

    with open(insurance_file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Check for "use client"
    if '"use client"' in content or "'use client'" in content:
        analysis["has_use_client"] = True
        analysis["severity"] = "high"

    # Identify client-side features
    client_features = []

    # Check for interactive hooks
    hooks_pattern = r'(useState|useEffect|useReducer|useContext|useCallback|useMemo|useRef|useLayoutEffect)'
    if re.search(hooks_pattern, content):
        hooks_found = re.findall(hooks_pattern, content)
        client_features.append(f"React hooks: {', '.join(set(hooks_found))}")

    # Check for event handlers
    event_pattern = r'(onClick|onChange|onSubmit|onMouseEnter|onMouseLeave|onFocus|onBlur|onKeyDown|onKeyUp)'
    if re.search(event_pattern, content):
        events_found = re.findall(event_pattern, content)
        client_features.append(f"Event handlers: {', '.join(set(events_found))}")

    # Check for browser APIs
    browser_apis = ['window', 'document', 'localStorage', 'sessionStorage', 'navigator']
    for api in browser_apis:
        if re.search(rf'\b{api}\b', content):
            client_features.append(f"Browser API: {api}")

    # Check for animation libraries
    if 'framer-motion' in content or 'FadeIn' in content or 'StaggerContainer' in content:
        client_features.append("Framer Motion animations (FadeIn, StaggerContainer)")

    # Check for forms
    if 'HighLevelForm' in content:
        client_features.append("HighLevelForm component")

    analysis["client_features_used"] = client_features

    # Check if metadata export exists
    if re.search(r'export\s+(const\s+)?metadata\s*[:=]', content):
        analysis["can_export_metadata"] = True
    else:
        analysis["can_export_metadata"] = False

    # Determine recommendations
    if analysis["has_use_client"]:
        if not client_features:
            # No client features detected - can likely be server component
            analysis["recommended_changes"].append({
                "action": "REMOVE 'use client' directive",
                "reason": "No client-side features detected - can be a server component",
                "impact": "Allows metadata export for SEO",
                "priority": "HIGH"
            })
        else:
            # Has client features - need to refactor
            analysis["recommended_changes"].append({
                "action": "SPLIT into server and client components",
                "reason": "Uses client features but needs SEO metadata",
                "details": [
                    "1. Create server component wrapper (page.tsx) - exports metadata",
                    "2. Move client features to separate client component",
                    "3. Import client component into server wrapper"
                ],
                "client_features_to_extract": client_features,
                "priority": "HIGH",
                "example": {
                    "server_component": "app/insurance/page.tsx (export metadata, remove 'use client')",
                    "client_component": "components/InsurancePageClient.tsx ('use client', animations, forms)"
                }
            })

        if not analysis["can_export_metadata"]:
            analysis["recommended_changes"].append({
                "action": "ADD metadata export",
                "reason": "Missing metadata for SEO (title, description, canonical, OpenGraph)",
                "priority": "CRITICAL",
                "example": {
                    "title": "Insurance Restoration Services Tampa | Florida Construction Specialists",
                    "description": "Prime contractor for large loss commercial & residential insurance claims. 40+ years experience. From damage assessment to complete restoration in Tampa Bay.",
                    "canonical": f"{BASE_URL}/insurance/"
                }
            })

    return analysis


def get_expected_canonical_url(file_path: Path) -> str:
    """
    Determines the expected canonical URL based on file path.
    """
    # Get relative path from app directory
    rel_path = file_path.relative_to(APP_DIR)

    # Remove page.tsx
    path_parts = list(rel_path.parts[:-1])

    # Build URL
    if not path_parts or path_parts == ['.']:
        # Root page
        return f"{BASE_URL}/"
    else:
        # Join path parts and add trailing slash
        url_path = '/'.join(path_parts)
        return f"{BASE_URL}/{url_path}/"


def extract_metadata_from_file(file_path: Path) -> Optional[Dict[str, Any]]:
    """
    Extracts metadata from a page.tsx file.
    """
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        return {"error": f"Could not read file: {e}"}

    metadata = {
        "has_metadata_export": False,
        "has_canonical": False,
        "canonical_url": None,
        "has_title": False,
        "has_description": False,
        "has_use_client": False,
        "metadata_export_line": None
    }

    # Check for "use client"
    if re.search(r'^["\']use client["\']', content, re.MULTILINE):
        metadata["has_use_client"] = True

    # Find metadata export
    metadata_pattern = r'export\s+(const\s+)?metadata\s*[:=]\s*\{([^}]*(?:\{[^}]*\}[^}]*)*)\}'
    match = re.search(metadata_pattern, content, re.DOTALL)

    if match:
        metadata["has_metadata_export"] = True
        metadata_content = match.group(2)
        metadata["metadata_export_line"] = content[:match.start()].count('\n') + 1

        # Check for title
        if re.search(r'title\s*:', metadata_content):
            metadata["has_title"] = True

        # Check for description
        if re.search(r'description\s*:', metadata_content):
            metadata["has_description"] = True

        # Check for canonical in alternates
        canonical_pattern = r'alternates\s*:\s*\{[^}]*canonical\s*:\s*["\']([^"\']+)["\']'
        canonical_match = re.search(canonical_pattern, metadata_content, re.DOTALL)

        if canonical_match:
            metadata["has_canonical"] = True
            metadata["canonical_url"] = canonical_match.group(1)

    return metadata


def audit_all_pages() -> Dict[str, Any]:
    """
    Audits all page.tsx files for canonical URL issues.
    """
    results = {
        "total_pages": 0,
        "pages_with_metadata": 0,
        "pages_with_canonical": 0,
        "pages_without_canonical": 0,
        "pages_with_use_client": 0,
        "pages_without_metadata": 0,
        "mismatched_canonicals": 0,
        "pages": []
    }

    # Find all page.tsx files
    page_files = list(APP_DIR.rglob("**/page.tsx"))
    results["total_pages"] = len(page_files)

    for page_file in sorted(page_files):
        expected_url = get_expected_canonical_url(page_file)
        metadata = extract_metadata_from_file(page_file)

        page_result = {
            "file": str(page_file.relative_to(BASE_DIR)),
            "expected_canonical": expected_url,
            "metadata": metadata,
            "issues": []
        }

        # Count statistics
        if metadata.get("has_metadata_export"):
            results["pages_with_metadata"] += 1
        else:
            results["pages_without_metadata"] += 1
            page_result["issues"].append({
                "type": "missing_metadata",
                "severity": "high",
                "message": "No metadata export found"
            })

        if metadata.get("has_use_client"):
            results["pages_with_use_client"] += 1
            page_result["issues"].append({
                "type": "use_client_with_metadata",
                "severity": "critical",
                "message": "Cannot export metadata from client component"
            })

        if metadata.get("has_canonical"):
            results["pages_with_canonical"] += 1

            # Check if canonical matches expected
            if metadata["canonical_url"] != expected_url:
                results["mismatched_canonicals"] += 1
                page_result["issues"].append({
                    "type": "mismatched_canonical",
                    "severity": "high",
                    "message": f"Canonical URL mismatch",
                    "expected": expected_url,
                    "actual": metadata["canonical_url"]
                })

            # Check for trailing slash
            if not metadata["canonical_url"].endswith('/'):
                page_result["issues"].append({
                    "type": "missing_trailing_slash",
                    "severity": "medium",
                    "message": "Canonical URL missing trailing slash",
                    "actual": metadata["canonical_url"],
                    "should_be": metadata["canonical_url"] + '/'
                })
        else:
            results["pages_without_canonical"] += 1
            if metadata.get("has_metadata_export"):
                page_result["issues"].append({
                    "type": "missing_canonical",
                    "severity": "high",
                    "message": "Metadata exists but missing canonical URL in alternates"
                })

        # Check for missing title
        if metadata.get("has_metadata_export") and not metadata.get("has_title"):
            page_result["issues"].append({
                "type": "missing_title",
                "severity": "critical",
                "message": "Metadata missing title"
            })

        # Check for missing description
        if metadata.get("has_metadata_export") and not metadata.get("has_description"):
            page_result["issues"].append({
                "type": "missing_description",
                "severity": "high",
                "message": "Metadata missing description"
            })

        results["pages"].append(page_result)

    return results


def generate_summary_issues(audit_results: Dict[str, Any]) -> List[Dict[str, Any]]:
    """
    Generates a summary list of all issues found.
    """
    issues = []

    for page in audit_results["pages"]:
        for issue in page.get("issues", []):
            issues.append({
                "file": page["file"],
                "issue_type": issue["type"],
                "severity": issue["severity"],
                "details": issue["message"],
                "expected": issue.get("expected"),
                "actual": issue.get("actual")
            })

    return issues


def main():
    """
    Main execution function.
    """
    print("=" * 80)
    print("FCS Site SEO Technical Audit")
    print("=" * 80)

    # Task 1: Analyze insurance page
    print("\n[TASK 1] Analyzing /insurance/ page...")
    insurance_analysis = analyze_insurance_page()
    print(f"  - Has 'use client': {insurance_analysis['has_use_client']}")
    print(f"  - Client features: {len(insurance_analysis['client_features_used'])}")
    print(f"  - Can export metadata: {insurance_analysis['can_export_metadata']}")
    print(f"  - Severity: {insurance_analysis['severity']}")

    # Task 2: Audit all pages
    print("\n[TASK 2] Auditing all pages for canonical URLs...")
    audit_results = audit_all_pages()
    print(f"  - Total pages: {audit_results['total_pages']}")
    print(f"  - Pages with metadata: {audit_results['pages_with_metadata']}")
    print(f"  - Pages with canonical: {audit_results['pages_with_canonical']}")
    print(f"  - Pages without canonical: {audit_results['pages_without_canonical']}")
    print(f"  - Mismatched canonicals: {audit_results['mismatched_canonicals']}")
    print(f"  - Pages with 'use client': {audit_results['pages_with_use_client']}")

    # Generate summary issues
    summary_issues = generate_summary_issues(audit_results)

    # Compile final output
    output = {
        "audit_date": "2026-02-15",
        "base_url": BASE_URL,
        "insurance_page_analysis": insurance_analysis,
        "canonical_audit": {
            "total_pages": audit_results["total_pages"],
            "pages_with_metadata": audit_results["pages_with_metadata"],
            "pages_with_canonical": audit_results["pages_with_canonical"],
            "pages_without_canonical": audit_results["pages_without_canonical"],
            "pages_without_metadata": audit_results["pages_without_metadata"],
            "mismatched_canonicals": audit_results["mismatched_canonicals"],
            "pages_with_use_client": audit_results["pages_with_use_client"],
            "pages": audit_results["pages"]
        },
        "issues": summary_issues,
        "summary": {
            "total_issues": len(summary_issues),
            "critical_issues": len([i for i in summary_issues if i["severity"] == "critical"]),
            "high_issues": len([i for i in summary_issues if i["severity"] == "high"]),
            "medium_issues": len([i for i in summary_issues if i["severity"] == "medium"])
        }
    }

    # Write to file
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(output, f, indent=2, ensure_ascii=False)

    print(f"\n[OUTPUT] Results written to: {OUTPUT_FILE}")
    print("\nIssue Summary:")
    print(f"  - Total issues: {output['summary']['total_issues']}")
    print(f"  - Critical: {output['summary']['critical_issues']}")
    print(f"  - High: {output['summary']['high_issues']}")
    print(f"  - Medium: {output['summary']['medium_issues']}")

    print("\n" + "=" * 80)
    print("Audit Complete")
    print("=" * 80)

    return output


if __name__ == "__main__":
    main()
