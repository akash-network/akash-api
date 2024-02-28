package v1beta2

import (
	"context"
	"fmt"

	"github.com/gogo/protobuf/proto"
	"github.com/spf13/pflag"

	tmrpc "github.com/tendermint/tendermint/rpc/core/types"

	sdkclient "github.com/cosmos/cosmos-sdk/client"
	sdk "github.com/cosmos/cosmos-sdk/types"

	atypes "github.com/akash-network/akash-api/go/node/audit/v1beta3"
	ctypes "github.com/akash-network/akash-api/go/node/cert/v1beta3"
	dtypes "github.com/akash-network/akash-api/go/node/deployment/v1beta3"
	mtypes "github.com/akash-network/akash-api/go/node/market/v1beta4"
	ptypes "github.com/akash-network/akash-api/go/node/provider/v1beta3"
)

//go:generate mockery --name QueryClient --output ./mocks
type QueryClient interface {
	dtypes.QueryClient
	mtypes.QueryClient
	ptypes.QueryClient
	atypes.QueryClient
	ctypes.QueryClient
	ClientContext() sdkclient.Context
}

//go:generate mockery --name TxClient --output ./mocks
type TxClient interface {
	Broadcast(context.Context, []sdk.Msg, ...BroadcastOption) (interface{}, error)
}

//go:generate mockery --name NodeClient --output ./mocks
type NodeClient interface {
	SyncInfo(ctx context.Context) (*tmrpc.SyncInfo, error)
}

//go:generate mockery --name Client --output ./mocks
type Client interface {
	Query() QueryClient
	Tx() TxClient
	Node() NodeClient
	ClientContext() sdkclient.Context
	PrintMessage(interface{}) error
}

type client struct {
	qclient *queryClient
	tx      TxClient
	node    *node
}

var _ Client = (*client)(nil)

func NewClient(ctx context.Context, cctx sdkclient.Context, flags *pflag.FlagSet) (Client, error) {
	nd := newNode(cctx)

	cl := &client{
		qclient: newQueryClient(cctx),
		node:    nd,
	}

	var err error
	cl.tx, err = newSerialTx(ctx, cctx, flags, nd, BroadcastDefaultTimeout)
	if err != nil {
		return nil, err
	}

	return cl, nil
}

func (cl *client) Query() QueryClient {
	return cl.qclient
}

func (cl *client) Tx() TxClient {
	return cl.tx
}

func (cl *client) Node() NodeClient {
	return cl.node
}

func (cl *client) ClientContext() sdkclient.Context {
	return cl.qclient.cctx
}

func (cl *client) PrintMessage(msg interface{}) error {
	var err error

	switch m := msg.(type) {
	case proto.Message:
		err = cl.qclient.cctx.PrintProto(m)
	case []byte:
		err = cl.qclient.cctx.PrintString(fmt.Sprintf("%s\n", string(m)))
	}

	return err
}
