'use strict';
const Service = require('egg').Service;

class UserService extends Service {
    async find(user) {
        const result = await this.app.mysql.select('userlist', { where: { username: `${user}` } });
        return result;
    }
}

module.exports = UserService;
