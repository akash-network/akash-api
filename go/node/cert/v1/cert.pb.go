// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: akash/cert/v1/cert.proto

package v1

import (
	fmt "fmt"
	_ "github.com/cosmos/cosmos-proto"
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

// State is an enum which refers to state of deployment
type State int32

const (
	// Prefix should start with 0 in enum. So declaring dummy state
	CertificateStateInvalid State = 0
	// CertificateValid denotes state for deployment active
	CertificateValid State = 1
	// CertificateRevoked denotes state for deployment closed
	CertificateRevoked State = 2
)

var State_name = map[int32]string{
	0: "invalid",
	1: "valid",
	2: "revoked",
}

var State_value = map[string]int32{
	"invalid": 0,
	"valid":   1,
	"revoked": 2,
}

func (x State) String() string {
	return proto.EnumName(State_name, int32(x))
}

func (State) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_aed64ec87f738ef2, []int{0}
}

// ID stores owner and sequence number
type ID struct {
	Owner  string `protobuf:"bytes,1,opt,name=owner,proto3" json:"owner" yaml:"owner"`
	Serial string `protobuf:"bytes,2,opt,name=serial,proto3" json:"serial" yaml:"serial"`
}

func (m *ID) Reset()      { *m = ID{} }
func (*ID) ProtoMessage() {}
func (*ID) Descriptor() ([]byte, []int) {
	return fileDescriptor_aed64ec87f738ef2, []int{0}
}
func (m *ID) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *ID) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_ID.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *ID) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ID.Merge(m, src)
}
func (m *ID) XXX_Size() int {
	return m.Size()
}
func (m *ID) XXX_DiscardUnknown() {
	xxx_messageInfo_ID.DiscardUnknown(m)
}

var xxx_messageInfo_ID proto.InternalMessageInfo

func (m *ID) GetOwner() string {
	if m != nil {
		return m.Owner
	}
	return ""
}

func (m *ID) GetSerial() string {
	if m != nil {
		return m.Serial
	}
	return ""
}

// Certificate stores state, certificate and it's public key
type Certificate struct {
	State  State  `protobuf:"varint,2,opt,name=state,proto3,enum=akash.cert.v1.State" json:"state" yaml:"state"`
	Cert   []byte `protobuf:"bytes,3,opt,name=cert,proto3" json:"cert" yaml:"cert"`
	Pubkey []byte `protobuf:"bytes,4,opt,name=pubkey,proto3" json:"pubkey" yaml:"pubkey"`
}

func (m *Certificate) Reset()         { *m = Certificate{} }
func (m *Certificate) String() string { return proto.CompactTextString(m) }
func (*Certificate) ProtoMessage()    {}
func (*Certificate) Descriptor() ([]byte, []int) {
	return fileDescriptor_aed64ec87f738ef2, []int{1}
}
func (m *Certificate) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Certificate) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Certificate.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Certificate) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Certificate.Merge(m, src)
}
func (m *Certificate) XXX_Size() int {
	return m.Size()
}
func (m *Certificate) XXX_DiscardUnknown() {
	xxx_messageInfo_Certificate.DiscardUnknown(m)
}

var xxx_messageInfo_Certificate proto.InternalMessageInfo

func (m *Certificate) GetState() State {
	if m != nil {
		return m.State
	}
	return CertificateStateInvalid
}

func (m *Certificate) GetCert() []byte {
	if m != nil {
		return m.Cert
	}
	return nil
}

func (m *Certificate) GetPubkey() []byte {
	if m != nil {
		return m.Pubkey
	}
	return nil
}

func init() {
	proto.RegisterEnum("akash.cert.v1.State", State_name, State_value)
	proto.RegisterType((*ID)(nil), "akash.cert.v1.ID")
	proto.RegisterType((*Certificate)(nil), "akash.cert.v1.Certificate")
}

func init() { proto.RegisterFile("akash/cert/v1/cert.proto", fileDescriptor_aed64ec87f738ef2) }

var fileDescriptor_aed64ec87f738ef2 = []byte{
	// 428 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x54, 0x92, 0xc1, 0x8b, 0xd3, 0x40,
	0x14, 0xc6, 0x33, 0xb5, 0xdd, 0xd5, 0xd9, 0x5d, 0x29, 0x43, 0x70, 0xb3, 0x29, 0x64, 0xc2, 0x78,
	0x29, 0x8a, 0x09, 0x75, 0xf1, 0xb2, 0x37, 0xa3, 0x22, 0x7b, 0xcd, 0x82, 0x07, 0x2f, 0x32, 0xdb,
	0x8c, 0x31, 0xa4, 0x9b, 0x29, 0x93, 0x31, 0xb2, 0x07, 0xef, 0x52, 0x3c, 0x78, 0xf4, 0x52, 0x58,
	0xf0, 0x5f, 0x10, 0xff, 0x06, 0x8f, 0x8b, 0x27, 0x4f, 0x41, 0xda, 0x8b, 0xf4, 0xd8, 0xbf, 0x40,
	0xf2, 0x26, 0xd2, 0xee, 0x29, 0xf9, 0xbe, 0xef, 0x37, 0x8f, 0xf7, 0xc1, 0xc3, 0x0e, 0xcf, 0x79,
	0xf9, 0x2e, 0x1c, 0x0b, 0xa5, 0xc3, 0x6a, 0x04, 0xdf, 0x60, 0xaa, 0xa4, 0x96, 0xe4, 0x00, 0x92,
	0x00, 0x9c, 0x6a, 0xe4, 0xda, 0xa9, 0x4c, 0x25, 0x24, 0x61, 0xf3, 0x67, 0x20, 0xf7, 0x68, 0x2c,
	0xcb, 0x0b, 0x59, 0xbe, 0x31, 0x81, 0x11, 0x26, 0x62, 0x9f, 0x11, 0xee, 0x9c, 0x3e, 0x27, 0x2f,
	0x71, 0x4f, 0x7e, 0x28, 0x84, 0x72, 0x90, 0x8f, 0x86, 0x77, 0xa2, 0xd1, 0xaa, 0xa6, 0xc6, 0x58,
	0xd7, 0x74, 0xff, 0x92, 0x5f, 0x4c, 0x4e, 0x18, 0x48, 0xf6, 0xeb, 0xfb, 0x23, 0xbb, 0x1d, 0xf0,
	0x34, 0x49, 0x94, 0x28, 0xcb, 0x33, 0xad, 0xb2, 0x22, 0x8d, 0x0d, 0x4e, 0x8e, 0xf1, 0x4e, 0x29,
	0x54, 0xc6, 0x27, 0x4e, 0x07, 0x26, 0x0d, 0x56, 0x35, 0x6d, 0x9d, 0x75, 0x4d, 0x0f, 0xcc, 0x28,
	0xa3, 0x59, 0xdc, 0x06, 0x27, 0xb7, 0xbf, 0x5e, 0x51, 0xeb, 0xef, 0x15, 0xb5, 0xd8, 0x0f, 0x84,
	0xf7, 0x9e, 0x09, 0xa5, 0xb3, 0xb7, 0xd9, 0x98, 0x6b, 0x41, 0x5e, 0xe0, 0x5e, 0xa9, 0xb9, 0x16,
	0x30, 0xed, 0xee, 0x63, 0x3b, 0xb8, 0x51, 0x37, 0x38, 0x6b, 0xb2, 0xe8, 0xa8, 0xd9, 0x16, 0xb0,
	0xcd, 0xb6, 0x20, 0x59, 0x6c, 0x6c, 0xf2, 0x10, 0x77, 0x9b, 0x27, 0xce, 0x2d, 0x1f, 0x0d, 0xf7,
	0xa3, 0xc3, 0x55, 0x4d, 0x41, 0xaf, 0x6b, 0xba, 0x67, 0xf0, 0x46, 0xb1, 0x18, 0xcc, 0xa6, 0xc2,
	0xf4, 0xfd, 0x79, 0x2e, 0x2e, 0x9d, 0x2e, 0xe0, 0x50, 0xc1, 0x38, 0x9b, 0x0a, 0x46, 0xb3, 0xb8,
	0x0d, 0x1e, 0x7c, 0xc4, 0x3d, 0x58, 0x86, 0x0c, 0xf1, 0x6e, 0x56, 0x54, 0x7c, 0x92, 0x25, 0x7d,
	0xcb, 0x1d, 0xcc, 0xe6, 0xfe, 0xe1, 0x56, 0x1f, 0x40, 0x4e, 0x4d, 0x4c, 0x28, 0xee, 0x19, 0x0e,
	0xb9, 0xf6, 0x6c, 0xee, 0xf7, 0xb7, 0xb8, 0x57, 0x00, 0xdc, 0xc7, 0xbb, 0x4a, 0x54, 0x32, 0x17,
	0x49, 0xbf, 0xe3, 0xde, 0x9b, 0xcd, 0x7d, 0xb2, 0x85, 0xc4, 0x26, 0x71, 0xbb, 0x9f, 0xbe, 0x79,
	0x56, 0xf4, 0xe4, 0xe7, 0xc2, 0x43, 0xd7, 0x0b, 0x0f, 0xfd, 0x59, 0x78, 0xe8, 0xcb, 0xd2, 0xb3,
	0xae, 0x97, 0x9e, 0xf5, 0x7b, 0xe9, 0x59, 0xaf, 0x07, 0xd3, 0x3c, 0x0d, 0x78, 0xae, 0x83, 0x44,
	0x54, 0x61, 0x2a, 0xc3, 0x42, 0x26, 0xe2, 0xff, 0x21, 0x9d, 0xef, 0xc0, 0x11, 0x1c, 0xff, 0x0b,
	0x00, 0x00, 0xff, 0xff, 0x3b, 0x17, 0xac, 0x54, 0x60, 0x02, 0x00, 0x00,
}

func (m *ID) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *ID) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *ID) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Serial) > 0 {
		i -= len(m.Serial)
		copy(dAtA[i:], m.Serial)
		i = encodeVarintCert(dAtA, i, uint64(len(m.Serial)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.Owner) > 0 {
		i -= len(m.Owner)
		copy(dAtA[i:], m.Owner)
		i = encodeVarintCert(dAtA, i, uint64(len(m.Owner)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *Certificate) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Certificate) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Certificate) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Pubkey) > 0 {
		i -= len(m.Pubkey)
		copy(dAtA[i:], m.Pubkey)
		i = encodeVarintCert(dAtA, i, uint64(len(m.Pubkey)))
		i--
		dAtA[i] = 0x22
	}
	if len(m.Cert) > 0 {
		i -= len(m.Cert)
		copy(dAtA[i:], m.Cert)
		i = encodeVarintCert(dAtA, i, uint64(len(m.Cert)))
		i--
		dAtA[i] = 0x1a
	}
	if m.State != 0 {
		i = encodeVarintCert(dAtA, i, uint64(m.State))
		i--
		dAtA[i] = 0x10
	}
	return len(dAtA) - i, nil
}

func encodeVarintCert(dAtA []byte, offset int, v uint64) int {
	offset -= sovCert(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *ID) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Owner)
	if l > 0 {
		n += 1 + l + sovCert(uint64(l))
	}
	l = len(m.Serial)
	if l > 0 {
		n += 1 + l + sovCert(uint64(l))
	}
	return n
}

func (m *Certificate) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.State != 0 {
		n += 1 + sovCert(uint64(m.State))
	}
	l = len(m.Cert)
	if l > 0 {
		n += 1 + l + sovCert(uint64(l))
	}
	l = len(m.Pubkey)
	if l > 0 {
		n += 1 + l + sovCert(uint64(l))
	}
	return n
}

func sovCert(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozCert(x uint64) (n int) {
	return sovCert(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *ID) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowCert
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
			return fmt.Errorf("proto: ID: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: ID: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Owner", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCert
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
				return ErrInvalidLengthCert
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthCert
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Owner = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Serial", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCert
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
				return ErrInvalidLengthCert
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthCert
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Serial = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipCert(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthCert
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
func (m *Certificate) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowCert
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
			return fmt.Errorf("proto: Certificate: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Certificate: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 2:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field State", wireType)
			}
			m.State = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCert
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.State |= State(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Cert", wireType)
			}
			var byteLen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCert
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
				return ErrInvalidLengthCert
			}
			postIndex := iNdEx + byteLen
			if postIndex < 0 {
				return ErrInvalidLengthCert
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Cert = append(m.Cert[:0], dAtA[iNdEx:postIndex]...)
			if m.Cert == nil {
				m.Cert = []byte{}
			}
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Pubkey", wireType)
			}
			var byteLen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCert
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
				return ErrInvalidLengthCert
			}
			postIndex := iNdEx + byteLen
			if postIndex < 0 {
				return ErrInvalidLengthCert
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Pubkey = append(m.Pubkey[:0], dAtA[iNdEx:postIndex]...)
			if m.Pubkey == nil {
				m.Pubkey = []byte{}
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipCert(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthCert
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
func skipCert(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowCert
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
					return 0, ErrIntOverflowCert
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
					return 0, ErrIntOverflowCert
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
				return 0, ErrInvalidLengthCert
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupCert
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthCert
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthCert        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowCert          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupCert = fmt.Errorf("proto: unexpected end of group")
)
