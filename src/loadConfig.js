import path from "path";
import { getProjectPath, isFunction } from "./utils.js";

export default async (app) => {
  if (!app.config) app.config = {};

  const env = process.env.CJ_ENV || "dev";
  const envConfPath = path.resolve(
    getProjectPath(),
    `src/config/${env}.conf.js`
  );
  const defaultConfPath = path.resolve(
    getProjectPath(),
    "src/config/default.conf.js"
  );

  const envConf = await import(envConfPath);
  const defaultConf = await import(defaultConfPath);

  if (defaultConf && isFunction(defaultConf.default)) {
    defaultConf.default(app);
  }
  if (envConf && isFunction(envConf.default)) {
    envConf.default(app);
  }
};
