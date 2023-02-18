package testutil

import (
	"fmt"
	"math/rand"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"

	"github.com/akash-network/akash-api/go/node/types/constants"
)

func init() {
	config := sdk.GetConfig()
	config.SetBech32PrefixForAccount(BechPrefix, BechPrefix)
	config.Seal()
}

// CoinDenom provides ability to create coins in test functions and
// pass them into testutil functionality.
const (
	CoinDenom  = constants.AkashDenom
	BechPrefix = "akash"
)

// Name generates a random name with the given prefix
func Name(_ testing.TB, prefix string) string {
	return fmt.Sprintf("%s-%v", prefix, rand.Uint64())
}

// Hostname generates a random hostname with a "test.com" domain
func Hostname(t testing.TB) string {
	return Name(t, "hostname") + ".test.com"
}
