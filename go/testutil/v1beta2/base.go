package testutil

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/tendermint/tendermint/libs/rand"

	dtypes "github.com/akash-network/akash-api/go/node/deployment/v1beta3"
	types "github.com/akash-network/akash-api/go/node/types/v1beta3"
	"github.com/akash-network/akash-api/go/testutil"
)

func ProviderHostname(t testing.TB) string {
	return "https://" + testutil.Hostname(t)
}

// Attribute generates a random sdk.Attribute
func Attribute(t testing.TB) types.Attribute {
	t.Helper()
	return types.NewStringAttribute(testutil.Name(t, "attr-key"), testutil.Name(t, "attr-value"))
}

// Attributes generates a set of sdk.Attribute
func Attributes(t testing.TB) []types.Attribute {
	t.Helper()
	count := rand.Intn(10) + 1

	vals := make([]types.Attribute, 0, count)
	for i := 0; i < count; i++ {
		vals = append(vals, Attribute(t))
	}
	return vals
}

// PlacementRequirements generates placement requirements
func PlacementRequirements(t testing.TB) types.PlacementRequirements {
	return types.PlacementRequirements{
		Attributes: Attributes(t),
	}
}

func RandCPUUnits() uint {
	return testutil.RandRangeUint(
		dtypes.GetValidationConfig().MinUnitCPU,
		dtypes.GetValidationConfig().MaxUnitCPU)
}

func RandGPUUnits() uint {
	return testutil.RandRangeUint(
		dtypes.GetValidationConfig().MinUnitGPU,
		dtypes.GetValidationConfig().MaxUnitGPU)
}

func RandMemoryQuantity() uint64 {
	return testutil.RandRangeUint64(
		dtypes.GetValidationConfig().MinUnitMemory,
		dtypes.GetValidationConfig().MaxUnitMemory)
}

func RandStorageQuantity() uint64 {
	return testutil.RandRangeUint64(
		dtypes.GetValidationConfig().MinUnitStorage,
		dtypes.GetValidationConfig().MaxUnitStorage)
}

// Resources produces an attribute list for populating a Group's
// 'Resources' fields.
func Resources(t testing.TB) []dtypes.Resource {
	t.Helper()
	count := rand.Intn(10) + 1

	vals := make([]dtypes.Resource, 0, count)
	for i := 0; i < count; i++ {
		coin := sdk.NewDecCoin(testutil.CoinDenom, sdk.NewInt(rand.Int63n(9999)+1))
		res := dtypes.Resource{
			Resources: types.ResourceUnits{
				CPU: &types.CPU{
					Units: types.NewResourceValue(uint64(dtypes.GetValidationConfig().MinUnitCPU)),
				},
				Memory: &types.Memory{
					Quantity: types.NewResourceValue(dtypes.GetValidationConfig().MinUnitMemory),
				},
				Storage: types.Volumes{
					types.Storage{
						Quantity: types.NewResourceValue(dtypes.GetValidationConfig().MinUnitStorage),
					},
				},
			},
			Count: 1,
			Price: coin,
		}
		vals = append(vals, res)
	}
	return vals
}
