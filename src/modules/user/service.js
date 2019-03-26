const Model = require('./model')

const model = new Model()

class UserService {
  static getCurrentUser(ticket) {
    return model.getCurrentUser(ticket)
  }

  static getUserById(userId) {
    return model.getUserById(userId)
  }

  static addUser(_user) {
    console.log(888, model.default, _user)
    const user = Object.assign(model.default, _user)
    return model.addUser(user)
  }
}

module.exports = UserService
