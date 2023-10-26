#!/usr/bin/env bash

set -o pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null 2>&1 && pwd)"
SEMVER=$SCRIPT_DIR/semver.sh

gomod="$SCRIPT_DIR/../go.mod"

function get_gotoolchain() {
    local gotoolchain
    local goversion

    gotoolchain=$(grep -E '^toolchain go[0-9]{1,}.[0-9]{1,}.[0-9]{1,}$' < "$gomod" | cut -d ' ' -f 2 | tr -d '\n')

    if [[ ${gotoolchain} == "" ]]; then
        # determine go toolchain from go version in go.mod
        if which go > /dev/null 2>&1 ; then
            goversion=$(GOTOOLCHAIN=local go version | cut -d ' ' -f 3 | sed 's/go*//' | tr -d '\n')
        fi

        if [[ $goversion != "" ]] && [[ $($SEMVER compare "v$goversion" v1.21.0) -ge 0 ]]; then
            gotoolchain=go${goversion}
        else
            gotoolchain=go$(grep -E '^go [0-9]{1,}.[0-9]{1,}$' < "$gomod" | cut -d ' ' -f 2 | tr -d '\n').0
        fi
    fi

    echo -n "$gotoolchain"
}

replace_paths() {
    local file="${1}"
    local cversion="${2}"
    local nversion="${3}"
    local sedcmd=sed

    if [[ "$OSTYPE" == "darwin"* ]]; then
        sedcmd=gsed
    fi

    $sedcmd -ri "s/github.com\/akash-network\/node\/(v${cversion})?/github.com\/akash-network\/node\/v${nversion}\//g" "${file}"
}

function replace_import_path() {
    local next_major_version=$1
    local import_path_to_replace
    import_path_to_replace=$(go list -m)

    local version_to_replace
    version_to_replace=$(echo "$import_path_to_replace" | sed -n 's/.*v\([0-9]*\).*/\1/p')

    echo "$version_to_replace"
    echo Current import paths are "$version_to_replace", replacing with "$next_major_version"

    # list all folders containing Go modules.
#    local modules
#    modules=$(go list -tags e2e ./... | sed "s/g.*v${version_to_replace}\///")

    while IFS= read -r line; do
        modules_to_upgrade_manually+=("$line")
    done < <(find . -name go.mod -exec grep -l "github.com/akash-network/node" {} \; | grep -v  "^./go.mod$" | sed 's|/go.mod||' | sed 's|^./||')

    echo "Replacing import paths in all files"

    declare -a files

    while IFS= read -r line; do
        files+=("$line")
    done < <(find . -type f -not \(-path "./install.sh" -or -path "./upgrades/software/*" -or -path "./upgrades/heightpatches/*" -or -path "./.cache/*" -or -path "./dist/*" -or -path "./.git*" -or -name "*.md" -or -path "./.idea/*" \))

#    echo "Updating all files"

    for file in "${files[@]}"; do
        if test -f "$file"; then
            # skip files that need manual upgrading
            for excluded_file in "${modules_to_upgrade_manually[@]}"; do
                if [[ "$file" == *"$excluded_file"* ]]; then
                    continue 2
                fi
            done
            replace_paths "$file" "$version_to_replace" "$next_major_version"
        fi
    done

#    exit 0

#    echo "Updating go.mod and vendoring"
    # go.mod
#    replace_paths "go.mod"
#    go mod tidy >/dev/null
#    go mod vendor >/dev/null

    # ensure that generated files are updated.
    # N.B.: This must be run after go mod vendor.
#    echo "running make proto-gen"
#    make proto-gen >/dev/null
#
#    echo "Run go mod vendor after proto-gen to avoid vendoring issues"
#    go mod vendor >/dev/null
#
#    echo "running make run-querygen"
#    make run-querygen >/dev/null
}

case "$1" in
gotoolchain)
    get_gotoolchain
    ;;
replace-import-path)
    shift
    replace_import_path "$@"
    ;;
esac
