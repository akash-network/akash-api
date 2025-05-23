package mocks

import (
	"context"

	authzv1beta1 "github.com/cosmos/cosmos-sdk/x/authz"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

// AuthzData holds the authz data loaded from JSON
type AuthzData struct {
	Grants        []authzv1beta1.GrantAuthorization         `json:"grants"`
	GranterGrants []authzv1beta1.QueryGranterGrantsResponse `json:"granter_grants"`
	GranteeGrants []authzv1beta1.QueryGranteeGrantsResponse `json:"grantee_grants"`
}

// MockAuthzQueryServer implements the authz QueryServer interface
type MockAuthzQueryServer struct {
	authzv1beta1.UnimplementedQueryServer
	data AuthzData
}

// NewMockAuthzQueryServer creates a new MockAuthzQueryServer
func NewMockAuthzQueryServer(data AuthzData) *MockAuthzQueryServer {
	return &MockAuthzQueryServer{
		data: data,
	}
}

// Grants implements the authz QueryServer interface
func (s *MockAuthzQueryServer) Grants(ctx context.Context, req *authzv1beta1.QueryGrantsRequest) (*authzv1beta1.QueryGrantsResponse, error) {
	var grants []*authzv1beta1.Grant
	for _, grant := range s.data.Grants {
		if grant.Granter == req.Granter && grant.Grantee == req.Grantee {
			if req.MsgTypeUrl == "" || grant.Authorization.TypeUrl == req.MsgTypeUrl {
				grants = append(grants, &authzv1beta1.Grant{
					Authorization: grant.Authorization,
					Expiration:    grant.Expiration,
				})
			}
		}
	}
	return &authzv1beta1.QueryGrantsResponse{
		Grants: grants,
	}, nil
}

// GranterGrants implements the authz QueryServer interface
func (s *MockAuthzQueryServer) GranterGrants(ctx context.Context, req *authzv1beta1.QueryGranterGrantsRequest) (*authzv1beta1.QueryGranterGrantsResponse, error) {
	for _, granterGrant := range s.data.GranterGrants {
		if granterGrant.Grants[0].Granter == req.Granter {
			return &granterGrant, nil
		}
	}
	return nil, status.Error(codes.NotFound, "granter grants not found")
}

// GranteeGrants implements the authz QueryServer interface
func (s *MockAuthzQueryServer) GranteeGrants(ctx context.Context, req *authzv1beta1.QueryGranteeGrantsRequest) (*authzv1beta1.QueryGranteeGrantsResponse, error) {
	for _, granteeGrant := range s.data.GranteeGrants {
		if granteeGrant.Grants[0].Grantee == req.Grantee {
			return &granteeGrant, nil
		}
	}
	return nil, status.Error(codes.NotFound, "grantee grants not found")
}
