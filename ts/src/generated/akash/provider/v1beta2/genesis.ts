/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../typeRegistry";
import { Provider } from "./provider";

/** GenesisState defines the basic genesis state used by provider module */
export interface GenesisState {
    $type: "akash.provider.v1beta2.GenesisState";
    providers: Provider[];
}

function createBaseGenesisState(): GenesisState {
    return { $type: "akash.provider.v1beta2.GenesisState", providers: [] };
}

export const GenesisState = {
    $type: "akash.provider.v1beta2.GenesisState" as const,

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
            $type: GenesisState.$type,
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

    create(base?: DeepPartial<GenesisState>): GenesisState {
        return GenesisState.fromPartial(base ?? {});
    },
    fromPartial(object: DeepPartial<GenesisState>): GenesisState {
        const message = createBaseGenesisState();
        message.providers =
            object.providers?.map((e) => Provider.fromPartial(e)) || [];
        return message;
    },
};

messageTypeRegistry.set(GenesisState.$type, GenesisState);

type Builtin =
    | Date
    | Function
    | Uint8Array
    | string
    | number
    | boolean
    | undefined;

type DeepPartial<T> = T extends Builtin
    ? T
    : T extends Long
      ? string | number | Long
      : T extends globalThis.Array<infer U>
        ? globalThis.Array<DeepPartial<U>>
        : T extends ReadonlyArray<infer U>
          ? ReadonlyArray<DeepPartial<U>>
          : T extends {}
            ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
            : Partial<T>;

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
