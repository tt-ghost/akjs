const Koa = require("koa");
const config = require("./config");
const middleware = require("./middleware");
const DBUtil = require("../utils/db");

const initSql = () => {
  const sqlFiles = ["user"];
  new DBUtil().$initDB(sqlFiles);
};

module.exports = class App {
  constructor() {
    const app = new Koa();
    this.app = app;
    app.config = app.config || {};

    // 初始化配置
    config(app);
    console.log("app.config: ", app.config);

    // 配置生成后hook
    if (typeof this.configCreated === "function") {
      this.configCreated(app);
    }

    // 初始化数据库
    initSql();

    // 初始化中间件
    middleware(app);

    const { PORT = 8120 } = app.config.env || {};

    app.listen(PORT);
    console.log(`server is runing on ${PORT} port`);

    if (typeof this.onReady === "function") {
      this.onReady(app);
    }
  }
};
