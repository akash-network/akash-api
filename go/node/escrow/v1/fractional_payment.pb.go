// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: akash/escrow/v1/fractional_payment.proto

package v1

import (
	fmt "fmt"
	_ "github.com/cosmos/cosmos-proto"
	types "github.com/cosmos/cosmos-sdk/types"
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

// State defines payment state
type FractionalPayment_State int32

const (
	// PaymentStateInvalid is the state when the payment is invalid.
	PaymentStateInvalid FractionalPayment_State = 0
	// PaymentStateOpen is the state when the payment is open.
	PaymentOpen FractionalPayment_State = 1
	// PaymentStateClosed is the state when the payment is closed.
	PaymentClosed FractionalPayment_State = 2
	// PaymentStateOverdrawn is the state when the payment is overdrawn.
	PaymentOverdrawn FractionalPayment_State = 3
)

var FractionalPayment_State_name = map[int32]string{
	0: "invalid",
	1: "open",
	2: "closed",
	3: "overdrawn",
}

var FractionalPayment_State_value = map[string]int32{
	"invalid":   0,
	"open":      1,
	"closed":    2,
	"overdrawn": 3,
}

func (x FractionalPayment_State) String() string {
	return proto.EnumName(FractionalPayment_State_name, int32(x))
}

func (FractionalPayment_State) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_deaabcd18f9ef7ba, []int{0, 0}
}

// FractionalPayment stores state for a payment.
type FractionalPayment struct {
	// AccountId is the unique identifier for the account.
	AccountID AccountID `protobuf:"bytes,1,opt,name=account_id,json=accountId,proto3" json:"accountID" yaml:"accountID"`
	// PaymentId is the unique identifier for the payment.
	PaymentID string `protobuf:"bytes,2,opt,name=payment_id,json=paymentId,proto3" json:"paymentID" yaml:"paymentID"`
	// Owner is the bech32 address of the payment.
	// It is a string representing a valid account address.
	//
	// Example:
	//   "akash1..."
	Owner string `protobuf:"bytes,3,opt,name=owner,proto3" json:"owner" yaml:"owner"`
	// State represents the state of the FractionalPayment.
	State FractionalPayment_State `protobuf:"varint,4,opt,name=state,proto3,enum=akash.escrow.v1.FractionalPayment_State" json:"state" yaml:"state"`
	// Rate holds the rate of the FractionalPayment.
	Rate types.DecCoin `protobuf:"bytes,5,opt,name=rate,proto3" json:"rate" yaml:"rate"`
	// Balance is the current available balance.
	Balance types.DecCoin `protobuf:"bytes,6,opt,name=balance,proto3" json:"balance" yaml:"balance"`
	// Withdrawn is the amount of coins withdrawn by the FractionalPayment.
	Withdrawn types.Coin `protobuf:"bytes,7,opt,name=withdrawn,proto3" json:"withdrawn" yaml:"withdrawn"`
}

func (m *FractionalPayment) Reset()         { *m = FractionalPayment{} }
func (m *FractionalPayment) String() string { return proto.CompactTextString(m) }
func (*FractionalPayment) ProtoMessage()    {}
func (*FractionalPayment) Descriptor() ([]byte, []int) {
	return fileDescriptor_deaabcd18f9ef7ba, []int{0}
}
func (m *FractionalPayment) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *FractionalPayment) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_FractionalPayment.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *FractionalPayment) XXX_Merge(src proto.Message) {
	xxx_messageInfo_FractionalPayment.Merge(m, src)
}
func (m *FractionalPayment) XXX_Size() int {
	return m.Size()
}
func (m *FractionalPayment) XXX_DiscardUnknown() {
	xxx_messageInfo_FractionalPayment.DiscardUnknown(m)
}

var xxx_messageInfo_FractionalPayment proto.InternalMessageInfo

func (m *FractionalPayment) GetAccountID() AccountID {
	if m != nil {
		return m.AccountID
	}
	return AccountID{}
}

func (m *FractionalPayment) GetPaymentID() string {
	if m != nil {
		return m.PaymentID
	}
	return ""
}

func (m *FractionalPayment) GetOwner() string {
	if m != nil {
		return m.Owner
	}
	return ""
}

func (m *FractionalPayment) GetState() FractionalPayment_State {
	if m != nil {
		return m.State
	}
	return PaymentStateInvalid
}

func (m *FractionalPayment) GetRate() types.DecCoin {
	if m != nil {
		return m.Rate
	}
	return types.DecCoin{}
}

func (m *FractionalPayment) GetBalance() types.DecCoin {
	if m != nil {
		return m.Balance
	}
	return types.DecCoin{}
}

func (m *FractionalPayment) GetWithdrawn() types.Coin {
	if m != nil {
		return m.Withdrawn
	}
	return types.Coin{}
}

func init() {
	proto.RegisterEnum("akash.escrow.v1.FractionalPayment_State", FractionalPayment_State_name, FractionalPayment_State_value)
	proto.RegisterType((*FractionalPayment)(nil), "akash.escrow.v1.FractionalPayment")
}

func init() {
	proto.RegisterFile("akash/escrow/v1/fractional_payment.proto", fileDescriptor_deaabcd18f9ef7ba)
}

var fileDescriptor_deaabcd18f9ef7ba = []byte{
	// 584 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x8c, 0x93, 0x31, 0x6f, 0xd3, 0x40,
	0x14, 0xc7, 0xed, 0x36, 0x49, 0x95, 0x2b, 0xb4, 0xee, 0x51, 0x89, 0xc4, 0x50, 0xdb, 0x18, 0x90,
	0xb2, 0x70, 0x56, 0xca, 0x80, 0xc4, 0xd6, 0xb4, 0x02, 0x75, 0xa8, 0x40, 0xee, 0x54, 0x06, 0xa2,
	0x8b, 0x7d, 0xa4, 0x56, 0x92, 0x3b, 0xcb, 0x36, 0x8e, 0xfa, 0x0d, 0x50, 0x26, 0x84, 0x58, 0x33,
	0xf1, 0x15, 0xf8, 0x10, 0x1d, 0x2b, 0x26, 0x26, 0x0b, 0x25, 0x5b, 0xc6, 0x7c, 0x02, 0xe4, 0xbb,
	0xb3, 0x2d, 0xb5, 0x0c, 0x6c, 0x7e, 0xff, 0xff, 0xff, 0xfd, 0xde, 0xd3, 0x3b, 0x19, 0x74, 0xf0,
	0x08, 0xc7, 0x97, 0x0e, 0x89, 0xbd, 0x88, 0x4d, 0x9d, 0xb4, 0xeb, 0x7c, 0x8a, 0xb0, 0x97, 0x04,
	0x8c, 0xe2, 0x71, 0x3f, 0xc4, 0x57, 0x13, 0x42, 0x13, 0x14, 0x46, 0x2c, 0x61, 0x70, 0x97, 0x27,
	0x91, 0x48, 0xa2, 0xb4, 0xab, 0xef, 0x0f, 0xd9, 0x90, 0x71, 0xcf, 0xc9, 0xbf, 0x44, 0x4c, 0x6f,
	0x7b, 0x2c, 0x9e, 0xb0, 0xb8, 0x2f, 0x0c, 0x51, 0x48, 0xcb, 0x10, 0x95, 0x33, 0xc0, 0x31, 0x71,
	0xd2, 0xee, 0x80, 0x24, 0xb8, 0xeb, 0x78, 0x2c, 0xa0, 0xd2, 0x37, 0x6f, 0xef, 0x82, 0x3d, 0x8f,
	0x7d, 0xa6, 0x49, 0xe0, 0x8b, 0x80, 0xfd, 0xbd, 0x01, 0xf6, 0xde, 0x94, 0xfb, 0xbd, 0x17, 0xeb,
	0xc1, 0x09, 0x00, 0x32, 0xd8, 0x0f, 0xfc, 0x96, 0x6a, 0xa9, 0x9d, 0xed, 0x43, 0x1d, 0xdd, 0xda,
	0x16, 0x1d, 0x89, 0xc8, 0xe9, 0x49, 0xef, 0xf0, 0x3a, 0x33, 0x95, 0x45, 0x66, 0x36, 0x4b, 0x69,
	0x95, 0x99, 0x4d, 0x5c, 0x14, 0xeb, 0xcc, 0xd4, 0xae, 0xf0, 0x64, 0xfc, 0xda, 0x2e, 0x25, 0xdb,
	0x2d, 0x6d, 0x1f, 0x9e, 0x01, 0x20, 0x0f, 0x93, 0x8f, 0xdb, 0xb0, 0xd4, 0x4e, 0xb3, 0x87, 0x72,
	0x9c, 0xdc, 0x47, 0xe0, 0xc2, 0xa2, 0xa8, 0x70, 0xa5, 0x64, 0xbb, 0xa5, 0xed, 0xc3, 0xb7, 0xa0,
	0xce, 0xa6, 0x94, 0x44, 0xad, 0x4d, 0x4e, 0xea, 0xae, 0x32, 0x53, 0x08, 0xeb, 0xcc, 0xbc, 0x27,
	0x1a, 0x79, 0x69, 0xff, 0xfa, 0xf9, 0x62, 0x5f, 0x9e, 0xf3, 0xc8, 0xf7, 0x23, 0x12, 0xc7, 0xe7,
	0x49, 0x14, 0xd0, 0xa1, 0x2b, 0xe2, 0xf0, 0x02, 0xd4, 0xe3, 0x04, 0x27, 0xa4, 0x55, 0xb3, 0xd4,
	0xce, 0xce, 0x61, 0xe7, 0xce, 0x05, 0xee, 0x5c, 0x0e, 0x9d, 0xe7, 0xf9, 0x5e, 0x3b, 0x1f, 0xc9,
	0x5b, 0xab, 0x91, 0xbc, 0xb4, 0x5d, 0x21, 0xc3, 0x33, 0x50, 0x8b, 0x72, 0x72, 0x9d, 0xdf, 0xf6,
	0x31, 0x92, 0x6b, 0xe4, 0xef, 0x88, 0xe4, 0x3b, 0xa2, 0x13, 0xe2, 0x1d, 0xb3, 0x80, 0xf6, 0x1e,
	0xe5, 0xd7, 0x5d, 0x65, 0x26, 0xef, 0x58, 0x67, 0xe6, 0xb6, 0x00, 0x46, 0x9c, 0xc7, 0x45, 0x78,
	0x01, 0xb6, 0x06, 0x78, 0x8c, 0xa9, 0x47, 0x5a, 0x8d, 0xff, 0x20, 0x3e, 0x91, 0xc4, 0xa2, 0x69,
	0x9d, 0x99, 0x3b, 0x02, 0x2a, 0x05, 0xdb, 0x2d, 0x2c, 0xf8, 0x11, 0x34, 0xa7, 0x41, 0x72, 0xe9,
	0x47, 0x78, 0x4a, 0x5b, 0x5b, 0x1c, 0xde, 0xfe, 0x27, 0x9c, 0x93, 0x9f, 0x4b, 0x72, 0xd5, 0x53,
	0xbd, 0x56, 0x29, 0xd9, 0x6e, 0x65, 0xdb, 0xdf, 0x54, 0x50, 0xe7, 0x57, 0x83, 0xcf, 0xc0, 0x56,
	0x40, 0x53, 0x3c, 0x0e, 0x7c, 0x4d, 0xd1, 0x1f, 0xce, 0xe6, 0xd6, 0x03, 0x79, 0x55, 0x6e, 0x9f,
	0x0a, 0x0b, 0xb6, 0x41, 0x8d, 0x85, 0x84, 0x6a, 0xaa, 0xbe, 0x3b, 0x9b, 0x5b, 0xdb, 0x32, 0xf2,
	0x2e, 0x24, 0x14, 0x1e, 0x80, 0x86, 0x37, 0x66, 0x31, 0xf1, 0xb5, 0x0d, 0x7d, 0x6f, 0x36, 0xb7,
	0xee, 0x4b, 0xf3, 0x98, 0x8b, 0xf0, 0x29, 0x68, 0xb2, 0x94, 0x44, 0x7c, 0xac, 0xb6, 0xa9, 0xef,
	0xcf, 0xe6, 0x96, 0x56, 0xb4, 0x17, 0xba, 0x5e, 0xfb, 0xf2, 0xc3, 0x50, 0x7a, 0xaf, 0xae, 0x17,
	0x86, 0x7a, 0xb3, 0x30, 0xd4, 0x3f, 0x0b, 0x43, 0xfd, 0xba, 0x34, 0x94, 0x9b, 0xa5, 0xa1, 0xfc,
	0x5e, 0x1a, 0xca, 0x87, 0x83, 0x70, 0x34, 0x44, 0x78, 0x94, 0x20, 0x9f, 0xa4, 0xce, 0x90, 0x39,
	0x94, 0xf9, 0xa4, 0xfa, 0xbf, 0x06, 0x0d, 0xfe, 0x5b, 0xbd, 0xfc, 0x1b, 0x00, 0x00, 0xff, 0xff,
	0x90, 0x55, 0x29, 0xd1, 0x05, 0x04, 0x00, 0x00,
}

func (m *FractionalPayment) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *FractionalPayment) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *FractionalPayment) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	{
		size, err := m.Withdrawn.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintFractionalPayment(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0x3a
	{
		size, err := m.Balance.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintFractionalPayment(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0x32
	{
		size, err := m.Rate.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintFractionalPayment(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0x2a
	if m.State != 0 {
		i = encodeVarintFractionalPayment(dAtA, i, uint64(m.State))
		i--
		dAtA[i] = 0x20
	}
	if len(m.Owner) > 0 {
		i -= len(m.Owner)
		copy(dAtA[i:], m.Owner)
		i = encodeVarintFractionalPayment(dAtA, i, uint64(len(m.Owner)))
		i--
		dAtA[i] = 0x1a
	}
	if len(m.PaymentID) > 0 {
		i -= len(m.PaymentID)
		copy(dAtA[i:], m.PaymentID)
		i = encodeVarintFractionalPayment(dAtA, i, uint64(len(m.PaymentID)))
		i--
		dAtA[i] = 0x12
	}
	{
		size, err := m.AccountID.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintFractionalPayment(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0xa
	return len(dAtA) - i, nil
}

func encodeVarintFractionalPayment(dAtA []byte, offset int, v uint64) int {
	offset -= sovFractionalPayment(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *FractionalPayment) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = m.AccountID.Size()
	n += 1 + l + sovFractionalPayment(uint64(l))
	l = len(m.PaymentID)
	if l > 0 {
		n += 1 + l + sovFractionalPayment(uint64(l))
	}
	l = len(m.Owner)
	if l > 0 {
		n += 1 + l + sovFractionalPayment(uint64(l))
	}
	if m.State != 0 {
		n += 1 + sovFractionalPayment(uint64(m.State))
	}
	l = m.Rate.Size()
	n += 1 + l + sovFractionalPayment(uint64(l))
	l = m.Balance.Size()
	n += 1 + l + sovFractionalPayment(uint64(l))
	l = m.Withdrawn.Size()
	n += 1 + l + sovFractionalPayment(uint64(l))
	return n
}

func sovFractionalPayment(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozFractionalPayment(x uint64) (n int) {
	return sovFractionalPayment(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *FractionalPayment) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowFractionalPayment
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
			return fmt.Errorf("proto: FractionalPayment: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: FractionalPayment: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field AccountID", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowFractionalPayment
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
				return ErrInvalidLengthFractionalPayment
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthFractionalPayment
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.AccountID.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field PaymentID", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowFractionalPayment
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
				return ErrInvalidLengthFractionalPayment
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthFractionalPayment
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.PaymentID = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Owner", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowFractionalPayment
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
				return ErrInvalidLengthFractionalPayment
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthFractionalPayment
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Owner = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 4:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field State", wireType)
			}
			m.State = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowFractionalPayment
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.State |= FractionalPayment_State(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Rate", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowFractionalPayment
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
				return ErrInvalidLengthFractionalPayment
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthFractionalPayment
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.Rate.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 6:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Balance", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowFractionalPayment
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
				return ErrInvalidLengthFractionalPayment
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthFractionalPayment
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.Balance.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 7:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Withdrawn", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowFractionalPayment
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
				return ErrInvalidLengthFractionalPayment
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthFractionalPayment
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.Withdrawn.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipFractionalPayment(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthFractionalPayment
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
func skipFractionalPayment(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowFractionalPayment
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
					return 0, ErrIntOverflowFractionalPayment
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
					return 0, ErrIntOverflowFractionalPayment
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
				return 0, ErrInvalidLengthFractionalPayment
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupFractionalPayment
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthFractionalPayment
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthFractionalPayment        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowFractionalPayment          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupFractionalPayment = fmt.Errorf("proto: unexpected end of group")
)
