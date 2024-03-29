// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: akash/market/v1beta3/genesis.proto

package v1beta3

import (
	fmt "fmt"
	_ "github.com/gogo/protobuf/gogoproto"
	proto "github.com/gogo/protobuf/proto"
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

// GenesisState defines the basic genesis state used by market module
type GenesisState struct {
	Params Params  `protobuf:"bytes,1,opt,name=params,proto3" json:"params" yaml:"params"`
	Orders []Order `protobuf:"bytes,2,rep,name=orders,proto3" json:"orders" yaml:"orders"`
	Leases []Lease `protobuf:"bytes,3,rep,name=leases,proto3" json:"leases" yaml:"leases"`
	Bids   []Bid   `protobuf:"bytes,4,rep,name=bids,proto3" json:"bids" yaml:"bids"`
}

func (m *GenesisState) Reset()         { *m = GenesisState{} }
func (m *GenesisState) String() string { return proto.CompactTextString(m) }
func (*GenesisState) ProtoMessage()    {}
func (*GenesisState) Descriptor() ([]byte, []int) {
	return fileDescriptor_fa7e580cdc6cba31, []int{0}
}
func (m *GenesisState) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *GenesisState) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_GenesisState.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *GenesisState) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GenesisState.Merge(m, src)
}
func (m *GenesisState) XXX_Size() int {
	return m.Size()
}
func (m *GenesisState) XXX_DiscardUnknown() {
	xxx_messageInfo_GenesisState.DiscardUnknown(m)
}

var xxx_messageInfo_GenesisState proto.InternalMessageInfo

func (m *GenesisState) GetParams() Params {
	if m != nil {
		return m.Params
	}
	return Params{}
}

func (m *GenesisState) GetOrders() []Order {
	if m != nil {
		return m.Orders
	}
	return nil
}

func (m *GenesisState) GetLeases() []Lease {
	if m != nil {
		return m.Leases
	}
	return nil
}

func (m *GenesisState) GetBids() []Bid {
	if m != nil {
		return m.Bids
	}
	return nil
}

func init() {
	proto.RegisterType((*GenesisState)(nil), "akash.market.v1beta3.GenesisState")
}

func init() {
	proto.RegisterFile("akash/market/v1beta3/genesis.proto", fileDescriptor_fa7e580cdc6cba31)
}

var fileDescriptor_fa7e580cdc6cba31 = []byte{
	// 339 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x7c, 0x91, 0xb1, 0x4e, 0xeb, 0x30,
	0x14, 0x86, 0x93, 0xb6, 0xea, 0x90, 0xde, 0xbb, 0x44, 0x1d, 0x42, 0x8b, 0x9c, 0xe2, 0xa9, 0x0b,
	0xb6, 0x68, 0x27, 0x18, 0xb3, 0x20, 0x21, 0x24, 0x50, 0x0a, 0x0b, 0x9b, 0x43, 0xac, 0xd4, 0x6a,
	0x53, 0x57, 0xb6, 0x01, 0xf1, 0x16, 0x3c, 0x56, 0xc7, 0x8e, 0x2c, 0x44, 0xa8, 0xdd, 0x18, 0xfb,
	0x04, 0x28, 0xb6, 0xa5, 0x48, 0xc8, 0xea, 0x96, 0x3f, 0xff, 0x77, 0xbe, 0xe4, 0xd8, 0x01, 0x24,
	0x0b, 0x22, 0xe7, 0xb8, 0x24, 0x62, 0x41, 0x15, 0x7e, 0xbd, 0xc8, 0xa8, 0x22, 0x53, 0x5c, 0xd0,
	0x15, 0x95, 0x4c, 0xa2, 0xb5, 0xe0, 0x8a, 0x87, 0x7d, 0xcd, 0x20, 0xc3, 0x20, 0xcb, 0x0c, 0xfa,
	0x05, 0x2f, 0xb8, 0x06, 0x70, 0xfd, 0x64, 0xd8, 0xc1, 0xc8, 0xe9, 0xe3, 0x22, 0xa7, 0xe2, 0x28,
	0xb1, 0xa4, 0x44, 0x52, 0x4b, 0x00, 0x27, 0x91, 0xb1, 0xdc, 0xf6, 0x67, 0xce, 0x7e, 0x4d, 0x04,
	0x29, 0xed, 0x2f, 0xc3, 0xaf, 0x56, 0xf0, 0xef, 0xda, 0x2c, 0x31, 0x53, 0x44, 0xd1, 0xf0, 0x31,
	0xe8, 0x1a, 0x20, 0xf2, 0x47, 0xfe, 0xb8, 0x37, 0x39, 0x45, 0xae, 0xa5, 0xd0, 0xbd, 0x66, 0x92,
	0x78, 0x53, 0xc5, 0xde, 0x4f, 0x15, 0xdb, 0x99, 0x43, 0x15, 0xff, 0x7f, 0x27, 0xe5, 0xf2, 0x0a,
	0x9a, 0x0c, 0x53, 0x5b, 0x84, 0x0f, 0x41, 0x57, 0xef, 0x26, 0xa3, 0xd6, 0xa8, 0x3d, 0xee, 0x4d,
	0x86, 0x6e, 0xed, 0x5d, 0xcd, 0x34, 0x56, 0x33, 0xd2, 0x58, 0x4d, 0x86, 0xa9, 0x2d, 0x6a, 0xab,
	0x3e, 0x0f, 0x19, 0xb5, 0x8f, 0x59, 0x6f, 0x6b, 0xa6, 0xb1, 0x9a, 0x91, 0xc6, 0x6a, 0x32, 0x4c,
	0x6d, 0x11, 0xde, 0x04, 0x9d, 0x8c, 0xe5, 0x32, 0xea, 0x68, 0xe7, 0x89, 0xdb, 0x99, 0xb0, 0x3c,
	0x19, 0x5a, 0xa3, 0xc6, 0x0f, 0x55, 0xdc, 0x33, 0xbe, 0x3a, 0xc1, 0x54, 0xbf, 0x4c, 0x66, 0x9b,
	0x1d, 0xf0, 0xb7, 0x3b, 0xe0, 0x7f, 0xef, 0x80, 0xff, 0xb1, 0x07, 0xde, 0x76, 0x0f, 0xbc, 0xcf,
	0x3d, 0xf0, 0x9e, 0x2e, 0x0b, 0xa6, 0xe6, 0x2f, 0x19, 0x7a, 0xe6, 0x25, 0xd6, 0x5f, 0x38, 0x5f,
	0x51, 0xf5, 0xc6, 0xc5, 0xc2, 0x26, 0xb2, 0x66, 0xb8, 0xe0, 0x78, 0xc5, 0x73, 0xfa, 0xe7, 0x06,
	0xb3, 0xae, 0xbe, 0xbb, 0xe9, 0x6f, 0x00, 0x00, 0x00, 0xff, 0xff, 0xd8, 0x0f, 0x57, 0x88, 0x94,
	0x02, 0x00, 0x00,
}

func (m *GenesisState) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *GenesisState) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *GenesisState) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Bids) > 0 {
		for iNdEx := len(m.Bids) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.Bids[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintGenesis(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x22
		}
	}
	if len(m.Leases) > 0 {
		for iNdEx := len(m.Leases) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.Leases[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintGenesis(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x1a
		}
	}
	if len(m.Orders) > 0 {
		for iNdEx := len(m.Orders) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.Orders[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintGenesis(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x12
		}
	}
	{
		size, err := m.Params.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintGenesis(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0xa
	return len(dAtA) - i, nil
}

func encodeVarintGenesis(dAtA []byte, offset int, v uint64) int {
	offset -= sovGenesis(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *GenesisState) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = m.Params.Size()
	n += 1 + l + sovGenesis(uint64(l))
	if len(m.Orders) > 0 {
		for _, e := range m.Orders {
			l = e.Size()
			n += 1 + l + sovGenesis(uint64(l))
		}
	}
	if len(m.Leases) > 0 {
		for _, e := range m.Leases {
			l = e.Size()
			n += 1 + l + sovGenesis(uint64(l))
		}
	}
	if len(m.Bids) > 0 {
		for _, e := range m.Bids {
			l = e.Size()
			n += 1 + l + sovGenesis(uint64(l))
		}
	}
	return n
}

func sovGenesis(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozGenesis(x uint64) (n int) {
	return sovGenesis(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *GenesisState) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowGenesis
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
			return fmt.Errorf("proto: GenesisState: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: GenesisState: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Params", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
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
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.Params.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Orders", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
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
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Orders = append(m.Orders, Order{})
			if err := m.Orders[len(m.Orders)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Leases", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
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
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Leases = append(m.Leases, Lease{})
			if err := m.Leases[len(m.Leases)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Bids", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
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
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Bids = append(m.Bids, Bid{})
			if err := m.Bids[len(m.Bids)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipGenesis(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthGenesis
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
func skipGenesis(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowGenesis
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
					return 0, ErrIntOverflowGenesis
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
					return 0, ErrIntOverflowGenesis
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
				return 0, ErrInvalidLengthGenesis
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupGenesis
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthGenesis
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthGenesis        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowGenesis          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupGenesis = fmt.Errorf("proto: unexpected end of group")
)
