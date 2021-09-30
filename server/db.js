const Pool = require("pg").Pool
require('dotenv').config()
const pool = new Pool({
    user: process.env.ROOT,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    port: process.env.PORT_POSTGRE,
    database: process.env.DATABASE
})

module.exports = pool