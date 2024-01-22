// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: akash/provider/v1/service.proto

package v1

import (
	context "context"
	fmt "fmt"
	grpc1 "github.com/gogo/protobuf/grpc"
	proto "github.com/gogo/protobuf/proto"
	_ "google.golang.org/genproto/googleapis/api/annotations"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	emptypb "google.golang.org/protobuf/types/known/emptypb"
	math "math"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

func init() { proto.RegisterFile("akash/provider/v1/service.proto", fileDescriptor_518d1307e7e58072) }

var fileDescriptor_518d1307e7e58072 = []byte{
	// 255 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x92, 0x4f, 0xcc, 0x4e, 0x2c,
	0xce, 0xd0, 0x2f, 0x28, 0xca, 0x2f, 0xcb, 0x4c, 0x49, 0x2d, 0xd2, 0x2f, 0x33, 0xd4, 0x2f, 0x4e,
	0x2d, 0x2a, 0xcb, 0x4c, 0x4e, 0xd5, 0x2b, 0x28, 0xca, 0x2f, 0xc9, 0x17, 0x12, 0x04, 0x2b, 0xd0,
	0x83, 0x29, 0xd0, 0x2b, 0x33, 0x94, 0x92, 0x4e, 0xcf, 0xcf, 0x4f, 0xcf, 0x49, 0xd5, 0x07, 0x2b,
	0x48, 0x2a, 0x4d, 0xd3, 0x4f, 0xcd, 0x2d, 0x28, 0xa9, 0x84, 0xa8, 0x97, 0x92, 0x81, 0x4a, 0x26,
	0x16, 0x64, 0xea, 0x27, 0xe6, 0xe5, 0xe5, 0x97, 0x24, 0x96, 0x64, 0xe6, 0xe7, 0x15, 0x43, 0x65,
	0xe5, 0xb0, 0x58, 0x57, 0x92, 0x58, 0x52, 0x0a, 0x95, 0x37, 0x5a, 0xc9, 0xc8, 0xc5, 0x1d, 0x00,
	0x95, 0x0c, 0x0a, 0x70, 0x16, 0x0a, 0xe5, 0xe2, 0x74, 0x4f, 0x2d, 0x09, 0x06, 0x2b, 0x11, 0x12,
	0xd3, 0x83, 0x98, 0xad, 0x07, 0xb3, 0x58, 0xcf, 0x15, 0x64, 0xb1, 0x94, 0xa4, 0x1e, 0x86, 0x1b,
	0xf5, 0x20, 0x5a, 0x94, 0x44, 0x9b, 0x2e, 0x3f, 0x99, 0xcc, 0xc4, 0x2f, 0xc4, 0x85, 0xb0, 0x29,
	0x89, 0x51, 0x4b, 0xc8, 0x99, 0x8b, 0x27, 0xb8, 0xa4, 0x28, 0x35, 0x31, 0x97, 0x6c, 0x93, 0x0d,
	0x18, 0x9d, 0xbc, 0x4f, 0x3c, 0x92, 0x63, 0xbc, 0xf0, 0x48, 0x8e, 0xf1, 0xc1, 0x23, 0x39, 0xc6,
	0x09, 0x8f, 0xe5, 0x18, 0x2e, 0x3c, 0x96, 0x63, 0xb8, 0xf1, 0x58, 0x8e, 0x21, 0xca, 0x30, 0x3d,
	0xb3, 0x24, 0xa3, 0x34, 0x49, 0x2f, 0x39, 0x3f, 0x57, 0x1f, 0x6c, 0x80, 0x6e, 0x5e, 0x6a, 0x49,
	0x79, 0x7e, 0x51, 0x36, 0x94, 0x07, 0x0a, 0x9b, 0xf4, 0x7c, 0xe4, 0x50, 0x48, 0x62, 0x03, 0xdb,
	0x6c, 0x0c, 0x08, 0x00, 0x00, 0xff, 0xff, 0x6a, 0xc2, 0xd5, 0x1b, 0x90, 0x01, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// ProviderRPCClient is the client API for ProviderRPC service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type ProviderRPCClient interface {
	// GetStatus defines a method to query provider state
	// buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
	// buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
	GetStatus(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*Status, error)
	// Status defines a method to stream provider state
	// buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
	// buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
	StreamStatus(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (ProviderRPC_StreamStatusClient, error)
}

type providerRPCClient struct {
	cc grpc1.ClientConn
}

func NewProviderRPCClient(cc grpc1.ClientConn) ProviderRPCClient {
	return &providerRPCClient{cc}
}

func (c *providerRPCClient) GetStatus(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*Status, error) {
	out := new(Status)
	err := c.cc.Invoke(ctx, "/akash.provider.v1.ProviderRPC/GetStatus", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *providerRPCClient) StreamStatus(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (ProviderRPC_StreamStatusClient, error) {
	stream, err := c.cc.NewStream(ctx, &_ProviderRPC_serviceDesc.Streams[0], "/akash.provider.v1.ProviderRPC/StreamStatus", opts...)
	if err != nil {
		return nil, err
	}
	x := &providerRPCStreamStatusClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type ProviderRPC_StreamStatusClient interface {
	Recv() (*Status, error)
	grpc.ClientStream
}

type providerRPCStreamStatusClient struct {
	grpc.ClientStream
}

func (x *providerRPCStreamStatusClient) Recv() (*Status, error) {
	m := new(Status)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// ProviderRPCServer is the server API for ProviderRPC service.
type ProviderRPCServer interface {
	// GetStatus defines a method to query provider state
	// buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
	// buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
	GetStatus(context.Context, *emptypb.Empty) (*Status, error)
	// Status defines a method to stream provider state
	// buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
	// buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
	StreamStatus(*emptypb.Empty, ProviderRPC_StreamStatusServer) error
}

// UnimplementedProviderRPCServer can be embedded to have forward compatible implementations.
type UnimplementedProviderRPCServer struct {
}

func (*UnimplementedProviderRPCServer) GetStatus(ctx context.Context, req *emptypb.Empty) (*Status, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetStatus not implemented")
}
func (*UnimplementedProviderRPCServer) StreamStatus(req *emptypb.Empty, srv ProviderRPC_StreamStatusServer) error {
	return status.Errorf(codes.Unimplemented, "method StreamStatus not implemented")
}

func RegisterProviderRPCServer(s grpc1.Server, srv ProviderRPCServer) {
	s.RegisterService(&_ProviderRPC_serviceDesc, srv)
}

func _ProviderRPC_GetStatus_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(emptypb.Empty)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ProviderRPCServer).GetStatus(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/akash.provider.v1.ProviderRPC/GetStatus",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ProviderRPCServer).GetStatus(ctx, req.(*emptypb.Empty))
	}
	return interceptor(ctx, in, info, handler)
}

func _ProviderRPC_StreamStatus_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(emptypb.Empty)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(ProviderRPCServer).StreamStatus(m, &providerRPCStreamStatusServer{stream})
}

type ProviderRPC_StreamStatusServer interface {
	Send(*Status) error
	grpc.ServerStream
}

type providerRPCStreamStatusServer struct {
	grpc.ServerStream
}

func (x *providerRPCStreamStatusServer) Send(m *Status) error {
	return x.ServerStream.SendMsg(m)
}

var _ProviderRPC_serviceDesc = grpc.ServiceDesc{
	ServiceName: "akash.provider.v1.ProviderRPC",
	HandlerType: (*ProviderRPCServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetStatus",
			Handler:    _ProviderRPC_GetStatus_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "StreamStatus",
			Handler:       _ProviderRPC_StreamStatus_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "akash/provider/v1/service.proto",
}