// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: akash/deployment/v1beta4/groupid.proto

package v1beta4

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

// GroupID stores owner, deployment sequence number and group sequence number
type GroupID struct {
	Owner string `protobuf:"bytes,1,opt,name=owner,proto3" json:"owner" yaml:"owner"`
	DSeq  uint64 `protobuf:"varint,2,opt,name=dseq,proto3" json:"dseq" yaml:"dseq"`
	GSeq  uint32 `protobuf:"varint,3,opt,name=gseq,proto3" json:"gseq" yaml:"gseq"`
}

func (m *GroupID) Reset()      { *m = GroupID{} }
func (*GroupID) ProtoMessage() {}
func (*GroupID) Descriptor() ([]byte, []int) {
	return fileDescriptor_97119ab13846b441, []int{0}
}
func (m *GroupID) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *GroupID) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_GroupID.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *GroupID) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GroupID.Merge(m, src)
}
func (m *GroupID) XXX_Size() int {
	return m.Size()
}
func (m *GroupID) XXX_DiscardUnknown() {
	xxx_messageInfo_GroupID.DiscardUnknown(m)
}

var xxx_messageInfo_GroupID proto.InternalMessageInfo

func (m *GroupID) GetOwner() string {
	if m != nil {
		return m.Owner
	}
	return ""
}

func (m *GroupID) GetDSeq() uint64 {
	if m != nil {
		return m.DSeq
	}
	return 0
}

func (m *GroupID) GetGSeq() uint32 {
	if m != nil {
		return m.GSeq
	}
	return 0
}

func init() {
	proto.RegisterType((*GroupID)(nil), "akash.deployment.v1beta4.GroupID")
}

func init() {
	proto.RegisterFile("akash/deployment/v1beta4/groupid.proto", fileDescriptor_97119ab13846b441)
}

var fileDescriptor_97119ab13846b441 = []byte{
	// 281 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x52, 0x4b, 0xcc, 0x4e, 0x2c,
	0xce, 0xd0, 0x4f, 0x49, 0x2d, 0xc8, 0xc9, 0xaf, 0xcc, 0x4d, 0xcd, 0x2b, 0xd1, 0x2f, 0x33, 0x4c,
	0x4a, 0x2d, 0x49, 0x34, 0xd1, 0x4f, 0x2f, 0xca, 0x2f, 0x2d, 0xc8, 0x4c, 0xd1, 0x2b, 0x28, 0xca,
	0x2f, 0xc9, 0x17, 0x92, 0x00, 0xab, 0xd3, 0x43, 0xa8, 0xd3, 0x83, 0xaa, 0x93, 0x12, 0x49, 0xcf,
	0x4f, 0xcf, 0x07, 0x2b, 0xd2, 0x07, 0xb1, 0x20, 0xea, 0x95, 0xd6, 0x31, 0x72, 0xb1, 0xbb, 0x83,
	0x4c, 0xf0, 0x74, 0x11, 0xd2, 0xe7, 0x62, 0xcd, 0x2f, 0xcf, 0x4b, 0x2d, 0x92, 0x60, 0x54, 0x60,
	0xd4, 0xe0, 0x74, 0x92, 0x7c, 0x75, 0x4f, 0x1e, 0x22, 0xf0, 0xe9, 0x9e, 0x3c, 0x4f, 0x65, 0x62,
	0x6e, 0x8e, 0x95, 0x12, 0x98, 0xab, 0x14, 0x04, 0x11, 0x16, 0x32, 0xe6, 0x62, 0x49, 0x29, 0x4e,
	0x2d, 0x94, 0x60, 0x52, 0x60, 0xd4, 0x60, 0x71, 0x92, 0x7f, 0x74, 0x4f, 0x9e, 0xc5, 0x25, 0x38,
	0xb5, 0xf0, 0xd5, 0x3d, 0x79, 0xb0, 0xf8, 0xa7, 0x7b, 0xf2, 0xdc, 0x10, 0x6d, 0x20, 0x9e, 0x52,
	0x10, 0x58, 0x10, 0xa4, 0x29, 0x1d, 0xa4, 0x89, 0x59, 0x81, 0x51, 0x83, 0x17, 0xa2, 0xc9, 0x1d,
	0xaa, 0x29, 0x1d, 0x45, 0x53, 0x3a, 0x44, 0x13, 0x88, 0xb2, 0xe2, 0x98, 0xb1, 0x40, 0x9e, 0xe1,
	0xc5, 0x02, 0x79, 0x06, 0xa7, 0xf0, 0x13, 0x8f, 0xe4, 0x18, 0x2f, 0x3c, 0x92, 0x63, 0x7c, 0xf0,
	0x48, 0x8e, 0x71, 0xc2, 0x63, 0x39, 0x86, 0x0b, 0x8f, 0xe5, 0x18, 0x6e, 0x3c, 0x96, 0x63, 0x88,
	0xb2, 0x4d, 0xcf, 0x2c, 0xc9, 0x28, 0x4d, 0xd2, 0x4b, 0xce, 0xcf, 0xd5, 0x07, 0x87, 0x82, 0x6e,
	0x5e, 0x6a, 0x49, 0x79, 0x7e, 0x51, 0x36, 0x94, 0x97, 0x58, 0x90, 0xa9, 0x9f, 0x9e, 0xaf, 0x9f,
	0x97, 0x9f, 0x92, 0x8a, 0x25, 0x1c, 0x93, 0xd8, 0xc0, 0x01, 0x62, 0x0c, 0x08, 0x00, 0x00, 0xff,
	0xff, 0x24, 0x00, 0xce, 0x72, 0x6a, 0x01, 0x00, 0x00,
}

func (m *GroupID) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *GroupID) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *GroupID) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.GSeq != 0 {
		i = encodeVarintGroupid(dAtA, i, uint64(m.GSeq))
		i--
		dAtA[i] = 0x18
	}
	if m.DSeq != 0 {
		i = encodeVarintGroupid(dAtA, i, uint64(m.DSeq))
		i--
		dAtA[i] = 0x10
	}
	if len(m.Owner) > 0 {
		i -= len(m.Owner)
		copy(dAtA[i:], m.Owner)
		i = encodeVarintGroupid(dAtA, i, uint64(len(m.Owner)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintGroupid(dAtA []byte, offset int, v uint64) int {
	offset -= sovGroupid(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *GroupID) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Owner)
	if l > 0 {
		n += 1 + l + sovGroupid(uint64(l))
	}
	if m.DSeq != 0 {
		n += 1 + sovGroupid(uint64(m.DSeq))
	}
	if m.GSeq != 0 {
		n += 1 + sovGroupid(uint64(m.GSeq))
	}
	return n
}

func sovGroupid(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozGroupid(x uint64) (n int) {
	return sovGroupid(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *GroupID) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowGroupid
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
			return fmt.Errorf("proto: GroupID: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: GroupID: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Owner", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGroupid
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
				return ErrInvalidLengthGroupid
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthGroupid
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
					return ErrIntOverflowGroupid
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
					return ErrIntOverflowGroupid
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
		default:
			iNdEx = preIndex
			skippy, err := skipGroupid(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthGroupid
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
func skipGroupid(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowGroupid
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
					return 0, ErrIntOverflowGroupid
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
					return 0, ErrIntOverflowGroupid
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
				return 0, ErrInvalidLengthGroupid
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupGroupid
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthGroupid
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthGroupid        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowGroupid          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupGroupid = fmt.Errorf("proto: unexpected end of group")
)
