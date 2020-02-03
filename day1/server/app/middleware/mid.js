const white = ['/login', 'registry'];
const jwt = require('jsonwebtoken');
module.exports = () => {
    return async function(ctx, next) {
        if (white.includes(ctx.url)) {
            await next();
        } else {
            if (ctx.session.usertoken === undefined) {
                ctx.status = 401;
                ctx.body = {
                    code: 0,
                    message: '请登录',
                };
            } else if (!ctx.request.header.authortoken) {
                ctx.status = 401;
                ctx.body = {
                    code: 0,
                    message: '请重新登录',
                };
            } else {
                let clientToken = ctx.request.header.authortoken;
                let serverToken = ctx.session.usertoken;
                if (clientToken === serverToken) {
                    await next();
                } else {
                    ctx.status = 401;
                    ctx.body = {
                        code: 0,
                        message: '登录失效,请重新登录',
                    };
                }
            }
        }
    };
};
