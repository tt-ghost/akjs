const bodyParser = require("koa-bodyparser");

module.exports = (app) => {
  app.use(
    bodyParser({
      formLimit: "1mb",
    })
  );
};
