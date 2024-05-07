package v1beta3

import (
	"context"

	"google.golang.org/grpc"

	sdkclient "github.com/cosmos/cosmos-sdk/client"
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

	atypes "go.akashd.io/sdk/node/audit/v1"
	ctypes "go.akashd.io/sdk/node/cert/v1"
	dtypes "go.akashd.io/sdk/node/deployment/v1beta4"
	mtypes "go.akashd.io/sdk/node/market/v1beta5"
	ptypes "go.akashd.io/sdk/node/provider/v1beta4"
)

var _ QueryClient = (*queryClient)(nil)

type sdkQueryClient struct {
	auth     authtypes.QueryClient
	authz    authz.QueryClient
	bank     banktypes.QueryClient
	distr    disttypes.QueryClient
	evidence evdtypes.QueryClient
	feegrant feegranttypes.QueryClient
	gov      govtypes.QueryClient
	mint     minttypes.QueryClient
	params   paramtypes.QueryClient
	slashing slashtypes.QueryClient
	staking  staketypes.QueryClient
	upgrade  upgradetypes.QueryClient
}

type queryClient struct {
	dclient dtypes.QueryClient
	mclient mtypes.QueryClient
	pclient ptypes.QueryClient
	aclient atypes.QueryClient
	cclient ctypes.QueryClient
	sdk     sdkQueryClient
	cctx    sdkclient.Context
}

// NewQueryClient creates new query client instance based on a Cosmos SDK client context.
func NewQueryClient(cctx sdkclient.Context) QueryClient {
	return newQueryClient(cctx)
}

func newQueryClient(cctx sdkclient.Context) *queryClient {
	return &queryClient{
		dclient: dtypes.NewQueryClient(cctx),
		mclient: mtypes.NewQueryClient(cctx),
		pclient: ptypes.NewQueryClient(cctx),
		aclient: atypes.NewQueryClient(cctx),
		cclient: ctypes.NewQueryClient(cctx),
		sdk: sdkQueryClient{
			auth:     authtypes.NewQueryClient(cctx),
			authz:    authz.NewQueryClient(cctx),
			bank:     banktypes.NewQueryClient(cctx),
			distr:    disttypes.NewQueryClient(cctx),
			evidence: evdtypes.NewQueryClient(cctx),
			feegrant: feegranttypes.NewQueryClient(cctx),
			gov:      govtypes.NewQueryClient(cctx),
			mint:     minttypes.NewQueryClient(cctx),
			params:   paramtypes.NewQueryClient(cctx),
			slashing: slashtypes.NewQueryClient(cctx),
			staking:  staketypes.NewQueryClient(cctx),
			upgrade:  upgradetypes.NewQueryClient(cctx),
		},
		cctx: cctx,
	}
}

// ClientContext returns the client's Cosmos SDK client context.
func (c *queryClient) ClientContext() sdkclient.Context {
	return c.cctx
}

// Deployments queries deployments.
func (c *queryClient) Deployments(ctx context.Context, in *dtypes.QueryDeploymentsRequest, opts ...grpc.CallOption) (*dtypes.QueryDeploymentsResponse, error) {
	if c.dclient == nil {
		return &dtypes.QueryDeploymentsResponse{}, ErrClientNotFound
	}
	return c.dclient.Deployments(ctx, in, opts...)
}

// Deployment queries a deployment.
func (c *queryClient) Deployment(ctx context.Context, in *dtypes.QueryDeploymentRequest, opts ...grpc.CallOption) (*dtypes.QueryDeploymentResponse, error) {
	if c.dclient == nil {
		return &dtypes.QueryDeploymentResponse{}, ErrClientNotFound
	}
	return c.dclient.Deployment(ctx, in, opts...)
}

// Group queries a group.
func (c *queryClient) Group(ctx context.Context, in *dtypes.QueryGroupRequest, opts ...grpc.CallOption) (*dtypes.QueryGroupResponse, error) {
	if c.dclient == nil {
		return &dtypes.QueryGroupResponse{}, ErrClientNotFound
	}
	return c.dclient.Group(ctx, in, opts...)
}

// Orders queries orders.
func (c *queryClient) Orders(ctx context.Context, in *mtypes.QueryOrdersRequest, opts ...grpc.CallOption) (*mtypes.QueryOrdersResponse, error) {
	if c.mclient == nil {
		return &mtypes.QueryOrdersResponse{}, ErrClientNotFound
	}
	return c.mclient.Orders(ctx, in, opts...)
}

// Order queries an order.
func (c *queryClient) Order(ctx context.Context, in *mtypes.QueryOrderRequest, opts ...grpc.CallOption) (*mtypes.QueryOrderResponse, error) {
	if c.mclient == nil {
		return &mtypes.QueryOrderResponse{}, ErrClientNotFound
	}
	return c.mclient.Order(ctx, in, opts...)
}

// Bids queries bids.
func (c *queryClient) Bids(ctx context.Context, in *mtypes.QueryBidsRequest, opts ...grpc.CallOption) (*mtypes.QueryBidsResponse, error) {
	if c.mclient == nil {
		return &mtypes.QueryBidsResponse{}, ErrClientNotFound
	}
	return c.mclient.Bids(ctx, in, opts...)
}

// Bid queries a specific bid.
func (c *queryClient) Bid(ctx context.Context, in *mtypes.QueryBidRequest, opts ...grpc.CallOption) (*mtypes.QueryBidResponse, error) {
	if c.mclient == nil {
		return &mtypes.QueryBidResponse{}, ErrClientNotFound
	}
	return c.mclient.Bid(ctx, in, opts...)
}

// Leases queries leases.
func (c *queryClient) Leases(ctx context.Context, in *mtypes.QueryLeasesRequest, opts ...grpc.CallOption) (*mtypes.QueryLeasesResponse, error) {
	if c.mclient == nil {
		return &mtypes.QueryLeasesResponse{}, ErrClientNotFound
	}
	return c.mclient.Leases(ctx, in, opts...)
}

// Lease queries a lease.
func (c *queryClient) Lease(ctx context.Context, in *mtypes.QueryLeaseRequest, opts ...grpc.CallOption) (*mtypes.QueryLeaseResponse, error) {
	if c.mclient == nil {
		return &mtypes.QueryLeaseResponse{}, ErrClientNotFound
	}
	return c.mclient.Lease(ctx, in, opts...)
}

// Providers queries providers.
func (c *queryClient) Providers(ctx context.Context, in *ptypes.QueryProvidersRequest, opts ...grpc.CallOption) (*ptypes.QueryProvidersResponse, error) {
	if c.pclient == nil {
		return &ptypes.QueryProvidersResponse{}, ErrClientNotFound
	}
	return c.pclient.Providers(ctx, in, opts...)
}

// Provider queries a provider.
func (c *queryClient) Provider(ctx context.Context, in *ptypes.QueryProviderRequest, opts ...grpc.CallOption) (*ptypes.QueryProviderResponse, error) {
	if c.pclient == nil {
		return &ptypes.QueryProviderResponse{}, ErrClientNotFound
	}
	return c.pclient.Provider(ctx, in, opts...)
}

// AllProvidersAttributes queries all providers.
func (c *queryClient) AllProvidersAttributes(ctx context.Context, in *atypes.QueryAllProvidersAttributesRequest, opts ...grpc.CallOption) (*atypes.QueryProvidersResponse, error) {
	if c.pclient == nil {
		return &atypes.QueryProvidersResponse{}, ErrClientNotFound
	}
	return c.aclient.AllProvidersAttributes(ctx, in, opts...)
}

// ProviderAttributes queries all provider signed attributes.
func (c *queryClient) ProviderAttributes(ctx context.Context, in *atypes.QueryProviderAttributesRequest, opts ...grpc.CallOption) (*atypes.QueryProvidersResponse, error) {
	if c.pclient == nil {
		return &atypes.QueryProvidersResponse{}, ErrClientNotFound
	}
	return c.aclient.ProviderAttributes(ctx, in, opts...)
}

// ProviderAuditorAttributes queries provider signed attributes by specific validator.
func (c *queryClient) ProviderAuditorAttributes(ctx context.Context, in *atypes.QueryProviderAuditorRequest, opts ...grpc.CallOption) (*atypes.QueryProvidersResponse, error) {
	if c.pclient == nil {
		return &atypes.QueryProvidersResponse{}, ErrClientNotFound
	}
	return c.aclient.ProviderAuditorAttributes(ctx, in, opts...)
}

// AuditorAttributes queries all providers signed by this validator.
func (c *queryClient) AuditorAttributes(ctx context.Context, in *atypes.QueryAuditorAttributesRequest, opts ...grpc.CallOption) (*atypes.QueryProvidersResponse, error) {
	if c.aclient == nil {
		return &atypes.QueryProvidersResponse{}, ErrClientNotFound
	}
	return c.aclient.AuditorAttributes(ctx, in, opts...)
}

// Certificates queries certificates.
func (c *queryClient) Certificates(ctx context.Context, in *ctypes.QueryCertificatesRequest, opts ...grpc.CallOption) (*ctypes.QueryCertificatesResponse, error) {
	if c.cclient == nil {
		return &ctypes.QueryCertificatesResponse{}, ErrClientNotFound
	}
	return c.cclient.Certificates(ctx, in, opts...)
}

// Auth implements QueryClient by returning the auth Cosmos SDK query client.
func (c *queryClient) Auth() authtypes.QueryClient {
	return c.sdk.auth
}

// Authz implements QueryClient by returning the authz Cosmos SDK query client.
func (c *queryClient) Authz() authz.QueryClient {
	return c.sdk.authz
}

// Bank implements QueryClient by returning the bank Cosmos SDK query client.
func (c *queryClient) Bank() banktypes.QueryClient {
	return c.sdk.bank
}

// Distribution implements QueryClient by returning the distribution Cosmos SDK query client.
func (c *queryClient) Distribution() disttypes.QueryClient {
	return c.sdk.distr
}

// Evidence implements QueryClient by returning the evidence Cosmos SDK query client.
func (c *queryClient) Evidence() evdtypes.QueryClient {
	return c.sdk.evidence
}

// Feegrant implements QueryClient by returning the feegrant Cosmos SDK query client.
func (c *queryClient) Feegrant() feegranttypes.QueryClient {
	return c.sdk.feegrant
}

// Gov implements QueryClient by returning the governance Cosmos SDK query client.
func (c *queryClient) Gov() govtypes.QueryClient {
	return c.sdk.gov
}

// Mint implements QueryClient by returning the mint Cosmos SDK query client.
func (c *queryClient) Mint() minttypes.QueryClient {
	return c.sdk.mint
}

// Params implements QueryClient by returning the params Cosmos SDK query client.
func (c *queryClient) Params() paramtypes.QueryClient {
	return c.sdk.params
}

// Slashing implements QueryClient by returning the slashing Cosmos SDK query client.
func (c *queryClient) Slashing() slashtypes.QueryClient {
	return c.sdk.slashing
}

// Staking implements QueryClient by returning the staking Cosmos SDK query client.
func (c *queryClient) Staking() staketypes.QueryClient {
	return c.sdk.staking
}

// Upgrade implements QueryClient by returning the upgrade Cosmos SDK query client.
func (c *queryClient) Upgrade() upgradetypes.QueryClient {
	return c.sdk.upgrade
}
