.PHONY: lint
lint: $(BUF)
	$(BUF) lint

.PHONY: check-breaking
proto-check-breaking: $(BUF)
	$(BUF) breaking --against '.git#branch=main'

.PHONY: format
proto-format:
	$(DOCKER_CLANG) find ./ ! -path "./vendor/*" -name *.proto -exec clang-format -i {} \;
