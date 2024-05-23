package client

import (
	"context"
	"errors"

	tmjclient "github.com/cometbft/cometbft/rpc/jsonrpc/client"

	sdkclient "github.com/cosmos/cosmos-sdk/client"

	cltypes "pkg.akt.dev/go/node/client/types"
	"pkg.akt.dev/go/node/client/v1beta3"
)

var (
	ErrUnknownClientVersion = errors.New("akash-api: unknown client version")
)

const (
	// DefaultClientAPIVersion indicates the default ApiVersion of the client.
	DefaultClientAPIVersion = "v1beta2"
)

// SetupFn defines a function that takes a parameter, ideally a Client or QueryClient.
// These functions must validate the client and make it accessible.
type SetupFn func(interface{}) error

// DiscoverClient queries an RPC node to get the version of the client and executes a SetupFn function
// passing a new versioned Client instance as parameter.
// If any error occurs when calling the RPC node or the Cosmos SDK client Context is set to offline the default value of
// DefaultClientApiVersion will be used.
// An error is returned if client discovery is not successful.
func DiscoverClient(ctx context.Context, cctx sdkclient.Context, setup SetupFn, opts ...cltypes.ClientOption) error {
	rpc, err := tmjclient.New(cctx.NodeURI)
	if err != nil {
		return err
	}

	result := new(Akash)

	if !cctx.Offline {
		params := make(map[string]interface{})
		_, _ = rpc.Call(ctx, "akash", params, result)
	}

	// if client info is nil, mostly likely "akash" endpoint is not yet supported on the node
	// fallback to manually set version to DefaultClientApiVersion
	if result.ClientInfo == nil || cctx.Offline {
		result.ClientInfo = &ClientInfo{ApiVersion: DefaultClientAPIVersion}
	}

	var cl interface{}

	switch result.ClientInfo.ApiVersion {
	case "v1beta3":
		cl, err = v1beta3.NewClient(ctx, cctx, opts...)
	default:
		err = ErrUnknownClientVersion
	}

	if err != nil {
		return err
	}

	if err = setup(cl); err != nil {
		return err
	}

	return nil
}

func DiscoverLightClient(ctx context.Context, cctx sdkclient.Context, setup SetupFn) error {
	rpc, err := tmjclient.New(cctx.NodeURI)
	if err != nil {
		return err
	}

	result := new(Akash)

	if !cctx.Offline {
		params := make(map[string]interface{})
		_, _ = rpc.Call(ctx, "akash", params, result)
	}

	// if client info is nil, mostly likely "akash" endpoint is not yet supported on the node
	// fallback to manually set version to DefaultClientApiVersion
	if result.ClientInfo == nil || cctx.Offline {
		result.ClientInfo = &ClientInfo{ApiVersion: DefaultClientAPIVersion}
	}

	var cl interface{}

	switch result.ClientInfo.ApiVersion {
	case "v1beta3":
		cl, err = v1beta3.NewLightClient(cctx)
	default:
		err = ErrUnknownClientVersion
	}

	if err != nil {
		return err
	}

	if err = setup(cl); err != nil {
		return err
	}

	return nil
}

// DiscoverQueryClient queries an RPC node to get the version of the client and executes a SetupFn function
// passing a new versioned QueryClient instance as parameter.
// If any error occurs when calling the RPC node or the Cosmos SDK client Context is set to offline the default value of
// DefaultClientApiVersion will be used.
// An error is returned if client discovery is not successful.
func DiscoverQueryClient(ctx context.Context, cctx sdkclient.Context, setup SetupFn) error {
	rpc, err := tmjclient.New(cctx.NodeURI)
	if err != nil {
		return err
	}

	result := new(Akash)

	if !cctx.Offline {
		params := make(map[string]interface{})
		_, _ = rpc.Call(ctx, "akash", params, result)
	}

	if result.ClientInfo == nil {
		result.ClientInfo = &ClientInfo{ApiVersion: DefaultClientAPIVersion}
	}

	var cl interface{}

	switch result.ClientInfo.ApiVersion {
	case "v1beta3":
		cl = v1beta3.NewQueryClient(cctx)
	default:
		err = ErrUnknownClientVersion
	}

	if err != nil {
		return err
	}

	if err = setup(cl); err != nil {
		return err
	}

	return nil
}
