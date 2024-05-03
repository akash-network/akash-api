#!/usr/bin/env bash

generated_dir="$AKASH_TS_ROOT/src/generated"
tmp_dir="$AKASH_DEVCACHE_BASE/tmp/ts"

if [ ! -d "$generated_dir" ]; then
    echo "Directory $generated_dir does not exist. Skipping..."
    exit 0
fi

preserve_patches() {
    echo "Preserving TypeScript patches..."
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
}

restore_patches() {
    echo "Restoring TypeScript patches..."
    find "$tmp_dir" -type f -name "*.ts" | while read -r src_file; do
        original_file_path=${src_file/$tmp_dir\//}
        renamed_original_file_path="${original_file_path/.ts/.original.ts}"
        echo "Restoring $original_file_path to $generated_dir/$original_file_path"

        mv "$generated_dir/$original_file_path" "$generated_dir/$renamed_original_file_path"
        mv "$tmp_dir/$original_file_path" "$generated_dir/$original_file_path"
    done
    rm -rf "$tmp_dir"
}

if [ "$1" = "preserve" ]; then
    preserve_patches
elif [ "$1" = "restore" ]; then
    restore_patches
else
    echo "Invalid argument. Use 'preserve' or 'restore'."
    exit 1
fi