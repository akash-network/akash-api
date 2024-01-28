package v1

import (
	"sort"
)

type CPUInfoS []CPUInfo
type GPUInfoS []GPUInfo

type MemoryInfoS []MemoryInfo

type GPUs []GPU

type Nodes []Node
type ClusterStorage []Storage

var _ sort.Interface = (*Nodes)(nil)
var _ sort.Interface = (*GPUs)(nil)
var _ sort.Interface = (*CPUInfoS)(nil)
var _ sort.Interface = (*ClusterStorage)(nil)

func (s Nodes) Len() int {
	return len(s)
}

func (s Nodes) Swap(i, j int) {
	s[i], s[j] = s[j], s[i]
}

func (s Nodes) Less(i, j int) bool {
	return s[i].Name < s[j].Name
}

func (s CPUInfoS) Len() int {
	return len(s)
}

func (s CPUInfoS) Swap(i, j int) {
	s[i], s[j] = s[j], s[i]
}

func (s CPUInfoS) Less(i, j int) bool {
	a, b := s[i], s[j]

	if a.Vendor != b.Vendor {
		return a.Vendor < b.Vendor
	}

	if a.ID != b.ID {
		return a.ID < b.ID
	}

	if a.Model != b.Model {
		return a.Model < b.Model
	}

	return false
}

func (s GPUs) Len() int {
	return len(s)
}

func (s GPUs) Swap(i, j int) {
	s[i], s[j] = s[j], s[i]
}

func (s GPUs) Less(i, j int) bool {
	a, b := s[i], s[j]

	if !a.Quantity.Equal(b.Quantity) {
		return a.Quantity.LT(b.Quantity)
	}

	// if a.Info.Vendor != b.Info.Vendor {
	// 	return a.Info.Vendor < b.Info.Vendor
	// }
	//
	// if a.Info.Vendor != b.Info.Vendor {
	// 	return a.Info.Vendor < b.Info.Vendor
	// }
	//
	// if a.Info.Name != b.Info.Name {
	// 	return a.Info.Name < b.Info.Name
	// }
	//
	// if a.Info.ModelID != b.Info.ModelID {
	// 	return a.Info.ModelID < b.Info.ModelID
	// }
	//
	// if a.Info.Interface != b.Info.Interface {
	// 	return a.Info.Interface < b.Info.Interface
	// }
	//
	// if a.Info.MemorySize != b.Info.MemorySize {
	// 	return a.Info.MemorySize < b.Info.MemorySize
	// }

	return false
}

func (s ClusterStorage) Len() int {
	return len(s)
}

func (s ClusterStorage) Swap(i, j int) {
	s[i], s[j] = s[j], s[i]
}

func (s ClusterStorage) Less(i, j int) bool {
	a, b := s[i], s[j]

	if !a.Quantity.Equal(b.Quantity) {
		return a.Quantity.LT(b.Quantity)
	}

	if a.Info.Class != b.Info.Class {
		return a.Info.Class < b.Info.Class
	}

	if a.Info.IOPS != b.Info.IOPS {
		return a.Info.IOPS < b.Info.IOPS
	}

	return false
}
