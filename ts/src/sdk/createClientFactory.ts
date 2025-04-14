import type { DescService } from "@bufbuild/protobuf";
import type { Transport } from "@connectrpc/connect";

import type { Client } from "./createServiceClient.ts";
import { createServiceClient } from "./createServiceClient.ts";

export function createClientFactory(transport: Transport) {
  const services = new Map<string, Client<DescService>>();

  return function getClient<T extends DescService>(service: T): Client<T> {
    if (!services.has(service.typeName)) {
      services.set(service.typeName, createServiceClient(service, transport));
    }
    return services.get(service.typeName) as Client<T>;
  };
}
