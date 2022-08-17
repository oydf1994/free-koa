const Sequelize = require('sequelize');
async function getConfig() {
    return new Promise((resolve, reject) => {
        let timer = setInterval(() => {
            if (global.config) {
                clearInterval(timer)
                clearTimeout(timerOut)
                resolve(global.config)
            }
        }, 500);
        let timerOut = setTimeout(() => {
            clearInterval(timer)
            resolve()
        }, 5000)
    })
}
module.exports = async (target) => {
    await getConfig()
    let sequelizeConfig = global.config?.sequelize
    let sequelize;
    if (sequelizeConfig) {
        sequelize = new Sequelize(sequelizeConfig.database, sequelizeConfig.username, sequelizeConfig.password, {
            ...sequelizeConfig
        });
        global.sequelize = sequelize
    }
    return sequelize;
}