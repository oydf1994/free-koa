module.exports = (value) =>  (target, name, descriptor) => {
    descriptor.value.order = value
}