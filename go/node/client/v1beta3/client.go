package v1beta3

import (
	"bytes"
	"context"
	"encoding/json"
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
	v1 "github.com/cosmos/cosmos-sdk/x/gov/types/v1"
	govtypes "github.com/cosmos/cosmos-sdk/x/gov/types/v1beta1"
	minttypes "github.com/cosmos/cosmos-sdk/x/mint/types"
	paramstypes "github.com/cosmos/cosmos-sdk/x/params/types/proposal"
	slashtypes "github.com/cosmos/cosmos-sdk/x/slashing/types"
	staketypes "github.com/cosmos/cosmos-sdk/x/staking/types"
	upgradetypes "github.com/cosmos/cosmos-sdk/x/upgrade/types"

	atypes "pkg.akt.dev/go/node/audit/v1"
	ctypes "pkg.akt.dev/go/node/cert/v1"
	cltypes "pkg.akt.dev/go/node/client/types"
	dtypes "pkg.akt.dev/go/node/deployment/v1beta4"
	mtypes "pkg.akt.dev/go/node/market/v1beta5"
	ptypes "pkg.akt.dev/go/node/provider/v1beta4"
)

// QueryClient is the interface that exposes query modules.
type QueryClient interface {
	Deployment() dtypes.QueryClient
	Market() mtypes.QueryClient
	Provider() ptypes.QueryClient
	Audit() atypes.QueryClient
	Certs() ctypes.QueryClient
	Auth() authtypes.QueryClient
	Authz() authz.QueryClient
	Bank() banktypes.QueryClient
	Distribution() disttypes.QueryClient
	Evidence() evdtypes.QueryClient
	Feegrant() feegranttypes.QueryClient
	GovLegacy() govtypes.QueryClient
	Gov() v1.QueryClient
	Mint() minttypes.QueryClient
	Slashing() slashtypes.QueryClient
	Staking() staketypes.QueryClient
	Upgrade() upgradetypes.QueryClient
	Params() paramstypes.QueryClient

	ClientContext() sdkclient.Context
}

// TxClient is the interface that wraps the Broadcast method.
// Broadcast broadcasts a transaction. A transaction is composed of 1 or many messages. This allows several
// operations to be performed in a single transaction.
// A transaction broadcast can be configured with an arbitrary number of BroadcastOption.
type TxClient interface {
	BroadcastMsgs(context.Context, []sdk.Msg, ...BroadcastOption) (interface{}, error)
	BroadcastTx(context.Context, sdk.Tx, ...BroadcastOption) (interface{}, error)
}

type NodeClient interface {
	SyncInfo(context.Context) (*tmrpc.SyncInfo, error)
	CurrentBlockHeight(context.Context) (int64, error)
}

// LightClient is the umbrella interface that exposes every other client's modules.
type LightClient interface {
	Query() QueryClient
	Node() NodeClient
	ClientContext() sdkclient.Context
	PrintMessage(interface{}) error
	PrintJSON(msg interface{}) error
}

// Client is the umbrella interface that exposes every other client's modules.
type Client interface {
	LightClient
	Tx() TxClient
}

type lightClient struct {
	qclient *queryClient
	node    *node
}

type client struct {
	lightClient
	tx TxClient
}

var (
	_ Client      = (*client)(nil)
	_ LightClient = (*lightClient)(nil)
)

// NewClient creates a new client.
func NewClient(ctx context.Context, cctx sdkclient.Context, opts ...cltypes.ClientOption) (Client, error) {
	nd := newNode(cctx)
	tcl, cctx, err := newSerialTx(ctx, cctx, nd, opts...)
	if err != nil {
		return nil, err
	}

	cl := &client{
		lightClient: lightClient{
			qclient: newQueryClient(cctx),
			node:    nd,
		},
		tx: tcl,
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
	default:
		err = cl.qclient.cctx.PrintObjectLegacy(m)
	}

	return err
}

func (cl *lightClient) PrintJSON(msg interface{}) error {
	marshaled, err := json.Marshal(msg)
	if err != nil {
		return err
	}

	buf := &bytes.Buffer{}
	err = json.Indent(buf, marshaled, "", "  ")
	if err != nil {
		return err
	}

	// Add a newline, for printing in the terminal
	_, err = buf.WriteRune('\n')
	if err != nil {
		return err
	}

	return cl.qclient.cctx.PrintString(buf.String())
}
