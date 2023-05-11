class CodeError extends Error {
  constructor(message, code) {
    super();
    this.message = message || "内部错误";
    this.code = code || 500;
  }
}
class PromiseError {
  constructor(message, code) {
    return Promise.reject(new CodeError(message, code));
  }
}

export default {
  PromiseError,
};
