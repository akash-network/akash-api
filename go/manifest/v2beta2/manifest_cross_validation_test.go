package v2beta2

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"

	dtypes "github.com/akash-network/akash-api/go/node/deployment/v1beta3"
	akashtypes "github.com/akash-network/akash-api/go/node/types/v1beta3"
	tutil "github.com/akash-network/akash-api/go/testutil"
	"github.com/akash-network/akash-api/go/testutil/v1beta3"
)

const (
	validationPrefix            = `^manifest cross-validation error: `
	groupPrefix                 = validationPrefix + `group ".+": `
	resourcesIDPrefix           = groupPrefix + `resources ID \(\d+\): `
	servicePrefix               = groupPrefix + `service ".+": `
	resourcesMismatchRegex      = servicePrefix + `CPU|GPU|Memory|Storage resources mismatch for ID \d+$`
	overUtilizedGroup           = servicePrefix + `over-utilized replicas \(\d+\) > group spec resources count \(\d+\)$`
	overUtilizedEndpoints       = servicePrefix + `resources ID \(\d+\): over-utilized HTTP|PORT|IP endpoints$`
	underUtilizedGroupResources = resourcesIDPrefix + `under-utilized \(\d+\) resources`
	underUtilizedGroupEndpoints = resourcesIDPrefix + `under-utilized \(\d+\) HTTP|PORT|IP endpoints`
)

func TestManifestWithEmptyDeployment(t *testing.T) {
	m := simpleManifest(1)
	deployment := make([]dtypes.Group, 0)
	err := m.CheckAgainstDeployment(deployment)
	require.Error(t, err)
}

func simpleDeployment(t *testing.T, expose ServiceExposes, count uint32) []dtypes.Group {
	deployment := make([]dtypes.Group, 1)
	gid := testutil.GroupID(t)
	resources := make(dtypes.ResourceUnits, 1)
	resources[0] = dtypes.ResourceUnit{
		Resources: simpleResources(expose),
		Count:     count,
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
	m := simpleManifest(1)
	deployment := simpleDeployment(t, m[0].Services[0].Expose, 1)
	err := m.CheckAgainstDeployment(deployment)
	require.NoError(t, err)
}

func TestManifestWithDeploymentMultipleCount(t *testing.T) {
	addl := uint32(tutil.RandRangeInt(1, 20)) // nolint: gosec
	m := simpleManifest(addl)

	deployment := simpleDeployment(t, m[0].Services[0].Expose, addl)

	err := m.CheckAgainstDeployment(deployment)
	require.NoError(t, err)
}

func TestManifestWithDeploymentMultiple(t *testing.T) {
	cpu := int64(tutil.RandRangeInt(1024, 2000))
	storage := int64(tutil.RandRangeInt(2000, 3000))
	memory := int64(tutil.RandRangeInt(3001, 4000))

	m := make(Manifest, 3)
	m[0] = simpleManifest(1)[0]
	m[0].Services[0].Resources.CPU.Units.Val = sdk.NewInt(cpu)
	m[0].Name = "testgroup-2"

	m[1] = simpleManifest(1)[0]
	m[1].Services[0].Resources.Storage[0].Quantity.Val = sdk.NewInt(storage)
	m[1].Name = "testgroup-1"
	m[1].Services[0].Expose[0].Hosts = []string{"host1.test"}

	m[2] = simpleManifest(1)[0]
	m[2].Services[0].Resources.Memory.Quantity.Val = sdk.NewInt(memory)
	m[2].Name = "testgroup-0"
	m[2].Services[0].Expose[0].Hosts = []string{"host2.test"}

	deployment := make([]dtypes.Group, 3)
	deployment[0] = simpleDeployment(t, m[0].Services[0].Expose, 1)[0]
	deployment[0].GroupSpec.Resources[0].Memory.Quantity.Val = sdk.NewInt(memory)
	deployment[0].GroupSpec.Name = "testgroup-0"

	deployment[1] = simpleDeployment(t, m[1].Services[0].Expose, 1)[0]
	deployment[1].GroupSpec.Resources[0].Storage[0].Quantity.Val = sdk.NewInt(storage)
	deployment[1].GroupSpec.Name = "testgroup-1"

	deployment[2] = simpleDeployment(t, m[2].Services[0].Expose, 1)[0]
	deployment[2].GroupSpec.Resources[0].CPU.Units.Val = sdk.NewInt(cpu)
	deployment[2].GroupSpec.Name = "testgroup-2"

	err := m.CheckAgainstDeployment(deployment)

	require.NoError(t, err)
}

func TestManifestWithDeploymentCPUMismatch(t *testing.T) {
	m := simpleManifest(1)
	deployment := simpleDeployment(t, m[0].Services[0].Expose, 1)
	deployment[0].GroupSpec.Resources[0].CPU.Units.Val = sdk.NewInt(999)
	err := m.CheckAgainstDeployment(deployment)
	require.Error(t, err)
	require.Regexp(t, resourcesMismatchRegex, err)
}

func TestManifestWithDeploymentGPUMismatch(t *testing.T) {
	m := simpleManifest(1)
	deployment := simpleDeployment(t, m[0].Services[0].Expose, 1)
	deployment[0].GroupSpec.Resources[0].GPU.Units.Val = sdk.NewInt(200)
	err := m.CheckAgainstDeployment(deployment)
	require.Error(t, err)
	require.Regexp(t, resourcesMismatchRegex, err)
}

func TestManifestWithDeploymentMemoryMismatch(t *testing.T) {
	m := simpleManifest(1)
	deployment := simpleDeployment(t, m[0].Services[0].Expose, 1)
	deployment[0].GroupSpec.Resources[0].Memory.Quantity.Val = sdk.NewInt(99999)
	err := m.CheckAgainstDeployment(deployment)
	require.Error(t, err)
	require.Regexp(t, resourcesMismatchRegex, err)
}

func TestManifestWithDeploymentStorageMismatch(t *testing.T) {
	m := simpleManifest(1)
	deployment := simpleDeployment(t, m[0].Services[0].Expose, 1)
	deployment[0].GroupSpec.Resources[0].Storage[0].Quantity.Val = sdk.NewInt(99999)
	err := m.CheckAgainstDeployment(deployment)
	require.Error(t, err)
	require.Regexp(t, resourcesMismatchRegex, err)
}

func TestManifestWithDeploymentCountMismatch(t *testing.T) {
	m := simpleManifest(1)
	deployment := simpleDeployment(t, m[0].Services[0].Expose, 1)
	deployment[0].GroupSpec.Resources[0].Count++
	err := m.CheckAgainstDeployment(deployment)
	require.Error(t, err)
	require.Regexp(t, underUtilizedGroupResources, err)
}

func TestManifestWithManifestGroupMismatch(t *testing.T) {
	m := simpleManifest(1)
	deployment := simpleDeployment(t, m[0].Services[0].Expose, 1)
	m[0].Services[0].Count++
	err := m.CheckAgainstDeployment(deployment)
	require.Error(t, err)
	require.Regexp(t, overUtilizedGroup, err)
}

func TestManifestWithEndpointMismatchA(t *testing.T) {
	m := simpleManifest(1)

	// Make this require an endpoint
	m[0].Services[0].Expose[0] = ServiceExpose{
		Port:         2000,
		ExternalPort: 0,
		Proto:        TCP,
		Service:      "",
		Global:       true,
		Hosts:        nil,
	}
	deployment := simpleDeployment(t, m[0].Services[0].Expose, 1)

	// Remove an endpoint where the manifest calls for it
	deployment[0].GroupSpec.Resources[0].Endpoints = akashtypes.Endpoints{}

	err := m.CheckAgainstDeployment(deployment)
	require.Error(t, err)
	require.Regexp(t, overUtilizedEndpoints, err)
}

func TestManifestWithEndpointMismatchB(t *testing.T) {
	m := simpleManifest(1)
	deployment := simpleDeployment(t, m[0].Services[0].Expose, 1)
	// Add an endpoint where the manifest doesn't call for it
	deployment[0].GroupSpec.Resources[0].Endpoints = append(deployment[0].GroupSpec.Resources[0].Endpoints, akashtypes.Endpoint{})
	err := m.CheckAgainstDeployment(deployment)
	require.Error(t, err)
	require.Regexp(t, underUtilizedGroupEndpoints, err)
}
