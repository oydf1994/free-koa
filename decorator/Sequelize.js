const Sequelize = require('sequelize');
async function getConfig() {
    return new Promise((resolve, reject) => {
        let timer = setInterval(() => {
            if (global.config) {
                clearInterval(timer)
                resolve(global.config)
            }
        }, 500);
    })
}
module.exports = (value) => async (target) => {
    await getConfig()
    let sequelizeConfig = global.config.sequelize
    const sequelize = new Sequelize(sequelizeConfig.database, sequelizeConfig.username, sequelizeConfig.password, {
        host: sequelizeConfig.host,
        dialect: "mysql"
    });
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    global.sequelize = sequelize
    return sequelize;
}