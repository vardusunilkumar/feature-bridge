const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// GET route
app.get("/api/get", (req, res) => {
  res.json({ message: "GET request received" });
});

// POST route with payload validation
app.post("/api/post", (req, res) => {
  const { data } = req.body;

  if (!data) {
    return res.status(400).json({ error: "Data is required" });
  }

  res.json({ message: "POST request received", data });
});

// Error handler for invalid routes
app.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});

// Error handler for other errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
