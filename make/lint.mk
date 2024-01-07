BUF_LINT_PACKAGES ?= provider \
node

.PHONY: lint-%
lint-%:
	$(BUF) lint proto/$*

.PHONY: lint
lint: $(BUF) $(patsubst %, lint-%,$(BUF_LINT_PACKAGES))

.PHONY: check-breaking
proto-check-breaking: $(BUF)
	$(BUF) breaking --against '.git#branch=main'

.PHONY: format
proto-format:
	$(DOCKER_CLANG) find ./ ! -path "./vendor/*" -name *.proto -exec clang-format -i {} \;
