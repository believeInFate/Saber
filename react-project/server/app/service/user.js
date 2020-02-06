'use strict';
const Service = require('egg').Service;

class UserService extends Service {
    async find(user) {
        const result = await this.app.mysql.select('userlist', { where: { username: `${user}` } });
        return result;
    }
    async userList() {
        const result = await this.app.mysql.select('userlist');
        return result;
    }
    async delete(id) {
        const result = await this.app.mysql.delete('userlist', { id });
        return result;
    }
}

module.exports = UserService;
