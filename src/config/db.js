
const DB_CONFIG = {
  development: {
    database: 'koa_startkit',
    user: 'root',
    password: '123456',
    port: '3306',
    host: 'localhost'
  },
  production: {
    database: 'koa_startkit',
    user: 'root',
    password: '123456',
    port: '3306',
    host: 'localhost'
  }
}

module.exports = DB_CONFIG[process.env.NODE_ENV]
