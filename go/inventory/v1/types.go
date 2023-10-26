package v1

import (
	"sort"
)

type CPUs []CPU
type GPUs []GPU

type Nodes []Node
type ClusterStorage []Storage

var _ sort.Interface = (*CPUs)(nil)
var _ sort.Interface = (*GPUs)(nil)

func (s CPUs) Len() int {
	return len(s)
}

func (s CPUs) Swap(i, j int) {
	s[i], s[j] = s[j], s[i]
}

func (s CPUs) Less(i, j int) bool {
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
	// a, b := s[i], s[j]

	// if a.Service != b.Service {
	// 	return a.Service < b.Service
	// }
	//
	// if a.Port != b.Port {
	// 	return a.Port < b.Port
	// }
	//
	// if a.Proto != b.Proto {
	// 	return a.Proto < b.Proto
	// }
	//
	// if a.Global != b.Global {
	// 	return a.Global
	// }

	return false
}
