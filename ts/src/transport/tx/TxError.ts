import type { DeliverTxResponse } from "@cosmjs/stargate";

export class TxError extends Error {
  readonly txResponse: DeliverTxResponse;

  constructor(message: string, txResponse: DeliverTxResponse) {
    super(message);
    this.name = this.constructor.name;
    this.txResponse = txResponse;
  }
}
