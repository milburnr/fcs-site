#!/usr/bin/env python3
"""
SEO Content Audit Script for FCS Site
Analyzes all page.tsx files for heading structure and content quality
"""

import os
import re
import json
from pathlib import Path
from typing import Dict, List, Tuple

def extract_text_content(tsx_content: str) -> str:
    """Extract readable text from TSX content, removing JSX/HTML tags and code"""
    # Remove imports
    text = re.sub(r'^import\s+.*?from\s+["\'].*?["\'];?\s*$', '', tsx_content, flags=re.MULTILINE)

    # Remove export default statements
    text = re.sub(r'export\s+default\s+function.*?\{', '', text)

    # Remove TypeScript/JSX code blocks
    text = re.sub(r'\{[^}]*\}', ' ', text)

    # Remove HTML/JSX tags but keep their content
    text = re.sub(r'<[^>]+>', ' ', text)

    # Remove JavaScript template literals
    text = re.sub(r'`[^`]*`', ' ', text)

    # Remove comments
    text = re.sub(r'//.*?$', '', text, flags=re.MULTILINE)
    text = re.sub(r'/\*.*?\*/', '', text, flags=re.DOTALL)

    # Clean up whitespace
    text = re.sub(r'\s+', ' ', text).strip()

    return text

def count_words(text: str) -> int:
    """Count words in text"""
    words = re.findall(r'\b\w+\b', text)
    return len(words)

def find_h1_tags(content: str) -> List[str]:
    """Find all H1 tags in content"""
    # Match both className and class variants
    h1_pattern = r'<h1[^>]*>(.*?)</h1>'
    matches = re.findall(h1_pattern, content, re.DOTALL | re.IGNORECASE)

    # Also check for h1 with children components
    h1_self_closing = r'<h1[^>]*/>|<h1[^>]*>.*?</h1>'
    all_h1 = re.findall(h1_self_closing, content, re.DOTALL | re.IGNORECASE)

    return all_h1

def find_h2_tags(content: str) -> List[str]:
    """Find all H2 tags in content"""
    h2_pattern = r'<h2[^>]*>.*?</h2>'
    matches = re.findall(h2_pattern, content, re.DOTALL | re.IGNORECASE)
    return matches

def has_internal_links_component(content: str) -> bool:
    """Check if InternalLinks component is imported and used"""
    has_import = bool(re.search(r'import\s+.*?InternalLinks.*?from', content))
    has_usage = bool(re.search(r'<InternalLinks', content))
    return has_import and has_usage

def has_faq_section(content: str) -> bool:
    """Check if page has FAQ section"""
    # Check for Accordion component usage (commonly used for FAQs)
    has_accordion = bool(re.search(r'<Accordion', content))

    # Check for FAQ-related text
    has_faq_text = bool(re.search(r'FAQ|Frequently Asked Questions', content, re.IGNORECASE))

    return has_accordion or has_faq_text

def analyze_page(file_path: str) -> Dict:
    """Analyze a single page.tsx file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        return {
            'error': str(e),
            'file': file_path
        }

    # Find headings
    h1_tags = find_h1_tags(content)
    h2_tags = find_h2_tags(content)

    # Extract text and count words
    text_content = extract_text_content(content)
    word_count = count_words(text_content)

    # Check for components
    has_internal_links = has_internal_links_component(content)
    has_faqs = has_faq_section(content)

    # Get relative path for reporting
    rel_path = file_path.replace('/Volumes/External-2TB/Projects/service-site-builder/sites/fcs-final/', '')

    result = {
        'file': rel_path,
        'h1_count': len(h1_tags),
        'h2_count': len(h2_tags),
        'word_count': word_count,
        'has_internal_links': has_internal_links,
        'has_faqs': has_faqs,
        'issues': []
    }

    # Flag issues
    if len(h1_tags) == 0:
        result['issues'].append({
            'type': 'missing_h1',
            'severity': 'high',
            'details': 'Page has no H1 tag'
        })

    if len(h1_tags) > 1:
        result['issues'].append({
            'type': 'multiple_h1',
            'severity': 'high',
            'details': f'Page has {len(h1_tags)} H1 tags (should have exactly 1)'
        })

    if len(h2_tags) == 0:
        result['issues'].append({
            'type': 'missing_h2',
            'severity': 'medium',
            'details': 'Page has no H2 tags (poor heading hierarchy)'
        })

    if word_count < 500:
        result['issues'].append({
            'type': 'thin_content',
            'severity': 'high' if word_count < 300 else 'medium',
            'details': f'Page has only {word_count} words (minimum recommended: 500)'
        })

    if not has_internal_links:
        result['issues'].append({
            'type': 'no_internal_links',
            'severity': 'medium',
            'details': 'Page does not use InternalLinks component'
        })

    if not has_faqs:
        result['issues'].append({
            'type': 'no_faqs',
            'severity': 'low',
            'details': 'Page does not have FAQ section'
        })

    return result

def find_all_page_files(base_dir: str) -> List[str]:
    """Find all page.tsx files in the app directory"""
    app_dir = os.path.join(base_dir, 'app')
    page_files = []

    for root, dirs, files in os.walk(app_dir):
        # Skip node_modules and other build directories
        dirs[:] = [d for d in dirs if d not in ['node_modules', '.next', 'out']]

        if 'page.tsx' in files:
            page_files.append(os.path.join(root, 'page.tsx'))

    return sorted(page_files)

def generate_summary(results: List[Dict]) -> Dict:
    """Generate summary statistics from results"""
    total = len(results)
    with_h1 = sum(1 for r in results if r.get('h1_count', 0) >= 1)
    without_h1 = sum(1 for r in results if r.get('h1_count', 0) == 0)
    multiple_h1 = sum(1 for r in results if r.get('h1_count', 0) > 1)

    h2_counts = [r.get('h2_count', 0) for r in results]
    avg_h2 = sum(h2_counts) / len(h2_counts) if h2_counts else 0

    thin_content = sum(1 for r in results if r.get('word_count', 0) < 500)
    with_internal_links = sum(1 for r in results if r.get('has_internal_links', False))
    with_faqs = sum(1 for r in results if r.get('has_faqs', False))

    return {
        'total_pages': total,
        'pages_with_h1': with_h1,
        'pages_without_h1': without_h1,
        'pages_multiple_h1': multiple_h1,
        'avg_h2_count': round(avg_h2, 2),
        'thin_content_pages': thin_content,
        'pages_with_internal_links': with_internal_links,
        'pages_with_faqs': with_faqs,
        'pages_with_h1_percentage': round((with_h1 / total * 100) if total > 0 else 0, 1),
        'pages_with_internal_links_percentage': round((with_internal_links / total * 100) if total > 0 else 0, 1),
        'pages_with_faqs_percentage': round((with_faqs / total * 100) if total > 0 else 0, 1),
        'thin_content_percentage': round((thin_content / total * 100) if total > 0 else 0, 1)
    }

def main():
    base_dir = '/Volumes/External-2TB/Projects/service-site-builder/sites/fcs-final'

    print("🔍 Starting SEO Content Audit...")
    print(f"📂 Base directory: {base_dir}")

    # Find all page files
    print("\n📄 Finding all page.tsx files...")
    page_files = find_all_page_files(base_dir)
    print(f"✅ Found {len(page_files)} page files")

    # Analyze each page
    print("\n🔬 Analyzing pages...")
    results = []
    for i, page_file in enumerate(page_files, 1):
        if i % 50 == 0:
            print(f"   Progress: {i}/{len(page_files)} pages analyzed...")
        result = analyze_page(page_file)
        results.append(result)

    print(f"✅ Analyzed {len(results)} pages")

    # Generate summary
    print("\n📊 Generating summary...")
    summary = generate_summary(results)

    # Collect all issues
    all_issues = []
    for result in results:
        for issue in result.get('issues', []):
            all_issues.append({
                'file': result['file'],
                'issue_type': issue['type'],
                'details': issue['details'],
                'severity': issue['severity']
            })

    # Get thin content pages
    thin_pages = [
        {
            'file': r['file'],
            'estimated_words': r['word_count']
        }
        for r in results if r.get('word_count', 0) < 500
    ]
    thin_pages.sort(key=lambda x: x['estimated_words'])

    # Prepare output
    output = {
        'summary': summary,
        'issues': all_issues,
        'thin_pages': thin_pages,
        'all_pages': results
    }

    # Write to JSON
    output_file = os.path.join(base_dir, 'audit-content.json')
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(output, f, indent=2)

    print(f"\n✅ Audit complete! Results written to: audit-content.json")
    print("\n" + "="*60)
    print("📊 SUMMARY STATISTICS")
    print("="*60)
    for key, value in summary.items():
        print(f"{key:.<40} {value}")
    print("="*60)

    # Print top issues
    print("\n🚨 TOP ISSUES BY SEVERITY:")
    high_severity = [i for i in all_issues if i['severity'] == 'high']
    medium_severity = [i for i in all_issues if i['severity'] == 'medium']
    low_severity = [i for i in all_issues if i['severity'] == 'low']

    print(f"\n   HIGH severity: {len(high_severity)} issues")
    print(f"   MEDIUM severity: {len(medium_severity)} issues")
    print(f"   LOW severity: {len(low_severity)} issues")

    # Print worst thin content pages
    print(f"\n📉 THINNEST CONTENT PAGES (Top 10):")
    for page in thin_pages[:10]:
        print(f"   {page['estimated_words']:>4} words - {page['file']}")

if __name__ == '__main__':
    main()
