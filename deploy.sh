#!/usr/bin/env bash
# Deploy this site's files to GoDaddy cPanel hosting via the cPanel UAPI.
#
# One-time setup: create an API token in cPanel (Security -> Manage API Tokens)
# and save it in ~/.config/godaddy-cpanel/env :
#   CPANEL_HOST=p3plzcpnl504300.prod.phx3.secureserver.net
#   CPANEL_USER=itjfn6oc46op
#   CPANEL_TOKEN=<your token>
#
# Usage: ./deploy.sh
# Uploads every git-tracked file (except repo meta), preserving subdirectories.
set -euo pipefail
source "$HOME/.config/godaddy-cpanel/env"
DOMAIN=$(basename "$(git rev-parse --show-toplevel)")
DEST="/home/${CPANEL_USER}/public_html/${DOMAIN}"
AUTH="Authorization: cpanel ${CPANEL_USER}:${CPANEL_TOKEN}"
API="https://${CPANEL_HOST}:2083/execute"

urlenc() { python3 -c 'import urllib.parse,sys;print(urllib.parse.quote(sys.argv[1]))' "$1"; }

FILES=$(git ls-files | grep -vE '^(\.cpanel\.yml|README\.md|deploy\.sh|\.gitignore|\.github/)')
DIRS=$(echo "$FILES" | xargs -n1 dirname | sort -u | grep -v '^\.$' || true)

# ensure remote directories exist (segment by segment)
for d in $DIRS; do
  path="$DEST"
  IFS='/' read -ra segs <<< "$d"
  for s in "${segs[@]}"; do
    curl -sS -H "$AUTH" "$API/Fileman/mkdir?path=$(urlenc "$path")&name=$(urlenc "$s")" >/dev/null 2>&1 || true
    path="$path/$s"
  done
done

# upload files grouped per directory
for d in . $DIRS; do
  target="$DEST"; [ "$d" != "." ] && target="$DEST/$d"
  if [ "$d" = "." ]; then
    group=$(echo "$FILES" | grep -v '/' || true)
  else
    group=$(echo "$FILES" | grep "^$d/" | grep -vE "^$d/.*/" || true)
  fi
  [ -z "$group" ] && continue
  printf '%-30s' "→ ${d}/"
  echo "$group" | split -l 40 - /tmp/dpl_chunk_
  for chunk in /tmp/dpl_chunk_*; do
    args=(); i=1
    while IFS= read -r f; do
      args+=(-F "file-${i}=@${f}"); i=$((i+1))
    done < "$chunk"
    curl -sS -H "$AUTH" "$API/Fileman/upload_files?overwrite=1&dir=$(urlenc "$target")" "${args[@]}" \
      | python3 -c 'import json,sys;j=json.load(sys.stdin);d=j.get("data") or {};print("ok:",d.get("succeeded"),"failed:",d.get("failed"),j.get("errors") or "")' | tr -d '\n'
    rm -f "$chunk"
  done
  echo
done
echo "Done: https://${DOMAIN}/"
