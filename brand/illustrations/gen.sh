#!/usr/bin/env bash
# gen.sh NAME SIZE PROMPTFILE [extra reference images...]
set -u
cd "$(dirname "$0")"
# the style reference is the founder portrait
[ -f style-ref.png ] || cp ../../public/logo/founder.png style-ref.png
set -a; . ../../.env; set +a
name=$1; size=$2; pf=$3; shift 3
args=(-F model=gpt-image-2.5-sunburst -F "size=$size" -F quality=high -F output_format=png -F "prompt=<$pf" -F "image[]=@style-ref.png")
for r in "$@"; do args+=(-F "image[]=@$r"); done
start=$(date +%s)
curl -s --max-time 600 https://api.openai.com/v1/images/edits -H "Authorization: Bearer $OPENAI_API_KEY" "${args[@]}" -o "$name.json"
if jq -e '.data[0].b64_json' "$name.json" >/dev/null 2>&1; then
  jq -r '.data[0].b64_json' "$name.json" | base64 -d > "$name.png"; rm "$name.json"
  echo "ok $name $(( $(date +%s)-start ))s"
else
  echo "FAIL $name: $(jq -c '.error // .' "$name.json" | head -c 400)"
fi
