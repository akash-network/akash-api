package migrate

import (
	"github.com/akash-network/akash-api/go/node/types/attributes/v1"
	"github.com/akash-network/akash-api/go/node/types/v1beta3"
)

func AttributesFromV1Beta3(from v1beta3.Attributes) v1.Attributes {
	res := make(v1.Attributes, 0, len(from))

	for _, attr := range from {
		res = append(res, v1.Attribute{
			Key:   attr.Key,
			Value: attr.Value,
		})
	}

	return res
}

func SignedByFromV1Beta3(from v1beta3.SignedBy) v1.SignedBy {
	return v1.SignedBy{
		AllOf: from.AllOf,
		AnyOf: from.AnyOf,
	}
}

func PlacementRequirementsFromV1Beta3(from v1beta3.PlacementRequirements) v1.PlacementRequirements {
	res := v1.PlacementRequirements{
		SignedBy:   SignedByFromV1Beta3(from.SignedBy),
		Attributes: AttributesFromV1Beta3(from.Attributes),
	}

	return res
}
