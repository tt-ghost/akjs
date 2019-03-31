const Helper = require('../../util/helper')

const SQL_MAP = {
  // 登录
  LOGIN: 'SELECT * FROM passport WHERE name = ?, pwd = ?'
}

module.exports = Helper.Obj.addKeyPrefix(SQL_MAP, 'PASSPORT_')
