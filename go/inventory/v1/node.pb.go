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

// NodeCapabilities extended list of node capabilities
type NodeCapabilities struct {
	StorageClasses []string `protobuf:"bytes,1,rep,name=storage_classes,json=storageClasses,proto3" json:"storage_classes" yaml:"storage_classes"`
}

func (m *NodeCapabilities) Reset()         { *m = NodeCapabilities{} }
func (m *NodeCapabilities) String() string { return proto.CompactTextString(m) }
func (*NodeCapabilities) ProtoMessage()    {}
func (*NodeCapabilities) Descriptor() ([]byte, []int) {
	return fileDescriptor_5f97c0fb35079221, []int{0}
}
func (m *NodeCapabilities) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *NodeCapabilities) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_NodeCapabilities.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *NodeCapabilities) XXX_Merge(src proto.Message) {
	xxx_messageInfo_NodeCapabilities.Merge(m, src)
}
func (m *NodeCapabilities) XXX_Size() int {
	return m.Size()
}
func (m *NodeCapabilities) XXX_DiscardUnknown() {
	xxx_messageInfo_NodeCapabilities.DiscardUnknown(m)
}

var xxx_messageInfo_NodeCapabilities proto.InternalMessageInfo

func (m *NodeCapabilities) GetStorageClasses() []string {
	if m != nil {
		return m.StorageClasses
	}
	return nil
}

// Node reports node inventory details
type Node struct {
	Name         string           `protobuf:"bytes,1,opt,name=name,proto3" json:"name" yaml:"name"`
	Resources    NodeResources    `protobuf:"bytes,2,opt,name=resources,proto3" json:"resources" yaml:"resources"`
	Capabilities NodeCapabilities `protobuf:"bytes,3,opt,name=capabilities,proto3" json:"capabilities" yaml:"capabilities"`
}

func (m *Node) Reset()         { *m = Node{} }
func (m *Node) String() string { return proto.CompactTextString(m) }
func (*Node) ProtoMessage()    {}
func (*Node) Descriptor() ([]byte, []int) {
	return fileDescriptor_5f97c0fb35079221, []int{1}
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

func (m *Node) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *Node) GetResources() NodeResources {
	if m != nil {
		return m.Resources
	}
	return NodeResources{}
}

func (m *Node) GetCapabilities() NodeCapabilities {
	if m != nil {
		return m.Capabilities
	}
	return NodeCapabilities{}
}

func init() {
	proto.RegisterType((*NodeCapabilities)(nil), "akash.inventory.v1.NodeCapabilities")
	proto.RegisterType((*Node)(nil), "akash.inventory.v1.Node")
}

func init() { proto.RegisterFile("akash/inventory/v1/node.proto", fileDescriptor_5f97c0fb35079221) }

var fileDescriptor_5f97c0fb35079221 = []byte{
	// 375 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x74, 0x92, 0x31, 0x4f, 0xc2, 0x40,
	0x1c, 0xc5, 0x7b, 0x40, 0x4c, 0x5a, 0x08, 0x92, 0x6a, 0x4c, 0x43, 0x62, 0x0f, 0x2f, 0x0e, 0x2c,
	0xb6, 0x01, 0x36, 0x1d, 0x4c, 0xca, 0x6a, 0x18, 0xea, 0xe6, 0x62, 0x8e, 0x72, 0x29, 0x0d, 0xb4,
	0x47, 0x7a, 0x05, 0x43, 0xe2, 0xea, 0xee, 0xc7, 0xf1, 0x23, 0x30, 0x32, 0x3a, 0x5d, 0x4c, 0xd9,
	0x3a, 0xf6, 0x13, 0x98, 0xb6, 0x58, 0x5a, 0xd4, 0xad, 0xf7, 0x7e, 0xaf, 0xef, 0xdd, 0xfd, 0xf3,
	0x97, 0x2e, 0xf1, 0x0c, 0xb3, 0xa9, 0xee, 0x78, 0x2b, 0xe2, 0x05, 0xd4, 0x5f, 0xeb, 0xab, 0x9e,
	0xee, 0xd1, 0x09, 0xd1, 0x16, 0x3e, 0x0d, 0xa8, 0x2c, 0xa7, 0x58, 0xcb, 0xb1, 0xb6, 0xea, 0xb5,
	0xcf, 0x6d, 0x6a, 0xd3, 0x14, 0xeb, 0xc9, 0x57, 0xe6, 0x6c, 0xa3, 0x3f, 0x82, 0x7c, 0xc2, 0xe8,
	0xd2, 0xb7, 0x08, 0xcb, 0x3c, 0xe8, 0x55, 0x6a, 0x8d, 0xe8, 0x84, 0x0c, 0xf1, 0x02, 0x8f, 0x9d,
	0xb9, 0x13, 0x38, 0x84, 0xc9, 0x53, 0xe9, 0x94, 0x05, 0xd4, 0xc7, 0x36, 0x79, 0xb6, 0xe6, 0x98,
	0x31, 0xc2, 0x14, 0xd0, 0xa9, 0x76, 0x45, 0xe3, 0x3e, 0xe4, 0xb0, 0xf9, 0x98, 0xa1, 0x61, 0x46,
	0x22, 0x0e, 0x8f, 0xcd, 0x31, 0x87, 0x17, 0x6b, 0xec, 0xce, 0x6f, 0xd1, 0x11, 0x40, 0x66, 0x93,
	0x95, 0x7e, 0x46, 0x1f, 0x15, 0xa9, 0x96, 0xd4, 0xcb, 0x03, 0xa9, 0xe6, 0x61, 0x97, 0x28, 0xa0,
	0x03, 0xba, 0xa2, 0x01, 0x43, 0x0e, 0x6b, 0x23, 0xec, 0x92, 0x88, 0xc3, 0x54, 0x8f, 0x39, 0xac,
	0x67, 0x91, 0xc9, 0x09, 0x99, 0xa9, 0x28, 0x33, 0x49, 0xcc, 0x9f, 0xa3, 0x54, 0x3a, 0xa0, 0x5b,
	0xef, 0x5f, 0x69, 0xbf, 0xa7, 0xa3, 0x25, 0x0d, 0xe6, 0x8f, 0xd1, 0xe8, 0x6f, 0x38, 0x14, 0x42,
	0x0e, 0xc5, 0x5c, 0x8a, 0x38, 0x3c, 0x04, 0xc5, 0x1c, 0xb6, 0xb2, 0xaa, 0x5c, 0x42, 0xe6, 0x01,
	0xcb, 0x6f, 0x40, 0x6a, 0x58, 0x85, 0x69, 0x29, 0xd5, 0xb4, 0xf8, 0xfa, 0xbf, 0xe2, 0xe2, 0x64,
	0x8d, 0xbb, 0x7d, 0x77, 0xa3, 0xa8, 0x46, 0x1c, 0x96, 0x12, 0x63, 0x0e, 0xcf, 0xb2, 0x1b, 0x14,
	0x55, 0x64, 0x96, 0x4c, 0xc6, 0xc3, 0x26, 0x54, 0xc1, 0x36, 0x54, 0xc1, 0x57, 0xa8, 0x82, 0xf7,
	0x9d, 0x2a, 0x6c, 0x77, 0xaa, 0xf0, 0xb9, 0x53, 0x85, 0xa7, 0xbe, 0xed, 0x04, 0xd3, 0xe5, 0x58,
	0xb3, 0xa8, 0xab, 0xa7, 0x97, 0xba, 0xf1, 0x48, 0xf0, 0x42, 0xfd, 0xd9, 0xfe, 0x84, 0x17, 0x8e,
	0x6e, 0xd3, 0xd2, 0x5a, 0x8c, 0x4f, 0xd2, 0x6d, 0x18, 0x7c, 0x07, 0x00, 0x00, 0xff, 0xff, 0x7f,
	0xc1, 0xd6, 0x12, 0x7c, 0x02, 0x00, 0x00,
}

func (m *NodeCapabilities) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *NodeCapabilities) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *NodeCapabilities) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.StorageClasses) > 0 {
		for iNdEx := len(m.StorageClasses) - 1; iNdEx >= 0; iNdEx-- {
			i -= len(m.StorageClasses[iNdEx])
			copy(dAtA[i:], m.StorageClasses[iNdEx])
			i = encodeVarintNode(dAtA, i, uint64(len(m.StorageClasses[iNdEx])))
			i--
			dAtA[i] = 0xa
		}
	}
	return len(dAtA) - i, nil
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
		size, err := m.Capabilities.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintNode(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0x1a
	{
		size, err := m.Resources.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintNode(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0x12
	if len(m.Name) > 0 {
		i -= len(m.Name)
		copy(dAtA[i:], m.Name)
		i = encodeVarintNode(dAtA, i, uint64(len(m.Name)))
		i--
		dAtA[i] = 0xa
	}
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
func (m *NodeCapabilities) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if len(m.StorageClasses) > 0 {
		for _, s := range m.StorageClasses {
			l = len(s)
			n += 1 + l + sovNode(uint64(l))
		}
	}
	return n
}

func (m *Node) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Name)
	if l > 0 {
		n += 1 + l + sovNode(uint64(l))
	}
	l = m.Resources.Size()
	n += 1 + l + sovNode(uint64(l))
	l = m.Capabilities.Size()
	n += 1 + l + sovNode(uint64(l))
	return n
}

func sovNode(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozNode(x uint64) (n int) {
	return sovNode(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *NodeCapabilities) Unmarshal(dAtA []byte) error {
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
			return fmt.Errorf("proto: NodeCapabilities: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: NodeCapabilities: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field StorageClasses", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowNode
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
				return ErrInvalidLengthNode
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthNode
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.StorageClasses = append(m.StorageClasses, string(dAtA[iNdEx:postIndex]))
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
				return fmt.Errorf("proto: wrong wireType = %d for field Name", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowNode
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
				return ErrInvalidLengthNode
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthNode
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Name = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Resources", wireType)
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
			if err := m.Resources.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Capabilities", wireType)
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
			if err := m.Capabilities.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
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
