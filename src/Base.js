import loadApp from "./loadApp.js";

export default class Base {
  get app() {
    return loadApp();
  }
  // constructor() {
  //   console.log(334, this.app instanceof Koa);
  // }
}
