// import BaseService from "../../base/service.js";
import Service from "../../ChengApp/Service.js";

export default class UserService extends Service {
  async getCurrentUser(userId) {
    const result = await this.app.model.user.findOne({
      where: { id: userId },
    });
    console.log("service: ", result);
    return result;
  }
}
