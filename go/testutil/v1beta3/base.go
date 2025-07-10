package testutil

import (
	"testing"

	sdkmath "cosmossdk.io/math"
	"github.com/stretchr/testify/require"

	"github.com/cometbft/cometbft/libs/rand"
	sdk "github.com/cosmos/cosmos-sdk/types"

	dtypes "pkg.akt.dev/go/node/deployment/v1beta4"
	attr "pkg.akt.dev/go/node/types/attributes/v1"
	rtypes "pkg.akt.dev/go/node/types/resources/v1beta4"
	"pkg.akt.dev/go/testutil"
)

func ProviderHostname(t testing.TB) string {
	return "https://" + testutil.Hostname(t)
}

// Attribute generates a random sdk.Attribute
func Attribute(t testing.TB) attr.Attribute {
	t.Helper()
	return attr.NewStringAttribute(testutil.Name(t, "attr-key"), testutil.Name(t, "attr-value"))
}

// Attributes generates a set of sdk.Attribute
func Attributes(t testing.TB) attr.Attributes {
	t.Helper()
	count := rand.Intn(10) + 1

	vals := make(attr.Attributes, 0, count)
	for i := 0; i < count; i++ {
		vals = append(vals, Attribute(t))
	}
	return vals
}

// PlacementRequirements generates placement requirements
func PlacementRequirements(t testing.TB) attr.PlacementRequirements {
	return attr.PlacementRequirements{
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
	require.GreaterOrEqual(t, startID, uint32(1))

	count := uint32(rand.Intn(10)) + 1 // nolint: gosec

	vals := make(dtypes.ResourceUnits, 0, count)
	for i := uint32(0); i < count; i++ {
		coin := sdk.NewDecCoin(testutil.CoinDenom, sdkmath.NewInt(rand.Int63n(9999)+1))
		res := dtypes.ResourceUnit{
			Resources: rtypes.Resources{
				ID: i + startID,
				CPU: &rtypes.CPU{
					Units: rtypes.NewResourceValue(uint64(dtypes.GetValidationConfig().Unit.Min.CPU)),
				},
				GPU: &rtypes.GPU{
					Units: rtypes.NewResourceValue(uint64(dtypes.GetValidationConfig().Unit.Min.GPU) + 1),
				},
				Memory: &rtypes.Memory{
					Quantity: rtypes.NewResourceValue(dtypes.GetValidationConfig().Unit.Min.Memory),
				},
				Storage: rtypes.Volumes{
					rtypes.Storage{
						Quantity: rtypes.NewResourceValue(dtypes.GetValidationConfig().Unit.Min.Storage),
					},
				},
				Endpoints: rtypes.Endpoints{},
			},
			Count: 1,
			Price: coin,
		}

		startID++

		vals = append(vals, res)
	}
	return vals
}
