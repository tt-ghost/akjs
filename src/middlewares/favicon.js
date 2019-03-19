module.exports = function () {
  return async (ctx, next) => {
    if (ctx.path !== '/favicon.ico') {
      await next()
    }
  }
}
