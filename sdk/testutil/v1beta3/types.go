package testutil

import (
	"testing"

	rtypes "go.akashd.io/sdk/node/types/resources/v1beta4"
)

func Resources(_ testing.TB) rtypes.Resources {
	return rtypes.Resources{
		ID: 1,
		CPU: &rtypes.CPU{
			Units: rtypes.NewResourceValue(uint64(RandCPUUnits())),
		},
		Memory: &rtypes.Memory{
			Quantity: rtypes.NewResourceValue(RandMemoryQuantity()),
		},
		GPU: &rtypes.GPU{
			Units: rtypes.NewResourceValue(uint64(RandGPUUnits())),
		},
		Storage: rtypes.Volumes{
			rtypes.Storage{
				Quantity: rtypes.NewResourceValue(RandStorageQuantity()),
			},
		},
	}
}
