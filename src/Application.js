import loadPlugin from "./loadPlugin.js";
import loadMiddleware from "./loadMiddleware.js";
import loadRouter from "./loadRouter.js";
import loadApp from "./loadApp.js";
import { isFunction } from './utils.js'

export default class Application {
  async load() {
    const app = loadApp();
    this.app = app;

    // 初始化配置
    await loadPlugin(app);

    // 配置生成后hook
    if (isFunction(this.configCreated)) {
      this.configCreated(app);
    }

    // 初始化中间件
    await loadMiddleware(app);

    // 初始化router
    await loadRouter(app);

    if (isFunction(this.ready)) this.ready()
  }
  ready() {}
  started() {}
  async start() {
    await this.load();
    const { app } = this;
    const { PORT = 8120 } = app.config.env || {};

    app.listen(PORT);
    console.log('\x1b[36m%s\x1b[0m', `server is runing on ${PORT} port`);
    if (isFunction(this.started)) this.started()
  }
}
