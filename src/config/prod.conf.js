export default (app) => {
  const { config } = app;

  config.db = {
    database: "koa_startkit",
    user: "root",
    password: "123456",
    port: "3306",
    host: "localhost",
    connectTimeout: 30 * 1000,
  };
  // config.env = {};
};
