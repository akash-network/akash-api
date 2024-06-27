package migrate

import (
	"github.com/akash-network/akash-api/go/node/provider/v1beta3"

	"pkg.akt.dev/go/node/provider/v1beta4"
	amigrate "pkg.akt.dev/go/node/types/attributes/v1/migrate"
)

func ProviderInfoFromV1beta3(from v1beta3.ProviderInfo) v1beta4.Info {
	return v1beta4.Info{
		EMail:   from.EMail,
		Website: from.Website,
	}
}

func ProviderFromV1beta3(from v1beta3.Provider) v1beta4.Provider {
	return v1beta4.Provider{
		Owner:      from.Owner,
		HostURI:    from.HostURI,
		Attributes: amigrate.AttributesFromV1Beta3(from.Attributes),
		Info:       ProviderInfoFromV1beta3(from.Info),
	}
}
