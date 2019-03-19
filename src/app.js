const Koa = require('koa')
const ENV = require('./config/env')
const routers = require('./routers')
const middlewares = require('./middlewares')
const dbUtil = require('./util/db')

// init database
const sqlFiles = []
dbUtil.initDB(sqlFiles)

const env = ENV()
const app = new Koa()

// 加载中间件
middlewares(app)
// router
app.use(routers.routes())

app.listen(env.PORT)

console.log(`server is runing on ${env.PORT} port`)
