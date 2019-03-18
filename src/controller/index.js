const Router = require('koa-router')
const User = require('./user')

const router = new Router({
  prefix: '/api'
})

router.use('/user', User.routes)
