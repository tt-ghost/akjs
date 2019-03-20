const dbUtil = require('../util/db')

class UserModel {
  /**
   * 获取当前用户信息
   */
  static getCurrentUser() {
    console.log('model: 获取当前用户')
    const sql = 'SELECT * FROM user'
    return dbUtil.query(sql, [])
  }

  /**
   * 通过用户名获取用户
   */
  static getUserById(userId) {
    console.log('model: 通过用户名获取用户信息')
    const sql = 'SELECT * FROM user WHERE user_id = ?'
    return dbUtil.query(sql, [userId])
  }

  /**
   * 添加用户
   * @param {Object} user 用户信息
   */
  static addUser(user) {
    const sql = 'INSERT INTO user SET ?'
    console.log('model: 添加用户。', user)
    return dbUtil.query(sql, user)
  }
}

UserModel.default = {
  status: 'pending',
  name: '',
  nickname: '',
  email: '',
  password: '',
  avator: '',
  sex: ''
}

module.exports = UserModel
