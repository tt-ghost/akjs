const BaseService = require('../../base/service')
/**
 * passport service
 */
class PassportService extends BaseService {
  constructor() {
    super('modules/passport/model')
  }

  login({ username, pwd }) {
    // check username and pwd
    if (username && pwd) {
      return this.model.login({ username, pwd })
    }
    return new G.PromiseError('用户名或密码错误', 400)
  }
}

module.exports = PassportService
