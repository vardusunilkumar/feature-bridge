import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./index.css";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Fetch individual movie details from the Node.js API based on the ID
    fetch(`http://localhost:4000/api/movies/${id}`)
      .then((response) => response.json())
      .then((data) => setMovie(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-detail-container">
      <h1>{movie.name}</h1>
      <p>Rating: {movie.rating}</p>
      <p>Released Date: {movie.releasedDate}</p>
      <p>Description: {movie.description}</p>
    </div>
  );
};

export default MovieDetail;
