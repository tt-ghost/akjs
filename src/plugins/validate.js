import Parameter from "parameter";

export default (app) => {
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
};
