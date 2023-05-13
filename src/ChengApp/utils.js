import { fileURLToPath } from "url";
import path from "path";

export const dirname = () => {
  const __filename = fileURLToPath(import.meta.url);
  return path.dirname(__filename);
};

export const load = (file) => {
  // const __filename = fileURLToPath(import.meta.url);
  // const __dirname = path.dirname(__filename);
  // const midPath = path.resolve(__dirname, file);

  // const filePath = path.resolve(process.cwd(), file);
  const filePath = path.resolve(dirname(), file);
  return import(filePath);
};

export const getProjectPath = () => path.resolve(dirname(), "../../");
