import path from "path";
import { getProjectPath } from "./utils.js";

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

  if (defaultConf && typeof defaultConf.default === "function") {
    defaultConf.default(app);
  }
  if (envConf && typeof envConf.default === "function") {
    envConf.default(app);
  }
};
