'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async login() {
        const { ctx, app } = this;
        const { user, pwd } = ctx.request.body;
        const result = await ctx.service.user.find(user);
        console.log(result);
        ctx.body = {
            code: 0,
            message: '登陆成功',
        };
    }
}

module.exports = HomeController;
