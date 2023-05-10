const error = require("./error");
const session = require("./session");
const bodyParser = require("./body-parser");
const proxyCDN = require("./proxy-cdn");
const favicon = require("./favicon");

module.exports = (app) => {
  error(app);
  bodyParser(app);
  session(app);
  proxyCDN(app);
  favicon(app);
};
