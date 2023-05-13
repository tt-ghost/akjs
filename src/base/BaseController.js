import Controller from "../ChengApp/Controller.js";

export default class BaseController extends Controller {
  error(ctx, status, message, data = null) {
    ctx.body = {
      status,
      message,
      data,
    };
  }
  success(ctx, data = null) {
    ctx.body = {
      status: 200,
      message: "success",
      data,
    };
  }
}
