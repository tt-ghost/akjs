/**
 * passport model
 */
import BaseModel from "../../base/model.js";
import SQL from "./sql.js";

export default class PassportModel extends BaseModel {
  login(user) {
    const { username, pwd } = user;
    return this.query(SQL.PASSPORT_LOGIN, [username, pwd]);
  }

  reg(user) {
    const { username, pwd } = user;
    return this.query(SQL.PASSPORT_REG, [username, pwd]);
  }
}
