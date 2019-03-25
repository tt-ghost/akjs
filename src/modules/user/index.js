const Router = require('koa-router')
const UserService = require('./service')

const router = new Router()

/**
 * get current user
 */
router.get('/', async ctx => {
  // const token = ctx.cookies.get('token')
  const result = await UserService.getCurrentUser()
  const current = result[0]
  if (current) {
    ctx.body = current
  } else {
    ctx.status = 404
  }
})

/**
 * 通过userId获取用户信息
 */
router.get('/:userId', async ctx => {
  const { userId } = ctx.params
  const result = await UserService.getUserById(userId)
  console.log(result, 99)
  const current = result
  if (current) {
    ctx.body = current
  } else {
    ctx.status = 404
  }
})

/**
 * add user
 */
router.post('/', async ctx => {
  // ctx.request
  const user = ctx.request.body
  const current = await UserService.addUser(user)
  ctx.body = { current }
})

/**
 * update user
 */
router.put('/', ctx => {
  ctx.body = { status: 200 }
})

module.exports = router
