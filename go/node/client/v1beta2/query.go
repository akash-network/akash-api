package v1beta2

import (
	"context"

	"google.golang.org/grpc"

	sdkclient "github.com/cosmos/cosmos-sdk/client"

	atypes "github.com/akash-network/akash-api/go/node/audit/v1beta3"
	ctypes "github.com/akash-network/akash-api/go/node/cert/v1beta3"
	dtypes "github.com/akash-network/akash-api/go/node/deployment/v1beta3"
	mtypes "github.com/akash-network/akash-api/go/node/market/v1beta4"
	ptypes "github.com/akash-network/akash-api/go/node/provider/v1beta3"
)

type queryClient struct {
	dclient dtypes.QueryClient
	mclient mtypes.QueryClient
	pclient ptypes.QueryClient
	aclient atypes.QueryClient
	cclient ctypes.QueryClient
	cctx    sdkclient.Context
}

// NewQueryClient creates new query client instance
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
		cctx:    cctx,
	}
}

func (c *queryClient) ClientContext() sdkclient.Context {
	return c.cctx
}

func (c *queryClient) Deployments(ctx context.Context, in *dtypes.QueryDeploymentsRequest, opts ...grpc.CallOption) (*dtypes.QueryDeploymentsResponse, error) {
	if c.dclient == nil {
		return &dtypes.QueryDeploymentsResponse{}, ErrClientNotFound
	}
	return c.dclient.Deployments(ctx, in, opts...)
}

func (c *queryClient) Deployment(ctx context.Context, in *dtypes.QueryDeploymentRequest, opts ...grpc.CallOption) (*dtypes.QueryDeploymentResponse, error) {
	if c.dclient == nil {
		return &dtypes.QueryDeploymentResponse{}, ErrClientNotFound
	}
	return c.dclient.Deployment(ctx, in, opts...)
}

func (c *queryClient) Group(ctx context.Context, in *dtypes.QueryGroupRequest, opts ...grpc.CallOption) (*dtypes.QueryGroupResponse, error) {
	if c.dclient == nil {
		return &dtypes.QueryGroupResponse{}, ErrClientNotFound
	}
	return c.dclient.Group(ctx, in, opts...)
}

func (c *queryClient) Orders(ctx context.Context, in *mtypes.QueryOrdersRequest, opts ...grpc.CallOption) (*mtypes.QueryOrdersResponse, error) {
	if c.mclient == nil {
		return &mtypes.QueryOrdersResponse{}, ErrClientNotFound
	}
	return c.mclient.Orders(ctx, in, opts...)
}

func (c *queryClient) Order(ctx context.Context, in *mtypes.QueryOrderRequest, opts ...grpc.CallOption) (*mtypes.QueryOrderResponse, error) {
	if c.mclient == nil {
		return &mtypes.QueryOrderResponse{}, ErrClientNotFound
	}
	return c.mclient.Order(ctx, in, opts...)
}

func (c *queryClient) Bids(ctx context.Context, in *mtypes.QueryBidsRequest, opts ...grpc.CallOption) (*mtypes.QueryBidsResponse, error) {
	if c.mclient == nil {
		return &mtypes.QueryBidsResponse{}, ErrClientNotFound
	}
	return c.mclient.Bids(ctx, in, opts...)
}

func (c *queryClient) Bid(ctx context.Context, in *mtypes.QueryBidRequest, opts ...grpc.CallOption) (*mtypes.QueryBidResponse, error) {
	if c.mclient == nil {
		return &mtypes.QueryBidResponse{}, ErrClientNotFound
	}
	return c.mclient.Bid(ctx, in, opts...)
}

func (c *queryClient) Leases(ctx context.Context, in *mtypes.QueryLeasesRequest, opts ...grpc.CallOption) (*mtypes.QueryLeasesResponse, error) {
	if c.mclient == nil {
		return &mtypes.QueryLeasesResponse{}, ErrClientNotFound
	}
	return c.mclient.Leases(ctx, in, opts...)
}

func (c *queryClient) Lease(ctx context.Context, in *mtypes.QueryLeaseRequest, opts ...grpc.CallOption) (*mtypes.QueryLeaseResponse, error) {
	if c.mclient == nil {
		return &mtypes.QueryLeaseResponse{}, ErrClientNotFound
	}
	return c.mclient.Lease(ctx, in, opts...)
}

func (c *queryClient) Providers(ctx context.Context, in *ptypes.QueryProvidersRequest, opts ...grpc.CallOption) (*ptypes.QueryProvidersResponse, error) {
	if c.pclient == nil {
		return &ptypes.QueryProvidersResponse{}, ErrClientNotFound
	}
	return c.pclient.Providers(ctx, in, opts...)
}

func (c *queryClient) Provider(ctx context.Context, in *ptypes.QueryProviderRequest, opts ...grpc.CallOption) (*ptypes.QueryProviderResponse, error) {
	if c.pclient == nil {
		return &ptypes.QueryProviderResponse{}, ErrClientNotFound
	}
	return c.pclient.Provider(ctx, in, opts...)
}

// AllProvidersAttributes queries all providers
func (c *queryClient) AllProvidersAttributes(ctx context.Context, in *atypes.QueryAllProvidersAttributesRequest, opts ...grpc.CallOption) (*atypes.QueryProvidersResponse, error) {
	if c.pclient == nil {
		return &atypes.QueryProvidersResponse{}, ErrClientNotFound
	}
	return c.aclient.AllProvidersAttributes(ctx, in, opts...)
}

// ProviderAttributes queries all provider signed attributes
func (c *queryClient) ProviderAttributes(ctx context.Context, in *atypes.QueryProviderAttributesRequest, opts ...grpc.CallOption) (*atypes.QueryProvidersResponse, error) {
	if c.pclient == nil {
		return &atypes.QueryProvidersResponse{}, ErrClientNotFound
	}
	return c.aclient.ProviderAttributes(ctx, in, opts...)
}

// ProviderAuditorAttributes queries provider signed attributes by specific validator
func (c *queryClient) ProviderAuditorAttributes(ctx context.Context, in *atypes.QueryProviderAuditorRequest, opts ...grpc.CallOption) (*atypes.QueryProvidersResponse, error) {
	if c.pclient == nil {
		return &atypes.QueryProvidersResponse{}, ErrClientNotFound
	}
	return c.aclient.ProviderAuditorAttributes(ctx, in, opts...)
}

// AuditorAttributes queries all providers signed by this validator
func (c *queryClient) AuditorAttributes(ctx context.Context, in *atypes.QueryAuditorAttributesRequest, opts ...grpc.CallOption) (*atypes.QueryProvidersResponse, error) {
	if c.aclient == nil {
		return &atypes.QueryProvidersResponse{}, ErrClientNotFound
	}
	return c.aclient.AuditorAttributes(ctx, in, opts...)
}

func (c *queryClient) Certificates(ctx context.Context, in *ctypes.QueryCertificatesRequest, opts ...grpc.CallOption) (*ctypes.QueryCertificatesResponse, error) {
	if c.cclient == nil {
		return &ctypes.QueryCertificatesResponse{}, ErrClientNotFound
	}
	return c.cclient.Certificates(ctx, in, opts...)
}
