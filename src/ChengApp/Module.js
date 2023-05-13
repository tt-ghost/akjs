import path from "path";
import Base from "./Base.js";
import { getProjectPath } from "./utils.js";

export default class Module extends Base {
  constructor(name) {
    super();
    this.name = name;

    if (!this.app.controller) this.app.controller = {};
    if (!this.app.service) this.app.service = {};
    if (!this.app.model) this.app.model = {};

    if (name) {
      this.app.controller[name] = {};
      this.app.service[name] = {};
      this.app.model[name] = {};
    }
  }
  loadToApp() {
    if (this.name) {
      this.app.controller[this.name] = this.controller;
      this.app.service[this.name] = this.service;
      this.app.model[this.name] = this.model;

      // const modulePath = path.resolve(
      //   getProjectPath(),
      //   `src/modules/${this.name}`
      // );

      // const ControllerModule = await import(
      //   path.resolve(modulePath, "Controller.js")
      // );
      // if (ControllerModule && typeof ControllerModule.default === "function") {
      //   this.app.controller[this.name] = new ControllerModule.default();
      // }

      // const ServiceModule = await import(
      //   path.resolve(modulePath, "Service.js")
      // );
      // if (ServiceModule && typeof ServiceModule.default === "function") {
      //   this.app.service[this.name] = new ServiceModule.default();
      // }

      // const ModelModule = await import(path.resolve(modulePath, "Model.js"));
      // if (ModelModule && typeof ModelModule.default === "function") {
      //   this.app.model[this.name] = new ModelModule.default();
      // }
    }
  }
}
