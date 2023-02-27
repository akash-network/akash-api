#!/usr/bin/env bash

set -eo pipefail

workdir=./.cache/tmp/swagger-gen

function cleanup {
    rm -rf "$workdir"
}

# clean swagger files
#trap cleanup EXIT

proto_files=$(find ./proto -type f \( -name 'service.proto' -o -name "query.proto" \) -print0 | xargs -0 -n1 | sort | uniq)

for file in $proto_files; do
    buf generate --template buf.gen.swagger.yaml "$file"
done

mkdir -p ./docs/swagger-ui

# combine swagger files
# uses nodejs package `swagger-combine`.
# all the individual swagger files need to be configured in `config.json` for merging
swagger-combine \
    ./docs/config.yaml \
    -o ./docs/swagger-ui/swagger.yaml \
    --continueOnConflictingPaths=true \
    --includeDefinitions=true
