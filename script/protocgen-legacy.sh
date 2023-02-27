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
        -I "vendor/github.com/cosmos/cosmos-sdk/proto" \
        -I "vendor/github.com/cosmos/cosmos-sdk/third_party/proto" \
        --gocosmos_out=plugins=interfacetype+grpc,Mgoogle/protobuf/any.proto=github.com/cosmos/cosmos-sdk/codec/types:. \
        $(find "${dir}" -maxdepth 1 -name '*.proto')

    # command to generate gRPC gateway (*.pb.gw.go in respective modules) files
    .cache/bin/protoc \
        -I "proto/node" \
        -I "vendor/github.com/cosmos/cosmos-sdk/proto" \
        -I "vendor/github.com/cosmos/cosmos-sdk/third_party/proto" \
        --grpc-gateway_out=logtostderr=true:. \
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
        --gocosmos_out=plugins=interfacetype+grpc,Mgoogle/protobuf/any.proto=github.com/cosmos/cosmos-sdk/codec/types:. \
        $(find "${dir}" -maxdepth 1 -name '*.proto')
done

# move proto files to the right places
cp -rv github.com/akash-network/akash-api/* ./
