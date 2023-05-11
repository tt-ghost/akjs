import bodyParser from "koa-bodyparser";

export default (app) => {
  app.use(
    bodyParser({
      formLimit: "1mb",
    })
  );
};
