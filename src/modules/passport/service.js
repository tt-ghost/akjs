/**
 * passport service
 */
const Model = require('./model')

const model = new Model()
class PassportService {
  static login({ username, pwd }) {
    // check username and pwd
    if (username && pwd) {
      return model.login({ username, pwd })
    }
    return Promise.reject(new Error('用户名或密码错误'))
  }
}

module.exports = PassportService
