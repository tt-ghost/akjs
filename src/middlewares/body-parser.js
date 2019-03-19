const bodyParser = require('koa-bodyparser')

module.exports = () => (ctx, next) => bodyParser({
  formLimit: '1mb'
})(ctx, next)
