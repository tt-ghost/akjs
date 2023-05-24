import path from "path";
import { getProjectPath, isFunction } from "./utils.js";

export default async (app) => {
  const { config } = app;
  const middleware = config.middleware || [];
  const promises = [];
  const projectPath = getProjectPath();
  middleware.forEach((mid) => {
    promises.push(
      (async () => {
        const middlewarePath = path.resolve(
          projectPath,
          `src/middleware/${mid}.js`
        );
        const middlewareModule = await import(middlewarePath);

        if (middlewareModule && isFunction(middlewareModule.default)) {
          const mid = await middlewareModule.default(app);
          app.use(mid);
        }
      })()
    );
  });
  await Promise.all(promises);
};
