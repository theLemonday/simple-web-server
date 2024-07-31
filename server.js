const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Middleware for parsing JSON bodies
app.use(express.json());

// Basic route
app.get("/", (req, res) => {
  res.send("Hello, Jenkins CI/CD!");
});

// Additional endpoint for testing
app.get("/status", (req, res) => {
  res.json({ status: "Server is running smoothly!" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
