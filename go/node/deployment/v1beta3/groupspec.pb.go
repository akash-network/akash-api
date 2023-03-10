// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: akash/deployment/v1beta3/groupspec.proto

package v1beta3

import (
	fmt "fmt"
	v1beta3 "github.com/akash-network/akash-api/go/node/types/v1beta3"
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

// GroupSpec stores group specifications
type GroupSpec struct {
	Name         string                        `protobuf:"bytes,1,opt,name=name,proto3" json:"name" yaml:"name"`
	Requirements v1beta3.PlacementRequirements `protobuf:"bytes,2,opt,name=requirements,proto3" json:"requirements" yaml:"requirements"`
	Resources    []Resource                    `protobuf:"bytes,3,rep,name=resources,proto3" json:"resources" yaml:"resources"`
}

func (m *GroupSpec) Reset()         { *m = GroupSpec{} }
func (m *GroupSpec) String() string { return proto.CompactTextString(m) }
func (*GroupSpec) ProtoMessage()    {}
func (*GroupSpec) Descriptor() ([]byte, []int) {
	return fileDescriptor_8f47a9fa0e046026, []int{0}
}
func (m *GroupSpec) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *GroupSpec) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_GroupSpec.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *GroupSpec) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GroupSpec.Merge(m, src)
}
func (m *GroupSpec) XXX_Size() int {
	return m.Size()
}
func (m *GroupSpec) XXX_DiscardUnknown() {
	xxx_messageInfo_GroupSpec.DiscardUnknown(m)
}

var xxx_messageInfo_GroupSpec proto.InternalMessageInfo

func init() {
	proto.RegisterType((*GroupSpec)(nil), "akash.deployment.v1beta3.GroupSpec")
}

func init() {
	proto.RegisterFile("akash/deployment/v1beta3/groupspec.proto", fileDescriptor_8f47a9fa0e046026)
}

var fileDescriptor_8f47a9fa0e046026 = []byte{
	// 359 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x74, 0x91, 0xb1, 0x4e, 0xeb, 0x30,
	0x14, 0x86, 0x93, 0xf6, 0xea, 0xea, 0x36, 0xbd, 0x03, 0x0a, 0x48, 0x44, 0x1d, 0xe2, 0xca, 0x12,
	0x22, 0xa8, 0xc2, 0x16, 0xed, 0x56, 0x89, 0x25, 0x0b, 0x2b, 0x0a, 0x03, 0x12, 0x9b, 0x93, 0x5a,
	0x69, 0xd4, 0x26, 0x0e, 0x8e, 0x03, 0x2a, 0x4f, 0xc0, 0xc8, 0x23, 0x74, 0xe3, 0x55, 0x3a, 0x76,
	0x64, 0x8a, 0x50, 0xbb, 0xa0, 0x8e, 0x7d, 0x02, 0x14, 0xc7, 0xa5, 0xad, 0x44, 0xb7, 0x9c, 0x93,
	0xef, 0x9c, 0xff, 0xff, 0x7d, 0x0c, 0x87, 0x8c, 0x48, 0x36, 0xc4, 0x03, 0x9a, 0x8e, 0xd9, 0x24,
	0xa6, 0x89, 0xc0, 0x4f, 0x57, 0x3e, 0x15, 0xa4, 0x87, 0x43, 0xce, 0xf2, 0x34, 0x4b, 0x69, 0x80,
	0x52, 0xce, 0x04, 0x33, 0x2d, 0x49, 0xa2, 0x2d, 0x89, 0x14, 0xd9, 0x3a, 0x09, 0x59, 0xc8, 0x24,
	0x84, 0xcb, 0xaf, 0x8a, 0x6f, 0xc1, 0x6a, 0xb3, 0x4f, 0x32, 0xfa, 0xb3, 0x93, 0x08, 0xc1, 0x23,
	0x3f, 0x17, 0x54, 0x31, 0xe7, 0x07, 0xd5, 0x39, 0xcd, 0x58, 0xce, 0x03, 0x05, 0xc2, 0xf7, 0x9a,
	0xd1, 0xb8, 0x29, 0x0d, 0xdd, 0xa5, 0x34, 0x30, 0x3b, 0xc6, 0x9f, 0x84, 0xc4, 0xd4, 0xd2, 0xdb,
	0xba, 0xd3, 0x70, 0x4f, 0x57, 0x05, 0x90, 0xf5, 0xba, 0x00, 0xcd, 0x09, 0x89, 0xc7, 0x7d, 0x58,
	0x56, 0xd0, 0x93, 0x4d, 0xf3, 0xc5, 0xf8, 0xcf, 0xe9, 0x63, 0x1e, 0x71, 0x5a, 0x0a, 0x64, 0x56,
	0xad, 0xad, 0x3b, 0xcd, 0xee, 0x05, 0xaa, 0xe2, 0x94, 0xf6, 0x36, 0x41, 0xd0, 0xed, 0x98, 0x04,
	0x92, 0xf2, 0x76, 0x06, 0xdc, 0xce, 0xac, 0x00, 0xda, 0xaa, 0x00, 0x7b, 0x6b, 0xd6, 0x05, 0x38,
	0xae, 0xb4, 0x76, 0xbb, 0xd0, 0xdb, 0x83, 0xcc, 0xd0, 0x68, 0x6c, 0x82, 0x64, 0x56, 0xbd, 0x5d,
	0x77, 0x9a, 0x5d, 0x88, 0x0e, 0xbd, 0x23, 0xf2, 0x14, 0xea, 0x9e, 0x29, 0xc5, 0xed, 0xf0, 0xba,
	0x00, 0x47, 0x1b, 0x39, 0xd5, 0x82, 0xde, 0xf6, 0x77, 0xff, 0xdf, 0xeb, 0x14, 0x68, 0x5f, 0x53,
	0xa0, 0xb9, 0xf7, 0xb3, 0x85, 0xad, 0xcf, 0x17, 0xb6, 0xfe, 0xb9, 0xb0, 0xf5, 0xb7, 0xa5, 0xad,
	0xcd, 0x97, 0xb6, 0xf6, 0xb1, 0xb4, 0xb5, 0x87, 0xeb, 0x30, 0x12, 0xc3, 0xdc, 0x47, 0x01, 0x8b,
	0xb1, 0xf4, 0x70, 0x99, 0x50, 0xf1, 0xcc, 0xf8, 0x48, 0x55, 0x24, 0x8d, 0x70, 0xc8, 0x70, 0xc2,
	0x06, 0xf4, 0x97, 0x8b, 0xf8, 0x7f, 0xe5, 0x25, 0x7a, 0xdf, 0x01, 0x00, 0x00, 0xff, 0xff, 0x8b,
	0xd4, 0x1c, 0x65, 0x32, 0x02, 0x00, 0x00,
}

func (m *GroupSpec) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *GroupSpec) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *GroupSpec) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Resources) > 0 {
		for iNdEx := len(m.Resources) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.Resources[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintGroupspec(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x1a
		}
	}
	{
		size, err := m.Requirements.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintGroupspec(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0x12
	if len(m.Name) > 0 {
		i -= len(m.Name)
		copy(dAtA[i:], m.Name)
		i = encodeVarintGroupspec(dAtA, i, uint64(len(m.Name)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintGroupspec(dAtA []byte, offset int, v uint64) int {
	offset -= sovGroupspec(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *GroupSpec) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Name)
	if l > 0 {
		n += 1 + l + sovGroupspec(uint64(l))
	}
	l = m.Requirements.Size()
	n += 1 + l + sovGroupspec(uint64(l))
	if len(m.Resources) > 0 {
		for _, e := range m.Resources {
			l = e.Size()
			n += 1 + l + sovGroupspec(uint64(l))
		}
	}
	return n
}

func sovGroupspec(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozGroupspec(x uint64) (n int) {
	return sovGroupspec(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *GroupSpec) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowGroupspec
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
			return fmt.Errorf("proto: GroupSpec: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: GroupSpec: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Name", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGroupspec
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
				return ErrInvalidLengthGroupspec
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthGroupspec
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Name = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Requirements", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGroupspec
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
				return ErrInvalidLengthGroupspec
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGroupspec
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.Requirements.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Resources", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGroupspec
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
				return ErrInvalidLengthGroupspec
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGroupspec
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Resources = append(m.Resources, Resource{})
			if err := m.Resources[len(m.Resources)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipGroupspec(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthGroupspec
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
func skipGroupspec(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowGroupspec
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
					return 0, ErrIntOverflowGroupspec
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
					return 0, ErrIntOverflowGroupspec
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
				return 0, ErrInvalidLengthGroupspec
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupGroupspec
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthGroupspec
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthGroupspec        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowGroupspec          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupGroupspec = fmt.Errorf("proto: unexpected end of group")
)
