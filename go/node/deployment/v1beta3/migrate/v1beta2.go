package migrate

import (
	"github.com/akash-network/akash-api/go/node/deployment/v1beta2"
	"github.com/akash-network/akash-api/go/node/deployment/v1beta3"
	amigrate "github.com/akash-network/akash-api/go/node/types/v1beta3/migrate"
)

func ResourceFromV1Beta2(from v1beta2.Resource) v1beta3.Resource {
	return v1beta3.Resource{
		Resources: amigrate.ResourceUnitsFromV1Beta2(from.Resources),
		Count:     from.Count,
		Price:     from.Price,
	}
}

func ResourcesFromV1Beta2(from []v1beta2.Resource) []v1beta3.Resource {
	res := make([]v1beta3.Resource, 0, len(from))

	for _, oval := range from {
		res = append(res, ResourceFromV1Beta2(oval))
	}

	return res
}

func GroupIDFromV1Beta2(from v1beta2.GroupID) v1beta3.GroupID {
	return v1beta3.GroupID{
		Owner: from.Owner,
		DSeq:  from.DSeq,
		GSeq:  from.GSeq,
	}
}

func GroupSpecFromV1Beta2(from v1beta2.GroupSpec) v1beta3.GroupSpec {
	return v1beta3.GroupSpec{
		Name:         from.Name,
		Requirements: amigrate.PlacementRequirementsFromV1Beta2(from.Requirements),
		Resources:    ResourcesFromV1Beta2(from.Resources),
	}
}

func GroupFromV1Beta2(from v1beta2.Group) v1beta3.Group {
	return v1beta3.Group{
		GroupID:   GroupIDFromV1Beta2(from.GroupID),
		State:     v1beta3.Group_State(from.State),
		GroupSpec: GroupSpecFromV1Beta2(from.GroupSpec),
		CreatedAt: from.CreatedAt,
	}
}
