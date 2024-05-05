# Node.js Bookstore API

This is a simple RESTful bookstore API built with Node.js and Express. It allows users to manage a collection of books through basic CRUD operations. The project uses Docker to simplify setup and ensure a consistent environment across different machines.

## Features

- List all books
- Retrieve a book by its ID
- Add a new book
- Update an existing book
- Delete a book

## Prerequisites

Before you begin, ensure you have the following installed on your system:
- Node.js (version 14 or later)
- npm (usually comes with Node.js)
- Docker

## Getting Started

Follow these steps to get your local development environment set up:

### 1. Clone the Repository

Start by cloning this repository to your local machine:

```bash
git clone https://github.com/thiskk/docker-training.git

cd ms-bookstore-api
```

### 2. Start api with nodeJs

Start by using this command:

```bash
node app.js
```

### 3. API Endpoints

You can access the API at the following endpoints:

- GET /books: Retrieves a list of all books.
- GET /books/{id}: Retrieves a book by its ID.
- POST /books: Adds a new book. Requires JSON input specifying title and author.
- PUT /books/{id}: Updates an existing book. Requires JSON input for title and author.
- DELETE /books/{id}: Deletes a book by its ID.

### 4. Using the API
Here are some example curl commands to interact with the API:

- List All Books
  ```
  curl -X GET http://localhost:3000/books
  ```

- Get a Book by ID
  ```
  curl -X GET http://localhost:3000/books/1
  ```

- Add a New Book
  ```
  curl -X POST http://localhost:3000/books -H "Content-Type: application/json" -d '{"title": "New Book Title", "author": "Author Name"}'
  ```

- Update a Book
  ```
  curl -X PUT http://localhost:3000/books/1 -H "Content-Type: application/json" -d '{"title": "Updated Title", "author": "Updated Author"}'
  ```

- Delete a Book
  ```
  curl -X DELETE http://localhost:3000/books/1
  ```
