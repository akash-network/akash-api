// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: akash/inventory/v1/node.proto

package v1

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

// Node reports node inventory details
type Node struct {
	CPU              CPU     `protobuf:"bytes,1,opt,name=cpu,proto3" json:"cpu" yaml:"cpu"`
	Memory           Memory  `protobuf:"bytes,2,opt,name=memory,proto3" json:"memory" yaml:"memory"`
	GPU              GPU     `protobuf:"bytes,3,opt,name=gpu,proto3,castrepeated=GPUs" json:"gpu" yaml:"gpu"`
	EphemeralStorage Storage `protobuf:"bytes,4,opt,name=storage,proto3" json:"EphemeralStorage" yaml:"EphemeralStorage"`
}

func (m *Node) Reset()         { *m = Node{} }
func (m *Node) String() string { return proto.CompactTextString(m) }
func (*Node) ProtoMessage()    {}
func (*Node) Descriptor() ([]byte, []int) {
	return fileDescriptor_5f97c0fb35079221, []int{0}
}
func (m *Node) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Node) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Node.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Node) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Node.Merge(m, src)
}
func (m *Node) XXX_Size() int {
	return m.Size()
}
func (m *Node) XXX_DiscardUnknown() {
	xxx_messageInfo_Node.DiscardUnknown(m)
}

var xxx_messageInfo_Node proto.InternalMessageInfo

func (m *Node) GetCPU() CPU {
	if m != nil {
		return m.CPU
	}
	return CPU{}
}

func (m *Node) GetMemory() Memory {
	if m != nil {
		return m.Memory
	}
	return Memory{}
}

func (m *Node) GetGPU() GPU {
	if m != nil {
		return m.GPU
	}
	return GPU{}
}

func (m *Node) GetEphemeralStorage() Storage {
	if m != nil {
		return m.EphemeralStorage
	}
	return Storage{}
}

func init() {
	proto.RegisterType((*Node)(nil), "akash.inventory.v1.Node")
}

func init() { proto.RegisterFile("akash/inventory/v1/node.proto", fileDescriptor_5f97c0fb35079221) }

var fileDescriptor_5f97c0fb35079221 = []byte{
	// 374 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x7c, 0x91, 0x3d, 0x6b, 0xbb, 0x40,
	0x1c, 0xc7, 0xf5, 0x6f, 0xc8, 0x1f, 0x2c, 0x85, 0x22, 0x85, 0x88, 0x6d, 0xbd, 0xe0, 0x94, 0x0e,
	0x55, 0x92, 0x6e, 0x1d, 0x0d, 0xc5, 0xa1, 0x0f, 0x88, 0xc1, 0xa5, 0xd0, 0xc1, 0x18, 0xb9, 0x84,
	0x44, 0xef, 0x30, 0x9a, 0x92, 0xa5, 0x6b, 0xd7, 0xbe, 0x8e, 0xbe, 0x92, 0x8c, 0x19, 0x3b, 0x5d,
	0x8b, 0xd9, 0x32, 0xe6, 0x15, 0x14, 0xef, 0x2e, 0xa1, 0x0f, 0xb6, 0x9b, 0xbf, 0xfb, 0x7c, 0xef,
	0xfb, 0xfb, 0xe0, 0xc9, 0x27, 0xc1, 0x38, 0x98, 0x0e, 0xad, 0x51, 0x32, 0x8b, 0x92, 0x0c, 0xa5,
	0x73, 0x6b, 0xd6, 0xb6, 0x12, 0x34, 0x88, 0x4c, 0x9c, 0xa2, 0x0c, 0x29, 0x0a, 0xc5, 0xe6, 0x0e,
	0x9b, 0xb3, 0xb6, 0x76, 0x08, 0x11, 0x44, 0x14, 0x5b, 0xe5, 0x17, 0x4b, 0x6a, 0xc7, 0x15, 0x45,
	0x21, 0xce, 0xff, 0xa0, 0x70, 0x47, 0x9b, 0x15, 0x74, 0x9a, 0xa1, 0x34, 0x80, 0xdc, 0x43, 0x03,
	0x15, 0x89, 0x38, 0x8a, 0x4b, 0x23, 0x1a, 0x30, 0x9e, 0x24, 0xb9, 0x76, 0x8b, 0x06, 0x91, 0x72,
	0x25, 0x4b, 0x21, 0xce, 0x55, 0xb1, 0x29, 0xb6, 0xf6, 0x3a, 0x0d, 0xf3, 0xa7, 0xbf, 0xd9, 0x75,
	0x7d, 0xbb, 0xb9, 0x20, 0x40, 0x28, 0x08, 0x90, 0xba, 0xae, 0xbf, 0x26, 0xa0, 0xbc, 0xb2, 0x21,
	0x40, 0x9e, 0x07, 0xf1, 0xe4, 0xc2, 0x08, 0x71, 0x6e, 0x78, 0xe5, 0x91, 0x72, 0x2f, 0xd7, 0xd9,
	0x16, 0xf5, 0x1f, 0xed, 0xd3, 0xaa, 0xfa, 0x6e, 0x68, 0xc2, 0x3e, 0xe5, 0x95, 0x75, 0x36, 0xaf,
	0x09, 0xe0, 0x77, 0x37, 0x04, 0xec, 0xb3, 0x62, 0x36, 0x1b, 0x1e, 0x07, 0x4a, 0x4f, 0x96, 0x20,
	0xce, 0x55, 0xe9, 0x77, 0x57, 0xc7, 0xf5, 0xed, 0xd6, 0xd6, 0xd5, 0x61, 0xae, 0xf0, 0xb3, 0x2b,
	0xc4, 0xb9, 0xf1, 0xf2, 0x06, 0x6a, 0x8e, 0xeb, 0x4f, 0xbd, 0x12, 0x29, 0x8f, 0xf2, 0x7f, 0xfe,
	0xef, 0xd4, 0x1a, 0x2d, 0x3e, 0xaa, 0x2a, 0xee, 0xb1, 0x88, 0xed, 0xf0, 0xf2, 0x83, 0x4b, 0x3c,
	0x8c, 0xe2, 0x28, 0x0d, 0x26, 0x9c, 0xac, 0x2b, 0xce, 0x36, 0x04, 0x34, 0xd8, 0xda, 0xef, 0xc4,
	0xf0, 0xb6, 0x4b, 0xed, 0xeb, 0x45, 0xa1, 0x8b, 0xcb, 0x42, 0x17, 0xdf, 0x0b, 0x5d, 0x7c, 0x5e,
	0xe9, 0xc2, 0x72, 0xa5, 0x0b, 0xaf, 0x2b, 0x5d, 0xb8, 0xeb, 0xc0, 0x51, 0x36, 0xcc, 0xfb, 0x66,
	0x88, 0x62, 0x8b, 0x2a, 0x9d, 0x25, 0x51, 0xf6, 0x80, 0xd2, 0x31, 0x9f, 0x02, 0x3c, 0xb2, 0x20,
	0xfa, 0xf2, 0xc8, 0xfd, 0x3a, 0x7d, 0xde, 0xf3, 0x8f, 0x00, 0x00, 0x00, 0xff, 0xff, 0xb5, 0x3d,
	0xc9, 0x60, 0xa8, 0x02, 0x00, 0x00,
}

func (m *Node) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Node) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Node) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	{
		size, err := m.EphemeralStorage.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintNode(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0x22
	{
		size, err := m.GPU.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintNode(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0x1a
	{
		size, err := m.Memory.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintNode(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0x12
	{
		size, err := m.CPU.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintNode(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0xa
	return len(dAtA) - i, nil
}

func encodeVarintNode(dAtA []byte, offset int, v uint64) int {
	offset -= sovNode(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *Node) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = m.CPU.Size()
	n += 1 + l + sovNode(uint64(l))
	l = m.Memory.Size()
	n += 1 + l + sovNode(uint64(l))
	l = m.GPU.Size()
	n += 1 + l + sovNode(uint64(l))
	l = m.EphemeralStorage.Size()
	n += 1 + l + sovNode(uint64(l))
	return n
}

func sovNode(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozNode(x uint64) (n int) {
	return sovNode(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *Node) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowNode
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
			return fmt.Errorf("proto: Node: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Node: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field CPU", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowNode
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
				return ErrInvalidLengthNode
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthNode
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.CPU.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Memory", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowNode
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
				return ErrInvalidLengthNode
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthNode
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.Memory.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field GPU", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowNode
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
				return ErrInvalidLengthNode
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthNode
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.GPU.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field EphemeralStorage", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowNode
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
				return ErrInvalidLengthNode
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthNode
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.EphemeralStorage.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipNode(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthNode
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
func skipNode(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowNode
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
					return 0, ErrIntOverflowNode
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
					return 0, ErrIntOverflowNode
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
				return 0, ErrInvalidLengthNode
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupNode
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthNode
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthNode        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowNode          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupNode = fmt.Errorf("proto: unexpected end of group")
)
