import BaseModel from "../../base/model.js";
import SQL from "./sql.js";

export default class UserModel extends BaseModel {
  constructor() {
    super();
    this.default = {
      status: "pending",
      name: "",
      nickname: "",
      email: "",
      password: "",
      avator: "",
      sex: "",
    };
  }

  /**
   * 获取当前用户信息
   */
  getCurrentUser() {
    return this.query(SQL.USER_GET_CURRENT_USER, []);
  }

  /**
   * 通过用户名获取用户
   */
  getUserById(userId) {
    return this.query(SQL.USER_GET_USER_BY_ID, [userId]);
  }

  /**
   * 添加用户
   * @param {Object} user 用户信息
   */
  addUser(user) {
    return this.query(SQL.USER_ADD_USER, user);
  }
}
