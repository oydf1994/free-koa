module.exports = (value) => (target, name, descriptor) => {
    return {
        enumerable: true,
        configurable: true,
        get: function () {
            return { name, ...value };
        }
    }
}