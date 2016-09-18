var env = 'development'
var config = require('../knexfile.js')[env]
module.exports = require('knex')(config)
