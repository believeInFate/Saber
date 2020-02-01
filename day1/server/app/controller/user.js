'use strict';

const Controller = require('egg').Controller;
class UserController extends Controller {
    async list() {
        const { ctx, app } = this;
        let result = await app.mysql.select('labixiaoxin');
        let data = result.map(item => item.class);
        data = [...new Set(data)];
        ctx.body = {
            code: 0,
            result: data,
        };
    }
}

module.exports = UserController;
