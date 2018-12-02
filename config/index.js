// alter user 'root'@'localhost' identified with mysql_native_password by '123456';
// flush privileges;
module.exports = {
  port: 3100,
  database: {
    database: 'koamy',
    user: 'root',
    password:'123456',
    port: '3306',
    host: 'localhost'
  }
}