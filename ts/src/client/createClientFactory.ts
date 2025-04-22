import type { DescService } from "@bufbuild/protobuf";

import type { Transport } from "../transport/types.ts";
import type { Client, ServiceClientOptions } from "./createServiceClient.ts";
import { createServiceClient } from "./createServiceClient.ts";

export function createClientFactory(transport: Transport, options?: ServiceClientOptions) {
  const services = Object.create(null);

  return function getClient<T extends DescService>(service: T): Client<T> {
    if (!services[service.typeName]) {
      services[service.typeName] = createServiceClient(service, transport, options);
    }
    return services[service.typeName] as Client<T>;
  };
}
