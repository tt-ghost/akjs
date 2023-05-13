import Service from "./Service.js";

const service = new Service();
// const router = new Router();

export default class Controller {
  /**
   * get current user
   */
  async getCurrent(ctx) {
    // const token = ctx.cookies.get('token')
    console.log("/current");
    const [err, result] = await G.ato(service.getCurrentUser());
    G.res(err, ctx, () => {
      ctx.body = {
        data: result,
      };
    });
  }

  /**
   * 通过userId获取用户信息
   */
  async getById(ctx) {
    const { userId } = ctx.params;
    const [err, result] = await G.ato(service.getUserById(userId));
    G.res(err, ctx, () => {
      ctx.body = {
        data: result,
      };
    });
  }

  /**
   * add user
   */
  async create(ctx) {
    // ctx.request
    const user = ctx.request.body;
    const [err, result] = await G.ato(service.addUser(user));
    G.res(err, ctx, () => {
      ctx.body = {
        data: result,
      };
    });
  }

  /**
   * update user
   */
  async update(ctx) {
    ctx.body = { status: 200 };
  }
}
