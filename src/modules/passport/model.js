/**
 * passport model
 */
const BaseModel = require('../../base/model')

class PassportModel extends BaseModel {
  login(user) {
    const { username, pwd } = user
    const sql = 'SELECT * FROM passport WHERE name = ?, pwd = ?'
    return this.query(sql, [username, pwd])
  }
}

module.exports = PassportModel
