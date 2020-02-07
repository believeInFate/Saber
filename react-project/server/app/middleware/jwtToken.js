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
            ctx.status = 401;
            ctx.body = ctx.app.sendMes(1, '没有权限，请重新登录');
            return;
        }
        let info;
        try {
            info = await jwt.verify(token, ctx.app.config.keys);
        } catch (error) {
            ctx.status = 401;
            ctx.body = ctx.app.sendMes(1, '权限验证失败，请重新登录');
        }
        let { signTime } = info;
        let nowTime = new Date().getTime();
        let time = (nowTime - signTime) / 1000 / 60 / 60;
        if (time >= 6) {
            ctx.body = ctx.app.sendMes(1, '登录超时,请重新登录');
            return;
        }
        ctx.info = info;
        await next();
    };
};
