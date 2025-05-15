package mocks

import (
	"context"
	"fmt"

	providerv1beta4 "pkg.akt.dev/go/node/provider/v1beta4"
)

// MockProviderQueryServer implements the provider query server
type MockProviderQueryServer struct {
	providerv1beta4.UnimplementedQueryServer
	Data []providerv1beta4.Provider
}

// NewMockProviderQueryServer creates a new mock provider query server
func NewMockProviderQueryServer(data []providerv1beta4.Provider) *MockProviderQueryServer {
	return &MockProviderQueryServer{
		Data: data,
	}
}

// Providers implements the Providers query
func (m MockProviderQueryServer) Providers(ctx context.Context, req *providerv1beta4.QueryProvidersRequest) (*providerv1beta4.QueryProvidersResponse, error) {
	return &providerv1beta4.QueryProvidersResponse{
		Providers: m.Data,
	}, nil
}

// Provider implements the Provider query
func (m MockProviderQueryServer) Provider(ctx context.Context, req *providerv1beta4.QueryProviderRequest) (*providerv1beta4.QueryProviderResponse, error) {
	for _, provider := range m.Data {
		if provider.Owner == req.Owner {
			return &providerv1beta4.QueryProviderResponse{
				Provider: provider,
			}, nil
		}
	}

	return nil, fmt.Errorf("provider not found")
}
