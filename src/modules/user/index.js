// import Router from "koa-router";
import Controller from "./Controller.js";

export default (app) => {
  const { router } = app;
  // const router = new Router();
  const controller = new Controller();

  router.get("/current", controller.getCurrent);
  router.get("/:userId", controller.getById);
  router.post("/", controller.create);
  router.put("/", controller.update);

  return router;
};
