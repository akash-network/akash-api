// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: akash/take/v1beta3/query.proto

package v1beta3

import (
	context "context"
	fmt "fmt"
	_ "github.com/gogo/protobuf/gogoproto"
	grpc1 "github.com/gogo/protobuf/grpc"
	proto "github.com/gogo/protobuf/proto"
	grpc "google.golang.org/grpc"
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

func init() { proto.RegisterFile("akash/take/v1beta3/query.proto", fileDescriptor_d53d30cc323d5fb3) }

var fileDescriptor_d53d30cc323d5fb3 = []byte{
	// 156 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x92, 0x4b, 0xcc, 0x4e, 0x2c,
	0xce, 0xd0, 0x2f, 0x49, 0xcc, 0x4e, 0xd5, 0x2f, 0x33, 0x4c, 0x4a, 0x2d, 0x49, 0x34, 0xd6, 0x2f,
	0x2c, 0x4d, 0x2d, 0xaa, 0xd4, 0x2b, 0x28, 0xca, 0x2f, 0xc9, 0x17, 0x12, 0x02, 0xcb, 0xeb, 0x81,
	0xe4, 0xf5, 0xa0, 0xf2, 0x52, 0x22, 0xe9, 0xf9, 0xe9, 0xf9, 0x60, 0x69, 0x7d, 0x10, 0x0b, 0xa2,
	0xd2, 0x88, 0x9d, 0x8b, 0x35, 0x10, 0xa4, 0xd1, 0x29, 0xf0, 0xc4, 0x23, 0x39, 0xc6, 0x0b, 0x8f,
	0xe4, 0x18, 0x1f, 0x3c, 0x92, 0x63, 0x9c, 0xf0, 0x58, 0x8e, 0xe1, 0xc2, 0x63, 0x39, 0x86, 0x1b,
	0x8f, 0xe5, 0x18, 0xa2, 0xcc, 0xd3, 0x33, 0x4b, 0x32, 0x4a, 0x93, 0xf4, 0x92, 0xf3, 0x73, 0xf5,
	0xc1, 0xe6, 0xea, 0xe6, 0xa5, 0x96, 0x94, 0xe7, 0x17, 0x65, 0x43, 0x79, 0x89, 0x05, 0x99, 0xfa,
	0xe9, 0xf9, 0xfa, 0x79, 0xf9, 0x29, 0xa9, 0x28, 0x2e, 0x4a, 0x62, 0x03, 0x5b, 0x61, 0x0c, 0x08,
	0x00, 0x00, 0xff, 0xff, 0x39, 0x17, 0x15, 0xce, 0xae, 0x00, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// QueryClient is the client API for Query service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type QueryClient interface {
}

type queryClient struct {
	cc grpc1.ClientConn
}

func NewQueryClient(cc grpc1.ClientConn) QueryClient {
	return &queryClient{cc}
}

// QueryServer is the server API for Query service.
type QueryServer interface {
}

// UnimplementedQueryServer can be embedded to have forward compatible implementations.
type UnimplementedQueryServer struct {
}

func RegisterQueryServer(s grpc1.Server, srv QueryServer) {
	s.RegisterService(&_Query_serviceDesc, srv)
}

var _Query_serviceDesc = grpc.ServiceDesc{
	ServiceName: "akash.take.v1beta3.Query",
	HandlerType: (*QueryServer)(nil),
	Methods:     []grpc.MethodDesc{},
	Streams:     []grpc.StreamDesc{},
	Metadata:    "akash/take/v1beta3/query.proto",
}
