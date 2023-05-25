import Koa from "koa";

export default (() => {
  let app = null;
  return () => {
    if (app) return app;

    app = new Koa();

    app.controller = {};
    app.service = {};
    app.model = {};

    return app;
  };
})();
