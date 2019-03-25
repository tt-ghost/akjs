/**
 * passport router
 */
const Router = require('koa-router')
// const Service = require('./service')

const router = new Router()

/**
 * login
 */
router.post('/login', async ctx => {
  ctx.body = {
    username: 'orange'
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
