import "./App.css";
import { useState, useEffect } from "react";
import { movies$ } from "./data/movies.js";
import MovieGrid from "./components/MovieGrid";

function App() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        movies$.then((data) => setMovies(data));
    }, []);

    const deleteMovie = (id) => {
        console.log("delete this movie : ", id);
        let newState = movies.filter((movie) => movie.id !== id);
        setMovies(newState);
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Movies !</h1>
            </header>
            <MovieGrid movies={movies} deleteMovie={deleteMovie} />
        </div>
    );
}

export default App;
