// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: akash/gov/v1beta3/params.proto

package v1beta3

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

// DepositParams defines the parameters for the x/gov module.
type DepositParams struct {
	// MinInitialDepositRate is the minimum % of TotalDeposit
	// author of the proposal must put in order for proposal tx to be committed
	MinInitialDepositRate github_com_cosmos_cosmos_sdk_types.Dec `protobuf:"bytes,1,opt,name=min_initial_deposit_rate,json=minInitialDepositRate,proto3,customtype=github.com/cosmos/cosmos-sdk/types.Dec" json:"min_initial_deposit_rate" yaml:"min_initial_deposit_rate"`
}

func (m *DepositParams) Reset()         { *m = DepositParams{} }
func (m *DepositParams) String() string { return proto.CompactTextString(m) }
func (*DepositParams) ProtoMessage()    {}
func (*DepositParams) Descriptor() ([]byte, []int) {
	return fileDescriptor_ff7c87bcce7fe71f, []int{0}
}
func (m *DepositParams) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *DepositParams) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_DepositParams.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *DepositParams) XXX_Merge(src proto.Message) {
	xxx_messageInfo_DepositParams.Merge(m, src)
}
func (m *DepositParams) XXX_Size() int {
	return m.Size()
}
func (m *DepositParams) XXX_DiscardUnknown() {
	xxx_messageInfo_DepositParams.DiscardUnknown(m)
}

var xxx_messageInfo_DepositParams proto.InternalMessageInfo

func init() {
	proto.RegisterType((*DepositParams)(nil), "akash.gov.v1beta3.DepositParams")
}

func init() { proto.RegisterFile("akash/gov/v1beta3/params.proto", fileDescriptor_ff7c87bcce7fe71f) }

var fileDescriptor_ff7c87bcce7fe71f = []byte{
	// 267 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x92, 0x4b, 0xcc, 0x4e, 0x2c,
	0xce, 0xd0, 0x4f, 0xcf, 0x2f, 0xd3, 0x2f, 0x33, 0x4c, 0x4a, 0x2d, 0x49, 0x34, 0xd6, 0x2f, 0x48,
	0x2c, 0x4a, 0xcc, 0x2d, 0xd6, 0x2b, 0x28, 0xca, 0x2f, 0xc9, 0x17, 0x12, 0x04, 0xcb, 0xeb, 0xa5,
	0xe7, 0x97, 0xe9, 0x41, 0xe5, 0xa5, 0x44, 0xd2, 0xf3, 0xd3, 0xf3, 0xc1, 0xb2, 0xfa, 0x20, 0x16,
	0x44, 0xa1, 0xd2, 0x25, 0x46, 0x2e, 0x5e, 0x97, 0xd4, 0x82, 0xfc, 0xe2, 0xcc, 0x92, 0x00, 0xb0,
	0x01, 0x42, 0x07, 0x18, 0xb9, 0x24, 0x72, 0x33, 0xf3, 0xe2, 0x33, 0xf3, 0x32, 0x4b, 0x32, 0x13,
	0x73, 0xe2, 0x53, 0x20, 0xb2, 0xf1, 0x45, 0x89, 0x25, 0xa9, 0x12, 0x8c, 0x0a, 0x8c, 0x1a, 0x3c,
	0x4e, 0x6d, 0x8c, 0x27, 0xee, 0xc9, 0x33, 0xdc, 0xba, 0x27, 0xaf, 0x96, 0x9e, 0x59, 0x92, 0x51,
	0x9a, 0xa4, 0x97, 0x9c, 0x9f, 0xab, 0x9f, 0x9c, 0x5f, 0x9c, 0x9b, 0x5f, 0x0c, 0xa5, 0x74, 0x8b,
	0x53, 0xb2, 0xf5, 0x4b, 0x2a, 0x0b, 0x52, 0x8b, 0xf5, 0x5c, 0x52, 0x93, 0x1f, 0xdd, 0x93, 0x17,
	0xf5, 0xcd, 0xcc, 0xf3, 0x84, 0x98, 0x08, 0xb5, 0x2e, 0x28, 0xb1, 0x24, 0xf5, 0xd5, 0x3d, 0x79,
	0x9c, 0x76, 0x7d, 0xba, 0x27, 0x2f, 0x5f, 0x99, 0x98, 0x9b, 0x63, 0xa5, 0x84, 0x4b, 0x85, 0x52,
	0x90, 0x68, 0x2e, 0x36, 0x53, 0x9d, 0x2c, 0x4f, 0x3c, 0x92, 0x63, 0xbc, 0xf0, 0x48, 0x8e, 0xf1,
	0xc1, 0x23, 0x39, 0xc6, 0x09, 0x8f, 0xe5, 0x18, 0x2e, 0x3c, 0x96, 0x63, 0xb8, 0xf1, 0x58, 0x8e,
	0x21, 0x4a, 0xbe, 0x20, 0x3b, 0x5d, 0x2f, 0x31, 0xbb, 0x44, 0x2f, 0x25, 0xb5, 0x4c, 0x3f, 0x3d,
	0x5f, 0x3f, 0x2f, 0x3f, 0x25, 0x15, 0x39, 0x14, 0x93, 0xd8, 0xc0, 0xc1, 0x62, 0x0c, 0x08, 0x00,
	0x00, 0xff, 0xff, 0x41, 0x12, 0x21, 0x60, 0x61, 0x01, 0x00, 0x00,
}

func (m *DepositParams) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *DepositParams) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *DepositParams) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	{
		size := m.MinInitialDepositRate.Size()
		i -= size
		if _, err := m.MinInitialDepositRate.MarshalTo(dAtA[i:]); err != nil {
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
func (m *DepositParams) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = m.MinInitialDepositRate.Size()
	n += 1 + l + sovParams(uint64(l))
	return n
}

func sovParams(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozParams(x uint64) (n int) {
	return sovParams(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *DepositParams) Unmarshal(dAtA []byte) error {
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
			return fmt.Errorf("proto: DepositParams: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: DepositParams: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field MinInitialDepositRate", wireType)
			}
			var byteLen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowParams
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				byteLen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if byteLen < 0 {
				return ErrInvalidLengthParams
			}
			postIndex := iNdEx + byteLen
			if postIndex < 0 {
				return ErrInvalidLengthParams
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.MinInitialDepositRate.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
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
