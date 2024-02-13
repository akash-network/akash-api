BUF_LINT_PACKAGES ?= provider \
node

.PHONY: lint-go
lint-go: $(GOLANGCI_LINT)
	$(GOLANGCI_LINT_RUN) ./... --issues-exit-code=0 --deadline=20m

.PHONY: lint-go-%
lint-go-%: $(GOLANGCI_LINT)
	$(GOLINT) $*

.PHONY: lint-proto-%
lint-proto-%:
	$(BUF) lint proto/$*

.PHONY: lint-proto
lint-proto: $(BUF) $(patsubst %, lint-proto-%,$(BUF_LINT_PACKAGES))

.PHONY: lint
lint: lint-go lint-proto

.PHONY: check-breaking
proto-check-breaking: $(BUF)
	$(BUF) breaking --against '.git#branch=main'

.PHONY: format
proto-format:
	$(DOCKER_CLANG) find ./ ! -path "./vendor/*" -name *.proto -exec clang-format -i {} \;
