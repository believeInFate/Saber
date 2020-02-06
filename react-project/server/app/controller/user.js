'use strict';

const Controller = require('egg').Controller;
class UserController extends Controller {
    async userlist() {
        const { ctx, app } = this;
        const result = await ctx.service.user.userList();
        ctx.body = app.sendMes(0, '加载成功', result);
    }
    async roleList() {
        const { ctx, app } = this;
        const result = await app.mysql.select('role');
        if (result.length > 0) {
            ctx.body = app.sendMes(0, '查询成功', result);
        }
    }
    async delete() {
        const { ctx, app } = this;
        const { id } = ctx.request.body;
        console.log(id);
        const result = await ctx.service.user.delete(id);
        if (result.affectedRows !== 1) {
            ctx.body = app.sendMes(1, '删除失败');
            return;
        }
        ctx.body = app.sendMes(0, '删除成功');
    }
    async useradd() {
        const { ctx, app } = this;
        const { id, username, password, role } = ctx.request.body;
        let result = await app.mysql.insert('userlist', { id, username, password, role });
        if (result.affectedRows !== 1) {
            ctx.body = app.sendMes(1, '添加失败');
            return;
        }
        ctx.body = app.sendMes(0, '添加成功');
    }
    async useredit() {
        const { ctx, app } = this;
        const { id, username, password, role } = ctx.request.body;
        let result = await app.mysql.update('userlist', { id, username, password, role });
        if (result.affectedRows !== 1) {
            ctx.body = app.sendMes(1, '修改失败');
            return;
        }
        ctx.body = app.sendMes(0, '修改成功');
    }
}

module.exports = UserController;
