const session = require('koa-session')
const SQLStore = require('koa-mysql-session')
const db = require('../config/db')

// init db
const sessionConfig = {
  ...db
}
// 配置 session 中间件
module.exports = app => {
  app.use(session({
    key: 'KOA_STARTKIT',
    store: new SQLStore(sessionConfig)
  }, app))
}
