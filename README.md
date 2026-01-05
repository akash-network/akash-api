# Akash API

[![Lint Status](https://github.com/akash-network/akash-api/actions/workflows/lint.yaml/badge.svg)](https://github.com/akash-network/akash-api/actions/workflows/lint.yaml)
[![Test Status](https://github.com/akash-network/akash-api/actions/workflows/tests.yaml/badge.svg)](https://github.com/akash-network/akash-api/actions/workflows/tests.yaml)

> **Deprecated**: This repository has been deprecated. Please use [chain-sdk](https://github.com/akash-network/chain-sdk) instead.

## Overview

This repository consolidates gRPC API definitions for the [Akash Node](https://github.com/akash-network/node) and [Akash Provider](https://github.com/akash-network/provider). It also includes related code generation.

Currently, two `buf` packages are defined, with potential future publication to BSR based on demand:
- **Node Package**: `buf.build/akash-network/node`
  - Akash protobuf definitions, previously located in the [proto directory](https://github.com/akash-network/node/tree/master/proto/akash), are now under [proto/node/akash](./proto/node/akash).
  - Generated code is available [here](./go/node).
- **Provider Package**: `buf.build/akash-network/provider`
  - Akash manifest definitions, previously defined as plain Go structs, have been converted into Protobuf [definitions](./proto/provider/akash).

Proto documentation is available for:
- [Node](docs/proto/node.md)
- [Provider](docs/proto/provider.md)

## Contributing

Please submit issues via the [support repository](https://github.com/akash-network/support/issues) and tag them with `repo/akash-api`. All pull requests must be associated with an open issue in the support repository.

## Releases

Releases indicate changes to the repository itself. API versions are defined within each module.

## Pre-generated Packages

We provide generated code to allow developers to focus on features rather than stub generation:
- [Go](./go)
- [TS](./ts)

## How to run protobuf codegen

If there is a need to run regenerate protobuf (in case of API or documentation changes):

1. Install [direnv](https://direnv.net) and hook it to the [shell](https://direnv.net/docs/hook.html)
    - **MacOS**
    ```shell
    brew install make direnv
    ```
2. Allow direnv within project
    ```shell
    direnv allow
    ```

3. Run codegen. This will
    - Install all required tools into local cache
    - generate changes for both `Go` and `TS` packages.

    ```shell
    make proto-gen
    ```

