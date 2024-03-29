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
    - k8s.io
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
modvendor: $(MODVENDOR) $(PROTOC) modsensure
	@echo "vendoring non-go files..."
	$(MODVENDOR) -copy="**/*.proto" -include=github.com/cosmos/cosmos-sdk/proto,github.com/cosmos/cosmos-sdk/third_party/proto
	$(MODVENDOR) -copy="**/Makefile" -include=github.com/cosmos/gogoproto
	$(MODVENDOR) -copy="**/*.proto" -include=github.com/cosmos/cosmos-proto/proto
	$(MODVENDOR) -copy="**/swagger.yaml" -include=github.com/cosmos/cosmos-proto/client/docs/swagger-ui
	$(MODVENDOR) -copy="**/*.proto" -include=k8s.io/apimachinery
	@ln -snf ../../vendor/k8s.io .cache/include/k8s.io
	@echo "$${VENDOR_BUF}" > vendor/k8s.io/buf.yaml
	@echo "$${VENDOR_BUF}" > .cache/include/google/buf.yaml
	@echo "$${VENDOR_BUF}" > vendor/github.com/cosmos/cosmos-sdk/proto/buf.yaml
	@echo "$${VENDOR_BUF}" > vendor/github.com/cosmos/cosmos-sdk/third_party/proto/buf.yaml
