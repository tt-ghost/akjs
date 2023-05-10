const path = require("path");

module.exports = (app) => {
  const { config } = app;
  const middleware = config.middleware || [];
  middleware.forEach((mid) => {
    const midPath = path.resolve(__dirname, `../middlewares/${mid}`);
    const midFn = require(midPath);

    if (typeof midPath === "function") {
      app.use(midFn(app));
    }
  });
};
