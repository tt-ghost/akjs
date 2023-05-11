export default function favicon() {
  return async (ctx, next) => {
    if (ctx.path !== "/favicon.ico") {
      await next();
    }
  };
}

// export default (app) => {
//   app.use(favicon());
// };
