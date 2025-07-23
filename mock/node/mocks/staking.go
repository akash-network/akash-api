package mocks

import (
	"context"

	stakingv1beta3 "pkg.akt.dev/go/node/staking/v1beta3"
)

// StakingData represents the mock data for the staking module
type StakingData struct {
	Params stakingv1beta3.Params
}

// MockStakingQueryServer implements the staking query server
type MockStakingQueryServer struct {
	stakingv1beta3.UnimplementedQueryServer
	Data StakingData
}

// NewMockStakingQueryServer creates a new mock staking query server
func NewMockStakingQueryServer(data StakingData) *MockStakingQueryServer {
	return &MockStakingQueryServer{
		Data: data,
	}
}

// Params implements the Params query
func (m MockStakingQueryServer) Params(ctx context.Context, req *stakingv1beta3.QueryParamsRequest) (*stakingv1beta3.QueryParamsResponse, error) {
	return &stakingv1beta3.QueryParamsResponse{
		Params: m.Data.Params,
	}, nil
}
