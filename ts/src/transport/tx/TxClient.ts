import type { EncodeObject, GeneratedType } from "@cosmjs/proto-signing";
import type { DeliverTxResponse, StdFee } from "@cosmjs/stargate";

import type { TxRaw as GenTxRaw } from "../../generated/protos/cosmos/tx/v1beta1/tx_pb.ts";

export type TxRaw = Omit<GenTxRaw, "$typeName" | "$unknown">;
export { DeliverTxResponse, StdFee, EncodeObject, GeneratedType };

export interface TxClient {
  estimateFee(messages: EncodeObject[], memo?: string): Promise<StdFee>;
  sign(messages: EncodeObject[], fee: StdFee, memo: string): Promise<TxRaw>;
  broadcast(signedMessages: TxRaw): Promise<DeliverTxResponse>;
}
