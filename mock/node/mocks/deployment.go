package mocks

import (
	"context"
	"fmt"

	deploymentv1beta4 "pkg.akt.dev/go/node/deployment/v1beta4"
)

// MockDeploymentQueryServer implements the deployment query server
type MockDeploymentQueryServer struct {
	deploymentv1beta4.UnimplementedQueryServer
	Data []deploymentv1beta4.QueryDeploymentResponse
}

// NewMockDeploymentQueryServer creates a new mock deployment query server
func NewMockDeploymentQueryServer(data []deploymentv1beta4.QueryDeploymentResponse) *MockDeploymentQueryServer {
	return &MockDeploymentQueryServer{
		Data: data,
	}
}

// Deployment implements the Deployment query
func (m MockDeploymentQueryServer) Deployment(ctx context.Context, req *deploymentv1beta4.QueryDeploymentRequest) (*deploymentv1beta4.QueryDeploymentResponse, error) {
	for _, resp := range m.Data {
		if resp.Deployment.ID.Owner == req.ID.Owner && resp.Deployment.ID.DSeq == req.ID.DSeq {
			return &resp, nil
		}
	}

	return nil, fmt.Errorf("deployment not found")
}

// Deployments implements the Deployments query
func (m MockDeploymentQueryServer) Deployments(ctx context.Context, req *deploymentv1beta4.QueryDeploymentsRequest) (*deploymentv1beta4.QueryDeploymentsResponse, error) {
	filtered := m.Data
	if req.Filters.Owner != "" {
		var filteredByOwner []deploymentv1beta4.QueryDeploymentResponse
		for _, resp := range filtered {
			if resp.Deployment.ID.Owner == req.Filters.Owner {
				filteredByOwner = append(filteredByOwner, resp)
			}
		}
		filtered = filteredByOwner
	}

	return &deploymentv1beta4.QueryDeploymentsResponse{
		Deployments: filtered,
	}, nil
}

// Group implements the Group query
func (m MockDeploymentQueryServer) Group(ctx context.Context, req *deploymentv1beta4.QueryGroupRequest) (*deploymentv1beta4.QueryGroupResponse, error) {
	for _, resp := range m.Data {
		for _, group := range resp.Groups {
			if group.ID.Owner == req.ID.Owner &&
				group.ID.DSeq == req.ID.DSeq &&
				group.ID.GSeq == req.ID.GSeq {
				return &deploymentv1beta4.QueryGroupResponse{
					Group: group,
				}, nil
			}
		}
	}

	return nil, fmt.Errorf("group not found")
}

// Params implements the Params query
func (m MockDeploymentQueryServer) Params(ctx context.Context, req *deploymentv1beta4.QueryParamsRequest) (*deploymentv1beta4.QueryParamsResponse, error) {
	return &deploymentv1beta4.QueryParamsResponse{
		Params: deploymentv1beta4.Params{
			MinDeposits: nil, // Empty list of minimum deposits
		},
	}, nil
}
