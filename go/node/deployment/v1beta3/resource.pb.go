// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: akash/deployment/v1beta3/resource.proto

package v1beta3

import (
	fmt "fmt"
	v1beta3 "github.com/akash-network/akash-api/go/node/types/v1beta3"
	types "github.com/cosmos/cosmos-sdk/types"
	proto "github.com/cosmos/gogoproto/proto"
	_ "github.com/gogo/protobuf/gogoproto"
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

// Resource stores unit, total count and price of resource
type Resource struct {
	Resources v1beta3.ResourceUnits `protobuf:"bytes,1,opt,name=resources,proto3" json:"unit" yaml:"unit"`
	Count     uint32                `protobuf:"varint,2,opt,name=count,proto3" json:"count" yaml:"count"`
	Price     types.DecCoin         `protobuf:"bytes,3,opt,name=price,proto3" json:"price" yaml:"price"`
}

func (m *Resource) Reset()         { *m = Resource{} }
func (m *Resource) String() string { return proto.CompactTextString(m) }
func (*Resource) ProtoMessage()    {}
func (*Resource) Descriptor() ([]byte, []int) {
	return fileDescriptor_14f0bdebc2254159, []int{0}
}
func (m *Resource) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Resource) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Resource.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Resource) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Resource.Merge(m, src)
}
func (m *Resource) XXX_Size() int {
	return m.Size()
}
func (m *Resource) XXX_DiscardUnknown() {
	xxx_messageInfo_Resource.DiscardUnknown(m)
}

var xxx_messageInfo_Resource proto.InternalMessageInfo

func (m *Resource) GetResources() v1beta3.ResourceUnits {
	if m != nil {
		return m.Resources
	}
	return v1beta3.ResourceUnits{}
}

func (m *Resource) GetCount() uint32 {
	if m != nil {
		return m.Count
	}
	return 0
}

func (m *Resource) GetPrice() types.DecCoin {
	if m != nil {
		return m.Price
	}
	return types.DecCoin{}
}

func init() {
	proto.RegisterType((*Resource)(nil), "akash.deployment.v1beta3.Resource")
}

func init() {
	proto.RegisterFile("akash/deployment/v1beta3/resource.proto", fileDescriptor_14f0bdebc2254159)
}

var fileDescriptor_14f0bdebc2254159 = []byte{
	// 339 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x6c, 0x91, 0xc1, 0x4e, 0xb3, 0x40,
	0x14, 0x85, 0xe1, 0xff, 0x5b, 0xa3, 0x54, 0x37, 0xc4, 0x05, 0x56, 0x1d, 0x2a, 0x0b, 0xed, 0xc6,
	0x99, 0xd4, 0xee, 0x9a, 0xb8, 0x41, 0x5f, 0x40, 0x12, 0x63, 0x62, 0xdc, 0xc0, 0x74, 0x42, 0x49,
	0xcb, 0x5c, 0xc2, 0x0c, 0x9a, 0xbe, 0x85, 0x8f, 0xe0, 0xe3, 0x74, 0xd9, 0xa5, 0x2b, 0x62, 0xda,
	0x8d, 0xe9, 0xb2, 0x4f, 0x60, 0x98, 0xa1, 0x69, 0x13, 0xdd, 0x71, 0x2e, 0xdf, 0x39, 0xf7, 0x5c,
	0xb0, 0xae, 0xc2, 0x71, 0x28, 0x46, 0x64, 0xc8, 0xb2, 0x09, 0x4c, 0x53, 0xc6, 0x25, 0x79, 0xed,
	0x45, 0x4c, 0x86, 0x7d, 0x92, 0x33, 0x01, 0x45, 0x4e, 0x19, 0xce, 0x72, 0x90, 0x60, 0x3b, 0x0a,
	0xc4, 0x5b, 0x10, 0xd7, 0x60, 0xfb, 0x38, 0x86, 0x18, 0x14, 0x44, 0xaa, 0x27, 0xcd, 0xb7, 0x2f,
	0x75, 0x70, 0x14, 0x0a, 0xf6, 0x2b, 0xb2, 0xe0, 0x89, 0x14, 0x35, 0x87, 0x28, 0x88, 0x14, 0xc4,
	0x2e, 0xd8, 0x23, 0x14, 0x12, 0xae, 0xdf, 0x7b, 0x6b, 0xd3, 0xda, 0x0f, 0x6a, 0x9f, 0xfd, 0x62,
	0x1d, 0x6c, 0x32, 0x84, 0x63, 0x76, 0xcc, 0x6e, 0xeb, 0xe6, 0x02, 0xeb, 0x62, 0x95, 0x7f, 0x53,
	0x09, 0x6f, 0x0c, 0x8f, 0xd5, 0x22, 0xff, 0x74, 0x56, 0xba, 0xc6, 0xaa, 0x74, 0x1b, 0xd5, 0xde,
	0x75, 0xe9, 0xb6, 0xa6, 0x61, 0x3a, 0x19, 0x78, 0x95, 0xf2, 0x82, 0x6d, 0xa0, 0x4d, 0xac, 0x26,
	0x85, 0x82, 0x4b, 0xe7, 0x5f, 0xc7, 0xec, 0x1e, 0xf9, 0x27, 0xab, 0xd2, 0xd5, 0x83, 0x75, 0xe9,
	0x1e, 0x6a, 0x8f, 0x92, 0x5e, 0xa0, 0xc7, 0xf6, 0x83, 0xd5, 0xcc, 0xf2, 0x84, 0x32, 0xe7, 0xbf,
	0xaa, 0x72, 0x86, 0xf5, 0x2d, 0xbb, 0x5d, 0x7a, 0xf8, 0x9e, 0xd1, 0x3b, 0x48, 0xb8, 0x7f, 0x5e,
	0xb7, 0xd0, 0x96, 0x6d, 0xa4, 0x92, 0x5e, 0xa0, 0xc7, 0x83, 0xc6, 0xf7, 0x87, 0x6b, 0xf8, 0x4f,
	0xb3, 0x05, 0x32, 0xe7, 0x0b, 0x64, 0x7e, 0x2d, 0x90, 0xf9, 0xbe, 0x44, 0xc6, 0x7c, 0x89, 0x8c,
	0xcf, 0x25, 0x32, 0x9e, 0x6f, 0xe3, 0x44, 0x8e, 0x8a, 0x08, 0x53, 0x48, 0x89, 0x3a, 0xfc, 0x9a,
	0x33, 0xf9, 0x06, 0xf9, 0xb8, 0x56, 0x61, 0x96, 0x90, 0x18, 0x08, 0x87, 0x21, 0xfb, 0xe3, 0xa7,
	0x46, 0x7b, 0xea, 0xa3, 0xf6, 0x7f, 0x02, 0x00, 0x00, 0xff, 0xff, 0xd6, 0x53, 0x90, 0x5c, 0xf7,
	0x01, 0x00, 0x00,
}

func (m *Resource) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Resource) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Resource) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	{
		size, err := m.Price.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintResource(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0x1a
	if m.Count != 0 {
		i = encodeVarintResource(dAtA, i, uint64(m.Count))
		i--
		dAtA[i] = 0x10
	}
	{
		size, err := m.Resources.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintResource(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0xa
	return len(dAtA) - i, nil
}

func encodeVarintResource(dAtA []byte, offset int, v uint64) int {
	offset -= sovResource(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *Resource) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = m.Resources.Size()
	n += 1 + l + sovResource(uint64(l))
	if m.Count != 0 {
		n += 1 + sovResource(uint64(m.Count))
	}
	l = m.Price.Size()
	n += 1 + l + sovResource(uint64(l))
	return n
}

func sovResource(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozResource(x uint64) (n int) {
	return sovResource(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *Resource) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowResource
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
			return fmt.Errorf("proto: Resource: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Resource: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Resources", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowResource
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
				return ErrInvalidLengthResource
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthResource
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.Resources.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 2:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Count", wireType)
			}
			m.Count = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowResource
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Count |= uint32(b&0x7F) << shift
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
					return ErrIntOverflowResource
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
				return ErrInvalidLengthResource
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthResource
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.Price.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipResource(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthResource
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
func skipResource(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowResource
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
					return 0, ErrIntOverflowResource
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
					return 0, ErrIntOverflowResource
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
				return 0, ErrInvalidLengthResource
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupResource
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthResource
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthResource        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowResource          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupResource = fmt.Errorf("proto: unexpected end of group")
)
