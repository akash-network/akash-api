package mocks

import (
	"context"

	query "github.com/cosmos/cosmos-sdk/types/query"
	escrowv1 "pkg.akt.dev/go/node/escrow/v1"
	marketv1 "pkg.akt.dev/go/node/market/v1"
	marketv1beta5 "pkg.akt.dev/go/node/market/v1beta5"
)

// MarketData represents the mock data for the market module
type MarketData struct {
	Orders             []marketv1beta5.Order
	Bids               []marketv1beta5.Bid
	Leases             []marketv1.Lease
	Params             marketv1beta5.Params
	EscrowAccounts     map[string]escrowv1.Account
	FractionalPayments map[string]escrowv1.FractionalPayment
}

// MockMarketQueryServer implements the market query server
type MockMarketQueryServer struct {
	marketv1beta5.UnimplementedQueryServer
	Data MarketData
}

// NewMockMarketQueryServer creates a new mock market query server
func NewMockMarketQueryServer(data MarketData) *MockMarketQueryServer {
	return &MockMarketQueryServer{
		Data: data,
	}
}

// Orders implements the Orders query
func (m MockMarketQueryServer) Orders(ctx context.Context, req *marketv1beta5.QueryOrdersRequest) (*marketv1beta5.QueryOrdersResponse, error) {
	filtered := m.Data.Orders
	f := req.Filters

	// Apply filters if any are specified
	if f.Owner != "" || f.DSeq != 0 || f.GSeq != 0 || f.OSeq != 0 || f.State != "" {
		var filteredList []marketv1beta5.Order

		for _, o := range filtered {
			match := true

			// Filter by owner if specified
			if f.Owner != "" && o.ID.Owner != f.Owner {
				match = false
			}

			// Filter by DSeq if specified
			if f.DSeq != 0 && o.ID.DSeq != f.DSeq {
				match = false
			}

			// Filter by GSeq if specified
			if f.GSeq != 0 && o.ID.GSeq != f.GSeq {
				match = false
			}

			// Filter by OSeq if specified
			if f.OSeq != 0 && o.ID.OSeq != f.OSeq {
				match = false
			}

			// Filter by state if specified
			if f.State != "" {
				stateStr := o.State.String()
				if stateStr != f.State {
					match = false
				}
			}

			if match {
				filteredList = append(filteredList, o)
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

	// Create pagination response
	pagination := &query.PageResponse{
		Total: uint64(len(filtered)),
	}

	return &marketv1beta5.QueryOrdersResponse{
		Orders:     paginatedResults,
		Pagination: pagination,
	}, nil
}

// Order implements the Order query
func (m MockMarketQueryServer) Order(ctx context.Context, req *marketv1beta5.QueryOrderRequest) (*marketv1beta5.QueryOrderResponse, error) {
	for _, o := range m.Data.Orders {
		if o.ID.Owner == req.ID.Owner &&
			o.ID.DSeq == req.ID.DSeq &&
			o.ID.GSeq == req.ID.GSeq &&
			o.ID.OSeq == req.ID.OSeq {
			return &marketv1beta5.QueryOrderResponse{
				Order: o,
			}, nil
		}
	}
	return nil, nil
}

// Bids implements the Bids query
func (m MockMarketQueryServer) Bids(ctx context.Context, req *marketv1beta5.QueryBidsRequest) (*marketv1beta5.QueryBidsResponse, error) {
	filtered := m.Data.Bids
	f := req.Filters

	// Apply filters if any are specified
	if f.Owner != "" || f.DSeq != 0 || f.GSeq != 0 || f.OSeq != 0 || f.Provider != "" || f.State != "" {
		var filteredList []marketv1beta5.Bid

		for _, b := range filtered {
			match := true

			// Filter by owner if specified
			if f.Owner != "" && b.ID.Owner != f.Owner {
				match = false
			}

			// Filter by DSeq if specified
			if f.DSeq != 0 && b.ID.DSeq != f.DSeq {
				match = false
			}

			// Filter by GSeq if specified
			if f.GSeq != 0 && b.ID.GSeq != f.GSeq {
				match = false
			}

			// Filter by OSeq if specified
			if f.OSeq != 0 && b.ID.OSeq != f.OSeq {
				match = false
			}

			// Filter by provider if specified
			if f.Provider != "" && b.ID.Provider != f.Provider {
				match = false
			}

			// Filter by state if specified
			if f.State != "" {
				stateStr := b.State.String()
				if stateStr != f.State {
					match = false
				}
			}

			if match {
				filteredList = append(filteredList, b)
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

	// Convert to QueryBidResponse format
	var bidResponses []marketv1beta5.QueryBidResponse
	for _, b := range paginatedResults {
		// Get the escrow account from mock data
		escrowAccount := m.Data.EscrowAccounts[b.ID.String()]

		bidResponses = append(bidResponses, marketv1beta5.QueryBidResponse{
			Bid:           b,
			EscrowAccount: escrowAccount,
		})
	}

	// Create pagination response
	pagination := &query.PageResponse{
		Total: uint64(len(filtered)),
	}

	return &marketv1beta5.QueryBidsResponse{
		Bids:       bidResponses,
		Pagination: pagination,
	}, nil
}

// Bid implements the Bid query
func (m MockMarketQueryServer) Bid(ctx context.Context, req *marketv1beta5.QueryBidRequest) (*marketv1beta5.QueryBidResponse, error) {
	for _, b := range m.Data.Bids {
		if b.ID.Owner == req.ID.Owner &&
			b.ID.DSeq == req.ID.DSeq &&
			b.ID.GSeq == req.ID.GSeq &&
			b.ID.OSeq == req.ID.OSeq &&
			b.ID.Provider == req.ID.Provider {
			// Get the escrow account from mock data
			escrowAccount, ok := m.Data.EscrowAccounts[b.ID.String()]
			if !ok {
				// If no mock data exists, create a default one
				escrowAccount = escrowv1.Account{
					ID: escrowv1.AccountID{
						Scope: "bid",
						XID:   b.ID.String(),
					},
					Owner: b.ID.Owner,
					State: escrowv1.AccountOpen,
				}
			}

			return &marketv1beta5.QueryBidResponse{
				Bid:           b,
				EscrowAccount: escrowAccount,
			}, nil
		}
	}
	return nil, nil
}

// Leases implements the Leases query
func (m MockMarketQueryServer) Leases(ctx context.Context, req *marketv1beta5.QueryLeasesRequest) (*marketv1beta5.QueryLeasesResponse, error) {
	filtered := m.Data.Leases
	f := req.Filters

	// Apply filters if any are specified
	if f.Owner != "" || f.DSeq != 0 || f.GSeq != 0 || f.OSeq != 0 || f.Provider != "" || f.State != "" {
		var filteredList []marketv1.Lease

		for _, l := range filtered {
			match := true

			// Filter by owner if specified
			if f.Owner != "" && l.ID.Owner != f.Owner {
				match = false
			}

			// Filter by DSeq if specified
			if f.DSeq != 0 && l.ID.DSeq != f.DSeq {
				match = false
			}

			// Filter by GSeq if specified
			if f.GSeq != 0 && l.ID.GSeq != f.GSeq {
				match = false
			}

			// Filter by OSeq if specified
			if f.OSeq != 0 && l.ID.OSeq != f.OSeq {
				match = false
			}

			// Filter by provider if specified
			if f.Provider != "" && l.ID.Provider != f.Provider {
				match = false
			}

			// Filter by state if specified
			if f.State != "" {
				stateStr := l.State.String()
				if stateStr != f.State {
					match = false
				}
			}

			if match {
				filteredList = append(filteredList, l)
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

	// Convert to QueryLeaseResponse format
	var leaseResponses []marketv1beta5.QueryLeaseResponse
	for _, l := range paginatedResults {
		// Get the fractional payment from mock data
		escrowPayment, ok := m.Data.FractionalPayments[l.ID.String()]
		leaseResponse := marketv1beta5.QueryLeaseResponse{
			Lease: l,
		}
		if ok {
			leaseResponse.EscrowPayment = escrowPayment
		}
		leaseResponses = append(leaseResponses, leaseResponse)
	}

	// Create pagination response
	pagination := &query.PageResponse{
		Total: uint64(len(filtered)),
	}

	return &marketv1beta5.QueryLeasesResponse{
		Leases:     leaseResponses,
		Pagination: pagination,
	}, nil
}

// Lease implements the Lease query
func (m MockMarketQueryServer) Lease(ctx context.Context, req *marketv1beta5.QueryLeaseRequest) (*marketv1beta5.QueryLeaseResponse, error) {
	for _, l := range m.Data.Leases {
		if l.ID.Owner == req.ID.Owner &&
			l.ID.DSeq == req.ID.DSeq &&
			l.ID.GSeq == req.ID.GSeq &&
			l.ID.OSeq == req.ID.OSeq &&
			l.ID.Provider == req.ID.Provider {
			leaseResponse := marketv1beta5.QueryLeaseResponse{
				Lease: l,
			}
			// Get the fractional payment from mock data if it exists
			if escrowPayment, ok := m.Data.FractionalPayments[l.ID.String()]; ok {
				leaseResponse.EscrowPayment = escrowPayment
			}
			return &leaseResponse, nil
		}
	}
	return nil, nil
}

// Params implements the Params query
func (m MockMarketQueryServer) Params(ctx context.Context, req *marketv1beta5.QueryParamsRequest) (*marketv1beta5.QueryParamsResponse, error) {
	return &marketv1beta5.QueryParamsResponse{
		Params: m.Data.Params,
	}, nil
}
