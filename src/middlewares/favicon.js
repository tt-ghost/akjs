module.exports = () => async (ctx, next) => {
  console.log(888, ctx.path)
  if (ctx.path !== '/favicon.ico') {
    await next()
  }
}
