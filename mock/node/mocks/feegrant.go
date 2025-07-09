package mocks

import (
	"context"

	feegrantv1beta1 "github.com/cosmos/cosmos-sdk/x/feegrant"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

// FeegrantData holds the feegrant data loaded from JSON
type FeegrantData struct {
	Allowances []feegrantv1beta1.Grant
}

// MockFeegrantQueryServer implements the feegrant query server
type MockFeegrantQueryServer struct {
	feegrantv1beta1.UnimplementedQueryServer
	data FeegrantData
}

// NewMockFeegrantQueryServer creates a new mock feegrant query server
func NewMockFeegrantQueryServer(data FeegrantData) *MockFeegrantQueryServer {
	return &MockFeegrantQueryServer{
		data: data,
	}
}

// Allowance implements the Allowance query
func (s *MockFeegrantQueryServer) Allowance(ctx context.Context, req *feegrantv1beta1.QueryAllowanceRequest) (*feegrantv1beta1.QueryAllowanceResponse, error) {
	for _, grant := range s.data.Allowances {
		if grant.Granter == req.Granter && grant.Grantee == req.Grantee {
			return &feegrantv1beta1.QueryAllowanceResponse{
				Allowance: &grant,
			}, nil
		}
	}
	return nil, status.Error(codes.NotFound, "fee grant not found")
}

// Allowances implements the Allowances query
func (s *MockFeegrantQueryServer) Allowances(ctx context.Context, req *feegrantv1beta1.QueryAllowancesRequest) (*feegrantv1beta1.QueryAllowancesResponse, error) {
	var grants []*feegrantv1beta1.Grant
	for _, grant := range s.data.Allowances {
		if grant.Grantee == req.Grantee {
			grants = append(grants, &grant)
		}
	}
	return &feegrantv1beta1.QueryAllowancesResponse{
		Allowances: grants,
	}, nil
}

// AllowancesByGranter implements the AllowancesByGranter query
func (s *MockFeegrantQueryServer) AllowancesByGranter(ctx context.Context, req *feegrantv1beta1.QueryAllowancesByGranterRequest) (*feegrantv1beta1.QueryAllowancesByGranterResponse, error) {
	var grants []*feegrantv1beta1.Grant
	for _, grant := range s.data.Allowances {
		if grant.Granter == req.Granter {
			grants = append(grants, &grant)
		}
	}
	return &feegrantv1beta1.QueryAllowancesByGranterResponse{
		Allowances: grants,
	}, nil
}
