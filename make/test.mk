TEST_MODULE   ?= ./...
SUB_TESTS     ?= go \
ts

COVER_PACKAGES = $(shell go list ./... | grep -v mock | paste -sd, -)

TEST_TIMEOUT  ?= 300
TEST_RACE     ?= 0
TEST_NOCACHE  ?= 0
TEST_VERBOSE  ?= 0

test_flags := -timeout $(TEST_TIMEOUT)s

ifeq ($(TEST_NOCACHE), 1)
test_flags += -count=1
endif

ifeq ($(TEST_RACE), 1)
test_flags += -race
endif

ifeq ($(TEST_VERBOSE), 1)
test_flags += -v
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
	$(GO) test $(test_flags) $(TEST_MODULE)

.PHONY: test-coverage-go
test-coverage-go:
	$(GO) test -coverprofile=coverage.txt \
		-covermode=count \
		-coverpkg="$(COVER_PACKAGES)" \
		$(TEST_MODULE)

.PHONY: test-go-vet
test-go-vet:
	$(GO) vet $(TEST_MODULE)
