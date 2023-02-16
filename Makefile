UNAME_OS              := $(shell uname -s)
UNAME_ARCH            := $(shell uname -m)

ifeq (, $(shell which direnv))
$(warning "No direnv in $(PATH), consider installing. https://direnv.net")
endif

# AKASH_ROOT may not be set if environment does not support/use direnv
# in this case define it manually as well as all required env variables
ifndef AKASH_ROOT
	AKASH_ROOT := $(abspath $(dir $(lastword $(MAKEFILE_LIST)))/../)
	include $(AKASH_ROOT)/.env

	# setup .cache bins first in paths to have precedence over already installed same tools for system wide use
	PATH                := $(AKASH_DEVCACHE_BIN):$(AKASH_DEVCACHE_NODE_BIN):$(PATH)
endif

GO                           := GO111MODULE=$(GO111MODULE) go
GO_MOD_NAME                  := $(shell go list -m 2>/dev/null)

BUF_VERSION                     ?= 1.13.1
PROTOC_VERSION                  ?= 21.12
GOGOPROTO_VERSION               ?= $(shell $(GO) list -mod=readonly -m -f '{{ .Version }}' github.com/cosmos/gogoproto)
PROTOC_GEN_GO_PULSAR_VERSION    ?= $(shell $(GO) list -mod=readonly -m -f '{{ .Version }}' github.com/cosmos/cosmos-proto)
PROTOC_GEN_GO_VERSION           ?= $(shell $(GO) list -mod=readonly -m -f '{{ .Version }}' google.golang.org/protobuf)
PROTOC_GEN_GRPC_GATEWAY_VERSION := $(shell $(GO) list -mod=readonly -m -f '{{ .Version }}' github.com/grpc-ecosystem/grpc-gateway)
PROTOC_GEN_SWAGGER_VERSION      := $(PROTOC_GEN_GRPC_GATEWAY_VERSION)
MODVENDOR_VERSION               ?= v0.5.0

BUF_VERSION_FILE                     := $(AKASH_DEVCACHE_VERSIONS)/buf/$(BUF_VERSION)
PROTOC_VERSION_FILE                  := $(AKASH_DEVCACHE_VERSIONS)/protoc/$(PROTOC_VERSION)
GOGOPROTO_VERSION_FILE               := $(AKASH_DEVCACHE_VERSIONS)/gogoproto/$(GOGOPROTO_VERSION)
PROTOC_GEN_GO_PULSAR_VERSION_FILE    := $(AKASH_DEVCACHE_VERSIONS)/protoc-gen-go-pulsar/$(PROTOC_GEN_GO_PULSAR_VERSION)
PROTOC_GEN_GO_VERSION_FILE           := $(AKASH_DEVCACHE_VERSIONS)/protoc-gen-go/$(PROTOC_GEN_GO_VERSION)
PROTOC_GEN_GRPC_GATEWAY_VERSION_FILE := $(AKASH_DEVCACHE_VERSIONS)/protoc-gen-grpc-gateway/$(PROTOC_GEN_GRPC_GATEWAY_VERSION)
PROTOC_GEN_SWAGGER_VERSION_FILE      := $(AKASH_DEVCACHE_VERSIONS)/protoc-gen-swagger/$(PROTOC_GEN_SWAGGER_VERSION)
MODVENDOR_VERSION_FILE               := $(AKASH_DEVCACHE_VERSIONS)/modvendor/$(MODVENDOR_VERSION)
GIT_CHGLOG_VERSION_FILE              := $(AKASH_DEVCACHE_VERSIONS)/git-chglog/$(GIT_CHGLOG_VERSION)

BUF                              := $(AKASH_DEVCACHE_BIN)/buf
PROTOC                           := $(AKASH_DEVCACHE_BIN)/protoc
PROTOC_GEN_GO_PULSAR             := $(AKASH_DEVCACHE_BIN)/protoc-gen-go-pulsar
PROTOC_GEN_GO                    := $(AKASH_DEVCACHE_BIN)/protoc-gen-go
PROTOC_GEN_GRPC_GATEWAY          := $(AKASH_DEVCACHE_BIN)/protoc-gen-grpc-gateway
PROTOC_GEN_SWAGGER               := $(AKASH_DEVCACHE_BIN)/protoc-gen-swagger
MODVENDOR                        := $(AKASH_DEVCACHE_BIN)/modvendor
GIT_CHGLOG                       := $(AKASH_DEVCACHE_BIN)/git-chglog
SWAGGER_COMBINE                  := $(AKASH_DEVCACHE_NODE_BIN)/swagger-combine

DOCKER_RUN            := docker run --rm -v $(shell pwd):/workspace -w /workspace
DOCKER_BUF            := $(DOCKER_RUN) bufbuild/buf:$(BUF_VERSION)

ifeq (, $(shell which direnv))
$(warning "No direnv in $(PATH), consider installing. https://direnv.net")
endif

# AKASH_ROOT may not be set if environment does not support/use direnv
# in this case define it manually as well as all required env variables
ifndef AKASH_ROOT
	AKASH_ROOT := $(abspath $(dir $(lastword $(MAKEFILE_LIST)))/../)
	include $(AKASH_ROOT)/.env

	AKASH               := $(AKASH_DEVCACHE_BIN)/akash
	# setup .cache bins first in paths to have precedence over already installed same tools for system wide use
	PATH                := $(AKASH_DEVCACHE_BIN):$(AKASH_DEVCACHE_NODE_BIN):$(PATH)
endif

include $(AKASH_ROOT)/make/setup-cache.mk
include $(AKASH_ROOT)/make/mod.mk
include $(AKASH_ROOT)/make/test.mk
include $(AKASH_ROOT)/make/codegen.mk
include $(AKASH_ROOT)/make/lint.mk
