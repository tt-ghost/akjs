import Router from "koa-router";
import Module from "../../ChengApp/Module.js";
import Controller from "./Controller.js";
import Service from "./Service.js";
import model from "./model.js";

export default class User extends Module {
  constructor() {
    super("user");
    this.router = new Router();
    this.controller = new Controller();
    this.service = new Service();
    this.model = model(this.app);

    this.loadToApp();
  }
  routes() {
    this.router.get("/current", (ctx) => this.controller.getCurrent(ctx));
    this.router.get("/:userId", (ctx) => this.controller.getById(ctx));
    this.router.post("/", (ctx) => this.controller.create(ctx));
    this.router.put("/", (ctx) => this.controller.update(ctx));

    return this.router.routes();
  }
}
