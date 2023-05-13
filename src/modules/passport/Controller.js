import Controller from "../../ChengApp/Controller.js";
export default class PassportController extends Controller {
  async login(ctx) {
    ctx.body = {
      login: true,
    };
  }

  async reg(ctx) {
    ctx.body = {
      reg: true,
    };
  }
}
