package testutil

import (
	"testing"

	types "github.com/akash-network/akash-api/go/node/types/v1beta3"
)

func ResourceUnits(_ testing.TB) types.ResourceUnits {
	return types.ResourceUnits{
		CPU: &types.CPU{
			Units: types.NewResourceValue(uint64(RandCPUUnits())),
		},
		Memory: &types.Memory{
			Quantity: types.NewResourceValue(RandMemoryQuantity()),
		},
		GPU: &types.GPU{
			Units: types.NewResourceValue(uint64(RandGPUUnits())),
		},
		Storage: types.Volumes{
			types.Storage{
				Quantity: types.NewResourceValue(RandStorageQuantity()),
			},
		},
	}
}
