// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: akash/sdl/v2/sdl.proto

package v2

import (
	fmt "fmt"
	_ "github.com/gogo/protobuf/gogoproto"
	proto "github.com/gogo/protobuf/proto"
	_ "google.golang.org/protobuf/types/known/structpb"
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

type Content struct {
	Include     []string            `protobuf:"bytes,1,rep,name=include,proto3" json:"include,omitempty"`
	Services    map[string]Service  `protobuf:"bytes,2,rep,name=services,proto3" json:"services" yaml:"services" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	Profiles    Profiles            `protobuf:"bytes,3,opt,name=profiles,proto3" json:"profiles" yaml:"profiles"`
	Deployments Deployments         `protobuf:"bytes,4,opt,name=deployments,proto3,customtype=Deployments" json:"deployments" yaml:"deployments"`
	Endpoints   map[string]Endpoint `protobuf:"bytes,5,rep,name=endpoints,proto3" json:"endpoints" yaml:"endpoints" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
}

func (m *Content) Reset()         { *m = Content{} }
func (m *Content) String() string { return proto.CompactTextString(m) }
func (*Content) ProtoMessage()    {}
func (*Content) Descriptor() ([]byte, []int) {
	return fileDescriptor_801d1e6c19755a66, []int{0}
}
func (m *Content) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Content) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Content.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Content) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Content.Merge(m, src)
}
func (m *Content) XXX_Size() int {
	return m.Size()
}
func (m *Content) XXX_DiscardUnknown() {
	xxx_messageInfo_Content.DiscardUnknown(m)
}

var xxx_messageInfo_Content proto.InternalMessageInfo

func (m *Content) GetInclude() []string {
	if m != nil {
		return m.Include
	}
	return nil
}

func (m *Content) GetServices() map[string]Service {
	if m != nil {
		return m.Services
	}
	return nil
}

func (m *Content) GetProfiles() Profiles {
	if m != nil {
		return m.Profiles
	}
	return Profiles{}
}

func (m *Content) GetEndpoints() map[string]Endpoint {
	if m != nil {
		return m.Endpoints
	}
	return nil
}

func init() {
	proto.RegisterType((*Content)(nil), "akash.sdl.v2.content")
	proto.RegisterMapType((map[string]Endpoint)(nil), "akash.sdl.v2.content.EndpointsEntry")
	proto.RegisterMapType((map[string]Service)(nil), "akash.sdl.v2.content.ServicesEntry")
}

func init() { proto.RegisterFile("akash/sdl/v2/sdl.proto", fileDescriptor_801d1e6c19755a66) }

var fileDescriptor_801d1e6c19755a66 = []byte{
	// 476 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x6c, 0x52, 0xcb, 0x8e, 0xd3, 0x30,
	0x14, 0x6d, 0xa6, 0x94, 0x69, 0x5d, 0x1e, 0x23, 0x0b, 0x86, 0x28, 0xa0, 0xb8, 0x0a, 0x2c, 0x2a,
	0x31, 0x38, 0x52, 0xd8, 0xa0, 0x59, 0x56, 0x0c, 0x6c, 0x51, 0x86, 0x15, 0xbb, 0x34, 0xf5, 0x64,
	0xa2, 0xa6, 0x71, 0x94, 0x38, 0x41, 0xdd, 0xf2, 0x05, 0xfc, 0x02, 0x7f, 0x33, 0xcb, 0x59, 0x22,
	0x16, 0x16, 0x4a, 0x77, 0x5d, 0xf6, 0x0b, 0x50, 0x1c, 0x3b, 0x0f, 0xd4, 0x55, 0x7c, 0xcf, 0xb9,
	0xf7, 0x1c, 0xfb, 0x9e, 0x80, 0x73, 0x6f, 0xed, 0x65, 0xb7, 0x76, 0xb6, 0x8a, 0xec, 0xc2, 0xa9,
	0x3e, 0x38, 0x49, 0x29, 0xa3, 0xf0, 0x91, 0xc0, 0x71, 0x05, 0x14, 0x8e, 0xf1, 0x2c, 0xa0, 0x01,
	0x15, 0x84, 0x5d, 0x9d, 0xea, 0x1e, 0xe3, 0x55, 0x40, 0x69, 0x10, 0x11, 0x5b, 0x54, 0xcb, 0xfc,
	0xc6, 0xce, 0x58, 0x9a, 0xfb, 0x4c, 0xb2, 0x46, 0x5f, 0x99, 0xa4, 0x45, 0xe8, 0x13, 0xc9, 0xbd,
	0xec, 0x71, 0x49, 0x4a, 0x6f, 0xc2, 0x88, 0x64, 0x47, 0x49, 0x12, 0xaf, 0x12, 0x1a, 0xc6, 0x52,
	0xd5, 0xfa, 0x35, 0x02, 0xa7, 0x3e, 0x8d, 0x19, 0x89, 0x19, 0xd4, 0xc1, 0x69, 0x18, 0xfb, 0x51,
	0xbe, 0x22, 0xba, 0x36, 0x1b, 0xce, 0x27, 0xae, 0x2a, 0x61, 0x02, 0xc6, 0xd2, 0x30, 0xd3, 0x4f,
	0x66, 0xc3, 0xf9, 0xd4, 0x79, 0x8d, 0xbb, 0x0f, 0xc2, 0x52, 0x02, 0x5f, 0xcb, 0xae, 0xab, 0x98,
	0xa5, 0xdb, 0x85, 0x7d, 0xc7, 0xd1, 0xa0, 0xe4, 0x68, 0xac, 0xe0, 0x3d, 0x47, 0x8d, 0xd0, 0x81,
	0xa3, 0xa7, 0x5b, 0x6f, 0x13, 0x5d, 0x5a, 0x0a, 0xb1, 0xdc, 0x86, 0x84, 0x3e, 0x18, 0xab, 0x67,
	0xe8, 0xc3, 0x99, 0x36, 0x9f, 0x3a, 0xe7, 0x7d, 0xc7, 0x2f, 0x92, 0x6d, 0x4d, 0x14, 0x52, 0x99,
	0xa8, 0xd9, 0xd6, 0x44, 0x21, 0x96, 0xdb, 0x90, 0xf0, 0x87, 0x06, 0xa6, 0x2b, 0x92, 0x44, 0x74,
	0xbb, 0x21, 0x31, 0xcb, 0xf4, 0x07, 0xc2, 0xe8, 0x05, 0xae, 0x73, 0xc0, 0x2a, 0x07, 0x7c, 0x2d,
	0x72, 0x58, 0x7c, 0xae, 0x9c, 0xfe, 0x70, 0x34, 0xfd, 0xd8, 0xce, 0x94, 0xfd, 0x72, 0xcf, 0x51,
	0x57, 0xf1, 0xc0, 0x11, 0xac, 0xed, 0x3b, 0xa0, 0xe5, 0x76, 0x5b, 0x60, 0x01, 0x26, 0x2a, 0x93,
	0x4c, 0x1f, 0x89, 0xe5, 0xbe, 0x39, 0xbe, 0xdc, 0x2b, 0xd5, 0x56, 0x6f, 0xd7, 0x91, 0x0f, 0x9f,
	0x34, 0xf8, 0x9e, 0xa3, 0x56, 0xeb, 0xc0, 0xd1, 0x59, 0xed, 0xdd, 0x40, 0x96, 0xdb, 0xd2, 0x86,
	0x0b, 0x1e, 0xf7, 0xd2, 0x82, 0x67, 0x60, 0xb8, 0x26, 0x5b, 0x5d, 0x9b, 0x69, 0xf3, 0x89, 0x5b,
	0x1d, 0xe1, 0x5b, 0x30, 0x2a, 0xbc, 0x28, 0x27, 0xfa, 0x89, 0x58, 0xcc, 0xf3, 0xfe, 0xb5, 0xe4,
	0xb4, 0x5b, 0xf7, 0x5c, 0x9e, 0x7c, 0xd0, 0x8c, 0xaf, 0xe0, 0x49, 0xff, 0x92, 0x47, 0x44, 0x2f,
	0xfa, 0xa2, 0xff, 0xc5, 0xaa, 0xc6, 0x3b, 0xaa, 0x8b, 0x4f, 0x77, 0xa5, 0xa9, 0xdd, 0x97, 0xa6,
	0xf6, 0xb7, 0x34, 0xb5, 0x9f, 0x3b, 0x73, 0x70, 0xbf, 0x33, 0x07, 0xbf, 0x77, 0xe6, 0xe0, 0xdb,
	0x45, 0x10, 0xb2, 0xdb, 0x7c, 0x89, 0x7d, 0xba, 0xb1, 0x85, 0xcc, 0xbb, 0x98, 0xb0, 0xef, 0x34,
	0x5d, 0xcb, 0xca, 0x4b, 0x42, 0x3b, 0xa0, 0xf2, 0xd7, 0x5f, 0x3e, 0x14, 0x81, 0xbe, 0xff, 0x17,
	0x00, 0x00, 0xff, 0xff, 0xcd, 0x22, 0x0c, 0xed, 0xa4, 0x03, 0x00, 0x00,
}

func (m *Content) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Content) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Content) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Endpoints) > 0 {
		for k := range m.Endpoints {
			v := m.Endpoints[k]
			baseI := i
			{
				size, err := (&v).MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintSdl(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x12
			i -= len(k)
			copy(dAtA[i:], k)
			i = encodeVarintSdl(dAtA, i, uint64(len(k)))
			i--
			dAtA[i] = 0xa
			i = encodeVarintSdl(dAtA, i, uint64(baseI-i))
			i--
			dAtA[i] = 0x2a
		}
	}
	{
		size := m.Deployments.Size()
		i -= size
		if _, err := m.Deployments.MarshalTo(dAtA[i:]); err != nil {
			return 0, err
		}
		i = encodeVarintSdl(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0x22
	{
		size, err := m.Profiles.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintSdl(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0x1a
	if len(m.Services) > 0 {
		for k := range m.Services {
			v := m.Services[k]
			baseI := i
			{
				size, err := (&v).MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintSdl(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x12
			i -= len(k)
			copy(dAtA[i:], k)
			i = encodeVarintSdl(dAtA, i, uint64(len(k)))
			i--
			dAtA[i] = 0xa
			i = encodeVarintSdl(dAtA, i, uint64(baseI-i))
			i--
			dAtA[i] = 0x12
		}
	}
	if len(m.Include) > 0 {
		for iNdEx := len(m.Include) - 1; iNdEx >= 0; iNdEx-- {
			i -= len(m.Include[iNdEx])
			copy(dAtA[i:], m.Include[iNdEx])
			i = encodeVarintSdl(dAtA, i, uint64(len(m.Include[iNdEx])))
			i--
			dAtA[i] = 0xa
		}
	}
	return len(dAtA) - i, nil
}

func encodeVarintSdl(dAtA []byte, offset int, v uint64) int {
	offset -= sovSdl(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *Content) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if len(m.Include) > 0 {
		for _, s := range m.Include {
			l = len(s)
			n += 1 + l + sovSdl(uint64(l))
		}
	}
	if len(m.Services) > 0 {
		for k, v := range m.Services {
			_ = k
			_ = v
			l = v.Size()
			mapEntrySize := 1 + len(k) + sovSdl(uint64(len(k))) + 1 + l + sovSdl(uint64(l))
			n += mapEntrySize + 1 + sovSdl(uint64(mapEntrySize))
		}
	}
	l = m.Profiles.Size()
	n += 1 + l + sovSdl(uint64(l))
	l = m.Deployments.Size()
	n += 1 + l + sovSdl(uint64(l))
	if len(m.Endpoints) > 0 {
		for k, v := range m.Endpoints {
			_ = k
			_ = v
			l = v.Size()
			mapEntrySize := 1 + len(k) + sovSdl(uint64(len(k))) + 1 + l + sovSdl(uint64(l))
			n += mapEntrySize + 1 + sovSdl(uint64(mapEntrySize))
		}
	}
	return n
}

func sovSdl(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozSdl(x uint64) (n int) {
	return sovSdl(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *Content) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowSdl
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
			return fmt.Errorf("proto: content: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: content: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Include", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowSdl
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
				return ErrInvalidLengthSdl
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthSdl
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Include = append(m.Include, string(dAtA[iNdEx:postIndex]))
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Services", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowSdl
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
				return ErrInvalidLengthSdl
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthSdl
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.Services == nil {
				m.Services = make(map[string]Service)
			}
			var mapkey string
			mapvalue := &Service{}
			for iNdEx < postIndex {
				entryPreIndex := iNdEx
				var wire uint64
				for shift := uint(0); ; shift += 7 {
					if shift >= 64 {
						return ErrIntOverflowSdl
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
				if fieldNum == 1 {
					var stringLenmapkey uint64
					for shift := uint(0); ; shift += 7 {
						if shift >= 64 {
							return ErrIntOverflowSdl
						}
						if iNdEx >= l {
							return io.ErrUnexpectedEOF
						}
						b := dAtA[iNdEx]
						iNdEx++
						stringLenmapkey |= uint64(b&0x7F) << shift
						if b < 0x80 {
							break
						}
					}
					intStringLenmapkey := int(stringLenmapkey)
					if intStringLenmapkey < 0 {
						return ErrInvalidLengthSdl
					}
					postStringIndexmapkey := iNdEx + intStringLenmapkey
					if postStringIndexmapkey < 0 {
						return ErrInvalidLengthSdl
					}
					if postStringIndexmapkey > l {
						return io.ErrUnexpectedEOF
					}
					mapkey = string(dAtA[iNdEx:postStringIndexmapkey])
					iNdEx = postStringIndexmapkey
				} else if fieldNum == 2 {
					var mapmsglen int
					for shift := uint(0); ; shift += 7 {
						if shift >= 64 {
							return ErrIntOverflowSdl
						}
						if iNdEx >= l {
							return io.ErrUnexpectedEOF
						}
						b := dAtA[iNdEx]
						iNdEx++
						mapmsglen |= int(b&0x7F) << shift
						if b < 0x80 {
							break
						}
					}
					if mapmsglen < 0 {
						return ErrInvalidLengthSdl
					}
					postmsgIndex := iNdEx + mapmsglen
					if postmsgIndex < 0 {
						return ErrInvalidLengthSdl
					}
					if postmsgIndex > l {
						return io.ErrUnexpectedEOF
					}
					mapvalue = &Service{}
					if err := mapvalue.Unmarshal(dAtA[iNdEx:postmsgIndex]); err != nil {
						return err
					}
					iNdEx = postmsgIndex
				} else {
					iNdEx = entryPreIndex
					skippy, err := skipSdl(dAtA[iNdEx:])
					if err != nil {
						return err
					}
					if (skippy < 0) || (iNdEx+skippy) < 0 {
						return ErrInvalidLengthSdl
					}
					if (iNdEx + skippy) > postIndex {
						return io.ErrUnexpectedEOF
					}
					iNdEx += skippy
				}
			}
			m.Services[mapkey] = *mapvalue
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Profiles", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowSdl
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
				return ErrInvalidLengthSdl
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthSdl
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.Profiles.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Deployments", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowSdl
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
				return ErrInvalidLengthSdl
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthSdl
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.Deployments.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Endpoints", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowSdl
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
				return ErrInvalidLengthSdl
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthSdl
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.Endpoints == nil {
				m.Endpoints = make(map[string]Endpoint)
			}
			var mapkey string
			mapvalue := &Endpoint{}
			for iNdEx < postIndex {
				entryPreIndex := iNdEx
				var wire uint64
				for shift := uint(0); ; shift += 7 {
					if shift >= 64 {
						return ErrIntOverflowSdl
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
				if fieldNum == 1 {
					var stringLenmapkey uint64
					for shift := uint(0); ; shift += 7 {
						if shift >= 64 {
							return ErrIntOverflowSdl
						}
						if iNdEx >= l {
							return io.ErrUnexpectedEOF
						}
						b := dAtA[iNdEx]
						iNdEx++
						stringLenmapkey |= uint64(b&0x7F) << shift
						if b < 0x80 {
							break
						}
					}
					intStringLenmapkey := int(stringLenmapkey)
					if intStringLenmapkey < 0 {
						return ErrInvalidLengthSdl
					}
					postStringIndexmapkey := iNdEx + intStringLenmapkey
					if postStringIndexmapkey < 0 {
						return ErrInvalidLengthSdl
					}
					if postStringIndexmapkey > l {
						return io.ErrUnexpectedEOF
					}
					mapkey = string(dAtA[iNdEx:postStringIndexmapkey])
					iNdEx = postStringIndexmapkey
				} else if fieldNum == 2 {
					var mapmsglen int
					for shift := uint(0); ; shift += 7 {
						if shift >= 64 {
							return ErrIntOverflowSdl
						}
						if iNdEx >= l {
							return io.ErrUnexpectedEOF
						}
						b := dAtA[iNdEx]
						iNdEx++
						mapmsglen |= int(b&0x7F) << shift
						if b < 0x80 {
							break
						}
					}
					if mapmsglen < 0 {
						return ErrInvalidLengthSdl
					}
					postmsgIndex := iNdEx + mapmsglen
					if postmsgIndex < 0 {
						return ErrInvalidLengthSdl
					}
					if postmsgIndex > l {
						return io.ErrUnexpectedEOF
					}
					mapvalue = &Endpoint{}
					if err := mapvalue.Unmarshal(dAtA[iNdEx:postmsgIndex]); err != nil {
						return err
					}
					iNdEx = postmsgIndex
				} else {
					iNdEx = entryPreIndex
					skippy, err := skipSdl(dAtA[iNdEx:])
					if err != nil {
						return err
					}
					if (skippy < 0) || (iNdEx+skippy) < 0 {
						return ErrInvalidLengthSdl
					}
					if (iNdEx + skippy) > postIndex {
						return io.ErrUnexpectedEOF
					}
					iNdEx += skippy
				}
			}
			m.Endpoints[mapkey] = *mapvalue
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipSdl(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthSdl
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
func skipSdl(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowSdl
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
					return 0, ErrIntOverflowSdl
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
					return 0, ErrIntOverflowSdl
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
				return 0, ErrInvalidLengthSdl
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupSdl
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthSdl
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthSdl        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowSdl          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupSdl = fmt.Errorf("proto: unexpected end of group")
)
