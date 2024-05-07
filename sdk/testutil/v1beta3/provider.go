package testutil

import (
	"testing"

	ptypes "go.akashd.io/sdk/node/provider/v1beta4"
	"go.akashd.io/sdk/testutil"
)

func Provider(t testing.TB) ptypes.Provider {
	t.Helper()

	return ptypes.Provider{
		Owner:      AccAddress(t).String(),
		HostURI:    testutil.Hostname(t),
		Attributes: Attributes(t),
		Info: ptypes.Info{
			EMail:   "test@example.com",
			Website: ProviderHostname(t),
		},
	}
}
