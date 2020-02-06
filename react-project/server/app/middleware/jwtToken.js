const white = ['/login'];
const jwt = require('jsonwebtoken');
module.exports = options => {
    return async (ctx, next) => {
        if (white.includes(ctx.path)) {
            await next();
            return;
        }
        const token = ctx.get('usertoken');
        if (!token) {
            ctx.statue = 401;
            ctx.body = ctx.app.sendMes(1, '没有权限，请重新登录');
            return;
        }
        let info;
        try {
            info = await jwt.verify(token, ctx.app.config.keys);
        } catch (error) {
            ctx.statue = 401;
            ctx.body = ctx.app.sendMes(1, '权限验证失败，请重新登录');
        }
        ctx.info = info;
        await next();
    };
};
