const env = process.env.CJ_ENV || "dev";
const path = require("path");

const envConfPath = path.resolve(__dirname, `../config/${env}.conf.js`);
const defaultConfPath = path.resolve(__dirname, "../config/default.conf.js");

module.exports = (app) => {
  const envConf = require(envConfPath);
  const defaultConf = require(defaultConfPath);

  if (typeof defaultConf === "function") {
    envConf(app);
  }
  if (typeof envConf === "function") {
    envConf(app);
  }
};
