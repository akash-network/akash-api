import type { DescService } from "@bufbuild/protobuf";

import type { Transport } from "../transport/types.ts";
import type { Client, ServiceClientOptions } from "./createServiceClient.ts";
import { createServiceClient } from "./createServiceClient.ts";

export function createClientFactory<TCallOptions>(transport: Transport, options?: ServiceClientOptions) {
  const services: Record<string, Client<DescService, TCallOptions>> = Object.create(null);

  return function getClient<T extends DescService>(service: T): Client<T, TCallOptions> {
    if (!services[service.typeName]) {
      services[service.typeName] = createServiceClient<T, TCallOptions>(service, transport, options);
    }
    return services[service.typeName] as Client<T, TCallOptions>;
  };
}
