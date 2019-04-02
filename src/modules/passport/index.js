/**
 * passport router
 */
const Router = require('koa-router')
const Service = require('./service')

const service = new Service()
const router = new Router()

/**
 * login
 */
router.post('/login', async ctx => {
  const { username, pwd } = ctx.request
  const [err] = await G.ato(service.login({ username, pwd }))
  G.res(err, ctx, () => {
    ctx.body = {
      message: '登录成功'
    }
  })
})

/**
 * logout
 */
router.get('/logout', async ctx => {
  ctx.body = {
    message: '退出成功'
  }
})

/**
 * 注册
 */
router.post('/reg', async ctx => {
  ctx.body = {
    message: '注册成功'
  }
})

/**
 * forget pwd
 */
router.post('/forget', ctx => {
  ctx.body = { message: '忘记密码' }
})

/**
 * forget pwd
 */
router.post('/forget', ctx => {
  ctx.body = { message: '忘记密码' }
})

module.exports = router
