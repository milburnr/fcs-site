#!/bin/bash
# Post-deploy PageSpeed check — catches regressions before they become problems
# Usage: ./scripts/check-pagespeed.sh [url] [min-score]
# Requires PAGESPEED_API_KEY in .env.local

set -e

URL="${1:-https://floridaconstructionspecialists.com/}"
MIN_SCORE="${2:-85}"
CACHE_BUST="?psi_check=$(date +%s)"

# Load API key
if [ -f .env.local ]; then
  source .env.local
fi

if [ -z "$PAGESPEED_API_KEY" ]; then
  echo "⚠️  No PAGESPEED_API_KEY in .env.local — skipping check"
  exit 0
fi

echo "Testing: ${URL}${CACHE_BUST}"
echo "Minimum score: ${MIN_SCORE}"
echo ""

RESULT=$(curl -s "https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${URL}${CACHE_BUST}&strategy=mobile&category=performance&key=${PAGESPEED_API_KEY}")

SCORE=$(echo "$RESULT" | python3 -c "
import json, sys
data = json.load(sys.stdin)
lr = data.get('lighthouseResult', {})
audits = lr.get('audits', {})
cats = lr.get('categories', {})
perf = cats.get('performance', {})
score = int(perf.get('score', 0) * 100)
fcp = audits.get('first-contentful-paint', {}).get('displayValue', '?')
lcp = audits.get('largest-contentful-paint', {}).get('displayValue', '?')
si = audits.get('speed-index', {}).get('displayValue', '?')
tbt = audits.get('total-blocking-time', {}).get('displayValue', '?')
cls = audits.get('cumulative-layout-shift', {}).get('displayValue', '?')
print(f'{score}')
print(f'FCP: {fcp}  LCP: {lcp}  SI: {si}  TBT: {tbt}  CLS: {cls}')

# Flag specific problems
lcp_val = float(audits.get('largest-contentful-paint', {}).get('numericValue', 0)) / 1000
if lcp_val > 4.0:
    print(f'WARNING: LCP {lcp_val:.1f}s > 4.0s — check for bandwidth competition')

nr = audits.get('network-requests', {})
if nr.get('details', {}).get('items'):
    preloads = [i for i in nr['details']['items'] if 'preload' in str(i.get('initiatorType', ''))]
    big_early = [i for i in nr['details']['items'] if i.get('transferSize', 0) > 100000 and i.get('startTime', 999) < 1000]
    if len(big_early) > 2:
        print(f'WARNING: {len(big_early)} resources >100KB loading in first second — bandwidth competition likely')
" 2>&1)

SCORE_NUM=$(echo "$SCORE" | head -1)
DETAILS=$(echo "$SCORE" | tail -n +2)

echo "Score: ${SCORE_NUM}"
echo "$DETAILS"
echo ""

if [ "$SCORE_NUM" -lt "$MIN_SCORE" ]; then
  echo "FAIL: Score ${SCORE_NUM} < minimum ${MIN_SCORE}"
  echo ""
  echo "Common causes:"
  echo "  - New <link rel='preload'> competing with hero (check Next.js Image priority prop)"
  echo "  - Script strategy='afterInteractive' generates preloads (use lazyOnload for non-critical)"
  echo "  - Large images loading before hero finishes (check lazy loading)"
  echo "  - New dependencies increasing JS bundle size"
  echo ""
  echo "Debug: run PageSpeed Insights manually and check LCP breakdown"
  exit 1
else
  echo "PASS"
fi
