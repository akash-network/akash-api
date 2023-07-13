.PHONY: proto-gen
ifeq ($(PROTO_LEGACY), true)
proto-gen: modvendor $(PROTOC) $(PROTOC_GEN_GOCOSMOS) $(PROTOC_GEN_GRPC_GATEWAY)
	./script/protocgen-legacy.sh
else
proto-gen: modvendor gogoproto $(BUF) $(PROTOC_GEN_GRPC_GATEWAY) $(PROTOC_GEN_GO)
	./script/protocgen.sh
endif

.PHONY: proto-gen-swagger
proto-gen-swagger: modvendor $(BUF) $(PROTOC_GEN_SWAGGER) $(SWAGGER_COMBINE)
	./script/protoc-gen-swagger.sh

.PHONY: codegen
codegen: proto-gen proto-gen-swagger

.PHONY: changelog
changelog: $(GIT_CHGLOG)
	@echo "generating changelog to changelog"
	./script/changelog.sh $(shell git describe --tags --abbrev=0) changelog.md
