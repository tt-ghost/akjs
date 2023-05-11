import Koa from "koa";
import config from "./config.js";
import middleware from "./middleware.js";
import router from "./router.js";
import DBUtil from "../utils/db.js";

const initSql = () => {
  const sqlFiles = ["user"];
  new DBUtil().$initDB(sqlFiles);
};

export default class App {
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

    // 初始化router
    router(app);

    const { PORT = 8120 } = app.config.env || {};

    app.listen(PORT);
    console.log(`server is runing on ${PORT} port`);

    if (typeof this.onReady === "function") {
      this.onReady(app);
    }
  }
}
