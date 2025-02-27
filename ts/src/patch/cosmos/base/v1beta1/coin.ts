import * as minimal from "protobufjs/minimal";
import { Reader } from "protobufjs/minimal";

import * as coin from "../../../../generated/cosmos/base/v1beta1/coin.original";
import { DecCoin } from "../../../../generated/cosmos/base/v1beta1/coin.original";

const originalEncode = coin.DecCoin.encode;
const PRECISION = 18;
/**
 * @see https://github.com/cosmos/cosmos-sdk/blob/main/math/dec_test.go#L40
 */
const MAX_SUPPORTED_DECIMAL_LENGTH = 34;

coin.DecCoin.encode = function encode(
  message: DecCoin,
  writer: minimal.Writer = minimal.Writer.create(),
): minimal.Writer {
  const floatingPointIndex = message.amount.indexOf(".");
  let integerPart: string;
  let fractionalPart: string;

  if (floatingPointIndex === -1) {
    integerPart = message.amount;
    fractionalPart = "0";
  } else {
    integerPart = message.amount.slice(0, floatingPointIndex) || "0";
    fractionalPart = message.amount.slice(floatingPointIndex + 1);
  }

  let amount: string;
  try {
    amount = BigInt(
      integerPart + fractionalPart.padEnd(PRECISION, "0"),
    ).toString();
  } catch (error) {
    throw new Error(`Cannot encode invalid DecCoin amount: ${message.amount}`);
  }

  const maxDigits =
    amount[0] === "-"
      ? MAX_SUPPORTED_DECIMAL_LENGTH + 1
      : MAX_SUPPORTED_DECIMAL_LENGTH;
  if (amount.length > maxDigits) {
    throw new Error(
      `Cannot encode DecCoin amount over ${MAX_SUPPORTED_DECIMAL_LENGTH} digits`,
    );
  }

  message.amount = amount;

  return originalEncode.apply(this, [message, writer]);
};

const originalDecode = coin.DecCoin.decode;
const TRAILING_ZEROES_REGEX = /0+$/;

coin.DecCoin.decode = function decode(
  input: Reader | Uint8Array,
  length?: number,
): coin.DecCoin {
  const message = originalDecode.apply(this, [input, length]);
  let integerPart: string;
  let fractionalPart: string;
  const amount = BigInt(message.amount);
  const isNegative = amount < BigInt(0);
  const absAmount = isNegative ? -amount : amount;

  if (absAmount.toString().length <= PRECISION) {
    integerPart = isNegative ? "-0" : "0";
    fractionalPart = absAmount.toString().padStart(PRECISION, "0");
  } else {
    integerPart = message.amount.slice(0, message.amount.length - PRECISION);
    fractionalPart = message.amount.slice(-PRECISION);
  }

  message.amount =
    BigInt(fractionalPart) === BigInt(0)
      ? integerPart
      : `${integerPart}.${fractionalPart.replace(TRAILING_ZEROES_REGEX, "")}`;

  return message;
};

export * from "../../../../generated/cosmos/base/v1beta1/coin.original";
