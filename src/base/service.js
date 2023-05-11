import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default class BaseService {
  constructor(model) {
    if (model) {
      import(path.resolve(__dirname, "..", model)).then((module) => {
        const Model = module.default;
        this.$model = new Model();
      });
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
}
