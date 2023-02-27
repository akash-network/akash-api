# Golang modules and vendoring

define VENDOR_BUF
version: v1
lint:
  use:
    - DEFAULT
  ignore:
    - ibc
    - cosmos
    - tendermint
    - gogoproto
    - cosmos_proto
    - google
    - confio
endef

.PHONY: deps-tidy
deps-tidy:
	$(GO) mod tidy

.PHONY: deps-vendor
deps-vendor:
	go mod vendor

.PHONY: modsensure
modsensure: deps-tidy deps-vendor

.PHONY: modvendor
modvendor: export VENDOR_BUF:=$(VENDOR_BUF)
modvendor: $(MODVENDOR) modsensure
	@echo "vendoring non-go files..."
	$(MODVENDOR) -copy="**/*.proto" -include=github.com/cosmos/cosmos-sdk/proto,github.com/cosmos/cosmos-sdk/third_party/proto,github.com/cosmos/ibc-go/v3/proto
	$(MODVENDOR) -copy="**/Makefile" -include=github.com/cosmos/gogoproto
	$(MODVENDOR) -copy="**/*.proto" -include=github.com/cosmos/cosmos-proto/proto
	$(MODVENDOR) -copy="**/swagger.yaml" -include=github.com/cosmos/cosmos-proto/client/docs/swagger-ui
	@echo "$${VENDOR_BUF}" > vendor/github.com/cosmos/cosmos-sdk/proto/buf.yaml
	@echo "$${VENDOR_BUF}" > vendor/github.com/cosmos/cosmos-sdk/third_party/proto/buf.yaml
