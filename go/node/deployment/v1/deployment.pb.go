// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: akash/deployment/v1/deployment.proto

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
type Deployment_State int32

const (
	// Prefix should start with 0 in enum. So declaring dummy state
	DeploymentStateInvalid Deployment_State = 0
	// DeploymentActive denotes state for deployment active
	DeploymentActive Deployment_State = 1
	// DeploymentClosed denotes state for deployment closed
	DeploymentClosed Deployment_State = 2
)

var Deployment_State_name = map[int32]string{
	0: "invalid",
	1: "active",
	2: "closed",
}

var Deployment_State_value = map[string]int32{
	"invalid": 0,
	"active":  1,
	"closed":  2,
}

func (x Deployment_State) String() string {
	return proto.EnumName(Deployment_State_name, int32(x))
}

func (Deployment_State) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_289f09354ec3dad5, []int{1, 0}
}

// DeploymentID represents a unique identifier for a specific deployment on the network.
// It is composed of two fields: an owner address and a sequence number (dseq).
type DeploymentID struct {
	// owner is the account address of the user who owns the deployment.
	// It is a string representing a valid account address.
	//
	// Example:
	//   "akash1..."
	Owner string `protobuf:"bytes,1,opt,name=owner,proto3" json:"owner" yaml:"owner"`
	// dseq (deployment sequence number) is a unique numeric identifier for the deployment.
	// It is used to differentiate deployments created by the same owner.
	DSeq uint64 `protobuf:"varint,2,opt,name=dseq,proto3" json:"dseq" yaml:"dseq"`
}

func (m *DeploymentID) Reset()      { *m = DeploymentID{} }
func (*DeploymentID) ProtoMessage() {}
func (*DeploymentID) Descriptor() ([]byte, []int) {
	return fileDescriptor_289f09354ec3dad5, []int{0}
}
func (m *DeploymentID) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *DeploymentID) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_DeploymentID.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *DeploymentID) XXX_Merge(src proto.Message) {
	xxx_messageInfo_DeploymentID.Merge(m, src)
}
func (m *DeploymentID) XXX_Size() int {
	return m.Size()
}
func (m *DeploymentID) XXX_DiscardUnknown() {
	xxx_messageInfo_DeploymentID.DiscardUnknown(m)
}

var xxx_messageInfo_DeploymentID proto.InternalMessageInfo

func (m *DeploymentID) GetOwner() string {
	if m != nil {
		return m.Owner
	}
	return ""
}

func (m *DeploymentID) GetDSeq() uint64 {
	if m != nil {
		return m.DSeq
	}
	return 0
}

// Deployment stores deploymentID, state and checksum details
type Deployment struct {
	ID        DeploymentID     `protobuf:"bytes,1,opt,name=id,proto3" json:"id" yaml:"id"`
	State     Deployment_State `protobuf:"varint,2,opt,name=state,proto3,enum=akash.deployment.v1.Deployment_State" json:"state" yaml:"state"`
	Hash      []byte           `protobuf:"bytes,3,opt,name=hash,proto3" json:"hash" yaml:"hash"`
	CreatedAt int64            `protobuf:"varint,4,opt,name=created_at,json=createdAt,proto3" json:"created_at,omitempty"`
}

func (m *Deployment) Reset()         { *m = Deployment{} }
func (m *Deployment) String() string { return proto.CompactTextString(m) }
func (*Deployment) ProtoMessage()    {}
func (*Deployment) Descriptor() ([]byte, []int) {
	return fileDescriptor_289f09354ec3dad5, []int{1}
}
func (m *Deployment) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Deployment) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Deployment.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Deployment) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Deployment.Merge(m, src)
}
func (m *Deployment) XXX_Size() int {
	return m.Size()
}
func (m *Deployment) XXX_DiscardUnknown() {
	xxx_messageInfo_Deployment.DiscardUnknown(m)
}

var xxx_messageInfo_Deployment proto.InternalMessageInfo

func (m *Deployment) GetID() DeploymentID {
	if m != nil {
		return m.ID
	}
	return DeploymentID{}
}

func (m *Deployment) GetState() Deployment_State {
	if m != nil {
		return m.State
	}
	return DeploymentStateInvalid
}

func (m *Deployment) GetHash() []byte {
	if m != nil {
		return m.Hash
	}
	return nil
}

func (m *Deployment) GetCreatedAt() int64 {
	if m != nil {
		return m.CreatedAt
	}
	return 0
}

func init() {
	proto.RegisterEnum("akash.deployment.v1.Deployment_State", Deployment_State_name, Deployment_State_value)
	proto.RegisterType((*DeploymentID)(nil), "akash.deployment.v1.DeploymentID")
	proto.RegisterType((*Deployment)(nil), "akash.deployment.v1.Deployment")
}

func init() {
	proto.RegisterFile("akash/deployment/v1/deployment.proto", fileDescriptor_289f09354ec3dad5)
}

var fileDescriptor_289f09354ec3dad5 = []byte{
	// 480 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x84, 0x92, 0x41, 0x8b, 0xd3, 0x40,
	0x14, 0xc7, 0x33, 0x69, 0xba, 0xda, 0xd9, 0x22, 0x25, 0x16, 0xed, 0x06, 0x36, 0x93, 0x0d, 0x8a,
	0x05, 0x31, 0xa1, 0xbb, 0xb7, 0x7a, 0x6a, 0x2c, 0x48, 0x6f, 0x92, 0x82, 0x07, 0x2f, 0xcb, 0xd8,
	0x19, 0xd2, 0xd0, 0x36, 0xd3, 0x4d, 0x86, 0xc8, 0x7a, 0xf6, 0x20, 0x7b, 0xf2, 0x24, 0x5e, 0x16,
	0x16, 0xfc, 0x0a, 0x7e, 0x88, 0x3d, 0x2e, 0x9e, 0x3c, 0x05, 0x49, 0x2f, 0xd2, 0x63, 0x3f, 0x81,
	0xcc, 0x4c, 0x31, 0x55, 0x84, 0xbd, 0xe5, 0xff, 0x7b, 0xff, 0xbc, 0x79, 0xff, 0x99, 0x07, 0x1f,
	0xe1, 0x19, 0xce, 0xa6, 0x3e, 0xa1, 0xcb, 0x39, 0x3b, 0x5f, 0xd0, 0x84, 0xfb, 0x79, 0x6f, 0x47,
	0x79, 0xcb, 0x94, 0x71, 0x66, 0xde, 0x97, 0x2e, 0x6f, 0x87, 0xe7, 0x3d, 0xab, 0x1d, 0xb1, 0x88,
	0xc9, 0xba, 0x2f, 0xbe, 0x94, 0xd5, 0x3a, 0x98, 0xb0, 0x6c, 0xc1, 0xb2, 0x53, 0x55, 0x50, 0x42,
	0x95, 0xdc, 0xcf, 0x00, 0x36, 0x87, 0x7f, 0x5a, 0x8c, 0x86, 0xe6, 0x4b, 0x58, 0x67, 0xef, 0x12,
	0x9a, 0x76, 0x80, 0x03, 0xba, 0x8d, 0xa0, 0xb7, 0x2e, 0x90, 0x02, 0x9b, 0x02, 0x35, 0xcf, 0xf1,
	0x62, 0xde, 0x77, 0xa5, 0x74, 0xbf, 0x7f, 0x7b, 0xd6, 0xde, 0xb6, 0x1a, 0x10, 0x92, 0xd2, 0x2c,
	0x1b, 0xf3, 0x34, 0x4e, 0xa2, 0x50, 0xd9, 0xcd, 0x13, 0x68, 0x90, 0x8c, 0x9e, 0x75, 0x74, 0x07,
	0x74, 0x8d, 0x00, 0x95, 0x05, 0x32, 0x86, 0x63, 0x7a, 0xb6, 0x2e, 0x90, 0xe4, 0x9b, 0x02, 0xed,
	0xab, 0x76, 0x42, 0xb9, 0xa1, 0x84, 0xfd, 0xbb, 0x5f, 0xae, 0x90, 0xf6, 0xeb, 0x0a, 0x69, 0xee,
	0x87, 0x1a, 0x84, 0xd5, 0x60, 0xe6, 0x2b, 0xa8, 0xc7, 0x44, 0xce, 0xb4, 0x7f, 0x7c, 0xe4, 0xfd,
	0x27, 0xba, 0xb7, 0x9b, 0x22, 0x38, 0xbc, 0x2e, 0x90, 0x56, 0x16, 0x48, 0x1f, 0x0d, 0xd7, 0x05,
	0xd2, 0x63, 0xb2, 0x29, 0x50, 0x43, 0x1d, 0x17, 0x13, 0x37, 0xd4, 0x63, 0x62, 0xbe, 0x86, 0xf5,
	0x8c, 0x63, 0x4e, 0xe5, 0x80, 0xf7, 0x8e, 0x1f, 0xdf, 0xd2, 0xd4, 0x1b, 0x0b, 0x73, 0x70, 0x20,
	0xee, 0x43, 0xfe, 0x57, 0xdd, 0x87, 0x94, 0x6e, 0xa8, 0xb0, 0xf9, 0x14, 0x1a, 0x53, 0x9c, 0x4d,
	0x3b, 0x35, 0x07, 0x74, 0x9b, 0xc1, 0x43, 0x91, 0x57, 0xe8, 0x2a, 0xaf, 0x50, 0x6e, 0x28, 0xa1,
	0x79, 0x08, 0xe1, 0x24, 0xa5, 0x98, 0x53, 0x72, 0x8a, 0x79, 0xc7, 0x70, 0x40, 0xb7, 0x16, 0x36,
	0xb6, 0x64, 0xc0, 0xdd, 0xf7, 0xb0, 0x2e, 0x8f, 0x35, 0x9f, 0xc0, 0x3b, 0x71, 0x92, 0xe3, 0x79,
	0x4c, 0x5a, 0x9a, 0x65, 0x5d, 0x5c, 0x3a, 0x0f, 0xaa, 0xc9, 0xa4, 0x63, 0xa4, 0xaa, 0xa6, 0x03,
	0xf7, 0xf0, 0x84, 0xc7, 0x39, 0x6d, 0x01, 0xab, 0x7d, 0x71, 0xe9, 0xb4, 0x2a, 0xdf, 0x40, 0x72,
	0xe1, 0x98, 0xcc, 0x59, 0x46, 0x49, 0x4b, 0xff, 0xd7, 0xf1, 0x42, 0x72, 0xcb, 0xf8, 0xf8, 0xd5,
	0xd6, 0xfa, 0x86, 0x78, 0x86, 0xe0, 0xf9, 0x75, 0x69, 0x83, 0x9b, 0xd2, 0x06, 0x3f, 0x4b, 0x1b,
	0x7c, 0x5a, 0xd9, 0xda, 0xcd, 0xca, 0xd6, 0x7e, 0xac, 0x6c, 0xed, 0xcd, 0xd1, 0x72, 0x16, 0x79,
	0x78, 0xc6, 0x3d, 0x42, 0x73, 0x3f, 0x62, 0x7e, 0xc2, 0x08, 0xfd, 0x7b, 0x67, 0xdf, 0xee, 0xc9,
	0x1d, 0x3b, 0xf9, 0x1d, 0x00, 0x00, 0xff, 0xff, 0x3a, 0x14, 0x28, 0x0c, 0xd1, 0x02, 0x00, 0x00,
}

func (m *DeploymentID) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *DeploymentID) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *DeploymentID) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.DSeq != 0 {
		i = encodeVarintDeployment(dAtA, i, uint64(m.DSeq))
		i--
		dAtA[i] = 0x10
	}
	if len(m.Owner) > 0 {
		i -= len(m.Owner)
		copy(dAtA[i:], m.Owner)
		i = encodeVarintDeployment(dAtA, i, uint64(len(m.Owner)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *Deployment) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Deployment) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Deployment) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.CreatedAt != 0 {
		i = encodeVarintDeployment(dAtA, i, uint64(m.CreatedAt))
		i--
		dAtA[i] = 0x20
	}
	if len(m.Hash) > 0 {
		i -= len(m.Hash)
		copy(dAtA[i:], m.Hash)
		i = encodeVarintDeployment(dAtA, i, uint64(len(m.Hash)))
		i--
		dAtA[i] = 0x1a
	}
	if m.State != 0 {
		i = encodeVarintDeployment(dAtA, i, uint64(m.State))
		i--
		dAtA[i] = 0x10
	}
	{
		size, err := m.ID.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintDeployment(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0xa
	return len(dAtA) - i, nil
}

func encodeVarintDeployment(dAtA []byte, offset int, v uint64) int {
	offset -= sovDeployment(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *DeploymentID) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Owner)
	if l > 0 {
		n += 1 + l + sovDeployment(uint64(l))
	}
	if m.DSeq != 0 {
		n += 1 + sovDeployment(uint64(m.DSeq))
	}
	return n
}

func (m *Deployment) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = m.ID.Size()
	n += 1 + l + sovDeployment(uint64(l))
	if m.State != 0 {
		n += 1 + sovDeployment(uint64(m.State))
	}
	l = len(m.Hash)
	if l > 0 {
		n += 1 + l + sovDeployment(uint64(l))
	}
	if m.CreatedAt != 0 {
		n += 1 + sovDeployment(uint64(m.CreatedAt))
	}
	return n
}

func sovDeployment(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozDeployment(x uint64) (n int) {
	return sovDeployment(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *DeploymentID) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowDeployment
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
			return fmt.Errorf("proto: DeploymentID: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: DeploymentID: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Owner", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowDeployment
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
				return ErrInvalidLengthDeployment
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthDeployment
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Owner = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field DSeq", wireType)
			}
			m.DSeq = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowDeployment
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.DSeq |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		default:
			iNdEx = preIndex
			skippy, err := skipDeployment(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthDeployment
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
func (m *Deployment) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowDeployment
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
			return fmt.Errorf("proto: Deployment: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Deployment: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ID", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowDeployment
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
				return ErrInvalidLengthDeployment
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthDeployment
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.ID.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 2:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field State", wireType)
			}
			m.State = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowDeployment
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.State |= Deployment_State(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Hash", wireType)
			}
			var byteLen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowDeployment
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
				return ErrInvalidLengthDeployment
			}
			postIndex := iNdEx + byteLen
			if postIndex < 0 {
				return ErrInvalidLengthDeployment
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Hash = append(m.Hash[:0], dAtA[iNdEx:postIndex]...)
			if m.Hash == nil {
				m.Hash = []byte{}
			}
			iNdEx = postIndex
		case 4:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field CreatedAt", wireType)
			}
			m.CreatedAt = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowDeployment
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.CreatedAt |= int64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		default:
			iNdEx = preIndex
			skippy, err := skipDeployment(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthDeployment
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
func skipDeployment(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowDeployment
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
					return 0, ErrIntOverflowDeployment
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
					return 0, ErrIntOverflowDeployment
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
				return 0, ErrInvalidLengthDeployment
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupDeployment
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthDeployment
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthDeployment        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowDeployment          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupDeployment = fmt.Errorf("proto: unexpected end of group")
)
