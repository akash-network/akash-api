import type { DescMessage, DescMethodUnary, MessageShape } from "@bufbuild/protobuf";
import type { UnaryResponse } from "@connectrpc/connect";
import type { GeneratedType } from "@cosmjs/proto-signing";

import type { Transport, TxCallOptions } from "../types.ts";
import type { TxClient } from "./TxClient.ts";
import { TxError } from "./TxError.ts";

export function createTxTransport(transportOptions: TransactionTransportOptions): Transport<TxCallOptions> {
  return {
    async unary<I extends DescMessage, O extends DescMessage>(
      method: DescMethodUnary<I, O>,
      input: MessageShape<I>,
      options?: TxCallOptions,
    ): Promise<UnaryResponse<I, O>> {
      const messages = [{
        typeUrl: `/${method.input.typeName}`,
        value: input,
      }];
      const memo = options?.memo ?? `akash: ${method.name}`;
      const fee = options?.fee ?? await transportOptions.client.estimateFee(messages, memo);

      const txRaw = await transportOptions.client.sign(messages, fee, memo);
      options?.afterSign?.(txRaw);
      const txResponse = await transportOptions.client.broadcast(txRaw);
      options?.afterBroadcast?.(txResponse);

      if (txResponse.code !== 0) {
        throw new TxError(`Transaction failed with code ${txResponse.code}`, txResponse);
      }

      const response = txResponse.msgResponses[0];

      return {
        stream: false,
        header: new Headers(),
        trailer: new Headers(),
        message: (response ? transportOptions.getMessageType(response.typeUrl).decode(response.value) : {}) as MessageShape<O>,
        service: method.parent,
        method,
      };
    },
    async stream() {
      throw new Error("Not supported");
    },
  };
}

export interface TransactionTransportOptions {
  client: TxClient;
  getMessageType: (typeUrl: string) => GeneratedType;
}
