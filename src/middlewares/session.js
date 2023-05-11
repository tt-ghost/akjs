import session from "koa-session";
import SQLStore from "koa-mysql-session";
import db from "../config/db.js";

// init db
const sessionConf = {
  ...db,
};

// cookie config
const cookieConf = {
  maxAge: "", // cookie有效时长
  expires: "", // cookie失效时间
  path: "/", // 写cookie所在的路径
  domain: "", // 写cookie所在的域名
  httpOnly: true, // 是否只用于http请求中获取
  overwrite: "", // 是否允许重写
  secure: "",
  sameSite: "",
  signed: "",
};

// 配置 session 中间件
export default (app) => {
  app.use(
    session(
      {
        key: "KOA_STARTKIT",
        maxAge: 1000 * 60 * 60 * 24,
        // (boolean) automatically commit headers (default true
        autoCommit: true,
        // (boolean) can overwrite or not (default true)
        overwrite: true,
        // (boolean) httpOnly or not (default true)
        httpOnly: true,
        // (boolean) signed or not (default true)
        signed: true,
        rolling: false,
        renew: false,
        cookie: cookieConf,
        store: new SQLStore(sessionConf),
      },
      app
    )
  );
};
