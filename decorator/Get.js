module.exports = (value) => (target, name, descriptor) => {
    descriptor.value.path = value
    descriptor.value.methods = "get"
}