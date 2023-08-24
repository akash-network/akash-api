TEST_MODULE   ?= ./...

COVER_PACKAGES = $(shell go list ./... | grep -v mock | paste -sd, -)

.PHONY: shellcheck
shellcheck:
	docker run --rm \
	--volume $(PWD):/shellcheck \
	--entrypoint sh \
	koalaman/shellcheck-alpine:stable \
	-x /shellcheck/script/shellcheck.sh

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
test:
	$(GO) test $(test_flags) $(TEST_MODULE)

.PHONY: test-coverage
test-coverage:
	$(GO) test -coverprofile=coverage.txt \
		-covermode=count \
		-coverpkg="$(COVER_PACKAGES)" \
		$(TEST_MODULE)

.PHONY: test-vet
test-vet:
	$(GO) vet $(TEST_MODULE)
