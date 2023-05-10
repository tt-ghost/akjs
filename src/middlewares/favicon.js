module.exports = function favicon() {
  return async (ctx, next) => {
    if (ctx.path !== "/favicon.ico") {
      await next();
    }
  };
};

// module.exports = (app) => {
//   app.use(favicon());
// };
