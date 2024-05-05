const mysql = require('mysql2/promise');

async function createBooksTable() {
    const connection = await mysql.createConnection({
        host: 'db',    // This matches the service name in docker-compose.yml
        user: 'admin_db',
        password: 'P@ssw0rd',
        database: 'bookstore',
    });

    try {
        await connection.execute(`
            CREATE TABLE IF NOT EXISTS books (
                id INT AUTO_INCREMENT PRIMARY KEY,
                title VARCHAR(255) NOT NULL,
                author VARCHAR(255) NOT NULL
            )
        `);
        console.log("Table 'books' created or already exists.");
    } catch (error) {
        console.error("Error creating table 'books':", error);
    } finally {
        await connection.end();
    }
}

module.exports = { createBooksTable };