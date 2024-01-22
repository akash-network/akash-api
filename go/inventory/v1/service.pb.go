// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: akash/inventory/v1/service.proto

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

func init() { proto.RegisterFile("akash/inventory/v1/service.proto", fileDescriptor_19b1fad552cee5dc) }

var fileDescriptor_19b1fad552cee5dc = []byte{
	// 319 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x52, 0x48, 0xcc, 0x4e, 0x2c,
	0xce, 0xd0, 0xcf, 0xcc, 0x2b, 0x4b, 0xcd, 0x2b, 0xc9, 0x2f, 0xaa, 0xd4, 0x2f, 0x33, 0xd4, 0x2f,
	0x4e, 0x2d, 0x2a, 0xcb, 0x4c, 0x4e, 0xd5, 0x2b, 0x28, 0xca, 0x2f, 0xc9, 0x17, 0x12, 0x02, 0xab,
	0xd0, 0x83, 0xab, 0xd0, 0x2b, 0x33, 0x94, 0x92, 0x4e, 0xcf, 0xcf, 0x4f, 0xcf, 0x49, 0xd5, 0x07,
	0xab, 0x48, 0x2a, 0x4d, 0xd3, 0x4f, 0xcd, 0x2d, 0x28, 0xa9, 0x84, 0x68, 0x90, 0x92, 0x81, 0x4a,
	0x26, 0x16, 0x64, 0xea, 0x27, 0xe6, 0xe5, 0xe5, 0x97, 0x24, 0x96, 0x64, 0xe6, 0xe7, 0x15, 0x43,
	0x65, 0x65, 0xb1, 0x58, 0x98, 0x97, 0x9f, 0x02, 0xb5, 0x4d, 0x0a, 0x9b, 0x7b, 0x92, 0x73, 0x4a,
	0x8b, 0x4b, 0x52, 0x8b, 0x20, 0x2a, 0x8c, 0xe6, 0x33, 0x72, 0xb1, 0xfb, 0xe5, 0xa7, 0xa4, 0x06,
	0x05, 0x38, 0x0b, 0x05, 0x71, 0x71, 0x06, 0x96, 0xa6, 0x16, 0x55, 0x82, 0xf8, 0x42, 0x62, 0x7a,
	0x10, 0x8b, 0xf5, 0x60, 0xae, 0xd2, 0x73, 0x05, 0xb9, 0x4a, 0x4a, 0x42, 0x0f, 0xd3, 0x07, 0x7a,
	0x20, 0x1d, 0x4a, 0xc2, 0x4d, 0x97, 0x9f, 0x4c, 0x66, 0xe2, 0x15, 0xe2, 0x80, 0x39, 0x22, 0x89,
	0x51, 0x4b, 0xc8, 0x81, 0x8b, 0x2b, 0xb8, 0xa4, 0x28, 0x35, 0x31, 0x97, 0x3c, 0x43, 0x0d, 0x18,
	0x8d, 0x36, 0x33, 0x72, 0x71, 0x39, 0x43, 0xdc, 0x0c, 0x72, 0x64, 0x2c, 0x17, 0x0f, 0xd8, 0x91,
	0x50, 0x21, 0x9c, 0x46, 0x4a, 0x63, 0x33, 0x12, 0xaa, 0x49, 0x49, 0x02, 0xec, 0x54, 0x21, 0x21,
	0x5e, 0x90, 0x53, 0xe1, 0x2a, 0x40, 0xee, 0x75, 0xe3, 0xe2, 0x85, 0xb8, 0x97, 0x12, 0xf3, 0x0d,
	0x18, 0x9d, 0x7c, 0x4e, 0x3c, 0x92, 0x63, 0xbc, 0xf0, 0x48, 0x8e, 0xf1, 0xc1, 0x23, 0x39, 0xc6,
	0x09, 0x8f, 0xe5, 0x18, 0x2e, 0x3c, 0x96, 0x63, 0xb8, 0xf1, 0x58, 0x8e, 0x21, 0xca, 0x28, 0x3d,
	0xb3, 0x24, 0xa3, 0x34, 0x49, 0x2f, 0x39, 0x3f, 0x57, 0x1f, 0x6c, 0x84, 0x6e, 0x5e, 0x6a, 0x49,
	0x79, 0x7e, 0x51, 0x36, 0x94, 0x07, 0x8a, 0xe8, 0xf4, 0x7c, 0x94, 0x38, 0x4b, 0x62, 0x03, 0x5b,
	0x6e, 0x0c, 0x08, 0x00, 0x00, 0xff, 0xff, 0x1a, 0x86, 0xd8, 0xe4, 0x60, 0x02, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// NodeRPCClient is the client API for NodeRPC service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type NodeRPCClient interface {
	// QueryNode defines a method to query hardware state of the node
	// buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
	// buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
	QueryNode(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*Node, error)
	// StreamNode defines a method to stream hardware state of the node
	// buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
	// buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
	StreamNode(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (NodeRPC_StreamNodeClient, error)
}

type nodeRPCClient struct {
	cc grpc1.ClientConn
}

func NewNodeRPCClient(cc grpc1.ClientConn) NodeRPCClient {
	return &nodeRPCClient{cc}
}

func (c *nodeRPCClient) QueryNode(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*Node, error) {
	out := new(Node)
	err := c.cc.Invoke(ctx, "/akash.inventory.v1.NodeRPC/QueryNode", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *nodeRPCClient) StreamNode(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (NodeRPC_StreamNodeClient, error) {
	stream, err := c.cc.NewStream(ctx, &_NodeRPC_serviceDesc.Streams[0], "/akash.inventory.v1.NodeRPC/StreamNode", opts...)
	if err != nil {
		return nil, err
	}
	x := &nodeRPCStreamNodeClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type NodeRPC_StreamNodeClient interface {
	Recv() (*Node, error)
	grpc.ClientStream
}

type nodeRPCStreamNodeClient struct {
	grpc.ClientStream
}

func (x *nodeRPCStreamNodeClient) Recv() (*Node, error) {
	m := new(Node)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// NodeRPCServer is the server API for NodeRPC service.
type NodeRPCServer interface {
	// QueryNode defines a method to query hardware state of the node
	// buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
	// buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
	QueryNode(context.Context, *emptypb.Empty) (*Node, error)
	// StreamNode defines a method to stream hardware state of the node
	// buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
	// buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
	StreamNode(*emptypb.Empty, NodeRPC_StreamNodeServer) error
}

// UnimplementedNodeRPCServer can be embedded to have forward compatible implementations.
type UnimplementedNodeRPCServer struct {
}

func (*UnimplementedNodeRPCServer) QueryNode(ctx context.Context, req *emptypb.Empty) (*Node, error) {
	return nil, status.Errorf(codes.Unimplemented, "method QueryNode not implemented")
}
func (*UnimplementedNodeRPCServer) StreamNode(req *emptypb.Empty, srv NodeRPC_StreamNodeServer) error {
	return status.Errorf(codes.Unimplemented, "method StreamNode not implemented")
}

func RegisterNodeRPCServer(s grpc1.Server, srv NodeRPCServer) {
	s.RegisterService(&_NodeRPC_serviceDesc, srv)
}

func _NodeRPC_QueryNode_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(emptypb.Empty)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(NodeRPCServer).QueryNode(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/akash.inventory.v1.NodeRPC/QueryNode",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(NodeRPCServer).QueryNode(ctx, req.(*emptypb.Empty))
	}
	return interceptor(ctx, in, info, handler)
}

func _NodeRPC_StreamNode_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(emptypb.Empty)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(NodeRPCServer).StreamNode(m, &nodeRPCStreamNodeServer{stream})
}

type NodeRPC_StreamNodeServer interface {
	Send(*Node) error
	grpc.ServerStream
}

type nodeRPCStreamNodeServer struct {
	grpc.ServerStream
}

func (x *nodeRPCStreamNodeServer) Send(m *Node) error {
	return x.ServerStream.SendMsg(m)
}

var _NodeRPC_serviceDesc = grpc.ServiceDesc{
	ServiceName: "akash.inventory.v1.NodeRPC",
	HandlerType: (*NodeRPCServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "QueryNode",
			Handler:    _NodeRPC_QueryNode_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "StreamNode",
			Handler:       _NodeRPC_StreamNode_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "akash/inventory/v1/service.proto",
}

// ClusterRPCClient is the client API for ClusterRPC service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type ClusterRPCClient interface {
	// QueryCluster defines a method to query hardware state of the cluster
	// buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
	// buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
	QueryCluster(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*Cluster, error)
	// StreamCluster defines a method to stream hardware state of the cluster
	// buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
	// buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
	StreamCluster(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (ClusterRPC_StreamClusterClient, error)
}

type clusterRPCClient struct {
	cc grpc1.ClientConn
}

func NewClusterRPCClient(cc grpc1.ClientConn) ClusterRPCClient {
	return &clusterRPCClient{cc}
}

func (c *clusterRPCClient) QueryCluster(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*Cluster, error) {
	out := new(Cluster)
	err := c.cc.Invoke(ctx, "/akash.inventory.v1.ClusterRPC/QueryCluster", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *clusterRPCClient) StreamCluster(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (ClusterRPC_StreamClusterClient, error) {
	stream, err := c.cc.NewStream(ctx, &_ClusterRPC_serviceDesc.Streams[0], "/akash.inventory.v1.ClusterRPC/StreamCluster", opts...)
	if err != nil {
		return nil, err
	}
	x := &clusterRPCStreamClusterClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type ClusterRPC_StreamClusterClient interface {
	Recv() (*Cluster, error)
	grpc.ClientStream
}

type clusterRPCStreamClusterClient struct {
	grpc.ClientStream
}

func (x *clusterRPCStreamClusterClient) Recv() (*Cluster, error) {
	m := new(Cluster)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// ClusterRPCServer is the server API for ClusterRPC service.
type ClusterRPCServer interface {
	// QueryCluster defines a method to query hardware state of the cluster
	// buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
	// buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
	QueryCluster(context.Context, *emptypb.Empty) (*Cluster, error)
	// StreamCluster defines a method to stream hardware state of the cluster
	// buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
	// buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
	StreamCluster(*emptypb.Empty, ClusterRPC_StreamClusterServer) error
}

// UnimplementedClusterRPCServer can be embedded to have forward compatible implementations.
type UnimplementedClusterRPCServer struct {
}

func (*UnimplementedClusterRPCServer) QueryCluster(ctx context.Context, req *emptypb.Empty) (*Cluster, error) {
	return nil, status.Errorf(codes.Unimplemented, "method QueryCluster not implemented")
}
func (*UnimplementedClusterRPCServer) StreamCluster(req *emptypb.Empty, srv ClusterRPC_StreamClusterServer) error {
	return status.Errorf(codes.Unimplemented, "method StreamCluster not implemented")
}

func RegisterClusterRPCServer(s grpc1.Server, srv ClusterRPCServer) {
	s.RegisterService(&_ClusterRPC_serviceDesc, srv)
}

func _ClusterRPC_QueryCluster_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(emptypb.Empty)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ClusterRPCServer).QueryCluster(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/akash.inventory.v1.ClusterRPC/QueryCluster",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ClusterRPCServer).QueryCluster(ctx, req.(*emptypb.Empty))
	}
	return interceptor(ctx, in, info, handler)
}

func _ClusterRPC_StreamCluster_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(emptypb.Empty)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(ClusterRPCServer).StreamCluster(m, &clusterRPCStreamClusterServer{stream})
}

type ClusterRPC_StreamClusterServer interface {
	Send(*Cluster) error
	grpc.ServerStream
}

type clusterRPCStreamClusterServer struct {
	grpc.ServerStream
}

func (x *clusterRPCStreamClusterServer) Send(m *Cluster) error {
	return x.ServerStream.SendMsg(m)
}

var _ClusterRPC_serviceDesc = grpc.ServiceDesc{
	ServiceName: "akash.inventory.v1.ClusterRPC",
	HandlerType: (*ClusterRPCServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "QueryCluster",
			Handler:    _ClusterRPC_QueryCluster_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "StreamCluster",
			Handler:       _ClusterRPC_StreamCluster_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "akash/inventory/v1/service.proto",
}