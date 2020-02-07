let white = ['/login'];
let oprType = [
    {
        type: 'delete',
        url: '/delete',
    },
    {
        type: 'add',
        url: '/useradd',
    },
    {
        type: 'edit',
        url: '/useredit',
    },
];
module.exports = () => {
    return async (ctx, next) => {
        //ctx.path 为来访路径
        if (white.includes(ctx.path)) {
            await next();
            return;
        }
        // urlArr 是权限路径
        let urlArr = oprType.map(item => item.url);
        //判断权限路径里有没有来访路径
        if (urlArr.includes(ctx.path)) {
            // 角色解构出来
            let { role } = ctx.info;
            //查询角色权限
            let res = await ctx.app.mysql.select('opr', { where: { role } });
            // 对比 储存 接口功能
            let newOpr = null;
            oprType.forEach(item => {
                if (item.url === ctx.path) {
                    newOpr = item.type;
                }
            });
            //接口功能 和角色权限对比 如果相等就往下执行
            if (res.some(item => item.opr === newOpr)) {
                await next();
                return;
            }
            ctx.body = ctx.app.sendMes(1, '无权操作');
            return;
        }
        await next();
    };
};
