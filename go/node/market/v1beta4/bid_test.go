package v1beta4

import (
	"testing"

	"github.com/stretchr/testify/require"

	testutil "github.com/akash-network/akash-api/go/testutil/v1beta3"
)

func TestBid_GSpecMatch_Valid(t *testing.T) {
	gspec := testutil.GroupSpec(t)

	rOffer := ResourceOfferFromRU(gspec.Resources)

	require.True(t, rOffer.MatchGSpec(gspec))
}

func TestBid_GSpecMatch_Valid2(t *testing.T) {
	gspec := testutil.GroupSpec(t)

	if len(gspec.Resources) == 1 {
		rl := testutil.ResourcesList(t, 2)
		rl[0].Count = 4
		gspec.Resources = append(gspec.Resources, rl...)
	}

	rOffer := ResourceOfferFromRU(gspec.Resources)

	require.True(t, rOffer.MatchGSpec(gspec))
}

func TestBid_GSpecMatch_InvalidCount(t *testing.T) {
	gspec := testutil.GroupSpec(t)

	if len(gspec.Resources) == 1 {
		rl := testutil.ResourcesList(t, 1)
		gspec.Resources = append(gspec.Resources, rl...)
	}

	rOffer := ResourceOfferFromRU(gspec.Resources)

	gspec.Resources[0].Count = 2

	require.False(t, rOffer.MatchGSpec(gspec))
}
