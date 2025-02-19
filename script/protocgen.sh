#!/usr/bin/env bash

set -e
set -o pipefail

if [[ $# -lt 1 ]]; then
	echo "invalid number of parameters"
	exit 1
fi

PATH=$(pwd)/.cache/bin:$PATH
export PATH=$PATH

function gen() {
	proto_dirs=$(find ./proto -path -prune -o -name '*.proto' -print0 | xargs -0 -n1 dirname | sort | uniq)

	for dir in $proto_dirs; do
		while IFS= read -r -d '' file; do
			buf generate --config buf.yaml --template "$1" "$file"
		done < <(find "${dir}" -maxdepth 1 -name '*.proto' -print0)
	done
}

function gen_go() {
	if [[ $# -ne 2 ]]; then
		echo "invalid number of parameters"
		exit 1
	fi

	IFS=/ read -r pkg_domain _ <<<"$1"

	function cleanup_go() {
		rm -rf "$pkg_domain"
	}

	trap cleanup_go EXIT ERR

	find ./go/ -name "*.pb.go" -o -name "*.pb.gw.go" -type f -delete

	gen buf.gen.gogo.yaml
#	buf generate --template buf.gen.gogo.yaml

	set -x
	# shellcheck disable=SC2086
	cp -r ./$1/* ./$2/
}

function gen_pulsar() {
	gen buf.gen.pulsar.yaml
}

function gen_ts() {
	buf generate --template buf.gen.ts.yaml
}

function gen_doc() {
	local workdir

	workdir=$AKASH_DEVCACHE_TMP/swagger-gen

	function cleanup {
		rm -rf "$workdir"
	}

	# clean swagger files
	trap cleanup EXIT ERR

	buf generate --template ./proto/node/buf.gen.doc.yaml ./proto/node 2>/dev/null
	buf generate --template ./proto/provider/buf.gen.doc.yaml ./proto/provider 2>/dev/null

	proto_files=$(find ./proto -type f \( -name 'service.proto' -o -name "query.proto" \) -print0 | xargs -0 -n1 | sort | uniq)
	for file in $proto_files; do
		buf generate --template buf.gen.swagger.yaml "$file"
	done

	mkdir -p ./docs/swagger-ui

	# combine swagger files
	# uses nodejs package `swagger-combine`.
	# all the individual swagger files need to be configured in `config.json` for merging
	swagger-combine \
		./docs/config.yaml \
		-o ./docs/swagger-ui/swagger.yaml \
		-f yaml \
		--continueOnConflictingPaths=true \
		--includeDefinitions=true
}

case $1 in
	go)
		shift
		gen_go "$@"
		;;
	pulsar)
		shift
		gen_pulsar "$@"
		;;
	ts)
		shift
		gen_ts
		;;
	doc)
		gen_doc
		;;
	*)
		echo "Invalid argument"
		exit 1
		;;
esac
