import path from "path";
import { getProjectPath, isFunction } from "./utils.js";

export default async (app) => {
  if (!app.config) app.config = {};

  const env = process.env.CJ_ENV || "dev";
  const projectPath = getProjectPath();
  const envConfPath = path.resolve(projectPath, `src/config/${env}.conf.js`);
  const defaultConfPath = path.resolve(
    projectPath,
    "src/config/default.conf.js"
  );

  let envConf = null;
  try {
    envConf = await import(envConfPath);
  } catch (e) {}

  let defaultConf = null;
  try {
    defaultConf = await import(defaultConfPath);
  } catch (e) {}

  if (defaultConf && isFunction(defaultConf.default)) {
    defaultConf.default(app);
  }
  if (envConf && isFunction(envConf.default)) {
    envConf.default(app);
  }
};
