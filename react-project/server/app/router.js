'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
    router.post('/login', controller.home.login);
    router.get('/userlist', controller.user.userlist);
    router.post('/delete', controller.user.delete);
    router.get('/roleList', controller.user.roleList);
    router.post('/useradd', controller.user.useradd);
    router.post('/useredit', controller.user.useredit);
};
