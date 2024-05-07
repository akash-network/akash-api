// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: akash/inventory/v1/node.proto

package v1

import (
	fmt "fmt"
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
	// 360 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x74, 0x92, 0x31, 0x4f, 0xc2, 0x40,
	0x1c, 0xc5, 0x7b, 0x40, 0x4c, 0x5a, 0x08, 0x92, 0x6a, 0x4c, 0x43, 0x62, 0x0f, 0x2f, 0x0e, 0x4c,
	0xd7, 0x00, 0x4e, 0x3a, 0x98, 0x94, 0x9d, 0xa1, 0x6e, 0x2e, 0xe6, 0x80, 0x4b, 0x69, 0x80, 0x1e,
	0xe9, 0x55, 0x12, 0x12, 0x57, 0x77, 0x3f, 0x8e, 0x1f, 0x81, 0x91, 0xd1, 0xe9, 0x62, 0xca, 0xd6,
	0xb1, 0x9f, 0xc0, 0xb4, 0xa7, 0xa5, 0x45, 0xdd, 0xda, 0xf7, 0x7b, 0x7d, 0xaf, 0xf7, 0xff, 0x9f,
	0x76, 0x49, 0xe6, 0x84, 0xcf, 0x2c, 0xcf, 0x5f, 0x53, 0x3f, 0x64, 0xc1, 0xc6, 0x5a, 0xf7, 0x2c,
	0x9f, 0x4d, 0x29, 0x5e, 0x05, 0x2c, 0x64, 0xba, 0x9e, 0x61, 0x9c, 0x63, 0xbc, 0xee, 0xb5, 0xcf,
	0x5d, 0xe6, 0xb2, 0x0c, 0x5b, 0xe9, 0x93, 0x74, 0xb6, 0xd1, 0x1f, 0x41, 0x01, 0xe5, 0xec, 0x39,
	0x98, 0x50, 0x2e, 0x3d, 0xe8, 0x45, 0x6b, 0x8d, 0xd8, 0x94, 0x0e, 0xc9, 0x8a, 0x8c, 0xbd, 0x85,
	0x17, 0x7a, 0x94, 0xeb, 0x33, 0xed, 0x94, 0x87, 0x2c, 0x20, 0x2e, 0x7d, 0x9a, 0x2c, 0x08, 0xe7,
	0x94, 0x1b, 0xa0, 0x53, 0xed, 0xaa, 0xf6, 0x7d, 0x24, 0x60, 0xf3, 0x41, 0xa2, 0xa1, 0x24, 0xb1,
	0x80, 0xc7, 0xe6, 0x44, 0xc0, 0x8b, 0x0d, 0x59, 0x2e, 0x6e, 0xd1, 0x11, 0x40, 0x4e, 0x93, 0x97,
	0x3e, 0x46, 0xef, 0x15, 0xad, 0x96, 0xd6, 0xeb, 0x03, 0xad, 0xe6, 0x93, 0x25, 0x35, 0x40, 0x07,
	0x74, 0x55, 0x1b, 0x46, 0x02, 0xd6, 0x46, 0x64, 0x49, 0x63, 0x01, 0x33, 0x3d, 0x11, 0xb0, 0x2e,
	0x23, 0xd3, 0x37, 0xe4, 0x64, 0xa2, 0xce, 0x35, 0x35, 0x3f, 0x8e, 0x51, 0xe9, 0x80, 0x6e, 0xbd,
	0x7f, 0x85, 0x7f, 0x4f, 0x07, 0xa7, 0x0d, 0xce, 0x8f, 0xd1, 0xee, 0x6f, 0x05, 0x54, 0x22, 0x01,
	0xd5, 0x5c, 0x8a, 0x05, 0x3c, 0x04, 0x25, 0x02, 0xb6, 0x64, 0x55, 0x2e, 0x21, 0xe7, 0x80, 0xf5,
	0x57, 0xa0, 0x35, 0x26, 0x85, 0x69, 0x19, 0xd5, 0xac, 0xf8, 0xfa, 0xbf, 0xe2, 0xe2, 0x64, 0xed,
	0xbb, 0xef, 0xee, 0x46, 0x51, 0x8d, 0x05, 0x2c, 0x25, 0x26, 0x02, 0x9e, 0xc9, 0x3f, 0x28, 0xaa,
	0xc8, 0x29, 0x99, 0xec, 0x9b, 0x6d, 0x64, 0x82, 0x5d, 0x64, 0x82, 0xcf, 0xc8, 0x04, 0x6f, 0x7b,
	0x53, 0xd9, 0xed, 0x4d, 0xe5, 0x63, 0x6f, 0x2a, 0x8f, 0xed, 0xd5, 0xdc, 0xc5, 0x64, 0x1e, 0x62,
	0x2f, 0xbd, 0x0d, 0xa5, 0xf5, 0x8f, 0x4f, 0xb2, 0xad, 0x0f, 0xbe, 0x02, 0x00, 0x00, 0xff, 0xff,
	0x82, 0x4f, 0x0d, 0xa5, 0x64, 0x02, 0x00, 0x00,
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
