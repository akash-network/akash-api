#!/bin/bash

API_URL="https://api.github.com"

log() {
    echo "$(date +"[%I:%M:%S %p]") [ts-release] $1"
}

log "Fetching the current latest release information..."
current_latest=$(curl -s -H "Authorization: token $GITHUB_TOKEN" -H "Accept: application/vnd.github.v3+json" \
    "$API_URL/repos/$GITHUB_ACTION_REPOSITORY/releases/latest")
current_latest_id=$(echo "$current_latest" | jq -r '.id')

if [ "$current_latest_id" == "null" ]; then
    log "No current latest release found."
    exit 1
else
    log "Current latest release ID: $current_latest_id"
fi

log "Running semantic-release..."
if [ -z "$CI" ]; then
    log "Running in non-CI mode..."
    cd "$AKASH_TS_ROOT" && npx semantic-release --no-ci
else
    log "Running in CI mode..."
    cd "$AKASH_TS_ROOT" && npx semantic-release
fi

log "Attempting to mark the release (ID: $current_latest_id) as the latest again..."
update_response=$(curl -s -X PATCH -H "Authorization: token $GITHUB_TOKEN" -H "Content-Type: application/json" -H "Accept: application/vnd.github.v3+json" \
    -d "{\"make_latest\": \"true\"}" \
    "$API_URL/repos/$GITHUB_ACTION_REPOSITORY/releases/$current_latest_id")

log "Update response:"
echo "$update_response" | jq

if echo "$update_response" | jq -e '.id'; then
    log "The release was successfully marked as the latest."
else
    log "Failed to update the release. Check the response above for errors."
fi
