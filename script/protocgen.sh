#!/usr/bin/env bash

set -eo pipefail

PATH=$(pwd)/.cache/bin:$PATH
export PATH=$PATH

function cleanup {
    rm -rf github.com
}

trap cleanup EXIT

proto_dirs=$(find ./proto -path -prune -o -name '*.proto' -print0 | xargs -0 -n1 dirname | sort | uniq)
#shellcheck disable=SC2046
for dir in $proto_dirs; do
    while IFS= read -r -d '' file; do
        buf generate --template buf.gen.gogo.yaml "$file"
    done <  <(find "${dir}" -maxdepth 1 -name '*.proto' -print0)
done

# move proto files to the right places
cp -rv github.com/akash-network/akash-api/* ./
