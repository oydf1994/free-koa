const schedule = require('node-schedule');
module.exports = (value) => (target, name, descriptor) => {
    schedule.scheduleJob(value, () => {
        descriptor.value()
    });
}