const { NODE_ENV } = process.env;

export default () => ({
  // 后台启动端口
  PORT: 8120,
  NODE_ENV,
  IS_DEV: NODE_ENV === "dev",
  IS_TEST: NODE_ENV === "test",
  IS_STAGE: NODE_ENV === "stage",
  IS_PROD: NODE_ENV === "prod",
});
