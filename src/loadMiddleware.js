import path from "path";
import * as mids from "./middleware/index.js";
import { getProjectPath, isFunction } from "./utils.js";

export default async (app) => {
  const { config } = app;
  const middleware = config.middleware || [];
  const promises = [];
  const projectPath = getProjectPath();

  // load default middleware
  Object.keys(mids).forEach((mid) => {
    mids[mid](app);
  });

  // load custom middleward
  middleware.forEach((mid) => {
    promises.push(
      (async () => {
        const middlewarePath = path.resolve(
          projectPath,
          `src/middleware/${mid}.js`
        );
        let middlewareModule = null;
        try {
          middlewareModule = await import(middlewarePath);
        } catch (e) {}

        if (middlewareModule && isFunction(middlewareModule.default)) {
          const mid = await middlewareModule.default(app);
          app.use(mid);
        }
      })()
    );
  });
  await Promise.all(promises);
};
