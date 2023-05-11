import Router from "koa-router";
import getRouter from "../modules/index.js";

const ROUTER_BASE = "../modules/index.js";

export default async (app) => {
  const { config } = app;
  const { prefix = "/" } = config.router || {};
  const hasRouter = app.router instanceof Router;
  app.router = hasRouter
    ? app.router
    : new Router({
        prefix,
      });

  getRouter(app);

  app.use(app.router.routes());
  app.use(app.router.allowedMethods());
};
