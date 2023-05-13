import { validate, sequelize } from "../plugins/index.js";

export default {
  validate: {
    enable: true,
    load: validate,
  },
  sequelize: {
    enable: true,
    load: sequelize,
  },
};
