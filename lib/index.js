const fs = require('fs')
const path = require('path')
const Router = require('./Router')
const middleware = require('./Middleware')
const middlewareList = []
const routerList = []
let length = -1
const readdir = async (path) => {
    fs.readdir(path, function (err, files) {
        if (err) {
            return console.error(err);
        }
        files.forEach(async (file) => {
            const stats = await stat(`${path}/${file}`)
            if (stats.isFile()) {
                const c = require(`${path}/${file}`)
                if (c.type === "Middleware") {
                    middlewareList.push(c)
                } else if (c.type === "route") {
                    routerList.push(c)
                }
            } else {
                readdir(`${path}/${file}`)
            }
        });
    });

}
const stat = (path) => {
    return new Promise((resolve) => {
        fs.stat(`${path}`, async (err, stats) => {
            resolve(stats)
        })
    })
}
module.exports = async (app) => {
    return new Promise((resolve) => {
        readdir(path.join(process.cwd(), "./src"))
        let timer = setInterval(() => {
            if (length == middlewareList.length + routerList.length) {
                middleware(app, middlewareList)
                routerList.forEach(i => Router(app, i))
                clearInterval(timer)
                resolve()
            } else {
                length = middlewareList.length + routerList.length
            }
        }, 500);
    })

}