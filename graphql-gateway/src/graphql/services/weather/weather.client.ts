import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";

const packageDefinition: any = protoLoader.loadSync(
  __dirname + "/weather.proto"
);

const proto: any = grpc.loadPackageDefinition(packageDefinition).weatherService;

const interceptorAuth: any = (options: any, nextCall: any) =>
  new grpc.InterceptingCall(nextCall(options), {
    start: function (metadata, listener, next) {
      // metadata.add("x-api-key", "myapikey");
      next(metadata, listener);
    },
  });

const options: any = {
  "grpc.ssl_target_name_override": "localhost",
  interceptors: [interceptorAuth],
};

const grpcCredentials = grpc.credentials.createInsecure();

export default () =>
  new proto.WeatherService("localhost:50051", grpcCredentials, options);
