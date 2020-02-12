'use strict';

const Service = require('egg').Service;

class UserService extends Service {
    async login(user) {
        return await this.app.mysql.select('user', { where: { user } });
    }
}

module.exports = UserService;
