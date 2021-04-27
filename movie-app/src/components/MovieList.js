import { useEffect, useReducer, useState, useMemo } from "react";

import MovieCard from "./MovieCard";
import NavOptions from "./NavOptions";
import NoMovies from "./NoMovies";

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

  // filter categories array
  //    useMemo prevents useEffect re-render, by memoizing the array
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

  //  handle when selectedCategory includes deleted category
  useEffect(() => {
    setSelectedCategories((selected) => {
      // returns all selected categories still included in categories
      return selected.filter((category) => categories.includes(category));
    });
  }, [categories]);

  //   pagination
  const [itemsPage, setItemsPage] = useState(8);
  const [page, setPage] = useState(1);
  const slice = [itemsPage * page - itemsPage, itemsPage * page];

  //   current page movies
  const currentPageMovies = filteredMovies.slice(...slice);

  // RETURN
  if (filteredMovies.length < 1) {
    return <NoMovies />;
  } else {
    return (
      <div>
        <NavOptions
          categories={categories}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          itemsPage={itemsPage}
          setItemsPage={setItemsPage}
        />
        <button
          className="page-button"
          onClick={() => setPage((page) => (page > 1 ? page - 1 : page))}
        >
          ◀︎
        </button>

        <div className="movie-grid">
          {currentPageMovies.map((movie, index) => {
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
        <button
          className="page-button increment-page"
          onClick={() =>
            setPage((page) =>
              page === Math.ceil((filteredMovies.length + 1) / itemsPage)
                ? page
                : page + 1
            )
          }
        >
          ◀︎
        </button>
      </div>
    );
  }
};

export default MovieList;
