const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'db',    // This matches the service name in docker-compose.yml
    user: 'admin_db',
    password: 'P@ssw0rd',
    database: 'bookstore',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool.promise();
