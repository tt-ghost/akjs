const UserModel = require('../model/user')

class UserService {
  static getCurrentUser(ticket) {
    return UserModel.getCurrentUser(ticket)
  }

  static getUserById(userId) {
    return UserModel.getUserById(userId)
  }

  static addUser(_user) {
    const user = Object.assign(UserModel.default, _user)
    return UserModel.addUser(user)
  }
}

module.exports = UserService
