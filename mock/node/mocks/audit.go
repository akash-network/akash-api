package mocks

import (
	"context"

	query "github.com/cosmos/cosmos-sdk/types/query"
	auditv1 "pkg.akt.dev/go/node/audit/v1"
)

// AuditData represents the mock data for the audit module
type AuditData struct {
	Providers []auditv1.AuditedProvider
}

// MockAuditQueryServer implements the audit query server
type MockAuditQueryServer struct {
	auditv1.UnimplementedQueryServer
	Data AuditData
}

// NewMockAuditQueryServer creates a new mock audit query server
func NewMockAuditQueryServer(data AuditData) *MockAuditQueryServer {
	return &MockAuditQueryServer{
		Data: data,
	}
}

// AllProvidersAttributes implements the AllProvidersAttributes query
func (m MockAuditQueryServer) AllProvidersAttributes(ctx context.Context, req *auditv1.QueryAllProvidersAttributesRequest) (*auditv1.QueryProvidersResponse, error) {
	// Handle pagination
	var start, end int
	if req.Pagination != nil {
		start = int(req.Pagination.Offset)
		if start >= len(m.Data.Providers) {
			start = len(m.Data.Providers)
		}
		end = start + int(req.Pagination.Limit)
		if end > len(m.Data.Providers) {
			end = len(m.Data.Providers)
		}
	} else {
		start = 0
		end = len(m.Data.Providers)
	}

	// Get paginated results
	paginatedResults := m.Data.Providers[start:end]

	// Create pagination response
	pagination := &query.PageResponse{
		Total: uint64(len(m.Data.Providers)),
	}

	return &auditv1.QueryProvidersResponse{
		Providers:  paginatedResults,
		Pagination: pagination,
	}, nil
}

// ProviderAttributes implements the ProviderAttributes query
func (m MockAuditQueryServer) ProviderAttributes(ctx context.Context, req *auditv1.QueryProviderAttributesRequest) (*auditv1.QueryProvidersResponse, error) {
	var filtered []auditv1.AuditedProvider

	// Filter by owner
	for _, p := range m.Data.Providers {
		if p.Owner == req.Owner {
			filtered = append(filtered, p)
		}
	}

	// Handle pagination
	var start, end int
	if req.Pagination != nil {
		start = int(req.Pagination.Offset)
		if start >= len(filtered) {
			start = len(filtered)
		}
		end = start + int(req.Pagination.Limit)
		if end > len(filtered) {
			end = len(filtered)
		}
	} else {
		start = 0
		end = len(filtered)
	}

	// Get paginated results
	paginatedResults := filtered[start:end]

	// Create pagination response
	pagination := &query.PageResponse{
		Total: uint64(len(filtered)),
	}

	return &auditv1.QueryProvidersResponse{
		Providers:  paginatedResults,
		Pagination: pagination,
	}, nil
}

// ProviderAuditorAttributes implements the ProviderAuditorAttributes query
func (m MockAuditQueryServer) ProviderAuditorAttributes(ctx context.Context, req *auditv1.QueryProviderAuditorRequest) (*auditv1.QueryProvidersResponse, error) {
	var filtered []auditv1.AuditedProvider

	// Filter by owner and auditor
	for _, p := range m.Data.Providers {
		if p.Owner == req.Owner && p.Auditor == req.Auditor {
			filtered = append(filtered, p)
		}
	}

	// Create pagination response
	pagination := &query.PageResponse{
		Total: uint64(len(filtered)),
	}

	return &auditv1.QueryProvidersResponse{
		Providers:  filtered,
		Pagination: pagination,
	}, nil
}

// AuditorAttributes implements the AuditorAttributes query
func (m MockAuditQueryServer) AuditorAttributes(ctx context.Context, req *auditv1.QueryAuditorAttributesRequest) (*auditv1.QueryProvidersResponse, error) {
	var filtered []auditv1.AuditedProvider

	// Filter by auditor
	for _, p := range m.Data.Providers {
		if p.Auditor == req.Auditor {
			filtered = append(filtered, p)
		}
	}

	// Handle pagination
	var start, end int
	if req.Pagination != nil {
		start = int(req.Pagination.Offset)
		if start >= len(filtered) {
			start = len(filtered)
		}
		end = start + int(req.Pagination.Limit)
		if end > len(filtered) {
			end = len(filtered)
		}
	} else {
		start = 0
		end = len(filtered)
	}

	// Get paginated results
	paginatedResults := filtered[start:end]

	// Create pagination response
	pagination := &query.PageResponse{
		Total: uint64(len(filtered)),
	}

	return &auditv1.QueryProvidersResponse{
		Providers:  paginatedResults,
		Pagination: pagination,
	}, nil
}
