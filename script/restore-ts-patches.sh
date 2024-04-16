#!/usr/bin/env bash

echo "Restoring TypeScript patches..."

tmp_dir="$AKASH_DEVCACHE_BASE/tmp/ts"
generated_dir="$AKASH_TS_ROOT/src/generated"

if [ ! -d "$tmp_dir" ]; then
    echo "Directory $tmp_dir does not exist. Skipping..."
    exit 0
fi

find "$tmp_dir" -type f -name "*.ts" | while read -r src_file; do
    original_file_path=${src_file/$tmp_dir\//}
    renamed_original_file_path="${original_file_path/.ts/.original.ts}"
    echo "Restoring $original_file_path to $generated_dir/$original_file_path"

    mv "$generated_dir/$original_file_path" "$generated_dir/$renamed_original_file_path"
    mv "$tmp_dir/$original_file_path" "$generated_dir/$original_file_path"
done

rm -rf "$tmp_dir"
