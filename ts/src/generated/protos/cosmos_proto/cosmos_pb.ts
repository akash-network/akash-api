// @generated by protoc-gen-es v2.2.3 with parameter "target=ts,json_types=true,import_extension=ts"
// @generated from file cosmos_proto/cosmos.proto (package cosmos_proto, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenExtension, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, extDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { FieldOptions, FileOptions, MessageOptions, MethodOptions } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_descriptor } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file cosmos_proto/cosmos.proto.
 */
export const file_cosmos_proto_cosmos: GenFile = /*@__PURE__*/
  fileDesc("Chljb3Ntb3NfcHJvdG8vY29zbW9zLnByb3RvEgxjb3Ntb3NfcHJvdG8iOAoTSW50ZXJmYWNlRGVzY3JpcHRvchIMCgRuYW1lGAEgASgJEhMKC2Rlc2NyaXB0aW9uGAIgASgJImMKEFNjYWxhckRlc2NyaXB0b3ISDAoEbmFtZRgBIAEoCRITCgtkZXNjcmlwdGlvbhgCIAEoCRIsCgpmaWVsZF90eXBlGAMgAygOMhguY29zbW9zX3Byb3RvLlNjYWxhclR5cGUqWAoKU2NhbGFyVHlwZRIbChdTQ0FMQVJfVFlQRV9VTlNQRUNJRklFRBAAEhYKElNDQUxBUl9UWVBFX1NUUklORxABEhUKEVNDQUxBUl9UWVBFX0JZVEVTEAI6SAoPbWV0aG9kX2FkZGVkX2luEh4uZ29vZ2xlLnByb3RvYnVmLk1ldGhvZE9wdGlvbnMYydYFIAEoCVINbWV0aG9kQWRkZWRJbjpUChRpbXBsZW1lbnRzX2ludGVyZmFjZRIfLmdvb2dsZS5wcm90b2J1Zi5NZXNzYWdlT3B0aW9ucxjJ1gUgAygJUhNpbXBsZW1lbnRzSW50ZXJmYWNlOksKEG1lc3NhZ2VfYWRkZWRfaW4SHy5nb29nbGUucHJvdG9idWYuTWVzc2FnZU9wdGlvbnMYytYFIAEoCVIObWVzc2FnZUFkZGVkSW46TAoRYWNjZXB0c19pbnRlcmZhY2USHS5nb29nbGUucHJvdG9idWYuRmllbGRPcHRpb25zGMnWBSABKAlSEGFjY2VwdHNJbnRlcmZhY2U6NwoGc2NhbGFyEh0uZ29vZ2xlLnByb3RvYnVmLkZpZWxkT3B0aW9ucxjK1gUgASgJUgZzY2FsYXI6RQoOZmllbGRfYWRkZWRfaW4SHS5nb29nbGUucHJvdG9idWYuRmllbGRPcHRpb25zGMvWBSABKAlSDGZpZWxkQWRkZWRJbjpuChFkZWNsYXJlX2ludGVyZmFjZRIcLmdvb2dsZS5wcm90b2J1Zi5GaWxlT3B0aW9ucxi9szAgAygLMiEuY29zbW9zX3Byb3RvLkludGVyZmFjZURlc2NyaXB0b3JSEGRlY2xhcmVJbnRlcmZhY2U6ZQoOZGVjbGFyZV9zY2FsYXISHC5nb29nbGUucHJvdG9idWYuRmlsZU9wdGlvbnMYvrMwIAMoCzIeLmNvc21vc19wcm90by5TY2FsYXJEZXNjcmlwdG9yUg1kZWNsYXJlU2NhbGFyOkIKDWZpbGVfYWRkZWRfaW4SHC5nb29nbGUucHJvdG9idWYuRmlsZU9wdGlvbnMYv7MwIAEoCVILZmlsZUFkZGVkSW5CLVorZ2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXByb3RvO2Nvc21vc19wcm90b2IGcHJvdG8z", [file_google_protobuf_descriptor]);

/**
 * InterfaceDescriptor describes an interface type to be used with
 * accepts_interface and implements_interface and declared by declare_interface.
 *
 * @generated from message cosmos_proto.InterfaceDescriptor
 */
export type InterfaceDescriptor = Message<"cosmos_proto.InterfaceDescriptor"> & {
  /**
   * name is the name of the interface. It should be a short-name (without
   * a period) such that the fully qualified name of the interface will be
   * package.name, ex. for the package a.b and interface named C, the
   * fully-qualified name will be a.b.C.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * description is a human-readable description of the interface and its
   * purpose.
   *
   * @generated from field: string description = 2;
   */
  description: string;
};

/**
 * InterfaceDescriptor describes an interface type to be used with
 * accepts_interface and implements_interface and declared by declare_interface.
 *
 * @generated from message cosmos_proto.InterfaceDescriptor
 */
export type InterfaceDescriptorJson = {
  /**
   * name is the name of the interface. It should be a short-name (without
   * a period) such that the fully qualified name of the interface will be
   * package.name, ex. for the package a.b and interface named C, the
   * fully-qualified name will be a.b.C.
   *
   * @generated from field: string name = 1;
   */
  name?: string;

  /**
   * description is a human-readable description of the interface and its
   * purpose.
   *
   * @generated from field: string description = 2;
   */
  description?: string;
};

/**
 * Describes the message cosmos_proto.InterfaceDescriptor.
 * Use `create(InterfaceDescriptorSchema)` to create a new message.
 */
export const InterfaceDescriptorSchema: GenMessage<InterfaceDescriptor, InterfaceDescriptorJson> = /*@__PURE__*/
  messageDesc(file_cosmos_proto_cosmos, 0);

/**
 * ScalarDescriptor describes an scalar type to be used with
 * the scalar field option and declared by declare_scalar.
 * Scalars extend simple protobuf built-in types with additional
 * syntax and semantics, for instance to represent big integers.
 * Scalars should ideally define an encoding such that there is only one
 * valid syntactical representation for a given semantic meaning,
 * i.e. the encoding should be deterministic.
 *
 * @generated from message cosmos_proto.ScalarDescriptor
 */
export type ScalarDescriptor = Message<"cosmos_proto.ScalarDescriptor"> & {
  /**
   * name is the name of the scalar. It should be a short-name (without
   * a period) such that the fully qualified name of the scalar will be
   * package.name, ex. for the package a.b and scalar named C, the
   * fully-qualified name will be a.b.C.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * description is a human-readable description of the scalar and its
   * encoding format. For instance a big integer or decimal scalar should
   * specify precisely the expected encoding format.
   *
   * @generated from field: string description = 2;
   */
  description: string;

  /**
   * field_type is the type of field with which this scalar can be used.
   * Scalars can be used with one and only one type of field so that
   * encoding standards and simple and clear. Currently only string and
   * bytes fields are supported for scalars.
   *
   * @generated from field: repeated cosmos_proto.ScalarType field_type = 3;
   */
  fieldType: ScalarType[];
};

/**
 * ScalarDescriptor describes an scalar type to be used with
 * the scalar field option and declared by declare_scalar.
 * Scalars extend simple protobuf built-in types with additional
 * syntax and semantics, for instance to represent big integers.
 * Scalars should ideally define an encoding such that there is only one
 * valid syntactical representation for a given semantic meaning,
 * i.e. the encoding should be deterministic.
 *
 * @generated from message cosmos_proto.ScalarDescriptor
 */
export type ScalarDescriptorJson = {
  /**
   * name is the name of the scalar. It should be a short-name (without
   * a period) such that the fully qualified name of the scalar will be
   * package.name, ex. for the package a.b and scalar named C, the
   * fully-qualified name will be a.b.C.
   *
   * @generated from field: string name = 1;
   */
  name?: string;

  /**
   * description is a human-readable description of the scalar and its
   * encoding format. For instance a big integer or decimal scalar should
   * specify precisely the expected encoding format.
   *
   * @generated from field: string description = 2;
   */
  description?: string;

  /**
   * field_type is the type of field with which this scalar can be used.
   * Scalars can be used with one and only one type of field so that
   * encoding standards and simple and clear. Currently only string and
   * bytes fields are supported for scalars.
   *
   * @generated from field: repeated cosmos_proto.ScalarType field_type = 3;
   */
  fieldType?: ScalarTypeJson[];
};

/**
 * Describes the message cosmos_proto.ScalarDescriptor.
 * Use `create(ScalarDescriptorSchema)` to create a new message.
 */
export const ScalarDescriptorSchema: GenMessage<ScalarDescriptor, ScalarDescriptorJson> = /*@__PURE__*/
  messageDesc(file_cosmos_proto_cosmos, 1);

/**
 * @generated from enum cosmos_proto.ScalarType
 */
export enum ScalarType {
  /**
   * @generated from enum value: SCALAR_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: SCALAR_TYPE_STRING = 1;
   */
  STRING = 1,

  /**
   * @generated from enum value: SCALAR_TYPE_BYTES = 2;
   */
  BYTES = 2,
}

/**
 * @generated from enum cosmos_proto.ScalarType
 */
export type ScalarTypeJson = "SCALAR_TYPE_UNSPECIFIED" | "SCALAR_TYPE_STRING" | "SCALAR_TYPE_BYTES";

/**
 * Describes the enum cosmos_proto.ScalarType.
 */
export const ScalarTypeSchema: GenEnum<ScalarType, ScalarTypeJson> = /*@__PURE__*/
  enumDesc(file_cosmos_proto_cosmos, 0);

/**
 * method_added_in is used to indicate from which version the method was added.
 *
 * @generated from extension: string method_added_in = 93001;
 */
export const method_added_in: GenExtension<MethodOptions, string> = /*@__PURE__*/
  extDesc(file_cosmos_proto_cosmos, 0);

/**
 * implements_interface is used to indicate the type name of the interface
 * that a message implements so that it can be used in google.protobuf.Any
 * fields that accept that interface. A message can implement multiple
 * interfaces. Interfaces should be declared using a declare_interface
 * file option.
 *
 * @generated from extension: repeated string implements_interface = 93001;
 */
export const implements_interface: GenExtension<MessageOptions, string[]> = /*@__PURE__*/
  extDesc(file_cosmos_proto_cosmos, 1);

/**
 * message_added_in is used to indicate from which version the message was added.
 *
 * @generated from extension: string message_added_in = 93002;
 */
export const message_added_in: GenExtension<MessageOptions, string> = /*@__PURE__*/
  extDesc(file_cosmos_proto_cosmos, 2);

/**
 * accepts_interface is used to annotate that a google.protobuf.Any
 * field accepts messages that implement the specified interface.
 * Interfaces should be declared using a declare_interface file option.
 *
 * @generated from extension: string accepts_interface = 93001;
 */
export const accepts_interface: GenExtension<FieldOptions, string> = /*@__PURE__*/
  extDesc(file_cosmos_proto_cosmos, 3);

/**
 * scalar is used to indicate that this field follows the formatting defined
 * by the named scalar which should be declared with declare_scalar. Code
 * generators may choose to use this information to map this field to a
 * language-specific type representing the scalar.
 *
 * @generated from extension: string scalar = 93002;
 */
export const scalar: GenExtension<FieldOptions, string> = /*@__PURE__*/
  extDesc(file_cosmos_proto_cosmos, 4);

/**
 * field_added_in is used to indicate from which version the field was added.
 *
 * @generated from extension: string field_added_in = 93003;
 */
export const field_added_in: GenExtension<FieldOptions, string> = /*@__PURE__*/
  extDesc(file_cosmos_proto_cosmos, 5);

/**
 * declare_interface declares an interface type to be used with
 * accepts_interface and implements_interface. Interface names are
 * expected to follow the following convention such that their declaration
 * can be discovered by tools: for a given interface type a.b.C, it is
 * expected that the declaration will be found in a protobuf file named
 * a/b/interfaces.proto in the file descriptor set.
 *
 * @generated from extension: repeated cosmos_proto.InterfaceDescriptor declare_interface = 793021;
 */
export const declare_interface: GenExtension<FileOptions, InterfaceDescriptor[]> = /*@__PURE__*/
  extDesc(file_cosmos_proto_cosmos, 6);

/**
 * declare_scalar declares a scalar type to be used with
 * the scalar field option. Scalar names are
 * expected to follow the following convention such that their declaration
 * can be discovered by tools: for a given scalar type a.b.C, it is
 * expected that the declaration will be found in a protobuf file named
 * a/b/scalars.proto in the file descriptor set.
 *
 * @generated from extension: repeated cosmos_proto.ScalarDescriptor declare_scalar = 793022;
 */
export const declare_scalar: GenExtension<FileOptions, ScalarDescriptor[]> = /*@__PURE__*/
  extDesc(file_cosmos_proto_cosmos, 7);

/**
 * file_added_in is used to indicate from which the version the file was added.
 *
 * @generated from extension: string file_added_in = 793023;
 */
export const file_added_in: GenExtension<FileOptions, string> = /*@__PURE__*/
  extDesc(file_cosmos_proto_cosmos, 8);

