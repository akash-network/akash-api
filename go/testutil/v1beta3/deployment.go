package testutil

import (
	"crypto/sha256"
	"math/rand"
	"testing"

	dtypes "github.com/akash-network/akash-api/go/node/deployment/v1beta3"
	"github.com/akash-network/akash-api/go/testutil"
)

// sum256Seed provides a consistent sha256 value for initial Deployment.Version
const sum256Seed = "hihi"

// DefaultDeploymentVersion provides consistent sha256 sum for initial Deployment.Version
var DefaultDeploymentVersion = sha256.Sum256([]byte(sum256Seed))

// Deployment generates a dtype.Deployment in state `DeploymentActive`
func Deployment(t testing.TB) dtypes.Deployment {
	t.Helper()
	return dtypes.Deployment{
		DeploymentID: DeploymentID(t),
		State:        dtypes.DeploymentActive,
		Version:      DefaultDeploymentVersion[:],
	}
}

// DeploymentGroup generates a dtype.DepDeploymentGroup in state `GroupOpen`
// with a set of random required attributes
func DeploymentGroup(t testing.TB, did dtypes.DeploymentID, gseq uint32) dtypes.Group {
	t.Helper()
	return dtypes.Group{
		GroupID: dtypes.MakeGroupID(did, gseq),
		State:   dtypes.GroupOpen,
		GroupSpec: dtypes.GroupSpec{
			Name:         testutil.Name(t, "dgroup"),
			Requirements: PlacementRequirements(t),
			Resources:    ResourcesList(t, 1),
		},
	}
}

// GroupSpec generator
func GroupSpec(t testing.TB) dtypes.GroupSpec {
	t.Helper()
	return dtypes.GroupSpec{
		Name:         testutil.Name(t, "dgroup"),
		Requirements: PlacementRequirements(t),
		Resources:    ResourcesList(t, 1),
	}
}

// DeploymentGroups returns a set of deployment groups generated by DeploymentGroup
func DeploymentGroups(t testing.TB, did dtypes.DeploymentID, gseq uint32) []dtypes.Group {
	t.Helper()
	count := rand.Intn(5) + 5 // nolint:gosec
	vals := make([]dtypes.Group, 0, count)
	for i := 0; i < count; i++ {
		vals = append(vals, DeploymentGroup(t, did, gseq+uint32(i))) // nolint: gosec
	}
	return vals
}
