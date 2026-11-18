#!/usr/bin/env bash
set -euo pipefail

if [[ $# -ne 1 || ! "$1" =~ ^[0-9a-f]{40}$ ]]; then
  echo "Usage: fotowoltaika-promote <40-character commit SHA>" >&2
  exit 2
fi

commit="$1"
site_root="/var/www/fotowoltaika.221studio.pl"
stage_root="/home/fotowoltaika-deploy/incoming"
stage="$stage_root/$commit"
release="$site_root/releases/$commit"
temporary_release="$site_root/releases/.$commit.staging"

for required_file in index.html kalisz/index.html fotowoltaika/index.html; do
  if [[ ! -f "$stage/$required_file" ]]; then
    echo "Missing exported page: $stage/$required_file" >&2
    exit 1
  fi
done

if [[ ! -d "$stage/_next" ]]; then
  echo "Missing Next.js assets: $stage/_next" >&2
  exit 1
fi

if [[ ! -e "$release" ]]; then
  rm -rf "$temporary_release"
  install -d -o root -g root -m 755 "$temporary_release"
  rsync -r --no-owner --no-group --chmod=D755,F644 "$stage/" "$temporary_release/"

  for required_file in index.html kalisz/index.html fotowoltaika/index.html; do
    if [[ ! -f "$temporary_release/$required_file" ]]; then
      echo "Export is missing after copy: $temporary_release/$required_file" >&2
      exit 1
    fi
  done

  mv "$temporary_release" "$release"
fi

temporary_link="$site_root/.current-$commit"
rm -f "$temporary_link"
ln -s "$release" "$temporary_link"
mv -Tf "$temporary_link" "$site_root/current"

echo "Published $commit to $site_root/current"
