/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { messageTypeRegistry } from '../../../../../typeRegistry';

export const protobufPackage = 'k8s.io.apimachinery.pkg.api.resource';

/**
 * Quantity is a fixed-point representation of a number.
 * It provides convenient marshaling/unmarshaling in JSON and YAML,
 * in addition to String() and AsInt64() accessors.
 *
 * The serialization format is:
 *
 * ```
 * <quantity>        ::= <signedNumber><suffix>
 *
 * 	(Note that <suffix> may be empty, from the "" case in <decimalSI>.)
 *
 * <digit>           ::= 0 | 1 | ... | 9
 * <digits>          ::= <digit> | <digit><digits>
 * <number>          ::= <digits> | <digits>.<digits> | <digits>. | .<digits>
 * <sign>            ::= "+" | "-"
 * <signedNumber>    ::= <number> | <sign><number>
 * <suffix>          ::= <binarySI> | <decimalExponent> | <decimalSI>
 * <binarySI>        ::= Ki | Mi | Gi | Ti | Pi | Ei
 *
 * 	(International System of units; See: http://physics.nist.gov/cuu/Units/binary.html)
 *
 * <decimalSI>       ::= m | "" | k | M | G | T | P | E
 *
 * 	(Note that 1024 = 1Ki but 1000 = 1k; I didn't choose the capitalization.)
 *
 * <decimalExponent> ::= "e" <signedNumber> | "E" <signedNumber>
 * ```
 *
 * No matter which of the three exponent forms is used, no quantity may represent
 * a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal
 * places. Numbers larger or more precise will be capped or rounded up.
 * (E.g.: 0.1m will rounded up to 1m.)
 * This may be extended in the future if we require larger or smaller quantities.
 *
 * When a Quantity is parsed from a string, it will remember the type of suffix
 * it had, and will use the same type again when it is serialized.
 *
 * Before serializing, Quantity will be put in "canonical form".
 * This means that Exponent/suffix will be adjusted up or down (with a
 * corresponding increase or decrease in Mantissa) such that:
 *
 * - No precision is lost
 * - No fractional digits will be emitted
 * - The exponent (or suffix) is as large as possible.
 *
 * The sign will be omitted unless the number is negative.
 *
 * Examples:
 *
 * - 1.5 will be serialized as "1500m"
 * - 1.5Gi will be serialized as "1536Mi"
 *
 * Note that the quantity will NEVER be internally represented by a
 * floating point number. That is the whole point of this exercise.
 *
 * Non-canonical values will still parse as long as they are well formed,
 * but will be re-emitted in their canonical form. (So always use canonical
 * form, or don't diff.)
 *
 * This format is intended to make it difficult to use these numbers without
 * writing some sort of special handling code in the hopes that that will
 * cause implementors to also use a fixed point implementation.
 *
 * +protobuf=true
 * +protobuf.embed=string
 * +protobuf.options.marshal=false
 * +protobuf.options.(gogoproto.goproto_stringer)=false
 * +k8s:deepcopy-gen=true
 * +k8s:openapi-gen=true
 */
export interface Quantity {
  $type: 'k8s.io.apimachinery.pkg.api.resource.Quantity';
  string?: string | undefined;
}

/**
 * QuantityValue makes it possible to use a Quantity as value for a command
 * line parameter.
 *
 * +protobuf=true
 * +protobuf.embed=string
 * +protobuf.options.marshal=false
 * +protobuf.options.(gogoproto.goproto_stringer)=false
 * +k8s:deepcopy-gen=true
 */
export interface QuantityValue {
  $type: 'k8s.io.apimachinery.pkg.api.resource.QuantityValue';
  string?: string | undefined;
}

function createBaseQuantity(): Quantity {
  return { $type: 'k8s.io.apimachinery.pkg.api.resource.Quantity', string: '' };
}

export const Quantity = {
  $type: 'k8s.io.apimachinery.pkg.api.resource.Quantity' as const,

  encode(
    message: Quantity,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.string !== undefined && message.string !== '') {
      writer.uint32(10).string(message.string);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Quantity {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuantity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.string = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Quantity {
    return {
      $type: Quantity.$type,
      string: isSet(object.string) ? globalThis.String(object.string) : '',
    };
  },

  toJSON(message: Quantity): unknown {
    const obj: any = {};
    if (message.string !== undefined && message.string !== '') {
      obj.string = message.string;
    }
    return obj;
  },

  create(base?: DeepPartial<Quantity>): Quantity {
    return Quantity.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Quantity>): Quantity {
    const message = createBaseQuantity();
    message.string = object.string ?? '';
    return message;
  },
};

messageTypeRegistry.set(Quantity.$type, Quantity);

function createBaseQuantityValue(): QuantityValue {
  return {
    $type: 'k8s.io.apimachinery.pkg.api.resource.QuantityValue',
    string: '',
  };
}

export const QuantityValue = {
  $type: 'k8s.io.apimachinery.pkg.api.resource.QuantityValue' as const,

  encode(
    message: QuantityValue,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.string !== undefined && message.string !== '') {
      writer.uint32(10).string(message.string);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuantityValue {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuantityValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.string = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QuantityValue {
    return {
      $type: QuantityValue.$type,
      string: isSet(object.string) ? globalThis.String(object.string) : '',
    };
  },

  toJSON(message: QuantityValue): unknown {
    const obj: any = {};
    if (message.string !== undefined && message.string !== '') {
      obj.string = message.string;
    }
    return obj;
  },

  create(base?: DeepPartial<QuantityValue>): QuantityValue {
    return QuantityValue.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QuantityValue>): QuantityValue {
    const message = createBaseQuantityValue();
    message.string = object.string ?? '';
    return message;
  },
};

messageTypeRegistry.set(QuantityValue.$type, QuantityValue);

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
    ? string | number | Long
    : T extends globalThis.Array<infer U>
      ? globalThis.Array<DeepPartial<U>>
      : T extends ReadonlyArray<infer U>
        ? ReadonlyArray<DeepPartial<U>>
        : T extends {}
          ? { [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]> }
          : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
