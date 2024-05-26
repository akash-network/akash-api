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
	(cd $(GO_ROOT); $(GO) mod tidy)

.PHONY: deps-vendor
deps-vendor:
	(cd $(GO_ROOT); go mod vendor)

.PHONY: modsensure
modsensure: deps-tidy deps-vendor

.PHONY: modvendor
modvendor: export VENDOR_BUF:=$(VENDOR_BUF)
modvendor: $(MODVENDOR) modsensure
	@echo "vendoring non-go files..."
	@(cd $(GO_ROOT); \
		$(MODVENDOR) -copy="**/*.proto" -include=k8s.io/apimachinery \
		$(MODVENDOR) -copy="**/swagger.yaml" -include=github.com/cosmos/cosmos-sdk/client/docs/swagger-ui \
	)
	@mkdir -p .cache/include/k8s
	ln -snf ../../../$(GO_ROOT)/vendor/k8s.io .cache/include/k8s/io
	echo "$${VENDOR_BUF}" > $(GO_ROOT)/vendor/k8s.io/buf.yaml
