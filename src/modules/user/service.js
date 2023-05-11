import BaseService from "../../base/service.js";

export default class UserService extends BaseService {
  constructor() {
    super("modules/user/model.js");
  }

  /**
   * 获取当前用户信息
   * @param {String} ticket 登录的cookie字段
   */
  getCurrentUser(ticket) {
    const rules = [{ rule: !ticket, message: "ticket必须穿" }];
    return this.$validate(rules, () => this.$model.getCurrentUser(ticket));
  }

  /**
   * 根据用户id获取用户信息
   * @param {Number} userId 用户ID
   */
  getUserById(userId) {
    const rules = [{ rule: !G.h.isPosInt(userId), message: "userId无效" }];
    return this.$validate(rules, () => this.$model.getUserById(userId));
  }

  /**
   * 添加用户
   * @param {Object} _user 用户对象
   */
  addUser(user) {
    console.log(888, this.$model.default, user);
    const rules = [
      { rule: !user, message: "请传user", code: 400 },
      { rule: !user.username, message: "username未传", code: 400 },
    ];
    return this.$validate(rules, () => this.$model.addUser(user));
  }
}
