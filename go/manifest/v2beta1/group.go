package v2beta1

import (
	types "github.com/akash-network/akash-api/go/node/types/v1beta2"
)

// GetName returns the name of group
func (g Group) GetName() string {
	return g.Name
}

// GetResources returns list of resources in a group
func (g Group) GetResources() []types.Resources {
	resources := make([]types.Resources, 0, len(g.Services))
	for _, s := range g.Services {
		resources = append(resources, types.Resources{
			Resources: s.Resources,
			Count:     s.Count,
		})
	}

	return resources
}
