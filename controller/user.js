var UserModal = require('../model/user.js')

exports.getUserByName = async (ctx, next) => {
  await UserModal.getUserByName()
  .then(res => {
    ctx.response.body = res
  })
}

exports.insertUser = async (ctx, next) => {
  var user = {
    name: 'tt',
    avator: 'http://222'
  }
  await UserModal.insertUser(user)
  .then(res => {
    return ctx.response.body = {message: 'ok'}
  })
}

