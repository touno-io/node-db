const mongo = require('../../index')('db-task')

mongo.set(require('./config'))
mongo.set(require('./bnk48'))
mongo.set(require('./pokemon-go'))
mongo.set(require('./cinema'))
mongo.set(require('./rotomu'))
module.exports = mongo
