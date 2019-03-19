const Router = require('koa-router')
// const Service = require('../service/user')

const router = new Router()

/**
 * get current user
 * TODO: query sql
 */
router.get('/', ctx => {
  ctx.body = { username: 'current' }
})

router.get('/:userId', ctx => {
  const { userId } = ctx.params
  ctx.body = { userId }
})

/**
 * add user
 */
router.post('/', ctx => {
  // ctx.request
  console.log(111, ctx.request)
  ctx.body = { body: ctx.request.body }
})

/**
 * update user
 */
router.post('/', ctx => {
  ctx.body = { status: 200 }
})

module.exports = router
