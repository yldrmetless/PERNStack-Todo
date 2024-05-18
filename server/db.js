const Pool = require("pg").Pool;

const pool = new Pool({
    user: "your db user name",
    password: "your db password",
    host: "localhost",
    database: "your db name",
    port: 5432
})

module.exports = pool;