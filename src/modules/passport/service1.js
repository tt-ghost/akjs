import BaseService from "../../base/service.js";
/**
 * passport service
 */
export default class PassportService extends BaseService {
  constructor() {
    super("modules/passport/model.js");
  }

  login({ username, pwd }) {
    const rules = [
      { rule: !username, message: "username未传" },
      { rule: !pwd, message: "pwd未传" },
    ];
    return this.$validate(rules, () => this.$model.login({ username, pwd }));
  }

  /**
   * 注册用户
   * @param {String} param0 用户名
   */
  reg({ username, pwd }) {
    const rules = [
      { rule: !username, message: "username未传" },
      { rule: !pwd, message: "pwd未传" },
    ];
    return this.$validate(rules, () => this.$model.reg({ username, pwd }));
  }
}
