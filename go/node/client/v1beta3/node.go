package v1beta3

import (
	"context"

	sdkclient "github.com/cosmos/cosmos-sdk/client"
	rpcclient "github.com/tendermint/tendermint/rpc/client"
	tmrpc "github.com/tendermint/tendermint/rpc/core/types"
)

var _ NodeClient = (*node)(nil)

type node struct {
	rpc rpcclient.Client
}

func newNode(cctx sdkclient.Context) *node {
	nd := &node{
		rpc: cctx.Client,
	}

	return nd
}

func (nd *node) SyncInfo(ctx context.Context) (*tmrpc.SyncInfo, error) {
	status, err := nd.rpc.Status(ctx)
	if err != nil {
		return nil, err
	}

	info := status.SyncInfo

	return &info, nil
}
