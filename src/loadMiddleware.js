import path from "path";
import { getProjectPath, isFunction } from "./utils.js";

export default async (app) => {
  const { config } = app;
  const middleware = config.middleware || [];
  middleware.forEach(async (mid) => {
    const middlewarePath = path.resolve(
      getProjectPath(),
      `src/middleware/${mid}.js`
    );
    const middlewareModule = await import(middlewarePath);

    if (middlewareModule && isFunction(middlewarePath.default)) {
      app.use(await middlewareModule.default(app));
    }
  });
};
