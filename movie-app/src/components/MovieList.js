import { useEffect, useReducer, useState, useMemo } from "react";

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

const filterMovies = (movies, filters) => {
  if (filters.length > 0) {
    movies.filter((movie) => filters.includes(movie.category));
  } else {
    return movies;
  }
};

const MovieList = ({ moviesRequest }) => {
  const [state, dispatch] = useReducer(reducer, moviesRequest);

  // Dispatch
  const deleteMovie = (id) => dispatch({ type: "DELETE", id: id });
  const like = (id) => dispatch({ type: "LIKE", id: id });
  const dislike = (id) => dispatch({ type: "DISLIKE", id: id });

  // filter categories
  const categories = useMemo(() => {
    return state.reduce((acc = [], movie) => {
      if (!acc.includes(movie.category)) {
        acc.push(movie.category);
      }
      return acc;
    }, []);
  }, [state]);

  // filter state
  const [selectedCategories, setSelectedCategories] = useState([]);

  // all movies
  const movies = [...state];

  // filtered movies
  const filteredMovies =
    selectedCategories.length > 0
      ? movies.filter((movie) => selectedCategories.includes(movie.category))
      : movies;

  useEffect(() => {
    //  handle when selectedCategory includes deleted category
    setSelectedCategories((selected) => {
      console.log(selected, categories);
      return selected.filter((category) => {
        console.log(category, categories.includes(category));
        return categories.includes(category);
      });
    });
  }, [categories]);

  console.log("state", state);
  console.log("categories:", categories);

  console.log("selectedCategories:", selectedCategories);

  return (
    <div>
      <Filters
        categories={categories}
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
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
