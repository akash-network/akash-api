COVER_PACKAGES = $(shell go list ./... | grep -v mock | paste -sd, -)

###############################################################################
###                           Misc tests                                    ###
###############################################################################

# on MacOS disable deprecation warnings security framework
ifeq ($(DETECTED_OS), Darwin)
	export CGO_CFLAGS=-Wno-deprecated-declarations
endif

export CGO_CFLAGS_ALLOW

.PHONY: shellcheck
shellcheck:
	docker run --rm \
	--volume ${PWD}:/shellcheck \
	--entrypoint sh \
	koalaman/shellcheck-alpine:stable \
	-x /shellcheck/script/shellcheck.sh

.PHONY: test
test: CGO_CFLAGS=$(CGO_CFLAGS)
test:
	$(GO) test -timeout 300s ./...

.PHONY: test-nocache
test-nocache:
	$(GO) test -count=1 ./...

.PHONY: test-full
test-full:
	$(GO) test -race ./...

.PHONY: test-coverage
test-coverage:
	$(GO) test -coverprofile=coverage.txt \
		-covermode=count \
		-coverpkg="$(COVER_PACKAGES)" \
		./...

.PHONY: test-vet
test-vet:
	$(GO) vet ./...
