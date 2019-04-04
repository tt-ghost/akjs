function error() {
  return async (ctx, next) => {
    try {
      await next()
    } catch (e) {
      await new G.PromiseError(e)
    }
  }
}

module.exports = app => {
  app.use(error())
}
