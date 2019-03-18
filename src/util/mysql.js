const mysql = require('mysql')
const config = require('../config')

const pool = mysql.createPool({
  ...config.database
})

function query(sql, value) {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err)
      }
      connection.query(sql, value, (qerr, results, fields) => {
        if (qerr) {
          reject(qerr)
        }
        console.log(46666, JSON.stringify(results, null, 2))
        console.log(46666, fields)
        resolve(results)
        connection.release()
      })
    })
  })
}

function createTable(sql, value = []) {
  return query(sql, value)
}

// function createDatabase(sql) {
//   return query(sql, [])
// }

function init() {
  // createDatabase(initSQL.INIT_DATABASE_SQL)
  // createTable(initSQL.INIT_USER_TABLE_SQL)
}

// connection.end()

module.exports = {
  query,
  createTable,
  init
}
