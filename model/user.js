var mysqlUtil = require('../lib/mysql.js')
exports.getUserByName = () => {
  let _sql = 'SELECT * FROM users;'
  return mysqlUtil.query(_sql, [])
}
exports.insertUser = (user) => {
  let _sql = 'INSERT INTO users SET ?'
  console.log('insert')
  return mysqlUtil.query(_sql, user)
}