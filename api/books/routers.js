const express = require("express");
const router = express.Router();
const {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
} = require("./controllers"); // Import the controller function

// Define the "Get All Books" route
router.get("/books", getAllBooks);
router.post("/books", createBook);
router.get("/books/:id", getBookById);
router.put("/books/:id", updateBook);
router.delete("/books/:id", deleteBook);

module.exports = router;
