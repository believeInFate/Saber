'use strict';

const Controller = require('egg').Controller;
const jwt = require('jsonwebtoken');
class HomeController extends Controller {
    async login() {
        const { ctx, app } = this;
        const { user, pwd } = ctx.request.body;
        const result = await ctx.service.user.find(user);
        if (result.length === 0) {
            ctx.body = {
                code: 1,
                message: '用户名不存在',
            };
            return;
        }
        if (pwd !== result[0].password) {
            ctx.body = {
                code: 1,
                message: '密码不对',
            };
            return;
        }
        let token = jwt.sign(user, 'aaa');
        ctx.session.usertoken = token;
        ctx.body = {
            code: 0,
            message: '登录成功',
            token,
        };
    }
    async registry() {
        const { ctx } = this;
        const { user, pwd } = ctx.request.body;
        const select = await ctx.service.user.find(user);
        if (select.length > 0) {
            ctx.body = {
                code: 1,
                message: '用户已存在',
            };
        } else {
            const result = await ctx.service.user.registry(user, pwd);
            if (result.affectedRows === 1) {
                ctx.body = {
                    code: 2,
                    message: '注册成功',
                };
            }
        }
    }
}

module.exports = HomeController;
