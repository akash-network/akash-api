package rest

import (
	"context"
	"errors"
	"math/big"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
)

func TestNewClientWithProviderURL(t *testing.T) {
	ctx := context.Background()
	providerURL := "https://example.com:8443"
	addr, err := sdk.AccAddressFromBech32("akash1365yvmc4s7awdyj3n2sav7xfx76adc6dnmlx63")
	require.NoError(t, err)

	t.Run("basic functionality", func(t *testing.T) {
		cl, err := NewClient(ctx, addr, WithProviderURL(providerURL))
		require.NoError(t, err)
		require.NotNil(t, cl)

		c := cl.(*client)
		require.Nil(t, c.cclient)
		require.Equal(t, ctx, c.ctx)
		require.Equal(t, addr, c.addr)
		require.NotNil(t, c.host)
		require.NotNil(t, c.tlsCfg)
	})

	t.Run("options are executed", func(t *testing.T) {
		token := "test-token"

		cl, err := NewClient(ctx, addr, WithProviderURL(providerURL), WithAuthToken(token))
		require.NoError(t, err)

		c := cl.(*client)
		require.Nil(t, c.cclient)
		require.Equal(t, token, c.opts.token)
		require.Equal(t, providerURL, c.opts.providerURL)
	})

	t.Run("invalid URL", func(t *testing.T) {
		invalidURL := "://invalid-url"
		_, err := NewClient(ctx, addr, WithProviderURL(invalidURL))
		require.Error(t, err)
	})

	t.Run("option error handling", func(t *testing.T) {
		testError := errors.New("test error")
		errorOption := func(*clientOptions) error {
			return testError
		}

		_, err := NewClient(ctx, addr, WithProviderURL(providerURL), errorOption)
		require.Error(t, err)
		require.Equal(t, testError, err)
	})

	t.Run("RPC client not set error", func(t *testing.T) {
		cl, err := NewClient(ctx, addr, WithProviderURL(providerURL))
		require.NoError(t, err)

		c := cl.(*client)
		require.Nil(t, c.cclient)

		_, _, err = c.GetAccountCertificate(ctx, addr, big.NewInt(1))
		require.Error(t, err)
		require.Equal(t, ErrRPCClientNotSet, err)
	})

	t.Run("mutually exclusive options error", func(t *testing.T) {
		_, err := NewClient(ctx, addr, WithProviderURL(providerURL), WithQueryClient(nil))
		require.Error(t, err)
		require.Equal(t, ErrMutuallyExclusiveOptions, err)
	})

	t.Run("no client configuration error", func(t *testing.T) {
		_, err := NewClient(ctx, addr)
		require.Error(t, err)
		require.Contains(t, err.Error(), "either WithQueryClient or WithProviderURL must be provided")
	})

}
