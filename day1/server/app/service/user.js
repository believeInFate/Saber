'use strict';

const Service = require('egg').Service;

class UserService extends Service {
    async find(user) {
        let result = await this.app.mysql.select('userlist', {
            where: { username: user },
        });
        return result;
    }
    async registry(user, pwd) {
        let result = await this.app.mysql.insert('userlist', { username: user, password: pwd });
        return result;
    }
}

module.exports = UserService;
