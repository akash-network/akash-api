// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: akash/provider/v1beta4/query.proto

package v1beta4

import (
	context "context"
	fmt "fmt"
	query "github.com/cosmos/cosmos-sdk/types/query"
	_ "github.com/cosmos/gogoproto/gogoproto"
	grpc1 "github.com/cosmos/gogoproto/grpc"
	proto "github.com/cosmos/gogoproto/proto"
	_ "google.golang.org/genproto/googleapis/api/annotations"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	io "io"
	math "math"
	math_bits "math/bits"
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

// QueryProvidersRequest is request type for the Query/Providers RPC method
type QueryProvidersRequest struct {
	Pagination *query.PageRequest `protobuf:"bytes,1,opt,name=pagination,proto3" json:"pagination,omitempty"`
}

func (m *QueryProvidersRequest) Reset()         { *m = QueryProvidersRequest{} }
func (m *QueryProvidersRequest) String() string { return proto.CompactTextString(m) }
func (*QueryProvidersRequest) ProtoMessage()    {}
func (*QueryProvidersRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_fc667e24f0c91e71, []int{0}
}
func (m *QueryProvidersRequest) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *QueryProvidersRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_QueryProvidersRequest.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *QueryProvidersRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_QueryProvidersRequest.Merge(m, src)
}
func (m *QueryProvidersRequest) XXX_Size() int {
	return m.Size()
}
func (m *QueryProvidersRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_QueryProvidersRequest.DiscardUnknown(m)
}

var xxx_messageInfo_QueryProvidersRequest proto.InternalMessageInfo

func (m *QueryProvidersRequest) GetPagination() *query.PageRequest {
	if m != nil {
		return m.Pagination
	}
	return nil
}

// QueryProvidersResponse is response type for the Query/Providers RPC method
type QueryProvidersResponse struct {
	Providers  Providers           `protobuf:"bytes,1,rep,name=providers,proto3,castrepeated=Providers" json:"providers"`
	Pagination *query.PageResponse `protobuf:"bytes,2,opt,name=pagination,proto3" json:"pagination,omitempty"`
}

func (m *QueryProvidersResponse) Reset()         { *m = QueryProvidersResponse{} }
func (m *QueryProvidersResponse) String() string { return proto.CompactTextString(m) }
func (*QueryProvidersResponse) ProtoMessage()    {}
func (*QueryProvidersResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_fc667e24f0c91e71, []int{1}
}
func (m *QueryProvidersResponse) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *QueryProvidersResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_QueryProvidersResponse.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *QueryProvidersResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_QueryProvidersResponse.Merge(m, src)
}
func (m *QueryProvidersResponse) XXX_Size() int {
	return m.Size()
}
func (m *QueryProvidersResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_QueryProvidersResponse.DiscardUnknown(m)
}

var xxx_messageInfo_QueryProvidersResponse proto.InternalMessageInfo

func (m *QueryProvidersResponse) GetProviders() Providers {
	if m != nil {
		return m.Providers
	}
	return nil
}

func (m *QueryProvidersResponse) GetPagination() *query.PageResponse {
	if m != nil {
		return m.Pagination
	}
	return nil
}

// QueryProviderRequest is request type for the Query/Provider RPC method
type QueryProviderRequest struct {
	Owner string `protobuf:"bytes,1,opt,name=owner,proto3" json:"owner,omitempty"`
}

func (m *QueryProviderRequest) Reset()         { *m = QueryProviderRequest{} }
func (m *QueryProviderRequest) String() string { return proto.CompactTextString(m) }
func (*QueryProviderRequest) ProtoMessage()    {}
func (*QueryProviderRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_fc667e24f0c91e71, []int{2}
}
func (m *QueryProviderRequest) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *QueryProviderRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_QueryProviderRequest.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *QueryProviderRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_QueryProviderRequest.Merge(m, src)
}
func (m *QueryProviderRequest) XXX_Size() int {
	return m.Size()
}
func (m *QueryProviderRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_QueryProviderRequest.DiscardUnknown(m)
}

var xxx_messageInfo_QueryProviderRequest proto.InternalMessageInfo

func (m *QueryProviderRequest) GetOwner() string {
	if m != nil {
		return m.Owner
	}
	return ""
}

// QueryProviderResponse is response type for the Query/Provider RPC method
type QueryProviderResponse struct {
	Provider Provider `protobuf:"bytes,1,opt,name=provider,proto3" json:"provider"`
}

func (m *QueryProviderResponse) Reset()         { *m = QueryProviderResponse{} }
func (m *QueryProviderResponse) String() string { return proto.CompactTextString(m) }
func (*QueryProviderResponse) ProtoMessage()    {}
func (*QueryProviderResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_fc667e24f0c91e71, []int{3}
}
func (m *QueryProviderResponse) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *QueryProviderResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_QueryProviderResponse.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *QueryProviderResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_QueryProviderResponse.Merge(m, src)
}
func (m *QueryProviderResponse) XXX_Size() int {
	return m.Size()
}
func (m *QueryProviderResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_QueryProviderResponse.DiscardUnknown(m)
}

var xxx_messageInfo_QueryProviderResponse proto.InternalMessageInfo

func (m *QueryProviderResponse) GetProvider() Provider {
	if m != nil {
		return m.Provider
	}
	return Provider{}
}

func init() {
	proto.RegisterType((*QueryProvidersRequest)(nil), "akash.provider.v1beta4.QueryProvidersRequest")
	proto.RegisterType((*QueryProvidersResponse)(nil), "akash.provider.v1beta4.QueryProvidersResponse")
	proto.RegisterType((*QueryProviderRequest)(nil), "akash.provider.v1beta4.QueryProviderRequest")
	proto.RegisterType((*QueryProviderResponse)(nil), "akash.provider.v1beta4.QueryProviderResponse")
}

func init() {
	proto.RegisterFile("akash/provider/v1beta4/query.proto", fileDescriptor_fc667e24f0c91e71)
}

var fileDescriptor_fc667e24f0c91e71 = []byte{
	// 435 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x8c, 0x93, 0xb1, 0x6e, 0xda, 0x40,
	0x18, 0xc7, 0x7d, 0xb4, 0x54, 0x70, 0x4c, 0x3d, 0x51, 0x84, 0x50, 0x65, 0xa8, 0x51, 0x5b, 0x68,
	0xe1, 0x4e, 0xd0, 0xae, 0x5d, 0x18, 0xda, 0x15, 0x3c, 0xb6, 0x43, 0x75, 0x94, 0x93, 0x6b, 0x91,
	0xf8, 0x8c, 0xcf, 0x10, 0x45, 0x51, 0x96, 0x3c, 0x41, 0xa4, 0x28, 0x4b, 0x1e, 0x21, 0x73, 0xc6,
	0x3c, 0x00, 0x23, 0x52, 0x96, 0x4c, 0x49, 0x04, 0x79, 0x90, 0xc8, 0xe7, 0x33, 0x0e, 0x04, 0x64,
	0x36, 0xb0, 0x7f, 0xdf, 0xff, 0xfb, 0x7d, 0xdf, 0xf9, 0xa0, 0x41, 0x87, 0x54, 0xfc, 0x27, 0xae,
	0xc7, 0x27, 0xf6, 0x80, 0x79, 0x64, 0xd2, 0xea, 0x33, 0x9f, 0x7e, 0x27, 0xa3, 0x31, 0xf3, 0x0e,
	0xb1, 0xeb, 0x71, 0x9f, 0xa3, 0x82, 0x64, 0x70, 0xc4, 0x60, 0xc5, 0x94, 0xf2, 0x16, 0xb7, 0xb8,
	0x44, 0x48, 0xf0, 0x2b, 0xa4, 0x4b, 0xef, 0x2d, 0xce, 0xad, 0x3d, 0x46, 0xa8, 0x6b, 0x13, 0xea,
	0x38, 0xdc, 0xa7, 0xbe, 0xcd, 0x1d, 0xa1, 0xde, 0x7e, 0xf9, 0xc7, 0xc5, 0x3e, 0x17, 0xa4, 0x4f,
	0x05, 0x0b, 0x9b, 0xa8, 0x96, 0x2d, 0xe2, 0x52, 0xcb, 0x76, 0x24, 0xac, 0xd8, 0x8f, 0x5b, 0xdc,
	0x96, 0x22, 0x12, 0x33, 0xfe, 0xc2, 0x77, 0xbd, 0x20, 0xa8, 0xab, 0x1e, 0x0b, 0x93, 0x8d, 0xc6,
	0x4c, 0xf8, 0xe8, 0x27, 0x84, 0x71, 0x66, 0x11, 0x54, 0x40, 0x2d, 0xd7, 0xfe, 0x84, 0x43, 0x01,
	0x1c, 0x08, 0xe0, 0x70, 0x4a, 0x25, 0x80, 0xbb, 0xd4, 0x62, 0xaa, 0xd6, 0x7c, 0x56, 0x69, 0x5c,
	0x01, 0x58, 0x58, 0xef, 0x20, 0x5c, 0xee, 0x08, 0x86, 0x7a, 0x30, 0x1b, 0xd9, 0x88, 0x22, 0xa8,
	0xbc, 0xaa, 0xe5, 0xda, 0x15, 0xbc, 0x79, 0x5d, 0x38, 0xaa, 0xee, 0xbc, 0x9d, 0xde, 0x95, 0xb5,
	0xcb, 0xfb, 0x72, 0x36, 0xce, 0x8b, 0x53, 0xd0, 0xaf, 0x15, 0xeb, 0x94, 0xb4, 0xfe, 0x9c, 0x68,
	0x1d, 0xfa, 0xac, 0x68, 0x37, 0x60, 0x7e, 0xc5, 0x3a, 0x5a, 0x4b, 0x1e, 0xa6, 0xf9, 0x81, 0xc3,
	0x3c, 0xb9, 0x91, 0xac, 0x19, 0xfe, 0x31, 0xfe, 0xac, 0x6d, 0x71, 0x39, 0x62, 0x07, 0x66, 0x22,
	0x39, 0xb5, 0xc3, 0xe4, 0x09, 0x5f, 0x07, 0x13, 0x9a, 0xcb, 0xba, 0xf6, 0x75, 0x0a, 0xa6, 0x65,
	0x3a, 0x3a, 0x07, 0x30, 0x1e, 0x1b, 0x35, 0xb7, 0x25, 0x6d, 0x3c, 0xd0, 0x12, 0xde, 0x15, 0x0f,
	0xd5, 0x8d, 0xfa, 0xc9, 0xcd, 0xe3, 0x59, 0xaa, 0x8a, 0x3e, 0x90, 0x84, 0x2f, 0x49, 0xa0, 0x0b,
	0x00, 0x33, 0x51, 0x00, 0x6a, 0xec, 0xd4, 0x27, 0xb2, 0x6a, 0xee, 0x48, 0x2b, 0xa9, 0x96, 0x94,
	0xfa, 0x8a, 0xea, 0x89, 0x52, 0xe4, 0x48, 0x1e, 0xcd, 0x71, 0xe7, 0xc7, 0x74, 0xae, 0x83, 0xd9,
	0x5c, 0x07, 0x0f, 0x73, 0x1d, 0x9c, 0x2e, 0x74, 0x6d, 0xb6, 0xd0, 0xb5, 0xdb, 0x85, 0xae, 0xfd,
	0xae, 0xba, 0x43, 0x0b, 0xd3, 0xa1, 0x8f, 0xed, 0xe0, 0x0e, 0x12, 0x87, 0x0f, 0xd8, 0x8b, 0xc0,
	0xfe, 0x1b, 0x79, 0x4f, 0xbe, 0x3d, 0x05, 0x00, 0x00, 0xff, 0xff, 0xa2, 0xbb, 0x2d, 0x88, 0xec,
	0x03, 0x00, 0x00,
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
	// Providers queries providers
	Providers(ctx context.Context, in *QueryProvidersRequest, opts ...grpc.CallOption) (*QueryProvidersResponse, error)
	// Provider queries provider details
	Provider(ctx context.Context, in *QueryProviderRequest, opts ...grpc.CallOption) (*QueryProviderResponse, error)
}

type queryClient struct {
	cc grpc1.ClientConn
}

func NewQueryClient(cc grpc1.ClientConn) QueryClient {
	return &queryClient{cc}
}

func (c *queryClient) Providers(ctx context.Context, in *QueryProvidersRequest, opts ...grpc.CallOption) (*QueryProvidersResponse, error) {
	out := new(QueryProvidersResponse)
	err := c.cc.Invoke(ctx, "/akash.provider.v1beta4.Query/Providers", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *queryClient) Provider(ctx context.Context, in *QueryProviderRequest, opts ...grpc.CallOption) (*QueryProviderResponse, error) {
	out := new(QueryProviderResponse)
	err := c.cc.Invoke(ctx, "/akash.provider.v1beta4.Query/Provider", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// QueryServer is the server API for Query service.
type QueryServer interface {
	// Providers queries providers
	Providers(context.Context, *QueryProvidersRequest) (*QueryProvidersResponse, error)
	// Provider queries provider details
	Provider(context.Context, *QueryProviderRequest) (*QueryProviderResponse, error)
}

// UnimplementedQueryServer can be embedded to have forward compatible implementations.
type UnimplementedQueryServer struct {
}

func (*UnimplementedQueryServer) Providers(ctx context.Context, req *QueryProvidersRequest) (*QueryProvidersResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Providers not implemented")
}
func (*UnimplementedQueryServer) Provider(ctx context.Context, req *QueryProviderRequest) (*QueryProviderResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Provider not implemented")
}

func RegisterQueryServer(s grpc1.Server, srv QueryServer) {
	s.RegisterService(&_Query_serviceDesc, srv)
}

func _Query_Providers_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(QueryProvidersRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(QueryServer).Providers(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/akash.provider.v1beta4.Query/Providers",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(QueryServer).Providers(ctx, req.(*QueryProvidersRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Query_Provider_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(QueryProviderRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(QueryServer).Provider(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/akash.provider.v1beta4.Query/Provider",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(QueryServer).Provider(ctx, req.(*QueryProviderRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _Query_serviceDesc = grpc.ServiceDesc{
	ServiceName: "akash.provider.v1beta4.Query",
	HandlerType: (*QueryServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Providers",
			Handler:    _Query_Providers_Handler,
		},
		{
			MethodName: "Provider",
			Handler:    _Query_Provider_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "akash/provider/v1beta4/query.proto",
}

func (m *QueryProvidersRequest) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *QueryProvidersRequest) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *QueryProvidersRequest) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.Pagination != nil {
		{
			size, err := m.Pagination.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintQuery(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *QueryProvidersResponse) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *QueryProvidersResponse) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *QueryProvidersResponse) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.Pagination != nil {
		{
			size, err := m.Pagination.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintQuery(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x12
	}
	if len(m.Providers) > 0 {
		for iNdEx := len(m.Providers) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.Providers[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintQuery(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0xa
		}
	}
	return len(dAtA) - i, nil
}

func (m *QueryProviderRequest) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *QueryProviderRequest) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *QueryProviderRequest) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Owner) > 0 {
		i -= len(m.Owner)
		copy(dAtA[i:], m.Owner)
		i = encodeVarintQuery(dAtA, i, uint64(len(m.Owner)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *QueryProviderResponse) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *QueryProviderResponse) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *QueryProviderResponse) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	{
		size, err := m.Provider.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintQuery(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0xa
	return len(dAtA) - i, nil
}

func encodeVarintQuery(dAtA []byte, offset int, v uint64) int {
	offset -= sovQuery(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *QueryProvidersRequest) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Pagination != nil {
		l = m.Pagination.Size()
		n += 1 + l + sovQuery(uint64(l))
	}
	return n
}

func (m *QueryProvidersResponse) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if len(m.Providers) > 0 {
		for _, e := range m.Providers {
			l = e.Size()
			n += 1 + l + sovQuery(uint64(l))
		}
	}
	if m.Pagination != nil {
		l = m.Pagination.Size()
		n += 1 + l + sovQuery(uint64(l))
	}
	return n
}

func (m *QueryProviderRequest) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Owner)
	if l > 0 {
		n += 1 + l + sovQuery(uint64(l))
	}
	return n
}

func (m *QueryProviderResponse) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = m.Provider.Size()
	n += 1 + l + sovQuery(uint64(l))
	return n
}

func sovQuery(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozQuery(x uint64) (n int) {
	return sovQuery(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *QueryProvidersRequest) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowQuery
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: QueryProvidersRequest: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: QueryProvidersRequest: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Pagination", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthQuery
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthQuery
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.Pagination == nil {
				m.Pagination = &query.PageRequest{}
			}
			if err := m.Pagination.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipQuery(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthQuery
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *QueryProvidersResponse) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowQuery
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: QueryProvidersResponse: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: QueryProvidersResponse: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Providers", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthQuery
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthQuery
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Providers = append(m.Providers, Provider{})
			if err := m.Providers[len(m.Providers)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Pagination", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthQuery
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthQuery
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.Pagination == nil {
				m.Pagination = &query.PageResponse{}
			}
			if err := m.Pagination.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipQuery(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthQuery
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *QueryProviderRequest) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowQuery
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: QueryProviderRequest: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: QueryProviderRequest: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Owner", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthQuery
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthQuery
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Owner = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipQuery(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthQuery
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *QueryProviderResponse) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowQuery
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: QueryProviderResponse: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: QueryProviderResponse: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Provider", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthQuery
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthQuery
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.Provider.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipQuery(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthQuery
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipQuery(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowQuery
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowQuery
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowQuery
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthQuery
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupQuery
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthQuery
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthQuery        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowQuery          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupQuery = fmt.Errorf("proto: unexpected end of group")
)
