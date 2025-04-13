import type { Message } from "@bufbuild/protobuf";
import type { EncodeObject } from "@cosmjs/proto-signing";
import type { DeliverTxResponse, StdFee } from "@cosmjs/stargate";

import type { TxRaw as SdkTxRaw } from "../../generated/protos/cosmos/tx/v1beta1/tx_pb";

export type TxRaw = Omit<SdkTxRaw, keyof Message<SdkTxRaw["$typeName"]>>;

export interface TxClient {
  estimateFee(messages: EncodeObject[], memo?: string): Promise<StdFee>;
  sign(messages: EncodeObject[], fee: StdFee, memo: string): Promise<TxRaw>;
  broadcast(txRaw: TxRaw): Promise<DeliverTxResponse>;
  // signAndBroadcast(
  //   messages: EncodeObject[],
  //   fee: StdFee,
  //   memo?: string,
  // ): Promise<DeliverTxResponse>;
}
