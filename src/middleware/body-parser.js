import bodyParser from "koa-bodyparser";

export default (app) => {
  const config = app.config.bodyParser || { formLimit: "1mb" };
  return bodyParser(config);
};
