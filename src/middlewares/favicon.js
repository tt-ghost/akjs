module.exports = () => (ctx) => {
  console.log(888, ctx.path)
  if (ctx.path !== '/favicon.ico') {
    // next()
  }
}
