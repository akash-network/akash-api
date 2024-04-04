# Akash API TypeScript Bindings

[![npm version](https://badge.fury.io/js/%40akashnetwork%2Fakash-api.svg)](https://badge.fury.io/js/%40akashnetwork%2Fakash-api)
[![License: Apache-2.0](https://img.shields.io/badge/License-apache2.0-yellow.svg)](https://opensource.org/license/apache-2-0)

This package provides TypeScript bindings for the Akash API, generated from protobuf definitions.

## Installation

To install the package, run:

```bash
npm install @akashnetwork/akash-api
```

## Usage

You can import the generated namespaces from the package like this:
```typescript
import * as akashDeploymentV1beta1 from '@akashnetwork/akash-api/akash/deployment/v1beta1';
import * as akashDiscoveryV1 from '@akashnetwork/akash-api/akash/discovery/v1';
// ... and so on for other namespaces
```

### TypeScript 4.5 and above
If you're using TypeScript 4.5 or above, the package exports all the paths of the generated namespaces, so you can import them directly.  

### TypeScript below 4.5
If you're using a version of TypeScript below 4.5, the package provides a tsconfig.paths.json file that you can extend in your local TypeScript configuration to resolve the paths. Here's how you can do it:  In your tsconfig.json file, add the following:
```json
{
  "extends": "@akashnetwork/akash-api/tsconfig.paths.json"
}
```

### Contributing
Contributions are welcome. Please submit a pull request or create an issue to discuss the changes you want to make.  

### License
This package is licensed under the Apache-2.0.