const Koa = require('koa')
const Router = require('koa-router')
const config = require('./config')
const UserController = require('./controller/user')
const mysql = require('./util/mysql')

mysql.init()

const router = new Router()
const app = new Koa()

router.get('/user/insert', UserController.insertUser)
router.get('/user/:userName', UserController.getUserByName)
app.use(router.routes())
app.listen(config.port)
