package migrate

import (
	"github.com/akash-network/akash-api/go/node/audit/v1beta3"

	v1 "pkg.akt.dev/go/node/audit/v1"
	attrmigrate "pkg.akt.dev/go/node/types/attributes/v1/migrate"
)

func AttributesFromV1beta3(from v1beta3.AuditedAttributes) v1.AuditedAttributes {
	to := v1.AuditedAttributes{
		Owner:      from.Owner,
		Auditor:    from.Auditor,
		Attributes: attrmigrate.AttributesFromV1Beta3(from.Attributes),
	}

	return to
}
