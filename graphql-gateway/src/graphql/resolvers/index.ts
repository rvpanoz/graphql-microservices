import getWeatherDataByCity from "./getWeatherDataByCity";

const resolvers: any = {
  Query: {
    getWeatherDataByCity,
  },
};

export default resolvers;
