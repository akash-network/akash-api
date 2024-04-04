#!/usr/bin/env bash

set -eo pipefail

PATH=$(pwd)/.cache/bin/legacy:$PATH
export PATH=$PATH

function cleanup {
    rm -rf github.com
}

trap cleanup EXIT

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
        -I "proto/node" \
        -I ".cache/include/google/protobuf" \
        -I "vendor/github.com/cosmos/cosmos-sdk/proto" \
        -I "vendor/github.com/cosmos/cosmos-sdk/third_party/proto" \
        --plugin="${AKASH_TS_NODE_BIN}/protoc-gen-ts_proto" \
        --ts_proto_out="${AKASH_TS_ROOT}/src/generated" \
        --ts_proto_opt=esModuleInterop=true,forceLong=long,outputTypeRegistry=true,useExactTypes=false \
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
        -I "proto/node" \
        -I ".cache/include" \
        -I "vendor/github.com/cosmos/cosmos-sdk/proto" \
        -I "vendor/github.com/cosmos/cosmos-sdk/third_party/proto" \
        --plugin="${AKASH_TS_NODE_BIN}/protoc-gen-ts_proto" \
        --ts_proto_out="${AKASH_TS_ROOT}/src/generated" \
        --ts_proto_opt=esModuleInterop=true,forceLong=long,outputTypeRegistry=true,useExactTypes=false \
        $(find "${dir}" -maxdepth 1 -name '*.proto')
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
