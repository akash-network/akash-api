package mocks

import (
	"context"

	"github.com/cosmos/cosmos-sdk/codec/types"
	authv1beta1 "github.com/cosmos/cosmos-sdk/x/auth/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

// AuthData holds the auth data loaded from JSON
type AuthData struct {
	Accounts            []*types.Any                                  `json:"accounts"`
	Account             *authv1beta1.QueryAccountResponse             `json:"account"`
	AccountAddressByID  *authv1beta1.QueryAccountAddressByIDResponse  `json:"account_address_by_id"`
	Params              *authv1beta1.QueryParamsResponse              `json:"params"`
	ModuleAccounts      *authv1beta1.QueryModuleAccountsResponse      `json:"module_accounts"`
	ModuleAccountByName *authv1beta1.QueryModuleAccountByNameResponse `json:"module_account_by_name"`
	Bech32Prefix        *authv1beta1.Bech32PrefixResponse             `json:"bech32_prefix"`
}

// MockAuthQueryServer implements the auth query server
type MockAuthQueryServer struct {
	authv1beta1.UnimplementedQueryServer
	data AuthData
}

// NewMockAuthQueryServer creates a new mock auth query server
func NewMockAuthQueryServer(data AuthData) *MockAuthQueryServer {
	return &MockAuthQueryServer{
		data: data,
	}
}

// Accounts returns all accounts
func (s *MockAuthQueryServer) Accounts(ctx context.Context, req *authv1beta1.QueryAccountsRequest) (*authv1beta1.QueryAccountsResponse, error) {
	return &authv1beta1.QueryAccountsResponse{
		Accounts:   s.data.Accounts,
		Pagination: nil,
	}, nil
}

// Account returns account details based on address
func (s *MockAuthQueryServer) Account(ctx context.Context, req *authv1beta1.QueryAccountRequest) (*authv1beta1.QueryAccountResponse, error) {
	if s.data.Account == nil {
		return nil, status.Error(codes.NotFound, "account not found")
	}
	return s.data.Account, nil
}

// AccountAddressByID returns account address based on account number
func (s *MockAuthQueryServer) AccountAddressByID(ctx context.Context, req *authv1beta1.QueryAccountAddressByIDRequest) (*authv1beta1.QueryAccountAddressByIDResponse, error) {
	if s.data.AccountAddressByID == nil {
		return nil, status.Error(codes.NotFound, "account address not found")
	}
	return s.data.AccountAddressByID, nil
}

// Params queries all parameters
func (s *MockAuthQueryServer) Params(ctx context.Context, req *authv1beta1.QueryParamsRequest) (*authv1beta1.QueryParamsResponse, error) {
	if s.data.Params == nil {
		return nil, status.Error(codes.NotFound, "params not found")
	}
	return s.data.Params, nil
}

// ModuleAccounts returns all module accounts
func (s *MockAuthQueryServer) ModuleAccounts(ctx context.Context, req *authv1beta1.QueryModuleAccountsRequest) (*authv1beta1.QueryModuleAccountsResponse, error) {
	if s.data.ModuleAccounts == nil {
		return nil, status.Error(codes.NotFound, "module accounts not found")
	}
	return s.data.ModuleAccounts, nil
}

// ModuleAccountByName returns module account by name
func (s *MockAuthQueryServer) ModuleAccountByName(ctx context.Context, req *authv1beta1.QueryModuleAccountByNameRequest) (*authv1beta1.QueryModuleAccountByNameResponse, error) {
	if s.data.ModuleAccountByName == nil {
		return nil, status.Error(codes.NotFound, "module account not found")
	}
	return s.data.ModuleAccountByName, nil
}

// Bech32Prefix queries bech32Prefix
func (s *MockAuthQueryServer) Bech32Prefix(ctx context.Context, req *authv1beta1.Bech32PrefixRequest) (*authv1beta1.Bech32PrefixResponse, error) {
	if s.data.Bech32Prefix == nil {
		return nil, status.Error(codes.NotFound, "bech32 prefix not found")
	}
	return s.data.Bech32Prefix, nil
}
