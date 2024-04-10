import { Reader } from 'protobufjs/minimal';

import * as coin from '../../../../generated/cosmos/base/v1beta1/coin.original';

coin.DecCoin.decode = function decode(
  input: Reader | Uint8Array,
  length?: number,
): coin.DecCoin {
  const reader = input instanceof Reader ? input : Reader.create(input);
  const end = length === undefined ? reader.len : reader.pos + length;
  const message = createBaseDecCoin();

  while (reader.pos < end) {
    const tag = reader.uint32();
    switch (tag >>> 3) {
      case 1:
        if (tag !== 10) {
          break;
        }

        message.denom = reader.string();

        continue;
      case 2:
        if (tag !== 18) {
          break;
        }

        message.amount = (parseInt(reader.string()) / 10 ** 18).toPrecision(18);

        continue;
    }

    if ((tag & 7) === 4 || tag === 0) {
      break;
    }

    reader.skipType(tag & 7);
  }

  return message;
};

function createBaseDecCoin(): coin.DecCoin {
  return { $type: 'cosmos.base.v1beta1.DecCoin', denom: '', amount: '' };
}

export * from '../../../../generated/cosmos/base/v1beta1/coin.original';
