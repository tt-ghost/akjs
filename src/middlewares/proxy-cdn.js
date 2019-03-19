const proxy = require('koa-proxy')
const convert = require('koa-convert')

// 配置 proxy cdn 中间件
module.exports = () => async (ctx, next) => {
  convert(proxy({
    match: /^\/pkg\/lib/,
    map: path => `/beforepath${path.replace('/pkg/lib', '')}`,
    host: 'http://api.cdnjs.com',
    jar: true
  }))(ctx, next)
  await next()
}
