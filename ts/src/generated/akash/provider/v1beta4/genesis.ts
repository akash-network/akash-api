/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Provider } from "./provider";

export const protobufPackage = "akash.provider.v1beta4";

/** GenesisState defines the basic genesis state used by provider module */
export interface GenesisState {
    providers: Provider[];
}

function createBaseGenesisState(): GenesisState {
    return { providers: [] };
}

export const GenesisState = {
    encode(
        message: GenesisState,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.providers) {
            Provider.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.providers.push(
                        Provider.decode(reader, reader.uint32()),
                    );
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): GenesisState {
        return {
            providers: globalThis.Array.isArray(object?.providers)
                ? object.providers.map((e: any) => Provider.fromJSON(e))
                : [],
        };
    },

    toJSON(message: GenesisState): unknown {
        const obj: any = {};
        if (message.providers?.length) {
            obj.providers = message.providers.map((e) => Provider.toJSON(e));
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<GenesisState>, I>>(
        base?: I,
    ): GenesisState {
        return GenesisState.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(
        object: I,
    ): GenesisState {
        const message = createBaseGenesisState();
        message.providers =
            object.providers?.map((e) => Provider.fromPartial(e)) || [];
        return message;
    },
};

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
    : T extends globalThis.Array<infer U>
      ? globalThis.Array<DeepPartial<U>>
      : T extends ReadonlyArray<infer U>
        ? ReadonlyArray<DeepPartial<U>>
        : T extends {}
          ? { [K in keyof T]?: DeepPartial<T[K]> }
          : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
    ? P
    : P & { [K in keyof P]: Exact<P[K], I[K]> } & {
          [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
      };
