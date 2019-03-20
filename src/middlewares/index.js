const session = require('./session')
const bodyParser = require('./body-parser')
const proxyCDN = require('./proxy-cdn')
const favicon = require('./favicon')

module.exports = (app) => async (ctx, next) => {
  bodyParser()(ctx, next)
  session(app)(ctx, next)
  proxyCDN()(ctx, next)
  favicon()(ctx, next)
}
