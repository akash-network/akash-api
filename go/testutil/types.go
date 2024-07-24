package testutil

import (
	"fmt"
	"math/rand"
	"os"

	servertypes "github.com/cosmos/cosmos-sdk/server/types"
	pruningtypes "github.com/cosmos/cosmos-sdk/store/pruning/types"
	"github.com/cosmos/cosmos-sdk/types/module/testutil"

	cflags "pkg.akt.dev/go/cli/flags"
	"pkg.akt.dev/go/testutil/network"
)

func RandRangeInt(min, max int) int {
	return rand.Intn(max-min) + min // nolint: gosec
}

func RandRangeUint(min, max uint) uint {
	val := rand.Uint64() // nolint: gosec
	val %= uint64(max - min)
	val += uint64(min)
	return uint(val)
}

func RandRangeUint64(min, max uint64) uint64 {
	val := rand.Uint64() // nolint: gosec
	val %= max - min
	val += min
	return val
}

// NewTestNetworkFixture returns a new simapp AppConstructor for network simulation tests
func NewTestNetworkFixture() network.TestFixture {
	dir, err := os.MkdirTemp("", "simapp")
	if err != nil {
		panic(fmt.Sprintf("failed creating temporary directory: %v", err))
	}
	defer func() {
		_ = os.RemoveAll(dir)
	}()

	tapp := app.NewApp(
		log.NewNopLogger(),
		dbm.NewMemDB(),
		nil,
		true,
		0,
		make(map[int64]bool),
		simtestutil.NewAppOptionsWithFlagHome(dir),
	)

	appCtr := func(val network.ValidatorI) servertypes.Application {
		return app.NewApp(
			val.GetCtx().Logger,
			dbm.NewMemDB(),
			nil,
			true,
			0,
			make(map[int64]bool),
			simtestutil.NewAppOptionsWithFlagHome(val.GetCtx().Config.RootDir),
			bam.SetPruning(pruningtypes.NewPruningOptionsFromString(val.GetAppConfig().Pruning)),
			bam.SetMinGasPrices(val.GetAppConfig().MinGasPrices),
			bam.SetChainID(val.GetCtx().Viper.GetString(cflags.FlagChainID)),
		)
	}

	return network.TestFixture{
		AppConstructor: appCtr,
		GenesisState:   app.NewDefaultGenesisState(tapp.AppCodec()),
		EncodingConfig: testutil.TestEncodingConfig{
			InterfaceRegistry: tapp.InterfaceRegistry(),
			Codec:             tapp.AppCodec(),
			TxConfig:          tapp.TxConfig(),
			Amino:             tapp.LegacyAmino(),
		},
	}
}
