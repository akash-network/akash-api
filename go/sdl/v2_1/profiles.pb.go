// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: akash/sdl/v2.1/profiles.proto

package v2_1

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

type ProfileCompute struct {
	Resources *ComputeResources `protobuf:"bytes,1,opt,name=resources,proto3" json:"resources" yaml:"resources"`
}

func (m *ProfileCompute) Reset()         { *m = ProfileCompute{} }
func (m *ProfileCompute) String() string { return proto.CompactTextString(m) }
func (*ProfileCompute) ProtoMessage()    {}
func (*ProfileCompute) Descriptor() ([]byte, []int) {
	return fileDescriptor_749fab225ccea52f, []int{0}
}
func (m *ProfileCompute) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *ProfileCompute) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_ProfileCompute.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *ProfileCompute) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ProfileCompute.Merge(m, src)
}
func (m *ProfileCompute) XXX_Size() int {
	return m.Size()
}
func (m *ProfileCompute) XXX_DiscardUnknown() {
	xxx_messageInfo_ProfileCompute.DiscardUnknown(m)
}

var xxx_messageInfo_ProfileCompute proto.InternalMessageInfo

func (m *ProfileCompute) GetResources() *ComputeResources {
	if m != nil {
		return m.Resources
	}
	return nil
}

type ProfilePlacement struct {
	Attributes placementAttributes `protobuf:"bytes,1,rep,name=attributes,proto3,castrepeated=placementAttributes" json:"attributes" yaml:"attributes"`
	SignedBy   v1beta3.SignedBy    `protobuf:"bytes,2,opt,name=signed_by,json=signedBy,proto3" json:"signedBy" yaml:"signedBy"`
	Pricing    map[string]Coin     `protobuf:"bytes,3,rep,name=pricing,proto3" json:"pricing" yaml:"pricing" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
}

func (m *ProfilePlacement) Reset()         { *m = ProfilePlacement{} }
func (m *ProfilePlacement) String() string { return proto.CompactTextString(m) }
func (*ProfilePlacement) ProtoMessage()    {}
func (*ProfilePlacement) Descriptor() ([]byte, []int) {
	return fileDescriptor_749fab225ccea52f, []int{1}
}
func (m *ProfilePlacement) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *ProfilePlacement) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_ProfilePlacement.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *ProfilePlacement) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ProfilePlacement.Merge(m, src)
}
func (m *ProfilePlacement) XXX_Size() int {
	return m.Size()
}
func (m *ProfilePlacement) XXX_DiscardUnknown() {
	xxx_messageInfo_ProfilePlacement.DiscardUnknown(m)
}

var xxx_messageInfo_ProfilePlacement proto.InternalMessageInfo

func (m *ProfilePlacement) GetAttributes() placementAttributes {
	if m != nil {
		return m.Attributes
	}
	return nil
}

func (m *ProfilePlacement) GetSignedBy() v1beta3.SignedBy {
	if m != nil {
		return m.SignedBy
	}
	return v1beta3.SignedBy{}
}

func (m *ProfilePlacement) GetPricing() map[string]Coin {
	if m != nil {
		return m.Pricing
	}
	return nil
}

type Profiles struct {
	Compute   map[string]*ProfileCompute   `protobuf:"bytes,1,rep,name=compute,proto3" json:"compute" yaml:"compute" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	Placement map[string]*ProfilePlacement `protobuf:"bytes,2,rep,name=placement,proto3" json:"placement" yaml:"placement" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
}

func (m *Profiles) Reset()         { *m = Profiles{} }
func (m *Profiles) String() string { return proto.CompactTextString(m) }
func (*Profiles) ProtoMessage()    {}
func (*Profiles) Descriptor() ([]byte, []int) {
	return fileDescriptor_749fab225ccea52f, []int{2}
}
func (m *Profiles) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Profiles) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Profiles.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Profiles) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Profiles.Merge(m, src)
}
func (m *Profiles) XXX_Size() int {
	return m.Size()
}
func (m *Profiles) XXX_DiscardUnknown() {
	xxx_messageInfo_Profiles.DiscardUnknown(m)
}

var xxx_messageInfo_Profiles proto.InternalMessageInfo

func (m *Profiles) GetCompute() map[string]*ProfileCompute {
	if m != nil {
		return m.Compute
	}
	return nil
}

func (m *Profiles) GetPlacement() map[string]*ProfilePlacement {
	if m != nil {
		return m.Placement
	}
	return nil
}

func init() {
	proto.RegisterType((*ProfileCompute)(nil), "akash.sdl.v2_1.ProfileCompute")
	proto.RegisterType((*ProfilePlacement)(nil), "akash.sdl.v2_1.ProfilePlacement")
	proto.RegisterMapType((map[string]Coin)(nil), "akash.sdl.v2_1.ProfilePlacement.PricingEntry")
	proto.RegisterType((*Profiles)(nil), "akash.sdl.v2_1.Profiles")
	proto.RegisterMapType((map[string]*ProfileCompute)(nil), "akash.sdl.v2_1.Profiles.ComputeEntry")
	proto.RegisterMapType((map[string]*ProfilePlacement)(nil), "akash.sdl.v2_1.Profiles.PlacementEntry")
}

func init() { proto.RegisterFile("akash/sdl/v2.1/profiles.proto", fileDescriptor_749fab225ccea52f) }

var fileDescriptor_749fab225ccea52f = []byte{
	// 594 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x84, 0x54, 0xcf, 0x8f, 0xd2, 0x40,
	0x18, 0xa5, 0x4b, 0x74, 0x97, 0xd9, 0x0d, 0x62, 0xdd, 0x03, 0x36, 0x6e, 0x87, 0x4c, 0xa2, 0x12,
	0xe3, 0x4e, 0x03, 0x6b, 0x8c, 0xd9, 0x9b, 0x35, 0x26, 0x1e, 0x3c, 0x90, 0x7a, 0xdb, 0x83, 0xa4,
	0x85, 0xb1, 0x5b, 0x29, 0x6d, 0xd3, 0x1f, 0x18, 0xee, 0xde, 0xbc, 0xf8, 0x67, 0x18, 0xff, 0x12,
	0x8e, 0x7b, 0x31, 0xf1, 0x34, 0x1a, 0xb8, 0x71, 0xe4, 0x2f, 0x30, 0xed, 0xfc, 0x28, 0xb0, 0x10,
	0x6f, 0xc3, 0xfb, 0xde, 0xbc, 0xef, 0x7d, 0x6f, 0x3e, 0x0a, 0xce, 0xec, 0x91, 0x9d, 0x5c, 0x1b,
	0xc9, 0xd0, 0x37, 0x26, 0x5d, 0xdc, 0x31, 0xa2, 0x38, 0xfc, 0xe4, 0xf9, 0x24, 0xc1, 0x51, 0x1c,
	0xa6, 0xa1, 0x5a, 0x2f, 0xca, 0x38, 0x19, 0xfa, 0x78, 0xd2, 0xed, 0x77, 0xb4, 0x53, 0x37, 0x74,
	0xc3, 0xa2, 0x64, 0xe4, 0x27, 0xc6, 0xd2, 0x10, 0x13, 0x71, 0xec, 0x84, 0x18, 0x93, 0x8e, 0x43,
	0x52, 0xfb, 0xc2, 0xb0, 0xd3, 0x34, 0xf6, 0x9c, 0x2c, 0x25, 0x9c, 0xf3, 0x64, 0xab, 0xd1, 0x20,
	0x1c, 0x47, 0x59, 0x4a, 0xfa, 0x31, 0x49, 0xc2, 0x2c, 0x1e, 0x88, 0x8e, 0xda, 0xc3, 0x5b, 0x3c,
	0x2f, 0x60, 0x25, 0xf4, 0x55, 0x01, 0xf5, 0x1e, 0xf3, 0xf7, 0x86, 0xdd, 0x56, 0x63, 0x50, 0x93,
	0x02, 0x4d, 0xa5, 0xa5, 0xb4, 0x8f, 0xbb, 0x2d, 0xbc, 0xe9, 0x19, 0x73, 0xae, 0x25, 0x78, 0x66,
	0x77, 0x46, 0xa1, 0x32, 0xa7, 0xb0, 0x26, 0xa1, 0x25, 0x85, 0xa5, 0xce, 0x8a, 0xc2, 0xc6, 0xd4,
	0x1e, 0xfb, 0x97, 0x48, 0x42, 0xc8, 0x2a, 0xcb, 0xe8, 0x57, 0x15, 0x34, 0xb8, 0x8d, 0x9e, 0x6f,
	0x0f, 0xc8, 0x98, 0x04, 0xa9, 0xfa, 0x4d, 0x01, 0x40, 0x8e, 0x9c, 0x5b, 0xa9, 0xb6, 0x8f, 0xbb,
	0x67, 0xdc, 0x4a, 0x1e, 0x0c, 0xe6, 0xc1, 0xe0, 0xd7, 0x82, 0x65, 0xbe, 0x9f, 0x51, 0x58, 0x99,
	0x53, 0x08, 0x24, 0x94, 0x1b, 0x59, 0x93, 0x59, 0x51, 0x78, 0x9f, 0x39, 0x29, 0x31, 0xf4, 0xf3,
	0x0f, 0x7c, 0x10, 0x89, 0xbe, 0xe5, 0x4d, 0x6b, 0xed, 0x9e, 0xfa, 0x19, 0xd4, 0x12, 0xcf, 0x0d,
	0xc8, 0xb0, 0xef, 0x4c, 0x9b, 0x07, 0x45, 0x2c, 0x8f, 0x76, 0x79, 0xf9, 0x50, 0x90, 0xcc, 0xa9,
	0x69, 0x70, 0x2b, 0x47, 0x02, 0x59, 0x52, 0x78, 0x94, 0xf0, 0xf3, 0x8a, 0xc2, 0x7b, 0xcc, 0x86,
	0x40, 0x90, 0x25, 0x8b, 0x6a, 0x06, 0x0e, 0xa3, 0xd8, 0x1b, 0x78, 0x81, 0xdb, 0xac, 0x16, 0x53,
	0x9f, 0x6f, 0x3f, 0xc0, 0x76, 0x58, 0xb8, 0xc7, 0xf8, 0x6f, 0x83, 0x34, 0x9e, 0x9a, 0xcf, 0x79,
	0xeb, 0x43, 0x8e, 0x2e, 0x29, 0x14, 0x82, 0x2b, 0x0a, 0xeb, 0xac, 0x31, 0x07, 0x90, 0x25, 0x4a,
	0x5a, 0x0f, 0x9c, 0xac, 0xcb, 0xa8, 0x0d, 0x50, 0x1d, 0x91, 0x69, 0xb1, 0x03, 0x35, 0x2b, 0x3f,
	0xaa, 0xcf, 0xc0, 0x9d, 0x89, 0xed, 0x67, 0x84, 0x07, 0x70, 0x7a, 0x7b, 0x2f, 0xbc, 0xc0, 0x62,
	0x94, 0xcb, 0x83, 0x57, 0x0a, 0xfa, 0x51, 0x05, 0x47, 0xdc, 0x6a, 0xa2, 0x7a, 0xe0, 0x90, 0x6f,
	0x28, 0x7f, 0xcb, 0xc7, 0x7b, 0xa6, 0x4a, 0xc4, 0x7e, 0xb1, 0x69, 0xda, 0xf9, 0x24, 0x1c, 0xc9,
	0x27, 0xe1, 0x22, 0xe5, 0x24, 0x1c, 0x40, 0x96, 0x28, 0xa9, 0x19, 0xa8, 0xc9, 0xf7, 0x6c, 0x1e,
	0x14, 0xcd, 0x9e, 0xee, 0x6d, 0x26, 0x43, 0x64, 0xed, 0x70, 0xbe, 0xc6, 0x12, 0xcb, 0xd7, 0x58,
	0x4a, 0x95, 0x6b, 0x2c, 0x21, 0x64, 0x95, 0x65, 0xed, 0x0a, 0x9c, 0xac, 0x3b, 0xdf, 0x11, 0xe0,
	0x8b, 0xcd, 0x00, 0xf5, 0x3d, 0xa6, 0xc4, 0xff, 0xab, 0x8c, 0x52, 0xfb, 0x08, 0xea, 0x9b, 0x46,
	0x77, 0xa8, 0xbf, 0xdc, 0x54, 0x6f, 0xfd, 0x6f, 0x6b, 0xd6, 0xf4, 0xcd, 0x77, 0xb3, 0xb9, 0xae,
	0xdc, 0xcc, 0x75, 0xe5, 0xef, 0x5c, 0x57, 0xbe, 0x2f, 0xf4, 0xca, 0xcd, 0x42, 0xaf, 0xfc, 0x5e,
	0xe8, 0x95, 0x2b, 0xec, 0x7a, 0xe9, 0x75, 0xe6, 0xe0, 0x41, 0x38, 0x36, 0x0a, 0xc1, 0xf3, 0x80,
	0xa4, 0x5f, 0xc2, 0x78, 0xc4, 0x7f, 0xd9, 0x91, 0x67, 0xb8, 0x21, 0xff, 0xbc, 0xf4, 0x3b, 0xce,
	0xdd, 0xe2, 0xd3, 0x72, 0xf1, 0x2f, 0x00, 0x00, 0xff, 0xff, 0xc8, 0xc9, 0xe7, 0x49, 0x08, 0x05,
	0x00, 0x00,
}

func (m *ProfileCompute) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *ProfileCompute) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *ProfileCompute) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.Resources != nil {
		{
			size, err := m.Resources.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintProfiles(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *ProfilePlacement) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *ProfilePlacement) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *ProfilePlacement) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Pricing) > 0 {
		for k := range m.Pricing {
			v := m.Pricing[k]
			baseI := i
			{
				size, err := (&v).MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintProfiles(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x12
			i -= len(k)
			copy(dAtA[i:], k)
			i = encodeVarintProfiles(dAtA, i, uint64(len(k)))
			i--
			dAtA[i] = 0xa
			i = encodeVarintProfiles(dAtA, i, uint64(baseI-i))
			i--
			dAtA[i] = 0x1a
		}
	}
	{
		size, err := m.SignedBy.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintProfiles(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0x12
	if len(m.Attributes) > 0 {
		for iNdEx := len(m.Attributes) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.Attributes[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintProfiles(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0xa
		}
	}
	return len(dAtA) - i, nil
}

func (m *Profiles) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Profiles) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Profiles) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Placement) > 0 {
		for k := range m.Placement {
			v := m.Placement[k]
			baseI := i
			if v != nil {
				{
					size, err := v.MarshalToSizedBuffer(dAtA[:i])
					if err != nil {
						return 0, err
					}
					i -= size
					i = encodeVarintProfiles(dAtA, i, uint64(size))
				}
				i--
				dAtA[i] = 0x12
			}
			i -= len(k)
			copy(dAtA[i:], k)
			i = encodeVarintProfiles(dAtA, i, uint64(len(k)))
			i--
			dAtA[i] = 0xa
			i = encodeVarintProfiles(dAtA, i, uint64(baseI-i))
			i--
			dAtA[i] = 0x12
		}
	}
	if len(m.Compute) > 0 {
		for k := range m.Compute {
			v := m.Compute[k]
			baseI := i
			if v != nil {
				{
					size, err := v.MarshalToSizedBuffer(dAtA[:i])
					if err != nil {
						return 0, err
					}
					i -= size
					i = encodeVarintProfiles(dAtA, i, uint64(size))
				}
				i--
				dAtA[i] = 0x12
			}
			i -= len(k)
			copy(dAtA[i:], k)
			i = encodeVarintProfiles(dAtA, i, uint64(len(k)))
			i--
			dAtA[i] = 0xa
			i = encodeVarintProfiles(dAtA, i, uint64(baseI-i))
			i--
			dAtA[i] = 0xa
		}
	}
	return len(dAtA) - i, nil
}

func encodeVarintProfiles(dAtA []byte, offset int, v uint64) int {
	offset -= sovProfiles(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *ProfileCompute) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Resources != nil {
		l = m.Resources.Size()
		n += 1 + l + sovProfiles(uint64(l))
	}
	return n
}

func (m *ProfilePlacement) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if len(m.Attributes) > 0 {
		for _, e := range m.Attributes {
			l = e.Size()
			n += 1 + l + sovProfiles(uint64(l))
		}
	}
	l = m.SignedBy.Size()
	n += 1 + l + sovProfiles(uint64(l))
	if len(m.Pricing) > 0 {
		for k, v := range m.Pricing {
			_ = k
			_ = v
			l = v.Size()
			mapEntrySize := 1 + len(k) + sovProfiles(uint64(len(k))) + 1 + l + sovProfiles(uint64(l))
			n += mapEntrySize + 1 + sovProfiles(uint64(mapEntrySize))
		}
	}
	return n
}

func (m *Profiles) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if len(m.Compute) > 0 {
		for k, v := range m.Compute {
			_ = k
			_ = v
			l = 0
			if v != nil {
				l = v.Size()
				l += 1 + sovProfiles(uint64(l))
			}
			mapEntrySize := 1 + len(k) + sovProfiles(uint64(len(k))) + l
			n += mapEntrySize + 1 + sovProfiles(uint64(mapEntrySize))
		}
	}
	if len(m.Placement) > 0 {
		for k, v := range m.Placement {
			_ = k
			_ = v
			l = 0
			if v != nil {
				l = v.Size()
				l += 1 + sovProfiles(uint64(l))
			}
			mapEntrySize := 1 + len(k) + sovProfiles(uint64(len(k))) + l
			n += mapEntrySize + 1 + sovProfiles(uint64(mapEntrySize))
		}
	}
	return n
}

func sovProfiles(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozProfiles(x uint64) (n int) {
	return sovProfiles(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *ProfileCompute) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowProfiles
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
			return fmt.Errorf("proto: ProfileCompute: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: ProfileCompute: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Resources", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowProfiles
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
				return ErrInvalidLengthProfiles
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthProfiles
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.Resources == nil {
				m.Resources = &ComputeResources{}
			}
			if err := m.Resources.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipProfiles(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthProfiles
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
func (m *ProfilePlacement) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowProfiles
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
			return fmt.Errorf("proto: ProfilePlacement: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: ProfilePlacement: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Attributes", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowProfiles
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
				return ErrInvalidLengthProfiles
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthProfiles
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Attributes = append(m.Attributes, v1beta3.Attribute{})
			if err := m.Attributes[len(m.Attributes)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field SignedBy", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowProfiles
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
				return ErrInvalidLengthProfiles
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthProfiles
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.SignedBy.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Pricing", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowProfiles
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
				return ErrInvalidLengthProfiles
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthProfiles
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.Pricing == nil {
				m.Pricing = make(map[string]Coin)
			}
			var mapkey string
			mapvalue := &Coin{}
			for iNdEx < postIndex {
				entryPreIndex := iNdEx
				var wire uint64
				for shift := uint(0); ; shift += 7 {
					if shift >= 64 {
						return ErrIntOverflowProfiles
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
							return ErrIntOverflowProfiles
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
						return ErrInvalidLengthProfiles
					}
					postStringIndexmapkey := iNdEx + intStringLenmapkey
					if postStringIndexmapkey < 0 {
						return ErrInvalidLengthProfiles
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
							return ErrIntOverflowProfiles
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
						return ErrInvalidLengthProfiles
					}
					postmsgIndex := iNdEx + mapmsglen
					if postmsgIndex < 0 {
						return ErrInvalidLengthProfiles
					}
					if postmsgIndex > l {
						return io.ErrUnexpectedEOF
					}
					mapvalue = &Coin{}
					if err := mapvalue.Unmarshal(dAtA[iNdEx:postmsgIndex]); err != nil {
						return err
					}
					iNdEx = postmsgIndex
				} else {
					iNdEx = entryPreIndex
					skippy, err := skipProfiles(dAtA[iNdEx:])
					if err != nil {
						return err
					}
					if (skippy < 0) || (iNdEx+skippy) < 0 {
						return ErrInvalidLengthProfiles
					}
					if (iNdEx + skippy) > postIndex {
						return io.ErrUnexpectedEOF
					}
					iNdEx += skippy
				}
			}
			m.Pricing[mapkey] = *mapvalue
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipProfiles(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthProfiles
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
func (m *Profiles) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowProfiles
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
			return fmt.Errorf("proto: Profiles: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Profiles: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Compute", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowProfiles
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
				return ErrInvalidLengthProfiles
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthProfiles
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.Compute == nil {
				m.Compute = make(map[string]*ProfileCompute)
			}
			var mapkey string
			var mapvalue *ProfileCompute
			for iNdEx < postIndex {
				entryPreIndex := iNdEx
				var wire uint64
				for shift := uint(0); ; shift += 7 {
					if shift >= 64 {
						return ErrIntOverflowProfiles
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
							return ErrIntOverflowProfiles
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
						return ErrInvalidLengthProfiles
					}
					postStringIndexmapkey := iNdEx + intStringLenmapkey
					if postStringIndexmapkey < 0 {
						return ErrInvalidLengthProfiles
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
							return ErrIntOverflowProfiles
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
						return ErrInvalidLengthProfiles
					}
					postmsgIndex := iNdEx + mapmsglen
					if postmsgIndex < 0 {
						return ErrInvalidLengthProfiles
					}
					if postmsgIndex > l {
						return io.ErrUnexpectedEOF
					}
					mapvalue = &ProfileCompute{}
					if err := mapvalue.Unmarshal(dAtA[iNdEx:postmsgIndex]); err != nil {
						return err
					}
					iNdEx = postmsgIndex
				} else {
					iNdEx = entryPreIndex
					skippy, err := skipProfiles(dAtA[iNdEx:])
					if err != nil {
						return err
					}
					if (skippy < 0) || (iNdEx+skippy) < 0 {
						return ErrInvalidLengthProfiles
					}
					if (iNdEx + skippy) > postIndex {
						return io.ErrUnexpectedEOF
					}
					iNdEx += skippy
				}
			}
			m.Compute[mapkey] = mapvalue
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Placement", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowProfiles
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
				return ErrInvalidLengthProfiles
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthProfiles
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.Placement == nil {
				m.Placement = make(map[string]*ProfilePlacement)
			}
			var mapkey string
			var mapvalue *ProfilePlacement
			for iNdEx < postIndex {
				entryPreIndex := iNdEx
				var wire uint64
				for shift := uint(0); ; shift += 7 {
					if shift >= 64 {
						return ErrIntOverflowProfiles
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
							return ErrIntOverflowProfiles
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
						return ErrInvalidLengthProfiles
					}
					postStringIndexmapkey := iNdEx + intStringLenmapkey
					if postStringIndexmapkey < 0 {
						return ErrInvalidLengthProfiles
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
							return ErrIntOverflowProfiles
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
						return ErrInvalidLengthProfiles
					}
					postmsgIndex := iNdEx + mapmsglen
					if postmsgIndex < 0 {
						return ErrInvalidLengthProfiles
					}
					if postmsgIndex > l {
						return io.ErrUnexpectedEOF
					}
					mapvalue = &ProfilePlacement{}
					if err := mapvalue.Unmarshal(dAtA[iNdEx:postmsgIndex]); err != nil {
						return err
					}
					iNdEx = postmsgIndex
				} else {
					iNdEx = entryPreIndex
					skippy, err := skipProfiles(dAtA[iNdEx:])
					if err != nil {
						return err
					}
					if (skippy < 0) || (iNdEx+skippy) < 0 {
						return ErrInvalidLengthProfiles
					}
					if (iNdEx + skippy) > postIndex {
						return io.ErrUnexpectedEOF
					}
					iNdEx += skippy
				}
			}
			m.Placement[mapkey] = mapvalue
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipProfiles(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthProfiles
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
func skipProfiles(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowProfiles
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
					return 0, ErrIntOverflowProfiles
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
					return 0, ErrIntOverflowProfiles
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
				return 0, ErrInvalidLengthProfiles
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupProfiles
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthProfiles
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthProfiles        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowProfiles          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupProfiles = fmt.Errorf("proto: unexpected end of group")
)
