const ato = require('await-to-js').default
const res = require('./res')
const ErrorUtil = require('./error')
const h = require('./helper')

const { PromiseError } = ErrorUtil

/* eslint no-param-reassign: ["error", { "props": false }] */
module.exports = g => {
  g.G = {
    ato,
    res,
    h,
    PromiseError
  }
}
