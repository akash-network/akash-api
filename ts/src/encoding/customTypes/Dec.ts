import { Decimal } from "@cosmjs/math";

import type { CustomType } from "./CustomType.ts";

/**
 * @see https://github.com/cosmos/cosmos-sdk/blob/25b14c3caa2ecdc99840dbb88fdb3a2d8ac02158/math/dec.go#L21
 */
const PRECISION = 18;

export const Dec = {
  typeName: "github.com/cosmos/cosmos-sdk/types.Dec",
  shortName: "Dec",
  encode: (value: string) => value.length ? Decimal.fromUserInput(value, PRECISION).atomics : "",
  decode: (value: string) => value.length ? Decimal.fromAtomics(value, PRECISION).toString() : "",
} as const satisfies CustomType<string, string>;
