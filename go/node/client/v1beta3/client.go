package v1beta3

import (
	"context"
	"fmt"

	"github.com/gogo/protobuf/proto"

	tmrpc "github.com/tendermint/tendermint/rpc/core/types"

	sdkclient "github.com/cosmos/cosmos-sdk/client"
	sdk "github.com/cosmos/cosmos-sdk/types"
	authtypes "github.com/cosmos/cosmos-sdk/x/auth/types"
	"github.com/cosmos/cosmos-sdk/x/authz"
	banktypes "github.com/cosmos/cosmos-sdk/x/bank/types"
	disttypes "github.com/cosmos/cosmos-sdk/x/distribution/types"
	evdtypes "github.com/cosmos/cosmos-sdk/x/evidence/types"
	feegranttypes "github.com/cosmos/cosmos-sdk/x/feegrant"
	govtypes "github.com/cosmos/cosmos-sdk/x/gov/types"
	minttypes "github.com/cosmos/cosmos-sdk/x/mint/types"
	paramtypes "github.com/cosmos/cosmos-sdk/x/params/types/proposal"
	slashtypes "github.com/cosmos/cosmos-sdk/x/slashing/types"
	staketypes "github.com/cosmos/cosmos-sdk/x/staking/types"
	upgradetypes "github.com/cosmos/cosmos-sdk/x/upgrade/types"

	atypes "github.com/akash-network/akash-api/go/node/audit/v1beta4"
	ctypes "github.com/akash-network/akash-api/go/node/cert/v1beta3"
	cltypes "github.com/akash-network/akash-api/go/node/client/types"
	dtypes "github.com/akash-network/akash-api/go/node/deployment/v1beta4"
	mtypes "github.com/akash-network/akash-api/go/node/market/v1beta5"
	ptypes "github.com/akash-network/akash-api/go/node/provider/v1beta4"
)

// QueryClient is the interface that exposes query modules.
//
//go:generate mockery --name QueryClient --output ./mocks
type QueryClient interface {
	dtypes.QueryClient
	mtypes.QueryClient
	ptypes.QueryClient
	atypes.QueryClient
	ctypes.QueryClient
	Auth() authtypes.QueryClient
	Authz() authz.QueryClient
	Bank() banktypes.QueryClient
	Distribution() disttypes.QueryClient
	Evidence() evdtypes.QueryClient
	Feegrant() feegranttypes.QueryClient
	Gov() govtypes.QueryClient
	Mint() minttypes.QueryClient
	Params() paramtypes.QueryClient
	Slashing() slashtypes.QueryClient
	Staking() staketypes.QueryClient
	Upgrade() upgradetypes.QueryClient

	ClientContext() sdkclient.Context
}

// TxClient is the interface that wraps the Broadcast method.
// Broadcast broadcasts a transaction. A transaction is composed of 1 or many messages. This allows several
// operations to be performed in a single transaction.
// A transaction broadcast can be configured with an arbitrary number of BroadcastOption.
//
//go:generate mockery --name TxClient --output ./mocks
type TxClient interface {
	Broadcast(context.Context, []sdk.Msg, ...BroadcastOption) (interface{}, error)
}

//go:generate mockery --name NodeClient --output ./mocks
type NodeClient interface {
	SyncInfo(ctx context.Context) (*tmrpc.SyncInfo, error)
}

// Client is the umbrella interface that exposes every other client's modules.
//
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

// NewClient creates a new client.
func NewClient(ctx context.Context, cctx sdkclient.Context, opts ...cltypes.ClientOption) (Client, error) {
	nd := newNode(cctx)

	cl := &client{
		qclient: newQueryClient(cctx),
		node:    nd,
	}

	var err error
	cl.tx, err = newSerialTx(ctx, cctx, nd, opts...)
	if err != nil {
		return nil, err
	}

	return cl, nil
}

// Query implements Client by returning the QueryClient instance of the client.
func (cl *client) Query() QueryClient {
	return cl.qclient
}

// Tx implements Client by returning the TxClient instance of the client.
func (cl *client) Tx() TxClient {
	return cl.tx
}

// Node implements Client by returning the NodeClient instance of the client.
func (cl *client) Node() NodeClient {
	return cl.node
}

// ClientContext implements Client by returning the Cosmos SDK client context instance of the client.
func (cl *client) ClientContext() sdkclient.Context {
	return cl.qclient.cctx
}

// PrintMessage implements Client by printing the raw message passed as parameter.
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
