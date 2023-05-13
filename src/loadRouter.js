import Router from "koa-router";
import path from "path";
import { getProjectPath } from "./utils.js";

export default async (app) => {
  const { config } = app;
  const { prefix = "/" } = config.router || {};
  if (!(app.router instanceof Router)) {
    app.router = new Router({
      prefix,
    });
  }

  const routerModule = path.resolve(getProjectPath(), `src/module/index.js`);
  const modu = await import(routerModule);
  if (modu && typeof modu.default === "function") {
    await modu.default(app);
  }

  app.use(app.router.routes());
  app.use(app.router.allowedMethods());
};
