module.exports = {
  // 获取当前用户
  USER_GET_CURRENT_USER: 'SELECT * FROM user',
  // 通过userId获取用户
  USER_GET_USER_BY_ID: 'SELECT * FROM user WHERE user_id = ?',
  // 添加用户
  USER_ADD_USER: 'INSERT INTO user SET ?'
}
