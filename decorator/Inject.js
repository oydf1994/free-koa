module.exports = (value) => (target, name, descriptor) => {
    let v;
    value.then(res => {
        v = res
    })
    return {
        enumerable: true,
        configurable: true,
        get: function () {
            return v
        },
    }
}