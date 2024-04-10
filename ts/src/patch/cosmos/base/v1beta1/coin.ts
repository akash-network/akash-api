import { Reader } from 'protobufjs/minimal';

import * as coin from '../../../../generated/cosmos/base/v1beta1/coin.original';

const originalDecode = coin.DecCoin.decode;

coin.DecCoin.decode = function decode(
  input: Reader | Uint8Array,
  length?: number,
): coin.DecCoin {
  const message = originalDecode.apply(this, [input, length]);

  message.amount = (parseInt(message.amount) / 10 ** 18).toPrecision(18);

  return message;
};

export * from '../../../../generated/cosmos/base/v1beta1/coin.original';
