// Import your Book model
const Book = require("../../models/Book");

// Controller function to get all books
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find(); // Retrieve all books from the database
    res.json(books); // Send the list of books as a JSON response
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching books." });
  }
};

// Controller function to get a single book by ID
const getBookById = async (req, res) => {
  const bookId = req.params.id; // Get the book ID from the request parameters
  try {
    const book = await Book.findById(bookId); // Find the book by its ID
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.json(book); // Send the book information as a JSON response
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching the book." });
  }
};

// Controller function to create a new book
const createBook = async (req, res) => {
  const { title, author, price, image } = req.body; // Get book details from the request body
  try {
    const newBook = await Book.create({ title, author, price, image });
    res.status(201).json(newBook); // Send the newly created book as a JSON response with a "201 Created" status code
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while creating the book." });
  }
};

// Controller function to update a book by ID
const updateBook = async (req, res) => {
  const bookId = req.params.id; // Get the book ID from the request parameters
  const updatedBookData = req.body; // Get the updated book details from the request body
  try {
    const updatedBook = await Book.findByIdAndUpdate(bookId, updatedBookData, {
      new: true, // Return the updated book
    });
    if (!updatedBook) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.json(updatedBook); // Send the updated book as a JSON response
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while updating the book." });
  }
};

// Controller function to delete a book by ID
const deleteBook = async (req, res) => {
  const bookId = req.params.id; // Get the book ID from the request parameters
  try {
    const deletedBook = await Book.findByIdAndRemove(bookId);
    if (!deletedBook) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.json(deletedBook); // Send the deleted book as a JSON response
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while deleting the book." });
  }
};

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
};
