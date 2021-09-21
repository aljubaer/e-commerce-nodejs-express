export const {
  NODE_ENV = 'development',

  PORT = 5000,
  HOSTNAME = 'localhost',
  PROTOCOL = 'http',

  JWT_SECRET = '4d2ca599b4189f74a771f44b8a8d06f572208b5649f5ae216f8e94612a267ff0',
} = process.env;

export const APP_ORIGIN = `${PROTOCOL}://${HOSTNAME}:${PORT}`;

export const IN_PROD = NODE_ENV === 'production';

export const ONE_MINUTE = 60;

export const ONE_HOUR = 60 * ONE_MINUTE;

export const SALT_ROUND = 10;
