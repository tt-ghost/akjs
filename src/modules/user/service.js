const BaseService = require('../../base/service')

class UserService extends BaseService {
  constructor() {
    super('modules/user/model')
    console.log(this.model, 2)
  }

  getCurrentUser(ticket) {
    return this.model.getCurrentUser(ticket)
  }

  getUserById(userId) {
    return this.model.getUserById(userId)
  }

  addUser(_user) {
    console.log(888, this.model.default, _user)
    const user = Object.assign(this.model.default, _user)
    return this.model.addUser(user)
  }
}

module.exports = UserService
