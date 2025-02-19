import type { DescService } from "@bufbuild/protobuf";
import type { Transport } from "@connectrpc/connect";

import { Client, createServiceClient } from "./createServiceClient";

export class ClientFactory {
  private readonly services = new Map<DescService, Client<DescService>>();
  private readonly transport: Transport;
  private readonly txTransport?: Transport;

  constructor(options: ClientFactoryOptions) {
    this.transport = options.transport;
    this.txTransport = options.txTransport;
  }

  getClient<T extends DescService>(service: T): Client<T> {
    if (!this.services.has(service)) {
      const transport = getServiceTransport(service, {
        transport: this.transport,
        txTransport: this.txTransport,
      });
      this.services.set(service, createServiceClient(service, transport));
    }
    return this.services.get(service) as Client<T>;
  }
}

export interface ClientFactoryOptions {
  transport: Transport;
  txTransport?: Transport;
}

const isTxService = (service: DescService) => service.name === "Msg";
function getServiceTransport(service: DescService, options: ClientFactoryOptions) {
  if (!isTxService(service)) return options.transport;

  if (!options.txTransport) {
    throw new Error("In order to use transaction services, you need to provide a txTransport.");
  }

  return options.txTransport;
}
