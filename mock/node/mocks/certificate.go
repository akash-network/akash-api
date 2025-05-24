package mocks

import (
	"context"

	query "github.com/cosmos/cosmos-sdk/types/query"
	certv1 "pkg.akt.dev/go/node/cert/v1"
)

// CertificateData represents a certificate entry in the mock data
type CertificateData struct {
	Certificate certv1.Certificate `json:"certificate"`
	Serial      string             `json:"serial"`
}

// MockCertificateQueryServer implements the certificate query server
type MockCertificateQueryServer struct {
	certv1.UnimplementedQueryServer
	Data []CertificateData
}

// NewMockCertificateQueryServer creates a new mock certificate query server
func NewMockCertificateQueryServer(data []CertificateData) *MockCertificateQueryServer {
	return &MockCertificateQueryServer{
		Data: data,
	}
}

// Certificates implements the Certificates query
func (m MockCertificateQueryServer) Certificates(ctx context.Context, req *certv1.QueryCertificatesRequest) (*certv1.QueryCertificatesResponse, error) {
	filtered := m.Data
	f := req.Filter

	// Apply filters if any are specified
	if f.Owner != "" || f.Serial != "" || f.State != "" {
		var filteredList []CertificateData

		for _, c := range filtered {
			match := true

			// Filter by owner if specified
			if f.Owner != "" {
				// Note: In a real implementation, we would need to extract the owner from the certificate
				// For now, we'll skip this filter since we don't have owner information in our mock data
				match = false
			}

			// Filter by serial if specified
			if f.Serial != "" && c.Serial != f.Serial {
				match = false
			}

			// Filter by state if specified
			if f.State != "" {
				stateStr := c.Certificate.GetState().String()
				if stateStr != f.State {
					match = false
				}
			}

			if match {
				filteredList = append(filteredList, c)
			}
		}
		filtered = filteredList
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

	// Convert to CertificateResponse format
	var certResponses certv1.CertificatesResponse
	for _, c := range paginatedResults {
		certResponses = append(certResponses, certv1.CertificateResponse{
			Certificate: c.Certificate,
			Serial:      c.Serial,
		})
	}

	// Create pagination response
	pagination := &query.PageResponse{
		Total: uint64(len(filtered)),
	}

	return &certv1.QueryCertificatesResponse{
		Certificates: certResponses,
		Pagination:   pagination,
	}, nil
}
