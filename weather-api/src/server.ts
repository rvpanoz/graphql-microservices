/// <reference path="mali.d.ts" />

import path from "path";
import Mali from "mali";

import WeatherService from "./services/Weather";
import { grpcConfig } from "./config";

const SERVICE_PROTO = path.resolve(__dirname, "_proto/Weather.proto");
const HOST_PORT = `${grpcConfig.host}:${grpcConfig.port}`;

const main = async () => {
  const server = new Mali();

  server.addService(SERVICE_PROTO, "WeatherService");
  server.use(WeatherService.implementation);

  await server.start(HOST_PORT);
  console.info(`gRPC Server is now listening on port ${grpcConfig.port}`);

  return {
    server,
  };
};

export default main;
