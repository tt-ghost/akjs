export default function error() {
  return async (ctx, next) => {
    try {
      console.log(323);
      await next();
    } catch (e) {
      await new G.PromiseError(e);
    }
  };
}

// export default (app) => {
//   app.use(error());
// };
