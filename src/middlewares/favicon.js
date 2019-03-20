function favicon() {
  return (ctx, next) => {
    if (ctx.path !== '/favicon.ico') {
      next()
    }
  }
}

module.exports = (app) => {
  app.use(favicon())
}
