import Base from "./Base.js";

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
    }
  }
}
