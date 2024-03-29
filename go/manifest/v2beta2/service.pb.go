// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: akash/manifest/v2beta2/service.proto

package v2beta2

import (
	fmt "fmt"
	v1beta3 "github.com/akash-network/akash-api/go/node/types/v1beta3"
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

// StorageParams
type StorageParams struct {
	Name     string `protobuf:"bytes,1,opt,name=name,proto3" json:"name" yaml:"name"`
	Mount    string `protobuf:"bytes,2,opt,name=mount,proto3" json:"mount" yaml:"mount"`
	ReadOnly bool   `protobuf:"varint,3,opt,name=read_only,json=readOnly,proto3" json:"readOnly" yaml:"readOnly"`
}

func (m *StorageParams) Reset()      { *m = StorageParams{} }
func (*StorageParams) ProtoMessage() {}
func (*StorageParams) Descriptor() ([]byte, []int) {
	return fileDescriptor_de124a4cb11edaa1, []int{0}
}
func (m *StorageParams) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *StorageParams) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_StorageParams.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *StorageParams) XXX_Merge(src proto.Message) {
	xxx_messageInfo_StorageParams.Merge(m, src)
}
func (m *StorageParams) XXX_Size() int {
	return m.Size()
}
func (m *StorageParams) XXX_DiscardUnknown() {
	xxx_messageInfo_StorageParams.DiscardUnknown(m)
}

var xxx_messageInfo_StorageParams proto.InternalMessageInfo

func (m *StorageParams) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *StorageParams) GetMount() string {
	if m != nil {
		return m.Mount
	}
	return ""
}

func (m *StorageParams) GetReadOnly() bool {
	if m != nil {
		return m.ReadOnly
	}
	return false
}

// ServiceParams
type ServiceParams struct {
	Storage []StorageParams `protobuf:"bytes,1,rep,name=storage,proto3" json:"storage" yaml:"storage"`
}

func (m *ServiceParams) Reset()      { *m = ServiceParams{} }
func (*ServiceParams) ProtoMessage() {}
func (*ServiceParams) Descriptor() ([]byte, []int) {
	return fileDescriptor_de124a4cb11edaa1, []int{1}
}
func (m *ServiceParams) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *ServiceParams) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_ServiceParams.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *ServiceParams) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ServiceParams.Merge(m, src)
}
func (m *ServiceParams) XXX_Size() int {
	return m.Size()
}
func (m *ServiceParams) XXX_DiscardUnknown() {
	xxx_messageInfo_ServiceParams.DiscardUnknown(m)
}

var xxx_messageInfo_ServiceParams proto.InternalMessageInfo

func (m *ServiceParams) GetStorage() []StorageParams {
	if m != nil {
		return m.Storage
	}
	return nil
}

// Service stores name, image, args, env, unit, count and expose list of service
type Service struct {
	Name      string            `protobuf:"bytes,1,opt,name=name,proto3" json:"name" yaml:"name"`
	Image     string            `protobuf:"bytes,2,opt,name=image,proto3" json:"image" yaml:"image"`
	Command   []string          `protobuf:"bytes,3,rep,name=command,proto3" json:"command" yaml:"command"`
	Args      []string          `protobuf:"bytes,4,rep,name=args,proto3" json:"args" yaml:"args"`
	Env       []string          `protobuf:"bytes,5,rep,name=env,proto3" json:"env" yaml:"env"`
	Resources v1beta3.Resources `protobuf:"bytes,6,opt,name=resources,proto3" json:"resources" yaml:"resources"`
	Count     uint32            `protobuf:"varint,7,opt,name=count,proto3" json:"count" yaml:"count"`
	Expose    ServiceExposes    `protobuf:"bytes,8,rep,name=expose,proto3,castrepeated=ServiceExposes" json:"expose" yaml:"expose"`
	Params    *ServiceParams    `protobuf:"bytes,9,opt,name=params,proto3" json:"params" yaml:"params"`
}

func (m *Service) Reset()      { *m = Service{} }
func (*Service) ProtoMessage() {}
func (*Service) Descriptor() ([]byte, []int) {
	return fileDescriptor_de124a4cb11edaa1, []int{2}
}
func (m *Service) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Service) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Service.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Service) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Service.Merge(m, src)
}
func (m *Service) XXX_Size() int {
	return m.Size()
}
func (m *Service) XXX_DiscardUnknown() {
	xxx_messageInfo_Service.DiscardUnknown(m)
}

var xxx_messageInfo_Service proto.InternalMessageInfo

func (m *Service) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *Service) GetImage() string {
	if m != nil {
		return m.Image
	}
	return ""
}

func (m *Service) GetCommand() []string {
	if m != nil {
		return m.Command
	}
	return nil
}

func (m *Service) GetArgs() []string {
	if m != nil {
		return m.Args
	}
	return nil
}

func (m *Service) GetEnv() []string {
	if m != nil {
		return m.Env
	}
	return nil
}

func (m *Service) GetResources() v1beta3.Resources {
	if m != nil {
		return m.Resources
	}
	return v1beta3.Resources{}
}

func (m *Service) GetCount() uint32 {
	if m != nil {
		return m.Count
	}
	return 0
}

func (m *Service) GetExpose() ServiceExposes {
	if m != nil {
		return m.Expose
	}
	return nil
}

func (m *Service) GetParams() *ServiceParams {
	if m != nil {
		return m.Params
	}
	return nil
}

func init() {
	proto.RegisterType((*StorageParams)(nil), "akash.manifest.v2beta2.StorageParams")
	proto.RegisterType((*ServiceParams)(nil), "akash.manifest.v2beta2.ServiceParams")
	proto.RegisterType((*Service)(nil), "akash.manifest.v2beta2.Service")
}

func init() {
	proto.RegisterFile("akash/manifest/v2beta2/service.proto", fileDescriptor_de124a4cb11edaa1)
}

var fileDescriptor_de124a4cb11edaa1 = []byte{
	// 588 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x94, 0x54, 0x4f, 0x6f, 0xd3, 0x30,
	0x1c, 0xad, 0xe9, 0xd6, 0xae, 0x1e, 0x1d, 0x28, 0x42, 0x90, 0x4d, 0x5a, 0x1c, 0x2c, 0x26, 0x45,
	0x4c, 0x24, 0x5a, 0x27, 0x81, 0x84, 0x38, 0x45, 0xe2, 0x0c, 0xf2, 0x2e, 0x88, 0x03, 0xc8, 0xc9,
	0x4c, 0x56, 0x6d, 0x89, 0xab, 0x38, 0x2b, 0xec, 0xc6, 0x47, 0xe0, 0x73, 0xc0, 0x17, 0xe9, 0x71,
	0xc7, 0x9d, 0x0c, 0x6b, 0x6f, 0x3d, 0xe6, 0x13, 0x20, 0xff, 0x09, 0xa1, 0x02, 0x31, 0x71, 0x6a,
	0x7f, 0xef, 0xf7, 0x7e, 0xfe, 0x3d, 0x3f, 0xbf, 0x16, 0x3e, 0xa2, 0xa7, 0x54, 0x9c, 0x44, 0x39,
	0x2d, 0xc6, 0x1f, 0x98, 0xa8, 0xa2, 0xe9, 0x28, 0x61, 0x15, 0x1d, 0x45, 0x82, 0x95, 0xd3, 0x71,
	0xca, 0xc2, 0x49, 0xc9, 0x2b, 0xee, 0xdc, 0xd7, 0xac, 0xb0, 0x61, 0x85, 0x96, 0xb5, 0x73, 0x2f,
	0xe3, 0x19, 0xd7, 0x94, 0x48, 0x7d, 0x33, 0xec, 0x9d, 0xc7, 0xff, 0x3e, 0x93, 0x7d, 0x9a, 0x70,
	0x61, 0x4f, 0xde, 0xc1, 0x86, 0x9b, 0x50, 0xc1, 0xa2, 0xe9, 0x81, 0xe2, 0x1d, 0x46, 0x25, 0x13,
	0xfc, 0xbc, 0x4c, 0x99, 0x30, 0x1c, 0xfc, 0x0d, 0xc0, 0xe1, 0x51, 0xc5, 0x4b, 0x9a, 0xb1, 0xd7,
	0xb4, 0xa4, 0xb9, 0x70, 0xf6, 0xe1, 0x5a, 0x41, 0x73, 0xe6, 0x02, 0x1f, 0x04, 0x83, 0xf8, 0xc1,
	0x52, 0x22, 0x5d, 0xd7, 0x12, 0x6d, 0x5e, 0xd0, 0xfc, 0xec, 0x39, 0x56, 0x15, 0x26, 0x1a, 0x74,
	0x22, 0xb8, 0x9e, 0xf3, 0xf3, 0xa2, 0x72, 0x6f, 0x69, 0xf6, 0xf6, 0x52, 0x22, 0x03, 0xd4, 0x12,
	0xdd, 0x36, 0x74, 0x5d, 0x62, 0x62, 0x60, 0xe7, 0x05, 0x1c, 0x94, 0x8c, 0x1e, 0xbf, 0xe7, 0xc5,
	0xd9, 0x85, 0xdb, 0xf5, 0x41, 0xb0, 0x11, 0xa3, 0xa5, 0x44, 0x1b, 0x0a, 0x7c, 0x55, 0x9c, 0x5d,
	0xd4, 0x12, 0xdd, 0x31, 0x73, 0x0d, 0x82, 0xc9, 0xaf, 0x26, 0x16, 0x70, 0x78, 0x64, 0x2e, 0x6a,
	0xc5, 0x26, 0xb0, 0x2f, 0x8c, 0x7a, 0x17, 0xf8, 0xdd, 0x60, 0x73, 0xb4, 0x17, 0xfe, 0xdd, 0xce,
	0x70, 0xe5, 0x92, 0xf1, 0xc3, 0x99, 0x44, 0x9d, 0xa5, 0x44, 0xcd, 0x74, 0x2d, 0xd1, 0x96, 0x59,
	0x6b, 0x01, 0x4c, 0x9a, 0x16, 0xbe, 0x5e, 0x83, 0x7d, 0xbb, 0xf5, 0xbf, 0xcd, 0x19, 0xe7, 0x4a,
	0xda, 0x6f, 0xe6, 0x68, 0xa0, 0x35, 0x47, 0x97, 0x98, 0x18, 0xd8, 0x79, 0x06, 0xfb, 0x29, 0xcf,
	0x73, 0x5a, 0x1c, 0xbb, 0x5d, 0xbf, 0x1b, 0x0c, 0xe2, 0x5d, 0x25, 0xd1, 0x42, 0xad, 0x44, 0x0b,
	0x60, 0xd2, 0xb4, 0x94, 0x2c, 0x5a, 0x66, 0xc2, 0x5d, 0xd3, 0x53, 0x5a, 0x96, 0xaa, 0x5b, 0x59,
	0xaa, 0xc2, 0x44, 0x83, 0xce, 0x3e, 0xec, 0xb2, 0x62, 0xea, 0xae, 0x6b, 0xee, 0xf6, 0x4c, 0x22,
	0xb0, 0x94, 0x48, 0x41, 0xb5, 0x44, 0xd0, 0xd0, 0x59, 0x31, 0xc5, 0x44, 0x41, 0x4e, 0xa2, 0xde,
	0xcb, 0x46, 0xc6, 0xed, 0xf9, 0x20, 0xd8, 0x1c, 0xed, 0x5a, 0x8b, 0x55, 0xae, 0x42, 0x9b, 0xab,
	0x90, 0x34, 0xa4, 0x78, 0xcf, 0x5a, 0xdb, 0xce, 0xd5, 0x12, 0xdd, 0x6d, 0xde, 0xd4, 0x42, 0x98,
	0xb4, 0x6d, 0xe5, 0x53, 0xaa, 0x43, 0xd4, 0xf7, 0x41, 0x30, 0x34, 0x3e, 0xa5, 0xab, 0x21, 0x4a,
	0x6d, 0x88, 0xf4, 0xa7, 0x33, 0x81, 0x3d, 0x13, 0x74, 0x77, 0xe3, 0x86, 0x47, 0x37, 0xcf, 0xf6,
	0x52, 0x93, 0xe3, 0x03, 0xab, 0xcc, 0x0e, 0xd7, 0x12, 0x0d, 0xed, 0x75, 0x75, 0x8d, 0xbf, 0x7e,
	0x47, 0x5b, 0x2b, 0x13, 0x82, 0x58, 0xaa, 0xf3, 0x0e, 0xf6, 0x26, 0x3a, 0x39, 0xee, 0x40, 0x7b,
	0x70, 0xd3, 0x46, 0x1b, 0x33, 0x64, 0xdd, 0xb5, 0xc3, 0xed, 0x46, 0x53, 0x63, 0x62, 0x1b, 0xf1,
	0x9b, 0xab, 0x6b, 0xaf, 0xf3, 0x79, 0xee, 0x81, 0xd9, 0xdc, 0x03, 0x97, 0x73, 0x0f, 0xfc, 0x98,
	0x7b, 0xe0, 0xcb, 0xc2, 0xeb, 0x5c, 0x2e, 0xbc, 0xce, 0xd5, 0xc2, 0xeb, 0xbc, 0x7d, 0x9a, 0x8d,
	0xab, 0x93, 0xf3, 0x24, 0x4c, 0x79, 0x1e, 0xe9, 0xdd, 0x4f, 0x0a, 0x56, 0x7d, 0xe4, 0xe5, 0xa9,
	0xad, 0xe8, 0x64, 0x1c, 0x65, 0xfc, 0x8f, 0x3f, 0x86, 0xa4, 0xa7, 0x7f, 0xe7, 0x87, 0x3f, 0x03,
	0x00, 0x00, 0xff, 0xff, 0xad, 0x41, 0x15, 0xa8, 0x8d, 0x04, 0x00, 0x00,
}

func (m *StorageParams) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *StorageParams) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *StorageParams) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.ReadOnly {
		i--
		if m.ReadOnly {
			dAtA[i] = 1
		} else {
			dAtA[i] = 0
		}
		i--
		dAtA[i] = 0x18
	}
	if len(m.Mount) > 0 {
		i -= len(m.Mount)
		copy(dAtA[i:], m.Mount)
		i = encodeVarintService(dAtA, i, uint64(len(m.Mount)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.Name) > 0 {
		i -= len(m.Name)
		copy(dAtA[i:], m.Name)
		i = encodeVarintService(dAtA, i, uint64(len(m.Name)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *ServiceParams) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *ServiceParams) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *ServiceParams) MarshalToSizedBuffer(dAtA []byte) (int, error) {
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
				i = encodeVarintService(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0xa
		}
	}
	return len(dAtA) - i, nil
}

func (m *Service) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Service) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Service) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.Params != nil {
		{
			size, err := m.Params.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintService(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x4a
	}
	if len(m.Expose) > 0 {
		for iNdEx := len(m.Expose) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.Expose[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintService(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x42
		}
	}
	if m.Count != 0 {
		i = encodeVarintService(dAtA, i, uint64(m.Count))
		i--
		dAtA[i] = 0x38
	}
	{
		size, err := m.Resources.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintService(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0x32
	if len(m.Env) > 0 {
		for iNdEx := len(m.Env) - 1; iNdEx >= 0; iNdEx-- {
			i -= len(m.Env[iNdEx])
			copy(dAtA[i:], m.Env[iNdEx])
			i = encodeVarintService(dAtA, i, uint64(len(m.Env[iNdEx])))
			i--
			dAtA[i] = 0x2a
		}
	}
	if len(m.Args) > 0 {
		for iNdEx := len(m.Args) - 1; iNdEx >= 0; iNdEx-- {
			i -= len(m.Args[iNdEx])
			copy(dAtA[i:], m.Args[iNdEx])
			i = encodeVarintService(dAtA, i, uint64(len(m.Args[iNdEx])))
			i--
			dAtA[i] = 0x22
		}
	}
	if len(m.Command) > 0 {
		for iNdEx := len(m.Command) - 1; iNdEx >= 0; iNdEx-- {
			i -= len(m.Command[iNdEx])
			copy(dAtA[i:], m.Command[iNdEx])
			i = encodeVarintService(dAtA, i, uint64(len(m.Command[iNdEx])))
			i--
			dAtA[i] = 0x1a
		}
	}
	if len(m.Image) > 0 {
		i -= len(m.Image)
		copy(dAtA[i:], m.Image)
		i = encodeVarintService(dAtA, i, uint64(len(m.Image)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.Name) > 0 {
		i -= len(m.Name)
		copy(dAtA[i:], m.Name)
		i = encodeVarintService(dAtA, i, uint64(len(m.Name)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintService(dAtA []byte, offset int, v uint64) int {
	offset -= sovService(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *StorageParams) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Name)
	if l > 0 {
		n += 1 + l + sovService(uint64(l))
	}
	l = len(m.Mount)
	if l > 0 {
		n += 1 + l + sovService(uint64(l))
	}
	if m.ReadOnly {
		n += 2
	}
	return n
}

func (m *ServiceParams) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if len(m.Storage) > 0 {
		for _, e := range m.Storage {
			l = e.Size()
			n += 1 + l + sovService(uint64(l))
		}
	}
	return n
}

func (m *Service) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Name)
	if l > 0 {
		n += 1 + l + sovService(uint64(l))
	}
	l = len(m.Image)
	if l > 0 {
		n += 1 + l + sovService(uint64(l))
	}
	if len(m.Command) > 0 {
		for _, s := range m.Command {
			l = len(s)
			n += 1 + l + sovService(uint64(l))
		}
	}
	if len(m.Args) > 0 {
		for _, s := range m.Args {
			l = len(s)
			n += 1 + l + sovService(uint64(l))
		}
	}
	if len(m.Env) > 0 {
		for _, s := range m.Env {
			l = len(s)
			n += 1 + l + sovService(uint64(l))
		}
	}
	l = m.Resources.Size()
	n += 1 + l + sovService(uint64(l))
	if m.Count != 0 {
		n += 1 + sovService(uint64(m.Count))
	}
	if len(m.Expose) > 0 {
		for _, e := range m.Expose {
			l = e.Size()
			n += 1 + l + sovService(uint64(l))
		}
	}
	if m.Params != nil {
		l = m.Params.Size()
		n += 1 + l + sovService(uint64(l))
	}
	return n
}

func sovService(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozService(x uint64) (n int) {
	return sovService(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (this *StorageParams) String() string {
	if this == nil {
		return "nil"
	}
	s := strings.Join([]string{`&StorageParams{`,
		`Name:` + fmt.Sprintf("%v", this.Name) + `,`,
		`Mount:` + fmt.Sprintf("%v", this.Mount) + `,`,
		`ReadOnly:` + fmt.Sprintf("%v", this.ReadOnly) + `,`,
		`}`,
	}, "")
	return s
}
func (this *ServiceParams) String() string {
	if this == nil {
		return "nil"
	}
	repeatedStringForStorage := "[]StorageParams{"
	for _, f := range this.Storage {
		repeatedStringForStorage += strings.Replace(strings.Replace(f.String(), "StorageParams", "StorageParams", 1), `&`, ``, 1) + ","
	}
	repeatedStringForStorage += "}"
	s := strings.Join([]string{`&ServiceParams{`,
		`Storage:` + repeatedStringForStorage + `,`,
		`}`,
	}, "")
	return s
}
func (this *Service) String() string {
	if this == nil {
		return "nil"
	}
	repeatedStringForExpose := "[]ServiceExpose{"
	for _, f := range this.Expose {
		repeatedStringForExpose += fmt.Sprintf("%v", f) + ","
	}
	repeatedStringForExpose += "}"
	s := strings.Join([]string{`&Service{`,
		`Name:` + fmt.Sprintf("%v", this.Name) + `,`,
		`Image:` + fmt.Sprintf("%v", this.Image) + `,`,
		`Command:` + fmt.Sprintf("%v", this.Command) + `,`,
		`Args:` + fmt.Sprintf("%v", this.Args) + `,`,
		`Env:` + fmt.Sprintf("%v", this.Env) + `,`,
		`Resources:` + strings.Replace(strings.Replace(fmt.Sprintf("%v", this.Resources), "Resources", "v1beta3.Resources", 1), `&`, ``, 1) + `,`,
		`Count:` + fmt.Sprintf("%v", this.Count) + `,`,
		`Expose:` + repeatedStringForExpose + `,`,
		`Params:` + strings.Replace(this.Params.String(), "ServiceParams", "ServiceParams", 1) + `,`,
		`}`,
	}, "")
	return s
}
func valueToStringService(v interface{}) string {
	rv := reflect.ValueOf(v)
	if rv.IsNil() {
		return "nil"
	}
	pv := reflect.Indirect(rv).Interface()
	return fmt.Sprintf("*%v", pv)
}
func (m *StorageParams) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowService
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
			return fmt.Errorf("proto: StorageParams: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: StorageParams: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Name", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowService
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
				return ErrInvalidLengthService
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthService
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Name = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Mount", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowService
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
				return ErrInvalidLengthService
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthService
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Mount = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field ReadOnly", wireType)
			}
			var v int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowService
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
			m.ReadOnly = bool(v != 0)
		default:
			iNdEx = preIndex
			skippy, err := skipService(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthService
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
func (m *ServiceParams) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowService
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
			return fmt.Errorf("proto: ServiceParams: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: ServiceParams: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Storage", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowService
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
				return ErrInvalidLengthService
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthService
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Storage = append(m.Storage, StorageParams{})
			if err := m.Storage[len(m.Storage)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipService(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthService
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
func (m *Service) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowService
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
			return fmt.Errorf("proto: Service: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Service: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Name", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowService
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
				return ErrInvalidLengthService
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthService
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Name = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Image", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowService
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
				return ErrInvalidLengthService
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthService
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Image = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Command", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowService
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
				return ErrInvalidLengthService
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthService
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Command = append(m.Command, string(dAtA[iNdEx:postIndex]))
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Args", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowService
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
				return ErrInvalidLengthService
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthService
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Args = append(m.Args, string(dAtA[iNdEx:postIndex]))
			iNdEx = postIndex
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Env", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowService
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
				return ErrInvalidLengthService
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthService
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Env = append(m.Env, string(dAtA[iNdEx:postIndex]))
			iNdEx = postIndex
		case 6:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Resources", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowService
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
				return ErrInvalidLengthService
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthService
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.Resources.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 7:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Count", wireType)
			}
			m.Count = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowService
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Count |= uint32(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 8:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Expose", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowService
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
				return ErrInvalidLengthService
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthService
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Expose = append(m.Expose, ServiceExpose{})
			if err := m.Expose[len(m.Expose)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 9:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Params", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowService
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
				return ErrInvalidLengthService
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthService
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.Params == nil {
				m.Params = &ServiceParams{}
			}
			if err := m.Params.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipService(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthService
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
func skipService(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowService
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
					return 0, ErrIntOverflowService
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
					return 0, ErrIntOverflowService
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
				return 0, ErrInvalidLengthService
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupService
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthService
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthService        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowService          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupService = fmt.Errorf("proto: unexpected end of group")
)
