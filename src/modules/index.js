// const Router from"koa-router";
import User from "./user/index.js";
import Passport from "./passport/index.js";

// const router = new Router({
//   prefix: "/api",
// });

// router.use("/user", User.routes());
// router.use("/passport", Passport.routes());

// export default router;
export default (app) => {
  const { router } = app;
  router.use("/user", User(app).routes());
  router.use("/passport", Passport(app).routes());
};
