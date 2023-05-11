const isFun = (fun) => typeof fun === "function";
const isStr = (str) => typeof str === "string";
// 是否为正整数，匹配正整数和正整数字符串
const isPosInt = (arg) => /^\d+$/.test(arg);

const Obj = {
  addKeyPrefix: (obj, prefix) => {
    const result = {};
    Object.keys(obj).forEach((k) => {
      result[`${prefix}${k}`] = obj[k];
    });
    return result;
  },
};

export default {
  isFun,
  isStr,
  isPosInt,
  Obj,
};
