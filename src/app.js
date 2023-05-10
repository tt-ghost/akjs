// const Koa = require("koa");
// const env = require("./config/env")();
// const router = require("./modules");
// const middlewares = require("./middlewares");
// const DBUtil = require("./utils/db");
const globalUtil = require("./utils/global");
const ChengApp = require("./ChengApp/app");

class App extends ChengApp {
  constructor() {
    super();
    console.log("constructor: ", this.app);
    // globalUtil(global);

    // init database
    // const sqlFiles = ["user"];
    // new DBUtil().$initDB(sqlFiles);

    // const app = new Koa();

    // 加载中间件
    // middlewares(app);

    // router
    // app.use(router.routes());
    // app.use(router.allowedMethods());

    // app.listen(env.PORT);

    // console.log(`server is runing on ${env.PORT} port`);
  }
  configCreated(app) {
    console.log("configCreated: ", app);
    globalUtil(global);
  }
}

new App();
