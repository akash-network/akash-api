#!/usr/bin/env bash

echo "Preserving TypeScript patches..."
generated_dir="$AKASH_TS_ROOT/src/generated"
tmp_dir="$AKASH_DEVCACHE_BASE/tmp/ts"

if [ ! -d "$generated_dir" ]; then
    echo "Directory $generated_dir does not exist. Skipping..."
    exit 0
fi

find "$generated_dir" -type f -name "*.original.ts" | while read -r src_file; do
    src_file=${src_file//.original/}
    gen_dir=$(dirname "$src_file")
    gen_dir=${gen_dir//$generated_dir\//}
    file=$(basename "$src_file" .original.ts)
    mkdir -p "$tmp_dir/$gen_dir"
    tmp_file="$tmp_dir/$gen_dir/$file"

    echo "Preserving $src_file to $tmp_file"
    cp "$src_file" "$tmp_file"
done
