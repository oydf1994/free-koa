const Router = require('koa-router');
module.exports = (app, route) => {
    const router = new Router({ prefix: route.path });
    const r = new route();
    for (const key in r) {
        const t = r[key]
        t?.methods && router[t.methods](t.path, async (ctx) => {
            ctx.body = await t.call(r, { ctx, body: ctx.request.body, query: ctx.query, params: ctx.params })
        })
    }
    app.use(router.routes(), router.allowedMethods())
}