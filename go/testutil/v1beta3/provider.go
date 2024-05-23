package testutil

import (
	"testing"

	ptypes "pkg.akt.dev/go/node/provider/v1beta4"
	"pkg.akt.dev/go/testutil"
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
