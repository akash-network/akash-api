// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: akash/deployment/v1beta4/service.proto

package v1beta4

import (
	context "context"
	fmt "fmt"
	_ "github.com/cosmos/cosmos-sdk/types/msgservice"
	grpc1 "github.com/cosmos/gogoproto/grpc"
	proto "github.com/cosmos/gogoproto/proto"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	math "math"
	v1 "pkg.akt.dev/go/node/deployment/v1"
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

func init() {
	proto.RegisterFile("akash/deployment/v1beta4/service.proto", fileDescriptor_2013a754c1800268)
}

var fileDescriptor_2013a754c1800268 = []byte{
	// 367 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x94, 0xd3, 0xc1, 0x4e, 0xfa, 0x30,
	0x1c, 0xc0, 0x71, 0x96, 0x7f, 0xfe, 0x9a, 0x34, 0x26, 0xe2, 0x2e, 0x9a, 0x26, 0xee, 0x08, 0x6a,
	0xb0, 0x0d, 0x8a, 0x77, 0x23, 0x24, 0x9e, 0x48, 0x88, 0xc6, 0x8b, 0xb7, 0xc2, 0xea, 0x24, 0x30,
	0x5a, 0xf7, 0x2b, 0x04, 0x6f, 0x3e, 0x02, 0x8f, 0xe2, 0x63, 0x78, 0xe4, 0xe8, 0xd1, 0xc0, 0xc1,
	0xd7, 0x30, 0x0c, 0x5d, 0xc7, 0xec, 0xdc, 0x76, 0x85, 0x0f, 0xbf, 0x6f, 0x4b, 0x5b, 0x54, 0x61,
	0x03, 0x06, 0x8f, 0xd4, 0xe5, 0x72, 0x28, 0x9e, 0x7d, 0x3e, 0x52, 0x74, 0x52, 0xef, 0x72, 0xc5,
	0x1a, 0x14, 0x78, 0x30, 0xe9, 0xf7, 0x38, 0x91, 0x81, 0x50, 0xc2, 0x3e, 0x08, 0x1d, 0xd1, 0x8e,
	0x7c, 0x3b, 0x7c, 0x68, 0x98, 0x40, 0x7d, 0xf0, 0xd6, 0x3f, 0xc4, 0xb5, 0xd4, 0x80, 0xfe, 0x48,
	0xeb, 0x6a, 0xaa, 0xf6, 0x02, 0x31, 0x96, 0x1a, 0x1e, 0xa5, 0x42, 0xc9, 0x02, 0xe6, 0x83, 0x96,
	0xfb, 0x3d, 0x01, 0xbe, 0x80, 0xd5, 0x92, 0x36, 0x56, 0x76, 0x36, 0xdb, 0x46, 0xff, 0xda, 0xe0,
	0xd9, 0x53, 0x54, 0x6e, 0x06, 0x9c, 0x29, 0xde, 0x8a, 0x86, 0xd9, 0xa7, 0x24, 0x6d, 0xbf, 0xa4,
	0x0d, 0x5e, 0x92, 0xe3, 0x8b, 0x42, 0xfc, 0x86, 0x83, 0x14, 0x23, 0xe0, 0xf6, 0x13, 0xda, 0x6b,
	0x71, 0x29, 0xa0, 0xaf, 0x62, 0xe9, 0x63, 0xd3, 0xac, 0xd5, 0x98, 0x5f, 0x14, 0xd7, 0x73, 0xd3,
	0x28, 0x39, 0x45, 0xe5, 0x3b, 0xe9, 0x16, 0xd9, 0x6c, 0x92, 0x67, 0x6c, 0x36, 0xc9, 0xa3, 0xf2,
	0x18, 0xed, 0x36, 0x87, 0x02, 0xe2, 0xe1, 0xda, 0xdf, 0x7f, 0xdb, 0xa6, 0xc6, 0x8d, 0x22, 0x3a,
	0xca, 0x3e, 0x20, 0x14, 0x7e, 0x75, 0xbd, 0xba, 0x3f, 0x76, 0x35, 0x7b, 0x46, 0x08, 0x31, 0xcd,
	0x09, 0xe3, 0x9d, 0x0e, 0x1b, 0xe7, 0xeb, 0x68, 0x98, 0xd1, 0xd1, 0x30, 0xde, 0xb9, 0x55, 0x2c,
	0x50, 0x79, 0x3a, 0x1a, 0x66, 0x74, 0x34, 0x8c, 0x3a, 0x43, 0xb4, 0xb3, 0x3e, 0xca, 0x4e, 0xf8,
	0x9e, 0xcc, 0xd7, 0x32, 0x71, 0xea, 0x6b, 0x6a, 0xbe, 0x96, 0x46, 0xfa, 0x53, 0xc3, 0xff, 0x5f,
	0x3e, 0x5f, 0x4f, 0xac, 0xab, 0xcb, 0xb7, 0x85, 0x63, 0xcd, 0x17, 0x8e, 0xf5, 0xb1, 0x70, 0xac,
	0xd9, 0xd2, 0x29, 0xcd, 0x97, 0x4e, 0xe9, 0x7d, 0xe9, 0x94, 0xee, 0x2b, 0x72, 0xe0, 0x11, 0x36,
	0x50, 0xc4, 0xe5, 0x13, 0xea, 0x09, 0x3a, 0x12, 0x2e, 0x37, 0xbc, 0xfe, 0xee, 0x56, 0xf8, 0xb6,
	0xcf, 0xbf, 0x02, 0x00, 0x00, 0xff, 0xff, 0x20, 0x93, 0x23, 0x4c, 0xd8, 0x04, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// MsgClient is the client API for Msg service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type MsgClient interface {
	// CreateDeployment defines a method to create new deployment given proper inputs.
	CreateDeployment(ctx context.Context, in *MsgCreateDeployment, opts ...grpc.CallOption) (*MsgCreateDeploymentResponse, error)
	// DepositDeployment deposits more funds into the deployment account
	DepositDeployment(ctx context.Context, in *v1.MsgDepositDeployment, opts ...grpc.CallOption) (*v1.MsgDepositDeploymentResponse, error)
	// UpdateDeployment defines a method to update a deployment given proper inputs.
	UpdateDeployment(ctx context.Context, in *MsgUpdateDeployment, opts ...grpc.CallOption) (*MsgUpdateDeploymentResponse, error)
	// CloseDeployment defines a method to close a deployment given proper inputs.
	CloseDeployment(ctx context.Context, in *MsgCloseDeployment, opts ...grpc.CallOption) (*MsgCloseDeploymentResponse, error)
	// CloseGroup defines a method to close a group of a deployment given proper inputs.
	CloseGroup(ctx context.Context, in *MsgCloseGroup, opts ...grpc.CallOption) (*MsgCloseGroupResponse, error)
	// PauseGroup defines a method to close a group of a deployment given proper inputs.
	PauseGroup(ctx context.Context, in *MsgPauseGroup, opts ...grpc.CallOption) (*MsgPauseGroupResponse, error)
	// StartGroup defines a method to close a group of a deployment given proper inputs.
	StartGroup(ctx context.Context, in *MsgStartGroup, opts ...grpc.CallOption) (*MsgStartGroupResponse, error)
	// UpdateParams defines a governance operation for updating the x/deployment module
	// parameters. The authority is hard-coded to the x/gov module account.
	//
	// Since: akash v1.0.0
	UpdateParams(ctx context.Context, in *MsgUpdateParams, opts ...grpc.CallOption) (*MsgUpdateParamsResponse, error)
}

type msgClient struct {
	cc grpc1.ClientConn
}

func NewMsgClient(cc grpc1.ClientConn) MsgClient {
	return &msgClient{cc}
}

func (c *msgClient) CreateDeployment(ctx context.Context, in *MsgCreateDeployment, opts ...grpc.CallOption) (*MsgCreateDeploymentResponse, error) {
	out := new(MsgCreateDeploymentResponse)
	err := c.cc.Invoke(ctx, "/akash.deployment.v1beta4.Msg/CreateDeployment", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *msgClient) DepositDeployment(ctx context.Context, in *v1.MsgDepositDeployment, opts ...grpc.CallOption) (*v1.MsgDepositDeploymentResponse, error) {
	out := new(v1.MsgDepositDeploymentResponse)
	err := c.cc.Invoke(ctx, "/akash.deployment.v1beta4.Msg/DepositDeployment", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *msgClient) UpdateDeployment(ctx context.Context, in *MsgUpdateDeployment, opts ...grpc.CallOption) (*MsgUpdateDeploymentResponse, error) {
	out := new(MsgUpdateDeploymentResponse)
	err := c.cc.Invoke(ctx, "/akash.deployment.v1beta4.Msg/UpdateDeployment", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *msgClient) CloseDeployment(ctx context.Context, in *MsgCloseDeployment, opts ...grpc.CallOption) (*MsgCloseDeploymentResponse, error) {
	out := new(MsgCloseDeploymentResponse)
	err := c.cc.Invoke(ctx, "/akash.deployment.v1beta4.Msg/CloseDeployment", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *msgClient) CloseGroup(ctx context.Context, in *MsgCloseGroup, opts ...grpc.CallOption) (*MsgCloseGroupResponse, error) {
	out := new(MsgCloseGroupResponse)
	err := c.cc.Invoke(ctx, "/akash.deployment.v1beta4.Msg/CloseGroup", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *msgClient) PauseGroup(ctx context.Context, in *MsgPauseGroup, opts ...grpc.CallOption) (*MsgPauseGroupResponse, error) {
	out := new(MsgPauseGroupResponse)
	err := c.cc.Invoke(ctx, "/akash.deployment.v1beta4.Msg/PauseGroup", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *msgClient) StartGroup(ctx context.Context, in *MsgStartGroup, opts ...grpc.CallOption) (*MsgStartGroupResponse, error) {
	out := new(MsgStartGroupResponse)
	err := c.cc.Invoke(ctx, "/akash.deployment.v1beta4.Msg/StartGroup", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *msgClient) UpdateParams(ctx context.Context, in *MsgUpdateParams, opts ...grpc.CallOption) (*MsgUpdateParamsResponse, error) {
	out := new(MsgUpdateParamsResponse)
	err := c.cc.Invoke(ctx, "/akash.deployment.v1beta4.Msg/UpdateParams", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// MsgServer is the server API for Msg service.
type MsgServer interface {
	// CreateDeployment defines a method to create new deployment given proper inputs.
	CreateDeployment(context.Context, *MsgCreateDeployment) (*MsgCreateDeploymentResponse, error)
	// DepositDeployment deposits more funds into the deployment account
	DepositDeployment(context.Context, *v1.MsgDepositDeployment) (*v1.MsgDepositDeploymentResponse, error)
	// UpdateDeployment defines a method to update a deployment given proper inputs.
	UpdateDeployment(context.Context, *MsgUpdateDeployment) (*MsgUpdateDeploymentResponse, error)
	// CloseDeployment defines a method to close a deployment given proper inputs.
	CloseDeployment(context.Context, *MsgCloseDeployment) (*MsgCloseDeploymentResponse, error)
	// CloseGroup defines a method to close a group of a deployment given proper inputs.
	CloseGroup(context.Context, *MsgCloseGroup) (*MsgCloseGroupResponse, error)
	// PauseGroup defines a method to close a group of a deployment given proper inputs.
	PauseGroup(context.Context, *MsgPauseGroup) (*MsgPauseGroupResponse, error)
	// StartGroup defines a method to close a group of a deployment given proper inputs.
	StartGroup(context.Context, *MsgStartGroup) (*MsgStartGroupResponse, error)
	// UpdateParams defines a governance operation for updating the x/deployment module
	// parameters. The authority is hard-coded to the x/gov module account.
	//
	// Since: akash v1.0.0
	UpdateParams(context.Context, *MsgUpdateParams) (*MsgUpdateParamsResponse, error)
}

// UnimplementedMsgServer can be embedded to have forward compatible implementations.
type UnimplementedMsgServer struct {
}

func (*UnimplementedMsgServer) CreateDeployment(ctx context.Context, req *MsgCreateDeployment) (*MsgCreateDeploymentResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateDeployment not implemented")
}
func (*UnimplementedMsgServer) DepositDeployment(ctx context.Context, req *v1.MsgDepositDeployment) (*v1.MsgDepositDeploymentResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DepositDeployment not implemented")
}
func (*UnimplementedMsgServer) UpdateDeployment(ctx context.Context, req *MsgUpdateDeployment) (*MsgUpdateDeploymentResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateDeployment not implemented")
}
func (*UnimplementedMsgServer) CloseDeployment(ctx context.Context, req *MsgCloseDeployment) (*MsgCloseDeploymentResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CloseDeployment not implemented")
}
func (*UnimplementedMsgServer) CloseGroup(ctx context.Context, req *MsgCloseGroup) (*MsgCloseGroupResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CloseGroup not implemented")
}
func (*UnimplementedMsgServer) PauseGroup(ctx context.Context, req *MsgPauseGroup) (*MsgPauseGroupResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method PauseGroup not implemented")
}
func (*UnimplementedMsgServer) StartGroup(ctx context.Context, req *MsgStartGroup) (*MsgStartGroupResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method StartGroup not implemented")
}
func (*UnimplementedMsgServer) UpdateParams(ctx context.Context, req *MsgUpdateParams) (*MsgUpdateParamsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateParams not implemented")
}

func RegisterMsgServer(s grpc1.Server, srv MsgServer) {
	s.RegisterService(&_Msg_serviceDesc, srv)
}

func _Msg_CreateDeployment_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MsgCreateDeployment)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MsgServer).CreateDeployment(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/akash.deployment.v1beta4.Msg/CreateDeployment",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MsgServer).CreateDeployment(ctx, req.(*MsgCreateDeployment))
	}
	return interceptor(ctx, in, info, handler)
}

func _Msg_DepositDeployment_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(v1.MsgDepositDeployment)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MsgServer).DepositDeployment(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/akash.deployment.v1beta4.Msg/DepositDeployment",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MsgServer).DepositDeployment(ctx, req.(*v1.MsgDepositDeployment))
	}
	return interceptor(ctx, in, info, handler)
}

func _Msg_UpdateDeployment_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MsgUpdateDeployment)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MsgServer).UpdateDeployment(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/akash.deployment.v1beta4.Msg/UpdateDeployment",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MsgServer).UpdateDeployment(ctx, req.(*MsgUpdateDeployment))
	}
	return interceptor(ctx, in, info, handler)
}

func _Msg_CloseDeployment_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MsgCloseDeployment)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MsgServer).CloseDeployment(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/akash.deployment.v1beta4.Msg/CloseDeployment",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MsgServer).CloseDeployment(ctx, req.(*MsgCloseDeployment))
	}
	return interceptor(ctx, in, info, handler)
}

func _Msg_CloseGroup_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MsgCloseGroup)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MsgServer).CloseGroup(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/akash.deployment.v1beta4.Msg/CloseGroup",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MsgServer).CloseGroup(ctx, req.(*MsgCloseGroup))
	}
	return interceptor(ctx, in, info, handler)
}

func _Msg_PauseGroup_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MsgPauseGroup)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MsgServer).PauseGroup(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/akash.deployment.v1beta4.Msg/PauseGroup",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MsgServer).PauseGroup(ctx, req.(*MsgPauseGroup))
	}
	return interceptor(ctx, in, info, handler)
}

func _Msg_StartGroup_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MsgStartGroup)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MsgServer).StartGroup(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/akash.deployment.v1beta4.Msg/StartGroup",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MsgServer).StartGroup(ctx, req.(*MsgStartGroup))
	}
	return interceptor(ctx, in, info, handler)
}

func _Msg_UpdateParams_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MsgUpdateParams)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MsgServer).UpdateParams(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/akash.deployment.v1beta4.Msg/UpdateParams",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MsgServer).UpdateParams(ctx, req.(*MsgUpdateParams))
	}
	return interceptor(ctx, in, info, handler)
}

var _Msg_serviceDesc = grpc.ServiceDesc{
	ServiceName: "akash.deployment.v1beta4.Msg",
	HandlerType: (*MsgServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CreateDeployment",
			Handler:    _Msg_CreateDeployment_Handler,
		},
		{
			MethodName: "DepositDeployment",
			Handler:    _Msg_DepositDeployment_Handler,
		},
		{
			MethodName: "UpdateDeployment",
			Handler:    _Msg_UpdateDeployment_Handler,
		},
		{
			MethodName: "CloseDeployment",
			Handler:    _Msg_CloseDeployment_Handler,
		},
		{
			MethodName: "CloseGroup",
			Handler:    _Msg_CloseGroup_Handler,
		},
		{
			MethodName: "PauseGroup",
			Handler:    _Msg_PauseGroup_Handler,
		},
		{
			MethodName: "StartGroup",
			Handler:    _Msg_StartGroup_Handler,
		},
		{
			MethodName: "UpdateParams",
			Handler:    _Msg_UpdateParams_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "akash/deployment/v1beta4/service.proto",
}
