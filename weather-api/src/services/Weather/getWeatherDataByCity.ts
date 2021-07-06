export default async function (ctx: any) {
  // In this file a request to a 3rd party datasource could be made
  // in order to get the weather data;

  const city: string = ctx.req.city;

  ctx.res = {
    cod: "1204",
    city: {
      name: city,
    },
    list: [
      {
        coord: {
          lat: "1234",
          lon: "4321",
        },
        temp: {
          morn: 10090099,
        },
      },
    ],
  };
}
