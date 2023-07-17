package v2beta2

import (
	"sort"

	types "github.com/akash-network/akash-api/go/node/types/v1beta3"
)

type ServiceExposes []ServiceExpose

var _ sort.Interface = (*ServiceExposes)(nil)

func (s ServiceExposes) Len() int {
	return len(s)
}

func (s ServiceExposes) Swap(i, j int) {
	s[i], s[j] = s[j], s[i]
}

func (s ServiceExposes) Less(i, j int) bool {
	a, b := s[i], s[j]

	if a.Service != b.Service {
		return a.Service < b.Service
	}

	if a.Port != b.Port {
		return a.Port < b.Port
	}

	if a.Proto != b.Proto {
		return a.Proto < b.Proto
	}

	if a.Global != b.Global {
		return a.Global
	}

	return false
}

func (s ServiceExposes) GetEndpoints() types.Endpoints {
	endpoints := make(types.Endpoints, 0)

	for _, expose := range s {
		endpoints = append(endpoints, expose.GetEndpoints()...)
	}

	return endpoints
}
