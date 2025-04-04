package v2beta1_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"

	manifest "github.com/akash-network/akash-api/go/manifest/v2beta1"
	dtypes "github.com/akash-network/akash-api/go/node/deployment/v1beta2"
	akashtypes "github.com/akash-network/akash-api/go/node/types/v1beta2"
	tutil "github.com/akash-network/akash-api/go/testutil"
	"github.com/akash-network/akash-api/go/testutil/v1beta2"
)

func TestManifestWithEmptyDeployment(t *testing.T) {
	m := simpleManifest()
	deployment := make([]dtypes.Group, 0)
	err := manifest.ValidateManifestWithDeployment(&m, deployment)
	require.Error(t, err)
}

func simpleDeployment(t *testing.T) []dtypes.Group {
	deployment := make([]dtypes.Group, 1)
	gid := testutil.GroupID(t)
	resources := make([]dtypes.Resource, 1)
	resources[0] = dtypes.Resource{
		Resources: simpleResourceUnits(),
		Count:     1,
		Price:     sdk.NewInt64DecCoin(tutil.CoinDenom, 1),
	}
	deployment[0] = dtypes.Group{
		GroupID: gid,
		State:   0,
		GroupSpec: dtypes.GroupSpec{
			Name:         nameOfTestGroup,
			Requirements: akashtypes.PlacementRequirements{},
			Resources:    resources,
		},
	}

	return deployment
}

func TestManifestWithDeployment(t *testing.T) {
	m := simpleManifest()
	deployment := simpleDeployment(t)
	err := manifest.ValidateManifestWithDeployment(&m, deployment)
	require.NoError(t, err)
}

func TestManifestWithDeploymentMultipleCount(t *testing.T) {
	addl := uint32(tutil.RandRangeInt(1, 20)) // nolint: gosec
	m := simpleManifest()
	m[0].Services[0].Count += addl
	deployment := simpleDeployment(t)
	deployment[0].GroupSpec.Resources[0].Count += addl
	err := manifest.ValidateManifestWithDeployment(&m, deployment)
	require.NoError(t, err)
}

func TestManifestWithDeploymentMultiple(t *testing.T) {
	cpu := int64(tutil.RandRangeInt(1024, 2000))
	storage := int64(tutil.RandRangeInt(2000, 3000))
	memory := int64(tutil.RandRangeInt(3001, 4000))

	m := make(manifest.Manifest, 3)
	m[0] = simpleManifest()[0]
	m[0].Services[0].Resources.CPU.Units.Val = sdk.NewInt(cpu)
	m[0].Name = "testgroup-2"

	m[1] = simpleManifest()[0]
	m[1].Services[0].Resources.Storage[0].Quantity.Val = sdk.NewInt(storage)
	m[1].Name = "testgroup-1"

	m[2] = simpleManifest()[0]
	m[2].Services[0].Resources.Memory.Quantity.Val = sdk.NewInt(memory)
	m[2].Name = "testgroup-0"

	deployment := make([]dtypes.Group, 3)
	deployment[0] = simpleDeployment(t)[0]
	deployment[0].GroupSpec.Resources[0].Resources.Memory.Quantity.Val = sdk.NewInt(memory)
	deployment[0].GroupSpec.Name = "testgroup-0"

	deployment[1] = simpleDeployment(t)[0]
	deployment[1].GroupSpec.Resources[0].Resources.Storage[0].Quantity.Val = sdk.NewInt(storage)
	deployment[1].GroupSpec.Name = "testgroup-1"

	deployment[2] = simpleDeployment(t)[0]
	deployment[2].GroupSpec.Resources[0].Resources.CPU.Units.Val = sdk.NewInt(cpu)
	deployment[2].GroupSpec.Name = "testgroup-2"

	err := manifest.ValidateManifestWithDeployment(&m, deployment)
	require.NoError(t, err)
}

func TestManifestWithDeploymentCPUMismatch(t *testing.T) {
	m := simpleManifest()
	deployment := simpleDeployment(t)
	deployment[0].GroupSpec.Resources[0].Resources.CPU.Units.Val = sdk.NewInt(999)
	err := manifest.ValidateManifestWithDeployment(&m, deployment)
	require.Error(t, err)
	require.Regexp(t, "^.*underutilized deployment group.+$", err)
}

func TestManifestWithDeploymentMemoryMismatch(t *testing.T) {
	m := simpleManifest()
	deployment := simpleDeployment(t)
	deployment[0].GroupSpec.Resources[0].Resources.Memory.Quantity.Val = sdk.NewInt(99999)
	err := manifest.ValidateManifestWithDeployment(&m, deployment)
	require.Error(t, err)
	require.Regexp(t, "^.*underutilized deployment group.+$", err)
}

func TestManifestWithDeploymentStorageMismatch(t *testing.T) {
	m := simpleManifest()
	deployment := simpleDeployment(t)
	deployment[0].GroupSpec.Resources[0].Resources.Storage[0].Quantity.Val = sdk.NewInt(99999)
	err := manifest.ValidateManifestWithDeployment(&m, deployment)
	require.Error(t, err)
	require.Regexp(t, "^.*underutilized deployment group.+$", err)
}

func TestManifestWithDeploymentCountMismatch(t *testing.T) {
	m := simpleManifest()
	deployment := simpleDeployment(t)
	deployment[0].GroupSpec.Resources[0].Count++
	err := manifest.ValidateManifestWithDeployment(&m, deployment)
	require.Error(t, err)
	require.Regexp(t, "^.*underutilized deployment group.+$", err)
}

func TestManifestWithManifestGroupMismatch(t *testing.T) {
	m := simpleManifest()
	deployment := simpleDeployment(t)
	m[0].Services[0].Count++
	err := manifest.ValidateManifestWithDeployment(&m, deployment)
	require.Error(t, err)
	require.Regexp(t, "^.*manifest resources .+ not fully matched.+$", err)
}

func TestManifestWithEndpointMismatchA(t *testing.T) {
	m := simpleManifest()

	// Make this require an endpoint
	m[0].Services[0].Expose[0] = manifest.ServiceExpose{
		Port:         2000,
		ExternalPort: 0,
		Proto:        manifest.TCP,
		Service:      "",
		Global:       true,
		Hosts:        nil,
	}
	deployment := simpleDeployment(t)
	err := manifest.ValidateManifestWithDeployment(&m, deployment)
	require.Error(t, err)
	require.Regexp(t, "^.*mismatch on number of endpoints.+$", err)
}

func TestManifestWithEndpointMismatchB(t *testing.T) {
	m := simpleManifest()
	deployment := simpleDeployment(t)
	// Add an endpoint where the manifest doesn't call for it
	deployment[0].GroupSpec.Resources[0].Resources.Endpoints = append(deployment[0].GroupSpec.Resources[0].Resources.Endpoints, akashtypes.Endpoint{})
	err := manifest.ValidateManifestWithDeployment(&m, deployment)
	require.Error(t, err)
	require.Regexp(t, "^.*mismatch on number of HTTP only endpoints.+$", err)
}
