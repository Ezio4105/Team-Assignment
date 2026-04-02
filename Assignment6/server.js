const express = require("express");
const app = express();

app.use(express.json());

// In-memory database
let books = [];

// GET all books
app.get("/books", (req, res) => {
  res.json(books);
});

// POST - Add new book
app.post("/books", (req, res) => {
  const { title, author } = req.body;

  if (!title || !author) {
    return res.status(400).json({ message: "Title and Author required" });
  }

  const newBook = {
    id: books.length + 1,
    title,
    author
  };

  books.push(newBook);
  res.status(201).json(newBook);
});

// Server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
