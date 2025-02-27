import { Reader } from "protobufjs/minimal";

import * as coin from "./coin";

describe("DecCoin", () => {
  // @see https://github.com/cosmos/cosmos-sdk/blob/main/math/testdata/decimals.json
  it.each([
    ["0", "0"],
    ["1", "1"],
    ["12", "12"],
    ["123", "123"],
    ["1234", "1'234"],
    ["01234", "1234"],
    [".1234", "0.1234"],
    ["-.1234", "-0.1234"],
    ["123.", "123"],
    ["-123.", "-123"],
    ["0.1", "0.1"],
    ["0.01", "0.01"],
    ["0.001", "0.001"],
    ["0.0001", "0.0001"],
    ["0.00001", "0.00001"],
    ["0.000001", "0.000001"],
    ["0.0000001", "0.0000001"],
    ["0.00000001", "0.00000001"],
    ["0.000000001", "0.000000001"],
    ["0.0000000001", "0.0000000001"],
    ["0.00000000001", "0.00000000001"],
    ["0.000000000001", "0.000000000001"],
    ["0.0000000000001", "0.0000000000001"],
    ["0.00000000000001", "0.00000000000001"],
    ["0.000000000000001", "0.000000000000001"],
    ["0.0000000000000001", "0.0000000000000001"],
    ["0.00000000000000001", "0.00000000000000001"],
    ["0.000000000000000001", "0.000000000000000001"],
    ["0.100000000000000000", "0.1"],
    ["0.010000000000000000", "0.01"],
    ["0.001000000000000000", "0.001"],
    ["0.000100000000000000", "0.0001"],
    ["0.000010000000000000", "0.00001"],
    ["0.000001000000000000", "0.000001"],
    ["0.000000100000000000", "0.0000001"],
    ["0.000000010000000000", "0.00000001"],
    ["0.000000001000000000", "0.000000001"],
    ["0.000000000100000000", "0.0000000001"],
    ["0.000000000010000000", "0.00000000001"],
    ["0.000000000001000000", "0.000000000001"],
    ["0.000000000000100000", "0.0000000000001"],
    ["0.000000000000010000", "0.00000000000001"],
    ["0.000000000000001000", "0.000000000000001"],
    ["0.000000000000000100", "0.0000000000000001"],
    ["0.000000000000000010", "0.00000000000000001"],
    ["0.000000000000000001", "0.000000000000000001"],
    ["-10.0", "-10"],
    ["-10000", "-10'000"],
    ["-9999", "-9'999"],
    ["-999999999999", "-999'999'999'999"],
    [Number.MAX_SAFE_INTEGER.toString(), Number.MAX_SAFE_INTEGER.toString()],
  ])("should properly decode %s", (amount, expected) => {
    const encodedCoin = coin.DecCoin.encode({
      $type: "cosmos.base.v1beta1.DecCoin",
      denom: "",
      amount,
    }).finish();
    const reader = new Reader(encodedCoin);
    const result = coin.DecCoin.decode(reader);

    expect(result.amount).toEqual(expected.replace(/'/g, ""));
  });

  it("throws when amount is too big or too small", () => {
    expect(() =>
      coin.DecCoin.encode({
        $type: "cosmos.base.v1beta1.DecCoin",
        denom: "",
        amount: `${"9".repeat(100_0000)}`,
      }),
    ).toThrow();

    expect(() =>
      coin.DecCoin.encode({
        $type: "cosmos.base.v1beta1.DecCoin",
        denom: "",
        amount: `-${"9".repeat(100_0000)}`,
      }),
    ).toThrow();
  });

  it("throws when Infinity or NaN or random string is provided", () => {
    expect(() =>
      coin.DecCoin.encode({
        $type: "cosmos.base.v1beta1.DecCoin",
        denom: "",
        amount: Infinity.toString(),
      }),
    ).toThrow();

    expect(() =>
      coin.DecCoin.encode({
        $type: "cosmos.base.v1beta1.DecCoin",
        denom: "",
        amount: "NaN",
      }),
    ).toThrow();

    expect(() =>
      coin.DecCoin.encode({
        $type: "cosmos.base.v1beta1.DecCoin",
        denom: "",
        amount: "1foo",
      }),
    ).toThrow();
  });
});
