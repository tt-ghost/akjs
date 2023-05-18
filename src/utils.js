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

// 转成大驼峰
export const bigCamelCase = str => {
  const trimed = str.trim()
  const sym = '[-_.\\s]+'
  return trimed
    .replace(new RegExp('^' + sym), '')
    .replace(new RegExp(sym + '$'), '')
    .replace(new RegExp(`(${sym}[a-zA-Z])`, 'g'), (a) => {
      return a.replace(new RegExp(sym), '').toUpperCase()
    })
    .replace(/^([a-zA-Z])/, (a) => a.toUpperCase())
}
// 转成小驼峰
export const smallCamelCase = str => {
  const trimed = str.trim()
  const sym = '[-_.\\s]+'
  return bigCamelCase(str)
    .replace(/^([a-zA-Z])/, (a) => a.toLowerCase())
}