// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: akash/manifest/v2beta2/httpoptions.proto

package v2beta2

import (
	fmt "fmt"
	_ "github.com/gogo/protobuf/gogoproto"
	proto "github.com/gogo/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
	reflect "reflect"
	strings "strings"
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

// ServiceExposeHTTPOptions
type ServiceExposeHTTPOptions struct {
	MaxBodySize uint32   `protobuf:"varint,1,opt,name=max_body_size,json=maxBodySize,proto3" json:"maxBodySize" yaml:"maxBodySize"`
	ReadTimeout uint32   `protobuf:"varint,2,opt,name=read_timeout,json=readTimeout,proto3" json:"readTimeout" yaml:"readTimeout"`
	SendTimeout uint32   `protobuf:"varint,3,opt,name=send_timeout,json=sendTimeout,proto3" json:"sendTimeout" yaml:"sendTimeout"`
	NextTries   uint32   `protobuf:"varint,4,opt,name=next_tries,json=nextTries,proto3" json:"nextTries" yaml:"nextTries"`
	NextTimeout uint32   `protobuf:"varint,5,opt,name=next_timeout,json=nextTimeout,proto3" json:"nextTimeout" yaml:"nextTimeout"`
	NextCases   []string `protobuf:"bytes,6,rep,name=next_cases,json=nextCases,proto3" json:"nextCases" yaml:"nextCases"`
}

func (m *ServiceExposeHTTPOptions) Reset()      { *m = ServiceExposeHTTPOptions{} }
func (*ServiceExposeHTTPOptions) ProtoMessage() {}
func (*ServiceExposeHTTPOptions) Descriptor() ([]byte, []int) {
	return fileDescriptor_8764ded002d8de0f, []int{0}
}
func (m *ServiceExposeHTTPOptions) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *ServiceExposeHTTPOptions) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_ServiceExposeHTTPOptions.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *ServiceExposeHTTPOptions) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ServiceExposeHTTPOptions.Merge(m, src)
}
func (m *ServiceExposeHTTPOptions) XXX_Size() int {
	return m.Size()
}
func (m *ServiceExposeHTTPOptions) XXX_DiscardUnknown() {
	xxx_messageInfo_ServiceExposeHTTPOptions.DiscardUnknown(m)
}

var xxx_messageInfo_ServiceExposeHTTPOptions proto.InternalMessageInfo

func (m *ServiceExposeHTTPOptions) GetMaxBodySize() uint32 {
	if m != nil {
		return m.MaxBodySize
	}
	return 0
}

func (m *ServiceExposeHTTPOptions) GetReadTimeout() uint32 {
	if m != nil {
		return m.ReadTimeout
	}
	return 0
}

func (m *ServiceExposeHTTPOptions) GetSendTimeout() uint32 {
	if m != nil {
		return m.SendTimeout
	}
	return 0
}

func (m *ServiceExposeHTTPOptions) GetNextTries() uint32 {
	if m != nil {
		return m.NextTries
	}
	return 0
}

func (m *ServiceExposeHTTPOptions) GetNextTimeout() uint32 {
	if m != nil {
		return m.NextTimeout
	}
	return 0
}

func (m *ServiceExposeHTTPOptions) GetNextCases() []string {
	if m != nil {
		return m.NextCases
	}
	return nil
}

func init() {
	proto.RegisterType((*ServiceExposeHTTPOptions)(nil), "akash.manifest.v2beta2.ServiceExposeHTTPOptions")
}

func init() {
	proto.RegisterFile("akash/manifest/v2beta2/httpoptions.proto", fileDescriptor_8764ded002d8de0f)
}

var fileDescriptor_8764ded002d8de0f = []byte{
	// 377 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x64, 0x92, 0xb1, 0x6a, 0xdb, 0x40,
	0x1c, 0x87, 0xa5, 0xba, 0x35, 0x58, 0xad, 0xa1, 0x88, 0x52, 0x44, 0x87, 0x93, 0x2b, 0x28, 0x78,
	0xa9, 0x04, 0x0e, 0x64, 0xc8, 0x14, 0x1c, 0x02, 0xce, 0x94, 0x20, 0x6b, 0x08, 0x59, 0xc4, 0xc9,
	0xbe, 0xc8, 0x87, 0x23, 0x9d, 0xd0, 0x9d, 0x1d, 0xd9, 0x53, 0x1e, 0x21, 0x6f, 0x95, 0x8c, 0x1e,
	0x3d, 0x89, 0x44, 0xde, 0x3c, 0xfa, 0x09, 0xc2, 0x9d, 0x14, 0xeb, 0x12, 0x6f, 0xa7, 0x4f, 0x1f,
	0x1f, 0xbf, 0xe1, 0xaf, 0x75, 0xe1, 0x14, 0xd2, 0x89, 0x13, 0xc1, 0x18, 0xdf, 0x22, 0xca, 0x9c,
	0x79, 0x2f, 0x40, 0x0c, 0xf6, 0x9c, 0x09, 0x63, 0x09, 0x49, 0x18, 0x26, 0x31, 0xb5, 0x93, 0x94,
	0x30, 0xa2, 0xff, 0x16, 0xa6, 0xfd, 0x6e, 0xda, 0x95, 0xf9, 0xe7, 0x57, 0x48, 0x42, 0x22, 0x14,
	0x87, 0xbf, 0x4a, 0xdb, 0x7a, 0x6a, 0x68, 0xc6, 0x10, 0xa5, 0x73, 0x3c, 0x42, 0xe7, 0x59, 0x42,
	0x28, 0x1a, 0x78, 0xde, 0xd5, 0x65, 0x19, 0xd4, 0x2f, 0xb4, 0x76, 0x04, 0x33, 0x3f, 0x20, 0xe3,
	0x85, 0x4f, 0xf1, 0x12, 0x19, 0x6a, 0x47, 0xed, 0xb6, 0xfb, 0xff, 0xb6, 0xb9, 0xf9, 0x3d, 0x82,
	0x59, 0x9f, 0x8c, 0x17, 0x43, 0xbc, 0x44, 0xbb, 0xdc, 0xd4, 0x17, 0x30, 0xba, 0x3b, 0xb1, 0x24,
	0x68, 0xb9, 0xb2, 0xa2, 0x0f, 0xb4, 0x1f, 0x29, 0x82, 0x63, 0x9f, 0xe1, 0x08, 0x91, 0x19, 0x33,
	0xbe, 0xd4, 0x25, 0xce, 0xbd, 0x12, 0xd7, 0x25, 0x09, 0x5a, 0xae, 0xac, 0xf0, 0x12, 0x45, 0x71,
	0x5d, 0x6a, 0xd4, 0x25, 0xce, 0x0f, 0x4a, 0x12, 0xb4, 0x5c, 0x59, 0xd1, 0x4f, 0x35, 0x2d, 0x46,
	0x19, 0xf3, 0x59, 0x8a, 0x11, 0x35, 0xbe, 0x8a, 0xce, 0xdf, 0x6d, 0x6e, 0xb6, 0x38, 0xf5, 0x38,
	0xdc, 0xe5, 0xe6, 0xcf, 0xb2, 0xb2, 0x47, 0x96, 0x5b, 0xff, 0xe6, 0x5b, 0xca, 0x42, 0xb5, 0xe5,
	0x5b, 0xbd, 0x45, 0x48, 0x9f, 0xb7, 0x48, 0xd0, 0x72, 0x65, 0x65, 0xbf, 0x65, 0x04, 0x29, 0xa2,
	0x46, 0xb3, 0xd3, 0xe8, 0xb6, 0xea, 0x2d, 0x67, 0x1c, 0x7e, 0xdc, 0x22, 0x50, 0xb5, 0x45, 0xbc,
	0xfb, 0xd7, 0xeb, 0x57, 0xa0, 0x3c, 0x14, 0x40, 0x7d, 0x2e, 0x80, 0xba, 0x2a, 0x80, 0xfa, 0x52,
	0x00, 0xf5, 0x71, 0x03, 0x94, 0xd5, 0x06, 0x28, 0xeb, 0x0d, 0x50, 0x6e, 0x8e, 0x43, 0xcc, 0x26,
	0xb3, 0xc0, 0x1e, 0x91, 0xc8, 0x11, 0x47, 0xf2, 0x3f, 0x46, 0xec, 0x9e, 0xa4, 0xd3, 0xea, 0x0b,
	0x26, 0xd8, 0x09, 0xc9, 0xc1, 0x8d, 0x05, 0x4d, 0x71, 0x2a, 0x47, 0x6f, 0x01, 0x00, 0x00, 0xff,
	0xff, 0x0d, 0x59, 0x8b, 0x64, 0x84, 0x02, 0x00, 0x00,
}

func (m *ServiceExposeHTTPOptions) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *ServiceExposeHTTPOptions) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *ServiceExposeHTTPOptions) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.NextCases) > 0 {
		for iNdEx := len(m.NextCases) - 1; iNdEx >= 0; iNdEx-- {
			i -= len(m.NextCases[iNdEx])
			copy(dAtA[i:], m.NextCases[iNdEx])
			i = encodeVarintHttpoptions(dAtA, i, uint64(len(m.NextCases[iNdEx])))
			i--
			dAtA[i] = 0x32
		}
	}
	if m.NextTimeout != 0 {
		i = encodeVarintHttpoptions(dAtA, i, uint64(m.NextTimeout))
		i--
		dAtA[i] = 0x28
	}
	if m.NextTries != 0 {
		i = encodeVarintHttpoptions(dAtA, i, uint64(m.NextTries))
		i--
		dAtA[i] = 0x20
	}
	if m.SendTimeout != 0 {
		i = encodeVarintHttpoptions(dAtA, i, uint64(m.SendTimeout))
		i--
		dAtA[i] = 0x18
	}
	if m.ReadTimeout != 0 {
		i = encodeVarintHttpoptions(dAtA, i, uint64(m.ReadTimeout))
		i--
		dAtA[i] = 0x10
	}
	if m.MaxBodySize != 0 {
		i = encodeVarintHttpoptions(dAtA, i, uint64(m.MaxBodySize))
		i--
		dAtA[i] = 0x8
	}
	return len(dAtA) - i, nil
}

func encodeVarintHttpoptions(dAtA []byte, offset int, v uint64) int {
	offset -= sovHttpoptions(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *ServiceExposeHTTPOptions) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.MaxBodySize != 0 {
		n += 1 + sovHttpoptions(uint64(m.MaxBodySize))
	}
	if m.ReadTimeout != 0 {
		n += 1 + sovHttpoptions(uint64(m.ReadTimeout))
	}
	if m.SendTimeout != 0 {
		n += 1 + sovHttpoptions(uint64(m.SendTimeout))
	}
	if m.NextTries != 0 {
		n += 1 + sovHttpoptions(uint64(m.NextTries))
	}
	if m.NextTimeout != 0 {
		n += 1 + sovHttpoptions(uint64(m.NextTimeout))
	}
	if len(m.NextCases) > 0 {
		for _, s := range m.NextCases {
			l = len(s)
			n += 1 + l + sovHttpoptions(uint64(l))
		}
	}
	return n
}

func sovHttpoptions(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozHttpoptions(x uint64) (n int) {
	return sovHttpoptions(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (this *ServiceExposeHTTPOptions) String() string {
	if this == nil {
		return "nil"
	}
	s := strings.Join([]string{`&ServiceExposeHTTPOptions{`,
		`MaxBodySize:` + fmt.Sprintf("%v", this.MaxBodySize) + `,`,
		`ReadTimeout:` + fmt.Sprintf("%v", this.ReadTimeout) + `,`,
		`SendTimeout:` + fmt.Sprintf("%v", this.SendTimeout) + `,`,
		`NextTries:` + fmt.Sprintf("%v", this.NextTries) + `,`,
		`NextTimeout:` + fmt.Sprintf("%v", this.NextTimeout) + `,`,
		`NextCases:` + fmt.Sprintf("%v", this.NextCases) + `,`,
		`}`,
	}, "")
	return s
}
func valueToStringHttpoptions(v interface{}) string {
	rv := reflect.ValueOf(v)
	if rv.IsNil() {
		return "nil"
	}
	pv := reflect.Indirect(rv).Interface()
	return fmt.Sprintf("*%v", pv)
}
func (m *ServiceExposeHTTPOptions) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowHttpoptions
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
			return fmt.Errorf("proto: ServiceExposeHTTPOptions: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: ServiceExposeHTTPOptions: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field MaxBodySize", wireType)
			}
			m.MaxBodySize = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowHttpoptions
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.MaxBodySize |= uint32(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 2:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field ReadTimeout", wireType)
			}
			m.ReadTimeout = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowHttpoptions
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.ReadTimeout |= uint32(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 3:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field SendTimeout", wireType)
			}
			m.SendTimeout = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowHttpoptions
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.SendTimeout |= uint32(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 4:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field NextTries", wireType)
			}
			m.NextTries = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowHttpoptions
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.NextTries |= uint32(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 5:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field NextTimeout", wireType)
			}
			m.NextTimeout = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowHttpoptions
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.NextTimeout |= uint32(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 6:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field NextCases", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowHttpoptions
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
				return ErrInvalidLengthHttpoptions
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthHttpoptions
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.NextCases = append(m.NextCases, string(dAtA[iNdEx:postIndex]))
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipHttpoptions(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthHttpoptions
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
func skipHttpoptions(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowHttpoptions
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
					return 0, ErrIntOverflowHttpoptions
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
					return 0, ErrIntOverflowHttpoptions
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
				return 0, ErrInvalidLengthHttpoptions
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupHttpoptions
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthHttpoptions
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthHttpoptions        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowHttpoptions          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupHttpoptions = fmt.Errorf("proto: unexpected end of group")
)
