// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: akash/market/v1/lease.proto

package v1

import (
	fmt "fmt"
	_ "github.com/cosmos/cosmos-proto"
	types "github.com/cosmos/cosmos-sdk/types"
	_ "github.com/cosmos/gogoproto/gogoproto"
	proto "github.com/cosmos/gogoproto/proto"
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

// State is an enum which refers to state of lease.
type Lease_State int32

const (
	// Prefix should start with 0 in enum. So declaring dummy state.
	LeaseStateInvalid Lease_State = 0
	// LeaseActive denotes state for lease active.
	LeaseActive Lease_State = 1
	// LeaseInsufficientFunds denotes state for lease insufficient_funds.
	LeaseInsufficientFunds Lease_State = 2
	// LeaseClosed denotes state for lease closed.
	LeaseClosed Lease_State = 3
)

var Lease_State_name = map[int32]string{
	0: "invalid",
	1: "active",
	2: "insufficient_funds",
	3: "closed",
}

var Lease_State_value = map[string]int32{
	"invalid":            0,
	"active":             1,
	"insufficient_funds": 2,
	"closed":             3,
}

func (x Lease_State) String() string {
	return proto.EnumName(Lease_State_name, int32(x))
}

func (Lease_State) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_122c076f440f07dc, []int{1, 0}
}

// LeaseID stores bid details of lease.
type LeaseID struct {
	// Owner is the account bech32 address of the user who owns the deployment.
	// It is a string representing a valid bech32 account address.
	//
	// Example:
	//   "akash1..."
	Owner string `protobuf:"bytes,1,opt,name=owner,proto3" json:"owner" yaml:"owner"`
	// Dseq (deployment sequence number) is a unique numeric identifier for the deployment.
	// It is used to differentiate deployments created by the same owner.
	DSeq uint64 `protobuf:"varint,2,opt,name=dseq,proto3" json:"dseq" yaml:"dseq"`
	// Gseq (group sequence number) is a unique numeric identifier for the group.
	// It is used to differentiate groups created by the same owner in a deployment.
	GSeq uint32 `protobuf:"varint,3,opt,name=gseq,proto3" json:"gseq" yaml:"gseq"`
	// Oseq (order sequence) distinguishes multiple orders associated with a single deployment.
	// Oseq is incremented when a lease associated with an existing deployment is closed, and a new order is generated.
	OSeq uint32 `protobuf:"varint,4,opt,name=oseq,proto3" json:"oseq" yaml:"oseq"`
	// Provider is the account bech32 address of the provider making the bid.
	// It is a string representing a valid account bech32 address.
	//
	// Example:
	//   "akash1..."
	Provider string `protobuf:"bytes,5,opt,name=provider,proto3" json:"provider" yaml:"provider"`
}

func (m *LeaseID) Reset()      { *m = LeaseID{} }
func (*LeaseID) ProtoMessage() {}
func (*LeaseID) Descriptor() ([]byte, []int) {
	return fileDescriptor_122c076f440f07dc, []int{0}
}
func (m *LeaseID) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *LeaseID) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_LeaseID.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *LeaseID) XXX_Merge(src proto.Message) {
	xxx_messageInfo_LeaseID.Merge(m, src)
}
func (m *LeaseID) XXX_Size() int {
	return m.Size()
}
func (m *LeaseID) XXX_DiscardUnknown() {
	xxx_messageInfo_LeaseID.DiscardUnknown(m)
}

var xxx_messageInfo_LeaseID proto.InternalMessageInfo

func (m *LeaseID) GetOwner() string {
	if m != nil {
		return m.Owner
	}
	return ""
}

func (m *LeaseID) GetDSeq() uint64 {
	if m != nil {
		return m.DSeq
	}
	return 0
}

func (m *LeaseID) GetGSeq() uint32 {
	if m != nil {
		return m.GSeq
	}
	return 0
}

func (m *LeaseID) GetOSeq() uint32 {
	if m != nil {
		return m.OSeq
	}
	return 0
}

func (m *LeaseID) GetProvider() string {
	if m != nil {
		return m.Provider
	}
	return ""
}

// Lease stores LeaseID, state of lease and price.
// The Lease defines the terms under which the provider allocates resources to fulfill
// the tenant's deployment requirements.
// Leases are paid from the tenant to the provider through a deposit and withdraw mechanism and are priced in blocks.
type Lease struct {
	// Id is the unique identifier of the Lease.
	ID LeaseID `protobuf:"bytes,1,opt,name=id,proto3" json:"id" yaml:"id"`
	// State represents the state of the Lease.
	State Lease_State `protobuf:"varint,2,opt,name=state,proto3,enum=akash.market.v1.Lease_State" json:"state" yaml:"state"`
	// Price holds the settled price for the Lease.
	Price types.DecCoin `protobuf:"bytes,3,opt,name=price,proto3" json:"price" yaml:"price"`
	// CreatedAt is the block height at which the Lease was created.
	CreatedAt int64 `protobuf:"varint,4,opt,name=created_at,json=createdAt,proto3" json:"created_at" yaml:"created_at"`
	// ClosedOn is the block height at which the Lease was closed.
	ClosedOn int64 `protobuf:"varint,5,opt,name=closed_on,json=closedOn,proto3" json:"closed_on" yaml:"closed_on"`
}

func (m *Lease) Reset()      { *m = Lease{} }
func (*Lease) ProtoMessage() {}
func (*Lease) Descriptor() ([]byte, []int) {
	return fileDescriptor_122c076f440f07dc, []int{1}
}
func (m *Lease) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Lease) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Lease.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Lease) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Lease.Merge(m, src)
}
func (m *Lease) XXX_Size() int {
	return m.Size()
}
func (m *Lease) XXX_DiscardUnknown() {
	xxx_messageInfo_Lease.DiscardUnknown(m)
}

var xxx_messageInfo_Lease proto.InternalMessageInfo

func (m *Lease) GetID() LeaseID {
	if m != nil {
		return m.ID
	}
	return LeaseID{}
}

func (m *Lease) GetState() Lease_State {
	if m != nil {
		return m.State
	}
	return LeaseStateInvalid
}

func (m *Lease) GetPrice() types.DecCoin {
	if m != nil {
		return m.Price
	}
	return types.DecCoin{}
}

func (m *Lease) GetCreatedAt() int64 {
	if m != nil {
		return m.CreatedAt
	}
	return 0
}

func (m *Lease) GetClosedOn() int64 {
	if m != nil {
		return m.ClosedOn
	}
	return 0
}

func init() {
	proto.RegisterEnum("akash.market.v1.Lease_State", Lease_State_name, Lease_State_value)
	proto.RegisterType((*LeaseID)(nil), "akash.market.v1.LeaseID")
	proto.RegisterType((*Lease)(nil), "akash.market.v1.Lease")
}

func init() { proto.RegisterFile("akash/market/v1/lease.proto", fileDescriptor_122c076f440f07dc) }

var fileDescriptor_122c076f440f07dc = []byte{
	// 647 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x74, 0x94, 0x41, 0x4f, 0xdb, 0x30,
	0x14, 0xc7, 0x93, 0xb4, 0x05, 0xea, 0x6e, 0xa3, 0x44, 0x6c, 0x2a, 0x01, 0xe2, 0x2e, 0xbb, 0x70,
	0x59, 0xa2, 0x96, 0x03, 0x12, 0x87, 0x49, 0x84, 0x6a, 0x08, 0x69, 0x13, 0x5a, 0x7a, 0xdb, 0xa5,
	0x32, 0xb1, 0xc9, 0xac, 0x96, 0xb8, 0x24, 0x21, 0xd3, 0xbe, 0xc1, 0xc4, 0x69, 0xc7, 0x5d, 0xd0,
	0xd0, 0xf6, 0x15, 0xf6, 0x21, 0x38, 0xa2, 0x9d, 0x76, 0xb2, 0xa6, 0x72, 0x99, 0x7a, 0xec, 0x27,
	0x98, 0x6c, 0x07, 0x02, 0xd3, 0x76, 0xaa, 0xdf, 0xff, 0xff, 0x7e, 0xcf, 0xf6, 0x7b, 0x6e, 0xc0,
	0x2a, 0x1a, 0xa2, 0xf4, 0x9d, 0x77, 0x8c, 0x92, 0x21, 0xc9, 0xbc, 0xbc, 0xe3, 0x8d, 0x08, 0x4a,
	0x89, 0x3b, 0x4e, 0x58, 0xc6, 0xcc, 0x45, 0x69, 0xba, 0xca, 0x74, 0xf3, 0x8e, 0xb5, 0x1c, 0xb1,
	0x88, 0x49, 0xcf, 0x13, 0x2b, 0x95, 0x66, 0xad, 0x84, 0x2c, 0x3d, 0x66, 0xe9, 0x40, 0x19, 0x2a,
	0x28, 0x2c, 0x5b, 0x45, 0xde, 0x21, 0x4a, 0x89, 0x97, 0x77, 0x0e, 0x49, 0x86, 0x3a, 0x5e, 0xc8,
	0x68, 0xac, 0x7c, 0xe7, 0xca, 0x00, 0xf3, 0xaf, 0xc4, 0x8e, 0xfb, 0x3d, 0x73, 0x0f, 0xd4, 0xd8,
	0xfb, 0x98, 0x24, 0x2d, 0xbd, 0xad, 0x6f, 0xd4, 0xfd, 0xce, 0x94, 0x43, 0x25, 0xcc, 0x38, 0x7c,
	0xf0, 0x01, 0x1d, 0x8f, 0xb6, 0x1d, 0x19, 0x3a, 0x3f, 0xbe, 0x3f, 0x5f, 0x2e, 0x76, 0xd9, 0xc1,
	0x38, 0x21, 0x69, 0xda, 0xcf, 0x12, 0x1a, 0x47, 0x81, 0x4a, 0x37, 0x37, 0x41, 0x15, 0xa7, 0xe4,
	0xa4, 0x65, 0xb4, 0xf5, 0x8d, 0xaa, 0x0f, 0x27, 0x1c, 0x56, 0x7b, 0x7d, 0x72, 0x32, 0xe5, 0x50,
	0xea, 0x33, 0x0e, 0x1b, 0xaa, 0x9c, 0x88, 0x9c, 0x40, 0x8a, 0x02, 0x8a, 0x04, 0x54, 0x69, 0xeb,
	0x1b, 0x0f, 0x15, 0xb4, 0x57, 0x40, 0xd1, 0x3d, 0x28, 0x52, 0x50, 0x54, 0x40, 0x4c, 0x40, 0xd5,
	0x12, 0x3a, 0x28, 0x20, 0x76, 0x0f, 0x62, 0x0a, 0x12, 0x3f, 0x66, 0x1f, 0x2c, 0x8c, 0x13, 0x96,
	0x53, 0x4c, 0x92, 0x56, 0x4d, 0x5e, 0x75, 0x6b, 0xca, 0xe1, 0xad, 0x36, 0xe3, 0x70, 0x51, 0x41,
	0x37, 0xca, 0xff, 0x2f, 0x7c, 0x0b, 0x6d, 0x2f, 0x7c, 0xbe, 0x80, 0xda, 0xef, 0x0b, 0xa8, 0x39,
	0x5f, 0xab, 0xa0, 0x26, 0x5b, 0x6a, 0xee, 0x01, 0x83, 0x62, 0xd9, 0xcd, 0x46, 0xb7, 0xe5, 0xfe,
	0x35, 0x4b, 0xb7, 0x68, 0xbb, 0xbf, 0x7e, 0xc9, 0xa1, 0x36, 0xe1, 0xd0, 0xd8, 0xef, 0x4d, 0x39,
	0x34, 0x28, 0x9e, 0x71, 0x58, 0x57, 0x07, 0xa0, 0xd8, 0x09, 0x0c, 0x8a, 0xcd, 0xd7, 0xa0, 0x96,
	0x66, 0x28, 0x23, 0xb2, 0xa3, 0x8f, 0xba, 0x6b, 0xff, 0xae, 0xe5, 0xf6, 0x45, 0x8e, 0xbf, 0x22,
	0xe6, 0x26, 0xd3, 0xcb, 0xb9, 0xc9, 0xd0, 0x09, 0x94, 0x6c, 0xbe, 0x01, 0xb5, 0x71, 0x42, 0x43,
	0x22, 0x7b, 0xdd, 0xe8, 0xae, 0xb9, 0xc5, 0xdd, 0xc4, 0x23, 0x71, 0x8b, 0x47, 0xe2, 0xf6, 0x48,
	0xb8, 0xcb, 0x68, 0xac, 0x8e, 0x27, 0x4a, 0x4a, 0xa4, 0x2c, 0x29, 0x43, 0x27, 0x50, 0xb2, 0xe9,
	0x03, 0x10, 0x26, 0x04, 0x65, 0x04, 0x0f, 0x50, 0x26, 0xc7, 0x51, 0xf1, 0x9f, 0x4d, 0x39, 0xbc,
	0xa3, 0xce, 0x38, 0x5c, 0x52, 0x68, 0xa9, 0x39, 0x41, 0xbd, 0x08, 0x76, 0x32, 0xf3, 0x05, 0xa8,
	0x87, 0x23, 0x96, 0x12, 0x3c, 0x60, 0xb1, 0x1c, 0x4c, 0xc5, 0x7f, 0x3a, 0xe5, 0xb0, 0x14, 0x67,
	0x1c, 0x36, 0x8b, 0x0a, 0x37, 0x92, 0x13, 0x2c, 0xa8, 0xf5, 0x41, 0xec, 0x7c, 0xd1, 0x41, 0x4d,
	0xb6, 0xc0, 0x74, 0xc0, 0x3c, 0x8d, 0x73, 0x34, 0xa2, 0xb8, 0xa9, 0x59, 0x8f, 0xcf, 0xce, 0xdb,
	0x4b, 0xb2, 0x41, 0xd2, 0xdc, 0x57, 0x86, 0xb9, 0x0a, 0xe6, 0x50, 0x98, 0xd1, 0x9c, 0x34, 0x75,
	0x6b, 0xf1, 0xec, 0xbc, 0xdd, 0x90, 0x29, 0x3b, 0x52, 0x32, 0xbb, 0xc0, 0xa4, 0x71, 0x7a, 0x7a,
	0x74, 0x44, 0x43, 0x4a, 0xe2, 0x6c, 0x70, 0x74, 0x1a, 0xe3, 0xb4, 0x69, 0x58, 0xd6, 0xd9, 0x79,
	0xfb, 0x89, 0x1a, 0xdc, 0x1d, 0xfb, 0xa5, 0x70, 0x45, 0x41, 0x75, 0x94, 0x66, 0xe5, 0x4e, 0xc1,
	0x5d, 0x29, 0x59, 0xd5, 0x8f, 0xdf, 0x6c, 0xad, 0x7c, 0x24, 0xfe, 0xd6, 0xe5, 0xc4, 0xd6, 0xaf,
	0x26, 0xb6, 0xfe, 0x6b, 0x62, 0xeb, 0x9f, 0xae, 0x6d, 0xed, 0xea, 0xda, 0xd6, 0x7e, 0x5e, 0xdb,
	0xda, 0xdb, 0xf5, 0xf1, 0x30, 0x72, 0xd1, 0x30, 0x73, 0x31, 0xc9, 0xbd, 0x88, 0x79, 0x31, 0xc3,
	0xa4, 0xfc, 0x3c, 0x1c, 0xce, 0xc9, 0xff, 0xed, 0xe6, 0x9f, 0x00, 0x00, 0x00, 0xff, 0xff, 0xcb,
	0x76, 0xed, 0x4c, 0x38, 0x04, 0x00, 0x00,
}

func (m *LeaseID) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *LeaseID) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *LeaseID) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Provider) > 0 {
		i -= len(m.Provider)
		copy(dAtA[i:], m.Provider)
		i = encodeVarintLease(dAtA, i, uint64(len(m.Provider)))
		i--
		dAtA[i] = 0x2a
	}
	if m.OSeq != 0 {
		i = encodeVarintLease(dAtA, i, uint64(m.OSeq))
		i--
		dAtA[i] = 0x20
	}
	if m.GSeq != 0 {
		i = encodeVarintLease(dAtA, i, uint64(m.GSeq))
		i--
		dAtA[i] = 0x18
	}
	if m.DSeq != 0 {
		i = encodeVarintLease(dAtA, i, uint64(m.DSeq))
		i--
		dAtA[i] = 0x10
	}
	if len(m.Owner) > 0 {
		i -= len(m.Owner)
		copy(dAtA[i:], m.Owner)
		i = encodeVarintLease(dAtA, i, uint64(len(m.Owner)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *Lease) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Lease) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Lease) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.ClosedOn != 0 {
		i = encodeVarintLease(dAtA, i, uint64(m.ClosedOn))
		i--
		dAtA[i] = 0x28
	}
	if m.CreatedAt != 0 {
		i = encodeVarintLease(dAtA, i, uint64(m.CreatedAt))
		i--
		dAtA[i] = 0x20
	}
	{
		size, err := m.Price.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintLease(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0x1a
	if m.State != 0 {
		i = encodeVarintLease(dAtA, i, uint64(m.State))
		i--
		dAtA[i] = 0x10
	}
	{
		size, err := m.ID.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintLease(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0xa
	return len(dAtA) - i, nil
}

func encodeVarintLease(dAtA []byte, offset int, v uint64) int {
	offset -= sovLease(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *LeaseID) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Owner)
	if l > 0 {
		n += 1 + l + sovLease(uint64(l))
	}
	if m.DSeq != 0 {
		n += 1 + sovLease(uint64(m.DSeq))
	}
	if m.GSeq != 0 {
		n += 1 + sovLease(uint64(m.GSeq))
	}
	if m.OSeq != 0 {
		n += 1 + sovLease(uint64(m.OSeq))
	}
	l = len(m.Provider)
	if l > 0 {
		n += 1 + l + sovLease(uint64(l))
	}
	return n
}

func (m *Lease) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = m.ID.Size()
	n += 1 + l + sovLease(uint64(l))
	if m.State != 0 {
		n += 1 + sovLease(uint64(m.State))
	}
	l = m.Price.Size()
	n += 1 + l + sovLease(uint64(l))
	if m.CreatedAt != 0 {
		n += 1 + sovLease(uint64(m.CreatedAt))
	}
	if m.ClosedOn != 0 {
		n += 1 + sovLease(uint64(m.ClosedOn))
	}
	return n
}

func sovLease(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozLease(x uint64) (n int) {
	return sovLease(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *LeaseID) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowLease
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
			return fmt.Errorf("proto: LeaseID: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: LeaseID: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Owner", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowLease
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
				return ErrInvalidLengthLease
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthLease
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Owner = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field DSeq", wireType)
			}
			m.DSeq = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowLease
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.DSeq |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 3:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field GSeq", wireType)
			}
			m.GSeq = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowLease
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.GSeq |= uint32(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 4:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field OSeq", wireType)
			}
			m.OSeq = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowLease
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.OSeq |= uint32(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Provider", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowLease
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
				return ErrInvalidLengthLease
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthLease
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Provider = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipLease(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthLease
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
func (m *Lease) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowLease
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
			return fmt.Errorf("proto: Lease: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Lease: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ID", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowLease
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
				return ErrInvalidLengthLease
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthLease
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.ID.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 2:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field State", wireType)
			}
			m.State = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowLease
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.State |= Lease_State(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Price", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowLease
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
				return ErrInvalidLengthLease
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthLease
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.Price.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 4:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field CreatedAt", wireType)
			}
			m.CreatedAt = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowLease
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.CreatedAt |= int64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 5:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field ClosedOn", wireType)
			}
			m.ClosedOn = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowLease
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.ClosedOn |= int64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		default:
			iNdEx = preIndex
			skippy, err := skipLease(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthLease
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
func skipLease(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowLease
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
					return 0, ErrIntOverflowLease
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
					return 0, ErrIntOverflowLease
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
				return 0, ErrInvalidLengthLease
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupLease
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthLease
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthLease        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowLease          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupLease = fmt.Errorf("proto: unexpected end of group")
)
