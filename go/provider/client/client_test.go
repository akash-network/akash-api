package rest

import (
	"context"
	"errors"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
)

func TestNewClientOffChain(t *testing.T) {
	ctx := context.Background()
	providerURL := "https://example.com:8443"
	addr, err := sdk.AccAddressFromBech32("akash1365yvmc4s7awdyj3n2sav7xfx76adc6dnmlx63")
	require.NoError(t, err)

	t.Run("basic functionality", func(t *testing.T) {
		cl, err := NewClientOffChain(ctx, providerURL, addr)
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
		optionCalled := false
		token := "test-token"

		testOption := func(opts *clientOptions) error {
			optionCalled = true
			opts.token = token
			return nil
		}

		cl, err := NewClientOffChain(ctx, providerURL, addr, testOption)
		require.NoError(t, err)
		require.True(t, optionCalled, "ClientOption should have been called")

		c := cl.(*client)
		require.Nil(t, c.cclient)
		require.Equal(t, token, c.opts.token)
	})

	t.Run("invalid URL", func(t *testing.T) {
		invalidURL := "://invalid-url"
		_, err := NewClientOffChain(ctx, invalidURL, addr)
		require.Error(t, err)
	})

	t.Run("option error handling", func(t *testing.T) {
		testError := errors.New("test error")
		errorOption := func(opts *clientOptions) error {
			return testError
		}

		_, err := NewClientOffChain(ctx, providerURL, addr, errorOption)
		require.Error(t, err)
		require.Equal(t, testError, err)
	})

}
