// Import Mongoose
const mongoose = require("mongoose");

// Define the Book Schema
const BookSchema = mongoose.Schema({
  title: {
    type: String,
    required: true, // Title is a required field
  },
  author: {
    type: String,
    required: true, // Author is a required field
  },
  price: {
    type: Number,
    default: 5, // Default price is 5 if not provided
  },
  image: {
    type: String,
    default: "default-image.jpg", // Default image if not provided
  },
});

// Export the Book model
module.exports = mongoose.model("Book", BookSchema);
