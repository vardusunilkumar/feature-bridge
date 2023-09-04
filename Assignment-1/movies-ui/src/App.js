import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Movies from "./components/Pages/Movies";
import MovieDetail from "./components/Pages/MovieDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Movies />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
