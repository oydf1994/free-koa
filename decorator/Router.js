module.exports = (path) => (target) => {
    target.path = path == "/" ? "" : path
    target.type = "route"
}