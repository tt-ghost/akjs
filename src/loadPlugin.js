import path from "path";
import { getProjectPath, isFunction } from "./utils.js";
import loadConfig from "./loadConfig.js";

export default async (app) => {
  if (!app.config) app.config = {};

  console.log('getProjectPath()', getProjectPath())
  const pluginPath = path.resolve(getProjectPath(), `src/config/plugin.js`);
  await loadConfig(app);

  const pluginConf = await import(pluginPath);
  let plugin = {};
  if (pluginConf && typeof pluginConf.default === "object") {
    plugin = pluginConf.default || {};
  }
  Object.keys(plugin).map((key) => {
    if (!plugin[key].enable) delete app.config[key];

    if (isFunction(plugin[key].load)) {
      plugin[key].load(app);
    }
  });

  app.plugin = plugin;
};
