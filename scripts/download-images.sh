#!/usr/bin/env bash
# Downloads all family photos referenced by the site into public/images/
# Run from the project root: ./scripts/download-images.sh
set -euo pipefail

cd "$(dirname "$0")/.."
mkdir -p public/images

echo "Downloading family photos…"

curl -L "https://assets.zyrosite.com/2LQwS4mHpVxgNtW7/family-wide-qHkkDWyqcO2aecoi.jpeg" -o public/images/family-wide.jpg
curl -L "https://assets.zyrosite.com/2LQwS4mHpVxgNtW7/img_4766-DMOlsZsKTQqcevLc.JPG"     -o public/images/family-1.jpg
curl -L "https://assets.zyrosite.com/2LQwS4mHpVxgNtW7/img_1542-EyMOtR9EAKVb5kCb.JPG"     -o public/images/family-2.jpg
curl -L "https://assets.zyrosite.com/2LQwS4mHpVxgNtW7/img_0882-xf0l4NBCpbTx9MzW.JPEG"    -o public/images/family-3.jpg
curl -L "https://assets.zyrosite.com/2LQwS4mHpVxgNtW7/luke-headshot-Ul7ztRO3AO8lZqMA.jpeg" -o public/images/luke.jpg

echo "Done. Files in public/images/:"
ls -lh public/images/
