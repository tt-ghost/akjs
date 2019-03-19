const bodyParser = require('koa-bodyparser')

module.exports = function (app) {
  app.use(bodyParser({
    formLimit: '1mb'
  }))
}
