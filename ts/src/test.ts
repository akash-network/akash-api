import { createSDK } from "./generated/createNodeSDK";
import { createGrpcTransport } from "./transport/grpc/createGrpcTransport";

const sdk = createSDK(
  createGrpcTransport({
    baseUrl: "...",
  }),
  createGrpcTransport({
    baseUrl: "...",
  }),
);
