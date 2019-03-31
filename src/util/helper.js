
const isFun = fun => typeof fun === 'function'

const Obj = {
  addKeyPrefix: (obj, prefix) => {
    const result = {}
    Object.keys(obj).forEach(k => {
      result[`${prefix}${k}`] = obj[k]
    })
    return result
  }
}

module.exports = {
  isFun,
  Obj
}
