import loadPlugin from "./loadPlugin.js";
// import loadConfig from "./loadConfig.js";
import loadMiddleware from "./loadMiddleware.js";
import loadRouter from "./loadRouter.js";
// import DBUtil from "../utils/db.js";
import loadApp from "./loadApp.js";
// import Module from "./Module.js";

// const initSql = () => {
//   const sqlFiles = [];
//   new DBUtil().$initDB(sqlFiles);
// };

export default class Application {
  async load() {
    const app = loadApp();
    this.app = app;

    // 初始化配置
    await loadPlugin(app);
    // await loadConfig(app);
    console.log("app.config: ", app.config);

    // 配置生成后hook
    if (typeof this.configCreated === "function") {
      this.configCreated(app);
    }

    // 初始化数据库
    // initSql();

    // 初始化中间件
    await loadMiddleware(app);

    // 初始化router
    await loadRouter(app);

    await app.modelSync();
  }
  async start() {
    await this.load();
    const { app } = this;
    const { PORT = 8120 } = app.config.env || {};
    app.listen(PORT);
    console.log(`server is runing on ${PORT} port`);
    if (typeof this.onReady === "function") {
      this.onReady(app);
    }
  }
}
