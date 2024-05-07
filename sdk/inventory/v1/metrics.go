package v1

import (
	sdk "github.com/cosmos/cosmos-sdk/types"

	dtypes "go.akashd.io/sdk/node/deployment/v1beta4"
)

type ResourcesMetric struct {
	CPU              uint64 `json:"cpu"`
	GPU              uint64 `json:"gpu"`
	Memory           uint64 `json:"memory"`
	StorageEphemeral uint64 `json:"storage_ephemeral"`
}

type NodeMetrics struct {
	Name        string          `json:"name"`
	Allocatable ResourcesMetric `json:"allocatable"`
	Available   ResourcesMetric `json:"available"`
}

type Metrics struct {
	Nodes            []NodeMetrics `json:"nodes"`
	TotalAllocatable MetricTotal   `json:"total_allocatable"`
	TotalAvailable   MetricTotal   `json:"total_available"`
}

type MetricTotal struct {
	CPU              uint64           `json:"cpu"`
	GPU              uint64           `json:"gpu"`
	Memory           uint64           `json:"memory"`
	StorageEphemeral uint64           `json:"storage_ephemeral"`
	Storage          map[string]int64 `json:"storage,omitempty"`
}

type StorageStatus struct {
	Class string `json:"class"`
	Size  int64  `json:"size"`
}

// InventoryMetrics stores active, pending and available units
type InventoryMetrics struct {
	Active    []MetricTotal `json:"active,omitempty"`
	Pending   []MetricTotal `json:"pending,omitempty"`
	Available struct {
		Nodes   []NodeMetrics   `json:"nodes,omitempty"`
		Storage []StorageStatus `json:"storage,omitempty"`
	} `json:"available,omitempty"`
	Error error `json:"error,omitempty"`
}

func (inv *MetricTotal) AddResources(res dtypes.ResourceUnit) {
	cpu := sdk.NewIntFromUint64(inv.CPU)
	gpu := sdk.NewIntFromUint64(inv.GPU)
	mem := sdk.NewIntFromUint64(inv.Memory)
	ephemeralStorage := sdk.NewIntFromUint64(inv.StorageEphemeral)

	if res.CPU != nil {
		cpu = cpu.Add(res.CPU.Units.Val.MulRaw(int64(res.Count)))
	}

	if res.GPU != nil {
		gpu = gpu.Add(res.GPU.Units.Val.MulRaw(int64(res.Count)))
	}

	if res.Memory != nil {
		mem = mem.Add(res.Memory.Quantity.Val.MulRaw(int64(res.Count)))
	}

	for _, storage := range res.Storage {
		if storageClass, found := storage.Attributes.Find("class").AsString(); !found {
			ephemeralStorage = ephemeralStorage.Add(storage.Quantity.Val.MulRaw(int64(res.Count)))
		} else {
			val := sdk.NewIntFromUint64(uint64(inv.Storage[storageClass]))
			val = val.Add(storage.Quantity.Val.MulRaw(int64(res.Count)))
			inv.Storage[storageClass] = val.Int64()
		}
	}

	inv.CPU = cpu.Uint64()
	inv.GPU = gpu.Uint64()
	inv.Memory = mem.Uint64()
	inv.StorageEphemeral = ephemeralStorage.Uint64()
}
