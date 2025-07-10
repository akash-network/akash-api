package client

import (
	"context"

	rpchttp "github.com/cometbft/cometbft/rpc/client/http"
	jsonrpcclient "github.com/cometbft/cometbft/rpc/jsonrpc/client"

	"github.com/cosmos/cosmos-sdk/client"
)

type RPCClient interface {
	client.CometRPC
	Akash(ctx context.Context) *Akash
}

type rpcClient struct {
	*rpchttp.HTTP
	rpc *jsonrpcclient.Client
}

var _ client.CometRPC = (*rpcClient)(nil)

// NewClient allows for setting a custom http client (See New).
// An error is returned on invalid remote. The function panics when remote is nil.
func NewClient(remote string) (RPCClient, error) {
	httpClient, err := jsonrpcclient.DefaultHTTPClient(remote)
	if err != nil {
		return nil, err
	}

	cl, err := rpchttp.NewWithClient(remote, "/websocket", httpClient)
	if err != nil {
		return nil, err
	}

	rc, err := jsonrpcclient.NewWithHTTPClient(remote, httpClient)
	if err != nil {
		return nil, err
	}

	rpc := &rpcClient{
		HTTP: cl,
		rpc:  rc,
	}

	return rpc, nil
}

func (cl *rpcClient) Akash(ctx context.Context) *Akash {
	result := new(Akash)
	params := make(map[string]interface{})
	_, _ = cl.rpc.Call(ctx, "akash", params, result)

	return result
}
