#!/usr/bin/env python3
"""
SEO Metadata Audit Script
Audits all page.tsx files for title, description, and canonical URL metadata
"""

import os
import re
import json
from pathlib import Path
from typing import Dict, List, Set, Optional, Tuple

# Project paths
APP_DIR = Path("/Volumes/External-2TB/Projects/service-site-builder/sites/fcs-final/app")
OUTPUT_FILE = Path("/Volumes/External-2TB/Projects/service-site-builder/sites/fcs-final/audit-meta.json")

class MetadataAuditor:
    def __init__(self):
        self.pages_data = []
        self.titles = {}  # title -> [files]
        self.descriptions = {}  # description -> [files]
        self.issues = []

    def extract_metadata(self, file_path: Path) -> Optional[Dict]:
        """Extract metadata from a page.tsx file"""
        try:
            content = file_path.read_text(encoding='utf-8')
        except Exception as e:
            self.add_issue(str(file_path), 'read_error', f'Failed to read file: {e}', 'error')
            return None

        # Get route path from file location
        route = str(file_path.parent.relative_to(APP_DIR))
        if route == '.':
            route = '/'
        else:
            route = '/' + route + '/'

        metadata = {
            'file': str(file_path.relative_to(APP_DIR.parent)),
            'route': route,
            'title': None,
            'description': None,
            'canonical': None,
            'has_metadata_export': False
        }

        # Check for metadata export
        has_static = 'export const metadata' in content
        has_async = 'export async function generateMetadata' in content
        metadata['has_metadata_export'] = has_static or has_async

        if not metadata['has_metadata_export']:
            self.add_issue(metadata['file'], 'no_metadata', 'No metadata export found', 'error')
            return metadata

        # Extract title
        title_patterns = [
            r'title:\s*[\'"`]([^\'"`]+)[\'"`]',
            r'title:\s*`([^`]+)`',
            r'title:\s*"([^"]+)"',
            r'title:\s*\'([^\']+)\'',
        ]

        for pattern in title_patterns:
            match = re.search(pattern, content)
            if match:
                metadata['title'] = match.group(1).strip()
                break

        # Extract description
        desc_patterns = [
            r'description:\s*[\'"`]([^\'"`]+)[\'"`]',
            r'description:\s*`([^`]+)`',
            r'description:\s*"([^"]+)"',
            r'description:\s*\'([^\']+)\'',
        ]

        for pattern in desc_patterns:
            match = re.search(pattern, content, re.DOTALL)
            if match:
                desc = match.group(1).strip()
                # Clean up multiline descriptions
                desc = re.sub(r'\s+', ' ', desc)
                metadata['description'] = desc
                break

        # Extract canonical URL
        canonical_patterns = [
            r'canonical:\s*[\'"`]([^\'"`]+)[\'"`]',
            r'canonical:\s*`([^`]+)`',
        ]

        for pattern in canonical_patterns:
            match = re.search(pattern, content)
            if match:
                metadata['canonical'] = match.group(1).strip()
                break

        return metadata

    def add_issue(self, file: str, issue_type: str, details: str, severity: str):
        """Add an issue to the issues list"""
        self.issues.append({
            'file': file,
            'issue_type': issue_type,
            'details': details,
            'severity': severity
        })

    def validate_metadata(self, metadata: Dict):
        """Validate metadata and record issues"""
        file = metadata['file']
        title = metadata['title']
        description = metadata['description']
        canonical = metadata['canonical']

        # Check title
        if not title:
            self.add_issue(file, 'missing_title', 'No title found', 'error')
        else:
            # Track for duplicates
            if title not in self.titles:
                self.titles[title] = []
            self.titles[title].append(file)

            # Check title length
            title_len = len(title)
            if title_len > 60:
                self.add_issue(file, 'title_too_long', f'Title is {title_len} chars (over 60)', 'warning')

            # Check for generic titles
            generic_patterns = [
                r'^Page$',
                r'^Home$',
                r'^About$',
                r'^Contact$',
            ]
            if any(re.match(pattern, title, re.IGNORECASE) for pattern in generic_patterns):
                self.add_issue(file, 'generic_title', f'Title appears generic: {title}', 'warning')

        # Check description
        if not description:
            self.add_issue(file, 'missing_description', 'No description found', 'error')
        else:
            # Track for duplicates
            if description not in self.descriptions:
                self.descriptions[description] = []
            self.descriptions[description].append(file)

            # Check description length
            desc_len = len(description)
            if desc_len < 120:
                self.add_issue(file, 'description_too_short', f'Description is {desc_len} chars (under 120)', 'warning')
            elif desc_len > 160:
                self.add_issue(file, 'description_too_long', f'Description is {desc_len} chars (over 160)', 'warning')

        # Check canonical
        if not canonical:
            self.add_issue(file, 'missing_canonical', 'No canonical URL found', 'warning')

    def find_all_pages(self) -> List[Path]:
        """Find all page.tsx files in the app directory"""
        pages = []
        for root, dirs, files in os.walk(APP_DIR):
            # Skip api routes and special directories
            if 'api' in Path(root).parts or '_' in Path(root).name:
                continue

            if 'page.tsx' in files:
                pages.append(Path(root) / 'page.tsx')

        return sorted(pages)

    def audit(self):
        """Run the full audit"""
        print(f"🔍 Starting metadata audit...")
        print(f"📁 Scanning: {APP_DIR}")

        # Find all pages
        page_files = self.find_all_pages()
        print(f"📄 Found {len(page_files)} page.tsx files")

        # Extract and validate metadata
        for i, page_file in enumerate(page_files, 1):
            if i % 50 == 0:
                print(f"   Processing page {i}/{len(page_files)}...")

            metadata = self.extract_metadata(page_file)
            if metadata:
                self.pages_data.append(metadata)
                self.validate_metadata(metadata)

        # Find duplicates
        duplicate_titles = {title: files for title, files in self.titles.items() if len(files) > 1}
        duplicate_descriptions = {desc: files for desc, files in self.descriptions.items() if len(files) > 1}

        # Add duplicate issues
        for title, files in duplicate_titles.items():
            for file in files:
                self.add_issue(file, 'duplicate_title', f'Title "{title}" used by {len(files)} pages', 'error')

        for desc, files in duplicate_descriptions.items():
            for file in files:
                self.add_issue(file, 'duplicate_description', f'Description used by {len(files)} pages', 'error')

        # Generate summary
        summary = {
            'total_pages': len(self.pages_data),
            'pages_with_title': sum(1 for p in self.pages_data if p['title']),
            'pages_without_title': sum(1 for p in self.pages_data if not p['title']),
            'duplicate_titles': len(duplicate_titles),
            'pages_with_description': sum(1 for p in self.pages_data if p['description']),
            'pages_without_description': sum(1 for p in self.pages_data if not p['description']),
            'duplicate_descriptions': len(duplicate_descriptions),
            'pages_with_canonical': sum(1 for p in self.pages_data if p['canonical']),
            'pages_without_canonical': sum(1 for p in self.pages_data if not p['canonical']),
            'titles_over_60': sum(1 for p in self.pages_data if p['title'] and len(p['title']) > 60),
            'descriptions_over_160': sum(1 for p in self.pages_data if p['description'] and len(p['description']) > 160),
            'descriptions_under_120': sum(1 for p in self.pages_data if p['description'] and len(p['description']) < 120),
            'total_issues': len(self.issues),
            'error_count': sum(1 for i in self.issues if i['severity'] == 'error'),
            'warning_count': sum(1 for i in self.issues if i['severity'] == 'warning'),
        }

        # Prepare output
        output = {
            'summary': summary,
            'issues': sorted(self.issues, key=lambda x: (x['severity'], x['file'])),
            'duplicates': {
                'titles': {title: files for title, files in duplicate_titles.items()},
                'descriptions': {desc[:100] + '...': files for desc, files in duplicate_descriptions.items()}
            },
            'pages': self.pages_data
        }

        # Write output
        OUTPUT_FILE.write_text(json.dumps(output, indent=2), encoding='utf-8')

        # Print summary
        print(f"\n✅ Audit complete!")
        print(f"\n📊 SUMMARY:")
        print(f"   Total pages: {summary['total_pages']}")
        print(f"\n   Titles:")
        print(f"      ✓ With title: {summary['pages_with_title']}")
        print(f"      ✗ Missing title: {summary['pages_without_title']}")
        print(f"      ⚠ Duplicate titles: {summary['duplicate_titles']}")
        print(f"      ⚠ Over 60 chars: {summary['titles_over_60']}")
        print(f"\n   Descriptions:")
        print(f"      ✓ With description: {summary['pages_with_description']}")
        print(f"      ✗ Missing description: {summary['pages_without_description']}")
        print(f"      ⚠ Duplicate descriptions: {summary['duplicate_descriptions']}")
        print(f"      ⚠ Over 160 chars: {summary['descriptions_over_160']}")
        print(f"      ⚠ Under 120 chars: {summary['descriptions_under_120']}")
        print(f"\n   Canonical URLs:")
        print(f"      ✓ With canonical: {summary['pages_with_canonical']}")
        print(f"      ✗ Missing canonical: {summary['pages_without_canonical']}")
        print(f"\n   Issues:")
        print(f"      🔴 Errors: {summary['error_count']}")
        print(f"      🟡 Warnings: {summary['warning_count']}")
        print(f"      Total: {summary['total_issues']}")
        print(f"\n📝 Full report saved to: {OUTPUT_FILE}")

        return output

if __name__ == '__main__':
    auditor = MetadataAuditor()
    auditor.audit()
