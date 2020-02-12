'use strict';

const Controller = require('egg').Controller;
const jwt = require('jsonwebtoken');
class HomeController extends Controller {
    async login() {
        const { ctx, app } = this;
        const { user, pwd } = ctx.request.body;
        let result = await ctx.service.user.login(user);
        if (result.length != 1) {
            ctx.bod = app.sendMes(1, '用户名不对');
            return;
        }
        if (result[0].pwd !== pwd) {
            ctx.body = app.sendMes(1, '密码不对');
            return;
        }
        let signData = {
            ...result[0],
            signTime: new Date().getTime(),
        };
        let token = jwt.sign(signData, app.config.keys);
        ctx.body = app.sendMes(0, '登录成功', { token });
    }
}

module.exports = HomeController;
