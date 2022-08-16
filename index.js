require('@babel/register')
const Koa = require('koa')
const app = new Koa()
const bodyParser = require('koa-bodyparser');
const lib = require('./lib/index')
app.use(bodyParser());
module.exports.start = async () => {
    await lib(app)
    app.listen(global.config.port || 3100)
}
module.exports.app = app
// npm publish