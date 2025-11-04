#!/usr/bin/env bash
set -euo pipefail

# configurable: override by env var SMOKE_URL
URL="${SMOKE_URL:-http://foodweb.mycompany.com/}"
TIMEOUT=${SMOKE_TIMEOUT:-10}

echo "Running smoke test against: $URL"

# try a few times if DNS/ingress just updated
for i in 1 2 3; do
  STATUS=$(curl -s -o /dev/null -w '%{http_code}' --max-time $TIMEOUT "$URL" || echo 000)
  echo "Attempt #$i -> HTTP $STATUS"
  if [ "$STATUS" = "200" ] || [ "$STATUS" = "304" ]; then
    echo "Smoke test passed"
    exit 0
  fi
  sleep 3
done

echo "Smoke test failed (last HTTP $STATUS)" >&2
exit 1
