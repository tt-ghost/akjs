/**
 * passport router
 */
const Router = require('koa-router')
const Service = require('./service')

const router = new Router()

/**
 * login
 */
router.post('/login', async ctx => {
  const { username, pwd } = ctx.request
  await Service.login({ username, pwd })
  ctx.body = {
    msg: '登录成功！'
  }
})

/**
 * logout
 */
router.get('/logout', async ctx => {
  ctx.body = {
    msg: '退出成功'
  }
})

/**
 * 注册
 */
router.post('/reg', async ctx => {
  ctx.body = {
    msg: '注册成功'
  }
})

/**
 * forget pwd
 */
router.post('/forget', ctx => {
  ctx.body = { msg: '忘记密码' }
})

/**
 * forget pwd
 */
router.post('/forget', ctx => {
  ctx.body = { msg: '忘记密码' }
})

module.exports = router
