package migrate

import (
	"github.com/akash-network/akash-api/go/node/deployment/v1beta3"
	"github.com/akash-network/akash-api/go/node/deployment/v1beta4"
	amigrate "github.com/akash-network/akash-api/go/node/types/attributes/v1/migrate"
	rmigrate "github.com/akash-network/akash-api/go/node/types/resources/v1/migrate"
)

func ResourceUnitFromV1Beta3(id uint32, from v1beta3.ResourceUnit) v1beta4.ResourceUnit {
	return v1beta4.ResourceUnit{
		Resources: rmigrate.ResourcesFromV1Beta3(id, from.Resources),
		Count:     from.Count,
		Price:     from.Price,
	}
}

func ResourcesUnitsFromV1Beta3(from []v1beta3.ResourceUnit) v1beta4.ResourceUnits {
	res := make(v1beta4.ResourceUnits, 0, len(from))

	for i, oval := range from {
		res = append(res, ResourceUnitFromV1Beta3(uint32(i+1), oval))
	}

	return res
}

func GroupIDFromV1Beta3(from v1beta3.GroupID) v1beta4.GroupID {
	return v1beta4.GroupID{
		Owner: from.Owner,
		DSeq:  from.DSeq,
		GSeq:  from.GSeq,
	}
}

func GroupSpecFromV1Beta3(from v1beta3.GroupSpec) v1beta4.GroupSpec {
	return v1beta4.GroupSpec{
		Name:         from.Name,
		Requirements: amigrate.PlacementRequirementsFromV1Beta3(from.Requirements),
		Resources:    ResourcesUnitsFromV1Beta3(from.Resources),
	}
}

func GroupFromV1Beta3(from v1beta3.Group) v1beta4.Group {
	return v1beta4.Group{
		GroupID:   GroupIDFromV1Beta3(from.GroupID),
		State:     v1beta4.Group_State(from.State),
		GroupSpec: GroupSpecFromV1Beta3(from.GroupSpec),
		CreatedAt: from.CreatedAt,
	}
}
