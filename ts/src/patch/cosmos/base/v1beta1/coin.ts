import { Decimal } from "@cosmjs/math";
import * as minimal from "protobufjs/minimal";
import { Reader } from "protobufjs/minimal";

import * as coin from "../../../../generated/cosmos/base/v1beta1/coin.original";
import { DecCoin } from "../../../../generated/cosmos/base/v1beta1/coin.original";

const originalEncode = coin.DecCoin.encode;
/**
 * Taken from cosmos-sdk
 * @see https://github.com/cosmos/cosmos-sdk/blob/25b14c3caa2ecdc99840dbb88fdb3a2d8ac02158/math/dec.go#L21
 */
const PRECISION = 18;

coin.DecCoin.encode = function encode(
  message: DecCoin,
  writer: minimal.Writer = minimal.Writer.create(),
): minimal.Writer {
  message.amount = Decimal.fromUserInput(message.amount, PRECISION).atomics;

  return originalEncode.apply(this, [message, writer]);
};

const originalDecode = coin.DecCoin.decode;

coin.DecCoin.decode = function decode(
  input: Reader | Uint8Array,
  length?: number,
): coin.DecCoin {
  const message = originalDecode.apply(this, [input, length]);
  message.amount = Decimal.fromAtomics(message.amount, PRECISION).toString();

  return message;
};

export * from "../../../../generated/cosmos/base/v1beta1/coin.original";
