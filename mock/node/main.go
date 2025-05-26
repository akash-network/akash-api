package main

import (
	"context"
	_ "embed"
	"encoding/json"
	"fmt"
	"net"
	"net/http"
	"os"
	"os/signal"
	"path/filepath"
	"strings"
	"syscall"
	"time"

	authv1beta1 "github.com/cosmos/cosmos-sdk/x/auth/types"
	authzv1beta1 "github.com/cosmos/cosmos-sdk/x/authz"
	bankv1beta1 "github.com/cosmos/cosmos-sdk/x/bank/types"
	feegrantv1beta1 "github.com/cosmos/cosmos-sdk/x/feegrant"
	"golang.org/x/sync/errgroup"
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

//go:embed data/authz.json
var AuthzData string

//go:embed data/auth.json
var AuthData string

//go:embed data/bank.json
var BankData string

//go:embed data/feegrant.json
var FeegrantData string

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

// StaticAuthzData holds the authz data loaded from JSON
var StaticAuthzData mocks.AuthzData

// StaticAuthData holds the auth data loaded from JSON
var StaticAuthData mocks.AuthData

// StaticBankData holds the bank data loaded from JSON
var StaticBankData mocks.BankData

// StaticFeegrantData holds the feegrant data loaded from JSON
var StaticFeegrantData mocks.FeegrantData

// embeddedData maps file names to their embedded content
var embeddedData = map[string]string{
	"deployments":  DeploymentsData,
	"escrow":       EscrowData,
	"providers":    ProvidersData,
	"certificates": CertificatesData,
	"market":       MarketData,
	"audit":        AuditData,
	"staking":      StakingData,
	"take":         TakeData,
	"authz":        AuthzData,
	"auth":         AuthData,
	"bank":         BankData,
	"feegrant":     FeegrantData,
}

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

	// Load authz data
	err = json.Unmarshal([]byte(AuthzData), &StaticAuthzData)
	if err != nil {
		panic(fmt.Errorf("failed to unmarshal authz data: %w", err))
	}

	// Load auth data
	err = json.Unmarshal([]byte(AuthData), &StaticAuthData)
	if err != nil {
		panic(fmt.Errorf("failed to unmarshal auth data: %w", err))
	}

	// Load bank data
	err = json.Unmarshal([]byte(BankData), &StaticBankData)
	if err != nil {
		panic(fmt.Errorf("failed to unmarshal bank data: %w", err))
	}

	// Load feegrant data
	err = json.Unmarshal([]byte(FeegrantData), &StaticFeegrantData)
	if err != nil {
		panic(fmt.Errorf("failed to unmarshal feegrant data: %w", err))
	}
}

func startGRPCServer(ctx context.Context) error {
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

	// Register authz server
	mockAuthzQueryServer := mocks.NewMockAuthzQueryServer(StaticAuthzData)
	authzv1beta1.RegisterQueryServer(grpcSrv, mockAuthzQueryServer)

	// Register auth server
	mockAuthQueryServer := mocks.NewMockAuthQueryServer(StaticAuthData)
	authv1beta1.RegisterQueryServer(grpcSrv, mockAuthQueryServer)

	// Register bank server
	mockBankQueryServer := mocks.NewMockBankQueryServer(StaticBankData)
	bankv1beta1.RegisterQueryServer(grpcSrv, mockBankQueryServer)

	// Register feegrant server
	mockFeegrantQueryServer := mocks.NewMockFeegrantQueryServer(StaticFeegrantData)
	feegrantv1beta1.RegisterQueryServer(grpcSrv, mockFeegrantQueryServer)

	gogoreflection.Register(grpcSrv)

	grpcLis, err := net.Listen("tcp", ":9090")
	if err != nil {
		return fmt.Errorf("failed to listen on gRPC port: %w", err)
	}

	fmt.Printf("starting gRPC mock server on %s\n", grpcLis.Addr())

	errChan := make(chan error, 1)
	go func() {
		errChan <- grpcSrv.Serve(grpcLis)
	}()

	select {
	case err := <-errChan:
		return fmt.Errorf("gRPC server error: %w", err)
	case <-ctx.Done():
		shutdownCtx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
		defer cancel()

		stopped := make(chan struct{})
		go func() {
			grpcSrv.GracefulStop()
			close(stopped)
		}()

		select {
		case <-shutdownCtx.Done():
			grpcSrv.Stop()
			return fmt.Errorf("gRPC server shutdown timed out")
		case <-stopped:
			return nil
		}
	}
}

func startMockControlServer(ctx context.Context) error {
	mux := http.NewServeMux()

	mux.HandleFunc("/data/", func(w http.ResponseWriter, r *http.Request) {
		filePath := strings.TrimPrefix(r.URL.Path, "/data/")
		filePath = filepath.Join("data", filePath)

		if _, err := os.Stat(filePath); os.IsNotExist(err) {
			http.Error(w, "File not found", http.StatusNotFound)
			return
		}

		if strings.HasSuffix(filePath, ".json") {
			w.Header().Set("Content-Type", "application/json")
		}

		http.ServeFile(w, r, filePath)
	})

	for name, data := range embeddedData {
		path := "/mock/" + name
		mux.HandleFunc(path, func(w http.ResponseWriter, r *http.Request) {
			w.Header().Set("Content-Type", "application/json")
			w.Write([]byte(data))
		})
	}

	server := &http.Server{
		Addr:    ":9091",
		Handler: mux,
	}

	fmt.Printf("starting mock control server on %s\n", server.Addr)

	errChan := make(chan error, 1)
	go func() {
		errChan <- server.ListenAndServe()
	}()

	select {
	case err := <-errChan:
		return fmt.Errorf("mock control server error: %w", err)
	case <-ctx.Done():
		shutdownCtx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
		defer cancel()

		if err := server.Shutdown(shutdownCtx); err != nil {
			return fmt.Errorf("mock control server shutdown error: %w", err)
		}
		return nil
	}
}

func main() {
	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()

	g, ctx := errgroup.WithContext(ctx)

	g.Go(func() error {
		return startGRPCServer(ctx)
	})

	g.Go(func() error {
		return startMockControlServer(ctx)
	})

	sigChan := make(chan os.Signal, 1)
	signal.Notify(sigChan, syscall.SIGINT, syscall.SIGTERM)

	go func() {
		select {
		case sig := <-sigChan:
			fmt.Printf("received signal: %v\n", sig)
			cancel()
		case <-ctx.Done():
		}
	}()

	if err := g.Wait(); err != nil {
		fmt.Printf("server error: %v\n", err)
		os.Exit(1)
	}
}
