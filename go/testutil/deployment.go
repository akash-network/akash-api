package testutil

import (
	"crypto/sha256"
	"math/rand"
	"testing"

	dtypes "pkg.akt.dev/go/node/deployment/v1"
	dtypesv1beta4 "pkg.akt.dev/go/node/deployment/v1beta4"
)

// sum256Seed provides a consistent sha256 value for initial Deployment.Version
const sum256Seed = "hihi"

// DefaultDeploymentHash provides consistent sha256 sum for initial Deployment.Version
var DefaultDeploymentHash = sha256.Sum256([]byte(sum256Seed))

// Deployment generates a dtype.Deployment in state `DeploymentActive`
func Deployment(t testing.TB) dtypes.Deployment {
	t.Helper()
	return dtypes.Deployment{
		ID:    DeploymentID(t),
		State: dtypes.DeploymentActive,
		Hash:  DefaultDeploymentHash[:],
	}
}

// DeploymentGroup generates a dtype.DepDeploymentGroup in state `GroupOpen`
// with a set of random required attributes
func DeploymentGroup(t testing.TB, did dtypes.DeploymentID, gseq uint32) dtypesv1beta4.Group {
	t.Helper()
	return dtypesv1beta4.Group{
		ID:    dtypes.MakeGroupID(did, gseq),
		State: dtypesv1beta4.GroupOpen,
		GroupSpec: dtypesv1beta4.GroupSpec{
			Name:         Name(t, "dgroup"),
			Requirements: PlacementRequirements(t),
			Resources:    Resources(t),
		},
	}
}

// GroupSpec generator
func GroupSpec(t testing.TB) dtypesv1beta4.GroupSpec {
	t.Helper()
	return dtypesv1beta4.GroupSpec{
		Name:         Name(t, "dgroup"),
		Requirements: PlacementRequirements(t),
		Resources:    Resources(t),
	}
}

// DeploymentGroups returns a set of deployment groups generated by DeploymentGroup
func DeploymentGroups(t testing.TB, did dtypes.DeploymentID, gseq uint32) dtypesv1beta4.Groups {
	t.Helper()
	count := rand.Intn(5) + 5 // nolint:gosec
	vals := make(dtypesv1beta4.Groups, 0, count)
	for i := 0; i < count; i++ {
		vals = append(vals, DeploymentGroup(t, did, gseq+uint32(i)))
	}
	return vals
}
