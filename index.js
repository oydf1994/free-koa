require('@babel/register')
const Koa = require('koa')
const app = new Koa()
const bodyParser = require('koa-bodyparser');
const lib = require('./lib/index')
app.use(bodyParser());
module.exports.start = async () => {
    await lib(app)
    app.listen(global.config.port || 3100, () => {
        console.log(`http://127.0.0.1:${global.config.port}`)
    })
}
module.exports.app = app
// npm publish