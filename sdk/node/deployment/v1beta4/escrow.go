package v1beta4

import (
	v1 "go.akashd.io/sdk/node/deployment/v1"
	etypes "go.akashd.io/sdk/node/escrow/v1"
)

const (
	EscrowScope = "deployment"
)

func EscrowAccountForDeployment(id v1.DeploymentID) etypes.AccountID {
	return etypes.AccountID{
		Scope: EscrowScope,
		XID:   id.String(),
	}
}

func DeploymentIDFromEscrowAccount(id etypes.AccountID) (v1.DeploymentID, bool) {
	if id.Scope != EscrowScope {
		return v1.DeploymentID{}, false
	}

	did, err := v1.ParseDeploymentID(id.XID)

	return did, err == nil
}
