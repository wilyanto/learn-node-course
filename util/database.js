const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    'database': 'node-course',
    'password': '',
});

module.exports = pool.promise();