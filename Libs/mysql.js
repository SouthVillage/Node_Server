const mysql = require('mysql')
const co = require('co-mysql')
const config = require('../config')

let conn = mysql.createPool({
  host: config.db_host,
  user:config.db_user,
  port:config.db_port,
  password:config.db_password,
  database:config.db_database
})

module.exports = co(conn)