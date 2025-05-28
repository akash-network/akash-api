package mocks

import (
	"context"

	takev1 "pkg.akt.dev/go/node/take/v1"
)

// TakeData represents the mock data for the take module
type TakeData struct {
	Params takev1.Params
}

// MockTakeQueryServer implements the take query server
type MockTakeQueryServer struct {
	takev1.UnimplementedQueryServer
	Data TakeData
}

// NewMockTakeQueryServer creates a new mock take query server
func NewMockTakeQueryServer(data TakeData) *MockTakeQueryServer {
	return &MockTakeQueryServer{
		Data: data,
	}
}

// Params implements the Params query
func (m MockTakeQueryServer) Params(ctx context.Context, req *takev1.QueryParamsRequest) (*takev1.QueryParamsResponse, error) {
	return &takev1.QueryParamsResponse{
		Params: m.Data.Params,
	}, nil
}
