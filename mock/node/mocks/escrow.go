package mocks

import (
	"context"

	escrowv1 "pkg.akt.dev/go/node/escrow/v1"
)

// EscrowData holds the escrow data
type EscrowData struct {
	Accounts []escrowv1.Account
	Payments []escrowv1.FractionalPayment
}

// MockEscrowQueryServer implements the escrow query server
type MockEscrowQueryServer struct {
	escrowv1.UnimplementedQueryServer
	Data EscrowData
}

// NewMockEscrowQueryServer creates a new mock escrow query server
func NewMockEscrowQueryServer(data EscrowData) *MockEscrowQueryServer {
	return &MockEscrowQueryServer{
		Data: data,
	}
}

// Accounts implements the Accounts query
func (m MockEscrowQueryServer) Accounts(ctx context.Context, req *escrowv1.QueryAccountsRequest) (*escrowv1.QueryAccountsResponse, error) {
	accounts := m.Data.Accounts

	// Filter by owner if specified
	if req.Owner != "" {
		var filtered []escrowv1.Account
		for _, a := range accounts {
			if a.ID.XID == req.Owner {
				filtered = append(filtered, a)
			}
		}
		accounts = filtered
	}

	return &escrowv1.QueryAccountsResponse{
		Accounts: accounts,
	}, nil
}

// Payments implements the Payments query
func (m MockEscrowQueryServer) Payments(ctx context.Context, req *escrowv1.QueryPaymentsRequest) (*escrowv1.QueryPaymentsResponse, error) {
	payments := m.Data.Payments

	// Filter by owner if specified
	if req.Owner != "" {
		var filtered []escrowv1.FractionalPayment
		for _, p := range payments {
			if p.Owner == req.Owner {
				filtered = append(filtered, p)
			}
		}
		payments = filtered
	}

	return &escrowv1.QueryPaymentsResponse{
		Payments: payments,
	}, nil
}
