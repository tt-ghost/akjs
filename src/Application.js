import loadPlugin from "./loadPlugin.js";
import loadMiddleware from "./loadMiddleware.js";
import loadRouter from "./loadRouter.js";
import loadApp from "./loadApp.js";
import { isFunction } from "./utils.js";

export default class Application {
  async load() {
    const app = loadApp();
    this.app = app;

    // 初始化配置
    await loadPlugin(app);

    // 配置生成后hook
    if (isFunction(this.configReady)) {
      this.configReady();
    }

    // 初始化中间件
    await loadMiddleware(app);

    // 初始化router
    await loadRouter(app);

    if (isFunction(this.ready)) this.ready();
  }
  configReady() {}
  ready() {}
  started() {}
  async start() {
    await this.load();
    const { app } = this;
    const { PORT = 8120 } = app.config.server || {};

    app.listen(PORT);

    console.log("\x1b[36m%s\x1b[0m", `server is runing on ${PORT} port`);
    console.log("\x1b[36m%s\x1b[0m", `http://127.0.0.1:${PORT}`);

    if (isFunction(this.started)) this.started();
  }
}
