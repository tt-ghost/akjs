var Koa = require('koa')
var Router = require('koa-router')
var config = require('./config')
var UserController = require('./controller/user.js')
var mysql = require('./lib/mysql.js')

mysql.init()

var router = new Router()
var app = new Koa()

router.get('/user/insert', UserController.insertUser)
router.get('/user/:userName', UserController.getUserByName)
app.use(router.routes())
app.listen(config.port)