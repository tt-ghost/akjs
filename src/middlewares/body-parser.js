const bodyParser = require('koa-bodyparser')

module.exports = () => async (ctx, next) => {
  bodyParser({
    formLimit: '1mb'
  })(ctx, next)
  await next()
}
