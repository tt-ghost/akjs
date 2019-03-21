const BaseModel = require('./base')

class UserModel extends BaseModel {
  constructor() {
    super()
    this.default = {
      status: 'pending',
      name: '',
      nickname: '',
      email: '',
      password: '',
      avator: '',
      sex: ''
    }
  }

  /**
   * 获取当前用户信息
   */
  getCurrentUser() {
    console.log('model: 获取当前用户')
    const sql = 'SELECT * FROM user'
    return this.query(sql, [])
  }

  /**
   * 通过用户名获取用户
   */
  getUserById(userId) {
    console.log('model: 通过用户名获取用户信息')
    const sql = 'SELECT * FROM user WHERE user_id = ?'
    return this.query(sql, [userId])
  }

  /**
   * 添加用户
   * @param {Object} user 用户信息
   */
  addUser(user) {
    const sql = 'INSERT INTO user SET ?'
    console.log('model: 添加用户。', user)
    return this.query(sql, user)
  }
}

// UserModel.default = {
//   status: 'pending',
//   name: '',
//   nickname: '',
//   email: '',
//   password: '',
//   avator: '',
//   sex: ''
// }

module.exports = UserModel
