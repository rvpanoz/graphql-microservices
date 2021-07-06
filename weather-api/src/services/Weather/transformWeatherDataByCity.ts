export default async function (ctx: any) {
  const data: any = ctx.req.data;

  ctx.res = {
    transformedWeatherByCity: data,
  };
}
