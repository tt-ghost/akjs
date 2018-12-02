var mysql = require('mysql')
var config = require('../config')
var initSQL = require('../sql/init.js')

var pool = mysql.createPool({
  ...config.database
})
// pool.getConnection((err, connection) => {
//   if (err) {
//     throw err
//   }
//   connection.query()
//   console.log('connected as id ' + pool.threadId)
// })

function query(sql, value) {
  return new Promise((resolve, reject) => {
    pool.getConnection(function (err, connection) {
      if (err) {
        reject(err)
      }
      connection.query(sql, value, (err, results, fields) => {
        if (err) {
          reject(err)
        }
        console.log(46666, JSON.stringify(results, null, 2))
        resolve(results)
        connection.release()
      })
    })
  })
}

function createTable (sql, value = []) {
  return query(sql, value)
}

function createDatabase (sql) {
  return query(sql, [])
}

function init () {
  createDatabase(initSQL.INIT_DATABASE_SQL)
  createTable(initSQL.INIT_USER_TABLE_SQL)
}

// connection.end()

module.exports = {
  query,
  createTable,
  init
}