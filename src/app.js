import globalUtil from "./utils/global.js";
import ChengApp from "./ChengApp/Application.js";

class App extends ChengApp {
  constructor() {
    super();
    console.log("constructor: ", this.app);
  }
  main() {
    console.log("main");
  }
  configCreated(app) {
    console.log("configCreated: ", app);
    globalUtil(global);
  }
}

new App();
