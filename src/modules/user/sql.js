import Helper from "../../utils/helper.js";

const SQL_MAP = {
  // 获取当前用户
  GET_CURRENT_USER: "SELECT * FROM user",
  // 通过userId获取用户
  GET_USER_BY_ID: "SELECT * FROM user WHERE user_id = ?",
  // 添加用户
  ADD_USER: "INSERT INTO user SET ?",
};

export default Helper.Obj.addKeyPrefix(SQL_MAP, "USER_");
