module.exports = (app, list) => {
    let arr = []
    list.forEach(middleware => {
        const m = new middleware();
        for (const key in m) {
            arr.push(m[key])
        }
    })
    arr = arr.sort((a, b) => a.order - b.order)
    arr.forEach(i => app.use(i))
}