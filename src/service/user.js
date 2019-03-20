const UserModel = require('../model/user')

class UserService {
  static getCurrentUser(ticket) {
    return UserModel.getCurrentUser(ticket)
  }

  static getUserById(userId) {
    // return UserModel.getUserById(userId)
    return UserModel.getUserById(userId)
  }

  static addUser(_user) {
    const user = Object.assign({ status: 'pending' }, _user)
    return UserModel.addUser(user)
  }
}

module.exports = UserService
