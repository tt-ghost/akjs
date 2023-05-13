import * as Sequelize from "sequelize";

export default (app) => {
  app.Sequelize = Sequelize;
  const dbConfig = app.config.db;
  if (!dbConfig) return new Error("请先配置数据库 app.config.db");
  const { database, user, password, option } = dbConfig;

  const sequelize = new Sequelize.Sequelize(database, user, password, option);

  app.defineModel = (name, attrs, opts) => {
    if (!name) return;
    if (!attrs) attrs = {};
    if (!opts) opts = {};
    opts = { sequelize, ...opts };
    return sequelize.define(name, attrs, opts);
  };
  app.modelSync = (...args) => sequelize.sync(...args);
};
