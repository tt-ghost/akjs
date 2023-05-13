import Koa from "koa";

export default (() => {
  let app = null;
  return () => {
    if (app) return app;
    app = new Koa();
    return app;
  };
})();
