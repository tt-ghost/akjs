import Router from "koa-router";
import Base from "./Base.js";
import { bigCamelCase } from "./utils.js";

export default class Module extends Base {
  constructor(name) {
    super();
    this.name = name;
    this.router = new Router();
  }

  loadToApp() {
    if (this.name && typeof this.name === "string") {
      const bigCaseName = bigCamelCase(this.name);
      this.app.controller[bigCaseName] = this.controller;
      this.app.service[bigCaseName] = this.service;
      this.app.model[bigCaseName] = this.model;
    }
  }
}
