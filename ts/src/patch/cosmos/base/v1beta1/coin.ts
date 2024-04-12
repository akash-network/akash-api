import { Reader } from 'protobufjs/minimal';
import * as minimal from 'protobufjs/minimal';

import * as coin from '../../../../generated/cosmos/base/v1beta1/coin.original';
import { DecCoin } from '../../../../generated/cosmos/base/v1beta1/coin.original';

const originalEncode = coin.DecCoin.encode;

coin.DecCoin.encode = function encode(
  message: DecCoin,
  writer: minimal.Writer = minimal.Writer.create(),
): minimal.Writer {
  const { amount } = message;
  const parts = amount.includes('.')
    ? message.amount.split('.')
    : [message.amount, ''];
  message.amount = `${parts[0]}${parts[1].padEnd(18, '0')}`;

  return originalEncode.apply(this, [message, writer]);
};

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
