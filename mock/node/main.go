package main

import (
	_ "embed"
	"encoding/json"
	"fmt"
	"net"

	"google.golang.org/grpc"
	_ "k8s.io/apimachinery/pkg/api/resource"
	"pkg.akt.dev/go/grpc/gogoreflection"
	auditv1 "pkg.akt.dev/go/node/audit/v1"
	certv1 "pkg.akt.dev/go/node/cert/v1"
	deploymentv1beta4 "pkg.akt.dev/go/node/deployment/v1beta4"
	escrowv1 "pkg.akt.dev/go/node/escrow/v1"
	marketv1beta5 "pkg.akt.dev/go/node/market/v1beta5"
	providerv1beta4 "pkg.akt.dev/go/node/provider/v1beta4"
	stakingv1beta3 "pkg.akt.dev/go/node/staking/v1beta3"
	takev1 "pkg.akt.dev/go/node/take/v1"
	"pkg.akt.dev/mock/node/mocks"
)

//go:embed data/deployments.json
var DeploymentsData string

//go:embed data/escrow.json
var EscrowData string

//go:embed data/providers.json
var ProvidersData string

//go:embed data/certificates.json
var CertificatesData string

//go:embed data/market.json
var MarketData string

//go:embed data/audit.json
var AuditData string

//go:embed data/staking.json
var StakingData string

//go:embed data/take.json
var TakeData string

// StaticDeployments holds the deployments loaded from JSON
var StaticDeployments []deploymentv1beta4.QueryDeploymentResponse

// StaticEscrowData holds the escrow data loaded from JSON
var StaticEscrowData mocks.EscrowData

// StaticProviders holds the providers loaded from JSON
var StaticProviders []providerv1beta4.Provider

// StaticCertificates holds the certificates loaded from JSON
var StaticCertificates []mocks.CertificateData

// StaticMarketData holds the market data loaded from JSON
var StaticMarketData mocks.MarketData

// StaticAuditData holds the audit data loaded from JSON
var StaticAuditData mocks.AuditData

// StaticStakingData holds the staking data loaded from JSON
var StaticStakingData mocks.StakingData

// StaticTakeData holds the take data loaded from JSON
var StaticTakeData mocks.TakeData

func init() {
	// Load deployments data
	err := json.Unmarshal([]byte(DeploymentsData), &StaticDeployments)
	if err != nil {
		panic(fmt.Errorf("failed to unmarshal deployments: %w", err))
	}

	// Load escrow data
	err = json.Unmarshal([]byte(EscrowData), &StaticEscrowData)
	if err != nil {
		panic(fmt.Errorf("failed to unmarshal escrow data: %w", err))
	}

	// Load providers data
	err = json.Unmarshal([]byte(ProvidersData), &StaticProviders)
	if err != nil {
		panic(fmt.Errorf("failed to unmarshal providers data: %w", err))
	}

	// Load certificates data
	err = json.Unmarshal([]byte(CertificatesData), &StaticCertificates)
	if err != nil {
		panic(fmt.Errorf("failed to unmarshal certificates data: %w", err))
	}

	// Load market data
	err = json.Unmarshal([]byte(MarketData), &StaticMarketData)
	if err != nil {
		panic(fmt.Errorf("failed to unmarshal market data: %w", err))
	}

	// Load audit data
	err = json.Unmarshal([]byte(AuditData), &StaticAuditData)
	if err != nil {
		panic(fmt.Errorf("failed to unmarshal audit data: %w", err))
	}

	// Load staking data
	err = json.Unmarshal([]byte(StakingData), &StaticStakingData)
	if err != nil {
		panic(fmt.Errorf("failed to unmarshal staking data: %w", err))
	}

	// Load take data
	err = json.Unmarshal([]byte(TakeData), &StaticTakeData)
	if err != nil {
		panic(fmt.Errorf("failed to unmarshal take data: %w", err))
	}
}

func main() {
	grpcSrv := grpc.NewServer()

	// Register deployment server
	mockDeploymentQueryServer := mocks.NewMockDeploymentQueryServer(StaticDeployments)
	deploymentv1beta4.RegisterQueryServer(grpcSrv, mockDeploymentQueryServer)

	// Register escrow server
	mockEscrowQueryServer := mocks.NewMockEscrowQueryServer(StaticEscrowData)
	escrowv1.RegisterQueryServer(grpcSrv, mockEscrowQueryServer)

	// Register provider server
	mockProviderQueryServer := mocks.NewMockProviderQueryServer(StaticProviders)
	providerv1beta4.RegisterQueryServer(grpcSrv, mockProviderQueryServer)

	// Register certificate server
	mockCertificateQueryServer := mocks.NewMockCertificateQueryServer(StaticCertificates)
	certv1.RegisterQueryServer(grpcSrv, mockCertificateQueryServer)

	// Register market server
	mockMarketQueryServer := mocks.NewMockMarketQueryServer(StaticMarketData)
	marketv1beta5.RegisterQueryServer(grpcSrv, mockMarketQueryServer)

	// Register audit server
	mockAuditQueryServer := mocks.NewMockAuditQueryServer(StaticAuditData)
	auditv1.RegisterQueryServer(grpcSrv, mockAuditQueryServer)

	// Register staking server
	mockStakingQueryServer := mocks.NewMockStakingQueryServer(StaticStakingData)
	stakingv1beta3.RegisterQueryServer(grpcSrv, mockStakingQueryServer)

	// Register take server
	mockTakeQueryServer := mocks.NewMockTakeQueryServer(StaticTakeData)
	takev1.RegisterQueryServer(grpcSrv, mockTakeQueryServer)

	gogoreflection.Register(grpcSrv)

	grpcLis, err := net.Listen("tcp", ":9090")
	if err != nil {
		panic(err)
	}

	fmt.Println("Starting mock server")
	err = grpcSrv.Serve(grpcLis)
	if err != nil {
		panic(err)
	}
}
