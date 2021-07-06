import WeatherClient from "../services/weather/weather.client";

const client = WeatherClient();

interface Params {
  city: string;
}

export default (root: any, params: Params) => {
  return new Promise((resolve: any, reject: any) => {
    client.getWeatherDataByCity(params, function (err: any, response: any) {
      if (err) {
        return reject(err);
      }
      resolve(response);
    });
  });
};
