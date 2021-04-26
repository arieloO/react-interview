import { useEffect, useReducer } from "react";

import MovieCard from "./MovieCard";

// const deleteMovie = (array, id) => {
//     return array.filter((d) => d.id !== id);
// };

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

const MovieList = ({ movies }) => {
  const [state, dispatch] = useReducer(reducer, movies);

  // Delete movie
  const deleteMovie = (id) => dispatch({ type: "DELETE", id: id });

  // Like
  const like = (id) => dispatch({ type: "LIKE", id: id });
  const dislike = (id) => dispatch({ type: "DISLIKE", id: id });

  useEffect(() => {
    console.log("MovieList UseEffect");
  }, [state]);

  return (
    <div className="movie-grid">
      {state.map((movie, index) => {
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
  );
};

export default MovieList;
