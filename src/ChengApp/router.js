const Router = require("koa-router");

const ROUTER_BASE = "../modules";

module.exports = (app) => {
  const { config } = app;
  const { prefix = "/" } = config.router || {};
  const hasRouter = app.router instanceof Router;
  app.router = hasRouter
    ? app.router
    : new Router({
        prefix,
      });

  const routerModule = require(ROUTER_BASE);
  if (typeof routerModule === "function") {
    routerModule(app);

    app.use(app.router.routes());
    app.use(app.router.allowedMethods());
  }
};
