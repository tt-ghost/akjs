const session = require('koa-session')
const SQLStore = require('koa-mysql-session')
const DB = require('../config/db')

// init db
const sessionConfig = {
  ...DB
}
// 配置 session 中间件
module.exports = app => (ctx, next) => session({
  key: 'KOA_STARTKIT',
  store: new SQLStore(sessionConfig)
}, app)(ctx, next)
