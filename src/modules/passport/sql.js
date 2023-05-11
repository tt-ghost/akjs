import Helper from "../../utils/helper.js";

const SQL_MAP = {
  // 登录
  LOGIN: "SELECT * FROM passport WHERE name = ?, pwd = ?",
  // 注册
  REG: "INSET INTO passport(name, pwd) VALUES(?, ?)",
};

export default Helper.Obj.addKeyPrefix(SQL_MAP, "PASSPORT_");
