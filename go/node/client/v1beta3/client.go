package v1beta3

import (
	"context"
	"fmt"

	"github.com/cosmos/gogoproto/proto"

	tmrpc "github.com/cometbft/cometbft/rpc/core/types"

	sdkclient "github.com/cosmos/cosmos-sdk/client"
	sdk "github.com/cosmos/cosmos-sdk/types"
	authtypes "github.com/cosmos/cosmos-sdk/x/auth/types"
	"github.com/cosmos/cosmos-sdk/x/authz"
	banktypes "github.com/cosmos/cosmos-sdk/x/bank/types"
	disttypes "github.com/cosmos/cosmos-sdk/x/distribution/types"
	evdtypes "github.com/cosmos/cosmos-sdk/x/evidence/types"
	feegranttypes "github.com/cosmos/cosmos-sdk/x/feegrant"
	govtypes "github.com/cosmos/cosmos-sdk/x/gov/types/v1beta1"
	minttypes "github.com/cosmos/cosmos-sdk/x/mint/types"
	paramtypes "github.com/cosmos/cosmos-sdk/x/params/types/proposal"
	slashtypes "github.com/cosmos/cosmos-sdk/x/slashing/types"
	staketypes "github.com/cosmos/cosmos-sdk/x/staking/types"
	upgradetypes "github.com/cosmos/cosmos-sdk/x/upgrade/types"

	atypes "pkg.akt.io/go/node/audit/v1"
	ctypes "pkg.akt.io/go/node/cert/v1"

	cltypes "pkg.akt.io/go/node/client/types"
	dtypes "pkg.akt.io/go/node/deployment/v1beta4"
	mtypes "pkg.akt.io/go/node/market/v1beta5"
	ptypes "pkg.akt.io/go/node/provider/v1beta4"
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

// LightClient is the umbrella interface that exposes every other client's modules.
//
//go:generate mockery --name LightClient --output ./mocks
type LightClient interface {
	Query() QueryClient
	Node() NodeClient
	ClientContext() sdkclient.Context
	PrintMessage(interface{}) error
}

// Client is the umbrella interface that exposes every other client's modules.
//
//go:generate mockery --name Client --output ./mocks
type Client interface {
	LightClient
	Tx() TxClient
}

type lightClient struct {
	qclient *queryClient
	node *node
}

type client struct {
	lightClient
	tx      TxClient
}

var (
	_ Client      = (*client)(nil)
	_ LightClient = (*lightClient)(nil)
)

// NewClient creates a new client.
func NewClient(ctx context.Context, cctx sdkclient.Context, opts ...cltypes.ClientOption) (Client, error) {
	cl := &client{
		lightClient: lightClient{
			qclient: newQueryClient(cctx),
			node:    newNode(cctx),
		},
	}

	var err error
	cl.tx, err = newSerialTx(ctx, cctx, cl.node, opts...)
	if err != nil {
		return nil, err
	}

	return cl, nil
}

// NewLightClient creates a new client.
func NewLightClient(cctx sdkclient.Context) (LightClient, error) {
	cl := &lightClient{
		qclient: newQueryClient(cctx),
		node:    newNode(cctx),
	}

	return cl, nil
}

// Tx implements Client by returning the TxClient instance of the client.
func (cl *client) Tx() TxClient {
	return cl.tx
}

// Query implements Client by returning the QueryClient instance of the client.
func (cl *lightClient) Query() QueryClient {
	return cl.qclient
}

// Node implements Client by returning the NodeClient instance of the client.
func (cl *lightClient) Node() NodeClient {
	return cl.node
}

// ClientContext implements Client by returning the Cosmos SDK client context instance of the client.
func (cl *lightClient) ClientContext() sdkclient.Context {
	return cl.qclient.cctx
}

// PrintMessage implements Client by printing the raw message passed as parameter.
func (cl *lightClient) PrintMessage(msg interface{}) error {
	var err error

	switch m := msg.(type) {
	case proto.Message:
		err = cl.qclient.cctx.PrintProto(m)
	case []byte:
		err = cl.qclient.cctx.PrintString(fmt.Sprintf("%s\n", string(m)))
	}

	return err
}
