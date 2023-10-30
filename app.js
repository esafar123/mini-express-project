const express = require("express");
const booksRouter = require("./api/books/routers"); // Import the router
const connectDB = require("./database.js");
const app = express();
const PORT = process.env.PORT || 8000;

// Other middleware and configurations can be added here
app.use(express.json());

// Use the "Books" API router under the '/api' base URL
app.use("/api", booksRouter);

connectDB();
// Start the Express app
app.listen(PORT, () => {
  console.log(`App is running on port: ${PORT}`);
});
