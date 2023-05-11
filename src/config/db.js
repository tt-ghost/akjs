/**
 * DB config
 */
const DB_CONFIG = {
  dev: {
    database: "koa_startkit",
    user: "root",
    password: "123456",
    port: "3306",
    host: "localhost",
    connectTimeout: 30 * 1000,
  },
  prod: {
    database: "koa_startkit",
    user: "root",
    password: "123456",
    port: "3306",
    host: "localhost",
    connectTimeout: 30 * 1000,
  },
};

export default DB_CONFIG[process.env.NODE_ENV];
