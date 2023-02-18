package testutil

import (
	"testing"

	ptypes "github.com/akash-network/akash-api/go/node/provider/v1beta1"
	"github.com/akash-network/akash-api/go/testutil"
)

func Provider(t testing.TB) ptypes.Provider {
	t.Helper()

	return ptypes.Provider{
		Owner:      AccAddress(t).String(),
		HostURI:    testutil.Hostname(t),
		Attributes: Attributes(t),
		Info: ptypes.ProviderInfo{
			EMail:   "test@example.com",
			Website: ProviderHostname(t),
		},
	}
}
