'use strict';

const Controller = require('egg').Controller;
const jwt = require('jsonwebtoken');
class HomeController extends Controller {
    async login() {
        const { ctx, app } = this;
        const { user, pwd } = ctx.request.body;
        const result = await ctx.service.user.find(user);
        if (result.length === 0) {
            ctx.body = app.sendMes(1, '用户不存在');
            return;
        }
        if (pwd !== result[0].password) {
            ctx.body = app.sendMes(1, '密码不对');
            return;
        }
        const token = jwt.sign(user, app.config.keys);
        ctx.body = app.sendMes(0, '登陆成功', { token, user });
    }
}

module.exports = HomeController;
