export default (app) => {
  const { config } = app;
  const { NODE_ENV } = process.env;

  config.middleware = [
    // "error",
    // "body-parser",
    // "session",
    // "proxy-cdn",
    // "favicon",
  ];
  config.db = {
    database: "koa_startkit",
    user: "root",
    password: "123456",
    option: {
      port: "3306",
      host: "localhost",
      connectTimeout: 30 * 1000,
      dialect: "mysql",
    },
  };
  config.env = {
    // 后台启动端口
    PORT: 8120,
    NODE_ENV,
    IS_DEV: NODE_ENV === "dev",
    IS_TEST: NODE_ENV === "test",
    IS_STAGE: NODE_ENV === "stage",
    IS_PROD: NODE_ENV === "prod",
  };
};
