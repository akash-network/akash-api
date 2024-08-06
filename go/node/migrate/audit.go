package migrate

import (
	"github.com/akash-network/akash-api/go/node/audit/v1beta3"
	"github.com/cosmos/cosmos-sdk/codec"

	v1 "pkg.akt.dev/go/node/audit/v1"
)

func AuditedAttributesV1beta3Prefix() []byte {
	return v1beta3.PrefixProviderID()
}

func AuditedAttributesFromV1beta3(cdc codec.BinaryCodec, fromBz []byte) v1.Provider {
	var from v1beta3.AuditedAttributes
	cdc.MustUnmarshal(fromBz, &from)

	to := v1.Provider{
		Owner:      from.Owner,
		Auditor:    from.Auditor,
		Attributes: AttributesFromV1Beta3(from.Attributes),
	}

	return to
}
