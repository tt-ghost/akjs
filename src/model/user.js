const mysqlUtil = require('../util/mysql')

exports.getUserByName = function () {
  const sql = 'SELECT * FROM users;'
  return mysqlUtil.query(sql, [])
}

exports.insertUser = function (user) {
  const sql = 'INSERT INTO users SET ?'
  console.log('insert')
  return mysqlUtil.query(sql, user)
}
