package cli

import (
	"context"
	"fmt"
	"os"
	"os/signal"
	"syscall"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/spf13/pflag"

	cflags "pkg.akt.dev/go/cli/flags"
	client "pkg.akt.dev/go/node/client/v1beta3"
	dtypes "pkg.akt.dev/go/node/deployment/v1beta4"
	mtypes "pkg.akt.dev/go/node/market/v1beta5"
)

func DetectDeploymentDeposit(ctx context.Context, flags *pflag.FlagSet, cl client.QueryClient) (sdk.Coin, error) {
	var deposit sdk.Coin
	var depositStr string
	var err error

	if !flags.Changed(cflags.FlagDeposit) {
		resp, err := cl.Deployment().Params(ctx, &dtypes.QueryParamsRequest{})
		if err != nil {
			return sdk.Coin{}, err
		}

		// always default to AKT
		for _, sCoin := range resp.Params.MinDeposits {
			if sCoin.Denom == "uakt" {
				depositStr = fmt.Sprintf("%s%s", sCoin.Amount, sCoin.Denom)
				break
			}
		}

		if depositStr == "" {
			return sdk.Coin{}, fmt.Errorf("couldn't query default deposit amount for uAKT")
		}
	} else {
		depositStr, err = flags.GetString(cflags.FlagDeposit)
		if err != nil {
			return sdk.Coin{}, err
		}
	}

	deposit, err = sdk.ParseCoinNormalized(depositStr)
	if err != nil {
		return sdk.Coin{}, err
	}

	return deposit, nil
}

func DetectBidDeposit(ctx context.Context, flags *pflag.FlagSet, cl client.QueryClient) (sdk.Coin, error) {
	var deposit sdk.Coin
	var depositStr string
	var err error

	if !flags.Changed(cflags.FlagDeposit) {
		resp, err := cl.Market().Params(ctx, &mtypes.QueryParamsRequest{})
		if err != nil {
			return sdk.Coin{}, err
		}

		depositStr = resp.Params.BidMinDeposit.String()
	} else {
		depositStr, err = flags.GetString(cflags.FlagDeposit)
		if err != nil {
			return sdk.Coin{}, err
		}
	}

	deposit, err = sdk.ParseCoinNormalized(depositStr)
	if err != nil {
		return sdk.Coin{}, err
	}

	return deposit, nil
}

func watchSignals(ctx context.Context, cancel context.CancelFunc) <-chan struct{} {
	donech := make(chan struct{})
	sigch := make(chan os.Signal, 1)
	signal.Notify(sigch, syscall.SIGINT, syscall.SIGHUP, syscall.SIGTERM)
	go func() {
		defer close(donech)
		defer signal.Stop(sigch)
		select {
		case <-ctx.Done():
		case <-sigch:
			cancel()
		}
	}()
	return donech
}

// RunForever runs a function in the background, forever. Returns error in case of failure.
func RunForever(fn func(ctx context.Context) error) error {
	return RunForeverWithContext(context.Background(), fn)
}

func RunForeverWithContext(ctx context.Context, fn func(ctx context.Context) error) error {
	ctx, cancel := context.WithCancel(ctx)

	donech := watchSignals(ctx, cancel)

	err := fn(ctx)

	cancel()
	<-donech

	return err
}
