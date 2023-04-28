package migrate

import (
	sdk "github.com/cosmos/cosmos-sdk/types"

	"github.com/akash-network/akash-api/go/node/types/v1beta2"
	"github.com/akash-network/akash-api/go/node/types/v1beta3"
)

func ResourceValueFromV1Beta2(from v1beta2.ResourceValue) v1beta3.ResourceValue {
	return v1beta3.NewResourceValue(from.Value())
}

func AttributesFromV1Beta2(from v1beta2.Attributes) v1beta3.Attributes {
	res := make(v1beta3.Attributes, 0, len(from))

	for _, attr := range from {
		res = append(res, v1beta3.Attribute{
			Key:   attr.Key,
			Value: attr.Value,
		})
	}

	return res
}

func SignedByFromV1Beta2(from v1beta2.SignedBy) v1beta3.SignedBy {
	return v1beta3.SignedBy{
		AllOf: from.AllOf,
		AnyOf: from.AnyOf,
	}
}

func PlacementRequirementsFromV1Beta2(from v1beta2.PlacementRequirements) v1beta3.PlacementRequirements {
	res := v1beta3.PlacementRequirements{
		SignedBy:   SignedByFromV1Beta2(from.SignedBy),
		Attributes: AttributesFromV1Beta2(from.Attributes),
	}

	return res
}

func CPUFromV1Beta2(from *v1beta2.CPU) *v1beta3.CPU {
	if from == nil {
		return nil
	}

	return &v1beta3.CPU{
		Units:      ResourceValueFromV1Beta2(from.Units),
		Attributes: AttributesFromV1Beta2(from.Attributes),
	}
}

func MemoryFromV1Beta2(from *v1beta2.Memory) *v1beta3.Memory {
	if from == nil {
		return nil
	}

	return &v1beta3.Memory{
		Quantity:   ResourceValueFromV1Beta2(from.Quantity),
		Attributes: AttributesFromV1Beta2(from.Attributes),
	}
}

func VolumesFromV1Beta2(from v1beta2.Volumes) v1beta3.Volumes {
	res := make(v1beta3.Volumes, 0, len(from))

	for _, storage := range from {
		res = append(res, v1beta3.Storage{
			Name:       "default",
			Quantity:   ResourceValueFromV1Beta2(storage.Quantity),
			Attributes: AttributesFromV1Beta2(storage.Attributes),
		})
	}

	return res
}

func EndpointsFromV1Beta2(from []v1beta2.Endpoint) []v1beta3.Endpoint {
	res := make([]v1beta3.Endpoint, 0, len(from))

	for _, endpoint := range from {
		res = append(res, v1beta3.Endpoint{
			Kind:           v1beta3.Endpoint_Kind(endpoint.Kind),
			SequenceNumber: 0, // All previous data does not have a use for sequence number
		})
	}

	return res
}

func ResourceUnitsFromV1Beta2(from v1beta2.ResourceUnits) v1beta3.ResourceUnits {
	return v1beta3.ResourceUnits{
		CPU:       CPUFromV1Beta2(from.CPU),
		Memory:    MemoryFromV1Beta2(from.Memory),
		Storage:   VolumesFromV1Beta2(from.Storage),
		Endpoints: EndpointsFromV1Beta2(from.Endpoints),
		// v1beta2 version does not have GPU, so setting default value to 0
		GPU: &v1beta3.GPU{
			Units: v1beta3.ResourceValue{
				Val: sdk.NewInt(0),
			},
			Attributes: nil,
		},
	}
}
