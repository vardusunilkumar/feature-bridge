const express = require("express");
const cors = require("cors");
const movies = require("./movies.json");

const app = express();
app.use(cors());

app.get("/api/movies", (req, res) => {
  res.json(movies);
});

app.get("/api/movies/:id", (req, res) => {
  const movieId = parseInt(req.params.id);
  const movie = movies.find((m) => m.id === movieId);

  if (!movie) {
    res.status(404).json({ error: "Movie not found" });
  } else {
    res.json(movie);
  }
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
