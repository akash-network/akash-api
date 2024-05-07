// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: akash/inflation/v1beta2/params.proto

package v1beta2

import (
	fmt "fmt"
	github_com_cosmos_cosmos_sdk_types "github.com/cosmos/cosmos-sdk/types"
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

// Params defines the parameters for the x/deployment package
type Params struct {
	// InflationDecayFactor is the number of years it takes inflation to halve.
	InflationDecayFactor github_com_cosmos_cosmos_sdk_types.Dec `protobuf:"bytes,1,opt,name=inflation_decay_factor,json=inflationDecayFactor,proto3,customtype=github.com/cosmos/cosmos-sdk/types.Dec" json:"inflation_decay_factor" yaml:"inflation_decay_factor"`
	// InitialInflation is the rate at which inflation starts at genesis.
	// It is a decimal value in the range [0.0, 100.0].
	InitialInflation github_com_cosmos_cosmos_sdk_types.Dec `protobuf:"bytes,2,opt,name=initial_inflation,json=initialInflation,proto3,customtype=github.com/cosmos/cosmos-sdk/types.Dec" json:"initial_inflation" yaml:"initial_inflation"`
	// Variance defines the fraction by which inflation can vary from ideal inflation in a block.
	// It is a decimal value in the range [0.0, 1.0].
	Variance github_com_cosmos_cosmos_sdk_types.Dec `protobuf:"bytes,3,opt,name=variance,proto3,customtype=github.com/cosmos/cosmos-sdk/types.Dec" json:"variance" yaml:"variance"`
}

func (m *Params) Reset()         { *m = Params{} }
func (m *Params) String() string { return proto.CompactTextString(m) }
func (*Params) ProtoMessage()    {}
func (*Params) Descriptor() ([]byte, []int) {
	return fileDescriptor_fea313162cb1e23f, []int{0}
}
func (m *Params) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Params) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Params.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Params) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Params.Merge(m, src)
}
func (m *Params) XXX_Size() int {
	return m.Size()
}
func (m *Params) XXX_DiscardUnknown() {
	xxx_messageInfo_Params.DiscardUnknown(m)
}

var xxx_messageInfo_Params proto.InternalMessageInfo

func init() {
	proto.RegisterType((*Params)(nil), "akash.inflation.v1beta2.Params")
}

func init() {
	proto.RegisterFile("akash/inflation/v1beta2/params.proto", fileDescriptor_fea313162cb1e23f)
}

var fileDescriptor_fea313162cb1e23f = []byte{
	// 351 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x52, 0x49, 0xcc, 0x4e, 0x2c,
	0xce, 0xd0, 0xcf, 0xcc, 0x4b, 0xcb, 0x49, 0x2c, 0xc9, 0xcc, 0xcf, 0xd3, 0x2f, 0x33, 0x4c, 0x4a,
	0x2d, 0x49, 0x34, 0xd2, 0x2f, 0x48, 0x2c, 0x4a, 0xcc, 0x2d, 0xd6, 0x2b, 0x28, 0xca, 0x2f, 0xc9,
	0x17, 0x12, 0x07, 0xab, 0xd2, 0x83, 0xab, 0xd2, 0x83, 0xaa, 0x92, 0x12, 0x49, 0xcf, 0x4f, 0xcf,
	0x07, 0xab, 0xd1, 0x07, 0xb1, 0x20, 0xca, 0x95, 0xee, 0x32, 0x73, 0xb1, 0x05, 0x80, 0xf5, 0x0b,
	0xed, 0x60, 0xe4, 0x12, 0x83, 0x6b, 0x8b, 0x4f, 0x49, 0x4d, 0x4e, 0xac, 0x8c, 0x4f, 0x4b, 0x4c,
	0x2e, 0xc9, 0x2f, 0x92, 0x60, 0x54, 0x60, 0xd4, 0xe0, 0x74, 0x6a, 0x64, 0x3c, 0x71, 0x4f, 0x9e,
	0xe1, 0xd6, 0x3d, 0x79, 0xb5, 0xf4, 0xcc, 0x92, 0x8c, 0xd2, 0x24, 0xbd, 0xe4, 0xfc, 0x5c, 0xfd,
	0xe4, 0xfc, 0xe2, 0xdc, 0xfc, 0x62, 0x28, 0xa5, 0x5b, 0x9c, 0x92, 0xad, 0x5f, 0x52, 0x59, 0x90,
	0x5a, 0xac, 0xe7, 0x92, 0x9a, 0xfc, 0xe8, 0x9e, 0xbc, 0x88, 0x27, 0xcc, 0x40, 0x17, 0x90, 0x79,
	0x6e, 0x60, 0xe3, 0x5e, 0xdd, 0x93, 0xc7, 0x61, 0xd1, 0xa7, 0x7b, 0xf2, 0xb2, 0x95, 0x89, 0xb9,
	0x39, 0x56, 0x4a, 0xd8, 0xe5, 0x95, 0x82, 0x44, 0x32, 0xb1, 0x18, 0x28, 0xb4, 0x80, 0x91, 0x4b,
	0x30, 0x33, 0x2f, 0xb3, 0x24, 0x33, 0x31, 0x27, 0x1e, 0xae, 0x40, 0x82, 0x09, 0xec, 0xea, 0x62,
	0x92, 0x1d, 0x2d, 0xe0, 0x09, 0x31, 0x0a, 0xee, 0xf6, 0x57, 0xf7, 0xe4, 0x31, 0x8d, 0xff, 0x74,
	0x4f, 0x5e, 0x02, 0xe6, 0x56, 0x34, 0x29, 0xa5, 0x20, 0x81, 0x4c, 0x34, 0x23, 0x84, 0x4a, 0xb9,
	0x38, 0xca, 0x12, 0x8b, 0x32, 0x13, 0xf3, 0x92, 0x53, 0x25, 0x98, 0xc1, 0x0e, 0x8b, 0x24, 0xd9,
	0x61, 0x1c, 0x61, 0x50, 0x13, 0x5e, 0xdd, 0x93, 0x87, 0x9b, 0xf6, 0xe9, 0x9e, 0x3c, 0x3f, 0xc4,
	0x1d, 0x30, 0x11, 0xa5, 0x20, 0xb8, 0xa4, 0x93, 0xcb, 0x89, 0x47, 0x72, 0x8c, 0x17, 0x1e, 0xc9,
	0x31, 0x3e, 0x78, 0x24, 0xc7, 0x38, 0xe1, 0xb1, 0x1c, 0xc3, 0x85, 0xc7, 0x72, 0x0c, 0x37, 0x1e,
	0xcb, 0x31, 0x44, 0x69, 0x15, 0x64, 0xa7, 0xeb, 0x25, 0x66, 0x97, 0xe8, 0x65, 0x82, 0x12, 0x84,
	0x7e, 0x5e, 0x7e, 0x4a, 0x2a, 0x52, 0xda, 0x02, 0x5b, 0x0b, 0x4b, 0x61, 0x49, 0x6c, 0xe0, 0xc4,
	0x62, 0x0c, 0x08, 0x00, 0x00, 0xff, 0xff, 0x53, 0x6d, 0x44, 0xd1, 0x83, 0x02, 0x00, 0x00,
}

func (m *Params) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Params) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Params) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	{
		size := m.Variance.Size()
		i -= size
		if _, err := m.Variance.MarshalTo(dAtA[i:]); err != nil {
			return 0, err
		}
		i = encodeVarintParams(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0x1a
	{
		size := m.InitialInflation.Size()
		i -= size
		if _, err := m.InitialInflation.MarshalTo(dAtA[i:]); err != nil {
			return 0, err
		}
		i = encodeVarintParams(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0x12
	{
		size := m.InflationDecayFactor.Size()
		i -= size
		if _, err := m.InflationDecayFactor.MarshalTo(dAtA[i:]); err != nil {
			return 0, err
		}
		i = encodeVarintParams(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0xa
	return len(dAtA) - i, nil
}

func encodeVarintParams(dAtA []byte, offset int, v uint64) int {
	offset -= sovParams(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *Params) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = m.InflationDecayFactor.Size()
	n += 1 + l + sovParams(uint64(l))
	l = m.InitialInflation.Size()
	n += 1 + l + sovParams(uint64(l))
	l = m.Variance.Size()
	n += 1 + l + sovParams(uint64(l))
	return n
}

func sovParams(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozParams(x uint64) (n int) {
	return sovParams(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *Params) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowParams
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
			return fmt.Errorf("proto: Params: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Params: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field InflationDecayFactor", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowParams
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
				return ErrInvalidLengthParams
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthParams
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.InflationDecayFactor.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field InitialInflation", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowParams
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
				return ErrInvalidLengthParams
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthParams
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.InitialInflation.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Variance", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowParams
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
				return ErrInvalidLengthParams
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthParams
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.Variance.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipParams(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthParams
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
func skipParams(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowParams
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
					return 0, ErrIntOverflowParams
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
					return 0, ErrIntOverflowParams
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
				return 0, ErrInvalidLengthParams
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupParams
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthParams
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthParams        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowParams          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupParams = fmt.Errorf("proto: unexpected end of group")
)
