package testutil

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
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
		dtypes.GetValidationConfig().Unit.Min.CPU,
		dtypes.GetValidationConfig().Unit.Max.CPU)
}

func RandGPUUnits() uint {
	return testutil.RandRangeUint(
		dtypes.GetValidationConfig().Unit.Min.GPU,
		dtypes.GetValidationConfig().Unit.Max.GPU)
}

func RandMemoryQuantity() uint64 {
	return testutil.RandRangeUint64(
		dtypes.GetValidationConfig().Unit.Min.Memory,
		dtypes.GetValidationConfig().Unit.Max.Memory)
}

func RandStorageQuantity() uint64 {
	return testutil.RandRangeUint64(
		dtypes.GetValidationConfig().Unit.Min.Storage,
		dtypes.GetValidationConfig().Unit.Max.Storage)
}

// ResourcesList produces an attribute list for populating a Group's
// 'Resources' fields.
func ResourcesList(t testing.TB, startID uint32) dtypes.ResourceUnits {
	require.GreaterOrEqual(t, uint32(1), startID)

	count := uint32(rand.Intn(10)) + 1

	vals := make(dtypes.ResourceUnits, 0, count)
	for i := uint32(0); i < count; i++ {
		coin := sdk.NewDecCoin(testutil.CoinDenom, sdk.NewInt(rand.Int63n(9999)+1))
		res := dtypes.ResourceUnit{
			Resources: types.Resources{
				ID: i + startID,
				CPU: &types.CPU{
					Units: types.NewResourceValue(uint64(dtypes.GetValidationConfig().Unit.Min.CPU)),
				},
				GPU: &types.GPU{
					Units: types.NewResourceValue(uint64(dtypes.GetValidationConfig().Unit.Min.GPU) + 1),
				},
				Memory: &types.Memory{
					Quantity: types.NewResourceValue(dtypes.GetValidationConfig().Unit.Min.Memory),
				},
				Storage: types.Volumes{
					types.Storage{
						Quantity: types.NewResourceValue(dtypes.GetValidationConfig().Unit.Min.Storage),
					},
				},
				Endpoints: types.Endpoints{},
			},
			Count: 1,
			Price: coin,
		}

		startID++

		vals = append(vals, res)
	}
	return vals
}
