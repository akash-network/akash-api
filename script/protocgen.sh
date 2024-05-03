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
			buf generate --template "$1" "$file"
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

function ts_patches() {
	local generated_dir
	local tmp_dir

	generated_dir="$AKASH_TS_ROOT/src/generated"
	tmp_dir="$AKASH_DEVCACHE_TMP_TS_PATCHES"

	if [ ! -d "$generated_dir" ]; then
		return 0
	fi

	function cleanup() {
		rm -rf "$tmp_dir"
	}

	case $1 in
		preserve)
			echo "Preserving TypeScript patches..."

			find "$generated_dir" -type f -name "*.original.ts" | while read -r src_file; do
				local gen_dir
				local file
				local tmp_file

				src_file=${src_file//.original/}
				gen_dir=$(dirname "$src_file")
				gen_dir=${gen_dir//$generated_dir\//}
				file=$(basename "$src_file" .original.ts)
				mkdir -p "$tmp_dir/$gen_dir"
				tmp_file="$tmp_dir/$gen_dir/$file"

				echo "Preserving $src_file to $tmp_file"
				cp "$src_file" "$tmp_file"
			done

			;;
		restore)
			trap cleanup EXIT ERR

			echo "Restoring TypeScript patches..."

			find "$tmp_dir" -type f -name "*.ts" | while read -r src_file; do
				local original_file_path
				local renamed_original_file_path

				original_file_path=${src_file/$tmp_dir\//}
				renamed_original_file_path="${original_file_path/.ts/.original.ts}"

				echo "Restoring $original_file_path to $generated_dir/$original_file_path"

				mv "$generated_dir/$original_file_path" "$generated_dir/$renamed_original_file_path"
				mv "$tmp_dir/$original_file_path" "$generated_dir/$original_file_path"
			done
			;;
		*)
			echo "Invalid argument. Use 'preserve' or 'restore'."
			exit 1
			;;
	esac
}

function gen_ts() {
	function cleanup_ts {
		rm -rf "${AKASH_DEVCACHE_TMP_TS_GRPC_JS}"
		rm -rf "${AKASH_DEVCACHE_TMP_TS_PATCHES}"
	}

	trap cleanup_ts EXIT ERR

	mkdir -p "${AKASH_DEVCACHE_TMP_TS_GRPC_JS}"
	mkdir -p "${AKASH_DEVCACHE_TMP_TS_PATCHES}"

	ts_patches preserve

	gen buf.gen.ts.yaml

	local ts_grpc_js_services

	# merge generated grpc-js services to the main generated directory
	ts_grpc_js_services=$(find "$AKASH_DEVCACHE_TMP_TS_GRPC_JS" -name 'service.ts')

	for file in $ts_grpc_js_services; do
		dest_path=$(dirname "${file/$AKASH_DEVCACHE_TMP_TS_GRPC_JS/$AKASH_TS_ROOT\/src\/generated}")
		dest_file="${dest_path}/service.grpc-js.ts"

		mv "$file" "$dest_file"

		path_from_gen_dir=${dest_file#"${AKASH_TS_ROOT}/src/generated/"}
		index_file_name_base=${path_from_gen_dir%/service.grpc-js.ts}
		index_file_name="index.${index_file_name_base//\//.}.grpc-js.ts"
		index_file_path="${AKASH_TS_ROOT}/src/generated/$index_file_name"
		export_statement="export * from \"./${path_from_gen_dir%.ts}\";"

		echo "$export_statement" >"$index_file_path"
	done

	ts_patches restore

	npm run format --prefix "$AKASH_TS_ROOT"
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
