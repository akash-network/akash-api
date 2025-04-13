#!/usr/bin/env npx ts-node -T

import { DescFile, DescMethod, DescService } from "@bufbuild/protobuf";
import {
  createEcmaScriptPlugin,
  getComments,
  runNodeJs,
  type Schema,
} from "@bufbuild/protoplugin";
import { normalize } from "path";
import { TelescopeBuilder } from '@cosmology/telescope';
import { ProtoStore } from "@cosmology/proto-parser";
import path from 'path'
import { TelescopeOptions } from "@cosmology/types";
import { Enum, Field, IParserResult, Root, Service } from "@cosmology/protobufjs"

runNodeJs(
  createEcmaScriptPlugin({
    name: "protoc-types-telescope",
    version: "v1",
    generateTs,
  }),
);

const outPath = path.join(__dirname, '../src/generated/proto');
async function generateTs(schema: Schema) {
  const options: TelescopeOptions = {
    env: 'v-next',
    useSDKTypes: false,
    rpcClients: {
      enabled: false,
    },
    lcdClients: {
      enabled: false,
    },
    aminoEncoding: {
      enabled: false,
    },
    bundle: {
      enabled: false,
    },
    prototypes: {
      enableRegistryLoader: true,
      includePackageVar: false,
      fieldDefaultIsOptional: false,
      useOptionalNullable: true,
      optionalQueryParams: true,
      optionalPageRequests: false,
      // allowEncodeDefaultScalars: true,
      isScalarDefaultToNullable: true,
      methods: {
        encode: true,
        decode: true,
        fromJSON: true,
        toJSON: true,
        fromPartial: true,
        toAmino: false,
        fromAmino: false,
        fromProto: false,
        toProto: false,
      },
      parser: {},
      typingsFormat: {
        duration: 'duration',
        timestamp: 'date',
        useExact: false,
        useDeepPartial: false,
        num64: 'bigint',
        useTelescopeGeneratedType: false,
        customTypes: {
          useCosmosSDKDec: true,
        }
      },
    },
  };

  try {
    const builder = new TelescopeBuilder({
      protoDirs: [].map(p => path.join(__dirname, '..', '..', p)),
      store: new BufTelescopeProtoStore(schema.allFiles, options),
      outPath,
      options,
    });
    console.error('started');
    const originalLog = console.log;
    console.log = () => {};
    await builder.build();
    console.log = originalLog;
    console.error('done');
  } catch (error: any) {
    console.error('is error?')
    console.error(error.stack);
  }
}

class BufTelescopeProtoStore extends ProtoStore {
  private readonly bufFiles: string[];

  constructor(files: ReadonlyArray<DescFile>, options?: TelescopeOptions) {
    super([
      "proto/node",
      "proto/provider",
      "go/vendor/github.com/cosmos/gogoproto",
      "go/vendor/github.com/cosmos/cosmos-proto/proto",
      "go/vendor/github.com/cosmos/cosmos-sdk/proto",
      "vendor/github.com/cosmos/cosmos-sdk/third_party/proto",
      "go/vendor"
    ].map(p => path.join(__dirname, '..', '..', p)), options);
    this.bufFiles = files.map(f => f.proto.name);
  }

  processProtos(contents: {
    absolute: string;
    filename: string;
    content: string;
  }[]): ReturnType<ProtoStore['processProtos']> {
    return super.processProtos(contents.filter(c => {
      if (c.filename.includes('proto/test_proto/test.proto') || c.filename.includes('/testdata/') || c.filename.includes('test_proto/')) return false;
      return true;// || c.filename.startsWith('google/protobuf') || c.filename.includes('gogoproto')
    }))
  }

  private bufbuildFileToTelescope(file: DescFile): IParserResult {
    return {
      imports: file.proto.dependency,
      syntax: file.proto.syntax,
      package: file.proto.package,
      weakImports: file.proto.weakDependency.map(i => file.dependencies[i].proto.name),
      root: this.bufbuildToRoot(file),
    }
  }

  private bufbuildToRoot(file: DescFile): Root {
    const root = new Root();
    root.loadSync(file.proto.name);
    console.log(root.toJSON());
    return root;
  }
}
