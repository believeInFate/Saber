'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
    router.post('/login', controller.home.login);
    router.post('/registry', controller.home.registry);
    router.get('/list', controller.user.list);
};
