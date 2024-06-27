PROTO_GEN_MODS ?= go \
ts \
doc

.PHONY: proto-gen
proto-gen: $(patsubst %, proto-gen-%,$(PROTO_GEN_MODS))

.PHONY: proto-gen-go
proto-gen-go: $(BUF) $(GOGOPROTO) $(PROTOC_GEN_GOCOSMOS) $(PROTOC_GEN_GRPC_GATEWAY) $(PROTOC_GEN_GO)
	./script/protocgen.sh go $(GO_MOD_NAME) $(GO_ROOT)

.PHONY: proto-gen-ts
proto-gen-ts: $(BUF) $(AKASH_TS_NODE_MODULES)
	./script/protocgen.sh ts $(GO_MOD_NAME)

.PHONY: proto-gen-doc
proto-gen-doc: $(BUF) $(SWAGGER_COMBINE) $(PROTOC_GEN_DOC) $(PROTOC_GEN_SWAGGER)
	./script/protocgen.sh doc $(GO_MOD_NAME)

mocks: $(MOCKERY)
	(cd $(GO_ROOT); $(GO) generate ./...)

.PHONY: codegen
codegen: proto-gen mocks

.PHONY: changelog
changelog: $(GIT_CHGLOG)
	@echo "generating changelog to changelog"
	./script/changelog.sh $(shell git describe --tags --abbrev=0) changelog.md
