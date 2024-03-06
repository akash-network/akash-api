package client

import (
	"context"
	"errors"

	sdkclient "github.com/cosmos/cosmos-sdk/client"
	tmjclient "github.com/tendermint/tendermint/rpc/jsonrpc/client"

	cltypes "github.com/akash-network/akash-api/go/node/client/types"
	"github.com/akash-network/akash-api/go/node/client/v1beta2"
)

var (
	ErrUnknownClientVersion = errors.New("akash-api: unknown client version")
)

type SetupFn func(interface{}) error

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
	// fallback to manually set version to v1beta2
	if result.ClientInfo == nil || cctx.Offline {
		result.ClientInfo = &ClientInfo{ApiVersion: "v1beta2"}
	}

	var cl interface{}

	switch result.ClientInfo.ApiVersion {
	case "v1beta2":
		cl, err = v1beta2.NewClient(ctx, cctx, opts...)
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
		result.ClientInfo = &ClientInfo{ApiVersion: "v1beta2"}
	}

	var cl interface{}

	switch result.ClientInfo.ApiVersion {
	case "v1beta2":
		cl = v1beta2.NewQueryClient(cctx)
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
