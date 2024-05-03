# Akash Chain SDK

[![Lint Status](https://github.com/akash-network/akash-api/actions/workflows/lint.yaml/badge.svg)](https://github.com/akash-network/akash-api/actions/workflows/lint.yaml)
[![Test Status](https://github.com/akash-network/akash-api/actions/workflows/tests.yaml/badge.svg)](https://github.com/akash-network/akash-api/actions/workflows/tests.yaml)

## Overview

This repository is a development gateway to the Akash Blockchain.
It aims following:
- Define data types and API via [protobuf](./proto)
    - Akash Blockchain and it's stores, aka [node](./proto/node)
    - Akash Provider Interface, aka [provider](./proto/provider)
- Define data types and API (both REST and GRPC) of Akash Provider Interface
- Provide official reference clients for supported [programming languages](#supported-languages)


## Supported languages

### Golang

[This implementation](./go) provider all necessary code-generation as well as client defining Akash Blockchain
There are a few packages this implementation exports. All packages available via Vanity URLs which are hosted as [Github Pages](https://github.com/akash-network/vanity).
#### Go package

Source code is located within [go](./go) directory

Contains all the types, clients and utilities nesessary to communicate with Akash Blockchain

```go
import "pkg.akt.dev/go"
```

##### Migrate package

Depending on difference in API and stores between current and previous versions of the blockchain, there may be a **migrate** package. It is intended to be used by [node](https://github.com/akash-network/node) only.
```go
import "pkg.akt.dev/go/node/migrate"
```

#### SDL package

Reference implementation of the SDL.
```go
import "pkg.akt.dev/go/sdl"
```

#### CLI package

CLI package which combines improved version of cli clients from node](https://github.com/akash-network/node) and [cosmos-sdk](https://github.com/cosmos/cosmos-sdk)
```go
import "pkg.akt.dev/go/cli"
```

### TS

Source code is located within [ts](./ts) directory


## Protobuf

All protobuf definitions are located within [proto](./proto) directory.

This repository consolidates gRPC API definitions for the [Akash Node](https://github.com/akash-network/node) and [Akash Provider](https://github.com/akash-network/provider). It also includes related code generation.

Currently, two `buf` packages are defined, with potential future publication to BSR based on demand:
- **Node Package**: `buf.build/pkg.akt.dev/node`
- **Provider Package**: `buf.build/pkg.akt.dev/provider`

Proto documentation is available for:
- [Node](docs/proto/node.md)
- [Provider](docs/proto/provider.md)

Documentation in swagger format combining both node and provider packages can be located [here](./docs/swagger-ui/swagger.yaml)

### How to run protobuf codegen

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
    - generate changes to all [supported programming languages](#supported-languages)

    ```shell
    make proto-gen
    ```
    - to run codegen for specific language use `make proto-gen-<lang>`. For example
    ```shell
    make proto-gen-go
    ```

## Releases

Releases indicate changes to the repository itself. API versions are defined within each module.

## Contributing

Please submit issues via the [support repository](https://github.com/akash-network/support/issues) and tag them with `repo/akash-api`. All pull requests must be associated with an open issue in the support repository.
