const path = require("path");

module.exports = class BaseService {
  constructor(model) {
    if (model) {
      const Model = require(path.resolve(__dirname, "..", model));
      this.$model = new Model();
    }
  }

  $validate(rules, callback) {
    let result;
    for (let i = 0; i < rules.length; i++) {
      if (rules[i].rule) {
        result = rules[i];
        break;
      }
    }
    if (result) {
      return new G.PromiseError(result.message, result.code || 400);
    } else if (G.h.isFun(callback)) {
      return callback();
    } else {
      return Promise.resolve();
    }
  }
};
