const express = require('express');
const bodyParser = require('body-parser');
const { createBooksTable } = require('./database/migrate');
const db = require('./database/connection');

const app = express();
app.use(bodyParser.json());

app.get('/books', async (req, res) => {
    try {
        const [rows, fields] = await db.query('SELECT * FROM books');
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error retrieving books from database');
    }
});

app.get('/books/:id', async (req, res) => {
    try {
        const [rows, fields] = await db.query('SELECT * FROM books WHERE id = ?', [req.params.id]);
        if (rows.length > 0) {
            res.json(rows[0]);
        } else {
            res.status(404).send('Book not found');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Error retrieving book from database');
    }
});

app.post('/books', async (req, res) => {
    try {
        const { title, author } = req.body;
        const result = await db.query('INSERT INTO books (title, author) VALUES (?, ?)', [title, author]);
        res.status(201).send(`Book added with ID: ${result[0].insertId}`);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error adding book to database');
    }
});

app.put('/books/:id', async (req, res) => {
    try {
        const { title, author } = req.body;
        const result = await db.query('UPDATE books SET title = ?, author = ? WHERE id = ?', [title, author, req.params.id]);
        if (result[0].affectedRows > 0) {
            res.send('Book updated successfully');
        } else {
            res.status(404).send('Book not found');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Error updating book in database');
    }
});

app.delete('/books/:id', async (req, res) => {
    try {
        const result = await db.query('DELETE FROM books WHERE id = ?', [req.params.id]);
        if (result[0].affectedRows > 0) {
            res.send('Book deleted successfully');
        } else {
            res.status(404).send('Book not found');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Error deleting book from database');
    }
});

const PORT = process.env.PORT || 3000;
createBooksTable().then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(error => {
    console.error("Failed to create tables:", error);
    process.exit(1);
});