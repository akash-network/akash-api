/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DecCoin } from '../../../cosmos/base/v1beta1/coin';
import { Empty } from '../../../google/protobuf/empty';
import { messageTypeRegistry } from '../../../typeRegistry';
import { GroupSpec } from '../../deployment/v1beta3/groupspec';
import { Status } from './status';

/** VersionResponse */
export interface VersionResponse {
  $type: 'akash.provider.v1.VersionResponse';
  akash: AkashInfo | undefined;
  kube: KubeInfo | undefined;
}

/** AkashInfo */
export interface AkashInfo {
  $type: 'akash.provider.v1.AkashInfo';
  name: string;
  appName: string;
  version: string;
  gitCommit: string;
  buildTags: string;
  goVersion: string;
  buildDeps: BuildDep[];
  cosmosSdkVersion: string;
}

/** BuildDep */
export interface BuildDep {
  $type: 'akash.provider.v1.BuildDep';
  path: string;
  version: string;
  sum: string;
  replace: BuildDep | undefined;
}

/** KubeInfo */
export interface KubeInfo {
  $type: 'akash.provider.v1.KubeInfo';
  major: string;
  minor: string;
  gitVersion: string;
  gitCommit: string;
  gitTreeState: string;
  buildDate: string;
  goVersion: string;
  compiler: string;
  platform: string;
}

/** ValidateRequest */
export interface ValidateRequest {
  $type: 'akash.provider.v1.ValidateRequest';
  group: GroupSpec | undefined;
}

/** ValidateResponse */
export interface ValidateResponse {
  $type: 'akash.provider.v1.ValidateResponse';
  minBidPrice: DecCoin | undefined;
}

function createBaseVersionResponse(): VersionResponse {
  return {
    $type: 'akash.provider.v1.VersionResponse',
    akash: undefined,
    kube: undefined,
  };
}

export const VersionResponse = {
  $type: 'akash.provider.v1.VersionResponse' as const,

  encode(
    message: VersionResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.akash !== undefined) {
      AkashInfo.encode(message.akash, writer.uint32(10).fork()).ldelim();
    }
    if (message.kube !== undefined) {
      KubeInfo.encode(message.kube, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VersionResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVersionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.akash = AkashInfo.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.kube = KubeInfo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VersionResponse {
    return {
      $type: VersionResponse.$type,
      akash: isSet(object.akash) ? AkashInfo.fromJSON(object.akash) : undefined,
      kube: isSet(object.kube) ? KubeInfo.fromJSON(object.kube) : undefined,
    };
  },

  toJSON(message: VersionResponse): unknown {
    const obj: any = {};
    if (message.akash !== undefined) {
      obj.akash = AkashInfo.toJSON(message.akash);
    }
    if (message.kube !== undefined) {
      obj.kube = KubeInfo.toJSON(message.kube);
    }
    return obj;
  },

  create(base?: DeepPartial<VersionResponse>): VersionResponse {
    return VersionResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<VersionResponse>): VersionResponse {
    const message = createBaseVersionResponse();
    message.akash =
      object.akash !== undefined && object.akash !== null
        ? AkashInfo.fromPartial(object.akash)
        : undefined;
    message.kube =
      object.kube !== undefined && object.kube !== null
        ? KubeInfo.fromPartial(object.kube)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(VersionResponse.$type, VersionResponse);

function createBaseAkashInfo(): AkashInfo {
  return {
    $type: 'akash.provider.v1.AkashInfo',
    name: '',
    appName: '',
    version: '',
    gitCommit: '',
    buildTags: '',
    goVersion: '',
    buildDeps: [],
    cosmosSdkVersion: '',
  };
}

export const AkashInfo = {
  $type: 'akash.provider.v1.AkashInfo' as const,

  encode(
    message: AkashInfo,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.name !== '') {
      writer.uint32(10).string(message.name);
    }
    if (message.appName !== '') {
      writer.uint32(18).string(message.appName);
    }
    if (message.version !== '') {
      writer.uint32(26).string(message.version);
    }
    if (message.gitCommit !== '') {
      writer.uint32(34).string(message.gitCommit);
    }
    if (message.buildTags !== '') {
      writer.uint32(42).string(message.buildTags);
    }
    if (message.goVersion !== '') {
      writer.uint32(50).string(message.goVersion);
    }
    for (const v of message.buildDeps) {
      BuildDep.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.cosmosSdkVersion !== '') {
      writer.uint32(66).string(message.cosmosSdkVersion);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AkashInfo {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAkashInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.appName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.version = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.gitCommit = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.buildTags = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.goVersion = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.buildDeps.push(BuildDep.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.cosmosSdkVersion = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AkashInfo {
    return {
      $type: AkashInfo.$type,
      name: isSet(object.name) ? globalThis.String(object.name) : '',
      appName: isSet(object.appName) ? globalThis.String(object.appName) : '',
      version: isSet(object.version) ? globalThis.String(object.version) : '',
      gitCommit: isSet(object.gitCommit)
        ? globalThis.String(object.gitCommit)
        : '',
      buildTags: isSet(object.buildTags)
        ? globalThis.String(object.buildTags)
        : '',
      goVersion: isSet(object.goVersion)
        ? globalThis.String(object.goVersion)
        : '',
      buildDeps: globalThis.Array.isArray(object?.buildDeps)
        ? object.buildDeps.map((e: any) => BuildDep.fromJSON(e))
        : [],
      cosmosSdkVersion: isSet(object.cosmosSdkVersion)
        ? globalThis.String(object.cosmosSdkVersion)
        : '',
    };
  },

  toJSON(message: AkashInfo): unknown {
    const obj: any = {};
    if (message.name !== '') {
      obj.name = message.name;
    }
    if (message.appName !== '') {
      obj.appName = message.appName;
    }
    if (message.version !== '') {
      obj.version = message.version;
    }
    if (message.gitCommit !== '') {
      obj.gitCommit = message.gitCommit;
    }
    if (message.buildTags !== '') {
      obj.buildTags = message.buildTags;
    }
    if (message.goVersion !== '') {
      obj.goVersion = message.goVersion;
    }
    if (message.buildDeps?.length) {
      obj.buildDeps = message.buildDeps.map((e) => BuildDep.toJSON(e));
    }
    if (message.cosmosSdkVersion !== '') {
      obj.cosmosSdkVersion = message.cosmosSdkVersion;
    }
    return obj;
  },

  create(base?: DeepPartial<AkashInfo>): AkashInfo {
    return AkashInfo.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AkashInfo>): AkashInfo {
    const message = createBaseAkashInfo();
    message.name = object.name ?? '';
    message.appName = object.appName ?? '';
    message.version = object.version ?? '';
    message.gitCommit = object.gitCommit ?? '';
    message.buildTags = object.buildTags ?? '';
    message.goVersion = object.goVersion ?? '';
    message.buildDeps =
      object.buildDeps?.map((e) => BuildDep.fromPartial(e)) || [];
    message.cosmosSdkVersion = object.cosmosSdkVersion ?? '';
    return message;
  },
};

messageTypeRegistry.set(AkashInfo.$type, AkashInfo);

function createBaseBuildDep(): BuildDep {
  return {
    $type: 'akash.provider.v1.BuildDep',
    path: '',
    version: '',
    sum: '',
    replace: undefined,
  };
}

export const BuildDep = {
  $type: 'akash.provider.v1.BuildDep' as const,

  encode(
    message: BuildDep,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.path !== '') {
      writer.uint32(10).string(message.path);
    }
    if (message.version !== '') {
      writer.uint32(18).string(message.version);
    }
    if (message.sum !== '') {
      writer.uint32(26).string(message.sum);
    }
    if (message.replace !== undefined) {
      BuildDep.encode(message.replace, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BuildDep {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBuildDep();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.path = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.version = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.sum = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.replace = BuildDep.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BuildDep {
    return {
      $type: BuildDep.$type,
      path: isSet(object.path) ? globalThis.String(object.path) : '',
      version: isSet(object.version) ? globalThis.String(object.version) : '',
      sum: isSet(object.sum) ? globalThis.String(object.sum) : '',
      replace: isSet(object.replace)
        ? BuildDep.fromJSON(object.replace)
        : undefined,
    };
  },

  toJSON(message: BuildDep): unknown {
    const obj: any = {};
    if (message.path !== '') {
      obj.path = message.path;
    }
    if (message.version !== '') {
      obj.version = message.version;
    }
    if (message.sum !== '') {
      obj.sum = message.sum;
    }
    if (message.replace !== undefined) {
      obj.replace = BuildDep.toJSON(message.replace);
    }
    return obj;
  },

  create(base?: DeepPartial<BuildDep>): BuildDep {
    return BuildDep.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<BuildDep>): BuildDep {
    const message = createBaseBuildDep();
    message.path = object.path ?? '';
    message.version = object.version ?? '';
    message.sum = object.sum ?? '';
    message.replace =
      object.replace !== undefined && object.replace !== null
        ? BuildDep.fromPartial(object.replace)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(BuildDep.$type, BuildDep);

function createBaseKubeInfo(): KubeInfo {
  return {
    $type: 'akash.provider.v1.KubeInfo',
    major: '',
    minor: '',
    gitVersion: '',
    gitCommit: '',
    gitTreeState: '',
    buildDate: '',
    goVersion: '',
    compiler: '',
    platform: '',
  };
}

export const KubeInfo = {
  $type: 'akash.provider.v1.KubeInfo' as const,

  encode(
    message: KubeInfo,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.major !== '') {
      writer.uint32(10).string(message.major);
    }
    if (message.minor !== '') {
      writer.uint32(18).string(message.minor);
    }
    if (message.gitVersion !== '') {
      writer.uint32(26).string(message.gitVersion);
    }
    if (message.gitCommit !== '') {
      writer.uint32(34).string(message.gitCommit);
    }
    if (message.gitTreeState !== '') {
      writer.uint32(42).string(message.gitTreeState);
    }
    if (message.buildDate !== '') {
      writer.uint32(50).string(message.buildDate);
    }
    if (message.goVersion !== '') {
      writer.uint32(58).string(message.goVersion);
    }
    if (message.compiler !== '') {
      writer.uint32(66).string(message.compiler);
    }
    if (message.platform !== '') {
      writer.uint32(74).string(message.platform);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KubeInfo {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKubeInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.major = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.minor = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.gitVersion = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.gitCommit = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.gitTreeState = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.buildDate = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.goVersion = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.compiler = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.platform = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): KubeInfo {
    return {
      $type: KubeInfo.$type,
      major: isSet(object.major) ? globalThis.String(object.major) : '',
      minor: isSet(object.minor) ? globalThis.String(object.minor) : '',
      gitVersion: isSet(object.gitVersion)
        ? globalThis.String(object.gitVersion)
        : '',
      gitCommit: isSet(object.gitCommit)
        ? globalThis.String(object.gitCommit)
        : '',
      gitTreeState: isSet(object.gitTreeState)
        ? globalThis.String(object.gitTreeState)
        : '',
      buildDate: isSet(object.buildDate)
        ? globalThis.String(object.buildDate)
        : '',
      goVersion: isSet(object.goVersion)
        ? globalThis.String(object.goVersion)
        : '',
      compiler: isSet(object.compiler)
        ? globalThis.String(object.compiler)
        : '',
      platform: isSet(object.platform)
        ? globalThis.String(object.platform)
        : '',
    };
  },

  toJSON(message: KubeInfo): unknown {
    const obj: any = {};
    if (message.major !== '') {
      obj.major = message.major;
    }
    if (message.minor !== '') {
      obj.minor = message.minor;
    }
    if (message.gitVersion !== '') {
      obj.gitVersion = message.gitVersion;
    }
    if (message.gitCommit !== '') {
      obj.gitCommit = message.gitCommit;
    }
    if (message.gitTreeState !== '') {
      obj.gitTreeState = message.gitTreeState;
    }
    if (message.buildDate !== '') {
      obj.buildDate = message.buildDate;
    }
    if (message.goVersion !== '') {
      obj.goVersion = message.goVersion;
    }
    if (message.compiler !== '') {
      obj.compiler = message.compiler;
    }
    if (message.platform !== '') {
      obj.platform = message.platform;
    }
    return obj;
  },

  create(base?: DeepPartial<KubeInfo>): KubeInfo {
    return KubeInfo.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<KubeInfo>): KubeInfo {
    const message = createBaseKubeInfo();
    message.major = object.major ?? '';
    message.minor = object.minor ?? '';
    message.gitVersion = object.gitVersion ?? '';
    message.gitCommit = object.gitCommit ?? '';
    message.gitTreeState = object.gitTreeState ?? '';
    message.buildDate = object.buildDate ?? '';
    message.goVersion = object.goVersion ?? '';
    message.compiler = object.compiler ?? '';
    message.platform = object.platform ?? '';
    return message;
  },
};

messageTypeRegistry.set(KubeInfo.$type, KubeInfo);

function createBaseValidateRequest(): ValidateRequest {
  return { $type: 'akash.provider.v1.ValidateRequest', group: undefined };
}

export const ValidateRequest = {
  $type: 'akash.provider.v1.ValidateRequest' as const,

  encode(
    message: ValidateRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.group !== undefined) {
      GroupSpec.encode(message.group, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidateRequest {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.group = GroupSpec.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ValidateRequest {
    return {
      $type: ValidateRequest.$type,
      group: isSet(object.group) ? GroupSpec.fromJSON(object.group) : undefined,
    };
  },

  toJSON(message: ValidateRequest): unknown {
    const obj: any = {};
    if (message.group !== undefined) {
      obj.group = GroupSpec.toJSON(message.group);
    }
    return obj;
  },

  create(base?: DeepPartial<ValidateRequest>): ValidateRequest {
    return ValidateRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ValidateRequest>): ValidateRequest {
    const message = createBaseValidateRequest();
    message.group =
      object.group !== undefined && object.group !== null
        ? GroupSpec.fromPartial(object.group)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(ValidateRequest.$type, ValidateRequest);

function createBaseValidateResponse(): ValidateResponse {
  return {
    $type: 'akash.provider.v1.ValidateResponse',
    minBidPrice: undefined,
  };
}

export const ValidateResponse = {
  $type: 'akash.provider.v1.ValidateResponse' as const,

  encode(
    message: ValidateResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.minBidPrice !== undefined) {
      DecCoin.encode(message.minBidPrice, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidateResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.minBidPrice = DecCoin.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ValidateResponse {
    return {
      $type: ValidateResponse.$type,
      minBidPrice: isSet(object.minBidPrice)
        ? DecCoin.fromJSON(object.minBidPrice)
        : undefined,
    };
  },

  toJSON(message: ValidateResponse): unknown {
    const obj: any = {};
    if (message.minBidPrice !== undefined) {
      obj.minBidPrice = DecCoin.toJSON(message.minBidPrice);
    }
    return obj;
  },

  create(base?: DeepPartial<ValidateResponse>): ValidateResponse {
    return ValidateResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ValidateResponse>): ValidateResponse {
    const message = createBaseValidateResponse();
    message.minBidPrice =
      object.minBidPrice !== undefined && object.minBidPrice !== null
        ? DecCoin.fromPartial(object.minBidPrice)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(ValidateResponse.$type, ValidateResponse);

/** ProviderRPC defines the RPC server for provider */
export interface ProviderRPC {
  /**
   * GetStatus defines a method to query provider state
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   */
  GetStatus(request: Empty): Promise<Status>;
  /**
   * Status defines a method to stream provider state
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   */
  StreamStatus(request: Empty): Observable<Status>;
  /** Version returns version information about the provider */
  Version(request: Empty): Promise<VersionResponse>;
  /** Validate checks if provider will bid on given groupspec */
  Validate(request: ValidateRequest): Promise<ValidateResponse>;
  /** WIBOY (will I bid on you) is an alias for Validate */
  WIBOY(request: ValidateRequest): Promise<ValidateResponse>;
}

export const ProviderRPCServiceName = 'akash.provider.v1.ProviderRPC';
export class ProviderRPCClientImpl implements ProviderRPC {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || ProviderRPCServiceName;
    this.rpc = rpc;
    this.GetStatus = this.GetStatus.bind(this);
    this.StreamStatus = this.StreamStatus.bind(this);
    this.Version = this.Version.bind(this);
    this.Validate = this.Validate.bind(this);
    this.WIBOY = this.WIBOY.bind(this);
  }
  GetStatus(request: Empty): Promise<Status> {
    const data = Empty.encode(request).finish();
    const promise = this.rpc.request(this.service, 'GetStatus', data);
    return promise.then((data) => Status.decode(_m0.Reader.create(data)));
  }

  StreamStatus(request: Empty): Observable<Status> {
    const data = Empty.encode(request).finish();
    const result = this.rpc.serverStreamingRequest(
      this.service,
      'StreamStatus',
      data,
    );
    return result.pipe(map((data) => Status.decode(_m0.Reader.create(data))));
  }

  Version(request: Empty): Promise<VersionResponse> {
    const data = Empty.encode(request).finish();
    const promise = this.rpc.request(this.service, 'Version', data);
    return promise.then((data) =>
      VersionResponse.decode(_m0.Reader.create(data)),
    );
  }

  Validate(request: ValidateRequest): Promise<ValidateResponse> {
    const data = ValidateRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, 'Validate', data);
    return promise.then((data) =>
      ValidateResponse.decode(_m0.Reader.create(data)),
    );
  }

  WIBOY(request: ValidateRequest): Promise<ValidateResponse> {
    const data = ValidateRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, 'WIBOY', data);
    return promise.then((data) =>
      ValidateResponse.decode(_m0.Reader.create(data)),
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array,
  ): Promise<Uint8Array>;
  clientStreamingRequest(
    service: string,
    method: string,
    data: Observable<Uint8Array>,
  ): Promise<Uint8Array>;
  serverStreamingRequest(
    service: string,
    method: string,
    data: Uint8Array,
  ): Observable<Uint8Array>;
  bidirectionalStreamingRequest(
    service: string,
    method: string,
    data: Observable<Uint8Array>,
  ): Observable<Uint8Array>;
}

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
          ? { [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]> }
          : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
