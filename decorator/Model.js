async function getSequelize() {
    return new Promise((resolve, reject) => {
        let timer = setInterval(() => {
            if (global.sequelize) {
                clearInterval(timer)
                resolve(global.sequelize)
            }
        }, 1000);
    })
}
module.exports = (value) => async (target) => {
    await getSequelize()
    const t = new target()
    let obj = {}
    for (const k in t) {
        obj[t[k].name] = {
            ...t[k]
        }
    }
    const s = global.sequelize.define(target.name, obj, {
        // 这是其他模型参数
    });
    // s.sync({ force: true });
    return s
}