import type { CallOptions as ConnectCallOptions } from "@connectrpc/connect";

export type { Transport } from "@connectrpc/connect";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface CallOptions extends ConnectCallOptions {}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface TxCallOptions {
}
