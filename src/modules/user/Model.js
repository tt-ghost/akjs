export default (app) => {
  const { DataTypes } = app.Sequelize;
  const attrs = {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    username: DataTypes.STRING,
    birthday: DataTypes.DATE,
    status: DataTypes.STRING,
    name: DataTypes.STRING,
    nickname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    avator: DataTypes.STRING,
    sex: DataTypes.STRING,
  };

  const opts = { tableName: "user" };

  return app.defineModel("user", attrs, opts);
};
