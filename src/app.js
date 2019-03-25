const Koa = require('koa')
const env = require('./config/env')()
const router = require('./modules')
const middlewares = require('./middlewares')
const DBUtil = require('./util/db')

// init database
const sqlFiles = ['user']
new DBUtil().$initDB(sqlFiles)

const app = new Koa()

// 加载中间件
middlewares(app)

// router
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(env.PORT)

console.log(`server is runing on ${env.PORT} port`)
