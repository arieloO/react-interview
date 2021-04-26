import "./App.css";
import { useState, useEffect } from "react";
import { movies$ } from "./data/movies.js";
import MovieList from "./components/MovieList";

function App() {
    const [moviesRequest, setMoviesRequest] = useState(null);

    useEffect(() => {
        movies$.then((data) => setMoviesRequest(data));
    }, [moviesRequest]);

    // const deleteMovie = (id) => {
    //     console.log("delete this movie : ", id);
    //     let newState = movies.filter((movie) => movie.id !== id);
    //     setMovies(newState);
    // };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Movies !</h1>
            </header>
            {moviesRequest ? <MovieList movies={moviesRequest} /> : null}
        </div>
    );
}

export default App;
