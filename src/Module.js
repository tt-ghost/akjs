import Router from "koa-router";
import Base from "./Base.js";
import { bigCamelCase } from "./utils.js";

export default class Module extends Base {
  constructor(name) {
    super();
    this.name = name;
    this.router = new Router();
    // const getPath = (mvcName) => {
    //   return path.resolve(
    //     getProjectPath(),
    //     `src/module/${name}/${mvcName}.js`
    //   );
    // }
    // const controllerPath = getPath('Controller');
    // const servicePath = getPath('Service');
    // const modelPath = getPath('Model');

    // Promise.all([
    //   import(controllerPath),
    //   import(servicePath),
    //   import(modelPath),
    // ])
    // .then(res => {
    //   const [Controller, Service, Model] = res
    //   this.controller = new Controller.default();
    //   this.service = new Service.default();
    //   this.model = new Model.default();
    // })
  
    if (name && typeof name === 'string') {
      const bigCaseName = bigCamelCase(name)
      this.app.controller[bigCaseName] = {};
      this.app.service[bigCaseName] = {};
      this.app.model[bigCaseName] = {};
    }
  }

  loadToApp() {
    if (this.name && typeof this.name === 'string') {
      const bigCaseName = bigCamelCase(this.name)
      this.app.controller[bigCaseName] = this.controller;
      this.app.service[bigCaseName] = this.service;
      this.app.model[bigCaseName] = this.model;
    }
  }
}
