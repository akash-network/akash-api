/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin, DecCoin } from "../../../cosmos/base/v1beta1/coin";
import { messageTypeRegistry } from "../../../typeRegistry";

/** AccountID is the account identifier */
export interface AccountID {
  $type: "akash.escrow.v1beta3.AccountID";
  scope: string;
  xid: string;
}

/** Account stores state for an escrow account */
export interface Account {
  $type: "akash.escrow.v1beta3.Account";
  /** unique identifier for this escrow account */
  id: AccountID | undefined;
  /** bech32 encoded account address of the owner of this escrow account */
  owner: string;
  /** current state of this escrow account */
  state: Account_State;
  /** unspent coins received from the owner's wallet */
  balance: DecCoin | undefined;
  /** total coins spent by this account */
  transferred: DecCoin | undefined;
  /** block height at which this account was last settled */
  settledAt: Long;
  /**
   * bech32 encoded account address of the depositor.
   * If depositor is same as the owner, then any incoming coins are added to the Balance.
   * If depositor isn't same as the owner, then any incoming coins are added to the Funds.
   */
  depositor: string;
  /**
   * Funds are unspent coins received from the (non-Owner) Depositor's wallet.
   * If there are any funds, they should be spent before spending the Balance.
   */
  funds: DecCoin | undefined;
}

/** State stores state for an escrow account */
export enum Account_State {
  /** invalid - AccountStateInvalid is an invalid state */
  invalid = 0,
  /** open - AccountOpen is the state when an account is open */
  open = 1,
  /** closed - AccountClosed is the state when an account is closed */
  closed = 2,
  /** overdrawn - AccountOverdrawn is the state when an account is overdrawn */
  overdrawn = 3,
  UNRECOGNIZED = -1,
}

export function account_StateFromJSON(object: any): Account_State {
  switch (object) {
    case 0:
    case "invalid":
      return Account_State.invalid;
    case 1:
    case "open":
      return Account_State.open;
    case 2:
    case "closed":
      return Account_State.closed;
    case 3:
    case "overdrawn":
      return Account_State.overdrawn;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Account_State.UNRECOGNIZED;
  }
}

export function account_StateToJSON(object: Account_State): string {
  switch (object) {
    case Account_State.invalid:
      return "invalid";
    case Account_State.open:
      return "open";
    case Account_State.closed:
      return "closed";
    case Account_State.overdrawn:
      return "overdrawn";
    case Account_State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Payment stores state for a payment */
export interface FractionalPayment {
  $type: "akash.escrow.v1beta3.FractionalPayment";
  accountId: AccountID | undefined;
  paymentId: string;
  owner: string;
  state: FractionalPayment_State;
  rate: DecCoin | undefined;
  balance: DecCoin | undefined;
  withdrawn: Coin | undefined;
}

/** Payment State */
export enum FractionalPayment_State {
  /** invalid - PaymentStateInvalid is the state when the payment is invalid */
  invalid = 0,
  /** open - PaymentStateOpen is the state when the payment is open */
  open = 1,
  /** closed - PaymentStateClosed is the state when the payment is closed */
  closed = 2,
  /** overdrawn - PaymentStateOverdrawn is the state when the payment is overdrawn */
  overdrawn = 3,
  UNRECOGNIZED = -1,
}

export function fractionalPayment_StateFromJSON(
  object: any,
): FractionalPayment_State {
  switch (object) {
    case 0:
    case "invalid":
      return FractionalPayment_State.invalid;
    case 1:
    case "open":
      return FractionalPayment_State.open;
    case 2:
    case "closed":
      return FractionalPayment_State.closed;
    case 3:
    case "overdrawn":
      return FractionalPayment_State.overdrawn;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FractionalPayment_State.UNRECOGNIZED;
  }
}

export function fractionalPayment_StateToJSON(
  object: FractionalPayment_State,
): string {
  switch (object) {
    case FractionalPayment_State.invalid:
      return "invalid";
    case FractionalPayment_State.open:
      return "open";
    case FractionalPayment_State.closed:
      return "closed";
    case FractionalPayment_State.overdrawn:
      return "overdrawn";
    case FractionalPayment_State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseAccountID(): AccountID {
  return { $type: "akash.escrow.v1beta3.AccountID", scope: "", xid: "" };
}

export const AccountID = {
  $type: "akash.escrow.v1beta3.AccountID" as const,

  encode(
    message: AccountID,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.scope !== "") {
      writer.uint32(10).string(message.scope);
    }
    if (message.xid !== "") {
      writer.uint32(18).string(message.xid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountID {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.scope = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.xid = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AccountID {
    return {
      $type: AccountID.$type,
      scope: isSet(object.scope) ? globalThis.String(object.scope) : "",
      xid: isSet(object.xid) ? globalThis.String(object.xid) : "",
    };
  },

  toJSON(message: AccountID): unknown {
    const obj: any = {};
    if (message.scope !== "") {
      obj.scope = message.scope;
    }
    if (message.xid !== "") {
      obj.xid = message.xid;
    }
    return obj;
  },

  create(base?: DeepPartial<AccountID>): AccountID {
    return AccountID.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AccountID>): AccountID {
    const message = createBaseAccountID();
    message.scope = object.scope ?? "";
    message.xid = object.xid ?? "";
    return message;
  },
};

messageTypeRegistry.set(AccountID.$type, AccountID);

function createBaseAccount(): Account {
  return {
    $type: "akash.escrow.v1beta3.Account",
    id: undefined,
    owner: "",
    state: 0,
    balance: undefined,
    transferred: undefined,
    settledAt: Long.ZERO,
    depositor: "",
    funds: undefined,
  };
}

export const Account = {
  $type: "akash.escrow.v1beta3.Account" as const,

  encode(
    message: Account,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== undefined) {
      AccountID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.state !== 0) {
      writer.uint32(24).int32(message.state);
    }
    if (message.balance !== undefined) {
      DecCoin.encode(message.balance, writer.uint32(34).fork()).ldelim();
    }
    if (message.transferred !== undefined) {
      DecCoin.encode(message.transferred, writer.uint32(42).fork()).ldelim();
    }
    if (!message.settledAt.equals(Long.ZERO)) {
      writer.uint32(48).int64(message.settledAt);
    }
    if (message.depositor !== "") {
      writer.uint32(58).string(message.depositor);
    }
    if (message.funds !== undefined) {
      DecCoin.encode(message.funds, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Account {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = AccountID.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.owner = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.state = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.balance = DecCoin.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.transferred = DecCoin.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.settledAt = reader.int64() as Long;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.depositor = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.funds = DecCoin.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Account {
    return {
      $type: Account.$type,
      id: isSet(object.id) ? AccountID.fromJSON(object.id) : undefined,
      owner: isSet(object.owner) ? globalThis.String(object.owner) : "",
      state: isSet(object.state) ? account_StateFromJSON(object.state) : 0,
      balance: isSet(object.balance)
        ? DecCoin.fromJSON(object.balance)
        : undefined,
      transferred: isSet(object.transferred)
        ? DecCoin.fromJSON(object.transferred)
        : undefined,
      settledAt: isSet(object.settledAt)
        ? Long.fromValue(object.settledAt)
        : Long.ZERO,
      depositor: isSet(object.depositor)
        ? globalThis.String(object.depositor)
        : "",
      funds: isSet(object.funds) ? DecCoin.fromJSON(object.funds) : undefined,
    };
  },

  toJSON(message: Account): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = AccountID.toJSON(message.id);
    }
    if (message.owner !== "") {
      obj.owner = message.owner;
    }
    if (message.state !== 0) {
      obj.state = account_StateToJSON(message.state);
    }
    if (message.balance !== undefined) {
      obj.balance = DecCoin.toJSON(message.balance);
    }
    if (message.transferred !== undefined) {
      obj.transferred = DecCoin.toJSON(message.transferred);
    }
    if (!message.settledAt.equals(Long.ZERO)) {
      obj.settledAt = (message.settledAt || Long.ZERO).toString();
    }
    if (message.depositor !== "") {
      obj.depositor = message.depositor;
    }
    if (message.funds !== undefined) {
      obj.funds = DecCoin.toJSON(message.funds);
    }
    return obj;
  },

  create(base?: DeepPartial<Account>): Account {
    return Account.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Account>): Account {
    const message = createBaseAccount();
    message.id =
      object.id !== undefined && object.id !== null
        ? AccountID.fromPartial(object.id)
        : undefined;
    message.owner = object.owner ?? "";
    message.state = object.state ?? 0;
    message.balance =
      object.balance !== undefined && object.balance !== null
        ? DecCoin.fromPartial(object.balance)
        : undefined;
    message.transferred =
      object.transferred !== undefined && object.transferred !== null
        ? DecCoin.fromPartial(object.transferred)
        : undefined;
    message.settledAt =
      object.settledAt !== undefined && object.settledAt !== null
        ? Long.fromValue(object.settledAt)
        : Long.ZERO;
    message.depositor = object.depositor ?? "";
    message.funds =
      object.funds !== undefined && object.funds !== null
        ? DecCoin.fromPartial(object.funds)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Account.$type, Account);

function createBaseFractionalPayment(): FractionalPayment {
  return {
    $type: "akash.escrow.v1beta3.FractionalPayment",
    accountId: undefined,
    paymentId: "",
    owner: "",
    state: 0,
    rate: undefined,
    balance: undefined,
    withdrawn: undefined,
  };
}

export const FractionalPayment = {
  $type: "akash.escrow.v1beta3.FractionalPayment" as const,

  encode(
    message: FractionalPayment,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.accountId !== undefined) {
      AccountID.encode(message.accountId, writer.uint32(10).fork()).ldelim();
    }
    if (message.paymentId !== "") {
      writer.uint32(18).string(message.paymentId);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    if (message.state !== 0) {
      writer.uint32(32).int32(message.state);
    }
    if (message.rate !== undefined) {
      DecCoin.encode(message.rate, writer.uint32(42).fork()).ldelim();
    }
    if (message.balance !== undefined) {
      DecCoin.encode(message.balance, writer.uint32(50).fork()).ldelim();
    }
    if (message.withdrawn !== undefined) {
      Coin.encode(message.withdrawn, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FractionalPayment {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFractionalPayment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.accountId = AccountID.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.paymentId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.owner = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.state = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.rate = DecCoin.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.balance = DecCoin.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.withdrawn = Coin.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FractionalPayment {
    return {
      $type: FractionalPayment.$type,
      accountId: isSet(object.accountId)
        ? AccountID.fromJSON(object.accountId)
        : undefined,
      paymentId: isSet(object.paymentId)
        ? globalThis.String(object.paymentId)
        : "",
      owner: isSet(object.owner) ? globalThis.String(object.owner) : "",
      state: isSet(object.state)
        ? fractionalPayment_StateFromJSON(object.state)
        : 0,
      rate: isSet(object.rate) ? DecCoin.fromJSON(object.rate) : undefined,
      balance: isSet(object.balance)
        ? DecCoin.fromJSON(object.balance)
        : undefined,
      withdrawn: isSet(object.withdrawn)
        ? Coin.fromJSON(object.withdrawn)
        : undefined,
    };
  },

  toJSON(message: FractionalPayment): unknown {
    const obj: any = {};
    if (message.accountId !== undefined) {
      obj.accountId = AccountID.toJSON(message.accountId);
    }
    if (message.paymentId !== "") {
      obj.paymentId = message.paymentId;
    }
    if (message.owner !== "") {
      obj.owner = message.owner;
    }
    if (message.state !== 0) {
      obj.state = fractionalPayment_StateToJSON(message.state);
    }
    if (message.rate !== undefined) {
      obj.rate = DecCoin.toJSON(message.rate);
    }
    if (message.balance !== undefined) {
      obj.balance = DecCoin.toJSON(message.balance);
    }
    if (message.withdrawn !== undefined) {
      obj.withdrawn = Coin.toJSON(message.withdrawn);
    }
    return obj;
  },

  create(base?: DeepPartial<FractionalPayment>): FractionalPayment {
    return FractionalPayment.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<FractionalPayment>): FractionalPayment {
    const message = createBaseFractionalPayment();
    message.accountId =
      object.accountId !== undefined && object.accountId !== null
        ? AccountID.fromPartial(object.accountId)
        : undefined;
    message.paymentId = object.paymentId ?? "";
    message.owner = object.owner ?? "";
    message.state = object.state ?? 0;
    message.rate =
      object.rate !== undefined && object.rate !== null
        ? DecCoin.fromPartial(object.rate)
        : undefined;
    message.balance =
      object.balance !== undefined && object.balance !== null
        ? DecCoin.fromPartial(object.balance)
        : undefined;
    message.withdrawn =
      object.withdrawn !== undefined && object.withdrawn !== null
        ? Coin.fromPartial(object.withdrawn)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(FractionalPayment.$type, FractionalPayment);

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
    ? string | number | Long
    : T extends globalThis.Array<infer U>
      ? globalThis.Array<DeepPartial<U>>
      : T extends ReadonlyArray<infer U>
        ? ReadonlyArray<DeepPartial<U>>
        : T extends {}
          ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
          : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
