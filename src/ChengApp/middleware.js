import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default (app) => {
  const { config } = app;
  const middleware = config.middleware || [];
  middleware.forEach((mid) => {
    const midPath = path.resolve(__dirname, `../middlewares/${mid}`);
    const midFn = import(midPath);

    if (typeof midPath === "function") {
      app.use(midFn(app));
    }
  });
};
