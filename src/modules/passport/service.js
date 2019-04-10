const BaseService = require('../../base/service')
/**
 * passport service
 */
class PassportService extends BaseService {
  constructor() {
    super('modules/passport/model')
  }

  login({ username, pwd }) {
    const rules = [
      { rule: !username, message: 'username未传', code: 400 },
      { rule: !pwd, message: 'pwd未传', code: 400 }
    ]
    return this.$validate(rules, () => this.$model.login({ username, pwd }))
  }

  /**
   * 注册用户
   * @param {String} param0 用户名
   */
  reg({ username, pwd }) {
    const rules = [
      { rule: !username, message: 'username未传', code: 400 },
      { rule: !pwd, message: 'pwd未传', code: 400 }
    ]
    return this.$validate(rules, () => this.$model.reg({ username, pwd }))
  }
}

module.exports = PassportService
