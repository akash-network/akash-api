#!/usr/bin/env bash

set -eo pipefail

PATH=$(pwd)/.cache/bin/legacy:$PATH
export PATH=$PATH

function cleanup {
    # put absolute path
    rm -rf "${AKASH_ROOT}/github.com"
    rm -rf "$AKASH_DEVCACHE_TS_TMP_GRPC_JS"
}

trap cleanup EXIT ERR

script/ts-patches.sh preserve

ts_generated="${AKASH_TS_ROOT}/src/generated"
rm -rf "$ts_generated"
mkdir -p "$ts_generated"

proto_dirs=$(find ./proto/node -path -prune -o -name '*.proto' -print0 | xargs -0 -n1 dirname | sort | uniq)
#shellcheck disable=SC2046
for dir in $proto_dirs; do
    .cache/bin/protoc \
        -I "proto/node" \
        -I ".cache/include/google/protobuf" \
        -I "vendor/github.com/cosmos/cosmos-sdk/proto" \
        -I "vendor/github.com/cosmos/cosmos-sdk/third_party/proto" \
        --gocosmos_out=plugins=interfacetype+grpc,Mgoogle/protobuf/any.proto=github.com/cosmos/cosmos-sdk/codec/types:. \
        $(find "${dir}" -maxdepth 1 -name '*.proto')

    # command to generate gRPC gateway (*.pb.gw.go in respective modules) files
    .cache/bin/protoc \
        -I "proto/node" \
        -I ".cache/include" \
        -I "vendor/github.com/cosmos/cosmos-sdk/proto" \
        -I "vendor/github.com/cosmos/cosmos-sdk/third_party/proto" \
        --grpc-gateway_out=logtostderr=true:. \
        $(find "${dir}" -maxdepth 1 -name '*.proto')

    .cache/bin/protoc \
        -I ".cache/include/google/protobuf" \
        -I "proto/node" \
        -I "vendor/github.com/cosmos/cosmos-sdk/proto" \
        -I "vendor/github.com/cosmos/cosmos-sdk/third_party/proto" \
        --plugin="${AKASH_TS_NODE_BIN}/protoc-gen-ts_proto" \
        --ts_proto_out="${AKASH_TS_ROOT}/src/generated" \
        --ts_proto_opt="esModuleInterop=true,forceLong=long,outputTypeRegistry=true,useExactTypes=false,outputIndex=true" \
        $(find "${dir}" -maxdepth 1 -name '*.proto')

    .cache/bin/protoc \
        -I ".cache/include/google/protobuf" \
        -I "proto/node" \
        -I "vendor/github.com/cosmos/cosmos-sdk/proto" \
        -I "vendor/github.com/cosmos/cosmos-sdk/third_party/proto" \
        --plugin="${AKASH_TS_NODE_BIN}/protoc-gen-ts_proto" \
        --ts_proto_out="$AKASH_DEVCACHE_TS_TMP_GRPC_JS" \
        --ts_proto_opt="esModuleInterop=true,forceLong=long,outputTypeRegistry=true,useExactTypes=false,outputServices=grpc-js" \
        $(find "${dir}" -maxdepth 1 -name '*.proto')
done

proto_dirs=$(find ./proto/provider -path -prune -o -name '*.proto' -print0 | xargs -0 -n1 dirname | sort | uniq)
#shellcheck disable=SC2046
for dir in $proto_dirs; do
    .cache/bin/protoc \
        -I "proto/provider" \
        -I "proto/node" \
        -I "vendor/github.com/cosmos/cosmos-sdk/proto" \
        -I "vendor/github.com/cosmos/cosmos-sdk/third_party/proto" \
        -I "vendor" \
        --gocosmos_out=plugins=interfacetype+grpc,Mgoogle/protobuf/any.proto=github.com/cosmos/cosmos-sdk/codec/types:. \
        $(find "${dir}" -maxdepth 1 -name '*.proto')

    # command to generate gRPC gateway (*.pb.gw.go in respective modules) files
    .cache/bin/protoc \
        -I "proto/provider" \
        -I "proto/node" \
        -I ".cache/include" \
        -I "vendor/github.com/cosmos/cosmos-sdk/proto" \
        -I "vendor/github.com/cosmos/cosmos-sdk/third_party/proto" \
        --grpc-gateway_out=logtostderr=true:. \
        $(find "${dir}" -maxdepth 1 -name '*.proto')

    .cache/bin/protoc \
        -I "proto/provider" \
        -I ".cache/include" \
        -I "proto/node" \
        -I "vendor/github.com/cosmos/cosmos-sdk/proto" \
        -I "vendor/github.com/cosmos/cosmos-sdk/third_party/proto" \
        --plugin="${AKASH_TS_NODE_BIN}/protoc-gen-ts_proto" \
        --ts_proto_out="${AKASH_TS_ROOT}/src/generated" \
        --ts_proto_opt="esModuleInterop=true,forceLong=long,outputTypeRegistry=true,useExactTypes=false,outputIndex=true" \
        $(find "${dir}" -maxdepth 1 -name '*.proto')

    .cache/bin/protoc \
        -I "proto/provider" \
        -I ".cache/include" \
        -I "proto/node" \
        -I "vendor/github.com/cosmos/cosmos-sdk/proto" \
        -I "vendor/github.com/cosmos/cosmos-sdk/third_party/proto" \
        --plugin="${AKASH_TS_NODE_BIN}/protoc-gen-ts_proto" \
        --ts_proto_out="$AKASH_DEVCACHE_TS_TMP_GRPC_JS" \
        --ts_proto_opt="esModuleInterop=true,forceLong=long,outputTypeRegistry=true,useExactTypes=false,outputServices=grpc-js" \
        $(find "${dir}" -maxdepth 1 -name '*.proto')
done

# merge generated grpc-js services to the main generated directory
ts_grpc_js_services=$(find "$AKASH_DEVCACHE_TS_TMP_GRPC_JS" -name 'service.ts')

for file in $ts_grpc_js_services; do
    dest_path=$(dirname "${file/$AKASH_DEVCACHE_TS_TMP_GRPC_JS/$AKASH_TS_ROOT\/src\/generated}")
    dest_file="${dest_path}/service.grpc-js.ts"

    mv "$file" "$dest_file"

    path_from_gen_dir=${dest_file#"${AKASH_TS_ROOT}/src/generated/"}
    index_file_name_base=${path_from_gen_dir%/service.grpc-js.ts}
    index_file_name="index.${index_file_name_base//\//.}.grpc-js.ts"
    index_file_path="${AKASH_TS_ROOT}/src/generated/$index_file_name"
    export_statement="export * from \"./${path_from_gen_dir%.ts}\";"

    echo "$export_statement" > "$index_file_path"
done

# move proto files to the right places
cp -rv github.com/akash-network/akash-api/* ./

# shellcheck disable=SC2046
.cache/bin/protoc \
    -I "proto/node" \
    -I "vendor/github.com/cosmos/cosmos-sdk/proto" \
    -I "vendor/github.com/cosmos/cosmos-sdk/third_party/proto" \
    --doc_out=./docs/proto \
    --doc_opt=./docs/protodoc-markdown.tmpl,node.md \
    $(find "./proto/node" -maxdepth 4 -name '*.proto')

# shellcheck disable=SC2046
.cache/bin/protoc \
    -I "proto/provider" \
    -I "proto/node" \
    -I "vendor/github.com/cosmos/cosmos-sdk/proto" \
    -I "vendor/github.com/cosmos/cosmos-sdk/third_party/proto" \
    -I "vendor" \
    --doc_out=./docs/proto \
    --doc_opt=./docs/protodoc-markdown.tmpl,provider.md \
    $(find "./proto/provider" -maxdepth 4 -name '*.proto')

script/ts-patches.sh restore

npm run format --prefix "$AKASH_TS_ROOT"
