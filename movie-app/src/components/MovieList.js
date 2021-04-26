import { useReducer } from "react";

import MovieCard from "./MovieCard";

// const deleteMovie = (array, id) => {
//     return array.filter((d) => d.id !== id);
// };

function reducer(state, action) {
  switch (action.type) {
    case "delete":
      return state.filter((movie) => movie.id !== action.id);

    case "like":
      return state.map((movie) => {
        console.log(movie);
        return movie.id === action.id
          ? { ...movie, likes: movie.likes++ }
          : movie;
      });

    case "dislike":
      return state.map((movie) => {
        console.log(movie);
        return movie.id === action.id
          ? { ...movie, dislikes: movie.dislikes++ }
          : movie;
      });

    default:
      throw new Error();
  }
}

const MovieList = ({ movies }) => {
  const [state, dispatch] = useReducer(reducer, movies);

  // Delete movie
  const deleteMovie = (id) => dispatch({ type: "delete", id: id });

  // Like
  const like = (id) => dispatch({ type: "like", id: id });
  const dislike = (id) => dispatch({ type: "dislike", id: id });

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
