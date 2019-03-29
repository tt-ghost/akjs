const ato = require('await-to-js').default
const ErrorUtil = require('./error')
const Res = require('./res')

/* eslint no-param-reassign: ["error", { "props": false }] */
module.exports = g => {
  g.ato = ato
  g.PromiseError = ErrorUtil.PromiseError
  g.Res = Res
}
