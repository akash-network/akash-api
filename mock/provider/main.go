package main

import (
	"context"
	_ "embed"
	"encoding/json"
	"fmt"
	"net"

	"google.golang.org/grpc"
	"google.golang.org/protobuf/types/known/emptypb"
	_ "k8s.io/apimachinery/pkg/api/resource"
	"pkg.akt.dev/go/grpc/gogoreflection"
	providerv1 "pkg.akt.dev/go/provider/v1"
)

//go:embed data/provider-status.json
var ProviderStatusData string

func main() {
	grpcSrv := grpc.NewServer()

	pRPC := &MockProviderRPCServer{}

	providerv1.RegisterProviderRPCServer(grpcSrv, pRPC)
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

type MockProviderRPCServer struct {
	providerv1.UnimplementedProviderRPCServer
}

func (m MockProviderRPCServer) GetStatus(ctx context.Context, empty *emptypb.Empty) (*providerv1.Status, error) {
	var status providerv1.Status
	err := json.Unmarshal([]byte(ProviderStatusData), &status)
	if err != nil {
		return nil, err
	}

	return &status, nil
}
