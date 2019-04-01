const ato = require('await-to-js').default
const res = require('./res')
const ErrorUtil = require('./error')

const { PromiseError } = ErrorUtil

/* eslint no-param-reassign: ["error", { "props": false }] */
module.exports = g => {
  g.G = {
    ato,
    res,
    PromiseError
  }
}
