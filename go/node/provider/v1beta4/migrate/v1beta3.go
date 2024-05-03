package migrate

import (
	"github.com/akash-network/akash-api/go/node/provider/v1beta3"
	"github.com/akash-network/akash-api/go/node/provider/v1beta4"
	amigrate "github.com/akash-network/akash-api/go/node/types/attributes/v1/migrate"
)

func ProviderFromV1beta3(from v1beta3.Provider) v1beta4.Provider {
	return v1beta4.Provider{
		Owner:      from.Owner,
		HostURI:    from.HostURI,
		Attributes: amigrate.AttributesFromV1Beta3(from.Attributes),
		Info:       v1beta4.ProviderInfo{},
	}
}

func ProviderInfoFromV1beta3(from v1beta3.ProviderInfo) v1beta4.ProviderInfo {
	return v1beta4.ProviderInfo{
		EMail:   from.EMail,
		Website: from.Website,
	}
}
