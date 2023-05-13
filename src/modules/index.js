import User from "./user/index.js";
import Passport from "./passport/index.js";

export default (app) => {
  const { router } = app;

  router.use("/user", new User().routes());
  router.use("/passport", new Passport().routes());
};
