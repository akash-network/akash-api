package migrate

import (
	"github.com/akash-network/akash-api/go/node/deployment/v1beta3"

	v1 "pkg.akt.dev/go/node/deployment/v1"
)

func DeploymentIDFromV1Beta3(from v1beta3.DeploymentID) v1.DeploymentID {
	return v1.DeploymentID{
		Owner: from.Owner,
		DSeq:  from.DSeq,
	}
}

func GroupIDFromV1Beta3(from v1beta3.GroupID) v1.GroupID {
	return v1.GroupID{
		Owner: from.Owner,
		DSeq:  from.DSeq,
		GSeq:  from.GSeq,
	}
}

func DeploymentFromV1beta3(from v1beta3.Deployment) v1.Deployment {
	return v1.Deployment{
		ID:        DeploymentIDFromV1Beta3(from.DeploymentID),
		State:     v1.Deployment_State(from.State),
		Hash:      from.Version,
		CreatedAt: from.CreatedAt,
	}
}
