import { useReducer, useState } from "react";

import MovieCard from "./MovieCard";
import Filters from "./Filters";

// Reducer
function reducer(state, action) {
  switch (action.type) {
    case "DELETE":
      return state.filter((movie) => movie.id !== action.id);

    case "LIKE":
      return state.map((movie) => {
        return movie.id === action.id
          ? { ...movie, likes: movie.likes + 1 }
          : movie;
      });

    case "DISLIKE":
      return state.map((movie) => {
        return movie.id === action.id
          ? { ...movie, dislikes: movie.dislikes + 1 }
          : movie;
      });

    default:
      throw new Error();
  }
}

const MovieList = ({ moviesRequest }) => {
  const [state, dispatch] = useReducer(reducer, moviesRequest);

  // Dispatch
  const deleteMovie = (id) => dispatch({ type: "DELETE", id: id });
  const like = (id) => dispatch({ type: "LIKE", id: id });
  const dislike = (id) => dispatch({ type: "DISLIKE", id: id });

  // filter categories
  const categories = state.reduce((acc = [], movie) => {
    if (!acc.includes(movie.category)) {
      acc.push(movie.category);
    }
    return acc;
  }, []);

  // filter state
  const [filters, setFilters] = useState([]);

  // all movies
  const movies = [...state];

  // filtered movies
  const filteredMovies =
    filters.length > 0
      ? movies.filter((movie) => filters.includes(movie.category))
      : movies;

  return (
    <div>
      <Filters
        categories={categories}
        filters={filters}
        setFilters={setFilters}
      />
      <div className="movie-grid">
        {filteredMovies.map((movie, index) => {
          return (
            <MovieCard
              movie={movie}
              index={index}
              key={movie.id}
              deleteMovie={deleteMovie}
              like={like}
              dislike={dislike}
            />
          );
        })}
        <div className="movie-card-fill"></div>
        <div className="movie-card-fill"></div>
        <div className="movie-card-fill"></div>
      </div>
    </div>
  );
};

export default MovieList;
