import Helper from "./helper.js";

/**
 * 解析SQL异常
 * @param {Error} err SQL报错的异常
 * @param {Object} ctx
 */
function resolveSQLError(err, ctx) {
  switch (err.code) {
    case "":
      ctx.status = 404;
      break;
    default:
      ctx.status = 500;
      ctx.body = {
        message: err.message || "未知错误",
      };
      break;
  }
}

export default function res(err, ctx, success) {
  if (err) {
    if (typeof err.code === "string") {
      resolveSQLError(err, ctx);
    } else if (err.code === 401) {
      ctx.status = 401;
      ctx.body = {
        // TODO:login url
        url: "",
      };
    } else {
      ctx.status = err.code || 404;
      ctx.body = {
        message: err.message,
      };
    }
  } else if (Helper.isFun(success)) {
    success();
  } else {
    ctx.status = 204;
  }
}

// export default res;
