// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: akash/sdl/v2/expose_to.proto

package v2

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

type ExposeTo struct {
	Service     string      `protobuf:"bytes,1,opt,name=service,proto3" json:"service" yaml:"service"`
	Global      bool        `protobuf:"varint,2,opt,name=Global,proto3" json:"global" yaml:"global"`
	HTTPOptions HTTPOptions `protobuf:"bytes,3,opt,name=http_options,json=httpOptions,proto3" json:"http_options" yaml:"http_options"`
	IP          string      `protobuf:"bytes,4,opt,name=ip,proto3" json:"ip" yaml:"ip"`
}

func (m *ExposeTo) Reset()         { *m = ExposeTo{} }
func (m *ExposeTo) String() string { return proto.CompactTextString(m) }
func (*ExposeTo) ProtoMessage()    {}
func (*ExposeTo) Descriptor() ([]byte, []int) {
	return fileDescriptor_f4d15619ab49a1b7, []int{0}
}
func (m *ExposeTo) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *ExposeTo) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_ExposeTo.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *ExposeTo) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ExposeTo.Merge(m, src)
}
func (m *ExposeTo) XXX_Size() int {
	return m.Size()
}
func (m *ExposeTo) XXX_DiscardUnknown() {
	xxx_messageInfo_ExposeTo.DiscardUnknown(m)
}

var xxx_messageInfo_ExposeTo proto.InternalMessageInfo

func (m *ExposeTo) GetService() string {
	if m != nil {
		return m.Service
	}
	return ""
}

func (m *ExposeTo) GetGlobal() bool {
	if m != nil {
		return m.Global
	}
	return false
}

func (m *ExposeTo) GetHTTPOptions() HTTPOptions {
	if m != nil {
		return m.HTTPOptions
	}
	return HTTPOptions{}
}

func (m *ExposeTo) GetIP() string {
	if m != nil {
		return m.IP
	}
	return ""
}

func init() {
	proto.RegisterType((*ExposeTo)(nil), "akash.sdl.v2.ExposeTo")
}

func init() { proto.RegisterFile("akash/sdl/v2/expose_to.proto", fileDescriptor_f4d15619ab49a1b7) }

var fileDescriptor_f4d15619ab49a1b7 = []byte{
	// 348 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x54, 0x51, 0xcd, 0x6a, 0xfa, 0x40,
	0x10, 0x4f, 0xf2, 0xff, 0xe3, 0x47, 0xb4, 0x3d, 0xa4, 0x3d, 0x44, 0x29, 0x19, 0x09, 0x14, 0x52,
	0x68, 0x13, 0xb0, 0x37, 0xa1, 0x97, 0x40, 0xbf, 0x4e, 0x95, 0xd4, 0x53, 0x2f, 0x12, 0x35, 0xc4,
	0xc5, 0xe8, 0x2e, 0x66, 0x6b, 0xed, 0x5b, 0xf4, 0x59, 0xfa, 0x14, 0x1e, 0x3d, 0xf6, 0xb4, 0x94,
	0xf5, 0x96, 0x63, 0x9e, 0xa0, 0xb8, 0x1b, 0x21, 0xde, 0xe6, 0xf7, 0x31, 0xbf, 0x99, 0x61, 0xf4,
	0x8b, 0x70, 0x16, 0xa6, 0x53, 0x2f, 0x9d, 0x24, 0xde, 0xaa, 0xeb, 0x45, 0x6b, 0x82, 0xd3, 0x68,
	0x48, 0xb1, 0x4b, 0x96, 0x98, 0x62, 0xa3, 0x29, 0x54, 0x37, 0x9d, 0x24, 0xee, 0xaa, 0xdb, 0x3e,
	0x8f, 0x71, 0x8c, 0x85, 0xe0, 0xed, 0x2b, 0xe9, 0x69, 0xc3, 0x51, 0xc2, 0x94, 0x52, 0x32, 0xc4,
	0x84, 0x22, 0xbc, 0x48, 0xa5, 0xc1, 0xfe, 0xd6, 0xf4, 0xda, 0xbd, 0x08, 0x1e, 0x60, 0xc3, 0xd7,
	0xab, 0x69, 0xb4, 0x5c, 0xa1, 0x71, 0x64, 0xaa, 0x1d, 0xd5, 0xa9, 0xfb, 0x0e, 0x67, 0x50, 0x7d,
	0x95, 0x54, 0xc6, 0xe0, 0xa0, 0xe6, 0x0c, 0x4e, 0x3f, 0xc3, 0x79, 0xd2, 0xb3, 0x0b, 0xc2, 0x0e,
	0x0e, 0x92, 0x71, 0xa7, 0x57, 0x1e, 0x13, 0x3c, 0x0a, 0x13, 0x53, 0xeb, 0xa8, 0x4e, 0xcd, 0xbf,
	0xe4, 0x0c, 0x0a, 0x26, 0x63, 0x50, 0x89, 0x45, 0x95, 0x33, 0x38, 0x91, 0x01, 0x12, 0xdb, 0x41,
	0x61, 0x31, 0xd6, 0x7a, 0xb3, 0xbc, 0xa5, 0xf9, 0xaf, 0xa3, 0x3a, 0x8d, 0x6e, 0xcb, 0x2d, 0xdf,
	0xea, 0x3e, 0x0d, 0x06, 0xfd, 0x17, 0x69, 0xf0, 0x7b, 0x1b, 0x06, 0x0a, 0x67, 0xd0, 0x28, 0x91,
	0x19, 0x83, 0xa3, 0x94, 0x9c, 0xc1, 0x99, 0x1c, 0x57, 0x66, 0xed, 0xa0, 0xb1, 0x87, 0x45, 0x8f,
	0x71, 0xa5, 0x6b, 0x88, 0x98, 0xff, 0xc5, 0xdd, 0x2d, 0xce, 0x40, 0x7b, 0xee, 0x67, 0x0c, 0x34,
	0x44, 0x72, 0x06, 0x75, 0xd9, 0x8d, 0x88, 0x1d, 0x68, 0x88, 0xf8, 0x0f, 0x1b, 0x6e, 0xa9, 0x5b,
	0x6e, 0xa9, 0xbf, 0xdc, 0x52, 0xbf, 0x76, 0x96, 0xb2, 0xdd, 0x59, 0xca, 0xcf, 0xce, 0x52, 0xde,
	0xae, 0x63, 0x44, 0xa7, 0xef, 0x23, 0x77, 0x8c, 0xe7, 0x9e, 0x58, 0xf9, 0x66, 0x11, 0xd1, 0x0f,
	0xbc, 0x9c, 0x15, 0x28, 0x24, 0xc8, 0x8b, 0x71, 0xf1, 0x8f, 0x51, 0x45, 0xfc, 0xe0, 0xf6, 0x2f,
	0x00, 0x00, 0xff, 0xff, 0x4d, 0x15, 0x59, 0x58, 0xe8, 0x01, 0x00, 0x00,
}

func (m *ExposeTo) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *ExposeTo) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *ExposeTo) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.IP) > 0 {
		i -= len(m.IP)
		copy(dAtA[i:], m.IP)
		i = encodeVarintExposeTo(dAtA, i, uint64(len(m.IP)))
		i--
		dAtA[i] = 0x22
	}
	{
		size, err := m.HTTPOptions.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintExposeTo(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0x1a
	if m.Global {
		i--
		if m.Global {
			dAtA[i] = 1
		} else {
			dAtA[i] = 0
		}
		i--
		dAtA[i] = 0x10
	}
	if len(m.Service) > 0 {
		i -= len(m.Service)
		copy(dAtA[i:], m.Service)
		i = encodeVarintExposeTo(dAtA, i, uint64(len(m.Service)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintExposeTo(dAtA []byte, offset int, v uint64) int {
	offset -= sovExposeTo(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *ExposeTo) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Service)
	if l > 0 {
		n += 1 + l + sovExposeTo(uint64(l))
	}
	if m.Global {
		n += 2
	}
	l = m.HTTPOptions.Size()
	n += 1 + l + sovExposeTo(uint64(l))
	l = len(m.IP)
	if l > 0 {
		n += 1 + l + sovExposeTo(uint64(l))
	}
	return n
}

func sovExposeTo(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozExposeTo(x uint64) (n int) {
	return sovExposeTo(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *ExposeTo) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowExposeTo
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
			return fmt.Errorf("proto: ExposeTo: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: ExposeTo: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Service", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowExposeTo
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
				return ErrInvalidLengthExposeTo
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthExposeTo
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Service = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Global", wireType)
			}
			var v int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowExposeTo
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				v |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			m.Global = bool(v != 0)
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field HTTPOptions", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowExposeTo
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
				return ErrInvalidLengthExposeTo
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthExposeTo
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.HTTPOptions.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field IP", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowExposeTo
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
				return ErrInvalidLengthExposeTo
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthExposeTo
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.IP = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipExposeTo(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthExposeTo
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
func skipExposeTo(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowExposeTo
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
					return 0, ErrIntOverflowExposeTo
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
					return 0, ErrIntOverflowExposeTo
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
				return 0, ErrInvalidLengthExposeTo
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupExposeTo
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthExposeTo
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthExposeTo        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowExposeTo          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupExposeTo = fmt.Errorf("proto: unexpected end of group")
)
