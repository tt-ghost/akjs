// alter user 'root'@'localhost' identified with mysql_native_password by '123456';
// flush privileges;
const database = require('./db')

module.exports = {
  port: 8700,
  database
}
