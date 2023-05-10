// const Router = require("koa-router");
const User = require("./user");
const Passport = require("./passport");

// const router = new Router({
//   prefix: "/api",
// });

// router.use("/user", User.routes());
// router.use("/passport", Passport.routes());

// module.exports = router;
module.exports = (app) => {
  const { router } = app;
  router.use("/user", User.routes());
  router.use("/passport", Passport.routes());
};
