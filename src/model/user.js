const dbUtil = require('../util/db')

function getUserByName() {
  const sql = 'SELECT * FROM user;'
  return dbUtil.query(sql, [])
}

function insertUser(user) {
  const sql = 'INSERT INTO user SET ?'
  console.log('insert: ', user)
  return dbUtil.query(sql, user)
}

module.exports = {
  getUserByName,
  insertUser
}
