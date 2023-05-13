import Parameter from "parameter";
import * as Sequelize from "sequelize";

export default {
  validate: {
    enable: true,
    load: (app) => {
      const config = app.config.validate;

      const parameter = new Parameter(
        config || {
          // translate: (...args) => {
          //   return I18n.t.apply(I18n, args);
          // },
          validateRoot: true,
        }
      );
      app.validate = parameter.validate.bind(parameter);
      console.log(86, app.validate);
    },
  },
  sequelize: {
    enable: true,
    load: (app) => {
      app.Sequelize = Sequelize;
      const { Model } = Sequelize;
      const dbConfig = app.config.db;
      if (!dbConfig) return new Error("请先配置数据库 app.config.db");
      const { database, user, password, option } = dbConfig;

      const sequelize = new Sequelize.Sequelize(
        database,
        user,
        password,
        option
      );
      console.log(9393, sequelize);

      app.defineModel = (name, attrs, opts) => {
        if (!name) return;
        if (!attrs) attrs = {};
        if (!opts) opts = {};
        opts = { sequelize, ...opts };
        return sequelize.define(name, attrs, opts);

        // class CustomModel extends Model {}
        // CustomModel.init(attrs, opts);
        // return CustomModel;
      };
      app.modelSync = (...args) => sequelize.sync(...args);
    },
  },
};
