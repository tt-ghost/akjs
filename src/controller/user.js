const Router = require('koa-router')
const Service = require('../service/user')

const router = new Router()

exports.getUserByName = async (ctx) => {
  ctx.response.body = { user: '22' }
}

router.put('/', Service.addUser)

module.exports = router
