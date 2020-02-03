'use strict';

const Controller = require('egg').Controller;
class UserController extends Controller {
    async list() {
        const { ctx, app } = this;
        let result = await app.mysql.select('labixiaoxin');
        let data = [];
        result.forEach(item => {
            if (data.some(jtem => item.class === jtem.class)) return;
            data.push(item);
        });
        ctx.body = {
            code: 0,
            result: data,
        };
    }
    async branch() {
        const { ctx, app } = this;
        let { key } = ctx.request.body;
        let result = await app.mysql.select('labixiaoxin', { where: { class: key } });
        ctx.body = {
            code: 0,
            result,
        };
    }
}

module.exports = UserController;
