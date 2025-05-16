package main

import (
	_ "embed"
	"encoding/json"
	"fmt"
	"net"

	"google.golang.org/grpc"
	_ "k8s.io/apimachinery/pkg/api/resource"
	"pkg.akt.dev/go/grpc/gogoreflection"
	certv1 "pkg.akt.dev/go/node/cert/v1"
	deploymentv1beta4 "pkg.akt.dev/go/node/deployment/v1beta4"
	escrowv1 "pkg.akt.dev/go/node/escrow/v1"
	providerv1beta4 "pkg.akt.dev/go/node/provider/v1beta4"
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

// StaticDeployments holds the deployments loaded from JSON
var StaticDeployments []deploymentv1beta4.QueryDeploymentResponse

// StaticEscrowData holds the escrow data loaded from JSON
var StaticEscrowData mocks.EscrowData

// StaticProviders holds the providers loaded from JSON
var StaticProviders []providerv1beta4.Provider

// StaticCertificates holds the certificates loaded from JSON
var StaticCertificates []mocks.CertificateData

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
