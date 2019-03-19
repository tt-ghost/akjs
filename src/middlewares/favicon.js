module.exports = () => async (ctx, next) => {
  if (ctx.path !== '/favicon.ico') {
    await next()
  }
}
