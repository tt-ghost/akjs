import { fileURLToPath } from "url";
import path from "path";

export const dirname = () => {
  const __filename = fileURLToPath(import.meta.url);
  return path.dirname(__filename);
};

export const getProjectPath = () => process.cwd();

export const load = (file) => {
  const filePath = path.resolve(getProjectPath(), file);
  return import(filePath);
};

export const isFunction = fn => typeof fn === 'function'