const Koa = require('koa')
const env = require('./config/env')()
const router = require('./controller')
const middlewares = require('./middlewares')
const dbUtil = require('./util/db')

// init database
const sqlFiles = ['user']
dbUtil.initDB(sqlFiles)

const app = new Koa()

// 加载中间件
middlewares(app)

// router
app.use(router.routes())

app.listen(env.PORT)

console.log(`server is runing on ${env.PORT} port`)
