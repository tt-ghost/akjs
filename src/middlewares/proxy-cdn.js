const proxy = require('koa-proxy')
const convert = require('koa-convert')

// 配置 proxy cdn 中间件
module.exports = function (app) {
  app.use(convert(proxy({
    match: /^\/pkg\/lib/,
    map: function (path) {
      return '/libraries' + path.replace('/pkg/lib', '')
    },
    host: 'http://api.cdnjs.com',
    jar: true
  })))
}
