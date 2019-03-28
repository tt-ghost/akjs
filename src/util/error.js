class PromiseError {
  constructor({ message, code }) {
    return Promise.reject(new Error({ message, code: code || 400 }))
  }
}

module.exports = {
  PromiseError
}
