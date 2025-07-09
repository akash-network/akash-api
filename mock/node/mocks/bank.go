package mocks

import (
	"context"
	"fmt"

	"cosmossdk.io/math"
	sdk "github.com/cosmos/cosmos-sdk/types"
	bankv1beta1 "github.com/cosmos/cosmos-sdk/x/bank/types"
)

// BankData holds the mock data for the bank module
type BankData struct {
	Balance                 bankv1beta1.QueryBalanceResponse                 `json:"balance"`
	AllBalances             bankv1beta1.QueryAllBalancesResponse             `json:"all_balances"`
	SpendableBalances       bankv1beta1.QuerySpendableBalancesResponse       `json:"spendable_balances"`
	SpendableBalanceByDenom bankv1beta1.QuerySpendableBalanceByDenomResponse `json:"spendable_balance_by_denom"`
	TotalSupply             bankv1beta1.QueryTotalSupplyResponse             `json:"total_supply"`
	SupplyOf                bankv1beta1.QuerySupplyOfResponse                `json:"supply_of"`
	Params                  bankv1beta1.QueryParamsResponse                  `json:"params"`
	DenomMetadata           bankv1beta1.QueryDenomMetadataResponse           `json:"denom_metadata"`
	DenomsMetadata          bankv1beta1.QueryDenomsMetadataResponse          `json:"denoms_metadata"`
	DenomOwners             bankv1beta1.QueryDenomOwnersResponse             `json:"denom_owners"`
	SendEnabled             bankv1beta1.QuerySendEnabledResponse             `json:"send_enabled"`
}

// MockBankQueryServer implements the bank QueryServer interface
type MockBankQueryServer struct {
	bankv1beta1.UnimplementedQueryServer
	data BankData
}

// NewMockBankQueryServer creates a new mock bank query server
func NewMockBankQueryServer(data BankData) *MockBankQueryServer {
	return &MockBankQueryServer{data: data}
}

// Balance implements the bank QueryServer interface
func (s *MockBankQueryServer) Balance(ctx context.Context, req *bankv1beta1.QueryBalanceRequest) (*bankv1beta1.QueryBalanceResponse, error) {
	return &s.data.Balance, nil
}

// AllBalances implements the bank QueryServer interface
func (s *MockBankQueryServer) AllBalances(ctx context.Context, req *bankv1beta1.QueryAllBalancesRequest) (*bankv1beta1.QueryAllBalancesResponse, error) {
	fmt.Printf("AllBalances called with address: %s\n", req.Address)
	fmt.Printf("Mock data: %+v\n", s.data.AllBalances)
	// Check if the requested address matches our mock data
	if req.Address == "akash1skjwj5whet0lpe65qaq4rpq03hjxlwd9nf39lk" {
		return &s.data.AllBalances, nil
	}
	// Return empty response for other addresses
	return &bankv1beta1.QueryAllBalancesResponse{
		Balances:   sdk.Coins{},
		Pagination: nil,
	}, nil
}

// SpendableBalances implements the bank QueryServer interface
func (s *MockBankQueryServer) SpendableBalances(ctx context.Context, req *bankv1beta1.QuerySpendableBalancesRequest) (*bankv1beta1.QuerySpendableBalancesResponse, error) {
	// Check if the requested address matches our mock data
	if req.Address == "akash1skjwj5whet0lpe65qaq4rpq03hjxlwd9nf39lk" {
		return &s.data.SpendableBalances, nil
	}
	// Return empty response for other addresses
	return &bankv1beta1.QuerySpendableBalancesResponse{
		Balances:   sdk.Coins{},
		Pagination: nil,
	}, nil
}

// SpendableBalanceByDenom implements the bank QueryServer interface
func (s *MockBankQueryServer) SpendableBalanceByDenom(ctx context.Context, req *bankv1beta1.QuerySpendableBalanceByDenomRequest) (*bankv1beta1.QuerySpendableBalanceByDenomResponse, error) {
	// Check if the requested address matches our mock data
	if req.Address == "akash1skjwj5whet0lpe65qaq4rpq03hjxlwd9nf39lk" {
		return &s.data.SpendableBalanceByDenom, nil
	}
	// Return empty response for other addresses
	return &bankv1beta1.QuerySpendableBalanceByDenomResponse{
		Balance: &sdk.Coin{
			Denom:  req.Denom,
			Amount: math.NewInt(0),
		},
	}, nil
}

// TotalSupply implements the bank QueryServer interface
func (s *MockBankQueryServer) TotalSupply(ctx context.Context, req *bankv1beta1.QueryTotalSupplyRequest) (*bankv1beta1.QueryTotalSupplyResponse, error) {
	return &s.data.TotalSupply, nil
}

// SupplyOf implements the bank QueryServer interface
func (s *MockBankQueryServer) SupplyOf(ctx context.Context, req *bankv1beta1.QuerySupplyOfRequest) (*bankv1beta1.QuerySupplyOfResponse, error) {
	return &s.data.SupplyOf, nil
}

// Params implements the bank QueryServer interface
func (s *MockBankQueryServer) Params(ctx context.Context, req *bankv1beta1.QueryParamsRequest) (*bankv1beta1.QueryParamsResponse, error) {
	return &s.data.Params, nil
}

// DenomMetadata implements the bank QueryServer interface
func (s *MockBankQueryServer) DenomMetadata(ctx context.Context, req *bankv1beta1.QueryDenomMetadataRequest) (*bankv1beta1.QueryDenomMetadataResponse, error) {
	return &s.data.DenomMetadata, nil
}

// DenomsMetadata implements the bank QueryServer interface
func (s *MockBankQueryServer) DenomsMetadata(ctx context.Context, req *bankv1beta1.QueryDenomsMetadataRequest) (*bankv1beta1.QueryDenomsMetadataResponse, error) {
	return &s.data.DenomsMetadata, nil
}

// DenomOwners implements the bank QueryServer interface
func (s *MockBankQueryServer) DenomOwners(ctx context.Context, req *bankv1beta1.QueryDenomOwnersRequest) (*bankv1beta1.QueryDenomOwnersResponse, error) {
	return &s.data.DenomOwners, nil
}

// SendEnabled implements the bank QueryServer interface
func (s *MockBankQueryServer) SendEnabled(ctx context.Context, req *bankv1beta1.QuerySendEnabledRequest) (*bankv1beta1.QuerySendEnabledResponse, error) {
	return &s.data.SendEnabled, nil
}
