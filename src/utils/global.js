import ato from "await-to-js";
import res from "./res.js";
import ErrorUtil from "./error.js";
import h from "./helper.js";

const { PromiseError } = ErrorUtil;

/* eslint no-param-reassign: ["error", { "props": false }] */
export default (g) => {
  g.G = {
    ato,
    res,
    h,
    PromiseError,
  };
};
