const Helper = require('./helper')

function res(err, ctx, success) {
  if (err) {
    ctx.code = err.code || 500
    ctx.body = {
      msg: err.message
    }
  } else {
    if (Helper.isFun(success)) {
      success()
    }
    success()
  }
}

class Res {
  constructor(err, ctx, success) {
    res(err, ctx, success)
  }
}

module.exports = Res
