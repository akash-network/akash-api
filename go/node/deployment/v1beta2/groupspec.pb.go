// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: akash/deployment/v1beta2/groupspec.proto

package v1beta2

import (
	fmt "fmt"
	v1beta2 "github.com/akash-network/akash-api/go/node/types/v1beta2"
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
	Requirements v1beta2.PlacementRequirements `protobuf:"bytes,2,opt,name=requirements,proto3" json:"requirements" yaml:"requirements"`
	Resources    []Resource                    `protobuf:"bytes,3,rep,name=resources,proto3" json:"resources" yaml:"resources"`
}

func (m *GroupSpec) Reset()         { *m = GroupSpec{} }
func (m *GroupSpec) String() string { return proto.CompactTextString(m) }
func (*GroupSpec) ProtoMessage()    {}
func (*GroupSpec) Descriptor() ([]byte, []int) {
	return fileDescriptor_8afb9070f2e843b2, []int{0}
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
	proto.RegisterType((*GroupSpec)(nil), "akash.deployment.v1beta2.GroupSpec")
}

func init() {
	proto.RegisterFile("akash/deployment/v1beta2/groupspec.proto", fileDescriptor_8afb9070f2e843b2)
}

var fileDescriptor_8afb9070f2e843b2 = []byte{
	// 358 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x74, 0x91, 0x31, 0x4b, 0xfb, 0x40,
	0x18, 0xc6, 0x93, 0xf6, 0xcf, 0x1f, 0x9b, 0x3a, 0x48, 0x14, 0x0c, 0x1d, 0x72, 0xe5, 0x40, 0x8c,
	0x14, 0xef, 0xb0, 0x6e, 0x05, 0x97, 0x2c, 0xae, 0x12, 0x07, 0xc1, 0xed, 0x92, 0x1e, 0x69, 0x68,
	0x93, 0x8b, 0x97, 0x8b, 0x52, 0x3f, 0x81, 0xa3, 0x1f, 0xa1, 0x9b, 0x5f, 0xa5, 0x63, 0x47, 0xa7,
	0x20, 0xed, 0x22, 0x1d, 0xfb, 0x09, 0x24, 0x97, 0xab, 0x6d, 0xc1, 0x6e, 0x79, 0xdf, 0xfc, 0xde,
	0xf7, 0x79, 0x9e, 0x7b, 0x0d, 0x87, 0x0c, 0x49, 0x36, 0xc0, 0x7d, 0x9a, 0x8e, 0xd8, 0x38, 0xa6,
	0x89, 0xc0, 0xcf, 0x57, 0x3e, 0x15, 0xa4, 0x8b, 0x43, 0xce, 0xf2, 0x34, 0x4b, 0x69, 0x80, 0x52,
	0xce, 0x04, 0x33, 0x2d, 0x49, 0xa2, 0x0d, 0x89, 0x14, 0xd9, 0x3a, 0x09, 0x59, 0xc8, 0x24, 0x84,
	0xcb, 0xaf, 0x8a, 0x6f, 0xc1, 0x6a, 0xb3, 0x4f, 0x32, 0xfa, 0xbb, 0x93, 0x08, 0xc1, 0x23, 0x3f,
	0x17, 0x54, 0x31, 0xe7, 0x7b, 0xd5, 0x39, 0xcd, 0x58, 0xce, 0x03, 0x05, 0xc2, 0x8f, 0x9a, 0xd1,
	0xb8, 0x2d, 0x0d, 0xdd, 0xa7, 0x34, 0x30, 0x3b, 0xc6, 0xbf, 0x84, 0xc4, 0xd4, 0xd2, 0xdb, 0xba,
	0xd3, 0x70, 0x4f, 0x97, 0x05, 0x90, 0xf5, 0xaa, 0x00, 0xcd, 0x31, 0x89, 0x47, 0x3d, 0x58, 0x56,
	0xd0, 0x93, 0x4d, 0xf3, 0xd5, 0x38, 0xe4, 0xf4, 0x29, 0x8f, 0x38, 0x2d, 0x05, 0x32, 0xab, 0xd6,
	0xd6, 0x9d, 0x66, 0xf7, 0x02, 0x55, 0x71, 0x4a, 0x7b, 0xeb, 0x20, 0xe8, 0x6e, 0x44, 0x02, 0x49,
	0x79, 0x5b, 0x03, 0x6e, 0x67, 0x5a, 0x00, 0x6d, 0x59, 0x80, 0x9d, 0x35, 0xab, 0x02, 0x1c, 0x57,
	0x5a, 0xdb, 0x5d, 0xe8, 0xed, 0x40, 0x66, 0x68, 0x34, 0xd6, 0x41, 0x32, 0xab, 0xde, 0xae, 0x3b,
	0xcd, 0x2e, 0x44, 0xfb, 0xde, 0x11, 0x79, 0x0a, 0x75, 0xcf, 0x94, 0xe2, 0x66, 0x78, 0x55, 0x80,
	0xa3, 0xb5, 0x9c, 0x6a, 0x41, 0x6f, 0xf3, 0xbb, 0x77, 0xf0, 0x36, 0x01, 0xda, 0xf7, 0x04, 0x68,
	0xee, 0xc3, 0x74, 0x6e, 0xeb, 0xb3, 0xb9, 0xad, 0x7f, 0xcd, 0x6d, 0xfd, 0x7d, 0x61, 0x6b, 0xb3,
	0x85, 0xad, 0x7d, 0x2e, 0x6c, 0xed, 0xf1, 0x26, 0x8c, 0xc4, 0x20, 0xf7, 0x51, 0xc0, 0x62, 0x2c,
	0x3d, 0x5c, 0x26, 0x54, 0xbc, 0x30, 0x3e, 0x54, 0x15, 0x49, 0x23, 0x1c, 0x32, 0x9c, 0xb0, 0x3e,
	0xfd, 0xe3, 0x22, 0xfe, 0x7f, 0x79, 0x89, 0xeb, 0x9f, 0x00, 0x00, 0x00, 0xff, 0xff, 0x80, 0x88,
	0x8d, 0xf5, 0x32, 0x02, 0x00, 0x00,
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
