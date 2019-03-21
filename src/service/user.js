const UserModel = require('../model/user')

const userModel = new UserModel()

class UserService {
  static getCurrentUser(ticket) {
    return userModel.getCurrentUser(ticket)
  }

  static getUserById(userId) {
    return userModel.getUserById(userId)
  }

  static addUser(_user) {
    console.log(888, userModel.default, _user)
    const user = Object.assign(userModel.default, _user)
    return userModel.addUser(user)
  }
}

module.exports = UserService
