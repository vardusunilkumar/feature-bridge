import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`}>
        <h2>{movie.name}</h2>
      </Link>
      <p>Rating: {movie.rating}</p>
      <p>Released Date: {movie.releasedDate}</p>
    </div>
  );
};

export default MovieCard;
