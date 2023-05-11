/**
 * passport router
 */
import Router from "koa-router";
// const Router = require("koa-router");
import Service from "./service.js";

const service = new Service();
export default (app) => {
  const router = new Router();
  // const { router } = app;
  router.get("/test", async (ctx) => {
    ctx.body = {
      message: "test",
    };
  });
  /**
   * login
   */
  router.post("/login", async (ctx) => {
    const { username, pwd } = ctx.request;
    const [err] = await G.ato(service.login({ username, pwd }));
    G.res(err, ctx, () => {
      ctx.body = {
        message: "登录成功",
      };
    });
  });

  /**
   * logout
   */
  router.get("/logout", async (ctx) => {
    // TODO: remove cookie
    // ctx.cookie.set()
    ctx.status = 302;
    ctx.redirect = "/login";
  });

  /**
   * 注册
   */
  router.post("/reg", async (ctx) => {
    const [err] = await G.ato(service.reg());
    G.res(err, ctx, () => {
      ctx.status = 302;
      ctx.redirect = "/";
    });
  });

  /**
   * forget pwd
   */
  router.post("/forget", (ctx) => {
    ctx.body = { message: "忘记密码" };
  });

  return router;
};
// export default router;
