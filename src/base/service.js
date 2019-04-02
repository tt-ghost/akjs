const path = require('path')

module.exports = class BaseService {
  constructor(modelPath) {
    this.model = require(path.resolve(__dirname, '..', modelPath))
  }
}
