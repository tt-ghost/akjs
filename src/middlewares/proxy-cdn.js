import proxy from "koa-proxy";
import convert from "koa-convert";

/**
 * 配置 proxy cdn 中间件
 */
export default (app) => {
  app.use(
    convert(
      proxy({
        match: /^\/pkg\/lib/,
        map: (path) => `/beforepath${path.replace("/pkg/lib", "")}`,
        host: "http://api.cdnjs.com",
        jar: true,
      })
    )
  );
};
