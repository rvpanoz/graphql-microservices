import path from "path";
import getWeatherDataByCity from "./getWeatherDataByCity";
import transformWeatherByCity from "./transformWeatherDataByCity";

const protoPath = path.resolve(__dirname, "_proto/Weather.proto");

export default {
  protoPath,
  implementation: {
    WeatherService: {
      getWeatherDataByCity,
      transformWeatherByCity,
    },
  },
};
