import globalUtil from "./utils/global.js";
import ChengApp from "./ChengApp/Application.js";

class App extends ChengApp {
  configCreated() {
    globalUtil(global);
  }
}

new App().start();
