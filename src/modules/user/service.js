const BaseService = require('../../base/service')

class UserService extends BaseService {
  constructor() {
    super('modules/user/model')
  }

  /**
   * 获取当前用户信息
   * @param {String} ticket 登录的cookie字段
   */
  getCurrentUser(ticket) {
    return this.$model.getCurrentUser(ticket)
  }

  /**
   * 根据用户id获取用户信息
   * @param {Number} userId 用户ID
   */
  getUserById(userId) {
    return this.$model.getUserById(userId)
  }

  /**
   * 添加用户
   * @param {Object} _user 用户对象
   */
  addUser(_user) {
    console.log(888, this.$model.default, _user)
    const user = Object.assign(this.$model.default, _user)
    return this.$model.addUser(user)
  }
}

module.exports = UserService
