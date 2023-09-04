import React, { useEffect, useState } from "react";
import MovieCard from "../../MovieCard";

import "./index.css";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch movies from the Node.js API
    fetch("http://localhost:4000/api/movies")
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="movies-container">
      <h1>Movies</h1>
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Movies;
