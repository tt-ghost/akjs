const Router = require('koa-router')
const UserService = require('../service/user')

// const userService = new UserService()
const router = new Router()

/**
 * get current user
 * TODO: query sql
 */
router.get('/', async ctx => {
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
  const current = result[0]
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
