import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const env = process.env.CJ_ENV || "dev";

const envConfPath = path.resolve(__dirname, `../config/${env}.conf.js`);
const defaultConfPath = path.resolve(__dirname, "../config/default.conf.js");

export default (app) => {
  const envConf = import(envConfPath);
  const defaultConf = import(defaultConfPath);
  if (typeof defaultConf === "function") {
    envConf(app);
  }
  if (typeof envConf === "function") {
    envConf(app);
  }
};
