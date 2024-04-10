.PHONY: release-ts

release-ts: $(AKASH_TS_NODE_MODULES) $(AKASH_TS_ROOT)/dist
	if [ -z "$$CI" ]; then \
		cd $(AKASH_TS_ROOT) && npx semantic-release --no-ci; \
	else \
		cd $(AKASH_TS_ROOT) && npx semantic-release; \
	fi

$(AKASH_TS_ROOT)/dist: $(shell find $(AKASH_TS_ROOT)/src -type f)
	cd $(AKASH_TS_ROOT) && npm run build