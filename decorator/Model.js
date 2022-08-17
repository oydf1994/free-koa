async function getSequelize() {
    return new Promise((resolve, reject) => {
        let timer = setInterval(() => {
            if (global.sequelize) {
                clearInterval(timer)
                clearTimeout(timerOut)
                resolve(global.sequelize)
            }
        }, 1000);
        let timerOut = setTimeout(() => {
            clearInterval(timer)
            console.error("sequelize Configuration not found")
            resolve(false)
        }, 5000)
    })
}
module.exports = (value) => async (target) => {
    let flag = await getSequelize()
    let model;
    if (flag) {
        const t = new target()
        let obj = {}
        for (const k in t) {
            obj[t[k].name] = {
                ...t[k]
            }
        }
        model = global.sequelize.define(target.name, obj, {
            // 这是其他模型参数
        });
        // model.sync({ force: true });
    }
    return model

}