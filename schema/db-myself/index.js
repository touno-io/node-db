const mongo = require('../../index')('db-myself')

mongo.set(require('./expanse'))
mongo.set(require('./schedule'))
mongo.set(require('./storage'))
mongo.set(require('./wakatime'))
module.exports = mongo
