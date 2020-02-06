let white = ['/login'];
module.exports = options => {
    return async (ctx, next) => {
        if (white.includes(ctx.path)) {
            await next();
            return;
        }
        let urlArr = options.map(item => item.url);
        console.log(urlArr);

        await next();
    };
};
