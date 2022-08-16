module.exports = (value) => (target) => {
    if (value === process.env.NODE_ENV) {
        const t = new target()
        global.config = { ...global.config, ...t }
    }
}