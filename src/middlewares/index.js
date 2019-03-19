const session = require('./session')
const bodyParser = require('./body-parser')
const proxyCDN = require('./proxy-cdn')
const favicon = require('./favicon')

module.exports = (app) => async (ctx, next) => {
  app.use(bodyParser())
  app.use(session(app))
  app.use(proxyCDN())
  app.use(favicon())
  await next()
}
