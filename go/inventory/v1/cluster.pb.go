// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: akash/inventory/v1/cluster.proto

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

type Cluster struct {
	Nodes   []Node    `protobuf:"bytes,1,rep,name=nodes,proto3" json:"nodes" yaml:"nodes"`
	Storage []Storage `protobuf:"bytes,2,rep,name=storage,proto3" json:"storage" yaml:"storage"`
}

func (m *Cluster) Reset()         { *m = Cluster{} }
func (m *Cluster) String() string { return proto.CompactTextString(m) }
func (*Cluster) ProtoMessage()    {}
func (*Cluster) Descriptor() ([]byte, []int) {
	return fileDescriptor_205585ebfe7f68ce, []int{0}
}
func (m *Cluster) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Cluster) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Cluster.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Cluster) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Cluster.Merge(m, src)
}
func (m *Cluster) XXX_Size() int {
	return m.Size()
}
func (m *Cluster) XXX_DiscardUnknown() {
	xxx_messageInfo_Cluster.DiscardUnknown(m)
}

var xxx_messageInfo_Cluster proto.InternalMessageInfo

func (m *Cluster) GetNodes() []Node {
	if m != nil {
		return m.Nodes
	}
	return nil
}

func (m *Cluster) GetStorage() []Storage {
	if m != nil {
		return m.Storage
	}
	return nil
}

func init() {
	proto.RegisterType((*Cluster)(nil), "akash.inventory.v1.Cluster")
}

func init() { proto.RegisterFile("akash/inventory/v1/cluster.proto", fileDescriptor_205585ebfe7f68ce) }

var fileDescriptor_205585ebfe7f68ce = []byte{
	// 299 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x52, 0x48, 0xcc, 0x4e, 0x2c,
	0xce, 0xd0, 0xcf, 0xcc, 0x2b, 0x4b, 0xcd, 0x2b, 0xc9, 0x2f, 0xaa, 0xd4, 0x2f, 0x33, 0xd4, 0x4f,
	0xce, 0x29, 0x2d, 0x2e, 0x49, 0x2d, 0xd2, 0x2b, 0x28, 0xca, 0x2f, 0xc9, 0x17, 0x12, 0x02, 0xab,
	0xd0, 0x83, 0xab, 0xd0, 0x2b, 0x33, 0x94, 0x12, 0x49, 0xcf, 0x4f, 0xcf, 0x07, 0x4b, 0xeb, 0x83,
	0x58, 0x10, 0x95, 0x52, 0xb2, 0x58, 0xcc, 0xca, 0xcb, 0x4f, 0x49, 0x85, 0x4a, 0xab, 0x62, 0x91,
	0x2e, 0x4a, 0x2d, 0xce, 0x2f, 0x2d, 0x4a, 0x4e, 0x2d, 0x48, 0xcc, 0x84, 0xda, 0x27, 0x85, 0xcd,
	0x45, 0xc5, 0x25, 0xf9, 0x45, 0x89, 0xe9, 0x50, 0x83, 0x94, 0xce, 0x30, 0x72, 0xb1, 0x3b, 0x43,
	0xdc, 0x28, 0x14, 0xc6, 0xc5, 0x0a, 0xb2, 0xa2, 0x58, 0x82, 0x51, 0x81, 0x59, 0x83, 0xdb, 0x48,
	0x42, 0x0f, 0xd3, 0xb5, 0x7a, 0x7e, 0xf9, 0x29, 0xa9, 0x4e, 0x6a, 0x27, 0xee, 0xc9, 0x33, 0x3c,
	0xba, 0x27, 0xcf, 0x0a, 0xe2, 0x15, 0xbf, 0xba, 0x27, 0x0f, 0xd1, 0xf7, 0xe9, 0x9e, 0x3c, 0x4f,
	0x65, 0x62, 0x6e, 0x8e, 0x95, 0x12, 0x98, 0xab, 0x14, 0x04, 0x11, 0x16, 0x4a, 0xe6, 0x62, 0x87,
	0x5a, 0x2a, 0xc1, 0x04, 0x36, 0x59, 0x1a, 0x9b, 0xc9, 0xc1, 0x10, 0x25, 0x4e, 0x3a, 0x50, 0xc3,
	0xd9, 0xa1, 0x02, 0xaf, 0xee, 0xc9, 0xc3, 0xb4, 0x7f, 0xba, 0x27, 0xcf, 0x07, 0xb1, 0x00, 0x2a,
	0xa0, 0x14, 0x04, 0x93, 0xb2, 0x62, 0x79, 0xb1, 0x40, 0x9e, 0xc1, 0xc9, 0xe7, 0xc4, 0x23, 0x39,
	0xc6, 0x0b, 0x8f, 0xe4, 0x18, 0x1f, 0x3c, 0x92, 0x63, 0x9c, 0xf0, 0x58, 0x8e, 0xe1, 0xc2, 0x63,
	0x39, 0x86, 0x1b, 0x8f, 0xe5, 0x18, 0xa2, 0x8c, 0xd2, 0x33, 0x4b, 0x32, 0x4a, 0x93, 0xf4, 0x92,
	0xf3, 0x73, 0xf5, 0xc1, 0xb6, 0xeb, 0xe6, 0xa5, 0x96, 0x94, 0xe7, 0x17, 0x65, 0x43, 0x79, 0x89,
	0x05, 0x99, 0xfa, 0xe9, 0xf9, 0x28, 0x41, 0x95, 0xc4, 0x06, 0x0e, 0x23, 0x63, 0x40, 0x00, 0x00,
	0x00, 0xff, 0xff, 0x66, 0x15, 0x3e, 0x60, 0xd9, 0x01, 0x00, 0x00,
}

func (m *Cluster) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Cluster) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Cluster) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Storage) > 0 {
		for iNdEx := len(m.Storage) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.Storage[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintCluster(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x12
		}
	}
	if len(m.Nodes) > 0 {
		for iNdEx := len(m.Nodes) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.Nodes[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintCluster(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0xa
		}
	}
	return len(dAtA) - i, nil
}

func encodeVarintCluster(dAtA []byte, offset int, v uint64) int {
	offset -= sovCluster(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *Cluster) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if len(m.Nodes) > 0 {
		for _, e := range m.Nodes {
			l = e.Size()
			n += 1 + l + sovCluster(uint64(l))
		}
	}
	if len(m.Storage) > 0 {
		for _, e := range m.Storage {
			l = e.Size()
			n += 1 + l + sovCluster(uint64(l))
		}
	}
	return n
}

func sovCluster(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozCluster(x uint64) (n int) {
	return sovCluster(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *Cluster) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowCluster
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
			return fmt.Errorf("proto: Cluster: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Cluster: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Nodes", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCluster
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
				return ErrInvalidLengthCluster
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthCluster
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Nodes = append(m.Nodes, Node{})
			if err := m.Nodes[len(m.Nodes)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Storage", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCluster
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
				return ErrInvalidLengthCluster
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthCluster
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Storage = append(m.Storage, Storage{})
			if err := m.Storage[len(m.Storage)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipCluster(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthCluster
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
func skipCluster(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowCluster
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
					return 0, ErrIntOverflowCluster
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
					return 0, ErrIntOverflowCluster
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
				return 0, ErrInvalidLengthCluster
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupCluster
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthCluster
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthCluster        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowCluster          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupCluster = fmt.Errorf("proto: unexpected end of group")
)
