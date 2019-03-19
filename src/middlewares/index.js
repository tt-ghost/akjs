const session = require('./session')
const bodyParser = require('./body-parser')
const proxyCDN = require('./proxy-cdn')
const favicon = require('./favicon')

module.exports = function (app) {
  bodyParser(app)
  session(app)
  proxyCDN(app)
  app.use(favicon())
}
