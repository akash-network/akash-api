TEST_GO_MODULES ?= ./...

SUB_TESTS       ?= go \
ts

COVER_GO_PACKAGES = $(shell cd $(GO_PKG); go list ./... | grep -v mock | paste -sd, -)

TEST_GO_OPTS     ?=
TEST_GO_TIMEOUT  ?= 300

test_go_flags := -timeout $(TEST_GO_TIMEOUT)s

ifneq (,$(findstring nocache,$(TEST_GO_OPTS)))
test_go_flags += -count=1
endif

ifneq (,$(findstring race,$(TEST_GO_OPTS)))
test_go_flags += -race
endif

ifneq (,$(findstring verbose,$(TEST_GO_OPTS)))
test_go_flags += -v
endif

.PHONY: test
test: $(patsubst %, test-%,$(SUB_TESTS))

.PHONY: test-coverage
test-coverage: $(patsubst %, test-coverage-%,$(SUB_TESTS))

.PHONY: test-ts
test-ts: $(AKASH_TS_NODE_MODULES)
	cd ts && npm run test

.PHONY: test-coverage-ts
test-coverage-ts: $(AKASH_TS_NODE_MODULES)
	cd ts && npm run test:cov

.PHONY: test-go
test-go:
	cd $(GO_PKG) && $(GO) test $(test_go_flags) $(TEST_GO_MODULES)

.PHONY: test-coverage-go
test-coverage-go:
	cd $(GO_PKG) && $(GO) test -coverprofile=coverage.txt \
		-covermode=count \
		-coverpkg="$(COVER_GO_PACKAGES)" \
		$(TEST_GO_MODULES)

.PHONY: test-go-vet
test-go-vet:
	cd $(GO_PKG) && $(GO) vet $(TEST_GO_MODULES)
