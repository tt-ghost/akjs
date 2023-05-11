import Router from "koa-router";
import Service from "./service.js";

const service = new Service();
// const router = new Router();

export default (app) => {
  // const { router } = app;
  const router = new Router();
  /**
   * get current user
   */
  router.get("/current", async (ctx) => {
    // const token = ctx.cookies.get('token')
    console.log("/current");
    const [err, result] = await G.ato(service.getCurrentUser());
    G.res(err, ctx, () => {
      ctx.body = {
        data: result,
      };
    });
  });

  /**
   * 通过userId获取用户信息
   */
  router.get("/:userId", async (ctx) => {
    const { userId } = ctx.params;
    const [err, result] = await G.ato(service.getUserById(userId));
    G.res(err, ctx, () => {
      ctx.body = {
        data: result,
      };
    });
  });

  /**
   * add user
   */
  router.post("/", async (ctx) => {
    // ctx.request
    const user = ctx.request.body;
    const [err, result] = await G.ato(service.addUser(user));
    G.res(err, ctx, () => {
      ctx.body = {
        data: result,
      };
    });
  });

  /**
   * update user
   */
  router.put("/", (ctx) => {
    ctx.body = { status: 200 };
  });
  return router;
};
