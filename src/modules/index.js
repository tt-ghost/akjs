// const Router from"koa-router";
import User from "./user/index.js";
import Passport from "./passport/index.js";

export default (app) => {
  const { router } = app;
  // User(app).routes())
  router.use("/user", User(app));
  router.use("/passport", Passport(app));
};
