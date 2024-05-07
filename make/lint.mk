SUB_LINT ?= go \
proto \
shell \
ts

BUF_LINT_PACKAGES ?= provider \
node

.PHONY: lint-go
lint-go: $(GOLANGCI_LINT)
	(cd $(GO_PKG); $(GOLANGCI_LINT_RUN) ./... --issues-exit-code=0)

.PHONY: lint-go-%
lint-go-%: $(GOLANGCI_LINT)
	(cd $(GO_PKG); $(GOLINT) $*)

.PHONY: lint-proto-%
lint-proto-%:
	$(BUF) lint proto/$*

.PHONY: lint-proto
lint-proto: $(BUF) $(patsubst %, lint-proto-%,$(BUF_LINT_PACKAGES))

.PHONY: lint-shell
lint-shell:
	docker run --rm \
	--volume $(PWD):/shellcheck \
	--entrypoint sh \
	koalaman/shellcheck-alpine:stable \
	-x /shellcheck/script/shellcheck.sh

.PHONY: lint
lint: $(patsubst %, lint-%,$(SUB_LINT))

.PHONY: check-breaking
proto-check-breaking: $(BUF)
	$(BUF) breaking --against '.git#branch=main'

.PHONY: format
proto-format:
	$(DOCKER_CLANG) find ./ ! -path "./vendor/*" -name *.proto -exec clang-format -i {} \;

.PHONY: lint-ts
lint-ts: $(AKASH_TS_NODE_MODULES)
	cd ts && npm run lint;
