export const serviceConfig = {
  weatherService: process.env.WEATHER_SVC_URL,
};

export const cacheConfig = {
  host: process.env.REDIS_HOST || "localhost",
  port: parseInt(`${process.env.REDIS_PORT || 6379}`, 10),
  password: process.env.REDIS_PASSWORD || undefined,
};
