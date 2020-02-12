'use strict';

const Controller = require('egg').Controller;
class ListController extends Controller {
    async list() {
        const { ctx, app } = this;
        let result = await app.mysql.select('lastyk');
        ctx.body = app.sendMes(0, '成功', { list: result });
    }
}

module.exports = ListController;
