import path from "path";
import { getProjectPath } from "./utils.js";
import loadConfig from "./loadConfig.js";

export default async (app) => {
  if (!app.config) app.config = {};

  // const env = process.env.CJ_ENV || "dev";
  const pluginPath = path.resolve(getProjectPath(), `src/config/plugin.js`);
  await loadConfig(app);

  const pluginConf = await import(pluginPath);
  let plugin = {};
  if (pluginConf && typeof pluginConf.default === "object") {
    plugin = pluginConf.default || {};
  }
  Object.keys(plugin).map((key) => {
    if (!plugin[key].enable) delete app.config[key];

    if (typeof plugin[key].load === "function") {
      plugin[key].load(app);
    }
  });

  app.plugin = plugin;
};
