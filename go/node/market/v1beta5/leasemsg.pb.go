// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: akash/market/v1beta5/leasemsg.proto

package v1beta5

import (
	fmt "fmt"
	_ "github.com/cosmos/gogoproto/gogoproto"
	proto "github.com/cosmos/gogoproto/proto"
	io "io"
	math "math"
	math_bits "math/bits"
	v1 "pkg.akt.dev/go/node/market/v1"
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

// MsgCreateLease is sent to create a lease
type MsgCreateLease struct {
	BidID v1.BidID `protobuf:"bytes,1,opt,name=bid_id,json=bidId,proto3" json:"id" yaml:"id"`
}

func (m *MsgCreateLease) Reset()         { *m = MsgCreateLease{} }
func (m *MsgCreateLease) String() string { return proto.CompactTextString(m) }
func (*MsgCreateLease) ProtoMessage()    {}
func (*MsgCreateLease) Descriptor() ([]byte, []int) {
	return fileDescriptor_394bd78777079a40, []int{0}
}
func (m *MsgCreateLease) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *MsgCreateLease) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_MsgCreateLease.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *MsgCreateLease) XXX_Merge(src proto.Message) {
	xxx_messageInfo_MsgCreateLease.Merge(m, src)
}
func (m *MsgCreateLease) XXX_Size() int {
	return m.Size()
}
func (m *MsgCreateLease) XXX_DiscardUnknown() {
	xxx_messageInfo_MsgCreateLease.DiscardUnknown(m)
}

var xxx_messageInfo_MsgCreateLease proto.InternalMessageInfo

func (m *MsgCreateLease) GetBidID() v1.BidID {
	if m != nil {
		return m.BidID
	}
	return v1.BidID{}
}

// MsgCreateLeaseResponse is the response from creating a lease
type MsgCreateLeaseResponse struct {
}

func (m *MsgCreateLeaseResponse) Reset()         { *m = MsgCreateLeaseResponse{} }
func (m *MsgCreateLeaseResponse) String() string { return proto.CompactTextString(m) }
func (*MsgCreateLeaseResponse) ProtoMessage()    {}
func (*MsgCreateLeaseResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_394bd78777079a40, []int{1}
}
func (m *MsgCreateLeaseResponse) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *MsgCreateLeaseResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_MsgCreateLeaseResponse.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *MsgCreateLeaseResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_MsgCreateLeaseResponse.Merge(m, src)
}
func (m *MsgCreateLeaseResponse) XXX_Size() int {
	return m.Size()
}
func (m *MsgCreateLeaseResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_MsgCreateLeaseResponse.DiscardUnknown(m)
}

var xxx_messageInfo_MsgCreateLeaseResponse proto.InternalMessageInfo

// MsgWithdrawLease defines an SDK message for closing bid
type MsgWithdrawLease struct {
	ID v1.LeaseID `protobuf:"bytes,1,opt,name=bid_id,json=bidId,proto3" json:"id" yaml:"id"`
}

func (m *MsgWithdrawLease) Reset()         { *m = MsgWithdrawLease{} }
func (m *MsgWithdrawLease) String() string { return proto.CompactTextString(m) }
func (*MsgWithdrawLease) ProtoMessage()    {}
func (*MsgWithdrawLease) Descriptor() ([]byte, []int) {
	return fileDescriptor_394bd78777079a40, []int{2}
}
func (m *MsgWithdrawLease) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *MsgWithdrawLease) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_MsgWithdrawLease.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *MsgWithdrawLease) XXX_Merge(src proto.Message) {
	xxx_messageInfo_MsgWithdrawLease.Merge(m, src)
}
func (m *MsgWithdrawLease) XXX_Size() int {
	return m.Size()
}
func (m *MsgWithdrawLease) XXX_DiscardUnknown() {
	xxx_messageInfo_MsgWithdrawLease.DiscardUnknown(m)
}

var xxx_messageInfo_MsgWithdrawLease proto.InternalMessageInfo

func (m *MsgWithdrawLease) GetID() v1.LeaseID {
	if m != nil {
		return m.ID
	}
	return v1.LeaseID{}
}

// MsgWithdrawLeaseResponse defines the Msg/WithdrawLease response type.
type MsgWithdrawLeaseResponse struct {
}

func (m *MsgWithdrawLeaseResponse) Reset()         { *m = MsgWithdrawLeaseResponse{} }
func (m *MsgWithdrawLeaseResponse) String() string { return proto.CompactTextString(m) }
func (*MsgWithdrawLeaseResponse) ProtoMessage()    {}
func (*MsgWithdrawLeaseResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_394bd78777079a40, []int{3}
}
func (m *MsgWithdrawLeaseResponse) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *MsgWithdrawLeaseResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_MsgWithdrawLeaseResponse.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *MsgWithdrawLeaseResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_MsgWithdrawLeaseResponse.Merge(m, src)
}
func (m *MsgWithdrawLeaseResponse) XXX_Size() int {
	return m.Size()
}
func (m *MsgWithdrawLeaseResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_MsgWithdrawLeaseResponse.DiscardUnknown(m)
}

var xxx_messageInfo_MsgWithdrawLeaseResponse proto.InternalMessageInfo

// MsgCloseLease defines an SDK message for closing order
type MsgCloseLease struct {
	ID v1.LeaseID `protobuf:"bytes,1,opt,name=lease_id,json=leaseId,proto3" json:"id" yaml:"id"`
}

func (m *MsgCloseLease) Reset()         { *m = MsgCloseLease{} }
func (m *MsgCloseLease) String() string { return proto.CompactTextString(m) }
func (*MsgCloseLease) ProtoMessage()    {}
func (*MsgCloseLease) Descriptor() ([]byte, []int) {
	return fileDescriptor_394bd78777079a40, []int{4}
}
func (m *MsgCloseLease) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *MsgCloseLease) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_MsgCloseLease.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *MsgCloseLease) XXX_Merge(src proto.Message) {
	xxx_messageInfo_MsgCloseLease.Merge(m, src)
}
func (m *MsgCloseLease) XXX_Size() int {
	return m.Size()
}
func (m *MsgCloseLease) XXX_DiscardUnknown() {
	xxx_messageInfo_MsgCloseLease.DiscardUnknown(m)
}

var xxx_messageInfo_MsgCloseLease proto.InternalMessageInfo

func (m *MsgCloseLease) GetID() v1.LeaseID {
	if m != nil {
		return m.ID
	}
	return v1.LeaseID{}
}

// MsgCloseLeaseResponse defines the Msg/CloseLease response type.
type MsgCloseLeaseResponse struct {
}

func (m *MsgCloseLeaseResponse) Reset()         { *m = MsgCloseLeaseResponse{} }
func (m *MsgCloseLeaseResponse) String() string { return proto.CompactTextString(m) }
func (*MsgCloseLeaseResponse) ProtoMessage()    {}
func (*MsgCloseLeaseResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_394bd78777079a40, []int{5}
}
func (m *MsgCloseLeaseResponse) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *MsgCloseLeaseResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_MsgCloseLeaseResponse.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *MsgCloseLeaseResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_MsgCloseLeaseResponse.Merge(m, src)
}
func (m *MsgCloseLeaseResponse) XXX_Size() int {
	return m.Size()
}
func (m *MsgCloseLeaseResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_MsgCloseLeaseResponse.DiscardUnknown(m)
}

var xxx_messageInfo_MsgCloseLeaseResponse proto.InternalMessageInfo

func init() {
	proto.RegisterType((*MsgCreateLease)(nil), "akash.market.v1beta5.MsgCreateLease")
	proto.RegisterType((*MsgCreateLeaseResponse)(nil), "akash.market.v1beta5.MsgCreateLeaseResponse")
	proto.RegisterType((*MsgWithdrawLease)(nil), "akash.market.v1beta5.MsgWithdrawLease")
	proto.RegisterType((*MsgWithdrawLeaseResponse)(nil), "akash.market.v1beta5.MsgWithdrawLeaseResponse")
	proto.RegisterType((*MsgCloseLease)(nil), "akash.market.v1beta5.MsgCloseLease")
	proto.RegisterType((*MsgCloseLeaseResponse)(nil), "akash.market.v1beta5.MsgCloseLeaseResponse")
}

func init() {
	proto.RegisterFile("akash/market/v1beta5/leasemsg.proto", fileDescriptor_394bd78777079a40)
}

var fileDescriptor_394bd78777079a40 = []byte{
	// 335 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x52, 0x4e, 0xcc, 0x4e, 0x2c,
	0xce, 0xd0, 0xcf, 0x4d, 0x2c, 0xca, 0x4e, 0x2d, 0xd1, 0x2f, 0x33, 0x4c, 0x4a, 0x2d, 0x49, 0x34,
	0xd5, 0xcf, 0x49, 0x4d, 0x2c, 0x4e, 0xcd, 0x2d, 0x4e, 0xd7, 0x2b, 0x28, 0xca, 0x2f, 0xc9, 0x17,
	0x12, 0x01, 0x2b, 0xd2, 0x83, 0x28, 0xd2, 0x83, 0x2a, 0x92, 0x12, 0x49, 0xcf, 0x4f, 0xcf, 0x07,
	0x2b, 0xd0, 0x07, 0xb1, 0x20, 0x6a, 0xa5, 0x24, 0xd1, 0x0c, 0xd4, 0x4f, 0xca, 0x4c, 0x81, 0x4a,
	0x49, 0xa3, 0x4b, 0x81, 0xad, 0x81, 0x48, 0x2a, 0xa5, 0x73, 0xf1, 0xf9, 0x16, 0xa7, 0x3b, 0x17,
	0xa5, 0x26, 0x96, 0xa4, 0xfa, 0x80, 0xc4, 0x85, 0xfc, 0xb9, 0xd8, 0x92, 0x32, 0x53, 0xe2, 0x33,
	0x53, 0x24, 0x18, 0x15, 0x18, 0x35, 0xb8, 0x8d, 0xc4, 0xf4, 0xd0, 0x9c, 0xa1, 0xe7, 0x94, 0x99,
	0xe2, 0xe9, 0xe2, 0xa4, 0x70, 0xe2, 0x9e, 0x3c, 0xc3, 0xa3, 0x7b, 0xf2, 0xac, 0x60, 0xee, 0xab,
	0x7b, 0xf2, 0x4c, 0x99, 0x29, 0x9f, 0xee, 0xc9, 0x73, 0x56, 0x26, 0xe6, 0xe6, 0x58, 0x29, 0x65,
	0xa6, 0x28, 0x05, 0xb1, 0x26, 0x65, 0xa6, 0x78, 0xa6, 0x58, 0xb1, 0xbc, 0x58, 0x20, 0xcf, 0xa0,
	0x24, 0xc1, 0x25, 0x86, 0x6a, 0x51, 0x50, 0x6a, 0x71, 0x41, 0x7e, 0x5e, 0x71, 0xaa, 0x52, 0x06,
	0x97, 0x80, 0x6f, 0x71, 0x7a, 0x78, 0x66, 0x49, 0x46, 0x4a, 0x51, 0x62, 0x39, 0xc4, 0x11, 0x7e,
	0x68, 0x8e, 0x90, 0xc0, 0x70, 0x04, 0x58, 0x9d, 0xa7, 0x8b, 0x93, 0x2c, 0xd4, 0x19, 0x4c, 0x44,
	0xb8, 0x41, 0x8a, 0x4b, 0x02, 0xdd, 0x26, 0xb8, 0x2b, 0x32, 0xb9, 0x78, 0x41, 0xee, 0xcb, 0xc9,
	0x2f, 0x86, 0x86, 0x43, 0x10, 0x17, 0x07, 0x38, 0xa0, 0xa8, 0xe0, 0x08, 0x76, 0xb0, 0x41, 0x70,
	0x67, 0x88, 0x73, 0x89, 0xa2, 0x58, 0x05, 0x73, 0x83, 0x93, 0xcd, 0x89, 0x47, 0x72, 0x8c, 0x17,
	0x1e, 0xc9, 0x31, 0x3e, 0x78, 0x24, 0xc7, 0x38, 0xe1, 0xb1, 0x1c, 0xc3, 0x85, 0xc7, 0x72, 0x0c,
	0x37, 0x1e, 0xcb, 0x31, 0x44, 0x29, 0x15, 0x64, 0xa7, 0xeb, 0x25, 0x66, 0x97, 0xe8, 0xa5, 0xa4,
	0x96, 0xe9, 0xa7, 0xe7, 0xeb, 0xe7, 0xe5, 0xa7, 0xa4, 0xa2, 0xa5, 0x9e, 0x24, 0x36, 0x70, 0x8c,
	0x1a, 0x03, 0x02, 0x00, 0x00, 0xff, 0xff, 0x07, 0x56, 0x0c, 0x13, 0x5c, 0x02, 0x00, 0x00,
}

func (m *MsgCreateLease) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *MsgCreateLease) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *MsgCreateLease) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	{
		size, err := m.BidID.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintLeasemsg(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0xa
	return len(dAtA) - i, nil
}

func (m *MsgCreateLeaseResponse) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *MsgCreateLeaseResponse) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *MsgCreateLeaseResponse) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	return len(dAtA) - i, nil
}

func (m *MsgWithdrawLease) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *MsgWithdrawLease) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *MsgWithdrawLease) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	{
		size, err := m.ID.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintLeasemsg(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0xa
	return len(dAtA) - i, nil
}

func (m *MsgWithdrawLeaseResponse) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *MsgWithdrawLeaseResponse) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *MsgWithdrawLeaseResponse) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	return len(dAtA) - i, nil
}

func (m *MsgCloseLease) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *MsgCloseLease) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *MsgCloseLease) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	{
		size, err := m.ID.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintLeasemsg(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0xa
	return len(dAtA) - i, nil
}

func (m *MsgCloseLeaseResponse) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *MsgCloseLeaseResponse) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *MsgCloseLeaseResponse) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	return len(dAtA) - i, nil
}

func encodeVarintLeasemsg(dAtA []byte, offset int, v uint64) int {
	offset -= sovLeasemsg(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *MsgCreateLease) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = m.BidID.Size()
	n += 1 + l + sovLeasemsg(uint64(l))
	return n
}

func (m *MsgCreateLeaseResponse) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	return n
}

func (m *MsgWithdrawLease) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = m.ID.Size()
	n += 1 + l + sovLeasemsg(uint64(l))
	return n
}

func (m *MsgWithdrawLeaseResponse) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	return n
}

func (m *MsgCloseLease) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = m.ID.Size()
	n += 1 + l + sovLeasemsg(uint64(l))
	return n
}

func (m *MsgCloseLeaseResponse) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	return n
}

func sovLeasemsg(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozLeasemsg(x uint64) (n int) {
	return sovLeasemsg(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *MsgCreateLease) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowLeasemsg
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
			return fmt.Errorf("proto: MsgCreateLease: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: MsgCreateLease: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field BidID", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowLeasemsg
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
				return ErrInvalidLengthLeasemsg
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthLeasemsg
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.BidID.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipLeasemsg(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthLeasemsg
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
func (m *MsgCreateLeaseResponse) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowLeasemsg
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
			return fmt.Errorf("proto: MsgCreateLeaseResponse: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: MsgCreateLeaseResponse: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		default:
			iNdEx = preIndex
			skippy, err := skipLeasemsg(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthLeasemsg
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
func (m *MsgWithdrawLease) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowLeasemsg
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
			return fmt.Errorf("proto: MsgWithdrawLease: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: MsgWithdrawLease: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ID", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowLeasemsg
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
				return ErrInvalidLengthLeasemsg
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthLeasemsg
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.ID.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipLeasemsg(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthLeasemsg
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
func (m *MsgWithdrawLeaseResponse) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowLeasemsg
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
			return fmt.Errorf("proto: MsgWithdrawLeaseResponse: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: MsgWithdrawLeaseResponse: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		default:
			iNdEx = preIndex
			skippy, err := skipLeasemsg(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthLeasemsg
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
func (m *MsgCloseLease) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowLeasemsg
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
			return fmt.Errorf("proto: MsgCloseLease: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: MsgCloseLease: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ID", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowLeasemsg
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
				return ErrInvalidLengthLeasemsg
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthLeasemsg
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.ID.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipLeasemsg(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthLeasemsg
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
func (m *MsgCloseLeaseResponse) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowLeasemsg
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
			return fmt.Errorf("proto: MsgCloseLeaseResponse: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: MsgCloseLeaseResponse: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		default:
			iNdEx = preIndex
			skippy, err := skipLeasemsg(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthLeasemsg
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
func skipLeasemsg(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowLeasemsg
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
					return 0, ErrIntOverflowLeasemsg
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
					return 0, ErrIntOverflowLeasemsg
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
				return 0, ErrInvalidLengthLeasemsg
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupLeasemsg
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthLeasemsg
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthLeasemsg        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowLeasemsg          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupLeasemsg = fmt.Errorf("proto: unexpected end of group")
)
